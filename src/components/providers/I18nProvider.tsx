// src/components/providers/I18nProvider.tsx
'use client';

import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';
import { I18nextProvider } from 'react-i18next';
import Cookies from 'js-cookie';

const LANGUAGE_COOKIE_NAME = 'sost-language-preference';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLanguage = Cookies.get(LANGUAGE_COOKIE_NAME);

    // Eğer cookie'de dil bilgisi varsa ve mevcut dilden farklıysa
    if (storedLanguage && i18n.language !== storedLanguage) {
      i18n.changeLanguage(storedLanguage).then(() => {
        setMounted(true);
      });
    } else {
      setMounted(true);
    }
  }, []);

  // Dil değişikliklerini dinle ve cookie'yi güncelle
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      Cookies.set(LANGUAGE_COOKIE_NAME, lng, { expires: 365 });
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}