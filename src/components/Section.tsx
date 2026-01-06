import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col gap-5 lg:gap-10">{children}</section>
  );
};

export default Section;
