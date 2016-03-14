/* @flow */
import React, {Component} from 'react';
import IconButton from '../ui/IconButton';
import autobind from 'class-autobind';

type Props = {
  style: string;
  onToggle: (style: string) => any;
};

export default class StyleButton extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render(): React.Element {
    let {style, ...otherProps} = this.props;
    let iconName = style.toLowerCase();
    // `focusOnClick` will prevent the editor from losing focus when a control
    // button is clicked.
    return (
      <IconButton
        {...otherProps}
        iconName={iconName}
        onClick={this._onClick}
        focusOnClick={false}
      />
    );
  }

  _onClick() {
    this.props.onToggle(this.props.style);
  }
}
