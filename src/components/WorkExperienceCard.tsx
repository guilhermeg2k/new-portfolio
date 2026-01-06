import Badge from "./Badge";

interface WorkExperienceCardProps {
  company: string;
  position: string;
  dateRange: string;
  description: string;
  techStacks: string[];
}

const WorkExperienceCard = ({
  company,
  position,
  dateRange,
  description,
  techStacks,
}: WorkExperienceCardProps) => {
  return (
    <li className="flex w-full flex-col gap-4 rounded-md">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{company}</h2>
        <div>
          <h3 className="font-semibold">{position}</h3>
          <h4 className="text-sm font-extralight">{dateRange}</h4>
        </div>
      </div>
      <p className="text-orange-200 lg:max-w-xl">{description}</p>
      <div>
        <div className="flex flex-wrap gap-1">
          {techStacks.map((tech) => (
            <Badge>{tech}</Badge>
          ))}
        </div>
      </div>
    </li>
  );
};

export default WorkExperienceCard;
