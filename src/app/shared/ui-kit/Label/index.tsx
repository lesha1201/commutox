import * as React from 'react';

import * as style from './label.scss';

export interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<IProps> = props => {
  return <label className={style.label} {...props} />;
};

export default Label;
