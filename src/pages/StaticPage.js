import React from 'react';
import { Box, Container, Typography, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export default function StaticPage({ eyebrow, title, subtitle, children }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, minHeight: '65vh' }}>
      <Container maxWidth="md">
        <Button
          onClick={handleBack}
          startIcon={<ArrowBackRoundedIcon sx={{ fontSize: 18 }} />}
          sx={{
            mb: 4,
            px: 1.5,
            py: 0.6,
            borderRadius: 2,
            color: 'text.secondary',
            fontSize: 13.5,
            fontFamily: '"JetBrains Mono", monospace',
            textTransform: 'none',
            transition: 'transform 0.2s ease, color 0.2s ease, background-color 0.2s ease',
            '&:hover': {
              color: 'primary.main',
              bgcolor: 'rgba(155,138,196,0.08)',
              transform: 'translateX(-2px)',
            },
          }}
        >
          Back
        </Button>

        {eyebrow && (
          <Chip
            label={eyebrow}
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
        )}
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 700, mb: 2, letterSpacing: '-0.02em' }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 5, lineHeight: 1.7, maxWidth: 640 }}
          >
            {subtitle}
          </Typography>
        )}
        <Box sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8 }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}
