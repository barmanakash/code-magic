import React, { useState } from 'react';
import { Box, Typography, IconButton, Tooltip, Stack } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export default function CodeBlock({ code, language = 'bash', filename }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // clipboard API unavailable — fail silently
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2.5,
        overflow: 'hidden',
        border: '1px solid rgba(155, 138, 196, 0.2)',
        background: 'linear-gradient(180deg, #17131F 0%, #12101C 100%)',
        my: 2.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          borderBottom: '1px solid rgba(155, 138, 196, 0.15)',
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {['#E8A33D', '#5FD9A4', '#9B8AC4'].map((c) => (
            <Box key={c} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: c, opacity: 0.85 }} />
          ))}
          <Typography
            variant="caption"
            sx={{ ml: 1, color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace', fontSize: 12 }}
          >
            {filename || language}
          </Typography>
        </Stack>

        <Tooltip title={copied ? 'Copied!' : 'Copy'}>
          <IconButton size="small" onClick={handleCopy} sx={{ color: 'text.secondary' }}>
            {copied ? (
              <CheckIcon sx={{ fontSize: 16, color: '#5FD9A4' }} />
            ) : (
              <ContentCopyIcon sx={{ fontSize: 15 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2.5,
          overflowX: 'auto',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 13.5,
          lineHeight: 1.8,
          color: '#EDE7F6',
        }}
      >
        <code>{code}</code>
      </Box>
    </Box>
  );
}