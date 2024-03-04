import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

export interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div className="font-abhaya text-md bg-white-100">
      <Outlet />
    </div>
  );
};

export default RootLayout;
