/* @flow */

import React, {Component} from 'react';
import {EditorState, RichUtils} from 'draft-js';
import Constants from './Constants';
import StyleButton from './StyleButton';
import Dropdown from '../ui/Dropdown';

const {INLINE_STYLES, BLOCK_TYPES_DROPDOWN, BLOCK_TYPES_BUTTON} = Constants;

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
        {this._renderBlockTypeDropdown()}
        <div className="RichTextEditor-buttonGroup">
          {this._renderBlockTypeButtons()}
        </div>
        <div className="RichTextEditor-buttonGroup">
          {this._renderInlineStyleButtons()}
        </div>
      </div>
    );
  }

  _renderBlockTypeDropdown(): React.Element {
    let blockType = this._getCurrentBlockType();
    let choices = new Map(
      BLOCK_TYPES_DROPDOWN.map((type) => [type.style, type.label])
    );
    if (!choices.has(blockType)) {
      blockType = Array.from(choices.keys())[0];
    }
    return (
      <Dropdown
        choices={choices}
        selectedKey={blockType}
        onChange={this._toggleBlockType}
      />
    );
  }

  _renderBlockTypeButtons(): Array<React.Element> {
    let blockType = this._getCurrentBlockType();
    return BLOCK_TYPES_BUTTON.map((type, index) => (
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

  _getCurrentBlockType(): string {
    let {editorState} = this.props;
    let selection = editorState.getSelection();
    return editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
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
