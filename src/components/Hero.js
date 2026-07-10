import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpellBlock from './SpellBlock';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 10 },
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse 800px 400px at 15% -10%, rgba(232,163,61,0.16), transparent 60%), radial-gradient(ellipse 700px 500px at 100% 20%, rgba(95,217,164,0.10), transparent 60%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip
              label="an incantation, then a shipped feature"
              size="small"
              sx={{
                mb: 3,
                bgcolor: 'rgba(95, 217, 164, 0.12)',
                color: '#5FD9A4',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 12,
                border: '1px solid rgba(95, 217, 164, 0.3)',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.08,
                mb: 3,
              }}
            >
              Write the spell.
              <br />
              Ship the <Box component="span" sx={{ color: 'primary.main' }}>product.</Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', fontSize: '1.15rem', maxWidth: 480, mb: 4, lineHeight: 1.7 }}
            >
              Code Magic turns a plain-language idea into working, deployed code —
              no boilerplate, no yak-shaving, just the part you actually meant to build.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: 2, px: 3.5, py: 1.4, fontSize: '1rem' }}
              >
                Start casting — it's free
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 2,
                  px: 3.5,
                  py: 1.4,
                  fontSize: '1rem',
                  borderColor: 'rgba(155,138,196,0.4)',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'text.secondary', bgcolor: 'rgba(155,138,196,0.08)' },
                }}
              >
                Watch a 90s demo
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <SpellBlock />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
