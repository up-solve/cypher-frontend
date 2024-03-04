import { createRootRoute } from '@tanstack/react-router';

import RootLayout from '@layouts/RootLayout';
import NotFoundPage from '@pages/not-found';
import LoadingPage from '@pages/loading';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
  pendingComponent: LoadingPage,
});
