import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const ChatPage = lazy(() => import(/* webpackChunkName: "chat" */ 'app/pages/chat'));

const chatRoute: RouteProps = {
  exact: true,
  path: '/messages/:id',
  component: ChatPage,
};

export { chatRoute };
