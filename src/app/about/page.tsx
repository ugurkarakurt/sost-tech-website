// src/app/about/page.tsx
import { AboutPage } from '@/components/about/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | SOST Technology',
  description: 'SOST Technology olarak, işletmelerin dijital dönüşüm süreçlerini hızlandırmalarına yardımcı oluyoruz.',
};

export default function Page() {
  return <AboutPage />;
}