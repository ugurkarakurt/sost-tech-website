// src/app/contact/page.tsx
import { ContactPage } from '@/components/contact/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | SOST Technology',
  description: 'SOST Technology ile iletişime geçin. SAP danışmanlık hizmetleri için bize ulaşın.',
};

export default function Page() {
  return <ContactPage />;
}