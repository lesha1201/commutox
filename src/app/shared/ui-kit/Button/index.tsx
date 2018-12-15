import cx from 'classnames';
import * as React from 'react';

import * as style from './button.scss';

export interface IProps {
  type?: string;
}

const Button: React.FC<IProps> = ({ children, type }) => {
  const className = cx(style.btn, type === 'outlined' && `${style.outlined}`);

  return <button className={className}>{children}</button>;
};

export default Button;
