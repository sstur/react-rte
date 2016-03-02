/* @flow */

import {BLOCK_TYPE, INLINE_STYLE} from './Constants';
import Immutable, {OrderedSet} from 'immutable';

import type {ContentState, ContentBlock} from 'draft-js';

const EMPTY_SET = OrderedSet();

const {
  BOLD,
  CODE,
  ITALIC,
  STRIKETHROUGH,
  UNDERLINE,
} = INLINE_STYLE;

const CODE_INDENT = '    ';

function canHaveDepth(blockType: any): boolean {
  switch (blockType) {
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}

function escape(text) {
  return text.replace(/[*_`]/g, '\\$&');
}

class MarkupGenerator {
  blocks: Array<ContentBlock>;
  contentState: ContentState;
  currentBlock: number;
  output: Array<string>;
  totalBlocks: number;
  listItemCounts: Object;

  constructor(contentState: ContentState) {
    this.contentState = contentState;
  }

  generate(): string {
    this.output = [];
    this.blocks = this.contentState.getBlockMap().toArray();
    this.totalBlocks = this.blocks.length;
    this.currentBlock = 0;
    this.listItemCounts = {};
    while (this.currentBlock < this.totalBlocks) {
      this.processBlock();
    }
    return this.output.join('');
  }

  processBlock() {
    let block = this.blocks[this.currentBlock];
    let blockType = block.getType();
    switch (blockType) {
      case BLOCK_TYPE.HEADER_ONE: {
        this.insertLineBreaks(1);
        this.output.push('# ' + this.renderBlockContent(block) + '\n');
        break;
      }
      case BLOCK_TYPE.HEADER_TWO: {
        this.insertLineBreaks(1);
        this.output.push('## ' + this.renderBlockContent(block) + '\n');
        break;
      }
      case BLOCK_TYPE.HEADER_THREE: {
        this.insertLineBreaks(1);
        this.output.push('### ' + this.renderBlockContent(block) + '\n');
        break;
      }
      case BLOCK_TYPE.UNORDERED_LIST_ITEM: {
        let blockDepth = block.getDepth();
        let lastBlock = this.getLastBlock();
        let lastBlockType = lastBlock ? lastBlock.getType() : null;
        let lastBlockDepth = lastBlock && canHaveDepth(lastBlockType) ?
          lastBlock.getDepth() :
          null;
        if (
          lastBlockType !== blockType &&
          lastBlockDepth !== blockDepth - 1
        ) {
          this.insertLineBreaks(1);
          // insert an additional line break if following opposite list type
          if (lastBlockType === BLOCK_TYPE.ORDERED_LIST_ITEM) {
            this.insertLineBreaks(1);
          }
        }
        let indent = ' '.repeat(block.depth * 2);
        this.output.push(
          indent + '- ' + this.renderBlockContent(block) + '\n'
        );
        break;
      }
      case BLOCK_TYPE.ORDERED_LIST_ITEM: {
        let blockDepth = block.getDepth();
        let lastBlock = this.getLastBlock();
        let lastBlockType = lastBlock ? lastBlock.getType() : null;
        let lastBlockDepth = lastBlock && canHaveDepth(lastBlockType) ?
          lastBlock.getDepth() :
          null;
        if (lastBlockType !== blockType && lastBlockDepth !== blockDepth - 1) {
          this.insertLineBreaks(1);
          // insert an additional line break if following opposite list type
          if (lastBlockType === BLOCK_TYPE.UNORDERED_LIST_ITEM) {
            this.insertLineBreaks(1);
          }
        }
        let indent = ' '.repeat(blockDepth * 2);
        // todo: figure out what to do with two-digit numbers
        let count = this.getListItemCount(block) % 10;
        this.output.push(
          indent + `${count}. ` + this.renderBlockContent(block) + '\n'
        );
        break;
      }
      case BLOCK_TYPE.BLOCKQUOTE: {
        this.insertLineBreaks(1);
        this.output.push(' > ' + this.renderBlockContent(block) + '\n');
        break;
      }
      case BLOCK_TYPE.CODE: {
        this.insertLineBreaks(1);
        this.output.push(CODE_INDENT + this.renderBlockContent(block) + '\n');
        break;
      }
      default: {
        this.insertLineBreaks(1);
        this.output.push(this.renderBlockContent(block) + '\n');
        break;
      }
    }
    this.currentBlock += 1;
  }

  getLastBlock(): ContentBlock {
    return this.blocks[this.currentBlock - 1];
  }

  getNextBlock(): ContentBlock {
    return this.blocks[this.currentBlock + 1];
  }

  getListItemCount(block: ContentBlock): number {
    let blockType = block.getType();
    let blockDepth = block.getDepth();
    // to decide if we need to start over we need to backtrack skipping list
    // items that are of greater depth
    let index = this.currentBlock - 1;
    let prevBlock = this.blocks[index];
    while (
      prevBlock &&
      canHaveDepth(prevBlock.getType()) &&
      prevBlock.getDepth() > blockDepth
    ) {
      index -= 1;
      prevBlock = this.blocks[index];
    }
    if (
      !prevBlock ||
      prevBlock.getType() !== blockType ||
      prevBlock.getDepth() !== blockDepth
    ) {
      this.listItemCounts[blockDepth] = 0;
    }
    return (
      this.listItemCounts[blockDepth] = this.listItemCounts[blockDepth] + 1
    );
  }

  insertLineBreaks() {
    if (this.currentBlock > 0) {
      this.output.push('\n');
    }
  }

  renderBlockContent(block: ContentBlock): string {
    let text = block.getText();
    if (text === '') {
      // prevent element collapse if completely empty
      return '\u200B';
    }
    let charMeta = block.getCharacterList();
    let charStyle = EMPTY_SET;
    let prevCharStyle = EMPTY_SET;
    let pieces = [];
    let pieceStart = 0;
    for (let i = 0, len = text.length; i < len; i++) {
      prevCharStyle = charStyle;
      let meta = charMeta.get(i);
      charStyle = meta ? meta.getStyle() : EMPTY_SET;
      if (i > 0 && !Immutable.is(charStyle, prevCharStyle)) {
        pieces.push([text.slice(pieceStart, i), prevCharStyle]);
        pieceStart = i;
      }
    }
    pieces.push([text.slice(pieceStart), charStyle]);
    return pieces.map(([text, style]) => {
      if (!text) {
        // don't allow empty inline elements
        return '';
      }
      text = escape(text);
      if (style.has(BOLD)) {
        text = `**${text}**`;
      }
      if (style.has(UNDERLINE)) {
        text = `++${text}++`;
      }
      if (style.has(ITALIC)) {
        text = `_${text}_`;
      }
      if (style.has(STRIKETHROUGH)) {
        text = `~~${text}~~`;
      }
      if (style.has(CODE)) {
        text = '`' + text + '`';
      }
      return text;
    }).join('');
  }

}

export default function stateToMarkdown(content: ContentState): string {
  return new MarkupGenerator(content).generate();
}
