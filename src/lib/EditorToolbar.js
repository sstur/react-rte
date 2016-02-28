/* @flow */

import React, {Component} from 'react';
import {EditorState, RichUtils} from 'draft-js';
import Constants from './Constants';
import StyleButton from './StyleButton';

const {BLOCK_TYPES, INLINE_STYLES} = Constants;

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
    return (
      <div className="RichTextEditor-toolbar">
        <div className="RichTextEditor-buttonGroup">
          {this._renderBlockTypeButtons()}
        </div>
        <div className="RichTextEditor-buttonGroup">
          {this._renderInlineStyleButtons()}
        </div>
      </div>
    );
  }

  _renderBlockTypeButtons(): Array<React.Element> {
    let {editorState} = this.props;
    let selection = editorState.getSelection();
    let blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return BLOCK_TYPES.map((type, index) => (
      <StyleButton
        key={String(index)}
        active={type.style === blockType}
        label={type.label}
        onToggle={this._toggleBlockType}
        style={type.style}
      />
    ));
  }

  _renderInlineStyleButtons(): Array<React.Element> {
    let {editorState} = this.props;
    let currentStyle = editorState.getCurrentInlineStyle();
    return INLINE_STYLES.map((type, index) => (
      <StyleButton
        key={String(index)}
        active={currentStyle.has(type.style)}
        label={type.label}
        onToggle={this._toggleInlineStyle}
        style={type.style}
      />
    ));
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
