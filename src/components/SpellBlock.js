import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const CODE_LINES = [
  { indent: 0, text: 'function launch(idea) {' },
  { indent: 1, text: 'const spec = write(idea);' },
  { indent: 1, text: 'const build = cast(spec);' },
  { indent: 1, text: 'return ship(build);' },
  { indent: 0, text: '}' },
];

const FULL_TEXT = CODE_LINES.map((l) => '  '.repeat(l.indent) + l.text).join('\n');

export default function SpellBlock() {
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState('typing'); // typing -> pause -> transmuting -> done
  const timeoutRef = useRef(null);

  useEffect(() => {
    let i = 0;
    function tick() {
      if (i <= FULL_TEXT.length) {
        setTyped(FULL_TEXT.slice(0, i));
        i += 1;
        timeoutRef.current = setTimeout(tick, 18);
      } else {
        setPhase('pause');
        timeoutRef.current = setTimeout(() => setPhase('transmuting'), 700);
        timeoutRef.current = setTimeout(() => setPhase('done'), 1600);
      }
    }
    tick();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const lines = typed.split('\n');

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid rgba(155, 138, 196, 0.25)',
        background: 'linear-gradient(180deg, #17131F 0%, #12101C 100%)',
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)',
        minHeight: 260,
        opacity: 0,
        transform: 'translateY(18px)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease',
        animation: 'fadeInUp 0.75s ease 0.15s forwards',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 40px 110px -30px rgba(0,0,0,0.75)',
        },
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {/* window chrome */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 2,
          py: 1.25,
          borderBottom: '1px solid rgba(155, 138, 196, 0.15)',
        }}
      >
        {['#E8A33D', '#5FD9A4', '#9B8AC4'].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c, opacity: 0.85 }} />
        ))}
        <Typography
          variant="caption"
          sx={{ ml: 1, color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace', letterSpacing: 0.5 }}
        >
          spell.js
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2.5, sm: 3.5 }, fontFamily: '"JetBrains Mono", monospace', fontSize: { xs: 13, sm: 14.5 }, lineHeight: 1.9 }}>
        {lines.map((line, idx) => (
          <Box key={idx} sx={{ display: 'flex', whiteSpace: 'pre', color: '#EDE7F6' }}>
            <Box component="span" sx={{ color: 'rgba(155,138,196,0.5)', width: 24, flexShrink: 0, userSelect: 'none' }}>
              {idx + 1}
            </Box>
            <Box component="span">
              {highlight(line)}
              {idx === lines.length - 1 && phase === 'typing' && <Cursor />}
            </Box>
          </Box>
        ))}

        {phase !== 'typing' && (
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              opacity: phase === 'pause' ? 0 : 1,
              transform: phase === 'pause' ? 'translateY(6px)' : 'translateY(0)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <AutoAwesomeIcon
              sx={{
                fontSize: 18,
                color: '#E8A33D',
                animation: phase === 'transmuting' ? 'spin 0.9s ease-in-out' : 'none',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg) scale(1)' },
                  '50%': { transform: 'rotate(180deg) scale(1.3)' },
                  '100%': { transform: 'rotate(360deg) scale(1)' },
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: { xs: 13, sm: 14.5 },
                color: '#5FD9A4',
              }}
            >
              {phase === 'done' ? '✓ shipped in 42ms' : 'casting…'}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

function Cursor() {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        width: 8,
        height: 16,
        bgcolor: '#E8A33D',
        ml: 0.5,
        verticalAlign: 'text-bottom',
        animation: 'blink 1s steps(1) infinite',
        '@keyframes blink': { '50%': { opacity: 0 } },
      }}
    />
  );
}

// very small syntax "highlight" for the demo snippet
function highlight(line) {
  const keywords = ['function', 'const', 'return'];
  const parts = line.split(/(\bfunction\b|\bconst\b|\breturn\b)/g);
  return parts.map((part, i) => {
    if (keywords.includes(part)) {
      return (
        <Box key={i} component="span" sx={{ color: '#E8A33D' }}>
          {part}
        </Box>
      );
    }
    return part;
  });
}
