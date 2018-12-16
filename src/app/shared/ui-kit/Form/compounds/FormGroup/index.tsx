import cx from 'classnames';
import * as React from 'react';

import * as style from '../../form.scss';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  justify: 'start';
}

export type TFormGroup = React.FC<IProps>;

const FormGroup: TFormGroup = ({ children, className, justify, ...rest }) => {
  const cn = cx(style.formGroup, style[justify], className);

  return (
    <div className={cn} {...rest}>
      {children}
    </div>
  );
};

export default FormGroup;
