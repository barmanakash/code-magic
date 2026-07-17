import React from 'react';
import { Grid, Card, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StaticPage from './StaticPage';

const guides = [
  { title: 'Getting started with Code Magic', desc: 'Set up your first project and generate your first spell in under five minutes.', to: '/docs/introduction' },
  { title: 'Learning JavaScript from scratch', desc: 'A structured path through the JavaScript documentation, from variables to async patterns.', to: '/docs/javascript' },
  { title: 'Learning HTML fundamentals', desc: 'Build a solid foundation in semantic, accessible HTML markup.', to: '/docs/htmlintroduction' },
  { title: 'Learning CSS from the ground up', desc: 'From the box model to Flexbox, Grid, and modern responsive layout techniques.', to: '/docs/css' },
];

export default function GuidesPage() {
  return (
    <StaticPage
      eyebrow="Resources"
      title="Guides"
      subtitle="Structured learning paths and walkthroughs to help you get the most out of Code Magic and the docs."
    >
      <Grid container spacing={3}>
        {guides.map((g) => (
          <Grid item xs={12} sm={6} key={g.title}>
            <Card
              component={RouterLink}
              to={g.to}
              variant="outlined"
              sx={{
                p: 3,
                height: '100%',
                display: 'block',
                borderRadius: 3,
                textDecoration: 'none',
                borderColor: 'rgba(155,138,196,0.18)',
                bgcolor: 'background.paper',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                '&:hover': { transform: 'translateY(-2px)', borderColor: 'primary.main' },
              }}
            >
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {g.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {g.desc}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StaticPage>
  );
}
