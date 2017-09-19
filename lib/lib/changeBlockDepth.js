'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeBlockDepth;

var _draftJs = require('draft-js');

function changeBlockDepth(editorState, blockKey, newDepth) {
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var depth = block.getDepth();
  if (depth === newDepth) {
    return editorState;
  }
  var newBlock = block.set('depth', newDepth);
  var newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock)
  });
  return _draftJs.EditorState.push(editorState, newContent, 'adjust-depth');
}