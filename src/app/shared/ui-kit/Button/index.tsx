import cx from 'classnames';
import * as React from 'react';

import * as style from './button.scss';

/* Typings */
export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'painted' | 'outlined';
  mainColor: 'primary' | 'success' | 'danger';
  size?: 'wide' | 'full';
  children?: React.ReactNode;
}

/* Component */
function Button({ children, theme, size, mainColor, ...domAttrs }: IProps) {
  const className = cx(style[theme], style[mainColor], size && style[size]);

  return (
    <button className={className} {...domAttrs}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: 'painted',
  mainColor: 'primary',
};

export default Button;
