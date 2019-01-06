import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import * as style from './tabs.scss';

/* Typings */
interface IProps {
  isSignInRoute: boolean;
}

/* Component */
function Tabs({ isSignInRoute }: IProps) {
  const cnSignIn = cx(isSignInRoute ? style.activeTab : style.tab);
  const cnSignUp = cx(!isSignInRoute ? style.activeTab : style.tab);

  return (
    <div className={style.tabs}>
      <Link to="/sign-in" className={cnSignIn}>
        Sign In
      </Link>
      <Link to="/sign-up" className={cnSignUp}>
        Sign Up
      </Link>
    </div>
  );
}

export default Tabs;
