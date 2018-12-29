import cx from 'classnames';
import * as React from 'react';

import * as style from '../../form.scss';

/* Typings */
export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/* Component */
function FormField({ children, className, ...domAttrs }: IProps) {
  const cn = cx(style.formField, className);

  return (
    <div className={cn} {...domAttrs}>
      {children}
    </div>
  );
}

export default FormField;
