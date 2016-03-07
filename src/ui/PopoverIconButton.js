/* @flow */

import React, {Component} from 'react';
import IconButton from './IconButton';
import InputPopover from './InputPopover';

type Props = {
  showPopover: boolean,
  onTogglePopover: Function,
  onSubmit: Function;
};

export default class PopoverIconButton extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._hidePopover = this._hidePopover.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  render(): React.Element {
    let {props} = this;
    return (
      <IconButton {...props} onClick={this.props.onTogglePopover}>
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
        onSubmit={this._onSubmit}
        onCancel={this._hidePopover}
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
