import * as React from 'react';

import * as style from './label.scss';

/* Typings */
export interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

/* Component */
function Label(props: IProps) {
  return <label className={style.label} {...props} />;
}

export default Label;
