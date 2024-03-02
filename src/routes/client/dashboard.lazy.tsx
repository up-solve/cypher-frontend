import { createLazyFileRoute } from '@tanstack/react-router';

import ClientDashboardPage from '@pages/client/dashboard';

export const Route = createLazyFileRoute('/client/dashboard')({
  component: ClientDashboardPage,
});
