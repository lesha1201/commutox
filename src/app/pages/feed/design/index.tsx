import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

// import Button from 'app/shared/ui-kit/Button';
import Header from 'app/shared/components/Header/index';
import Logo from 'app/shared/components/Logo';
import MenuIcon from 'app/shared/icons/Menu';
import SearchIcon from 'app/shared/icons/Search';
import Avatar from 'app/shared/ui-kit/Avatar';
import './style.scss';

interface IMCProps {
  isNew: boolean;
}

function MessageCard({ isNew }: IMCProps) {
  const cn = cx('message-card', isNew && 'message-card--new');

  return (
    <Link to="#" className={cn}>
      <Avatar
        className="message-card__avatar"
        showStatus={true}
        isOnline={Boolean(Math.round(Math.random()))}
        src="http://www.ehairstyles.org/wp-content/uploads/2016/07/The-Great-Gatsby-Leonardo-DiCaprio-Hairstyle.jpg"
      />
      {/* <div className="message-card__avatar" />   */}

      <div className="message-card__info">
        <div className="message-card__row">
          <div className="message-card__name">Name Surname</div>
          <div className="message-card__time">15 min. ago</div>
        </div>

        <div className="message-card__row">
          <div className="message-card__message">Hello! How are you?</div>

          <div className="message-card__counter">1</div>
        </div>
      </div>
    </Link>
  );
}

function Design() {
  return (
    <div className="page">
      {/* <aside className="drawer">
        <div className="drawer__box" />
      </aside>

      <div className="drawer-scrim" /> */}

      <Header className="header">
        <button className="temp-icon">
          <MenuIcon height="100%" />
        </button>

        <Logo className="logo" height="100%" />

        <button className="temp-icon">
          <SearchIcon />
        </button>
      </Header>
      {/* <header className="header">
        <div className="header__fixed">
          <button className="temp-icon">
            <MenuIcon height="100%" />
          </button>

          <Logo className="logo" height="100%" />

          <button className="temp-icon">
            <SearchIcon />
          </button>
        </div>
      </header> */}

      <Header.Wrapper className="header-wrapper">
        <div className="feed">
          {[...Array(20).keys()].map((el, inx) => (
            <MessageCard key={inx} isNew={inx === 0} />
          ))}
        </div>
      </Header.Wrapper>
    </div>
  );
}

export default Design;
