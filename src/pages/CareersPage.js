import React from 'react';
import { Stack, Typography, Box, Button, Chip } from '@mui/material';
import StaticPage from './StaticPage';

const openings = [
  { title: 'Senior Frontend Engineer', location: 'Remote', type: 'Full-time' },
  { title: 'Developer Advocate', location: 'Remote', type: 'Full-time' },
  { title: 'Technical Writer', location: 'Remote', type: 'Contract' },
];

export default function CareersPage() {
  return (
    <StaticPage
      eyebrow="Company"
      title="Careers"
      subtitle="We're a small, remote-first team. Here's what we're currently hiring for."
    >
      <Stack spacing={2}>
        {openings.map((job) => (
          <Box
            key={job.title}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
              p: 3,
              border: '1px solid rgba(155,138,196,0.15)',
              borderRadius: 3,
              bgcolor: 'background.paper',
            }}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                {job.title}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                <Chip label={job.location} size="small" sx={{ bgcolor: 'rgba(155,138,196,0.12)', color: '#9B8AC4' }} />
                <Chip label={job.type} size="small" sx={{ bgcolor: 'rgba(232,163,61,0.12)', color: '#E8A33D' }} />
              </Stack>
            </Box>
            <Button variant="outlined" color="primary" sx={{ borderRadius: 2, whiteSpace: 'nowrap' }}>
              View role
            </Button>
          </Box>
        ))}
      </Stack>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 4 }}>
        Don't see a fit? Reach out anyway at{' '}
        <Box component="a" href="mailto:careers@codemagic.dev" sx={{ color: 'primary.main' }}>
          careers@codemagic.dev
        </Box>
        .
      </Typography>
    </StaticPage>
  );
}
