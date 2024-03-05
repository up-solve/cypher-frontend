import { FC } from 'react';

import { APP_NAME } from '@constants/app';

export interface SimpleFooterProps {}

const SimpleFooter: FC<SimpleFooterProps> = () => {
  return (
    <div className="flex justify-center items-center bg-white-200 border-t min-h-10 border-grey-100/20 w-full">
      <p className="text-sm py-4 font-vietnam text-grey-100">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </p>
    </div>
  );
};

export default SimpleFooter;
