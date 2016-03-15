/* @flow */

import React from 'react';
import cx from 'classnames';

// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './ButtonWrap.css';

type Props = {
  className: ?string;
};

export default function ButtonWrap(props: Props): React.Element {
  let className = cx(props.className, styles.root);
  return <div {...props} className={className} />;
}
