import cx from 'classnames';
import * as React from 'react';

import { OverwritableType } from 'app/types/common';
import css from './button-icon.scss';

export interface ButtonIconProps<T> {
  as: T;
  children?: React.ReactNode;
}

function ButtonIcon<T extends React.ElementType = 'button'>({
  className,
  as,
  ...domAttrs
}: OverwritableType<ButtonIconProps<T>, T>) {
  const cn = cx(css.base, className);
  const ElementType: React.ElementType = as;

  return <ElementType className={cn} {...domAttrs} />;
}

ButtonIcon.defaultProps = {
  as: 'button',
};

export default ButtonIcon;
