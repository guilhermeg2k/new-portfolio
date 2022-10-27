import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  bgColor: string;
}

const Badge = ({ children, bgColor }: BadgeProps) => {
  return (
    <div
      className={`${bgColor} rounded-sm px-1 text-xs font-semibold uppercase text-white md:py-1 md:px-2`}
    >
      {children}
    </div>
  );
};

export default Badge;
