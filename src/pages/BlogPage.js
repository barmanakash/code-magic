import React from 'react';
import { Stack, Typography, Box, Chip } from '@mui/material';
import StaticPage from './StaticPage';

const posts = [
  { title: 'Why we built Code Magic', date: 'July 2026', excerpt: 'A look back at the frustrations that led to building a plain-language code generator, and what we learned along the way.' },
  { title: 'Documentation as a first-class feature', date: 'June 2026', excerpt: 'Why every generated feature in Code Magic ships with matching docs, and how we keep them from going stale.' },
  { title: 'The state of AI-assisted development in 2026', date: 'May 2026', excerpt: 'Our take on where developer tooling is heading, and what still needs to be solved.' },
];

export default function BlogPage() {
  return (
    <StaticPage
      eyebrow="Company"
      title="Blog"
      subtitle="Notes on building Code Magic, developer tooling, and everything in between."
    >
      <Stack spacing={3}>
        {posts.map((p) => (
          <Box
            key={p.title}
            sx={{ p: 3, border: '1px solid rgba(155,138,196,0.15)', borderRadius: 3, bgcolor: 'background.paper' }}
          >
            <Chip label={p.date} size="small" sx={{ mb: 1.5, bgcolor: 'rgba(155,138,196,0.12)', color: '#9B8AC4' }} />
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
              {p.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              {p.excerpt}
            </Typography>
          </Box>
        ))}
      </Stack>
    </StaticPage>
  );
}
