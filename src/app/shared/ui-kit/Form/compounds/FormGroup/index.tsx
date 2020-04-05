import cx from 'classnames';
import * as React from 'react';

import { capitalize } from 'app/shared/utils';
import style from '../../form.scss';

/* -- Types */

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: 'start' | 'center';
  align?: 'start' | 'center';
  children?: React.ReactNode;
}

/* -- Main */

function FormGroup({ children, className, justify, align, ...domAttrs }: FormGroupProps) {
  const alignName =
    align && (`align${capitalize(align)}` as 'alignCenter' | 'alignStart');

  const cn = cx(
    style.formGroup,
    justify && style[justify],
    alignName && style[alignName],
    className,
  );

  return (
    <div className={cn} {...domAttrs}>
      {children}
    </div>
  );
}

export default FormGroup;
