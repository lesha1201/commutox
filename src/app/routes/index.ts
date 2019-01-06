import { chatRoute } from './chat';
import { feedRoute } from './feed';
import { notFoundRoute } from './not-found';
import { settingsRoute } from './settings';
import { signRoute } from './sign';

export const routes = [feedRoute, chatRoute, settingsRoute, signRoute, notFoundRoute];
