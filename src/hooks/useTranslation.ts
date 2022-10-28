import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import English from '../translation/en';
import Portuguese from '../translation/pt';

const translation = {
  pt: Portuguese,
  en: English,
};

const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  return { ...translation[language] };
};

export default useTranslation;
