import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { ButtonIcon, Counter } from 'app/shared/components';
import MainDrawer, {
  DrawerProps as MainDrawerProps,
  useDrawer,
} from 'app/shared/components/Drawer';
import Icon from 'app/shared/icons';
import { Avatar } from 'app/shared/ui-kit';

import css from './drawer.scss';

const drawerCn = {
  drawer: css.drawer,
  scrim: css.drawerScrim,
};

const iconCn = {
  wrapper: css.navItemIcon,
};

interface DrawerProps extends MainDrawerProps {}

function Drawer({ isShown, onClose }: DrawerProps) {
  return (
    <MainDrawer className={drawerCn} isShown={isShown} onClose={onClose}>
      <div className={css.header}>
        <ButtonIcon>
          <Icon name="logout" />
        </ButtonIcon>

        <div className={css.avatarWithName}>
          <Avatar
            className={css.avatar}
            showStatus={true}
            isOnline={Boolean(Math.round(Math.random()))}
            src="http://sydelorme.com/wp-content/uploads/2015/11/Julien-2.jpg"
          />
          <span className={css.username}>Name Surname</span>
        </div>

        <ButtonIcon>
          <Icon name="settings" />
        </ButtonIcon>
      </div>

      <nav>
        <ul className={css.navList}>
          <li className={cx(css.navItem, css.navItemActive)}>
            <Link to="#" className={css.navLink}>
              <Icon name="chat" className={iconCn} />
              <div className={css.navItemText}>Messages</div>
              <Counter className={css.navItemCounter} isInverted={true}>
                1
              </Counter>
            </Link>
          </li>

          <li className={css.navItem}>
            <Link to="#" className={css.navLink}>
              <Icon name="settings" className={iconCn} />
              <div className={css.navItemText}>Settings</div>
            </Link>
          </li>
        </ul>
      </nav>
    </MainDrawer>
  );
}

export default Drawer;
export { useDrawer };
