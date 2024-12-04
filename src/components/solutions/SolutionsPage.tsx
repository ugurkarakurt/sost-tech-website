// src/components/solutions/SolutionsPage.tsx
'use client';

import { Box } from '@mui/material';
import { Header } from '../layout/Header';
import { SolutionsHero } from './SolutionsHero';
import { SolutionsGrid } from './SolutionsGrid';

export function SolutionsPage() {
  return (
    <>
      <Header />
      <Box component="main">
        <SolutionsHero />
        <SolutionsGrid />
      </Box>
    </>
  );
}