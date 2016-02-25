/* @flow */
import React from 'react';
import RichTextEditor from './lib/RichTextEditor';

import type {EditorState} from 'draft-js';

const {Component} = React;

type Props = {};
type State = {
  editorState: ?EditorState;
};

export default class EditorExample extends Component<Props, State> {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    this.state = {editorState: undefined};
    this._onChange = (editorState: EditorState) => {
      this.setState({editorState});
    };
  }

  render(): React.Element {
    let {editorState} = this.state;
    return (
      <RichTextEditor editorState={editorState} onChange={this._onChange} />
    );
  }
}
