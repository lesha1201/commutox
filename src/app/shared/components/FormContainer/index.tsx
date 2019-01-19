/**
 * Inspired by Formik.
 */

import * as React from 'react';

import { containsAllKeys } from 'app/shared/utils';

/* Typings */
type API = ReturnType<FormContainer['getHelpers']>;

type Changes<S, K extends keyof S> =
  | ((state: Readonly<S>) => Pick<S, K> | S | null)
  | (Pick<S, K> | S | null);

interface IValues {
  [field: string]: string;
}

export interface IFormProps {
  initState: IValues;
  children: (api: API) => React.ReactNode;
  onSubmit: (data: IValues, setFormState: FormContainer['setFormState']) => void;
  validateOnSubmit?: (data: IValues) => IValues;
  validateOnChange?: (field: IValues) => string;
}

export interface IFormState {
  data: IValues;
  errors: IValues;
}

/* Component */
class FormContainer extends React.Component<IFormProps, IFormState> {
  /* ♻️ Lifecycle -------------------*/
  constructor(props: IFormProps) {
    super(props);

    this.state = {
      data: props.initState,
      errors: {},
    };
  }

  render() {
    const ui =
      typeof this.props.children === 'function'
        ? this.props.children(this.getHelpers())
        : this.props.children;

    return ui;
  }
  /* End of Lifecycle ---------------*/

  /* 🔒 Private methods -------------*/
  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const fieldError = this.props.validateOnChange
      ? this.props.validateOnChange({ name, value, error: this.state.errors[name] })
      : '';

    this.setState(prevState => {
      if (prevState.data[name] !== undefined) {
        return {
          data: {
            ...prevState.data,
            [name]: value,
          },
          errors: {
            ...prevState.errors,
            [name]: fieldError,
          },
        };
      }

      return null;
    });
  };

  private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = this.props.validateOnSubmit
      ? this.props.validateOnSubmit(this.state.data)
      : {};

    if (!errors || Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state.data, this.setFormState);
    } else {
      this.setState({ errors });
    }
  };

  private setFormState = <K extends keyof IFormState>(
    changes: Changes<IFormState, K>,
    callback?: () => void,
  ) => {
    this.setState(state => {
      const changesObj = typeof changes === 'function' ? changes(state) : changes;
      const isValidKeys = changesObj && containsAllKeys(this.state, changesObj);

      return isValidKeys ? changesObj : null;
    }, callback);
  };

  private getHelpers() {
    return {
      data: this.state.data,
      errors: this.state.errors,
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      setFormState: this.setFormState,
    };
  }
  /* End of Private methods ---------*/
}

export default FormContainer;
