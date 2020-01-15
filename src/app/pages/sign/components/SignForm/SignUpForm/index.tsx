import { Button, Form, Input, Label } from 'app/shared/ui-kit';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from 'yup';

import FormContainer, { IFormProps } from 'app/shared/components/FormContainer';
import style from '../sign-form.scss';

function someApiCall(data: any) {
  return new Promise((resolve, reject) => {
    resolve({ email: 'Hello', password: 'World' });
  });
}

/* -- Types */

interface IProps extends RouteComponentProps {
  children?: never;
}

/* -- Component */

class SignUpForm extends React.Component<IProps, {}> {
  initState = {
    email: '',
    password: '',
    conf_password: '',
    full_name: '',
  };

  // TODO: for some reason I need to specify type explicitly
  validationSchema: Yup.ObjectSchema<
    Yup.Shape<
      object,
      {
        email: string;
        password: string;
        conf_password: string;
        full_name: string;
      }
    >
  > = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required(),
    conf_password: Yup.string().required(),
    full_name: Yup.string().required(),
  });

  onSubmit: IFormProps['onSubmit'] = (data, setFormState) => {
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
        initData={this.initState}
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
                <Form.Field error={errors.full_name}>
                  <Label htmlFor="full_name">Full name</Label>
                  <Input
                    hasError={!!errors.full_name}
                    onChange={onChange}
                    value={data.full_name}
                    type="full_name"
                    name="full_name"
                    id="full_name"
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
                <Form.Field error={errors.conf_password}>
                  <Label htmlFor="conf_password">Confirm password</Label>
                  <Input
                    hasError={!!errors.conf_password}
                    onChange={onChange}
                    value={data.conf_password}
                    type="password"
                    name="conf_password"
                    id="conf_password"
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

    if (data.password !== data.conf_password) {
      errors.conf_password = 'Does not match password';
    }

    return errors;
  }
}

export default withRouter(SignUpForm);
