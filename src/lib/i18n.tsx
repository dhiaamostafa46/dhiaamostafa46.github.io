'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from '@/data/translations';

type Lang = 'en' | 'ar';

interface I18nContextType {
  lang: Lang;
  isRTL: boolean;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('site_lang') as Lang;
    if (saved) {
      setLang(saved);
      applyLangSettings(saved);
    } else {
      applyLangSettings('en');
    }
  }, []);

  const applyLangSettings = (l: Lang) => {
    if (typeof window === 'undefined') return;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = l;
    if (l === 'ar') {
      document.documentElement.classList.add('font-cairo');
      document.documentElement.classList.remove('font-outfit');
    } else {
      document.documentElement.classList.add('font-outfit');
      document.documentElement.classList.remove('font-cairo');
    }
  };

  const toggleLang = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    setLang(next);
    localStorage.setItem('site_lang', next);
    applyLangSettings(next);
  };

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || (translations['en'][key] as string) || String(key);
  };

  return (
    <I18nContext.Provider value={{ lang, isRTL: lang === 'ar', toggleLang, t }}>
      <div
        className={lang === 'ar' ? 'font-cairo' : 'font-outfit'}
        style={{ visibility: isMounted ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
