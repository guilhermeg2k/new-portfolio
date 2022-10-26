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

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Array<{ title: string; bgColor: string }>;
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <li className="flex cursor-pointer flex-col gap-2 transition delay-75 ease-in-out hover:scale-105">
      <div className="flex flex-col gap-2">
        <h2 className="font-cinzel text-base font-semibold text-orange-400 md:text-xl">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge bgColor={tag.bgColor}>{tag.title}</Badge>
          ))}
        </div>
      </div>

      <p className="text-sm md:text-base">{description}</p>
    </li>
  );
};

export default ProjectCard;
