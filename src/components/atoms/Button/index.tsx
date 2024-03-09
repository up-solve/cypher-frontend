import { FC, ReactNode } from 'react';

import { ImSpinner8 } from 'react-icons/im';

export interface ButtonProps {
  type: 'primary' | 'secondary';
  text: string;
  isLoading?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type,
  text,
  isLoading = false,
  children,
}) => {
  return (
    <button
      type="button"
      className={`w-full px-4 py-2 font-bold text-center rounded-lg text-sm font-manrope desktop:text-md
				${!isLoading ? 'duration-150 ease-in-out' : ''}
				${type === 'primary' ? 'bg-orange-400 text-white-200' : ''}
				${type === 'secondary' ? 'bg-purple-400 text-white-200' : ''}`}
      disabled={isLoading}
    >
      {isLoading && <ImSpinner8 className="animate-spin" size={24} />}
      {!isLoading && !children && <span>{text}</span>}
      {!isLoading && children && <span>{children}</span>}
    </button>
  );
};

export default Button;
