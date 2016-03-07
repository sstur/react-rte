/* @flow */
import {hasCommandModifier} from 'draft-js/lib/KeyBindingUtil';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EditorState, Entity, RichUtils} from 'draft-js';
import {
  ENTITY_TYPE,
  INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
} from './Constants';
import StyleButton from './StyleButton';
import PopoverIconButton from '../ui/PopoverIconButton';
import ButtonGroup from '../ui/ButtonGroup';
import Dropdown from '../ui/Dropdown';
import IconButton from '../ui/IconButton';

import type {EventEmitter} from 'events';

type ChangeHandler = (state: EditorState) => any;

type Props = {
  editorState: EditorState;
  keyEmitter: EventEmitter;
  onChange: ChangeHandler;
  focusEditor: Function;
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
    this._selectBlockType = this._selectBlockType.bind(this);
    this._setLink = this._setLink.bind(this);
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
        {this._renderUndoRedo()}
        <ButtonGroup>
          {this._renderBlockTypeDropdown()}
        </ButtonGroup>
        <ButtonGroup>
          {this._renderLinkButton()}
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
        onChange={this._selectBlockType}
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

  _renderLinkButton(): React.Element {
    let {editorState} = this.props;
    let selection = editorState.getSelection();
    let hasSelection = !selection.isCollapsed();
    return (
      <PopoverIconButton
        label="Link"
        iconName="link"
        isDisabled={!hasSelection}
        showPopover={this.state.showLinkInput}
        onTogglePopover={this._toggleShowLinkInput}
        onSubmit={this._setLink}
      />
    );
  }

  _renderUndoRedo(): React.Element {
    let {editorState} = this.props;
    let canUndo = editorState.getUndoStack().size;
    let canRedo = editorState.getRedoStack().size;
    return (
      <ButtonGroup>
        <IconButton
          label="Undo"
          iconName="undo"
          isDisabled={!canUndo}
          onClick={this._undo}
          focusOnClick={false}
        />
        <IconButton
          label="Redo"
          iconName="redo"
          isDisabled={!canRedo}
          onClick={this._redo}
          focusOnClick={false}
        />
      </ButtonGroup>
    );
  }

  _onKeypress(event: Object, eventFlags: Object) {
    // Catch cmd+k for use with link insertion.
    if (hasCommandModifier(event) && event.keyCode === 75) {
      // TODO: Ensure there is some text selected.
      this.setState({showLinkInput: true});
      eventFlags.wasHandled = true;
    }
  }

  _toggleShowLinkInput(event: ?Object) {
    let isShowing = this.state.showLinkInput;
    // If this is a hide request, decide if we should focus the editor.
    if (isShowing) {
      let shouldFocusEditor = true;
      if (event && event.type === 'click') {
        let editorRoot = ReactDOM.findDOMNode(this).parentNode;
        let {activeElement} = document;
        let wasClickAway = (activeElement == null || activeElement === document.body);
        if (!wasClickAway && !editorRoot.contains(activeElement)) {
          shouldFocusEditor = false;
        }
      }
      if (shouldFocusEditor) {
        this.props.focusEditor();
      }
    }
    this.setState({showLinkInput: !isShowing});
  }

  _setLink(url: string) {
    let {editorState} = this.props;
    let selection = editorState.getSelection();
    let entityKey = Entity.create(ENTITY_TYPE.LINK, 'MUTABLE', {url});
    this.setState({showLinkInput: false});
    this.props.onChange(
      RichUtils.toggleLink(editorState, selection, entityKey)
    );
    this._focusEditor();
  }

  _getCurrentBlockType(): string {
    let {editorState} = this.props;
    let selection = editorState.getSelection();
    return editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
  }

  _selectBlockType() {
    this._toggleBlockType(...arguments);
    this._focusEditor();
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

  _focusEditor() {
    // Hacky: Wait to focus the editor so we don't lose selection.
    setTimeout(() => {
      this.props.focusEditor();
    }, 50);
  }
}
