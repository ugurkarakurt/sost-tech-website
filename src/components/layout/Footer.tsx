// src/components/layout/Footer.tsx
'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import {
  LinkedIn,
  LocationOn,
  Email
} from '@mui/icons-material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import ContactMap from '../contact/ContactMap';

const quickLinks = [
  { key: 'services', path: '/services' },
  { key: 'about', path: '/about' },
  { key: 'solutions', path: '/solutions' },
  { key: 'contact', path: '/contact' },
];

export function Footer() {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${theme.palette.divider}`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(0,0,0,0.02) 0%, transparent 60%)',
        }
      }}
    >
      {/* Üst Kısım */}
      <Box
        sx={{
          py: 8,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Logo ve Açıklama */}
            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 3 }}>
                {theme.palette.mode === 'dark' ? (
                  <Image width={120} height={80} src="/images/logo-dark.svg" alt="SOST" />
                ) : (
                  <Image width={120} height={80} src="/images/logo.svg" alt="SOST" />
                )}
              </Box>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                SAP danışmanlık hizmetlerinde 10+ yıl deneyim ile işletmelerin dijital dönüşüm süreçlerini hızlandırıyoruz.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1)
                    }
                  }}
                  href="https://www.linkedin.com/company/sost-teknoloji-ve-bili%C5%9Fim-sistemleri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
                {/* <IconButton
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1)
                    }
                  }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </IconButton> */}
              </Stack>
            </Grid>

            {/* Hızlı Linkler */}
            <Grid item xs={12} md={3}>
              <Typography sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                {t('footer.quickLinks')}
              </Typography>
              <Stack spacing={2}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={link.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline'
                        },
                      }}
                    >
                      {t(`navigation.${link.key}`)}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* İletişim */}
            <Grid item xs={12} md={3}>
              <Typography sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                {t('footer.contact')}
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <LocationOn sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    KARLIKTEPE MAH. BLOKEVLERİ SK. NO: 4 B İÇ KAPI NO: 132 KARTAL/İSTANBUL
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Email sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    info@sost.com.tr
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <ContactMap />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Alt Kısım - Copyright */}
      <Box
        sx={{
          py: 3,
          bgcolor: theme.palette.mode === 'light' ? 'grey.50' : 'background.default',
          borderTop: `1px solid ${theme.palette.divider}`,
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            align="center"
            sx={{ color: 'text.secondary' }}
          >
            © {currentYear} SOST Technology. {t('footer.allRights')}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}