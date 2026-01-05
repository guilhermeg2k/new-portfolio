interface ContactCardProps {
  title: string;
  iconURL: string;
  href: string;
}

const LinkCard = ({ title, iconURL, href }: ContactCardProps) => {
  return (
    <a
      href={href}
      className="duration-200 ease-in-out hover:text-orange-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="rounded-md bg-white">
        <img className="p-1" src={iconURL} width="30px" />
      </div>
    </a>
  );
};

export default LinkCard;
