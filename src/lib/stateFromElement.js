/* @flow */

import {
  CharacterMetadata,
  ContentBlock,
  ContentState,
  EditorState,
  Entity,
  genKey,
  SelectionState,
} from 'draft-js';
import {List, OrderedMap, OrderedSet, Repeat, Seq, Stack} from 'immutable';
import {BLOCK_TYPE, INLINE_STYLE} from './Constants';
import {NODE_TYPE_ELEMENT, NODE_TYPE_TEXT} from './SyntheticDOM';

import type {Node as SyntheticNode} from './SyntheticDOM';

type DOMNode = SyntheticNode | Node;

type CharacterMetaSeq = Seq<CharacterMetadata>;
type StyleSet = OrderedSet;
type BlockMap = OrderedMap<string, ContentBlock>;

type TextFragment = {
  text: string;
  characterMeta: CharacterMetaSeq;
};

// A ParsedBlock has two purposes:
//   1) to keep data about the block (textFragments, type)
//   2) to act as some context for storing parser state as we parse its contents
type ParsedBlock = {
  tagName: string;
  textFragments: Array<TextFragment>;
  type: string;
  // a stack in which the last item represents the styles that will apply
  // to any text node descendants
  styleStack: Array<StyleSet>;
  entityStack: Array<?Entity>;
  depth: number;
};

const {
  UNSTYLED,
  UNORDERED_LIST_ITEM,
  ORDERED_LIST_ITEM,
  BLOCKQUOTE,
  HEADER_ONE,
  HEADER_TWO,
  CODE: CODE_BLOCK,
} = BLOCK_TYPE;

const NO_STYLE = OrderedSet();
const NO_ENTITY = null;

const {
  BOLD,
  ITALIC,
  UNDERLINE,
  CODE: MONOSPACE,
  STRIKETHROUGH,
} = INLINE_STYLE;

const EMPTY_BLOCK = new ContentBlock({
  key: genKey(),
  text: '',
  type: UNSTYLED,
  characterList: List(),
  depth: 0,
});

const LINE_BREAKS = /(\r\n|\r|\n)/g;

// TODO: Move this out to a module.
const INLINE_ELEMENTS = {
  a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1,
  canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1,
  embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1,
  label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1,
  progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1,
  span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, var: 1,
  video: 1, wbr: 1, acronym: 1, applet: 1, basefont: 1, big: 1, font: 1,
  isindex: 1, strike: 1, style: 1, tt: 1,
};

// These elements are special because they cannot contain text as a direct
// child (or cannot contain childNodes at all).
const SPECIAL_ELEMENTS = {
  area: 1, base: 1, br: 1, col: 1, colgroup: 1, command: 1, dl: 1, embed: 1,
  head: 1, hgroup: 1, hr: 1, iframe: 1, img: 1, input: 1, keygen: 1, link: 1,
  meta: 1, ol: 1, optgroup: 1, option: 1, param: 1, script: 1, select: 1,
  source: 1, style: 1, table: 1, tbody: 1, textarea: 1, tfoot: 1, thead: 1,
  title: 1, tr: 1, track: 1, ul: 1, wbr: 1, basefont: 1, dialog: 1, dir: 1,
  isindex: 1,
};

class BlockGenerator {
  blockStack: Array<ParsedBlock>;
  blockList: Array<ParsedBlock>;
  depth: number;

  constructor() {
    // this represents the hierarchy as we traverse nested elements; for
    // example [body, ul, li] where we must know li's parent type (ul or ol)
    this.blockStack = [];
    // this is a linear list of blocks that will form the output; for example
    // [body, p, li, li, blockquote]
    this.blockList = [];
    this.depth = 0;
  }

