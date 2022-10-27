import { ReactNode, useState } from 'react';
import Badge from './components/Badge';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ToolCard from './components/ToolCard';
import WorkExperienceCard from './components/WorkExperienceCard';
import { contacts, projects, techs, works } from './data';

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
          <SectionTitle>Hi, I'm Guilherme </SectionTitle>
          <p className="text-sm md:text-lg">
            I'm a Full Stack Developer specialized in the Front-end side of web
            development that loves to give life to interfaces
          </p>
        </Section>

        <Section>
          <SectionTitle>Some of my Projects</SectionTitle>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
            {projects.map(({ id, title, description, tags }) => (
              <ProjectCard
                title={title}
                description={description}
                tags={tags}
                onClick={() => onProjectClickHandler(id)}
              />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>My Work Experience </SectionTitle>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {works.map(({ position, description, company, dateRange }) => (
              <WorkExperienceCard
                position={position}
                company={company}
                description={description}
                dateRange={dateRange}
              />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>My Favorite Techs </SectionTitle>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-10 md:grid-cols-3">
            {techs.map(({ title, iconURL }) => (
              <ToolCard title={title} iconURL={iconURL} />
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>My Links </SectionTitle>
          <ul className="flex flex-col gap-2">
            {contacts.map(({ title, iconURL }) => (
              <ContactCard title={title} iconURL={iconURL} />
            ))}
          </ul>
        </Section>

        <footer className="flex w-full flex-col justify-center gap-1 text-xs  md:justify-start">
          <span className="font-semibold uppercase">
            Page created by guilhermeg2k available on github
          </span>
          <span className="uppercase">Icons by worldvectorlogo</span>
        </footer>
      </main>
    </div>
  );
};

export default App;
