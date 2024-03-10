import { FC } from 'react';

export interface InfoImageCardProps {
  content: string;
  image: string;
}

const InfoImageCard: FC<InfoImageCardProps> = ({ content, image }) => {
  return (
    <div className="flex flex-col items-center h-full gap-3 rounded-lg tablet:items-start">
      <img src={image} alt={image} className="rounded-lg" />
      <p className="text-center font-abhaya text-wrap text-grey-200 tablet:text-left">
        {content}
      </p>
    </div>
  );
};

export default InfoImageCard;
