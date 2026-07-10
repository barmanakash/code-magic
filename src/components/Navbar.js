import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(26, 21, 35, 0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(155, 138, 196, 0.15)',
      }}
    >
      <Toolbar sx={{ maxWidth: 1160, width: '100%', mx: 'auto', py: 1 }}>
        <Stack
          component={RouterLink}
          to="/"
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            '&:hover': { transform: 'translateY(-1px)' },
          }}
        >
          <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 22 }} />
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.01em', color: 'text.primary' }}
          >
            Code Magic
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            component={RouterLink}
            to="/docs/introduction"
            variant="body2"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': { color: 'text.primary' },
            }}
          >
            Docs
          </Typography>
          {['How it works', 'Pricing'].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'text.primary' } }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        <Button
          variant="contained"
          color="primary"
          sx={{
            ml: 3,
            borderRadius: 2,
            px: 2.5,
            py: 0.8,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 13.5,
            transition: 'transform 0.24s ease, box-shadow 0.24s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 18px 40px rgba(232,163,61,0.18)',
            },
          }}
        >
          cast('signup')
        </Button>
      </Toolbar>
    </AppBar>
  );
}