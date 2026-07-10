import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Divider, 
  Grid, 
  Link, 
  IconButton, 
  TextField 
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function CtaFooter() {
  // Navigation Links Setup
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', url: '#features' },
        { label: 'Pricing', url: '#pricing' },
        { label: 'Integrations', url: '#integrations' },
        { label: 'Changelog', url: '#changelog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', url: '#docs' },
        { label: 'Guides', url: '#guides' },
        { label: 'API Reference', url: '#api' },
        { label: 'Status', url: '#status' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '#about' },
        { label: 'Blog', url: '#blog' },
        { label: 'Careers', url: '#careers' },
        { label: 'Contact', url: '#contact' },
      ],
    },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: 'background.default', mt: 'auto' }}>
      {/* 1. HERO CTA SECTION */}
      <Box
        sx={{
          py: { xs: 9, md: 12 },
          textAlign: 'center',
          background:
            'radial-gradient(ellipse 700px 350px at 50% 0%, rgba(232,163,61,0.14), transparent 65%)',
        }}
      >
        <Container maxWidth="sm">
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.6rem' }, 
              fontWeight: 700, 
              mb: 2,
              letterSpacing: '-0.02em'
            }}
          >
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
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 20px 48px rgba(232,163,61,0.2)',
              },
            }}
          >
            Start casting — it's free
          </Button>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(155,138,196,0.15)' }} />

      {/* 2. MAIN FOOTER LINKS & NEWSLETTER */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            
            {/* Brand Column */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2} sx={{ maxWidth: 320 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                  <Typography variant="h6" sx={{ fontFamily: '"Fraunces", serif', fontWeight: 700 }}>
                    Code Magic
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Supercharging developer workflows with automated code generation that feels like real sorcery.
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="GitHub" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="Twitter" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="LinkedIn" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>

            {/* Navigation Columns */}
            <Grid item xs={12} md={5}>
              <Grid container spacing={3}>
                {footerLinks.map((section) => (
                  <Grid item xs={4} key={section.title}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      {section.title}
                    </Typography>
                    <Stack spacing={1.5}>
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.url}
                          variant="body2"
                          underline="none"
                          sx={{ 
                            color: 'text.secondary', 
                            '&:hover': { color: 'primary.main' },
                            transition: 'color 0.2s ease'
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Newsletter Column */}
            <Grid item xs={12} md={3}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                Stay updated
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Get notified about new spells and releases.
              </Typography>
              <Stack direction="row" spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
                <TextField 
                  size="small" 
                  placeholder="Your email" 
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    '& .MuiOutlinedInput-root': { borderRadius: 2 } 
                  }}
                />
                <Button variant="outlined" sx={{ borderRadius: 2, px: 2 }}>
                  Join
                </Button>
              </Stack>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(155,138,196,0.1)' }} />

      {/* 3. BOTTOM UTILITY BAR */}
      <Box sx={{ py: 4, bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace' }}>
              © {new Date().getFullYear()} Code Magic. Built with a little help from a wand.
            </Typography>
            
            <Stack direction="row" spacing={3}>
              <Link href="#privacy" variant="caption" underline="hover" sx={{ color: 'text.secondary' }}>
                Privacy Policy
              </Link>
              <Link href="#terms" variant="caption" underline="hover" sx={{ color: 'text.secondary' }}>
                Terms of Service
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}