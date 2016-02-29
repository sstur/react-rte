/* @flow */
import React from 'react';
import RichTextEditor from './lib/RichTextEditor';
import stateToHTML from './lib/stateToHTML';

// TODO: Wrap EditorState using a class that has fromMarkup() and toMarkup()
import {EditorState} from 'draft-js';

const {Component} = React;

type Props = {};
type State = {
  editorState: EditorState;
};

export default class EditorExample extends Component<Props, State> {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this._onChange = (editorState: EditorState) => {
      this.setState({editorState});
    };
  }

  render(): React.Element {
    let {editorState} = this.state;
    let editorSource = stateToHTML(editorState.getCurrentContent());
    return (
      <div>
        <div className="form-field">
          <RichTextEditor editorState={editorState} onChange={this._onChange} />
        </div>
        <div className="form-field">
          <textarea
            className="source"
            placeholder="Editor Source"
            value={editorSource}
            onChange={() => null}
          />
        </div>
      </div>
    );
  }
}
