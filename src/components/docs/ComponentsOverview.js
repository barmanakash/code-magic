import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { DocTitle, DocP } from '../../components/docs/DocPrimitives';

const COMPONENTS = [
  { file: 'Navbar.js', desc: 'Sticky top bar with the logo, nav links, and the primary "cast(\'signup\')" button.' },
  { file: 'Hero.js', desc: 'The landing page hero: headline, subcopy, two CTAs, and the SpellBlock demo.' },
  { file: 'SpellBlock.js', desc: 'The animated code panel — types out a snippet, then plays a short "transmuting → shipped" sequence. Pure CSS/React animation, no external library.' },
  { file: 'Features.js', desc: 'A 2x2 responsive grid of feature cards, each with an icon, title, and description.' },
  { file: 'HowItWorks.js', desc: 'The 3-step process section (write → cast → ship), each step paired with a mock terminal output line.' },
  { file: 'CtaFooter.js', desc: 'Bottom call-to-action banner plus the site footer.' },
  { file: 'docs/CodeBlock.js', desc: 'Reusable terminal-style code block with a copy-to-clipboard button. Used throughout the docs.' },
  { file: 'docs/DocsSidebar.js', desc: 'Left-hand navigation for the docs section. Reads its structure from data/docsNav.js and highlights the active page.' },
  { file: 'docs/DocPrimitives.js', desc: 'Shared typography building blocks for docs content: DocTitle, DocH2, DocP, DocList, DocNote.' },
];

export default function ComponentsOverview() {
  return (
    <>
      <DocTitle eyebrow="Understanding the code">Components overview</DocTitle>
      <DocP>
        A short reference for what each component does. Open any file in <code>src/components/</code>{' '}
        to see the implementation — they're intentionally kept small and single-purpose.
      </DocP>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {COMPONENTS.map((c) => (
          <Grid item xs={12} sm={6} key={c.file}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                height: '100%',
                bgcolor: 'background.default',
                border: '1px solid rgba(155,138,196,0.15)',
                borderRadius: 2,
              }}
            >
              <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: '#5FD9A4', mb: 1 }}>
                {c.file}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {c.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <DocP>
          Every section component follows the same shape: a top-level <code>&lt;Box&gt;</code> for
          section spacing and background, a <code>&lt;Container maxWidth="lg"&gt;</code> to constrain
          content width, and MUI's <code>sx</code> prop for styling instead of separate CSS files.
        </DocP>
      </Box>
    </>
  );
}