/* @flow */

import React, {Component} from 'react';
import {EditorState, RichUtils} from 'draft-js';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

type ChangeHandler = (state: EditorState) => any;

type Props = {
  editorState: EditorState;
  onChange: ChangeHandler;
};

export default class EditorToolbar extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._toggleBlockType = this._toggleBlockType.bind(this);
    this._toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  render(): React.Element {
    let {editorState} = this.props;
    return (
      <div>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this._toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this._toggleInlineStyle}
        />
      </div>
    );
  }

  _toggleBlockType(blockType: string) {
    this.props.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle: string) {
    this.props.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }
}
