interface ContactCardProps {
  title: string;
  iconURL: string;
}

const ContactCard = ({ title, iconURL }: ContactCardProps) => {
  return (
    <li className="flex items-center gap-2">
      <div className="rounded-sm bg-white">
        <img className="p-1" src={iconURL} width="23px" />
      </div>
      <span className="">{title}</span>
    </li>
  );
};

export default ContactCard;
