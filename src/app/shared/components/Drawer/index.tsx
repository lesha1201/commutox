import cx from 'classnames';
import * as React from 'react';

import styles from './drawer.scss';

const { useState } = React;

export function useDrawer(initState: boolean) {
  const [isShown, setIsShown] = useState(initState);

  return {
    isShown,
    toggleDrawer: () => {
      setIsShown(s => !s);
    },
    closeDrawer: () => {
      setIsShown(false);
    },
    openDrawer: () => {
      setIsShown(true);
    },
  };
}

/* Typings */
export interface IDrawerProps {
  isShown: boolean;
  close: (...args: any[]) => any;
  children?: React.ReactNode;
  className?: { drawer?: string; scrim?: string };
}

function Drawer({ children, className, close, isShown }: IDrawerProps) {
  const cn = cx(isShown ? styles.visible : styles.hidden, className && className.drawer);
  const cnScrim = cx(
    isShown ? styles.scrimVisible : styles.scrimHidden,
    className && className.scrim,
  );

  return (
    <>
      <aside className={cn}>{children}</aside>
      <div className={cnScrim} onClick={close} />
    </>
  );
}

export default Drawer;
