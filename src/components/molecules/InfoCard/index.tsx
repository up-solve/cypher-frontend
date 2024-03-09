import { FC, ReactNode } from 'react';

export interface InfoCardProps {
  title: string;
  content: string;
  icon: ReactNode;
}

const InfoCard: FC<InfoCardProps> = ({ title, content, icon }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border-grey h-full tablet:items-start">
      <span className="text-orange-400 text-xl tablet:text-lg desktop:text-xl">
        {icon}
      </span>
      <h3 className="font-manrope font-bold text-purple-400 tablet:text-md">
        {title}
      </h3>
      <p className="font-abhaya text-center text-sm text-wrap text-grey-200 tablet:text-sm tablet:text-left">
        {content}
      </p>
    </div>
  );
};

export default InfoCard;
