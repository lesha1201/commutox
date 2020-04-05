import cx from 'classnames';
import * as React from 'react';

import { equalToOr, getScrollParent } from 'app/shared/utils';
import styles from './header.scss';

const { useRef, useState, useEffect } = React;

/* -- Types */

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/* -- Utils */

function getScrollTop(node: Element, ownerDocument = document) {
  return node === ownerDocument.documentElement
    ? ownerDocument.documentElement.scrollTop || ownerDocument.body.scrollTop
    : node.scrollTop;
}

/* -- Main */

function Header({ children, className, style, ...domAttrs }: HeaderProps) {
  const headerEl = useRef<HTMLElement>(null);
  const [tranlateY, setTranlateY] = useState(0);
  useEffect(() => {
    if (!headerEl.current || !headerEl.current.ownerDocument) {
      return;
    }

    const { ownerDocument } = headerEl.current;
    const scrollableParent = getScrollParent(headerEl.current);

    /**
     * When we have scroll on <html /> or <body /> and we're scrolling, we actually scroll Window,
     * so we set listener on Window in this case
     */
    const targetForListener =
      equalToOr(scrollableParent, ownerDocument.documentElement, ownerDocument.body) &&
      ownerDocument.defaultView
        ? ownerDocument.defaultView
        : scrollableParent;

    const headerHeight = headerEl.current.clientHeight;
    let scrollTop = getScrollTop(scrollableParent);

    function onScroll() {
      const newScrollTop = getScrollTop(scrollableParent);
      const scrolledDistance = scrollTop - newScrollTop;

      setTranlateY(prevState => {
        const newTranslateY = Math.max(prevState + scrolledDistance, headerHeight * -1);
        return newTranslateY > 0 ? 0 : newTranslateY;
      });

      scrollTop = newScrollTop;
    }

    targetForListener.addEventListener('scroll', onScroll);

    return () => {
      targetForListener.removeEventListener('scroll', onScroll);
    };
  }, []);

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

/* -- Compounds */

function HeaderWrapper({ className, children, ...domAttrs }: WrapperProps) {
  const cn = cx(className, styles.wrapper);
  return (
    <div {...domAttrs} className={cn}>
      {children}
    </div>
  );
}

export default Header;
