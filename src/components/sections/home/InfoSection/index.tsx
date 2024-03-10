import { FC } from 'react';

import InfoCard from '@components/molecules/InfoCard';
import InfoImageCard from '@components/molecules/InfoImageCard';

import { infoCards, infoImageCards } from '@constants/ui/infoSectionDetails';

export interface InfoSectionProps {}

const InfoSection: FC<InfoSectionProps> = () => {
  return (
    <div className="flex items-center py-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-abhaya text-2xl text-purple-400 font-extrabold tablet:text-left tablet:text-lg desktop:text-2xl">
          The premier platform connecting with verified freelance coders
        </h2>
        <p className="text-center font-abhaya text-md text-purple-400 tablet:text-left tablet:text-sm desktop:text-md">
          Lorem ipsum dolor sit amet consectetur. Nisl amet et lacus
          pellentesque magna dignissim malesuada ut. Euismod non vitae ut sed
          enim ut. Commodo auctor volutpat est posuere leo habitasse tellus
          scelerisque adipiscing. Vitae pharetra sit in erat. Dictumst senectus
          risus tincidunt mauris.
        </p>
        <div className="py-4 px-4 grid grid-cols-1 gap-10 tablet:px-1 tablet:grid-cols-3 tablet:gap-10 desktop:gap-32">
          {infoCards.map((infoCard) => (
            <div key={infoCard.title} className="col-span-1">
              <InfoCard
                title={infoCard.title}
                content={infoCard.description}
                icon={<infoCard.icon />}
              />
            </div>
          ))}
        </div>
        <h2 className="pt-8 text-center font-abhaya text-2xl text-purple-400 font-extrabold tablet:text-left tablet:text-lg desktop:text-2xl">
          The premier platform connecting with verified freelance coders
        </h2>
        <div className="py-4 px-4 grid grid-cols-1 gap-10 tablet:px-1 tablet:grid-cols-3 tablet:gap-10 desktop:gap-32">
          {infoImageCards.map((infoImageCard) => (
            <div key={infoImageCard.image} className="col-span-1">
              <InfoImageCard
                image={infoImageCard.image}
                content={infoImageCard.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
