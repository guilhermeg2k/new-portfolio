import { ReactNode } from "react";

const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`rounded-lg border-[1px] border-orange-700 px-1 text-xs uppercase text-orange-500 md:py-1 md:px-2`}
    >
      {children}
    </div>
  );
};

export default Badge;
