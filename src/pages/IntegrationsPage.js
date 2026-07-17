import React from 'react';
import { Grid, Card, Typography, Stack } from '@mui/material';
import StaticPage from './StaticPage';

const integrations = [
  { name: 'GitHub', desc: 'Push generated code directly to a branch and open a pull request automatically.' },
  { name: 'VS Code', desc: 'Use Code Magic without leaving your editor via the companion extension.' },
  { name: 'Slack', desc: 'Get notified in your team channel whenever a new spell finishes generating.' },
  { name: 'Vercel', desc: 'Deploy generated projects straight to Vercel with zero extra configuration.' },
  { name: 'Figma', desc: 'Turn a Figma design frame into a working component scaffold.' },
  { name: 'Linear', desc: 'Turn a Linear issue description directly into a starting implementation.' },
];

export default function IntegrationsPage() {
  return (
    <StaticPage
      eyebrow="Product"
      title="Integrations"
      subtitle="Code Magic fits into the tools you already use — no workflow disruption."
    >
      <Grid container spacing={3}>
        {integrations.map((i) => (
          <Grid item xs={12} sm={6} key={i.name}>
            <Card
              variant="outlined"
              sx={{ p: 3, height: '100%', borderRadius: 3, borderColor: 'rgba(155,138,196,0.18)', bgcolor: 'background.paper' }}
            >
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {i.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {i.desc}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StaticPage>
  );
}
