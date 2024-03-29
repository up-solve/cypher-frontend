import { FC, ReactNode } from 'react';
import { Link } from '@tanstack/react-router';

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  onclick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ href, children, onclick }) => {
  return (
    <Link to={href} onClick={onclick}>
      <div className="text-sm transition duration-300 font-vietnam group">
        {children}
        <span className="block rounded-full max-w-0 tablet:group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-400" />
      </div>
    </Link>
  );
};

export default NavLink;
