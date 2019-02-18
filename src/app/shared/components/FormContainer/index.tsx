/**
 * Inspired by Formik.
 */

import * as React from 'react';
import * as Yup from 'yup';

import { containsAllKeys, debounce } from 'app/shared/utils';

/* Typings */
type API = ReturnType<FormContainer['getHelpers']>;

type Changes<S, K extends keyof S> =
  | ((state: Readonly<S>) => Pick<S, K> | S | null)
  | (Pick<S, K> | S | null);

interface IValues {
  [field: string]: string;
}

export interface IFormProps {
  readonly initData: IValues;
  validationWait: number; // has default value
  validateOn: 'all' | 'submit' | 'change'; // has default value
  children: (api: API) => React.ReactNode;
  onSubmit: (data: IValues, setFormState: FormContainer['setFormState']) => void;
  validate?: (data: IValues) => IValues;
  validationSchema?: Yup.Schema<IValues>;
}

export interface IFormState {
  data: IValues;
  errors: IValues;
}

/* Yup setup and validation */
Yup.setLocale({
  mixed: {
    required: "Can't be blank",
  },
  string: {
    email: 'Invalid email',
    min: 'Must be at least ${min} characters',
    max: 'Maximum length is ${max} characters',
  },
});

async function validateYupSchema(schema: Yup.Schema<IValues>, data: IValues) {
  const errors: any = {};

  try {
    await schema.validate(data, { abortEarly: false });
  } catch (yupErrors) {
    for (const err of yupErrors.inner) {
      if (err.path) {
        errors[err.path] = err.message;
      }
    }
  }

  return errors;
}

async function validateYupSchemaAt(schema: Yup.Schema<IValues>, value: any, at: string) {
  let error: string = '';

  try {
    await schema.validateAt(at, value);
  } catch (yupError) {
    error = yupError.message;
  }

  return error;
}

/* Component */
class FormContainer extends React.Component<IFormProps, IFormState> {
  /* 🗿 Static properties ------------*/
  static defaultProps = {
    validationWait: 0,
    validateOn: 'all',
  };
  /* End of Static properties -------*/

  debouncedValidateOnChange: FormContainer['validateOnChange'];
  isValidateSubmit: boolean;
  isValidateChange: boolean;

  /* ♻️ Lifecycle -------------------*/
  constructor(props: IFormProps) {
    super(props);

    this.state = {
      data: props.initData,
      errors: {},
    };

    this.isValidateSubmit = /submit|all/i.test(this.props.validateOn);
    this.isValidateChange = /change|all/i.test(this.props.validateOn);

    this.debouncedValidateOnChange = debounce(
      this.validateOnChange,
      this.props.validationWait,
    );
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
  private async validateSchemaAt(name: string, value: string) {
    if (this.props.validationSchema) {
      const fieldError = await validateYupSchemaAt(
        this.props.validationSchema,
        { [name]: value },
        name,
      );

      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          [name]: fieldError,
        },
      }));
    }
  }

  private validateOnChange(name: string, value: string) {
    if (!this.isValidateChange) {
      return;
    }

    let fieldError = '';

    if (this.props.validate) {
      const errors = this.props.validate(this.state.data);

      if (errors[name]) {
        fieldError = errors[name];
      }
    }

    if (!fieldError) {
      this.validateSchemaAt(name, value);
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          [name]: fieldError,
        },
      }));
    }
  }

  private async validateOnSubmit() {
    if (!this.isValidateSubmit) {
      return;
    }

    let schemaErrors = {};

    if (this.props.validationSchema) {
      schemaErrors = await validateYupSchema(
        this.props.validationSchema,
        this.state.data,
      );
    }

    const submitErrors = this.props.validate ? this.props.validate(this.state.data) : {};

    return { ...schemaErrors, ...submitErrors };
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState(
      prevState => {
        if (prevState.data[name] !== undefined) {
          return {
            data: {
              ...prevState.data,
              [name]: value,
            },
            errors: {
              ...prevState.errors,
              [name]: '',
            },
          };
        }

        return null;
      },
      () => this.debouncedValidateOnChange(name, value),
    );
  };

  private onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = await this.validateOnSubmit();

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
