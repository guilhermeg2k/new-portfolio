interface WorkExperienceCardProps {
  company: string;
  position: string;
  dateRange: string;
  description: string;
}

const WorkExperienceCard = ({
  company,
  position,
  dateRange,
  description,
}: WorkExperienceCardProps) => {
  return (
    <li className="flex flex-col gap-3">
      <h2 className="font-cinzel text-base font-semibold text-orange-400 md:text-xl">
        {company}
      </h2>
      <div className="flex items-center justify-between text-xs font-semibold uppercase text-orange-300 md:text-sm">
        <h3>{position}</h3>
        <h4>{dateRange}</h4>
      </div>

      <p className="text-sm md:text-base">{description}</p>
    </li>
  );
};

export default WorkExperienceCard;
