'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeBlockType;

var _draftJs = require('draft-js');

function changeBlockType(editorState, blockKey, newType) {
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var type = block.getType();
  if (type === newType) {
    return editorState;
  }
  var newBlock = block.set('type', newType);
  var newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock)
  });
  return _draftJs.EditorState.push(editorState, newContent, 'change-block-type');
}