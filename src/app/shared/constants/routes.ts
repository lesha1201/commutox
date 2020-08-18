export const PATH = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  feed: '/chats',
  chat: '/chats/:id',
  settings: '/settings',
} as const;

export const DEFAULT_REDIRECT = PATH.feed;
