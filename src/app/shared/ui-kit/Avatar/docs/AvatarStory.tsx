import * as React from 'react';

import Avatar from '../index';
import style from './avatar-story.scss';

class AvatarStory extends React.Component<{}, {}> {
  render() {
    return (
      <div className={style.base}>
        <Avatar
          className={style.avatar}
          isOnline={true}
          showStatus={true}
          src="https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/93/fa/46/93fa4642-7e3c-8610-52fa-d270236a892b/AppIcon-1x_U007emarketing-85-220-0-6.png/1200x630bb.jpg"
        />
      </div>
    );
  }
}

export default AvatarStory;
