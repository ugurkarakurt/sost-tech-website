// src/components/about/AboutPage.tsx
'use client';

import { Box } from '@mui/material';
import { Header } from '../layout/Header';
import { AboutHero } from './AboutHero';
import { MissionVision } from './MissionVision';
import { CoreValues } from './CoreValues';
import { TeamSection } from './TeamSection';

export function AboutPage() {
  return (
    <>
      <Header />
      <Box component="main">
        <AboutHero />
        <MissionVision />
        <CoreValues />
        <TeamSection />
      </Box>
    </>
  );
}