// src/components/references/ReferenceCard.tsx
'use client';

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
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

const TestimonialBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light'
    ? theme.palette.grey[50]
    : theme.palette.grey[900],
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

interface ReferenceCardProps {
  referenceKey: string;
}

export function ReferenceCard({ referenceKey }: ReferenceCardProps) {
  const { t } = useTranslation('references');
  const results = t(`references.${referenceKey}.results`, { returnObjects: true }) as string[];

  return (
    <StyledCard elevation={3} sx={{ p: 1 }}>
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom color="primary">
          {t(`references.${referenceKey}.name`)}
        </Typography>

        <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
          <Chip
            label={t(`references.${referenceKey}.industry`)}
            color="primary"
            variant="outlined"
          />
          <Chip
            label={t(`references.${referenceKey}.projectType`)}
            color="primary"
            variant="outlined"
          />
        </Box>

        <Typography variant="body1" paragraph>
          {t(`references.${referenceKey}.description`)}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Proje Sonuçları
          </Typography>
          <List dense>
            {Array.isArray(results) && results.map((result, index) => (
              <ListItem key={`result-${index}`}>
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={result} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider />

        <TestimonialBox>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontStyle: 'italic', mb: 2 }}
          >
            {t(`references.${referenceKey}.testimonial.text`)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              {t(`references.${referenceKey}.testimonial.author`).charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {t(`references.${referenceKey}.testimonial.author`)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t(`references.${referenceKey}.testimonial.position`)}
              </Typography>
            </Box>
          </Box>
        </TestimonialBox>
      </CardContent>
    </StyledCard>
  );
}