import React from 'react';
import { Stack, Typography, Box, Chip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StaticPage from './StaticPage';

const services = [
  { name: 'Generation API', status: 'Operational' },
  { name: 'Documentation Site', status: 'Operational' },
  { name: 'VS Code Extension', status: 'Operational' },
  { name: 'Deployment Integrations', status: 'Operational' },
];

export default function StatusPage() {
  return (
    <StaticPage
      eyebrow="Resources"
      title="System Status"
      subtitle="Live status of Code Magic services. All systems operational as of today."
    >
      <Stack spacing={2}>
        {services.map((s) => (
          <Box
            key={s.name}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2.5,
              border: '1px solid rgba(155,138,196,0.15)',
              borderRadius: 2.5,
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
              {s.name}
            </Typography>
            <Chip
              icon={<FiberManualRecordIcon sx={{ fontSize: '10px !important', color: '#5FD9A4 !important' }} />}
              label={s.status}
              size="small"
              sx={{ bgcolor: 'rgba(95,217,164,0.12)', color: '#5FD9A4', fontWeight: 600 }}
            />
          </Box>
        ))}
      </Stack>
      <Typography variant="caption" sx={{ display: 'block', mt: 3, color: 'text.secondary' }}>
        Last checked: just now · No incidents reported in the last 90 days.
      </Typography>
    </StaticPage>
  );
}
