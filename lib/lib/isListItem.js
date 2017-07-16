'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isListItem;

var _draftJsUtils = require('draft-js-utils');

function isListItem(block) {
  var blockType = block.getType();
  return blockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM || blockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM;
}