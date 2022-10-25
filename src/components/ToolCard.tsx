interface ToolCardProps {
  title: string;
  iconURL: string;
}

const ToolCard = ({ title, iconURL }: ToolCardProps) => {
  return (
    <li className="flex items-center gap-2">
      <img src={iconURL} width="25px" />
      <span className="font-semibold uppercase text-xs md:text-sm ">
        {title}
      </span>
    </li>
  );
};

export default ToolCard;
