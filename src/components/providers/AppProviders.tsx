// src/components/providers/AppProviders.tsx
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeRegistry } from '../ThemeRegistry/ThemeRegistry';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // veya bir loading göstergesi
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeRegistry>{children}</ThemeRegistry>
    </I18nextProvider>
  );
}