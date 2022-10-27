import { createContext, ReactNode, useState } from 'react';

enum Language {
  pt = 'pt',
  en = 'en',
}

interface LanguageContextData {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext({} as LanguageContextData);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(Language.en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
