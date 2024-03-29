import { FC, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import BrandLogo from '@components/atoms/BrandLogo';
import NavLink from '@components/atoms/NavLink';
import ButtonDropdown from '@components/atoms/ButtonDropdown';

import { HOME_PAGE } from '@constants/routes.ui';
import {
  navbarLoginButton,
  navbarSignupButton,
} from '@constants/ui/navbarButtons';

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-24 px-4 bg-white-200 max-h-24 tablet:px-10 desktop:px-20">
      <div className="flex items-center w-full h-full justify-between tablet:gap-8 desktop:gap-20">
        {/* TODO: Remove border and change to new logo */}
        <div className="border">
          <BrandLogo link={HOME_PAGE} />
        </div>
        <div className="items-center justify-between hidden w-full tablet:flex desktop:flex">
          <div className="flex items-center tablet:gap-4 desktop:gap-10">
            {/* TODO: Change href attributes */}
            <NavLink href={HOME_PAGE}>Home</NavLink>
            <NavLink href={HOME_PAGE}>Find Work</NavLink>
            <NavLink href={HOME_PAGE}>Request Wizard</NavLink>
          </div>
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
        <button
          type="button"
          onClick={handleMenuClick}
          aria-label="menu button"
          className={`cursor-pointer tablet:hidden desktop:hidden ${
            menuOpen ? 'hidden' : ''
          }`}
        >
          <AiOutlineMenu size={28} className="text-purple-400" />
        </button>
        <div
          className={`fixed z-[99] w-[100%] h-screen overflow-hidden p-10 top-0 tablet:hidden desktop:hidden bg-orange-200 ease-in duration-500
					${menuOpen ? 'left-0' : 'left-[100%] opacity-0'}`}
        >
          <div className="flex items-center justify-end w-full">
            <button
              type="button"
              onClick={handleMenuClick}
              aria-label="menu button"
              className="cursor-pointer"
            >
              <AiOutlineClose size={28} className="text-black-200" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <NavLink href={HOME_PAGE}>Home</NavLink>
            <NavLink href={HOME_PAGE}>Find Work</NavLink>
            <NavLink href={HOME_PAGE}>Request Wizard</NavLink>
            <NavLink href={HOME_PAGE}>Client Login</NavLink>
            <NavLink href={HOME_PAGE}>Client Signup</NavLink>
            <NavLink href={HOME_PAGE}>Cypher Login</NavLink>
            <NavLink href={HOME_PAGE}>Cypher Signup</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
