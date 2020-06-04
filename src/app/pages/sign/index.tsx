import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Logo from 'app/shared/components/Logo';
import { SignInForm, SignUpForm } from './components/SignForm';
import Tabs from './components/Tabs';
import style from './sign-page.scss';

type SignPageProps = RouteComponentProps;

class SignPage extends React.Component<SignPageProps> {
  /* ♻️ Lifecycle -------------------*/
  render() {
    const isSignInRoute = this.isSignInRoute();

    return (
      <div className={style.signPage}>
        <div className={style.logo}>
          <Logo />
        </div>

        <div className={style.card}>
          <Tabs isSignInRoute={isSignInRoute} />

          {isSignInRoute ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    );
  }
  /* End of Lifecycle ---------------*/

  /* 🔒 Private methods -------------*/
  private isSignInRoute() {
    return this.props.location.pathname.includes('sign-in');
  }
  /* End of Private methods ---------*/
}

export default SignPage;
