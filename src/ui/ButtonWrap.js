/* @flow */

import React from 'react';
import cx from 'classnames';

type Props = {
  className: ?string;
};

export default function ButtonWrap(props: Props): React.Element {
  let className = cx(props, 'ui-button-wrap');
  return <div {...props} className={className} />;
}
