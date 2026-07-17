import React from 'react';
import { Grid, Card, Typography, Stack } from '@mui/material';
import StaticPage from './StaticPage';

const features = [
  { emoji: '⚡', title: 'Instant Scaffolding', desc: 'Describe a feature in plain language and get working, structured code in seconds — no boilerplate typing.' },
  { emoji: '📚', title: 'Built-in Documentation', desc: 'Every piece of generated code comes paired with matching, readable documentation, kept in sync automatically.' },
  { emoji: '🔌', title: 'Framework-Aware', desc: 'Code Magic understands React, Node.js, and modern tooling conventions out of the box — no manual config wiring.' },
  { emoji: '🛡️', title: 'Safe by Default', desc: 'Generated code follows established best practices and passes linting automatically, so you ship with confidence.' },
  { emoji: '🧩', title: 'Composable Spells', desc: 'Chain smaller incantations together to build up complex features incrementally, reviewing each step.' },
  { emoji: '🌐', title: 'Deploy Anywhere', desc: 'Code Magic outputs standard, portable code — no vendor lock-in, works with your existing deployment pipeline.' },
];

export default function FeaturesPage() {
  return (
    <StaticPage
      eyebrow="Product"
      title="Features"
      subtitle="Everything Code Magic gives you to go from idea to shipped code, faster."
    >
      <Grid container spacing={3}>
        {features.map((f) => (
          <Grid item xs={12} sm={6} key={f.title}>
            <Card
              variant="outlined"
              sx={{ p: 3, height: '100%', borderRadius: 3, borderColor: 'rgba(155,138,196,0.18)', bgcolor: 'background.paper' }}
            >
              <Stack spacing={1.5}>
                <Typography sx={{ fontSize: 28 }}>{f.emoji}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {f.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {f.desc}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StaticPage>
  );
}
