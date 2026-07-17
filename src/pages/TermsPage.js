import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import StaticPage from './StaticPage';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using Code Magic, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.',
  },
  {
    title: '2. Use of the Service',
    body: 'You may use Code Magic to generate, document, and deploy code for personal or commercial projects, subject to the limits of your chosen plan.',
  },
  {
    title: '3. Ownership of Generated Code',
    body: 'Code you generate using Code Magic is yours. We claim no ownership over the output produced from your prompts.',
  },
  {
    title: '4. Acceptable Use',
    body: 'You agree not to use Code Magic to generate malicious code, infringe on intellectual property, or violate applicable laws.',
  },
  {
    title: '5. Service Availability',
    body: 'We aim for high availability but do not guarantee uninterrupted access. Scheduled maintenance and unforeseen outages may occur.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'Code Magic is provided "as is" without warranties of any kind. We are not liable for damages arising from use of generated code in production without your own review.',
  },
  {
    title: '7. Changes to These Terms',
    body: 'We may update these terms periodically. Continued use of the service after changes constitutes acceptance of the updated terms.',
  },
];

export default function TermsPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="Last updated: July 2026. This is a sample terms document for demonstration purposes."
    >
      <Stack spacing={4}>
        {sections.map((s) => (
          <Box key={s.title}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
              {s.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              {s.body}
            </Typography>
          </Box>
        ))}
      </Stack>
    </StaticPage>
  );
}
