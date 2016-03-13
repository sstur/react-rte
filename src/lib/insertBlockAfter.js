/* @flow */

import {ContentBlock, EditorState, genKey} from 'draft-js';

export default function insertBlockAfter(
  editorState: EditorState,
  blockKey: string,
  newType: string,
): EditorState {
  let content = editorState.getCurrentContent();
  let blockMap = content.getBlockMap();
  let block = blockMap.get(blockKey);
  let blocksBefore = blockMap.toSeq().takeUntil((v) => (v === block));
  let blocksAfter = blockMap.toSeq().skipUntil((v) => (v === block)).rest();
  let newBlockKey = genKey();
  let newBlock = new ContentBlock({
    key: newBlockKey,
    type: newType,
    text: '',
    characterList: block.getCharacterList().slice(0, 0),
    depth: 0,
  });
  let newBlockMap = blocksBefore.concat(
    [[blockKey, block], [newBlockKey, newBlock]],
    blocksAfter,
  ).toOrderedMap();
  let selection = editorState.getSelection();
  let newContent = content.merge({
    blockMap: newBlockMap,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: newBlockKey,
      anchorOffset: 0,
      focusKey: newBlockKey,
      focusOffset: 0,
      isBackward: false,
    }),
  });
  return EditorState.push(editorState, newContent, 'split-block');
}
