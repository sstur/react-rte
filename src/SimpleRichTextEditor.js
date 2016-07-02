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

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      editorValue: createEmptyValue(),
    };
  }

  componentWillMount() {
    this._updateStateFromProps(null, this.props);
  }

  componentWillReceiveProps(newProps: Props) {
    this._updateStateFromProps(this.props, newProps);
  }

  _updateStateFromProps(oldProps: ?Props, newProps: Props) {
    let {value, format} = newProps;
    if (oldProps != null && oldProps.value === value && oldProps.format === format) {
      return;
    }
    let {editorValue} = this.state;
    this.setState({
      editorValue: editorValue.setContentFromString(value, format),
    });
  }

  render(): React.Element {
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
    if (onChange != null) {
      let stringValue = editorValue.toString(format);
      onChange(stringValue);
    }
  }
}
