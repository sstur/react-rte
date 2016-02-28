/* @flow */
import React, {Component} from 'react';
import IconButton from '../ui/IconButton';
import cx from 'classnames';

type Props = {
  active: boolean;
  style: string;
  label: string;
  onToggle: (style: string) => any;
  className: ?string;
};

export default class StyleButton extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._onToggle = this._onToggle.bind(this);
  }

  render(): React.Element {
    let {props} = this;
    let className = cx(props.className, {
      'RichTextEditor-styleButton': true,
      'RichTextEditor-activeButton': props.active,
    });
    let iconName = props.style.toLowerCase();
    // `focusOnClick` will prevent the editor from losing focus when a control
    // button is clicked.
    return (
      <IconButton
        className={className}
        label={props.label}
        iconName={iconName}
        onClick={this._onToggle}
        focusOnClick={false}
      />
    );
  }

  _onToggle() {
    this.props.onToggle(this.props.style);
  }
}
