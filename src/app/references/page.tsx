// src/app/references/page.tsx
import { Metadata } from 'next';
import { ReferencesPage } from '@/components/references/ReferencesPage';

export const metadata: Metadata = {
  title: 'Referanslarımız | SOST Technology',
  description: 'Başarı hikayeleri ve müşteri deneyimleri ile SAP danışmanlık projelerimiz.',
};

export default function Page() {
  return <ReferencesPage />;
}