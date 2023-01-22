import { ReactNode, useState } from 'react';
import useTranslation from '../hooks/useTranslation';
import Badge from './Badge';
import CodeBracket from './icons/CodeBracket';
import Eye from './icons/Eye';
import ZoomIn from './icons/ZoomIn';
import Modal from './Modal';
import Screenshots from './Screenshots';

const Link = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <a
      className={`font-roboto flex min-w-[100px] items-center gap-2 rounded-sm bg-orange-600 py-2 px-4 text-xs font-bold uppercase text-white duration-200 ease-in-out hover:bg-orange-500 active:bg-orange-600 md:text-sm`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  projectId: number;
}

const ProjectModal = ({ open, onClose, projectId }: ProjectModalProps) => {
  const [isScreenshotsOpen, setIsScreenshotsOpen] = useState(false);
  const { projects, projectModal } = useTranslation();
  const currentProject = projects.find((project) => project.id === projectId);
  const { title, description, tags, screenshots, year, sourceURL, previewURL } =
    currentProject!;

  return (
    <Modal title={title} open={open} onClose={onClose} disableBackdropClick>
      <div className="mt-5 flex flex-col items-center gap-3">
        <Screenshots
          open={isScreenshotsOpen}
          screenshots={screenshots!}
          onClose={() => setIsScreenshotsOpen(false)}
        />
        <button
          className="relative cursor-zoom-in duration-150 ease-in-out hover:opacity-90"
          onClick={() => setIsScreenshotsOpen(true)}
        >
          <img
            src={screenshots![0]}
            alt={`Screenshot of the project ${title}`}
          />
          <div className="absolute bottom-2 right-2">
            <ZoomIn className="h-8 w-8 stroke-orange-600" />
          </div>
        </button>
        <div className="flex flex-wrap gap-2">
          {tags.map(({ title, bgColor }) => (
            <Badge key={title} bgColor={bgColor}>
              {title}
            </Badge>
          ))}
        </div>
        <div className="self-start text-sm  text-orange-500">
          <span className="font-semibold uppercase">{projectModal.year}:</span>{' '}
          {year}
        </div>
        <div>{description.complete}</div>
        <div className="flex gap-5">
          {sourceURL && (
            <Link href={sourceURL}>
              {projectModal.button.sourceCode}
              <Eye strokeWidth={2} />
            </Link>
          )}
          {previewURL && (
            <Link href={previewURL}>
              {projectModal.button.livePreview}
              <CodeBracket strokeWidth={2} />
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
