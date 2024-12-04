// src/components/home/Banner.tsx
'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const BannerRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'light'
    ? theme.palette.primary.main
    : theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/banner.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
  }
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

export function Banner() {
  const { t } = useTranslation('home');

  return (
    <BannerRoot>
      <ContentWrapper maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 2,
            fontSize: { xs: '2rem', md: '3.5rem' },
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {t('hero.title')}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 500,
            opacity: 0.9,
          }}
        >
          {t('hero.subtitle')}
        </Typography>
        <Button
          component={Link}
          href="/services"
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            py: 2,
            px: 4,
            fontSize: '1.1rem',
          }}
        >
          {t('hero.cta')}
        </Button>
      </ContentWrapper>
    </BannerRoot>
  );
}