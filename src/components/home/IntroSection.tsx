// src/components/home/IntroSection.tsx
'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Business, Speed, Security } from '@mui/icons-material';

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  }
}));



export function IntroSection() {
  const { t } = useTranslation('home');

  const features = [
    {
      icon: Business,
      title: t('features.1.title'),
      description: t('features.1.description')
    },
    {
      icon: Speed,
      title: t('features.2.title'),
      description: t('features.2.description')
    },
    {
      icon: Security,
      title: t('features.3.title'),
      description: t('features.3.description')
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          {t('title')}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 8, fontSize: '1.2rem', maxWidth: 800, mx: 'auto' }}
        >
          {t('intro.text')}
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <FeatureCard elevation={2}>
                <feature.icon
                  sx={{
                    fontSize: 48,
                    color: 'primary.main',
                    mb: 2
                  }}
                />
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                >
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}