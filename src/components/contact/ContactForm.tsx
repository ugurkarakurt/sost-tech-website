// src/components/contact/ContactForm.tsx
'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Alert,
  Paper,
  Typography,
  CircularProgress
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const { t } = useTranslation('contact');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('form.name.error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = t('form.email.error');
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = t('form.phone.error');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('form.message.error');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        'service_rgl359q', // EmailJS'den alınacak
        'template_irxawzx', // EmailJS'den alınacak
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
        '5MERvv-7Gn1q2Exq5' // EmailJS'den alınacak
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        {t('form.title')}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          margin="normal"
          name="name"
          label={t('form.name.label')}
          placeholder={t('form.name.placeholder')}
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          disabled={loading}
        />
        <TextField
          fullWidth
          margin="normal"
          name="email"
          type="email"
          label={t('form.email.label')}
          placeholder={t('form.email.placeholder')}
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          disabled={loading}
        />
        <TextField
          fullWidth
          margin="normal"
          name="phone"
          label={t('form.phone.label')}
          placeholder={t('form.phone.placeholder')}
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          disabled={loading}
        />
        <TextField
          fullWidth
          margin="normal"
          name="message"
          label={t('form.message.label')}
          placeholder={t('form.message.placeholder')}
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ mt: 3 }}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            t('form.submit')
          )}
        </Button>
        {submitStatus === 'success' && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {t('form.success')}
          </Alert>
        )}
        {submitStatus === 'error' && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {t('form.error')}
          </Alert>
        )}
      </Box>
    </Paper>
  );
}