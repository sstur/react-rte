/* @flow */
import React, {Component} from 'react';
import {CompositeDecorator, Editor, EditorState, RichUtils} from 'draft-js';
import getDefaultKeyBinding from 'draft-js/lib/getDefaultKeyBinding';
import changeBlockDepth from './lib/changeBlockDepth';
import changeBlockType from './lib/changeBlockType';
import isListItem from './lib/isListItem';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import EditorToolbar from './lib/EditorToolbar';
import EditorValue from './lib/EditorValue';
import LinkDecorator from './lib/LinkDecorator';
import cx from 'classnames';
import {EventEmitter} from 'events';
import {BLOCK_TYPE} from 'draft-js-tools';

import type {ContentBlock} from 'draft-js';

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: '#f3f3f3',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

type ChangeHandler = (value: EditorValue) => any;

type Props = {
  value: EditorValue;
  onChange: ChangeHandler;
};

export default class RichTextEditor extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._keyEmitter = new EventEmitter();
    this._focus = this._focus.bind(this);
    this._handleReturn = this._handleReturn.bind(this);
    this._customKeyHandler = this._customKeyHandler.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  render(): React.Element {
    let editorState = this.props.value.getEditorState();
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = cx({
      'rte-editor': true,
      'rte-hide-placeholder': this._shouldHidePlaceholder(),
    });
    return (
      <div className="rte-root">
        <EditorToolbar
          keyEmitter={this._keyEmitter}
          editorState={editorState}
          onChange={this._onChange}
          focusEditor={this._focus}
        />
        <div className={className}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleReturn={this._handleReturn}
            keyBindingFn={this._customKeyHandler}
            handleKeyCommand={this._handleKeyCommand}
            onChange={this._onChange}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }

  _shouldHidePlaceholder(): boolean {
    let editorState = this.props.value.getEditorState();
    let contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        return true;
      }
    }
    return false;
  }

  _handleReturn(event: Object): boolean {
    let editorState = this.props.value.getEditorState();
    if (isSoftNewlineEvent(event)) {
      this._onChange(RichUtils.insertSoftNewline(editorState));
      return true;
    }
    let selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      // If the cursor is in an empty list item, handle as special case.
      let contentState = editorState.getCurrentContent();
      let blockKey = selection.getStartKey();
      let block = contentState.getBlockForKey(blockKey);
      if (isListItem(block) && block.getLength() === 0) {
        let depth = block.getDepth();
        let newState = (depth === 0) ?
          changeBlockType(editorState, blockKey, BLOCK_TYPE.UNSTYLED) :
          changeBlockDepth(editorState, blockKey, depth - 1);
        this._onChange(newState);
        return true;
      }
    }
    return false;
  }

  _customKeyHandler(event: Object): ?string {
    // Allow toolbar to catch key combinations.
    let eventFlags = {};
    this._keyEmitter.emit('keypress', event, eventFlags);
    if (eventFlags.wasHandled) {
      return null;
    } else {
      return getDefaultKeyBinding(event);
    }
  }

  _handleKeyCommand(command: string): boolean {
    let editorState = this.props.value.getEditorState();
    let newEditorState = RichUtils.handleKeyCommand(editorState, command);
    if (newEditorState) {
      this._onChange(newEditorState);
      return true;
    } else {
      return false;
    }
  }

  _onChange(editorState: EditorState) {
    let newValue = this.props.value.setEditorState(editorState);
    this.props.onChange(newValue);
  }

  _focus() {
    this.refs.editor.focus();
  }
}

function getBlockStyle(block: ContentBlock): string {
  let result = 'rte-block';
  switch (block.getType()) {
    case 'unstyled':
      return result + ' rte-paragraph';
    case 'blockquote':
      return result + ' rte-blockquote';
    case 'code-block':
      return result + ' rte-code-block';
    default:
      return result;
  }
}

const decorator = new CompositeDecorator([LinkDecorator]);

function createEmptyValue(): EditorValue {
  return EditorValue.createEmpty(decorator);
}

function createValueFromString(markup: string, format: string): EditorValue {
  return EditorValue.createFromString(markup, format, decorator);
}

Object.assign(RichTextEditor, {
  EditorValue,
  decorator,
  createEmptyValue,
  createValueFromString,
});

export {EditorValue, decorator, createEmptyValue, createValueFromString};
