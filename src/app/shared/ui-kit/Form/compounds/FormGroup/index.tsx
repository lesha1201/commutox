import cx from 'classnames';
import * as React from 'react';

import capitalize from 'app/shared/utils/capitalize';
import * as style from '../../form.scss';

/* Typings */
export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: 'start' | 'center';
  align?: 'start' | 'center';
  children?: React.ReactNode;
}

/* Component */
function FormGroup({ children, className, justify, align, ...domAttrs }: IProps) {
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
