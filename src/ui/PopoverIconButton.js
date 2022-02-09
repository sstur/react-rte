/* @flow */

import React, {Component} from 'react';
import IconButton from './IconButton';
import InputPopover from './InputPopover';
import autobind from 'class-autobind';

type Props = {
  iconName: string;
  showPopover: boolean,
  inputType?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
  defaultValue?: string,
  checkOptions?: {
    [key: string]: { label: string, defaultValue: boolean };
  };
  onTogglePopover: Function,
  onSubmit: Function;
};

export default class PopoverIconButton extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {onTogglePopover, showPopover, checkOptions, ...props} = this.props; // eslint-disable-line no-unused-vars
    return (
      <IconButton {...props} onClick={onTogglePopover}>
        {this._renderPopover()}
      </IconButton>
    );
  }

  _renderPopover() {
    if (!this.props.showPopover) {
      return null;
    }
    return (
      <InputPopover
        defaultValue={this.props.defaultValue}
        checkOptions={this.props.checkOptions}
        onSubmit={this._onSubmit}
        onCancel={this._hidePopover}
        type={this.props.inputType}
      />
    );
  }

  _onSubmit() {
    this.props.onSubmit(...arguments);
  }

  _hidePopover() {
    if (this.props.showPopover) {
      this.props.onTogglePopover(...arguments);
    }
  }
}
