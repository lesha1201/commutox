import * as React from 'react';

import * as icons from 'app/shared/icons';
import style from './style.scss';

function IconsList() {
  return (
    <div className={style.iconsList}>
      {Object.keys(icons).map(iconName => {
        const Icon = (icons as any)[iconName];

        return (
          <div className={style.iconInfo} key={iconName}>
            <div className={style.iconWrapper}>
              <Icon />
            </div>

            <div>{Icon.displayName}</div>
          </div>
        );
      })}
    </div>
  );
}

export { IconsList };
