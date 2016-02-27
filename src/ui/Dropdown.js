/* @flow */
import React, {Component} from 'react';
import cx from 'classnames';

type Props = {
  choices: Map<string, string>;
  selectedKey: ?string;
  onChange: (selectedKey: string) => any;
  className: string;
};

export default class Dropdown extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._onChange = this._onChange.bind(this);
  }

  render(): React.Element {
    let {choices, selectedKey, className, ...otherProps} = this.props;
    className = cx(className, 'ui-button');
    let selectedValue = (selectedKey == null) ? '' : choices.get(selectedKey);
    return (
      <span className="ui-dropdown" title={selectedValue}>
        <select {...otherProps} value={selectedKey} onChange={this._onChange}>
          {this._renderChoices()}
        </select>
        <span className="value">{selectedValue}</span>
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
