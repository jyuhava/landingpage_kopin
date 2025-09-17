'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getData: (key: string) => any;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('id');
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['id', 'en', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/lang/${language}.json`);
        const data = await response.json();
        setTranslations(data);
        localStorage.setItem('language', language);
      } catch (error) {
        console.error('Error loading translations:', error);
      }
      setIsLoading(false);
    };

    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const getData = (key: string): any => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getData, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
