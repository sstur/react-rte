/* @flow */
import {EditorState} from 'draft-js';
import {OrderedMap} from 'immutable';

export default function getBlocksInSelection(
  editorState: EditorState,
): EditorState {
  let contentState = editorState.getCurrentContent();
  let blockMap = contentState.getBlockMap();
  let selection = editorState.getSelection();
  if (selection.isCollapsed()) {
    return new OrderedMap();
  }

  let startKey = selection.getStartKey();
  let endKey = selection.getEndKey();
  if (startKey === endKey) {
    return new OrderedMap({startKey: contentState.getBlockForKey(startKey)});
  }
  let blocksUntilEnd = blockMap.takeUntil((block, key) => key === endKey);
  return blocksUntilEnd.skipUntil((block, key) => key === startKey);
}
