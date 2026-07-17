import React, { useState } from 'react';
import { Stack, Typography, TextField, Button, Alert, Box } from '@mui/material';
import StaticPage from './StaticPage';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <StaticPage
      eyebrow="Company"
      title="Contact Us"
      subtitle="Questions, feedback, or partnership ideas — we'd love to hear from you."
    >
      <Stack spacing={3} sx={{ maxWidth: 480 }}>
        {submitted && (
          <Alert severity="success" onClose={() => setSubmitted(false)}>
            Thanks for reaching out! We'll get back to you soon.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Your name"
              value={form.name}
              onChange={handleChange('name')}
              required
              fullWidth
              size="small"
            />
            <TextField
              label="Email address"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              required
              fullWidth
              size="small"
            />
            <TextField
              label="Message"
              value={form.message}
              onChange={handleChange('message')}
              required
              fullWidth
              multiline
              rows={4}
              size="small"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 2, alignSelf: 'flex-start', px: 3 }}>
              Send Message
            </Button>
          </Stack>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          You can also reach us directly at{' '}
          <Box component="a" href="mailto:hello@codemagic.dev" sx={{ color: 'primary.main' }}>
            hello@codemagic.dev
          </Box>
        </Typography>
      </Stack>
    </StaticPage>
  );
}
