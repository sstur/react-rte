'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getEntityAtCursor;
function getEntityAtOffset(block, offset) {
  var entityKey = block.getEntityAt(offset);
  if (entityKey == null) {
    return null;
  }
  var startOffset = offset;
  while (startOffset > 0 && block.getEntityAt(startOffset - 1) === entityKey) {
    startOffset -= 1;
  }
  var endOffset = startOffset;
  var blockLength = block.getLength();
  while (endOffset < blockLength && block.getEntityAt(endOffset + 1) === entityKey) {
    endOffset += 1;
  }
  return {
    entityKey: entityKey,
    blockKey: block.getKey(),
    startOffset: startOffset,
    endOffset: endOffset + 1
  };
}

function getEntityAtCursor(editorState) {
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  var startBlock = editorState.getCurrentContent().getBlockForKey(startKey);
  var startOffset = selection.getStartOffset();
  if (selection.isCollapsed()) {
    // Get the entity before the cursor (unless the cursor is at the start).
    return getEntityAtOffset(startBlock, startOffset === 0 ? startOffset : startOffset - 1);
  }
  if (startKey !== selection.getEndKey()) {
    return null;
  }
  var endOffset = selection.getEndOffset();
  var startEntityKey = startBlock.getEntityAt(startOffset);
  for (var i = startOffset; i < endOffset; i++) {
    var _entityKey = startBlock.getEntityAt(i);
    if (_entityKey == null || _entityKey !== startEntityKey) {
      return null;
    }
  }
  return {
    entityKey: startEntityKey,
    blockKey: startBlock.getKey(),
    startOffset: startOffset,
    endOffset: endOffset
  };
}