import cx from 'classnames';
import * as React from 'react';

import style from './margin.scss';

export interface MarginProps {
  type: 'top' | 'bottom';
  children: React.ReactNode;
}

function Margin({ type, children }: MarginProps) {
  const className = cx(style.margin, style[type]);

  return <div className={className}>{children}</div>;
}

export default Margin;
