// src/types/navigation.ts
export interface NavItem {
  title: string;
  path: string;
}

export interface Language {
  code: string;
  label: string;
}

export const navigationItems: NavItem[] = [
  { title: 'Hizmetler', path: '/services' },
  { title: 'Hakkımızda', path: '/about' },
  { title: 'Çözümlerimiz', path: '/solutions' },
  { title: 'İletişim', path: '/contact' },
  { title: 'Referanslar', path: '/references' },
];

export const languages: Language[] = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
];