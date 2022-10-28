import { useContext } from 'react';
import { Language, LanguageContext } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const isEnglishSelected = language === Language.en;
  const isPortugueseSelected = language === Language.pt;

  return (
    <div className="fixed bottom-2 right-2 z-50 flex gap-1">
      <button
        className={`${
          isPortugueseSelected && 'rounded-sm border-2 border-orange-500'
        }`}
        onClick={() => setLanguage(Language.pt)}
      >
        <img src="./public/assets/images/flags/br.svg" width="25px" />
      </button>
      <button
        className={`${
          isEnglishSelected && 'rounded-sm border-2 border-orange-500'
        }`}
        onClick={() => setLanguage(Language.en)}
      >
        <img src="./public/assets/images/flags/gb.svg" width="25px" />
      </button>
    </div>
  );
};

export default LanguageSelector;
