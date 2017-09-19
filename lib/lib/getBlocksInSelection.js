'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBlocksInSelection;

var _draftJs = require('draft-js');

var _immutable = require('immutable');

function getBlocksInSelection(editorState) {
  var contentState = editorState.getCurrentContent();
  var blockMap = contentState.getBlockMap();
  var selection = editorState.getSelection();
  if (selection.isCollapsed()) {
    return new _immutable.OrderedMap();
  }

  var startKey = selection.getStartKey();
  var endKey = selection.getEndKey();
  if (startKey === endKey) {
    return new _immutable.OrderedMap({ startKey: contentState.getBlockForKey(startKey) });
  }
  var blocksUntilEnd = blockMap.takeUntil(function (block, key) {
    return key === endKey;
  });
  return blocksUntilEnd.skipUntil(function (block, key) {
    return key === startKey;
  });
}