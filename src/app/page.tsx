// src/app/page.tsx
import { Banner } from '@/components/home/Banner';
import { IntroSection } from '@/components/home/IntroSection';
import { Header } from '@/components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <IntroSection />
      </main>
    </>
  );
}