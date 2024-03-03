import { createLazyFileRoute } from '@tanstack/react-router';

import HomePage from '@pages/home';

export const Route = createLazyFileRoute('/_default/home')({
  component: HomePage,
});
