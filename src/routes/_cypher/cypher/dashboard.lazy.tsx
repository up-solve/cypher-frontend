import { createLazyFileRoute } from '@tanstack/react-router';

import CypherDashboardPage from '@pages/cypher/dashboard';

export const Route = createLazyFileRoute('/_cypher/cypher/dashboard')({
  component: CypherDashboardPage,
});
