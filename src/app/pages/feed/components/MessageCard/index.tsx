import * as React from 'react';
import { Link } from 'react-router-dom';

import { Counter } from 'app/shared/components';
import { Avatar } from 'app/shared/ui-kit';
import css from './message-card.scss';

interface MessageCardProps {
  src: string;
  newMessageCount: number;
  showStatus: boolean;
  isOnline: boolean;
  messageInfo: {
    name: string;
    time: number | string;
    content: string;
  };
}

function MessageCard({
  newMessageCount,
  messageInfo,
  showStatus,
  isOnline,
  src,
}: MessageCardProps) {
  return (
    <Link to="#" className={newMessageCount > 0 ? css.newMessage : css.normal}>
      <Avatar
        className={css.avatar}
        showStatus={showStatus}
        isOnline={isOnline}
        src={src}
      />

      <div className={css.info}>
        <div className={css.row}>
          <div className={css.name}>{messageInfo.name}</div>
          <div className={css.time}>{messageInfo.time}</div>
        </div>

        <div className={css.row}>
          <div className={css.message}>{messageInfo.content}</div>
          <Counter className={css.counter} isInverted={true}>
            {newMessageCount}
          </Counter>
        </div>
      </div>
    </Link>
  );
}

MessageCard.defaultProps = {
  newMessageCount: 0,
  isOnline: false,
  showStatus: false,
};

export default MessageCard;
