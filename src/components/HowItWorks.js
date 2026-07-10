import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const STEPS = [
  {
    n: '01',
    title: 'Write the idea',
    body: 'Describe what you want in plain English, right where you already work — no new tool to learn.',
    code: 'idea = "add a pricing page"',
  },
  {
    n: '02',
    title: 'Cast the spec',
    body: 'Code Magic plans the change, writes the code, and shows you the diff before anything touches your repo.',
    code: 'cast(idea) → 6 files changed',
  },
  {
    n: '03',
    title: 'Ship it',
    body: 'Approve, and it opens a pull request — tested, linted, and ready for review.',
    code: 'ship() → PR #482 opened',
  },
];

export default function HowItWorks() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 7 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontFamily: '"JetBrains Mono", monospace', letterSpacing: 1.5 }}
          >
            {'// the ritual'}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mt: 1 }}>
            Three steps, every time
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {STEPS.map((s, idx) => (
            <Grid item xs={12} md={4} key={s.n}>
              <Box sx={{ position: 'relative', pl: 0 }}>
                <Typography
                  sx={{
                    fontFamily: '"Fraunces", serif',
                    fontSize: '3.2rem',
                    fontWeight: 500,
                    color: 'rgba(155,138,196,0.25)',
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {s.n}
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: '"Fraunces", serif', fontWeight: 600, mb: 1.5 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2.5 }}>
                  {s.body}
                </Typography>
                <Box
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12.5,
                    color: '#5FD9A4',
                    bgcolor: 'rgba(95,217,164,0.08)',
                    border: '1px solid rgba(95,217,164,0.2)',
                    borderRadius: 1.5,
                    px: 1.5,
                    py: 1,
                    display: 'inline-block',
                  }}
                >
                  {s.code}
                </Box>

                {idx < STEPS.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: 26,
                      right: -32,
                      width: 24,
                      height: 1,
                      bgcolor: 'rgba(155,138,196,0.25)',
                    }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
