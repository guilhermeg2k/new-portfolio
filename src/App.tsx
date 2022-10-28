import { ReactNode, useState } from 'react';
import LinkCard from './components/LinkCard';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ToolCard from './components/ToolCard';
import WorkExperienceCard from './components/WorkExperienceCard';
import useTranslation from './hooks/useTranslation';

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-cinzel text-xl font-bold text-orange-600 md:text-2xl">
      {children}
    </h1>
  );
};

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="flex flex-col gap-5">{children}</section>;
};

const App = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(1);
  const { home, links, projects, techs, works, footer } = useTranslation();

  const onProjectClickHandler = (id: number) => {
    setCurrentProjectId(id);
    setIsProjectModalOpen(true);
  };

  return (
    <div className="h-full w-full bg-stone-900 text-orange-100">
      <ProjectModal
        open={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        projectId={currentProjectId}
      />
      <main className="mx-auto  flex max-w-4xl flex-col gap-10 px-4 py-10 md:gap-16 md:pt-20 lg:pt-36">
        <Section>
          <SectionTitle>{home.introduction.title}</SectionTitle>
          <p className="text-sm md:text-lg">{home.introduction.description}</p>
        </Section>

        <Section>
          <SectionTitle>{home.projectsTitle}</SectionTitle>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
            {projects.map(({ id, title, description, tags }) => (
              <ProjectCard
                key={id}
                title={title}
                description={description.simple}
                tags={tags}
                onClick={() => onProjectClickHandler(id)}
              />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>{home.worksTitle}</SectionTitle>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {works.map(({ position, description, company, dateRange }) => (
              <WorkExperienceCard
                key={position + company}
                position={position}
                company={company}
                description={description}
                dateRange={dateRange}
              />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>{home.techsTitle}</SectionTitle>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-10 md:grid-cols-3">
            {techs.map(({ title, iconURL }) => (
              <ToolCard key={title} title={title} iconURL={iconURL} />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>{home.linksTitle}</SectionTitle>
          <ul className="flex flex-col gap-2">
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

        <footer className="flex w-full flex-col justify-center gap-1 text-xs  md:justify-start">
          <a
            className="font-semibold uppercase"
            href="https://github.com/guilhermeg2k/new-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.createdBy}
          </a>
          <span className="uppercase">{footer.iconsBy}</span>
        </footer>
      </main>
    </div>
  );
};

export default App;
