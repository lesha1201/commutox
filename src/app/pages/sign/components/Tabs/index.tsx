import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { PATH } from 'app/shared/constants';
import style from './tabs.scss';

/* -- Types */

interface TabsProps {
  isSignInRoute: boolean;
}

/* -- Component */

function Tabs({ isSignInRoute }: TabsProps) {
  const cnSignIn = cx(isSignInRoute ? style.activeTab : style.tab);
  const cnSignUp = cx(!isSignInRoute ? style.activeTab : style.tab);

  return (
    <div className={style.tabs}>
      <Link to={PATH.signIn} className={cnSignIn}>
        Sign In
      </Link>
      <Link to={PATH.signUp} className={cnSignUp}>
        Sign Up
      </Link>
    </div>
  );
}

export default Tabs;
