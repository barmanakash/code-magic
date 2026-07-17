import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import StaticPage from './StaticPage';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect information you provide directly to us, such as your name and email address when you sign up or contact us, along with basic usage data to help us improve Code Magic.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use collected information to operate and improve our services, respond to your requests, and send occasional product updates you can unsubscribe from at any time.',
  },
  {
    title: '3. Data Sharing',
    body: 'We do not sell your personal information. We only share data with third-party service providers as needed to operate Code Magic (such as hosting and analytics), under appropriate confidentiality obligations.',
  },
  {
    title: '4. Data Retention',
    body: 'We retain your information for as long as your account is active or as needed to provide our services, and delete it upon request where legally permitted.',
  },
  {
    title: '5. Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting us at privacy@codemagic.dev.',
  },
  {
    title: '6. Changes to This Policy',
    body: 'We may update this policy from time to time. We will notify you of material changes via email or a notice on our site.',
  },
];

export default function PrivacyPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Last updated: July 2026. This is a sample policy for demonstration purposes."
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
