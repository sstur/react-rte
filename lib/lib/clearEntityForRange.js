'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearEntityForRange;

var _draftJs = require('draft-js');

function clearEntityForRange(editorState, blockKey, startOffset, endOffset) {
  var contentState = editorState.getCurrentContent();
  var blockMap = contentState.getBlockMap();
  var block = blockMap.get(blockKey);
  var charList = block.getCharacterList();
  var newCharList = charList.map(function (char, i) {
    if (i >= startOffset && i < endOffset) {
      return _draftJs.CharacterMetadata.applyEntity(char, null);
    } else {
      return char;
    }
  });
  var newBlock = block.set('characterList', newCharList);
  var newBlockMap = blockMap.set(blockKey, newBlock);
  var newContentState = contentState.set('blockMap', newBlockMap);
  return _draftJs.EditorState.push(editorState, newContentState, 'apply-entity');
}