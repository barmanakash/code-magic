import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DocsPage from './pages/DocsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/:sectionId" element={<DocsPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;