/**
 * WIP. I'm planning to continue it when I start building the app.
 */

import cx from 'classnames';
import * as React from 'react';

import FormField from './compounds/FormField';
import FormGroup from './compounds/FormGroup';
import style from './form.scss';

/* Typings */
export interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

/* Component */
function Form({ className, children, ...formDomAttrs }: IProps) {
  const cn = cx(style.form, className);

  return (
    <form className={cn} {...formDomAttrs}>
      {children}
    </form>
  );
}

Form.Group = FormGroup;
Form.Field = FormField;

export default Form;
