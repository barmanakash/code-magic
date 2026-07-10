import { createTheme } from '@mui/material/styles';

// Code Magic palette
const ink = '#1A1523';
const inkDeep = '#12101C';
const parchment = '#F3EFE6';
const ember = '#E8A33D';
const terminal = '#5FD9A4';
const lavender = '#9B8AC4';
const paper = '#FAFAF7';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: ink,
      paper: inkDeep,
    },
    primary: {
      main: ember,
      contrastText: inkDeep,
    },
    secondary: {
      main: terminal,
      contrastText: inkDeep,
    },
    text: {
      primary: paper,
      secondary: lavender,
    },
  },
  custom: {
    ink,
    inkDeep,
    parchment,
    ember,
    terminal,
    lavender,
    paper,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
