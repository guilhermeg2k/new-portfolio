interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  href: string;
}

const ProjectCard = ({
  title,
  description,
  imgUrl,
  href,
}: ProjectCardProps) => {
  return (
    <a
      className="h-30 flex cursor-pointer flex-col gap-2 rounded-md border-0 transition delay-75 ease-in-out hover:scale-105 lg:h-24"
      href={href}
      rel="noopener"
      target="_blank"
    >
      <div className="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-lg">
        <img
          src={imgUrl}
          alt="project card image background with blur"
          className="absolute h-full w-full scale-110 rounded-lg object-cover blur-md"
        />
        <div className="z-10 h-full w-full self-end bg-stone-900 bg-opacity-50">
          <div className="z-10 flex flex-col gap-2 p-2">
            <h2 className="text-2xl font-semibold text-orange-200 md:text-4xl">
              {title}
            </h2>
            <p className="text-base">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
