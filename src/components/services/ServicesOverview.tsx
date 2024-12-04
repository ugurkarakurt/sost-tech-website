// src/components/services/ServicesOverview.tsx
'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { services } from '@/types/services';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
  borderRadius: theme.spacing(1),
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light'
    ? theme.palette.primary.main
    : theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  '& .MuiCardHeader-title': {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
}));

export function ServicesOverview() {
  const theme = useTheme();
  const { t } = useTranslation('services');

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          sx={{
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
          }}
        >
          {t('title')}
        </Typography>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: '1.5rem', md: '2rem' },
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {t('subtitle')}
        </Typography>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.id}>
              <ServiceCard>
                <StyledCardHeader
                  title={t(`services.${service.id}.title`)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" paragraph>
                    {t(`services.${service.id}.description`)}
                  </Typography>
                  <List>
                    {service.features.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText
                          primary={t(`services.${service.id}.features.${index}`)}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}