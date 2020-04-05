import cx from 'classnames';
import * as React from 'react';

import { OverwritableType } from 'app/types/common';
import style from './button.scss';

/* -- Types */

export interface ButtonBaseProps<T extends React.ElementType> {
  /** Element type (React component or string) that will be used */
  as: T;
  /** Variant */
  theme: 'painted' | 'outlined';
  mainColor: 'primary' | 'success' | 'danger';
  size?: 'wide' | 'full';
  children?: React.ReactNode;
}

export type ButtonProps<T extends React.ElementType = 'button'> = OverwritableType<
  ButtonBaseProps<T>,
  T
>;

/* -- Main */

function Button<T extends React.ElementType = 'button'>({
  children,
  theme,
  size,
  mainColor,
  className,
  as,
  ...domAttrs
}: ButtonProps<T>) {
  const cn = cx(className, style[theme], style[mainColor], size && style[size]);
  const ElementType: React.ElementType = as;

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
