import Chat from 'app/pages/chat';

const chatRoute = {
  exact: true,
  path: '/messages/:id',
  component: Chat,
};

export { chatRoute };
