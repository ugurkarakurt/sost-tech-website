// src/app/solutions/page.tsx
import { Metadata } from 'next';
import { SolutionsPage } from '@/components/solutions/SolutionsPage';

export const metadata: Metadata = {
  title: 'Çözümlerimiz | SOST Technology',
  description: 'İhtiyacınıza uygun özelleştirilmiş SAP çözümleri ile dijital dönüşümünüzü güçlendirin.',
};

export default function Page() {
  return <SolutionsPage />;
}