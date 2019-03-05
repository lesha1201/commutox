import * as React from 'react';
import * as ReactDOM from 'react-dom';

const { useRef, useState, useEffect } = React;

interface IProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  children: React.ReactNode;
  head?: React.ReactNode;
  initialContent?: string;
}

function Frame({ head, children, initialContent, ...rest }: IProps) {
  const iframeEl = useRef<HTMLIFrameElement>(null);
  const [iframeHead, setIframeHead] = useState<HTMLHeadElement | null>(null);
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null);
  const [isDocWritten, setIsDocWritten] = useState(false);
  useEffect(() => {
    if (!iframeEl.current) {
      return;
    }

    const { contentDocument, contentWindow } = iframeEl.current;

    if (!contentDocument || !contentWindow) {
      return;
    }

    const onLoad = () => {
      setIframeHead(contentDocument.head);
      setIframeBody(contentDocument.body);
    };

    if (initialContent && !isDocWritten) {
      contentDocument.open('text/html', 'replace');
      contentDocument.write(initialContent);
      contentDocument.close();

      setIsDocWritten(true);
    }

    contentWindow.addEventListener('load', onLoad);

    return () => {
      contentWindow.removeEventListener('load', onLoad);
    };
  }, [iframeEl.current]);

  return (
    <iframe {...rest} ref={iframeEl}>
      {iframeHead && ReactDOM.createPortal(head, iframeHead)}
      {iframeBody && ReactDOM.createPortal(children, iframeBody)}
    </iframe>
  );
}

export default Frame;
