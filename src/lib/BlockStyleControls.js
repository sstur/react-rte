/* @flow */

import React from 'react';
import Constants from './Constants';
import StyleButton from './StyleButton';

import type {EditorState} from 'draft-js';

const {BLOCK_TYPES} = Constants;

type Props = {
  editorState: EditorState;
  onToggle: Function;
};

export default function BlockStyleControls(props_: Props): React.Element {
  // There seems to be a bug in eslint-plugin-react that shows warning:
  // `react/prop-types [PROP_NAME] is missing in props validation`
  const {editorState, onToggle} = props_;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichTextEditor-controls">
      {BLOCK_TYPES.map((type, index) =>
        <StyleButton
          key={String(index)}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </div>
  );
}
