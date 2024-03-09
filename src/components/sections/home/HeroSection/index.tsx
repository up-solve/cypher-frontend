import { FC } from 'react';

import Button from '@components/atoms/Button';

export interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <div className="flex items-center py-10">
      <div className="grid grid-col-1 tablet:grid-cols-12 gap-4 py-10">
        <div className="tablet:col-span-5 py-5 flex flex-col gap-6 items-center justify-center tablet:items-start">
          <h1 className="text-3xl text-center text-purple-400 font-abhaya font-extrabold tablet:text-2xl tablet:text-left desktop:text-xxl">
            Join Cypher Today !
          </h1>
          <p className="text-md font-abhaya text-purple-400 text-center tablet:text-left">
            Lorem ipsum dolor sit amet consectetur. Tellus sed sed est cum diam.
            Nullam nunc donec mattis purus nibh. Risus at aenean vel varius
            mattis molestie pretium at. Enim scelerisque interdum amet cursus.
            Tellus sagittis suspendisse nunc ultricies.
          </p>
          <div className="w-fit">
            <Button type="primary" text="Browse our verified coders now!" />
          </div>
        </div>
        <div className="row-start-1 tablet:row-auto tablet:col-span-7 flex items-center justify-center">
          <img
            src="/images/banner.png"
            alt="banner"
            className="max-w-[300px] tablet:w-full tablet:max-w-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
