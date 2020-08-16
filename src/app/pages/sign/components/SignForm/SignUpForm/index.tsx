import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Form, Input, Label } from 'app/shared/ui-kit';
import environment from 'app/relay/environment';
import FormContainer from 'app/shared/components/FormContainer';
import SignUpMutation from 'app/relay/mutations/SignUpMutation';
import style from '../sign-form.scss';

/* -- Types */

type SignUpFormValues = {
  email: string;
  password: string;
  passwordConfirmation: string;
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
    passwordConfirmation: '',
    fullName: '',
  };

  validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    passwordConfirmation: Yup.string().required(),
    fullName: Yup.string().required(),
  });

  onSubmit = async (data: SignUpFormValues) => {
    try {
      const { signUp } = await SignUpMutation.commit(environment, data);

      if (signUp && signUp.user) {
        // TODO: all route's paths should be in a constant variable
        this.props.history.push('/');
      }
    } catch (e) {
      console.error(e);
    }
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
                <Form.Field error={errors.passwordConfirmation}>
                  <Label htmlFor="passwordConfirmation">Confirm password</Label>
                  <Input
                    hasError={!!errors.passwordConfirmation}
                    onChange={onChange}
                    value={data.passwordConfirmation}
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
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

  private validateForm(data: SignUpFormValues) {
    const errors: Partial<SignUpFormValues> = {};

    if (data.password !== data.passwordConfirmation) {
      errors.passwordConfirmation = 'Does not match password';
    }

    return errors;
  }
}

export default withRouter(SignUpForm);
