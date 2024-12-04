// src/components/solutions/SolutionCard.tsx
'use client';

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import { Check as CheckIcon, Star as StarIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

interface SolutionCardProps {
  solutionKey: string;
}

export function SolutionCard({ solutionKey }: SolutionCardProps) {
  const { t } = useTranslation('solutions');

  const features = t(`solutions.${solutionKey}.features`, { returnObjects: true }) as string[];
  const benefits = t(`solutions.${solutionKey}.benefits.items`, { returnObjects: true }) as string[];

  return (
    <StyledCard elevation={3} sx={{ p: 1 }}>
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom color="primary">
          {t(`solutions.${solutionKey}.title`)}
        </Typography>
        <Typography variant="h6" gutterBottom color="text.secondary">
          {t(`solutions.${solutionKey}.subtitle`)}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(`solutions.${solutionKey}.description`)}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {t('labels.features')}
          </Typography>
          <List dense>
            {Array.isArray(features) && features.map((feature, index) => (
              <ListItem key={`feature-${index}`}>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6" gutterBottom>
            {t('labels.benefits')}
          </Typography>
          <List dense>
            {Array.isArray(benefits) && benefits.map((benefit, index) => (
              <ListItem key={`benefit-${index}`}>
                <ListItemIcon>
                  <StarIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </StyledCard>
  );
}