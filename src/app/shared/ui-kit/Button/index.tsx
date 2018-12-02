import * as React from 'react';
import * as style from './button.scss';

export interface Props {
  type?: string;
}

const Button: React.SFC<Props> = ({ children, type }) => {
  const className = style.btn + (type === 'outlined' ? ` ${style.outlined}` : '');
  console.log(className);

  return <button className={className}>{children}</button>;
};

export default Button;
