import cx from 'classnames';
import * as React from 'react';

import { OverwritableType } from 'app/models/common';
import style from './button.scss';

/* Typings */
export interface IProps<T> {
  as: T;
  theme: 'painted' | 'outlined';
  mainColor: 'primary' | 'success' | 'danger';
  size?: 'wide' | 'full';
  children?: React.ReactNode;
}

/* Component */
function Button<T extends React.ReactType = 'button'>({
  children,
  theme,
  size,
  mainColor,
  className,
  as,
  ...domAttrs
}: OverwritableType<IProps<T>, T>) {
  const cn = cx(className, style[theme], style[mainColor], size && style[size]);
  const ElementType: React.ReactType = as;

  return (
    <ElementType className={cn} {...domAttrs}>
      {children}
    </ElementType>
  );
}

Button.defaultProps = {
  theme: 'painted',
  mainColor: 'primary',
  as: 'button',
};

export default Button;
