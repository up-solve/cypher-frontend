import { FC } from 'react';
import { Link } from '@tanstack/react-router';

export interface BrandLogoProps {
  link: string;
}

const BrandLogo: FC<BrandLogoProps> = ({ link }) => {
  return (
    <Link to={link}>
      <img
        src="/logo.png"
        alt="Cypheryard Logo"
        width={200}
        height={50}
        className="cursor-pointer"
      />
    </Link>
  );
};

export default BrandLogo;
