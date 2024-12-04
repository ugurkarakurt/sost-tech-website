// src/components/references/ReferencesHero.tsx
'use client';

import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(12, 0),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
    zIndex: 1,
  },
}));

const Content = styled(Container)(() => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
}));

export function ReferencesHero() {
  const { t } = useTranslation('references');

  return (
    <HeroSection>
      <Content maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          {t('hero.title')}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 500,
            opacity: 0.9,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {t('hero.subtitle')}
        </Typography>
      </Content>
    </HeroSection>
  );
}
