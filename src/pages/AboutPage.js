import React from 'react';
import { Stack, Typography, Grid, Box } from '@mui/material';
import StaticPage from './StaticPage';

const values = [
  { title: 'Ship, don\'t stall', desc: 'We believe tooling should get out of your way, not add another layer of ceremony.' },
  { title: 'Docs are a feature', desc: 'Code without documentation is only half-finished — we treat both as equally important.' },
  { title: 'Open by default', desc: 'The code Code Magic generates is yours, portable, and free of lock-in.' },
];

export default function AboutPage() {
  return (
    <StaticPage
      eyebrow="Company"
      title="About Code Magic"
      subtitle="We're a small team building tools that turn plain-language ideas into working, shippable code."
    >
      <Stack spacing={4}>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Code Magic started from a simple frustration: writing the same boilerplate over and over,
          for the hundredth time, instead of building the part of the feature that actually mattered.
          We set out to build a tool that turns a clear description of what you want into real,
          production-ready code — without hiding what it's doing or locking you into a black box.
        </Typography>

        <Grid container spacing={3}>
          {values.map((v) => (
            <Grid item xs={12} sm={4} key={v.title}>
              <Box sx={{ p: 3, border: '1px solid rgba(155,138,196,0.15)', borderRadius: 3, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                  {v.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {v.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </StaticPage>
  );
}
