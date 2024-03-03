import { createLazyFileRoute } from '@tanstack/react-router';

import ClientDashboardPage from '@pages/client/dashboard';

export const Route = createLazyFileRoute('/_client/client/dashboard')({
  component: ClientDashboardPage,
});
