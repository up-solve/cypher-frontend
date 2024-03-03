import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

export interface CypherLayoutProps {
  withNavBar: boolean;
  withFooter: boolean;
}

const CypherLayout: FC<CypherLayoutProps> = ({
  withNavBar = true,
  withFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {withNavBar && '<CypherNavBar />'}
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
      {withFooter && '<CypherFooter />'}
    </div>
  );
};

export default CypherLayout;
