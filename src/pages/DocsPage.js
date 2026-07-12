import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import DocsSidebar, { DRAWER_WIDTH } from '../components/docs/DocsSidebar';
import Introduction from '../components/docs/Introduction';
import Installation from '../components/docs/Installation';
import CreatingProject from '../components/docs/CreatingProject';
import RunningProject from '../components/docs/RunningProject';
import ProjectStructure from '../components/docs/ProjectStructure';
import HtmlDocs from '../components/docs/HtmlDocs';
import CssDocs from '../components/docs/CssDocs';
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
import BestPractice from '../components/docs/bestPractice';
import DesignPattern from '../components/docs/designPatterns';
import Accessibility from '../components/docs/accessibility';
import SEO from '../components/docs/seo';
import ReactTypescript from '../components/docs/reacttypescrip';
import ReactWithBackend from '../components/docs/reactwithbackend';
import PopularLibrary from '../components/docs/popularlibraries';
import AdvanceReact from '../components/docs/advancereact';
import InterviewPreparation from '../components/docs/interviewpreparation';
import RealProject from '../components/docs/realproject';
import CheatSheet from '../components/docs/cheatsheet';
import Glossary from '../components/docs/glossary';
import MigrationGuides from '../components/docs/migrationguides'
import ReleaseNotes from '../components/docs/realeasnote';
import PrerequisitesCss from '../components/docs/prerequisites';
import EnvironmentSetupCss from '../components/DocCss/environmentSetup';
import CssSyntax from '../components/DocCss/cssSyntax';
import WaysToApply from '../components/DocCss/waytoapply';
import CssComments from '../components/DocCss/cssComments';
import CssSelector from '../components/DocCss/cssSelector';
import CssColor from '../components/DocCss/cssColor';
import CssUnit from '../components/DocCss/cssunit';
import Backgrounds from '../components/DocCss/backgrounds';
import Borders from '../components/DocCss/borders';
import Typography from '../components/DocCss/typography';
import TextProperties from '../components/DocCss/textproperties';
import BoxModel from '../components/DocCss/boxmodel';
import WidthHeight from '../components/DocCss/widthheight';
import Display from '../components/DocCss/display';
import Positioning from '../components/DocCss/positioning';
import Overflow from '../components/DocCss/overflow';
import Floats from '../components/DocCss/floats';
import FlexBox from '../components/DocCss/flelxbox';
import CssGrid from '../components/DocCss/cssgrid';
import Tables from '../components/DocCss/tables';
import CssList from '../components/DocCss/list';
import FormStyling from '../components/DocCss/fromstyling';
import Images from '../components/DocCss/images';
import CssVariable from '../components/DocCss/cssVariable';
import Function from '../components/DocCss/function';
import Transitions from '../components/DocCss/transitions';
import Animations from '../components/DocCss/animation';
import Transform from '../components/DocCss/transform';
import Filters from '../components/DocCss/filters';
import ResponshiveDesign from '../components/DocCss/responshiveDesign';
import CssArchitecture from '../components/DocCss/cssArchitecture';
import CssMethodology from '../components/DocCss/cssmethodology';
import ModernCssFeatures from '../components/DocCss/moderncssfeatures';
import CSSAccessibility from '../components/DocCss/cssaccesibility';
import PerformanceOptimization from '../components/DocCss/performanceoptimization';
import BrowserCapability from '../components/DocCss/browsercapability';
import CSSPreprocessors from '../components/DocCss/csspreprocessors';
import PostCSS from '../components/DocCss/postcss';
import CssFrameworks from '../components/DocCss/cssframework';



const JAVASCRIPT_SIDEBAR = [
  {
    group: 'JavaScript',
    items: [
      { id: 'javascript', label: 'Overview' },
      { id: 'javascript-basics', label: 'Basics' },
      { id: 'javascript-logic', label: 'Logic & loops' },
      { id: 'javascript-data', label: 'Arrays & objects' },
    ],
  },
];

const HTML_SIDEBAR = [
  {
    group: 'HTML',
    items: [
      { id: 'html', label: 'Overview' },
      { id: 'html-structure', label: 'Structure' },
      { id: 'html-forms', label: 'Forms' },
    ],
  },
];

