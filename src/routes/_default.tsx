import DefaultLayout from '@layouts/DefaultLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_default')({
  component: DefaultLayout,
});
