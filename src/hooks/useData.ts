import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { DataInEnglish } from '../data/data-en';
import { DataInPortuguese } from '../data/data-pt';

const data = {
  pt: DataInPortuguese,
  en: DataInEnglish,
};

const useData = () => {
  const { language } = useContext(LanguageContext);
  return { ...data[language] };
};

export default useData;
