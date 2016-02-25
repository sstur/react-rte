/* @flow */

import React from 'react';
import Constants from './Constants';
import StyleButton from './StyleButton';

import type {EditorState} from 'draft-js';

const {INLINE_STYLES} = Constants;

type Props = {
  editorState: EditorState;
  onToggle: Function;
};

export default function InlineStyleControls(props_: Props): React.Element {
  // There seems to be a bug in eslint-plugin-react that shows warning:
  // `react/prop-types [PROP_NAME] is missing in props validation`
  const {editorState, onToggle} = props_;
  let currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className="RichTextEditor-controls">
      {INLINE_STYLES.map((type, index) =>
        <StyleButton
          key={String(index)}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </div>
  );
}
