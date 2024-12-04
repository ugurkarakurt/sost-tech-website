// src/components/ThemeRegistry/ThemeRegistry.tsx
'use client';

import * as React from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { PaletteMode, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '@/lib/theme';
import { ColorModeContextType } from '@/types/theme';
import Cookies from 'js-cookie';

const THEME_COOKIE_NAME = 'sost-theme-preference';

function getInitialTheme(): PaletteMode {
  if (typeof window !== 'undefined') {
    const storedTheme = Cookies.get(THEME_COOKIE_NAME);
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      return storedTheme;
    }
  }
  return 'light';
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => { },
  mode: 'light',
});

interface ThemeRegistryProps {
  children: React.ReactNode;
}

export function ThemeRegistry({ children }: ThemeRegistryProps) {
  const [mode, setMode] = React.useState<PaletteMode>(getInitialTheme);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          Cookies.set(THEME_COOKIE_NAME, newMode, { expires: 365 });
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  React.useEffect(() => {
    const storedTheme = Cookies.get(THEME_COOKIE_NAME);
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      setMode(storedTheme);
    }
  }, []);

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache({ key: 'mui' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}