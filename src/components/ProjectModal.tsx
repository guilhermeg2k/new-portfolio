import { ReactNode, useState } from 'react';
import useTranslation from '../hooks/useTranslation';
import Badge from './Badge';
import CodeBracket from './icons/CodeBracket';
import Eye from './icons/Eye';
import ZoomIn from './icons/ZoomIn';
import Modal from './Modal';
import Screenshots from './Screenshoots';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button
      className={`font-roboto flex min-w-[100px] items-center gap-2 rounded-sm bg-orange-600 py-2 px-4 text-xs font-bold uppercase text-white duration-200 ease-in-out hover:bg-orange-500 active:bg-orange-600 md:text-sm`}
    >
      {children}
    </button>
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
  const { id, title, description, tags, screenshots } = currentProject!;

  return (
    <Modal title={title} open={open} onClose={onClose}>
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
          <img src={screenshots![0]} />
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
        <div>{description.complete}</div>
        <div className="flex gap-5">
          <Button>
            {projectModal.button.sourceCode}
            <Eye strokeWidth={2} />
          </Button>
          <Button>
            {projectModal.button.livePreview}
            <CodeBracket strokeWidth={2} />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