  process(element: DOMNode): Array<ContentBlock> {
    this.processBlockElement(element);
    let contentBlocks = [];
    this.blockList.forEach((block) => {
      let {text, characterMeta} = concatFragments(block.textFragments);
      // If this block contains only a soft linebreak then don't discard it
      let includeEmptyBlock = (text === '\r');
      if (block.tagName === 'pre') {
        ({text, characterMeta} = trimLeadingNewline(text, characterMeta));
      } else {
        ({text, characterMeta} = collapseWhiteSpace(text, characterMeta));
      }
      // discard empty blocks (unless otherwise specified)
      if (text.length || includeEmptyBlock) {
        contentBlocks.push(
          new ContentBlock({
            key: genKey(),
            text: text,
            type: block.type,
            characterList: characterMeta.toList(),
            depth: block.depth,
          })
        );
      }
    });
    if (contentBlocks.length) {
      return contentBlocks;
    } else {
      return [EMPTY_BLOCK];
    }
  }

  getBlockTypeFromTagName(tagName: string): string {
    switch (tagName) {
      case 'li': {
        let parent = this.blockStack.slice(-1)[0];
        return (parent.tagName === 'ol') ?
          ORDERED_LIST_ITEM :
          UNORDERED_LIST_ITEM;
      }
      case 'blockquote': {
        return BLOCKQUOTE;
      }
      case 'h1': {
        return HEADER_ONE;
      }
      case 'h2': {
        return HEADER_TWO;
      }
      case 'pre': {
        return CODE_BLOCK;
      }
      default: {
        return UNSTYLED;
      }
    }
  }

  processBlockElement(element: DOMNode) {
    let tagName = element.nodeName.toLowerCase();
    let type = this.getBlockTypeFromTagName(tagName);
    let hasDepth = canHaveDepth(type);
    let allowRender = !SPECIAL_ELEMENTS.hasOwnProperty(tagName);
    let block: ParsedBlock = {
      tagName: tagName,
      textFragments: [],
      type: type,
      styleStack: [NO_STYLE],
      entityStack: [NO_ENTITY],
      depth: hasDepth ? this.depth : 0,
    };
    if (allowRender) {
      this.blockList.push(block);
      if (hasDepth) {
        this.depth += 1;
      }
    }
    this.blockStack.push(block);
    if (element.childNodes != null) {
      Array.from(element.childNodes).forEach(this.processNode, this);
    }
    this.blockStack.pop();
    if (allowRender && hasDepth) {
      this.depth -= 1;
    }
  }

  processInlineElement(element: DOMNode) {
    let tagName = element.nodeName.toLowerCase();
    if (tagName === 'br') {
      return this.processText('\r');
    }
    let block = this.blockStack.slice(-1)[0];
    let style = block.styleStack.slice(-1)[0];
    let newStyle = addStyleFromTagName(style, tagName);
    block.styleStack.push(newStyle);
    let entityKey = null;
    if (tagName === 'a') {
      let href = element.getAttribute('href');
      if (href != null) {
        entityKey = Entity.create('LINK', 'MUTABLE', {href});
      }
    }
    block.entityStack.push(entityKey);
    if (element.childNodes != null) {
      Array.from(element.childNodes).forEach(this.processNode, this);
    }
    block.entityStack.pop();
    block.styleStack.pop();
  }

  processTextNode(node: DOMNode) {
    let text = node.nodeValue;
    // This is important because we will use \r as a placeholder.
    text = text.replace(LINE_BREAKS, '\n');
    // Replace zero-width space (used as a placeholder in markdown) with a
    // soft linebreak.
    text = text.split('\u200B').join('\r');
    this.processText(text);
  }

  processText(text: string) {
    let block = this.blockStack.slice(-1)[0];
    let style = block.styleStack.slice(-1)[0];
    let entity = block.entityStack.slice(-1)[0];
    let charMetadata = CharacterMetadata.create({
      style: style,
      entity: entity,
    });
    block.textFragments.push({
      text: text,
      characterMeta: Repeat(charMetadata, text.length),
    });
  }

