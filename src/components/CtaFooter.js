import React from 'react';
import { Box, Container, Typography, Button, Stack, Divider } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CtaFooter() {
  return (
    <>
      <Box
        sx={{
          py: { xs: 9, md: 12 },
          textAlign: 'center',
          background:
            'radial-gradient(ellipse 700px 350px at 50% 0%, rgba(232,163,61,0.14), transparent 65%)',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}>
            Your next feature is one incantation away.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem' }}>
            Free for personal projects. No credit card, no setup wizard.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ borderRadius: 2, px: 4, py: 1.5, fontSize: '1rem' }}
          >
            Start casting — it's free
          </Button>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(155,138,196,0.15)' }} />

      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 18 }} />
              <Typography variant="body2" sx={{ fontFamily: '"Fraunces", serif', fontWeight: 600 }}>
                Code Magic
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace' }}>
              © {new Date().getFullYear()} Code Magic. Built with a little help from a wand.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
