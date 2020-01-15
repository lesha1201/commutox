import cx from 'classnames';
import * as React from 'react';

import style from '../../form.scss';

/* -- Types */

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
  children?: React.ReactNode;
}

/* -- Main */

function FormField({ children, className, error, ...domAttrs }: IProps) {
  const cn = cx(error ? style.formFieldError : style.formField, className);
  const cnError = cx(style.error);

  return (
    <div className={cn} {...domAttrs}>
      {children}
      {error && <div className={cnError}>{error}</div>}
    </div>
  );
}

export default FormField;