const CSS_SIDEBAR = [
  {
    group: 'CSS',
    items: [
      { id: 'css', label: 'Introduction' },
      { id: 'css-layout', label: 'Layout' },
      { id: 'css-responsive', label: 'Responsive design' },
      { id: 'prerequisitescss', label: 'Prerequisites' },
      { id: 'environmentsetupcss', label: ' Environment Setup' },
      { id: 'csssyntax', label: 'CSS Syntax' },
      { id: 'waytoapply', label: 'Ways to Apply CSS' },
      { id: 'csscomments', label: 'CSS Comments' },
      { id: 'csselector', label: 'CSS Selectors' },
      { id: 'csscolor', label: 'Colors' },
      { id: 'cssunit', label: 'Unit' },
      { id: 'backgrounds', label: 'Backgrounds' },
      { id: 'borders', label: 'Borders' },
      { id: 'typography', label: 'Typography' },
      { id: 'textproperties', label: 'Text Properties' },
      { id: 'boxmodel', label: 'Box Model' },
      { id: 'widthheight', label: 'Width Height' },
      { id: 'display', label: 'Display' },
      { id: 'positioning', label: 'Positioning' },
      { id: 'overflow', label: 'Overflow' },
      { id: 'floats', label: 'Floats' },
      { id: 'flexbox', label: 'FlexBox' },
      { id: 'cssgrid', label: 'CssGrid' },
      { id: 'tables', label: 'Tables' },
      { id: 'list', label: 'List' },
      { id: 'formstyling', label: 'Form Styling' },
      { id: 'images', label: 'Images' },
      { id: 'cssvariable', label: ' CSS Variables' },
      { id: 'function', label: 'Function' },
      { id: 'transitions', label: 'Transitions' }, 
      { id: 'animations', label: 'Animations' },
      { id: 'transform', label: 'Transform' }, 
      { id: 'filters', label: 'Filters' },
      { id: 'responshivedesign', label: ' Responsive Design' },
      { id: 'cssarchitecture', label: 'CSS Architecture' },
      { id: 'cssmethodology', label: 'CSS Methodologies' },           
      { id: 'moderncssfeatures', label: 'Modern CSS Features' },
      { id: 'cssaccessibility', label: 'Accessibility' },
      { id: 'performanceoptimization', label: 'Performance Optimization' },
      { id: 'browsercapability', label: 'Browser Compatibility' },
      { id: 'csspreprocessors', label: ' CSS Preprocessors' },
      { id: 'postcss', label: ' PostCSS' },
      { id: 'cssframeworks', label: ' CSS Frameworks' },
    ],
  },
];

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
  'javascript-basics': JavaScript,
  'javascript-logic': JavaScript,
  'javascript-data': JavaScript,
  html: HtmlDocs,
  'html-structure': HtmlDocs,
  'html-forms': HtmlDocs,
  css: CssDocs,
  'css-layout': CssDocs,
  'css-responsive': CssDocs,
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
  bestpractice: BestPractice,
  designpattern: DesignPattern,
  accessibility: Accessibility,
  seo: SEO,
  reacttypescript: ReactTypescript,
  reactwithbackend: ReactWithBackend,
  popularlibrary: PopularLibrary,
  advancereact: AdvanceReact,
  interviewpreparation: InterviewPreparation,
  realproject: RealProject,
  cheatsheet: CheatSheet,
  glossary: Glossary,
  migrationguides: MigrationGuides,
  releasenotes: ReleaseNotes,
  prerequisitescss: PrerequisitesCss,
  environmentsetupcss: EnvironmentSetupCss,
  csssyntax: CssSyntax,
  waytoapply: WaysToApply,
  csscomments: CssComments,
  csselector: CssSelector,
  csscolor: CssColor,
  cssunit: CssUnit,
  backgrounds: Backgrounds,
  borders: Borders,
  typography: Typography,
  textproperties: TextProperties,
  boxmodel: BoxModel,
  widthheight: WidthHeight,
  display: Display,
  positioning: Positioning,
  overflow: Overflow,
  floats: Floats,
  flexbox: FlexBox,
  cssgrid: CssGrid,
  tables: Tables,
  list: CssList,
  formstyling: FormStyling,
  images: Images,
  cssvariable: CssVariable,
  function: Function,
  transitions: Transitions,
  animations: Animations,
  transform: Transform, 
  filters: Filters,
  responshivedesign: ResponshiveDesign,
  cssarchitecture: CssArchitecture,
  cssmethodology: CssMethodology,
  moderncssfeatures: ModernCssFeatures,
  cssaccessibility: CSSAccessibility,
  performanceoptimization: PerformanceOptimization, 
  browsercapability: BrowserCapability,
  csspreprocessors: CSSPreprocessors,
  postcss: PostCSS,
  cssframeworks: CssFrameworks,

};

export default function DocsPage() {
  const { sectionId } = useParams();
  const PageComponent = PAGES[sectionId];

  const sidebarNavGroups =
    sectionId === 'javascript' || sectionId === 'javascript-basics' || sectionId === 'javascript-logic' || sectionId === 'javascript-data'
      ? JAVASCRIPT_SIDEBAR
      : sectionId === 'html' || sectionId === 'html-structure' || sectionId === 'html-forms'
        ? HTML_SIDEBAR
        : sectionId === 'css' || sectionId === 'css-layout' || sectionId === 'css-responsive' || sectionId === 'prerequisitescss' ||
          sectionId === 'environmentsetupcss' || sectionId === 'csssyntax' || sectionId === 'waytoapply' || sectionId === 'csscomments' ||
          sectionId === 'csselector' || sectionId === 'csscolor' || sectionId === 'cssunit' || sectionId === 'backgrounds' || sectionId === 'borders'
          || sectionId === 'typography' || sectionId === 'textproperties' || sectionId === 'boxmodel' || sectionId === 'widthheight' || sectionId === 'display'
          || sectionId === 'positioning' || sectionId === 'overflow' || sectionId === 'floats' || sectionId === 'flexbox' || sectionId === 'cssgrid'
          || sectionId === 'tables' || sectionId === 'list' || sectionId === 'formstyling' || sectionId === 'images' || sectionId === 'cssvariable' || sectionId === 'function'
          || sectionId === 'transitions' || sectionId === 'animations' || sectionId === 'transform' || sectionId === 'filters' || sectionId === 'responshivedesign' || sectionId === 'cssarchitecture'
          || sectionId === 'cssmethodology' || sectionId === 'moderncssfeatures' || sectionId === 'cssaccessibility' || sectionId === 'performanceoptimization' || sectionId === 'browsercapability'
          || sectionId === 'csspreprocessors' || sectionId === 'postcss' || sectionId === 'cssframeworks'
          ? CSS_SIDEBAR
          : undefined;

  if (!PageComponent) {
    return <Navigate to="/docs/introduction" replace />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <DocsSidebar navGroups={sidebarNavGroups} />
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