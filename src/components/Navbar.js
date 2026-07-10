import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
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
        <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
          <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 22 }} />
          <Typography
            variant="h6"
            sx={{ fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            Code Magic
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {['Product', 'How it works', 'Pricing'].map((item) => (
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
          sx={{ ml: 3, borderRadius: 2, px: 2.5, py: 0.8, fontFamily: '"JetBrains Mono", monospace', fontSize: 13.5 }}
        >
          cast('signup')
        </Button>
      </Toolbar>
    </AppBar>
  );
}
