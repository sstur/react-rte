/* @flow */

import React, {Component} from 'react';
import cx from 'classnames';

type EventHandler = (event: Event) => any;

type Props = {
  children: ?any;
  className: ?string;
  focusOnClick: ?boolean;
  formSubmit: ?boolean;
  isDisabled: ?boolean;
  onMouseDown: ?EventHandler;
};

export default class Button extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this._onMouseDownPreventDefault = this._onMouseDownPreventDefault.bind(this);
  }

  render(): React.Element {
    let {props} = this;
    let {className, isDisabled, ...otherProps} = props;
    className = cx(className, 'ui-button');
    let onMouseDown = (props.focusOnClick === false) ? this._onMouseDownPreventDefault : props.onMouseDown;
    let type = props.formSubmit ? 'submit' : 'button';
    return (
      <button type={type} {...otherProps} onMouseDown={onMouseDown} className={className} disabled={isDisabled}>
        {props.children}
      </button>
    );
  }

  _onMouseDownPreventDefault(event: Event) {
    event.preventDefault();
    let {onMouseDown} = this.props;
    if (onMouseDown != null) {
      onMouseDown(event);
    }
  }
}
