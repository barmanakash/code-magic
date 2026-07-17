import React from 'react';
import { Grid, Card, Typography, Stack, Button, Chip, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StaticPage from './StaticPage';

const plans = [
  {
    name: 'Personal',
    price: 'Free',
    period: '',
    features: ['Unlimited personal projects', 'Community support', 'Core spell library', 'Public documentation access'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    features: ['Everything in Personal', 'Private projects', 'Priority generation queue', 'Email support'],
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$49',
    period: '/month',
    features: ['Everything in Pro', 'Shared team workspace', 'Role-based access control', 'Dedicated onboarding'],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <StaticPage
      eyebrow="Product"
      title="Pricing"
      subtitle="Free for personal projects. Simple, predictable plans as your team grows."
    >
      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.name}>
            <Card
              variant="outlined"
              sx={{
                p: 3.5,
                height: '100%',
                borderRadius: 3,
                position: 'relative',
                borderColor: plan.highlighted ? 'primary.main' : 'rgba(155,138,196,0.18)',
                borderWidth: plan.highlighted ? 2 : 1,
                bgcolor: 'background.paper',
              }}
            >
              {plan.highlighted && (
                <Chip
                  label="Most popular"
                  size="small"
                  color="primary"
                  sx={{ position: 'absolute', top: -12, right: 20, fontWeight: 600 }}
                />
              )}
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  {plan.name}
                </Typography>
                <Box>
                  <Typography component="span" variant="h4" sx={{ fontWeight: 700 }}>
                    {plan.price}
                  </Typography>
                  <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                    {plan.period}
                  </Typography>
                </Box>
                <Stack spacing={1}>
                  {plan.features.map((f) => (
                    <Stack direction="row" spacing={1} alignItems="center" key={f}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#5FD9A4' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  variant={plan.highlighted ? 'contained' : 'outlined'}
                  color="primary"
                  fullWidth
                  sx={{ borderRadius: 2, mt: 1 }}
                >
                  {plan.price === 'Free' ? 'Start free' : 'Choose plan'}
                </Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StaticPage>
  );
}
