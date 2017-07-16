/* @flow */
import React, {Component} from 'react';
import RichTextEditor, {createEmptyValue} from './RichTextEditor';
import autobind from 'class-autobind';

import type {EditorValue} from './RichTextEditor';

type Props = {
  value: string;
  format: string;
  onChange: (value: string) => any;
};
type State = {
  editorValue: EditorValue;
};

export default class SimpleRichTextEditor extends Component {
  props: Props;
  state: State;
  // The [format, value] of what's currently displayed in the <RichTextEditor />
  _currentValue: ?[string, string];

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      editorValue: createEmptyValue(),
    };
  }

  componentWillMount() {
    this._updateStateFromProps(this.props);
  }

  componentWillReceiveProps(newProps: Props) {
    this._updateStateFromProps(newProps);
  }

  _updateStateFromProps(newProps: Props) {
    let {value, format} = newProps;
    if (this._currentValue != null) {
      let [currentValue, currentFormat] = this._currentValue;
      if (format === currentFormat && value === currentValue) {
        return;
      }
    }
    let {editorValue} = this.state;
    this.setState({
      editorValue: editorValue.setContentFromString(value, format),
    });
    this._currentValue = [format, value];
  }

  render() {
    let {value, format, onChange, ...otherProps} = this.props; // eslint-disable-line no-unused-vars
    return (
      <RichTextEditor
        {...otherProps}
        value={this.state.editorValue}
        onChange={this._onChange}
      />
    );
  }

  _onChange(editorValue: EditorValue) {
    let {format, onChange} = this.props;
    let oldEditorValue = this.state.editorValue;
    this.setState({editorValue});
    let oldContentState = oldEditorValue ? oldEditorValue.getEditorState().getCurrentContent() : null;
    let newContentState = editorValue.getEditorState().getCurrentContent();
    if (oldContentState !== newContentState) {
      let stringValue = editorValue.toString(format);
      // Optimization so if we receive new props we don't need
      // to parse anything unnecessarily.
      this._currentValue = [format, stringValue];
      if (onChange && stringValue !== this.props.value) {
        onChange(stringValue);
      }
    }
  }
}
