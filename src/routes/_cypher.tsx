import { createFileRoute } from '@tanstack/react-router';

import CypherLayout from '@layouts/CypherLayout';

export const Route = createFileRoute('/_cypher')({
  component: CypherLayout,
});
