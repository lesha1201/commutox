import cx from 'classnames';
import * as React from 'react';

import * as style from '../../form.scss';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export type TFormField = React.FC<IProps>;

const FormField: TFormField = ({ children, className }) => {
  const cn = cx(style.formField, className);

  return <div className={cn}>{children}</div>;
};

export default FormField;
