import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

import Navbar from '@components/molecules/Navbar';
import Footer from '@components/molecules/Footer';

export interface DefaultLayoutProps {
  withNavBar: boolean;
  withFooter: boolean;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({
  withNavBar = true,
  withFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {withNavBar && <Navbar />}
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
      {withFooter && <Footer />}
    </div>
  );
};

export default DefaultLayout;
