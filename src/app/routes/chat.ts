import { lazy } from 'react';

import { PATH } from 'app/shared/constants/routes';
import { RouteConfig } from './types';

const ChatPage = lazy(() => import(/* webpackChunkName: "chat" */ 'app/pages/chat'));

const chatRoute: RouteConfig = {
  exact: true,
  path: PATH.chat,
  component: ChatPage,
};

export { chatRoute };
