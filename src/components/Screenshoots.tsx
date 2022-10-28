import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from './icons/CloseIcon';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';

interface ScreenshotsProps {
  open: boolean;
  screenshots: Array<string>;
  onClose: () => void;
}

const Screenshots = ({ open, onClose, screenshots }: ScreenshotsProps) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const onNextHandler = () => {
    const next = currentScreenshot + 1;
    if (next > screenshots.length - 1) {
      setCurrentScreenshot(0);
      return;
    }
    setCurrentScreenshot(next);
  };

  const onPreviousHandler = () => {
    const previous = currentScreenshot - 1;
    if (previous < 0) {
      setCurrentScreenshot(screenshots.length - 1);
      return;
    }
    setCurrentScreenshot(previous);
  };

  if (!open) {
    return <></>;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 z-50 h-screen w-screen bg-black"
      onKeyDown={(event) => console.log(event)}
    >
      <div className="absolute flex w-full items-end justify-end px-2 pt-2 md:px-28 md:pt-10">
        <button onClick={onClose}>
          <CloseIcon className="flex h-10 w-10 fill-orange-200 duration-150 ease-in-out hover:fill-orange-400" />
        </button>
      </div>
      <div className="flex h-full w-full items-center justify-center gap-10 p-28">
        <button onClick={onPreviousHandler}>
          <LeftArrow className="h-6 w-6 stroke-orange-200 duration-150 ease-in-out hover:stroke-orange-400 md:h-12 md:w-12" />
        </button>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <div className="min-w-[200px]">
            <img
              src={screenshots![currentScreenshot]}
              className="w-full"
              alt={`Screenshot ${currentScreenshot}`}
            />
          </div>
          <span className="text-sm text-orange-100">
            {currentScreenshot + 1} / {screenshots.length}
          </span>
        </div>
        <button onClick={onNextHandler}>
          <RightArrow className="h-6 w-6 stroke-orange-200 duration-150 ease-in-out hover:stroke-orange-400 md:h-12 md:w-12" />
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Screenshots;
