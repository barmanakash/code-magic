import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DocsPage from './pages/DocsPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import IntegrationsPage from './pages/IntegrationsPage';
import ChangelogPage from './pages/ChangelogPage';
import GuidesPage from './pages/GuidesPage';
import ApiReferencePage from './pages/ApiReferencePage';
import StatusPage from './pages/StatusPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

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
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/api-reference" element={<ApiReferencePage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;