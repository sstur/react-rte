/* @flow */

import {EditorState} from 'draft-js';

export default function changeBlockType(
  editorState: EditorState,
  blockKey: string,
  newType: string,
): EditorState {
  let content = editorState.getCurrentContent();
  let block = content.getBlockForKey(blockKey);
  let type = block.getType();
  if (type === newType) {
    return editorState;
  }
  let newBlock = block.set('type', newType);
  let newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock),
  });
  return EditorState.push(
    editorState,
    newContent,
    'change-block-type'
  );
}
