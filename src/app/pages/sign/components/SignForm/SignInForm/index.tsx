import * as React from 'react';
import { Link as RouterLink, RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Form, Input, Label, Link } from 'app/shared/ui-kit';
import environment from 'app/relay/environment';
import SignInMutation from 'app/relay/mutations/SignInMutation';
import FormContainer from 'app/shared/components/FormContainer';
import style from '../sign-form.scss';

/* -- Types */

type SignInFormValues = {
  email: string;
  password: string;
};

interface SignInFormProps extends RouteComponentProps {
  children?: never;
}

/* -- Component */

class SignInForm extends React.Component<SignInFormProps> {
  initFormState: SignInFormValues = {
    email: '',
    password: '',
  };

  validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  onSubmit = async (data: SignInFormValues) => {
    try {
      const { signIn } = await SignInMutation.commit(environment, data);

      if (signIn?.user) {
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
        validationSchema={this.validationSchema}
        validateOn="submit"
      >
        {({ data, errors, onChange, onSubmit, isSubmitting }) => {
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
                <Button type="submit" className={style.signButton} size="full">
                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                </Button>
              </Form.Group>

              <Form.Group className={style.formGroup} justify="center">
                <Link as={RouterLink} to="/">
                  Forgot password?
                </Link>
              </Form.Group>
            </Form>
          );
        }}
      </FormContainer>
    );
  }
}

export default withRouter(SignInForm);
