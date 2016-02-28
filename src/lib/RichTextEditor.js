/* @flow */
import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import EditorToolbar from './EditorToolbar';
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

type ChangeHandler = (state: EditorState) => any;

type Props = {
  editorState: EditorState;
  onChange: ChangeHandler;
};

export default class RichTextEditor extends Component<Props> {
  props: Props;

  static defaultProps = {
    editorState: EditorState.createEmpty(),
  };

  constructor() {
    super(...arguments);
    this._focus = this._focus.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
  }

  render(): React.Element {
    let {editorState} = this.props;
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
          onChange={this.props.onChange}
        />
        <div className={className} onClick={this._focus}>
          <Editor
            className="asdfasdf"
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this._handleKeyCommand}
            onChange={this.props.onChange}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }

  _shouldHidePlaceholder(): boolean {
    let contentState = this.props.editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        return true;
      }
    }
    return false;
  }

  _handleKeyCommand(command: string): boolean {
    const {editorState} = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.props.onChange(newState);
      return true;
    }
    return false;
  }

  _focus() {
    this.refs.editor.focus();
  }
}
