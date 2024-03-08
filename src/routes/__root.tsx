import { createRootRoute } from '@tanstack/react-router';

import RootLayout from '@layouts/RootLayout';
import NotFoundPage from '@pages/not-found';
import LoadingPage from '@pages/loading';

import { HOME_PAGE } from '@constants/routes.ui';
import { GO_HOME } from '@constants/messages';

export const Route = createRootRoute({
  component: RootLayout,
  pendingComponent: LoadingPage,
  notFoundComponent: () => {
    return <NotFoundPage link={HOME_PAGE} buttonText={GO_HOME} />;
  },
});
