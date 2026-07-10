import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { DocTitle, DocP, DocH2 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

const SWATCHES = [
  { name: 'ink (background)', hex: '#1A1523' },
  { name: 'inkDeep (paper)', hex: '#12101C' },
  { name: 'ember (primary)', hex: '#E8A33D' },
  { name: 'terminal (secondary)', hex: '#5FD9A4' },
  { name: 'lavender (muted text)', hex: '#9B8AC4' },
  { name: 'paper (text)', hex: '#FAFAF7' },
];

export default function Theming() {
  return (
    <>
      <DocTitle eyebrow="Understanding the code">Theming</DocTitle>

      <DocP>
        All colors, typography, and shape rules live in one file: <code>src/theme.js</code>. It's built
        with MUI's <code>createTheme()</code> and passed to a <code>ThemeProvider</code> at the top of{' '}
        <code>App.js</code>, so every component can pull values from it via the <code>sx</code> prop.
      </DocP>

      <DocH2>Color palette</DocH2>
      <Stack spacing={1.5} sx={{ mb: 3 }}>
        {SWATCHES.map((s) => (
          <Stack key={s.hex} direction="row" alignItems="center" spacing={2}>
            <Box sx={{ width: 32, height: 32, borderRadius: 1.5, bgcolor: s.hex, border: '1px solid rgba(155,138,196,0.3)', flexShrink: 0 }} />
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13.5 }}>{s.hex}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.name}</Typography>
          </Stack>
        ))}
      </Stack>

      <DocH2>Typography</DocH2>
      <DocP>Three typefaces, each with a specific job:</DocP>
      <CodeBlock
        language="text"
        filename="type roles"
        code={`Fraunces        → all headings (h1, h2, h3) — the "spellbook" character\nInter           → body text and UI labels — clean and readable\nJetBrains Mono  → code blocks, terminal labels, buttons that read like commands`}
      />

      <DocH2>Changing the palette</DocH2>
      <DocP>To re-theme the whole site, edit the constants at the top of <code>theme.js</code>:</DocP>
      <CodeBlock
        language="js"
        filename="src/theme.js"
        code={`const ink = '#1A1523';       // change background\nconst ember = '#E8A33D';     // change primary accent\nconst terminal = '#5FD9A4';  // change secondary accent`}
      />
      <DocP>
        Because every component reads colors from <code>theme.palette</code> or{' '}
        <code>theme.custom</code> rather than hardcoding hex values inline, updating these constants
        re-colors the entire site.
      </DocP>
    </>
  );
}