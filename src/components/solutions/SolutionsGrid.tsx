// src/components/solutions/SolutionsGrid.tsx
'use client';

import { Container, Grid } from '@mui/material';
import { SolutionCard } from './SolutionCard';

const solutionKeys = ['erp', 'finance', 'hr', 'logistics'];

export function SolutionsGrid() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {solutionKeys.map((key) => (
          <Grid item xs={12} md={6} key={key}>
            <SolutionCard solutionKey={key} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}