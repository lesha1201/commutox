import cx from 'classnames';
import * as React from 'react';

import styles from './drawer.scss';

const { useState, useCallback } = React;

/* -- Hooks */

export function useDrawer(initState: boolean) {
  const [isShown, setIsShown] = useState(initState);

  return {
    isShown,
    toggleDrawer: useCallback(() => {
      setIsShown(s => !s);
    }, []),
    closeDrawer: useCallback(() => {
      setIsShown(false);
    }, []),
    openDrawer: useCallback(() => {
      setIsShown(true);
    }, []),
  };
}

/* -- Types */

export interface DrawerProps {
  isShown: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
  className?: { drawer?: string; scrim?: string };
}

/* -- Main */

function Drawer({ children, className, onClose, isShown }: DrawerProps) {
  const cn = cx(isShown ? styles.visible : styles.hidden, className && className.drawer);
  const cnScrim = cx(
    isShown ? styles.scrimVisible : styles.scrimHidden,
    className && className.scrim,
  );

  return (
    <>
      <aside className={cn}>{children}</aside>
      <div className={cnScrim} onClick={onClose} />
    </>
  );
}

export default Drawer;
