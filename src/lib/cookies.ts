// src/lib/cookies.ts
import Cookies from 'js-cookie';

export const THEME_COOKIE_NAME = 'sost-theme-preference';
export const LANGUAGE_COOKIE_NAME = 'sost-language-preference';

export const getStoredTheme = (): 'light' | 'dark' | undefined => {
  return Cookies.get(THEME_COOKIE_NAME) as 'light' | 'dark' | undefined;
};

export const setStoredTheme = (theme: 'light' | 'dark'): void => {
  Cookies.set(THEME_COOKIE_NAME, theme, { expires: 365 });
};

export const getStoredLanguage = (): string | undefined => {
  return Cookies.get(LANGUAGE_COOKIE_NAME);
};

export const setStoredLanguage = (language: string): void => {
  Cookies.set(LANGUAGE_COOKIE_NAME, language, { expires: 365 });
};
