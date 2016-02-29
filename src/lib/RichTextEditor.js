/* @flow */
import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import EditorToolbar from './EditorToolbar';
import EditorValue from './EditorValue';
import cx from 'classnames';

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  let result = 'RichTextEditor-block';
  switch (block.getType()) {
    case 'unstyled':
      return result + ' RichTextEditor-paragraph';
    case 'blockquote':
      return result + ' RichTextEditor-blockquote';
    default:
      return result;
  }
}

type ChangeHandler = (value: EditorValue) => any;

type Props = {
  value: EditorValue;
  onChange: ChangeHandler;
};

export default class RichTextEditor extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._focus = this._focus.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  render(): React.Element {
    let editorState = this.props.value.getEditorState();
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = cx({
      'RichTextEditor-editor': true,
      'RichTextEditor-hidePlaceholder': this._shouldHidePlaceholder(),
    });
    return (
      <div className="RichTextEditor-root">
        <EditorToolbar
          editorState={editorState}
          onChange={this._onChange}
        />
        <div className={className} onClick={this._focus}>
          <Editor
            className="asdfasdf"
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
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

  _handleKeyCommand(command: string): boolean {
    let editorState = this.props.value.getEditorState();
    let newEditorState = RichUtils.handleKeyCommand(editorState, command);
    if (newEditorState) {
      this._onChange(newEditorState);
      return true;
    }
    return false;
  }

  _onChange(editorState: EditorState) {
    this.props.onChange(EditorValue.createFromState(editorState));
  }

  _focus() {
    this.refs.editor.focus();
  }
}
