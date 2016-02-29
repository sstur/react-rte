/* @flow */

import Constants from './Constants';
import Immutable, {OrderedSet} from 'immutable';

import type {CharacterMetadata, ContentState, ContentBlock} from 'draft-js';
import type {List} from 'immutable';

const EMPTY_SET = OrderedSet();
const {BLOCK_TYPE, INLINE_STYLE} = Constants;

const {
  BOLD,
  CODE,
  ITALIC,
  STRIKETHROUGH,
  UNDERLINE,
} = INLINE_STYLE;

// const {
//   LINK,
// } = Constants.ENTITY_TYPE;

type CharacterMetaList = List<CharacterMetadata>;
type EntityKey = ?string;
type Style = OrderedSet<string>;
type StylePiece = [string, Style];
type EntityPiece = [EntityKey, Array<StylePiece>];

const INDENT = '  ';

function getTag(blockType: number): string {
  switch (blockType) {
    case BLOCK_TYPE.HEADER_ONE:
      return 'h1';
    case BLOCK_TYPE.HEADER_TWO:
      return 'h2';
    case BLOCK_TYPE.HEADER_THREE:
      return 'h3';
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return 'li';
    case BLOCK_TYPE.BLOCKQUOTE:
      return 'blockquote';
    case BLOCK_TYPE.CODE:
      return 'code';
    default:
      return 'p';
  }
}

function getWrapperTag(blockType: number): ?string {
  switch (blockType) {
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
      return 'ul';
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return 'ol';
    case BLOCK_TYPE.CODE:
      return 'pre';
    default:
      return null;
  }
}

