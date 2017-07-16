/* @flow */

import React, {Component} from 'react';
import cx from 'classnames';
import autobind from 'class-autobind';

import styles from './Button.css';

type EventHandler = (event: Event) => any;

type Props = {
  children?: ReactNode;
  className?: string;
  focusOnClick?: boolean;
  formSubmit?: boolean;
  isDisabled?: boolean;
  onMouseDown?: EventHandler;
};

export default class Button extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {props} = this;
    let {className, isDisabled, focusOnClick, formSubmit, ...otherProps} = props;
    className = cx(className, styles.root);
    let onMouseDown = (focusOnClick === false) ? this._onMouseDownPreventDefault : props.onMouseDown;
    let type = formSubmit ? 'submit' : 'button';
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
