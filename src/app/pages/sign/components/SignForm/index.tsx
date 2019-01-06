import { Button, Form, Input, Label, Link } from 'app/shared/ui-kit';
import * as React from 'react';

import * as style from './sign-form.scss';

/* Typings */
interface IProps {
  children?: React.ReactNode;
}

/* Comonent */
class SignForm extends React.Component<IProps, {}> {
  render() {
    return (
      <Form className={style.signForm}>
        <Form.Group className={style.formGroup}>
          <Form.Field>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </Form.Field>
        </Form.Group>

        <Form.Group className={style.formGroup}>
          <Form.Field>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </Form.Field>
        </Form.Group>

        <Form.Group className={style.formGroup} align="center">
          <Button className={style.signButton} size="wide">
            Sign In
          </Button>

          <Link to="/">Forgot password?</Link>
        </Form.Group>
      </Form>
    );
  }
}

export default SignForm;

/*
  initial state
  render props
  error handling
*/
