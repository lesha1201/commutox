import * as React from 'react';

import * as style from './button.scss';

export interface IProps {
  type?: string;
}

const Button: React.SFC<IProps> = ({ children, type }) => {
  const className = style.btn + (type === 'outlined' ? ` ${style.outlined}` : '');

  return <button className={className}>{children}</button>;
};

export default Button;
