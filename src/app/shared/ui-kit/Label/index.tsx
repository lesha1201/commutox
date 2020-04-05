import * as React from 'react';

import style from './label.scss';

/* -- Types */

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

/* -- Main */

function Label(props: LabelProps) {
  return <label className={style.label} {...props} />;
}

export default Label;
