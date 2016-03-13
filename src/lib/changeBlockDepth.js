/* @flow */

import {EditorState} from 'draft-js';

export default function changeBlockDepth(
  editorState: EditorState,
  blockKey: string,
  newDepth: number,
): EditorState {
  let content = editorState.getCurrentContent();
  let block = content.getBlockForKey(blockKey);
  let depth = block.getDepth();
  if (depth === newDepth) {
    return editorState;
  }
  let newBlock = block.set('depth', newDepth);
  let newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock),
  });
  return EditorState.push(
    editorState,
    newContent,
    'adjust-depth'
  );
}
