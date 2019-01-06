import ChatPage from 'app/pages/chat';
import { RouteProps } from 'react-router-dom';

const chatRoute: RouteProps = {
  exact: true,
  path: '/messages/:id',
  component: ChatPage,
};

export { chatRoute };
