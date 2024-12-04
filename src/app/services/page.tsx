// src/app/services/page.tsx
import { Metadata } from 'next';
import { ServicesOverview } from '@/components/services/ServicesOverview';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | SOST Technology',
  description: 'SAP danışmanlık, eğitim, dijital dönüşüm ve uygulama desteği hizmetlerimiz',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesOverview />
    </>
  );
}