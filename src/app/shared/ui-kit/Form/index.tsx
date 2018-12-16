/**
 * WIP. I'm planning to continue it when I start building the app.
 */

import cx from 'classnames';
import * as React from 'react';

import FormField, { TFormField } from './compounds/FormField';
import FormGroup, { TFormGroup } from './compounds/FormGroup';
import * as style from './form.scss';

export interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export type TForm = {
  Group: TFormGroup;
  Field: TFormField;
} & React.FC<IProps>;

const Form: TForm = ({ className, children, ...formDomAttrs }) => {
  const cn = cx(style.form, className);

  return (
    <form className={cn} {...formDomAttrs}>
      {children}
    </form>
  );
};

Form.Group = FormGroup;
Form.Field = FormField;

export default Form;
