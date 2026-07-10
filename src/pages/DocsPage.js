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
import EnvironmentSetup from '../components/docs/environmentsetup';
import JavaScript from '../components/docs/javaScript';
import Props from '../components/docs/props';
import State from '../components/docs/state';
import Event from '../components/docs/event';
import ConditionalRendring from '../components/docs/conditionalRendring';
import List from '../components/docs/list';
import Forms from '../components/docs/forms'
import Style from '../components/docs/style'
import Hooks from '../components/docs/hooks'
import CustomHooks from '../components/docs/customHooks'
import ContextApiDoc from '../components/docs/ContextAPIDoc'
import LifeCycle from '../components/docs/lifeCycle'
import Effact from '../components/docs/effact';
import Routing from '../components/docs/routing';
import ApiCalls from '../components/docs/apiCalls';
import StateManagment from '../components/docs/stateManagment'
import Performance from '../components/docs/performance';
import ErrorHandling from '../components/docs/errorHandling';
import Portals from '../components/docs/portals';
import Refs from '../components/docs/refs';
import HOC from '../components/docs/hoc';
import RenderProps from '../components/docs/renderProps';
import CompundComponent from '../components/docs/compoundComponent';
import Authentication from '../components/docs/authentication';
import ReactSecurity from '../components/docs/reactSecurity';
import Testing from '../components/docs/testing';



const PAGES = {
  introduction: Introduction,
  Prerequisites: Installation,
  'creating-project': CreatingProject,
  'running-project': RunningProject,
  'project-structure': ProjectStructure,
  components: ComponentsOverview,
  theming: Theming,
  deployment: Deployment,
  faq: Faq,
  environmentsetup: EnvironmentSetup,
  javascript: JavaScript, 
  props: Props,
  state: State,
  event: Event,
  conditionalrendring: ConditionalRendring,
  list: List,
  forms: Forms,
  style: Style,
  hooks: Hooks,
  customhooks: CustomHooks,
  contextapidoc: ContextApiDoc,
  lifecycle: LifeCycle,
  effact: Effact,
  routing: Routing,
  apicalls: ApiCalls,
  statemanagment: StateManagment,
  performance: Performance,
  errorhandling: ErrorHandling,
  portals: Portals,
  refs: Refs,
  hoc: HOC,
  renderprops: RenderProps,
  compundcomponent: CompundComponent,
  authentication: Authentication, 
  reactsecurity: ReactSecurity,
  testing: Testing,









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