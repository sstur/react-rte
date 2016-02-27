/* @flow */
import React, {Component} from 'react';

type Props = {
  choices: Map<string, string>,
  selectedKey: ?string,
  onChange: (selectedKey: string) => any
};

export default class Dropdown extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._onChange = this._onChange.bind(this);
  }

  render(): React.Element {
    let {choices, selectedKey} = this.props;
    let selectedValue = (selectedKey == null) ? null : choices.get(selectedKey);
    return (
      <span className="ui-dropdown" title={selectedValue}>
        <select value={selectedKey} onChange={this._onChange}>
          {this._renderChoices()}
        </select>
      </span>
    );
  }

  _onChange(event: Object) {
    let value: string = event.target.value;
    this.props.onChange(value);
  }

  _renderChoices(): Array<React.Element> {
    let {choices} = this.props;
    let entries = Array.from(choices.entries());
    return entries.map(([key, text]) => (
      <option key={key} value={key}>{text}</option>
    ));
  }
}
