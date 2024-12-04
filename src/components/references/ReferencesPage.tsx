// src/components/references/ReferencesPage.tsx
'use client';

import { Box } from '@mui/material';
import { Header } from '../layout/Header';
import { ReferencesHero } from './ReferencesHero';
import { ReferencesGrid } from './ReferencesGrid';

export function ReferencesPage() {
  return (
    <>
      <Header />
      <Box component="main">
        <ReferencesHero />
        <ReferencesGrid />
      </Box>
    </>
  );
}