  processNode(node: DOMNode) {
    if (node.nodeType === NODE_TYPE_ELEMENT) {
      let tagName = node.nodeName.toLowerCase();
      if (INLINE_ELEMENTS.hasOwnProperty(tagName)) {
        this.processInlineElement(node);
      } else {
        this.processBlockElement(node);
      }
    } else if (node.nodeType === NODE_TYPE_TEXT) {
      this.processTextNode(node);
    }
  }
}

function trimLeadingNewline(text: string, characterMeta: CharacterMetaSeq): TextFragment {
  if (text.charAt(0) === '\n') {
    text = text.slice(1);
    characterMeta = characterMeta.slice(1);
  }
  return {text, characterMeta};
}

function trimLeadingSpace(text: string, characterMeta: CharacterMetaSeq): TextFragment {
  while (text.charAt(0) === ' ') {
    text = text.slice(1);
    characterMeta = characterMeta.slice(1);
  }
  return {text, characterMeta};
}

function trimTrailingSpace(text: string, characterMeta: CharacterMetaSeq): TextFragment {
  while (text.slice(-1) === ' ') {
    text = text.slice(0, -1);
    characterMeta = characterMeta.slice(0, -1);
  }
  return {text, characterMeta};
}

function collapseWhiteSpace(text: string, characterMeta: CharacterMetaSeq): TextFragment {
  text = text.replace(/[ \t\r\n]/g, ' ');
  ({text, characterMeta} = trimLeadingSpace(text, characterMeta));
  ({text, characterMeta} = trimTrailingSpace(text, characterMeta));
  let i = text.length;
  while (i--) {
    if (text.charAt(i) === ' ' && text.charAt(i - 1) === ' ') {
      text = text.slice(0, i) + text.slice(i + 1);
      characterMeta = characterMeta.slice(0, i)
        .concat(characterMeta.slice(i + 1));
    }
  }
  return {text, characterMeta};
}

function canHaveDepth(blockType: string): boolean {
  switch (blockType) {
    case UNORDERED_LIST_ITEM:
    case ORDERED_LIST_ITEM: {
      return true;
    }
    default: {
      return false;
    }
  }
}

function concatFragments(fragments: Array<TextFragment>): TextFragment {
  let text = '';
  let characterMeta = Seq();
  fragments.forEach((textFragment: TextFragment) => {
    text = text + textFragment.text;
    characterMeta = characterMeta.concat(textFragment.characterMeta);
  });
  return {text, characterMeta};
}


function addStyleFromTagName(styleSet: StyleSet, tagName: string): StyleSet {
  switch (tagName) {
    case 'b':
    case 'strong': {
      styleSet = styleSet.add(BOLD);
      break;
    }
    case 'i':
    case 'em': {
      styleSet = styleSet.add(ITALIC);
      break;
    }
    case 'ins': {
      styleSet = styleSet.add(UNDERLINE);
      break;
    }
    case 'code': {
      styleSet = styleSet.add(MONOSPACE);
      break;
    }
    case 'del': {
      styleSet = styleSet.add(STRIKETHROUGH);
      break;
    }
  }
  return styleSet;
}

function createBlockMap(blocks: Array<ContentBlock>): BlockMap {
  return OrderedMap(
    blocks.map(
      (block) => [block.getKey(), block]
    )
  );
}

function createEmptySelectionState(key: string): SelectionState {
  return new SelectionState({
    anchorKey: key,
    anchorOffset: 0,
    focusKey: key,
    focusOffset: 0,
    isBackward: false,
    hasFocus: false,
  });
}

export default function stateFromElement(
  element: DOMNode
): EditorState {
  let blocks = new BlockGenerator().process(element);
  let selectionState = createEmptySelectionState(blocks[0].getKey());
  let contentState = new ContentState({
    blockMap: createBlockMap(blocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState,
  });
  return EditorState.create({
    currentContent: contentState,
    undoStack: Stack(),
    redoStack: Stack(),
    decorator: null,
    selection: selectionState,
  });
}
