import * as React from 'react';

import { ButtonIcon, Header, Logo } from 'app/shared/components';
import Icon from 'app/shared/icons';

import Drawer, { useDrawer } from './components/Drawer';
import MessageCard from './components/MessageCard';
import css from './feed.scss';

const { useMemo } = React;

function FeedPage() {
  const { isShown, closeDrawer, toggleDrawer } = useDrawer(false);
  // Memoize main content in order to avoid rerender when [isShown] changes
  const mainContent = useMemo(
    () => (
      <>
        <Header className={css.header}>
          <ButtonIcon onClick={toggleDrawer}>
            <Icon name="menu" />
          </ButtonIcon>

          <div className={css.logo}>
            <Logo height="100%" />
          </div>

          <ButtonIcon>
            <Icon name="search" />
          </ButtonIcon>
        </Header>

        <Header.Wrapper className={css.headerWrapper}>
          {new Array(20).fill(0).map((el, inx) => (
            <MessageCard
              key={inx}
              newMessageCount={inx === 0 ? 3 : 0}
              isOnline={Boolean(Math.round(Math.random()))}
              showStatus={true}
              src="https://format-com-cld-res.cloudinary.com/image/private/s--4LNnIVDC--/c_limit,g_center,h_65535,w_550/a_auto,fl_keep_iptc.progressive,q_95/v1/575114c96aba3e63085150d7ab14a0e0/MILLIE-CONSTANCE-VICTORIA-EDIT-1web.jpg"
              messageInfo={{
                name: 'Name Surname',
                content: 'Hello! How are you?',
                time: '15 min. ago',
              }}
            />
          ))}
        </Header.Wrapper>
      </>
    ),
    [],
  );

  return (
    <>
      <Drawer isShown={isShown} close={closeDrawer} />
      {mainContent}
    </>
  );
}

export default FeedPage;
