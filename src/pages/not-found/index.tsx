import { FC } from 'react';
import { Link } from '@tanstack/react-router';

export interface NotFoundPageProps {
  link: string;
  buttonText: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ link, buttonText }) => {
  return (
    <div className="flex items-center justify-center h-screen px-4 py-6 tablet:px-10 desktop:px-20">
      <div className="w-[32rem] flex flex-col items-center gap-8 justify-between">
        <img src="/images/404.png" alt="404" className="desktop:h-[32rem]" />
        <p className="text-center font-abhaya text-md">
          The page you were looking for could not be found. It might have been
          removed, renamed, or did not exist in the first place.
        </p>
        <Link to={link}>
          <button type="button">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
