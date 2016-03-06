/* @flow */

import React from 'react';
import cx from 'classnames';

type Props = {
  className: ?string;
};

export default function ButtonGroup(props_: Props): React.Element {
  let className = cx(props_.className, 'ui-button-group');
  return (
    <div {...props_} className={className} />
  );
}
