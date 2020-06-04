import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Form, Input, Label } from 'app/shared/ui-kit';
import FormContainer, { FormProps } from 'app/shared/components/FormContainer';
import style from '../sign-form.scss';

function someApiCall(data: unknown) {
  return new Promise((resolve, reject) => {
    resolve({ email: 'Hello', password: 'World' });
  });
}

/* -- Types */

type SignUpFormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  fullName: string;
};

interface SignUpFormProps extends RouteComponentProps {
  children?: never;
}

/* -- Component */

class SignUpForm extends React.Component<SignUpFormProps> {
  initFormState: SignUpFormValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    fullName: '',
  };

  validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    passwordConfirm: Yup.string().required(),
    fullName: Yup.string().required(),
  });

  onSubmit: FormProps['onSubmit'] = (data, setFormState) => {
    someApiCall(data)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(errors => {
        setFormState({ errors });
      });
  };

  render() {
    return (
      <FormContainer
        initData={this.initFormState}
        onSubmit={this.onSubmit}
        validate={this.validateForm}
        validationSchema={this.validationSchema}
        validationWait={350}
      >
        {({ data, errors, onChange, onSubmit }) => {
          return (
            <Form className={style.signForm} onSubmit={onSubmit}>
              <Form.Group className={style.formGroup}>
                <Form.Field error={errors.email}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    hasError={!!errors.email}
                    onChange={onChange}
                    value={data.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group className={style.formGroup}>
                <Form.Field error={errors.fullName}>
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    hasError={!!errors.fullName}
                    onChange={onChange}
                    value={data.fullName}
                    type="fullName"
                    name="fullName"
                    id="fullName"
                    placeholder="Full name"
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group className={style.formGroup}>
                <Form.Field error={errors.password}>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    hasError={!!errors.password}
                    onChange={onChange}
                    value={data.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group className={style.formGroup}>
                <Form.Field error={errors.passwordConfirm}>
                  <Label htmlFor="passwordConfirm">Confirm password</Label>
                  <Input
                    hasError={!!errors.passwordConfirm}
                    onChange={onChange}
                    value={data.passwordConfirm}
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="Password"
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group className={style.formGroup}>
                <Button type="submit" className={style.signButton} size="full">
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
          );
        }}
      </FormContainer>
    );
  }

  private validateForm(data: FormContainer['state']['data']) {
    const errors: typeof data = {};

    if (data.password !== data.passwordConfirm) {
      errors.passwordConfirm = 'Does not match password';
    }

    return errors;
  }
}

export default withRouter(SignUpForm);
