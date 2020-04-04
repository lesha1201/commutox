import cx from 'classnames';
import * as React from 'react';

import { OverwritableType } from 'app/types/common';
import style from './link.scss';

/* -- Types */

export interface ILinkBaseProps<T extends React.ElementType = 'a'> {
  /** Element type (React component or string) that will be used */
  as: T;
  children?: React.ReactNode;
}

export type LinkProps<T extends React.ElementType = 'a'> = OverwritableType<
  ILinkBaseProps<T>,
  T
>;

/* -- Main */

function Link<T extends React.ElementType = 'a'>({
  children,
  className,
  as,
  ...rest
}: LinkProps<T>) {
  const cn = cx(className, style.link);
  const ElementType: React.ElementType = as;

  return (
    <ElementType className={cn} {...rest}>
      {children}
    </ElementType>
  );
}

Link.defaultProps = {
  as: 'a',
};

export default Link;
