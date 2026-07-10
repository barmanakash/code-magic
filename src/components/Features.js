import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HubIcon from '@mui/icons-material/Hub';
import ShieldIcon from '@mui/icons-material/Shield';

const FEATURES = [
  {
    icon: BoltIcon,
    color: '#E8A33D',
    title: 'Instant scaffolding',
    body: 'Describe a feature in a sentence. Get a real, runnable project — components, routes, and state wired up correctly.',
  },
  {
    icon: AutoFixHighIcon,
    color: '#5FD9A4',
    title: 'Refactors that stick',
    body: 'Ask for a change once. Code Magic finds every place it touches and keeps the codebase consistent, not just the file you pointed at.',
  },
  {
    icon: HubIcon,
    color: '#9B8AC4',
    title: 'Speaks your stack',
    body: "Works with the framework, linter, and conventions already in your repo — it adapts to your project, not the other way around.",
  },
  {
    icon: ShieldIcon,
    color: '#E8A33D',
    title: 'Nothing ships blind',
    body: 'Every change comes with a diff, a plain-language explanation, and a one-click revert. You stay the one who decides.',
  },
];

export default function Features() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 7 }}>
          <Typography
            variant="overline"
            sx={{ color: 'secondary.main', fontFamily: '"JetBrains Mono", monospace', letterSpacing: 1.5 }}
          >
            {'// the toolkit'}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mt: 1 }}>
            Four spells, one grimoire
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {FEATURES.map((f) => (
            <Grid item xs={12} sm={6} key={f.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(155,138,196,0.15)',
                  borderRadius: 3,
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                  '&:hover': {
                    borderColor: 'rgba(155,138,196,0.4)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: `${f.color}1F`,
                    mb: 2.5,
                  }}
                >
                  <f.icon sx={{ color: f.color, fontSize: 22 }} />
                </Box>
                <Typography variant="h6" sx={{ fontFamily: '"Fraunces", serif', fontWeight: 600, mb: 1 }}>
                  {f.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {f.body}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
