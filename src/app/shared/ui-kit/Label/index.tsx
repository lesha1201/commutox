import * as React from 'react';

import style from './label.scss';

/* -- Types */

export interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

/* -- Main */

function Label(props: IProps) {
  return <label className={style.label} {...props} />;
}

export default Label;
