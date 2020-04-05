import * as React from 'react';

import * as icons from 'app/shared/icons/icons';
import style from './style.scss';

function IconsList() {
  return (
    <div className={style.iconsList}>
      {(Object.keys(icons) as Array<keyof typeof icons>).map(importName => {
        // eslint-disable-next-line import/namespace
        const Icon = icons[importName];
        // @ts-ignore Component can have displayName
        const iconName = Icon.displayName || Icon.name;

        return (
          <div className={style.iconInfo} key={iconName}>
            <div className={style.iconWrapper}>
              <Icon />
            </div>

            <div>{iconName}</div>
          </div>
        );
      })}
    </div>
  );
}

export { IconsList };
