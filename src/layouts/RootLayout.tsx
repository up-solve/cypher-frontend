import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div className="font-abhaya text-md">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
};

export default RootLayout;