function canHaveDepth(blockType: number): boolean {
  switch (blockType) {
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}

function encodeContent(text: string): string {
  return text
    .split('&').join('&amp;')
    .split('<').join('&lt;')
    .split('>').join('&gt;')
    .split('\xA0').join('&nbsp;');
}

// function encodeAttr(text: string): string {
//   return text
//     .split('&').join('&amp;')
//     .split('<').join('&lt;')
//     .split('>').join('&gt;')
//     .split('"').join('&quot;');
// }

class MarkupGenerator {
  blocks: Array<ContentBlock>;
  contentState: ContentState;
  currentBlock: number;
  indentLevel: number;
  output: Array<string>;
  totalBlocks: number;
  wrapperTag: ?string;

  constructor(contentState: ContentState) {
    this.contentState = contentState;
  }

  generate(): string {
    this.output = [];
    this.blocks = this.contentState.getBlockMap().toArray();
    this.totalBlocks = this.blocks.length;
    this.currentBlock = 0;
    this.indentLevel = 0;
    this.wrapperTag = null;
    while (this.currentBlock < this.totalBlocks) {
      this.processBlock();
    }
    this.closeWrapperTag();
    return this.output.join('').trim();
  }

  processBlock() {
    let block = this.blocks[this.currentBlock];
    let blockType = block.getType();
    let newWrapperTag = getWrapperTag(blockType);
    if (this.wrapperTag !== newWrapperTag) {
      if (this.wrapperTag) {
        this.closeWrapperTag();
      }
      if (newWrapperTag) {
        this.openWrapperTag(newWrapperTag);
      }
    }
    let tag = getTag(blockType);
    this.indent();
    this.output.push(`<${tag}>${this.renderBlockContent(block)}`);
    // look ahead and see if we will nest list
    let nextBlock = this.getNextBlock();
    if (
      canHaveDepth(blockType) &&
      nextBlock &&
      nextBlock.getDepth() === block.getDepth() + 1
    ) {
      this.output.push(`\n`);
      // this is a litle hacky; temporarily stash our current wrapperTag and
      // render child list(s)
      let thisWrapperTag = this.wrapperTag;
      this.wrapperTag = null;
      this.indentLevel += 1;
      this.currentBlock += 1;
      this.processBlocksAtDepth(nextBlock.getDepth());
      this.wrapperTag = thisWrapperTag;
      this.indentLevel -= 1;
      this.indent();
    } else {
      this.currentBlock += 1;
    }
    this.output.push(`</${tag}>\n`);
  }

  processBlocksAtDepth(depth: number) {
    let block = this.blocks[this.currentBlock];
    while (block && block.getDepth() === depth) {
      this.processBlock();
      block = this.blocks[this.currentBlock];
    }
    this.closeWrapperTag();
  }

  getNextBlock(): ContentBlock {
    return this.blocks[this.currentBlock + 1];
  }

  openWrapperTag(wrapperTag: string) {
    this.wrapperTag = wrapperTag;
    this.indent();
    this.output.push(`<${wrapperTag}>\n`);
    this.indentLevel += 1;
  }

  closeWrapperTag() {
    if (this.wrapperTag) {
      this.indentLevel -= 1;
      this.indent();
      this.output.push(`</${this.wrapperTag}>\n`);
      this.wrapperTag = null;
    }
  }

  indent() {
    this.output.push(INDENT.repeat(this.indentLevel));
  }

  renderBlockContent(block: ContentBlock): string {
    let text = block.getText();
    if (text === '') {
      // prevent element collapse if completely empty
      return '<br/>';
    }
    text = this.preserveWhitespace(text);
    let charMetaList: CharacterMetaList = block.getCharacterList();
    let entityPieces = this.getEntityPieces(text, charMetaList);
    return entityPieces.map(([entityKey, stylePieces]) => {
      let content = stylePieces.map(([text, style]) => {
        let content = encodeContent(text);
        // These are reverse alphabetical by tag name.
        if (style.has(BOLD)) {
          content = `<strong>${content}</strong>`;
        }
        if (style.has(UNDERLINE)) {
          content = `<ins>${content}</ins>`;
        }
        if (style.has(ITALIC)) {
          content = `<em>${content}</em>`;
        }
        if (style.has(STRIKETHROUGH)) {
          content = `<del>${content}</del>`;
        }
        if (style.has(CODE)) {
          content = `<code>${content}</code>`;
        }
        return content;
      }).join('');
      return content;
      // let entity = entityKey ? DocumentEntity.get(entityKey) : null;
      // if (entity) {
      //   let data = entity.getData();
      //   return `<a href="${encodeAttr(data.url)}">${content}</a>`;
      // } else {
      //   return content;
      // }
    }).join('');
  }

  preserveWhitespace(text: string): string {
    let length = text.length;
    // prevent leading/trailing/consecutive whitespace collapse
    let newText = new Array(length);
    for (let i = 0; i < length; i++) {
      if (
        text[i] === ' ' &&
        (i === 0 || i === length - 1 || text[i - 1] === ' ')
      ) {
        newText[i] = '\xA0';
      } else {
        newText[i] = text[i];
      }
    }
    return newText.join('');
  }

  getEntityPieces(
    text: string,
    charMetaList: CharacterMetaList
  ): Array<EntityPiece> {
    // TODO: use EMPTY_SET here
    let charEntity = null;
    let prevCharEntity = null;
    let pieces = [];
    let pieceStart = 0;
    for (let i = 0, len = text.length; i < len; i++) {
      prevCharEntity = charEntity;
      let meta = charMetaList.get(i);
      charEntity = meta ? meta.getEntity() : null;
      if (i > 0 && charEntity !== prevCharEntity) {
        pieces.push([
          prevCharEntity,
          this.getStylePieces(
            text.slice(pieceStart, i),
            charMetaList.slice(pieceStart, i)
          ),
        ]);
        pieceStart = i;
      }
    }
    pieces.push([
      charEntity,
      this.getStylePieces(
        text.slice(pieceStart),
        charMetaList.slice(pieceStart)
      ),
    ]);
    return pieces;
  }

  getStylePieces(
    text: string,
    charMetaList: CharacterMetaList
  ): Array<StylePiece> {
    let charStyle = EMPTY_SET;
    let prevCharStyle = EMPTY_SET;
    let pieces = [];
    let pieceStart = 0;
    for (let i = 0, len = text.length; i < len; i++) {
      prevCharStyle = charStyle;
      let meta = charMetaList.get(i);
      charStyle = meta ? meta.getStyle() : EMPTY_SET;
      if (i > 0 && !Immutable.is(charStyle, prevCharStyle)) {
        pieces.push([text.slice(pieceStart, i), prevCharStyle]);
        pieceStart = i;
      }
    }
    pieces.push([text.slice(pieceStart), charStyle]);
    return pieces;
  }
}

export default function stateToHTML(content: ContentState): string {
  return new MarkupGenerator(content).generate();
}
