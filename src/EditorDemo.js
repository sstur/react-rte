/* @flow */
import React, {Component} from 'react';
import RichTextEditor from './lib/RichTextEditor';
import EditorValue from './lib/EditorValue';

type Props = {};
type State = {
  value: EditorValue;
  format: string;
};

export default class EditorDemo extends Component<Props, State> {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    this.state = {
      value: EditorValue.createEmpty(),
      format: 'html',
    };
    this._onChange = this._onChange.bind(this);
  }

  render(): React.Element {
    let {value, format} = this.state;
    return (
      <div className="editor-demo">
        <div className="row">
          <p>This is a demo of the <a href="https://www.npmjs.com/package/react-rte"><code>react-rte</code></a> editor.</p>
        </div>
        <div className="row">
          <RichTextEditor
            value={value}
            onChange={this._onChange}
          />
        </div>
        <div className="row">
          <textarea
            className="source"
            placeholder="Editor Source"
            value={value.toString(format)}
            onChange={() => null}
          />
        </div>
      </div>
    );
  }

  _onChange(value: EditorValue) {
    this.setState({value});
  }
}
