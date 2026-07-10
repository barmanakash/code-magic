import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import DocsSidebar, { DRAWER_WIDTH } from '../components/docs/DocsSidebar';
import Introduction from '../components/docs/Introduction';
import Installation from '../components/docs/Installation';
import CreatingProject from '../components/docs/CreatingProject';
import RunningProject from '../components/docs/RunningProject';
import ProjectStructure from '../components/docs/ProjectStructure';
import ComponentsOverview from '../components/docs/ComponentsOverview';
import Theming from '../components/docs/Theming';
import Deployment from '../components/docs/Deployment';
import Faq from '../components/docs/Faq';

const PAGES = {
  introduction: Introduction,
  installation: Installation,
  'creating-project': CreatingProject,
  'running-project': RunningProject,
  'project-structure': ProjectStructure,
  components: ComponentsOverview,
  theming: Theming,
  deployment: Deployment,
  faq: Faq,
};

export default function DocsPage() {
  const { sectionId } = useParams();
  const PageComponent = PAGES[sectionId];

  if (!PageComponent) {
    return <Navigate to="/docs/introduction" replace />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <DocsSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} />
        <Container maxWidth="md" sx={{ py: { xs: 5, md: 7 } }}>
          <PageComponent />
        </Container>
      </Box>
    </Box>
  );
}