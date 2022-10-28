import { createContext, ReactNode, useState } from 'react';

export enum Language {
  pt = 'pt',
  en = 'en',
}

interface LanguageContextData {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext({} as LanguageContextData);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(Language.pt);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
