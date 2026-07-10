import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

export function DocTitle({ eyebrow, children }) {
  return (
    <Box sx={{ mb: 4 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', fontFamily: '"JetBrains Mono", monospace', letterSpacing: 1.5 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h1" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' }, mt: 0.5 }}>
        {children}
      </Typography>
    </Box>
  );
}

export function DocH2({ children }) {
  return (
    <Typography variant="h2" sx={{ fontSize: '1.4rem', mt: 5, mb: 2 }}>
      {children}
    </Typography>
  );
}

export function DocH3({ children }) {
  return (
    <Typography variant="h3" sx={{ fontSize: '1.2rem', mt: 4, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

export function DocP({ children }) {
  return (
    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 2, fontSize: '1rem' }}>
      {children}
    </Typography>
  );
}

export function DocList({ items }) {
  return (
    <Box component="ul" sx={{ pl: 3, mb: 2 }}>
      {items.map((item, i) => (
        <Typography
          component="li"
          key={i}
          variant="body1"
          sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 0.75, fontSize: '1rem' }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}

export function DocNote({ tone = 'info', children }) {
  const isWarning = tone === 'warning';
  const color = isWarning ? '#E8A33D' : '#5FD9A4';
  const Icon = isWarning ? WarningAmberOutlinedIcon : InfoOutlinedIcon;

  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        my: 3,
        p: 2,
        borderRadius: 2,
        alignItems: 'flex-start',
        bgcolor: `${color}14`,
        border: `1px solid ${color}40`,
      }}
    >
      <Icon sx={{ color, fontSize: 20, mt: 0.2, flexShrink: 0 }} />
      <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
        {children}
      </Typography>
    </Stack>
  );
}