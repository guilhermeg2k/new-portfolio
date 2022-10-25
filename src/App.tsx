import { ReactNode } from 'react';
import ProjectCard from './components/ProjectCard';
import ToolCard from './components/ToolCard';
import { projects, tools } from './data';

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-cinzel text-xl font-bold md:text-2xl">{children}</h1>
  );
};

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="flex flex-col gap-5">{children}</section>;
};

const App = () => {
  return (
    <div className="h-full w-full bg-stone-900 text-white">
      <main className="mx-auto  flex max-w-4xl flex-col gap-5 px-4 pt-10 md:gap-16 md:pt-20 lg:pt-36">
        <Section>
          <SectionTitle>Hi, I'm Guilherme 👋</SectionTitle>
          <p className="text-sm md:text-lg">
            I'm a Full Stack Developer specialized in the Front-end side of
            development that loves to give life to interfaces
          </p>
        </Section>
        <Section>
          <SectionTitle>My Favorite Tools 🛠️</SectionTitle>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-10">
            {tools.map((tool) => (
              <ToolCard title={tool.title} iconURL={tool.iconURL} />
            ))}
          </ul>
        </Section>
        <Section>
          <SectionTitle>Some of my Projects 🚧</SectionTitle>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </>
            ))}
          </div>
        </Section>
        <Section>
          <SectionTitle>My Work Experience 💼</SectionTitle>
          <div className="grid grid-cols-2 gap-10"></div>
        </Section>
      </main>
    </div>
  );
};

export default App;
