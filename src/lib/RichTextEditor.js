/* @flow */
import React from 'react';
import Draft from 'draft-js';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

const {Component} = React;
const {Editor, EditorState, RichUtils} = Draft;

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
  switch (block.getType()) {
    case 'blockquote': return 'RichTextEditor-blockquote';
    default: return null;
  }
}

type ChangeHandler = (state: EditorState) => any;

type Props = {
  editorState: EditorState;
  onChange: ChangeHandler;
};

type State = {};

export default class RichTextEditor extends Component<Props, State> {
  props: Props;
  state: State;

  static defaultProps = {
    editorState: EditorState.createEmpty(),
  };

  constructor() {
    super(...arguments);
    this.focus = () => this.refs.editor.focus();
    this._handleKeyCommand = this._handleKeyCommand.bind(this);
    this._toggleBlockType = this._toggleBlockType.bind(this);
    this._toggleInlineStyle = this._toggleInlineStyle.bind(this);
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

  render(): React.Element {
    const {editorState} = this.props;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichTextEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichTextEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichTextEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this._toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this._toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
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
}
