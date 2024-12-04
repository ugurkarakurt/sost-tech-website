// src/components/about/CoreValues.tsx
'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  Lightbulb,
  VerifiedUser,
  Security,
  Psychology,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ValueCard = styled(Card)(() => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const values = [
  { key: 'innovation', icon: Lightbulb },
  { key: 'quality', icon: VerifiedUser },
  { key: 'integrity', icon: Security },
  { key: 'expertise', icon: Psychology },
];

export function CoreValues() {
  const { t } = useTranslation('about');
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          {t('vision.values.title')}
        </Typography>
        <Grid container spacing={4}>
          {values.map(({ key, icon: Icon }) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <ValueCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Icon
                    sx={{
                      fontSize: 48,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {t(`vision.values.items.${key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`vision.values.items.${key}.description`)}
                  </Typography>
                </CardContent>
              </ValueCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}