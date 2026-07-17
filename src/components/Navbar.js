import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuIcon from '@mui/icons-material/Menu';

const docCategories = [
  { label: 'ReactJS', to: '/docs/introduction' },
  { label: 'JavaScript', to: '/docs/javascript' },
  { label: 'HTML', to: '/docs/htmlintroduction' },
  { label: 'CSS', to: '/docs/css' },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleHowItWorksClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('how-it-works');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: 'how-it-works' } });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  const handleSignupClick = () => {
    navigate('/pricing');
    if (mobileOpen) setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 260, p: 2 }} role="presentation" onClick={handleMobileToggle}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 22 }} />
          <Typography variant="h6" sx={{ fontFamily: '"Fraunces", serif', fontWeight: 600 }}>
            Code Magic
          </Typography>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(155,138,196,0.18)' }} />

        <List disablePadding>
          {docCategories.map((item) => (
            <ListItemButton
              key={item.label}
              component={RouterLink}
              to={item.to}
              sx={{ borderRadius: 1.5, mb: 0.5 }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 15 }} />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ borderColor: 'rgba(155,138,196,0.18)' }} />

        <List disablePadding>
          <ListItemButton onClick={handleHowItWorksClick} sx={{ borderRadius: 1.5, mb: 0.5 }}>
            <ListItemText primary="How it works" primaryTypographyProps={{ fontSize: 15 }} />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/pricing" sx={{ borderRadius: 1.5, mb: 0.5 }}>
            <ListItemText primary="Pricing" primaryTypographyProps={{ fontSize: 15 }} />
          </ListItemButton>
        </List>

        <Divider sx={{ borderColor: 'rgba(155,138,196,0.18)' }} />

        <Button variant="contained" color="primary" fullWidth onClick={handleSignupClick} sx={{ borderRadius: 2, py: 1.1 }}>
          cast('signup')
        </Button>
      </Stack>
    </Box>
  );

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
          <Box onMouseEnter={handleMenuOpen}>
            <Typography
              component="button"
              type="button"
              onClick={handleMenuOpen}
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
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
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
                  onClick={handleMenuClose}
                  sx={{ py: 1.1, px: 1.75 }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            component="button"
            type="button"
            onClick={handleHowItWorksClick}
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
            How it works
          </Typography>
          <Typography
            component={RouterLink}
            to="/pricing"
            variant="body2"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': { color: 'text.primary' },
            }}
          >
            Pricing
          </Typography>
        </Stack>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSignupClick}
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

        <IconButton
          color="inherit"
          aria-label="open navigation"
          onClick={handleMobileToggle}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 1 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleMobileToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: 260, bgcolor: 'background.paper' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}