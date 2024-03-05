import { FC } from 'react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

import BrandLogo from '@components/atoms/BrandLogo';
import SimpleFooter from '@components/molecules/SimpleFooter';

import { HOME_PAGE } from '@constants/routes.ui';
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_NUMBER,
  SOCIAL_FACEBOOK,
  SOCIAL_LINKEDIN,
  SOCIAL_X,
} from '@constants/app';

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex flex-col bg-white-200">
      <div className="grid grid-cols-1 gap-6 tablet:grid-cols-3 py-6 px-4 tablet:px-10 desktop:px-20">
        <div className="flex flex-col gap-2">
          <a
            className="font-vietnam text-sm flex items-end gap-1 w-fit"
            href={`mailto:${CONTACT_EMAIL}`}
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
          >
            <HiMail className="text-lg" /> {CONTACT_EMAIL}
          </a>
          <a
            className="font-vietnam text-sm flex items-end gap-1 w-fit"
            href={`tel:${CONTACT_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
          >
            <HiPhone className="text-lg" /> {CONTACT_NUMBER}
          </a>
          <a
            className="font-vietnam text-sm flex items-end gap-1 w-fit"
            href={`http://maps.google.com/?q=${CONTACT_LOCATION}`}
            target="_blank"
            rel="noreferrer"
            aria-label="location"
          >
            <HiLocationMarker className="text-lg" /> {CONTACT_LOCATION}
          </a>
        </div>
        <div className="flex tablet:justify-center items-center row-start-1 tablet:row-auto">
          <BrandLogo link={HOME_PAGE} />
        </div>
        <div className="flex flex-col gap-2 tablet:items-end tablet:justify-center">
          <div className="flex flex-col gap-2">
            <p className="font-vietnam text-sm font-semibold">
              Social Profiles
            </p>
            <div className="flex gap-2 tablet:justify-between items-center ">
              <a
                className="p-2 bg-white-100 rounded-md hover:text-purple-400 transition-all duration-200 ease-in-out"
                href={SOCIAL_FACEBOOK}
                target="_blank"
                rel="noreferrer"
                aria-label="location"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                className="p-2 bg-white-100 rounded-md hover:text-purple-400 transition-all duration-200 ease-in-out"
                href={SOCIAL_X}
                target="_blank"
                rel="noreferrer"
                aria-label="location"
              >
                <FaSquareXTwitter className="text-lg" />
              </a>
              <a
                className="p-2 bg-white-100 rounded-md hover:text-purple-400 transition-all duration-200 ease-in-out"
                href={SOCIAL_LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="location"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default Footer;
