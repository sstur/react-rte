/* @flow */
import {CharacterMetadata, EditorState} from 'draft-js';

export default function clearEntityForRange(
  editorState: EditorState,
  blockKey: string,
  startOffset: number,
  endOffset: number,
): EditorState {
  let contentState = editorState.getCurrentContent();
  let blockMap = contentState.getBlockMap();
  let block = blockMap.get(blockKey);
  let charList = block.getCharacterList();
  let newCharList = charList.map((char: CharacterMetadata, i) => {
    if (i >= startOffset && i < endOffset) {
      return CharacterMetadata.applyEntity(char, null);
    } else {
      return char;
    }
  });
  let newBlock = block.set('characterList', newCharList);
  let newBlockMap = blockMap.set(blockKey, newBlock);
  let newContentState = contentState.set('blockMap', newBlockMap);
  return EditorState.push(editorState, newContentState, 'apply-entity');
}
