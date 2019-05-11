import cx from 'classnames';
import * as React from 'react';

import css from './counter.scss';

interface ICounterProps {
  color: 'primary';
  isInverted: boolean;
  className?: string;
  children?: React.ReactNode;
}

function Counter({ className, color, isInverted, ...rest }: ICounterProps) {
  const finalColor = isInverted ? color + 'Inverted' : color;
  const cn = cx(css[finalColor as keyof typeof css], className);

  return <div className={cn} {...rest} />;
}

Counter.defaultProps = {
  color: 'primary',
  isInverted: false,
};

export default Counter;
