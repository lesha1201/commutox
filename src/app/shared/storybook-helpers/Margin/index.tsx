import cx from 'classnames';
import * as React from 'react';

import style from './margin.scss';

export interface IProps {
  type: 'top' | 'bottom';
}

const Margin: React.FC<IProps> = ({ type, children }) => {
  const className = cx(style.margin, style[type]);

  return <div className={className}>{children}</div>;
};

export default Margin;
