/**
 * Inspired by Formik.
 */

import * as React from 'react';
import * as Yup from 'yup';
import { PromiseType } from 'utility-types';

import { containsAllKeys, debounce, get } from 'app/shared/utils';

/* -- Types */

type API<TFormValues extends FormValues> = ReturnType<
  FormContainer<TFormValues>['getHelpers']
>;

type Changes<S, K extends keyof S> =
  | ((state: Readonly<S>) => Pick<S, K> | S | null)
  | (Pick<S, K> | S | null);

export interface FormValues {
  [field: string]: any;
}

export type FormErrors<TFormValues extends FormValues> = Partial<
  Record<keyof TFormValues, string>
>;

export interface FormProps<TFormValues extends FormValues> {
  readonly initData: TFormValues;
  validationWait: number; // has default value
  validateOn: 'all' | 'submit' | 'change'; // has default value
  children: (api: API<TFormValues>) => React.ReactNode;
  onSubmit: (
    data: TFormValues,
    setFormState: FormContainer<TFormValues>['setFormState'],
  ) => Promise<any>;
  validate?: (data: TFormValues) => FormErrors<TFormValues>;
  validationSchema?: Yup.ObjectSchema<TFormValues | undefined>;
  setStateOnChange?: (
    name: string,
    value: string,
    prevState: FormState<TFormValues>,
  ) => Partial<FormState<TFormValues>> | null;
}

export interface FormState<TFormValues extends FormValues> {
  data: TFormValues;
  errors: FormErrors<TFormValues>;
  isSubmitting: boolean;
}

/* -- Utils */

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

async function validateYupSchema(
  schema: Yup.Schema<FormValues | undefined>,
  data: FormValues,
) {
  const errors: Record<string, string> = {};

  try {
    await schema.validate(data, { abortEarly: false });
  } catch (yupErrors) {
    if (!(yupErrors instanceof Yup.ValidationError)) {
      return errors;
    }

    for (const err of yupErrors.inner) {
      if (err.path) {
        errors[err.path] = err.message;
      }
    }
  }

  return errors;
}

async function validateYupSchemaAt(
  schema: Yup.Schema<FormValues | undefined>,
  value: FormValues,
  at: string,
) {
  let error = '';

  try {
    await schema.validateAt(at, value);
  } catch (yupError) {
    error = yupError.message;
  }

  return error;
}

/* -- Main */

class FormContainer<TFormValues extends FormValues = FormValues> extends React.Component<
  FormProps<TFormValues>,
  FormState<TFormValues>
> {
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
  constructor(props: FormProps<TFormValues>) {
    super(props);

    this.state = {
      data: props.initData,
      errors: {},
      isSubmitting: false,
    };

    this.isValidateSubmit = /submit|all/i.test(this.props.validateOn);
    this.isValidateChange = /change|all/i.test(this.props.validateOn);

    this.debouncedValidateOnChange =
      this.props.validationWait > 0
        ? debounce(this.validateOnChange, this.props.validationWait)
        : this.validateOnChange;
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

      fieldError = errors[name] || '';
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

    let schemaErrors: PromiseType<ReturnType<typeof validateYupSchema>> = {};

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
    let shouldDebounce = true;

    this.setState(
      prevState => {
        if (prevState.data[name] === undefined) {
          return null;
        }

        if (typeof this.props.setStateOnChange === 'function') {
          const newState = this.props.setStateOnChange(name, value, prevState);

          if (get(newState, ['errors', name])) {
            shouldDebounce = false;
          }

          return { ...prevState, ...newState };
        }

        if (prevState.errors[name]) {
          shouldDebounce = false;
        }

        return {
          ...prevState,
          data: {
            ...prevState.data,
            [name]: value,
          },
        };
      },
      () =>
        shouldDebounce
          ? this.debouncedValidateOnChange(name, value)
          : this.validateOnChange(name, value),
    );
  };

  private onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = await this.validateOnSubmit();

    if (!errors || Object.keys(errors).length === 0) {
      const result = this.props.onSubmit(this.state.data, this.setFormState);

      if (result instanceof Promise) {
        this.setState({ isSubmitting: true });

        result.finally(() => {
          this.setState({ isSubmitting: false });
        });
      }
    } else {
      this.setState({ errors });
    }
  };

  private setFormState = <K extends keyof FormState<TFormValues>>(
    changes: Changes<FormState<TFormValues>, K>,
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
      isSubmitting: this.state.isSubmitting,
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      setFormState: this.setFormState,
    };
  }
  /* End of Private methods ---------*/
}

export default FormContainer;
