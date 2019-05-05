import * as React from 'react';

import * as icons from 'app/shared/icons/icons';
import style from './style.scss';

function IconsList() {
  return (
    <div className={style.iconsList}>
      {Object.keys(icons).map(importName => {
        const Icon = (icons as any)[importName];
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
