import cx from 'classnames';
import * as React from 'react';

import * as style from '../../form.scss';

/* Typings */
export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  justify: 'start';
  children?: React.ReactNode;
}

/* Component */
function FormGroup({ children, className, justify, ...domAttrs }: IProps) {
  const cn = cx(style.formGroup, style[justify], className);

  return (
    <div className={cn} {...domAttrs}>
      {children}
    </div>
  );
}

export default FormGroup;
