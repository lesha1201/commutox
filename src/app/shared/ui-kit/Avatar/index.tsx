import cx from 'classnames';
import * as React from 'react';

import * as style from './avatar.scss';

/* Typings */
export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Source to an image */
  src: string;
  /** Determines to show onine status or not */
  showStatus?: boolean;
  /**
   * Changes color of the status circle depending on the status.
   * Works if showStatus is set to true
   */
  isOnline?: boolean;
}

/* Component */
function Avatar({ src, showStatus, className, isOnline, ...domAttrs }: IProps) {
  const cn = cx(
    className,
    style.circle,
    showStatus && (isOnline ? style.online : style.offline),
  );
  const cnImg = cx(style.image);

  return (
    <div className={cn} {...domAttrs}>
      <img className={cnImg} alt="Avatar" src={src} />
    </div>
  );
}

Avatar.defaultProps = {
  showStatus: false,
};

export default Avatar;
