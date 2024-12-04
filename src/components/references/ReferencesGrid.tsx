// src/components/references/ReferencesGrid.tsx
'use client';

import { Container, Grid } from '@mui/material';
import { ReferenceCard } from './ReferenceCard';

const referenceKeys = ['enterprise1', 'enterprise2'];

export function ReferencesGrid() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {referenceKeys.map((key) => (
          <Grid item xs={12} md={6} key={key}>
            <ReferenceCard referenceKey={key} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}