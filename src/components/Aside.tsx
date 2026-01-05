import useTranslation from "../hooks/useTranslation";
import LinkCard from "./LinkCard";
import Section from "./Section";

const Aside = () => {
  const { home, links } = useTranslation();

  return (
    <aside className="top-0 h-fit w-full pt-10 sm:block lg:sticky lg:max-w-md">
      <div className="flex h-full flex-col gap-6 rounded-md px-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="font-cinzel text-3xl font-bold text-orange-600 md:text-5xl">
              {home.introduction.title},
            </h1>
          </div>
          <p className="text-lg">{home.introduction.description}</p>
        </div>

        <Section>
          <ul className="flex gap-2">
            {links.map(({ title, iconURL, link }) => (
              <LinkCard
                key={title}
                title={title}
                iconURL={iconURL}
                href={link}
              />
            ))}
          </ul>
        </Section>
      </div>
    </aside>
  );
};

export default Aside;
