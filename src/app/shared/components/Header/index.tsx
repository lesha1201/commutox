import cx from 'classnames';
import * as React from 'react';

import * as styles from './header.scss';

const { useRef, useState, useEffect } = React;

interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface IWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Header({ children, className, style, ...domAttrs }: IHeaderProps) {
  const headerEl = useRef<HTMLElement>(null);
  const [tranlateY, setTranlateY] = useState(0);
  useEffect(() => {
    if (!headerEl.current || !headerEl.current.ownerDocument) {
      return;
    }

    const { ownerDocument } = headerEl.current;
    const headerHeight = headerEl.current.clientHeight;
    let scrollTop =
      ownerDocument.documentElement.scrollTop || ownerDocument.body.scrollTop;

    function onScroll() {
      const newScrollTop =
        ownerDocument.documentElement.scrollTop || ownerDocument.body.scrollTop;
      const scrolledDistance = scrollTop - newScrollTop;

      setTranlateY(prevState => {
        const newTranslateY = Math.max(prevState + scrolledDistance, headerHeight * -1);
        return newTranslateY > 0 ? 0 : newTranslateY;
      });

      scrollTop = newScrollTop;
    }

    // Because header has fixed position we need to track scroll of the document/body
    ownerDocument.addEventListener('scroll', onScroll);

    return () => {
      ownerDocument.removeEventListener('scroll', onScroll);
    };
  }, [headerEl]);

  const cn = cx(className, styles.header);
  const newStyle = {
    ...style,
    transform: `translate3d(0px, ${tranlateY}px, 0px)`,
  };

  return (
    <header {...domAttrs} style={newStyle} ref={headerEl} className={cn}>
      {children}
    </header>
  );
}

Header.Wrapper = HeaderWrapper;

/* Compounds */
function HeaderWrapper({ className, children, ...domAttrs }: IWrapperProps) {
  const cn = cx(className, styles.wrapper);
  return (
    <div {...domAttrs} className={cn}>
      {children}
    </div>
  );
}

export default Header;
