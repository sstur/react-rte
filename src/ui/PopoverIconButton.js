/* @flow */

import React, {Component} from 'react';
import IconButton from './IconButton';
import InputPopover from './InputPopover';
import cx from 'classnames';

type Props = {
  active: boolean;
  className: ?string;
  onSubmit: Function;
};

export default class PopoverIconButton extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this.state = {
      showInput: false,
    };
    this._togglePopover = this._togglePopover.bind(this);
    this._hidePopover = this._hidePopover.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  render(): React.Element {
    let {props} = this;
    let className = cx(props.className, {
      'RichTextEditor-styleButton': true,
      'RichTextEditor-activeButton': props.active,
    });
    return (
      <div className="ui-button-wrap">
        <IconButton
          {...props}
          className={className}
          onClick={this._togglePopover}
        />
        {this._renderPopover()}
      </div>
    );
  }

  _renderPopover() {
    if (!this.state.showInput) {
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
    this._hidePopover();
    this.props.onSubmit(...arguments);
  }

  _togglePopover() {
    this.setState({
      showInput: !this.state.showInput,
    });
  }

  _hidePopover() {
    this.setState({
      showInput: false,
    });
  }
}
