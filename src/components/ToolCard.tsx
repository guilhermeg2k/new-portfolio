interface ToolCardProps {
  title: string;
  iconURL: string;
}

const ToolCard = ({ title, iconURL }: ToolCardProps) => {
  return (
    <li className="flex h-10 w-10 items-center justify-center gap-2 rounded-md border-[1px] border-orange-400 p-2">
      <img src={iconURL} alt={title} className="saturate-100" />
    </li>
  );
};

export default ToolCard;
