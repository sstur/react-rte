/* @flow */

import React, {Component} from 'react';
import cx from 'classnames';

type Props = {
  className: ?string;
  children: ?any;
};

export default class Button extends Component<Props> {
  props: Props;

  render(): React.Element {
    let {props} = this;
    let {className, ...otherProps} = props;
    className = cx(className, 'ui-button');
    return (
      <button type="button" className={className} {...otherProps}>{props.children}</button>
    );
  }
}
