// src/components/about/MissionVision.tsx
'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

export function MissionVision() {
  const { t } = useTranslation('about');
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h3" gutterBottom color="primary">
                {t('mission.title')}
              </Typography>
              <Typography variant="body1">
                {t('mission.description')}
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h3" gutterBottom color="primary">
                {t('vision.title')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('vision.description')}
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}