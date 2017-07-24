/* @flow */

import React from 'react';
import cx from 'classnames';

import styles from './ButtonWrap.css';

type Props = {
  className?: string;
};

export default function ButtonWrap(props: Props) {
  let className = cx(props.className, styles.root);
  return <div {...props} className={className} />;
}
