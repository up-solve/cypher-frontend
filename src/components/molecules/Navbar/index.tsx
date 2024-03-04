import { FC } from 'react';

import BrandLogo from '@components/atoms/BrandLogo';
import NavLink from '@components/atoms/NavLink';
import ButtonDropdown from '@components/atoms/ButtonDropdown';

import { HOME_PAGE } from '@constants/routes.ui';
import {
  navbarLoginButton,
  navbarSignupButton,
} from '@constants/navbarButtons';

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="w-full h-24 px-4 bg-white-200 max-h-24 tablet:px-10 desktop:px-20">
      <div className="flex items-center w-full h-full tablet:gap-8 desktop:gap-20">
        {/* TODO: Remove border and change to new logo */}
        <div className="border">
          <BrandLogo link={HOME_PAGE} />
        </div>
        <div className="items-center justify-between hidden w-full tablet:flex desktop:flex">
          <ul className="flex items-center tablet:gap-4 desktop:gap-10">
            {/* TODO: Change href attributes */}
            <NavLink href={HOME_PAGE}>Home</NavLink>
            <NavLink href={HOME_PAGE}>Find Work</NavLink>
            <NavLink href={HOME_PAGE}>Request Wizard</NavLink>
          </ul>
          <div className="flex items-center tablet:gap-2 desktop:gap-4">
            <ButtonDropdown
              buttonTitle="Login"
              type="primary"
              dropdownValues={navbarLoginButton}
            />
            <ButtonDropdown
              buttonTitle="Sign Up"
              type="secondary"
              dropdownValues={navbarSignupButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
