import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

export interface ClientLayoutProps {
  withNavBar: boolean;
  withFooter: boolean;
}

const ClientLayout: FC<ClientLayoutProps> = ({
  withNavBar = true,
  withFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {withNavBar && '<ClientNavBar />'}
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
      {withFooter && '<ClientFooter />'}
    </div>
  );
};

export default ClientLayout;
