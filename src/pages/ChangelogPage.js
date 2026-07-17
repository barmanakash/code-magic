import React from 'react';
import { Stack, Typography, Box, Chip } from '@mui/material';
import StaticPage from './StaticPage';

const entries = [
  {
    version: 'v2.4.0',
    date: 'July 2026',
    tag: 'New',
    items: ['Added multi-file spell generation for larger features', 'New Vercel deployment integration'],
  },
  {
    version: 'v2.3.1',
    date: 'June 2026',
    tag: 'Fix',
    items: ['Fixed an issue where generated TypeScript types could be dropped on regeneration'],
  },
  {
    version: 'v2.3.0',
    date: 'May 2026',
    tag: 'New',
    items: ['Introduced the VS Code companion extension', 'Improved framework detection accuracy'],
  },
  {
    version: 'v2.2.0',
    date: 'April 2026',
    tag: 'Improved',
    items: ['Faster generation times across all spell categories', 'Better error messages for invalid prompts'],
  },
];

const tagColors = {
  New: { bg: 'rgba(95,217,164,0.12)', color: '#5FD9A4' },
  Fix: { bg: 'rgba(232,163,61,0.14)', color: '#E8A33D' },
  Improved: { bg: 'rgba(155,138,196,0.14)', color: '#9B8AC4' },
};

export default function ChangelogPage() {
  return (
    <StaticPage
      eyebrow="Product"
      title="Changelog"
      subtitle="What's new, fixed, and improved in Code Magic — updated as we ship."
    >
      <Stack spacing={4}>
        {entries.map((entry) => (
          <Box key={entry.version} sx={{ borderLeft: '2px solid rgba(155,138,196,0.2)', pl: 3 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                {entry.version}
              </Typography>
              <Chip
                label={entry.tag}
                size="small"
                sx={{ bgcolor: tagColors[entry.tag].bg, color: tagColors[entry.tag].color, fontWeight: 600 }}
              />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {entry.date}
              </Typography>
            </Stack>
            <Stack spacing={0.5}>
              {entry.items.map((item) => (
                <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                  • {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </StaticPage>
  );
}
