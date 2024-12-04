// src/components/about/TeamSection.tsx
'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const TeamCard = styled(Card)(() => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  border: `4px solid ${theme.palette.primary.main}`,
}));

const teamMembers = ['ceo', 'cto'];

export function TeamSection() {
  const { t } = useTranslation('about');
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          {t('team.title')}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          {t('team.subtitle')}
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} md={6} key={member}>
              <TeamCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <StyledAvatar
                    alt={t(`team.members.${member}.name`)}
                    src={`/images/team/${member}.jpeg`}
                  />
                  <Typography variant="h5" gutterBottom>
                    {t(`team.members.${member}.name`)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                  >
                    {t(`team.members.${member}.position`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`team.members.${member}.description`)}
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}