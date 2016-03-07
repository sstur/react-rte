/* @flow */
import {hasCommandModifier} from 'draft-js/lib/KeyBindingUtil';

import React, {Component} from 'react';
import {EditorState, RichUtils} from 'draft-js';
import {
  INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
} from './Constants';
import StyleButton from './StyleButton';
import LinkButton from './LinkButton';
import ButtonGroup from '../ui/ButtonGroup';
import Dropdown from '../ui/Dropdown';
import IconButton from '../ui/IconButton';

import type {EventEmitter} from 'events';

type ChangeHandler = (state: EditorState) => any;

type Props = {
  editorState: EditorState;
  keyEmitter: EventEmitter;
  onChange: ChangeHandler;
};

export default class EditorToolbar extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this.state = {
      showLinkInput: false,
    };
    this._onKeypress = this._onKeypress.bind(this);
    this._redo = this._redo.bind(this);
    this._toggleBlockType = this._toggleBlockType.bind(this);
    this._toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this._toggleShowLinkInput = this._toggleShowLinkInput.bind(this);
    this._undo = this._undo.bind(this);
  }

  componentWillMount() {
    // Technically, we should also attach/detach event listeners when the
    // `keyEmitter` prop changes.
    this.props.keyEmitter.on('keypress', this._onKeypress);
  }

  componentWillUnmount() {
    this.props.keyEmitter.removeListener('keypress', this._onKeypress);
  }

  render(): React.Element {
    return (
      <div className="rte-toolbar">
        <ButtonGroup>
          <IconButton
            label="Undo"
            iconName="undo"
            onClick={this._undo}
            focusOnClick={false}
          />
          <IconButton
            label="Redo"
            iconName="redo"
            onClick={this._redo}
            focusOnClick={false}
          />
        </ButtonGroup>
        <ButtonGroup>
          {this._renderBlockTypeDropdown()}
        </ButtonGroup>
        <ButtonGroup>
          <LinkButton
            showInput={this.state.showLinkInput}
            onToggle={this._toggleShowLinkInput}
          />
        </ButtonGroup>
        <ButtonGroup>
          {this._renderBlockTypeButtons()}
        </ButtonGroup>
        <ButtonGroup>
          {this._renderInlineStyleButtons()}
        </ButtonGroup>
      </div>
    );
  }

  _renderBlockTypeDropdown(): React.Element {
    let blockType = this._getCurrentBlockType();
    let choices = new Map(
      BLOCK_TYPE_DROPDOWN.map((type) => [type.style, type.label])
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
    return BLOCK_TYPE_BUTTONS.map((type, index) => (
      <StyleButton
        key={String(index)}
        isActive={type.style === blockType}
        label={type.label}
        onToggle={this._toggleBlockType}
        style={type.style}
      />
    ));
  }

  _renderInlineStyleButtons(): Array<React.Element> {
    let {editorState} = this.props;
    let currentStyle = editorState.getCurrentInlineStyle();
    return INLINE_STYLE_BUTTONS.map((type, index) => (
      <StyleButton
        key={String(index)}
        isActive={currentStyle.has(type.style)}
        label={type.label}
        onToggle={this._toggleInlineStyle}
        style={type.style}
      />
    ));
  }

  _onKeypress(event: Object, eventFlags: Object) {
    // Catch cmd+k for use with link insertion.
    if (hasCommandModifier(event) && event.keyCode === 75) {
      // TODO: Ensure there is some text selected.
      this.setState({showLinkInput: true});
      eventFlags.wasHandled = true;
    }
  }

  _toggleShowLinkInput() {
    this.setState({
      showLinkInput: !this.state.showLinkInput,
    });
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

  _undo() {
    let {editorState} = this.props;
    this.props.onChange(
      EditorState.undo(editorState)
    );
  }

  _redo() {
    let {editorState} = this.props;
    this.props.onChange(
      EditorState.redo(editorState)
    );
  }
}
