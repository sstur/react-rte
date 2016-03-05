/* @flow */

import {BLOCK_TYPE, ENTITY_TYPE, INLINE_STYLE} from './Constants';
import getEntityRanges from './getEntityRanges';
import {Entity} from 'draft-js';

import type {ContentState, ContentBlock} from 'draft-js';

const {
  BOLD,
  CODE,
  ITALIC,
  STRIKETHROUGH,
  UNDERLINE,
} = INLINE_STYLE;

const CODE_INDENT = '    ';

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
          // Insert an additional line break if following opposite list type.
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
          // Insert an additional line break if following opposite list type.
          if (lastBlockType === BLOCK_TYPE.UNORDERED_LIST_ITEM) {
            this.insertLineBreaks(1);
          }
        }
        let indent = ' '.repeat(blockDepth * 2);
        // TODO: figure out what to do with two-digit numbers
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
    // To decide if we need to start over we need to backtrack (skipping list
    // items that are of greater depth)
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
      // Prevent element collapse if completely empty.
      // TODO: Replace with constant.
      return '\u200B';
    }
    let charMetaList = block.getCharacterList();
    let entityPieces = getEntityRanges(text, charMetaList);
    return entityPieces.map(([entityKey, stylePieces]) => {
      let content = stylePieces.map(([text, style]) => {
        // Don't allow empty inline elements.
        if (!text) {
          return '';
        }
        let content = encodeContent(text);
        if (style.has(BOLD)) {
          content = `**${content}**`;
        }
        if (style.has(UNDERLINE)) {
          // TODO: encode `+`?
          content = `++${content}++`;
        }
        if (style.has(ITALIC)) {
          content = `_${content}_`;
        }
        if (style.has(STRIKETHROUGH)) {
          // TODO: encode `~`?
          content = `~~${content}~~`;
        }
        if (style.has(CODE)) {
          content = '`' + content + '`';
        }
        return content;
      }).join('');
      let entity = entityKey ? Entity.get(entityKey) : null;
      if (entity != null && entity.getType() === ENTITY_TYPE.LINK) {
        let url = entity.getData().url || '';
        return `[${content}](${encodeURL(url)})`;
      } else {
        return content;
      }
    }).join('');
  }
}

function canHaveDepth(blockType: any): boolean {
  switch (blockType) {
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}

function encodeContent(text) {
  return text.replace(/[*_`]/g, '\\$&');
}

// Encode chars that would normally be allowed in a URL but would conflict with
// our markdown syntax: `[foo](http://foo/)`
function encodeURL(url) {
  return url.replace(/\)/g, '%29');
}

export default function stateToMarkdown(content: ContentState): string {
  return new MarkupGenerator(content).generate();
}
