import { FC } from 'react';

export interface LoadingPageProps {}

const LoadingPage: FC<LoadingPageProps> = () => {
  return (
    <div className="h-screen w-screen">
      <p className="animate-spin duration-500">Loading....</p>
    </div>
  );
};

export default LoadingPage;
