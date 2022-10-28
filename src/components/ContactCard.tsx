interface ContactCardProps {
  title: string;
  iconURL: string;
  href: string;
}

const ContactCard = ({ title, iconURL, href }: ContactCardProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <li className="flex items-center gap-2">
        <div className="rounded-sm bg-white">
          <img className="p-1" src={iconURL} width="23px" />
        </div>
        <span className="">{title}</span>
      </li>
    </a>
  );
};

export default ContactCard;
