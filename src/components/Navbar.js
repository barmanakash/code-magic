import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Box, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const docCategories = [
    { label: 'ReactJS', to: '/docs/introduction' },
    { label: 'JavaScript', to: '/docs/javascript' },
    { label: 'HTML', to: '/docs/html' },
    { label: 'CSS', to: '/docs/css' },
  ];

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
          <Box onMouseEnter={handleOpen}>
            <Typography
              component="button"
              type="button"
              onClick={handleOpen}
              variant="body2"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                padding: 0,
                font: 'inherit',
                '&:hover': { color: 'text.primary' },
              }}
            >
              Docs
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              MenuListProps={{ onMouseLeave: handleClose }}
              sx={{
                '& .MuiPaper-root': {
                  mt: 1,
                  borderRadius: 2,
                  minWidth: 180,
                  boxShadow: '0 18px 42px rgba(0,0,0,0.16)',
                },
              }}
            >
              {docCategories.map((item) => (
                <MenuItem
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  onClick={handleClose}
                  sx={{ py: 1.1, px: 1.75 }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
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