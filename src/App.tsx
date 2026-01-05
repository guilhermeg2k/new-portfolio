import LanguageSelector from "./components/LanguageSelector";
import ProjectCard from "./components/ProjectCard";
import ShootingStars from "./components/shooting-stars/ShootingStars";
import ToolCard from "./components/ToolCard";
import WorkExperienceCard from "./components/WorkExperienceCard";
import useTranslation from "./hooks/useTranslation";
import Aside from "./components/Aside";
import Section from "./components/Section";

const App = () => {
  const { projects, works, footer, techs, main, titles } = useTranslation();

  return (
    <>
      <ShootingStars />
      <div className="h-full w-full text-orange-100">
        <main className="mx-auto flex w-full flex-col gap-8 px-4 pt-8 md:max-w-[90rem] md:pt-16 lg:flex-row lg:gap-10 lg:pt-32">
          <Aside />
          <div className="mt-0 flex flex-col gap-16 px-5 lg:mt-10">
            <div className="flex flex-col gap-4">
              <span className="text-9xl font-semibold">{main.role.title}</span>
              <span className="text-8xl font-semibold text-orange-300">
                {main.role.subtitle}
              </span>
              <span className="text-lg text-orange-200 lg:max-w-sm">
                {main.description}
              </span>
              <Section>
                <ul className="mt-5 flex flex-wrap gap-4">
                  {techs.map(({ title, iconURL }) => (
                    <ToolCard key={title} title={title} iconURL={iconURL} />
                  ))}
                </ul>
              </Section>
            </div>
            <Section>
              <div className="flex flex-col">
                <span className="text-7xl uppercase">
                  {titles.experience.title}
                </span>
                <span className="text-5xl uppercase text-orange-300">
                  {titles.experience.subtitle}
                </span>
              </div>
              <ul className="flex flex-col gap-4 lg:max-w-2xl">
                {works.map(
                  ({
                    position,
                    description,
                    company,
                    dateRange,
                    techStack,
                  }) => (
                    <WorkExperienceCard
                      key={position + company}
                      techStacks={techStack}
                      position={position}
                      company={company}
                      description={description}
                      dateRange={dateRange}
                    />
                  )
                )}
              </ul>
            </Section>
            <Section>
              <div className="flex flex-col">
                <span className="text-7xl uppercase">
                  {titles.projects.title}
                </span>
                <span className="text-5xl uppercase text-orange-300">
                  {titles.projects.subtitle}
                </span>
              </div>
              <ul className="flex w-full flex-col gap-10">
                {projects.map(
                  ({ id, title, sourceURL, description, screenshots }) => (
                    <ProjectCard
                      key={id}
                      title={title}
                      description={description.simple}
                      href={sourceURL}
                      imgUrl={screenshots[0]}
                    />
                  )
                )}
              </ul>
            </Section>

            <footer className="flex w-full flex-col justify-center gap-1 pb-4 text-xs lg:justify-start">
              <a
                className="font-semibold uppercase duration-200 ease-in-out hover:text-orange-500"
                href="https://github.com/guilhermeg2k/new-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.createdBy}
              </a>
              <span className="uppercase">{footer.iconsBy}</span>
            </footer>
            <LanguageSelector />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
