import cx from 'classnames';
import * as React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import style from './link.scss';

/* Typings */

export interface IProps extends LinkProps {
  children?: React.ReactNode;
}

/* Component */

// TODO: It should implement `as` prop and just add styles
function Link({ children, className, ...linkProps }: IProps) {
  const cn = cx(className, style.link);

  return (
    <RouterLink className={cn} {...linkProps}>
      {children}
    </RouterLink>
  );
}

export default Link;
