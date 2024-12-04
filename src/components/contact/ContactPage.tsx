// src/components/contact/ContactPage.tsx
'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { ContactForm } from './ContactForm';
import { COMPANY_CONTACT } from '@/types/contact';
import { Header } from '../layout/Header';
import ContactMap from './ContactMap';

export function ContactPage() {
  const { t } = useTranslation('contact');

  return (
    <>
      <Header />
      <Box component="main" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {t('title')}
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: 'text.secondary',
              mb: 6,
            }}
          >
            {t('subtitle')}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                  {t('contact.title')}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOn color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t('contact.address.title')}
                      secondary={COMPANY_CONTACT.address}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Phone color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t('contact.phone.title')}
                      secondary={COMPANY_CONTACT.phone}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Email color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t('contact.email.title')}
                      secondary={COMPANY_CONTACT.email}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AccessTime color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t('contact.workHours.title')}
                      secondary={COMPANY_CONTACT.workHours}
                    />
                  </ListItem>
                </List>
              </Paper>
              <ContactMap />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}