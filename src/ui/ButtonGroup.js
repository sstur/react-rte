/* @flow */

import React from 'react';
import cx from 'classnames';

// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './ButtonGroup.css';

type Props = {
  className: ?string;
};

export default function ButtonGroup(props_: Props): React.Element {
  let className = cx(props_.className, styles.root);
  return (
    <div {...props_} className={className} />
  );
}
