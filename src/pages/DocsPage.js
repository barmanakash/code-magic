import React, { useState } from 'react';
import { Box, Container, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
import JsIntroduction from '../components/docs/jsIntroduction';
import JsPrerequisites from '../components/docs/jsPrerequisites';
import JsEnvironmentSetup from '../components/docs/jsEnvironmentSetup';
import JsBasics from '../components/docs/jsBasics';
import JsVariables from '../components/docs/jsVariables';
import JsDataTypes from '../components/docs/jsDataTypes';
import JsFunctions from '../components/docs/jsFunctions';
import JsScope from '../components/docs/jsScope';
import JsHoisting from '../components/docs/jsHoisting';
import JsControlFlow from '../components/docs/jsControlFlow';
import JsLoops from '../components/docs/jsLoops';
import JsErrorHandling from '../components/docs/jsErrorHandling';
import JsEvents from '../components/docs/jsEvents';
import JsDom from '../components/docs/jsDom';
import JsBom from '../components/docs/jsBom';
import JsForms from '../components/docs/jsForms';
import JsTimers from '../components/docs/jsTimers';
import JsModules from '../components/docs/jsModules';
import JsClasses from '../components/docs/jsClasses';
import JsOop from '../components/docs/jsOop';
import JsAsync from '../components/docs/jsAsync';
import JsFetch from '../components/docs/jsFetch';
import JsJson from '../components/docs/jsJson';
import JsStorage from '../components/docs/jsStorage';
import JsRegex from '../components/docs/jsRegex';
import JsIteratorsGenerators from '../components/docs/jsIteratorsGenerators';
import JsCollections from '../components/docs/jsCollections';
import JsAdvancedFunctions from '../components/docs/jsAdvancedFunctions';
import JsAdvancedObjects from '../components/docs/jsAdvancedObjects';
import JsMemory from '../components/docs/jsMemory';
import JsPerformance from '../components/docs/jsPerformance';
import JsBrowserApis from '../components/docs/jsBrowserApis';
import JsWebApis from '../components/docs/jsWebApis';
import JsSecurity from '../components/docs/jsSecurity';
import JsTesting from '../components/docs/jsTesting';
import JsDebugging from '../components/docs/jsDebugging';
import JsDesignPatterns from '../components/docs/jsDesignPatterns';
import JsBestPractices from '../components/docs/jsBestPractices';
import JsCommonMistakes from '../components/docs/jsCommonMistakes';
import JsInterviewQuestions from '../components/docs/jsInterviewQuestions';
import JsRealProjects from '../components/docs/jsRealProjects';
import JsCheatSheet from '../components/docs/jsCheatSheet';
import JsFaqAppendix from '../components/docs/jsFaqAppendix';
import JsOperators from '../components/docs/jsOperators';
import JsTypeConversion from '../components/docs/jsTypeConversion';
import JsStrings from '../components/docs/jsStrings';
import JsNumbers from '../components/docs/jsNumbers';
import JsDates from '../components/docs/jsDates';
import JsArrays from '../components/docs/jsArrays';
import JsObjects from '../components/docs/jsObjects';
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
import TypographyCss from '../components/DocCss/typography';
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
import CssInJavaScript from '../components/DocCss/cssinjavascript';
import DebuggingCSS from '../components/DocCss/debuggingcss';
import CssBestPractice from '../components/DocCss/bestPractice';
import CommonMistake from '../components/DocCss/commonmistake';
import InterviewQuestion from '../components/DocCss/interviewquestion';
import CssRealProject from '../components/DocCss/realproject';
import CheatSeet from '../components/DocCss/cheatsheat';
import CssFAQ from '../components/DocCss/cssfaq';
import HTMLIntroduction from '../components/DocHTML/htmlintroduction'
import HTMLPrerequisitesDoc from '../components/DocHTML/htmlprerequsites'
import HTMLEnvironmentSetupDoc from '../components/DocHTML/htmlnwfile';
import HTMLBasicsDoc from '../components/DocHTML/htmlSetup';
import HTMLElementsDoc from '../components/DocHTML/htmlElements';
import HTMLAttributesDoc from '../components/DocHTML/htmlattributes';
import HTMLHeadElementsDoc from '../components/DocHTML/headElements';
import HTMLTextFormattingDoc from '../components/DocHTML/textformating';
import HTMLLinksDoc from '../components/DocHTML/links';
import HTMLImagesDoc from '../components/DocHTML/images';
import HTMLAudioDoc from '../components/DocHTML/audio';
import HTMLVideoDoc from '../components/DocHTML/vidio';
import HTMLListsDoc from '../components/DocHTML/htmllist';
import HTMLTablesDoc from '../components/DocHTML/tables'
import HTMLFormsDoc from '../components/DocHTML/forms';
import HTMLFormControlsDoc from '../components/DocHTML/formControls';
import HTMLInputTypesDoc from '../components/DocHTML/inputTypes';
import HTMLFormValidationDoc from '../components/DocHTML/formValidation';
import HTMLSemanticDoc from '../components/DocHTML/sementicHTML';
import HTMLWebLayoutDoc from '../components/DocHTML/layout';
import HTMLIframesDoc from '../components/DocHTML/iframes';
import HTMLSVGDoc from '../components/DocHTML/svg';
import HTMLCanvasDoc from '../components/DocHTML/canvas';
import HTMLEntitiesDoc from '../components/DocHTML/htmlentities';
import HTMLCharacterEncodingDoc from '../components/DocHTML/characterencoding';
import HTMLWebAPIsDoc from '../components/DocHTML/webelementsapi';
import HTMLWebStorageDoc from '../components/DocHTML/webstorage';
import HTMLDragAndDropDoc from '../components/DocHTML/draganddrop';
import HTMLGeolocationDoc from '../components/DocHTML/geolcation';
import HTMLAccessibilityDoc from '../components/DocHTML/accessibility';
import HTMLSEODoc from '../components/DocHTML/htmlseo';
import HTMLPerformanceOptimizationDoc from '../components/DocHTML/performanceOptimization';
import HTMLResponsiveDocs from '../components/DocHTML/htmlresponsive';
import HTMLBestPracticesDoc from '../components/DocHTML/htmlbestPractice';
import HTMLValidationDoc from '../components/DocHTML/htmlvalidation';
import HTMLBrowserCompatibilityDoc from '../components/DocHTML/Browsercomp';
import HTMLDeprecatedTagsDoc from '../components/DocHTML/deprecatedTags';
import HTMLTemplatesDoc from '../components/DocHTML/templates';
import HTMLMetadataDoc from '../components/DocHTML/metaData';
import HTMLWebComponentsDoc from '../components/DocHTML/webcomponents';
import HTMLSecurityDoc from '../components/DocHTML/htmlsecurity';
import HTMLWithCSSDoc from '../components/DocHTML/htmlandcss';
import HTMLWithJavaScriptDoc from '../components/DocHTML/htmlwithJavaScript';
import HTMLProjectStructureDoc from '../components/DocHTML/htmlprojectsturtur';
import BestPracticesDocHTML from '../components/DocHTML/bestpracticehtml';
import HTMLCommonMistakesDoc from '../components/DocHTML/commonMistakes';
import HTMLInterviewQuestionsDoc from '../components/DocHTML/interviewQuestions';
import HTMLRealProjectsDoc from '../components/DocHTML/realProjects';
import HTMLCheatSheetDoc from '../components/DocHTML/cheatSheet';
import HTMLFaqDoc from '../components/DocHTML/faq';




const JAVASCRIPT_SIDEBAR = [
  {
    group: 'JavaScript',
    items: [
      { id: 'javascript', label: 'Introduction' },
      { id: 'jsprerequisites', label: 'Prerequisites' },
      { id: 'jsenvironmentsetup', label: 'Environment Setup' },
      { id: 'javascript-basics', label: 'Basics' },
      { id: 'jsvariables', label: 'Variables' },
      { id: 'jsdatatypes', label: 'Data Types' },
      { id: 'jsoperators', label: 'Operators' },
      { id: 'jstypeconversion', label: 'Type Conversion' },
      { id: 'jsstrings', label: 'Strings' },
      { id: 'jsnumbers', label: 'Numbers' },
      { id: 'jsdates', label: 'Dates' },
      { id: 'javascript-logic', label: 'Loops' },
      { id: 'javascript-data', label: 'Arrays' },
      { id: 'jsobjects', label: 'Objects' },
      { id: 'jsfunctions', label: 'Functions' },
      { id: 'jsscope', label: 'Scope' },
      { id: 'jshoisting', label: 'Hoisting' },
      { id: 'jscontrolflow', label: 'Control Flow' },
      { id: 'jserrorhandling', label: 'Error Handling' },
      { id: 'jsevents', label: 'Events' },
      { id: 'jsdom', label: 'DOM' },
      { id: 'jsbom', label: 'BOM' },
      { id: 'jsforms', label: 'Forms' },
      { id: 'jstimers', label: 'Timers' },
      { id: 'jsmodules', label: 'Modules' },
      { id: 'jsclasses', label: 'Classes' },
      { id: 'jsoop', label: 'Object-Oriented Programming' },
      { id: 'jsasync', label: 'Asynchronous JavaScript' },
      { id: 'jsfetch', label: 'Fetch API' },
      { id: 'jsjson', label: 'JSON' },
      { id: 'jsstorage', label: 'Storage' },
      { id: 'jsregex', label: 'Regular Expressions' },
      { id: 'jsiteratorsgenerators', label: 'Iterators & Generators' },
      { id: 'jscollections', label: 'Collections' },
      { id: 'jsadvancedfunctions', label: 'Advanced Functions' },
      { id: 'jsadvancedobjects', label: 'Advanced Objects' },
      { id: 'jsmemory', label: 'Memory Management' },
      { id: 'jsperformance', label: 'Performance Optimization' },
      { id: 'jsbrowserapis', label: 'Browser APIs' },
      { id: 'jswebapis', label: 'Web APIs' },
      { id: 'jssecurity', label: 'Security' },
      { id: 'jstesting', label: 'Testing' },
      { id: 'jsdebugging', label: 'Debugging' },
      { id: 'jsdesignpatterns', label: 'Design Patterns' },
      { id: 'jsbestpractices', label: 'Best Practices' },
      { id: 'jscommonmistakes', label: 'Common Mistakes' },
      { id: 'jsinterviewquestions', label: 'Interview Questions' },
      { id: 'jsrealprojects', label: 'Real Projects' },
      { id: 'jscheatsheet', label: 'Cheat Sheets' },
      { id: 'jsfaqappendix', label: 'FAQs & Appendix' },
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
      { id: 'htmlintroduction', label: 'Introduction' },
      { id: 'htmlpre', label: 'Prerequisites' },
      { id: 'htmlenv', label: 'Environment Setup' },
      { id: 'htmlsetup', label: 'HTML Basics' },
      { id: 'htmlElements', label: 'HTML Elements' },
      { id: 'htmlattributes', label: 'HTML Attributes'},
      { id: 'htmlheadelements', label: 'Head Elements'},
      { id: 'htmlformating', label: 'Text Formatting'},
      { id: 'htmlinks', label: 'Links'},
      { id: 'htmlimages', label: 'Images'},
      { id: 'htmlaudio', label: 'Audio'},
      { id: 'htmlvideo', label: 'Video'},
      { id: 'htmllist', label: 'Lists'},
      { id: 'htmltable', label: 'Tables'},
      { id: 'htmlforms', label: 'Forms'},
      { id: 'htmlformcontrols', label: 'Form Controls'},
      { id: 'htmlinputtypes', label: 'Input Types'},
      { id: 'htmlformvalidation', label: 'Form Validation'},
      { id: 'htmlsementic', label: 'Semantic HTML'},
      { id: 'htmllayout', label: 'Layout'},
      { id: 'htmliframe', label: 'Iframes'},
      { id: 'htmlsvg', label: 'SVG'},
      { id: 'htmlcanvas', label: 'Canvas'},
      { id: 'htmlentities', label: 'HTML Entities'},
      { id: 'htmlcharacterencoding', label: 'Character Encoding'},
      { id: 'htmlwebelementsapi', label: ' HTML APIs'},
      { id: 'htmlwebstorage', label: 'Web Storage'},
      { id: 'htmldraganddrop', label: 'Drag and Drop'},
      { id: 'htmlgeoloaction', label: 'Geolocation'},
      { id: 'htmlaccessibility', label: 'Accessibility'},
      { id: 'htmlseo', label: 'SEO'},
      { id: 'performanceoptimization', label: 'Performance Optimization'},
      { id: 'htmlresponsive', label: 'HTMLResponsiveDocs'},
      { id: 'htmlbestPractice', label: 'HTML Best Practices'},
      { id: 'htmlvalidation', label: 'HTML Validation'},
      { id: 'htmlbrowsercomp', label: 'Browser Compatibility'},
      { id: 'htmldeprecated', label: 'Deprecated Tags'},
      { id: 'htmltemplates', label: 'HTML Templates'},
      { id: 'htmlmetadata', label: 'Metadata'},
      { id: 'htmlwebcomponnent', label: 'Web Components'},
      { id: 'htmlsecurity', label: 'Security'},
      { id: 'htmlandcss', label: ' HTML with CSS '},
      { id: 'htmlwithJavscript', label: ' HTML with JavaScript'},
      { id: 'htmlprojexctsturture', label: 'Project Structure'},
      { id: 'bestpracticehtml', label: 'Best Practices'},
      { id: 'htmlcommonmistakes', label: 'Common Mistakes'},
      { id: 'htmlinterviewquestions', label: 'Interview Questions'},
      { id: 'htmlrealprojects', label: 'Real Projects'},
      { id: 'htmlcheatsheet', label: 'Cheat Sheets'},
      { id: 'htmlfaq', label: 'FAQs'},
    ],
  },
];

const CSS_SIDEBAR = [
  {
    group: 'CSS',
    items: [
      { id: 'css', label: 'Introduction' },
      // { id: 'css-layout', label: 'Layout' },
      // { id: 'css-responsive', label: 'Responsive design' },
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
      { id: 'cssinjavascript', label: ' CSS In JavaScript' },
      { id: 'debuggingcss', label: 'Debugging CSS' },
      { id: 'bestpractice', label: 'Best Practice' },
      { id: 'commonmistake', label: 'Common Mistakes'},
      { id: 'interviewquestion', label: 'Interview Questions'},
      { id: 'realproject', label: 'Real Project'},
      { id: 'cheatsheet', label: 'Cheat Sheet'},
      { id: 'csfaq', label: 'FAQ'},
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
  javascript: JsIntroduction,
  jsprerequisites: JsPrerequisites,
  jsenvironmentsetup: JsEnvironmentSetup,
  'javascript-basics': JsBasics,
  jsvariables: JsVariables,
  jsdatatypes: JsDataTypes,
  jsoperators: JsOperators,
  jstypeconversion: JsTypeConversion,
  jsstrings: JsStrings,
  jsnumbers: JsNumbers,
  jsdates: JsDates,
  'javascript-logic': JsLoops,
  'javascript-data': JsArrays,
  jsobjects: JsObjects,
  jsfunctions: JsFunctions,
  jsscope: JsScope,
  jshoisting: JsHoisting,
  jscontrolflow: JsControlFlow,
  jserrorhandling: JsErrorHandling,
  jsevents: JsEvents,
  jsdom: JsDom,
  jsbom: JsBom,
  jsforms: JsForms,
  jstimers: JsTimers,
  jsmodules: JsModules,
  jsclasses: JsClasses,
  jsoop: JsOop,
  jsasync: JsAsync,
  jsfetch: JsFetch,
  jsjson: JsJson,
  jsstorage: JsStorage,
  jsregex: JsRegex,
  jsiteratorsgenerators: JsIteratorsGenerators,
  jscollections: JsCollections,
  jsadvancedfunctions: JsAdvancedFunctions,
  jsadvancedobjects: JsAdvancedObjects,
  jsmemory: JsMemory,
  jsperformance: JsPerformance,
  jsbrowserapis: JsBrowserApis,
  jswebapis: JsWebApis,
  jssecurity: JsSecurity,
  jstesting: JsTesting,
  jsdebugging: JsDebugging,
  jsdesignpatterns: JsDesignPatterns,
  jsbestpractices: JsBestPractices,
  jscommonmistakes: JsCommonMistakes,
  jsinterviewquestions: JsInterviewQuestions,
  jsrealprojects: JsRealProjects,
  jscheatsheet: JsCheatSheet,
  jsfaqappendix: JsFaqAppendix,
  html: HtmlDocs,
  'html-structure': HtmlDocs,
  'html-forms': HtmlDocs,
  css: CssDocs,
  // 'css-layout': CssDocs,
  // 'css-responsive': CssDocs,
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
  typography: TypographyCss,
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
  cssinjavascript: CssInJavaScript,
  debuggingcss: DebuggingCSS,
  bestpractice: CssBestPractice,
  commonmistake: CommonMistake,
  interviewquestion: InterviewQuestion,
  realproject: CssRealProject,
  cheatsheet: CheatSeet,
  csfaq: CssFAQ,
  htmlintroduction: HTMLIntroduction, 
  htmlpre: HTMLPrerequisitesDoc,
  htmlenv: HTMLEnvironmentSetupDoc,
  htmlsetup: HTMLBasicsDoc,
  htmlElements: HTMLElementsDoc, 
  htmlattributes: HTMLAttributesDoc, 
  htmlheadelements : HTMLHeadElementsDoc,
  htmlformating: HTMLTextFormattingDoc,
  htmlinks: HTMLLinksDoc,
  htmlimages: HTMLImagesDoc,
  htmlaudio: HTMLAudioDoc,
  htmlvideo: HTMLVideoDoc,
  htmllist: HTMLListsDoc,
  htmltable: HTMLTablesDoc,   
  htmlforms: HTMLFormsDoc,
  htmlformcontrols: HTMLFormControlsDoc,
  htmlinputtypes: HTMLInputTypesDoc,
  htmlformvalidation: HTMLFormValidationDoc,
  htmlsementic: HTMLSemanticDoc,
  htmllayout: HTMLWebLayoutDoc,
  htmliframe: HTMLIframesDoc,
  htmlsvg: HTMLSVGDoc,
  htmlcanvas: HTMLCanvasDoc,
  htmlentities: HTMLEntitiesDoc,
  htmlcharacterencoding: HTMLCharacterEncodingDoc,
  htmlwebelementsapi: HTMLWebAPIsDoc,
  htmlwebstorage: HTMLWebStorageDoc,
  htmldraganddrop: HTMLDragAndDropDoc,
  htmlgeoloaction: HTMLGeolocationDoc,
  htmlaccessibility: HTMLAccessibilityDoc,
  htmlseo: HTMLSEODoc,
  performanceoptimization: HTMLPerformanceOptimizationDoc,
  htmlresponsive: HTMLResponsiveDocs,
  htmlbestPractice: HTMLBestPracticesDoc,
  htmlvalidation: HTMLValidationDoc,
  htmlbrowsercomp: HTMLBrowserCompatibilityDoc,
  htmldeprecated: HTMLDeprecatedTagsDoc,
  htmltemplates: HTMLTemplatesDoc,
  htmlmetadata: HTMLMetadataDoc,
  htmlwebcomponnent: HTMLWebComponentsDoc,
  htmlsecurity: HTMLSecurityDoc,
  htmlandcss: HTMLWithCSSDoc,
  htmlwithJavscript: HTMLWithJavaScriptDoc,
  htmlprojexctsturture:HTMLProjectStructureDoc,
  bestpracticehtml: BestPracticesDocHTML,
  htmlcommonmistakes: HTMLCommonMistakesDoc,
  htmlinterviewquestions: HTMLInterviewQuestionsDoc,
  htmlrealprojects: HTMLRealProjectsDoc,
  htmlcheatsheet: HTMLCheatSheetDoc,
  htmlfaq: HTMLFaqDoc,


};

export default function DocsPage() {
  const { sectionId } = useParams();
  const PageComponent = PAGES[sectionId];
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileOpen((prev) => !prev);
  };

  const sidebarNavGroups =
    sectionId === 'javascript' || sectionId === 'jsprerequisites' || sectionId === 'jsenvironmentsetup' || sectionId === 'javascript-basics' || sectionId === 'jsvariables' || sectionId === 'jsdatatypes' || sectionId === 'jsoperators' || sectionId === 'jstypeconversion' || sectionId === 'jsstrings' || sectionId === 'jsnumbers' || sectionId === 'jsdates' || sectionId === 'javascript-logic' || sectionId === 'javascript-data' || sectionId === 'jsobjects' || sectionId === 'jsfunctions' || sectionId === 'jsscope' || sectionId === 'jshoisting' || sectionId === 'jscontrolflow' || sectionId === 'jserrorhandling' || sectionId === 'jsevents' || sectionId === 'jsdom' || sectionId === 'jsbom' || sectionId === 'jsforms' || sectionId === 'jstimers' || sectionId === 'jsmodules' || sectionId === 'jsclasses' || sectionId === 'jsoop' || sectionId === 'jsasync' || sectionId === 'jsfetch' || sectionId === 'jsjson' || sectionId === 'jsstorage' || sectionId === 'jsregex' || sectionId === 'jsiteratorsgenerators' || sectionId === 'jscollections' || sectionId === 'jsadvancedfunctions' || sectionId === 'jsadvancedobjects' || sectionId === 'jsmemory' || sectionId === 'jsperformance' || sectionId === 'jsbrowserapis' || sectionId === 'jswebapis' || sectionId === 'jssecurity' || sectionId === 'jstesting' || sectionId === 'jsdebugging' || sectionId === 'jsdesignpatterns' || sectionId === 'jsbestpractices' || sectionId === 'jscommonmistakes' || sectionId === 'jsinterviewquestions' || sectionId === 'jsrealprojects' || sectionId === 'jscheatsheet' || sectionId === 'jsfaqappendix'
      ? JAVASCRIPT_SIDEBAR
      : sectionId === 'html' || sectionId === 'html-structure' || sectionId === 'html-forms' || sectionId === 'htmlintroduction' ||
       sectionId === 'htmlpre' || sectionId === 'htmlenv' || sectionId === 'htmlsetup' || sectionId === 'htmlElements' || 
       sectionId === 'htmlattributes' || sectionId === 'htmlheadelements'|| sectionId === 'htmlformating' || sectionId === 'htmlinks' || sectionId === 'htmlimages' || sectionId === 'htmlaudio' || sectionId === 'htmlvideo' || sectionId === 'htmllist' 
       || sectionId === 'htmltable' || sectionId === 'htmlforms' || sectionId === 'htmlformcontrols' || sectionId === 'htmlinputtypes' || sectionId === 'htmlformvalidation' || 
       sectionId === 'htmlsementic' || sectionId === 'htmllayout' || sectionId === 'htmliframe' || sectionId === 'htmlsvg' || sectionId === 'htmlcanvas' || 
       sectionId === 'htmlentities' || sectionId === 'htmlcharacterencoding' || sectionId === 'htmlwebelementsapi' || sectionId === 'htmlwebstorage' || 
       sectionId === 'htmldraganddrop' || sectionId === 'htmlgeoloaction' || sectionId === 'htmlaccessibility' || sectionId === 'htmlseo' || sectionId === 'performanceoptimization' || 
       sectionId === 'htmlresponsive' || sectionId === 'htmlbestPractice' || sectionId === 'htmlvalidation' || sectionId === 'htmlbrowsercomp' || sectionId === 'htmldeprecated' || 
       sectionId === 'htmltemplates' || sectionId === 'htmlmetadata' || sectionId === 'htmlwebcomponnent' || sectionId === 'htmlsecurity' || sectionId === 'htmlandcss' || sectionId === 'htmlwithJavscript' || sectionId === 'htmlprojexctsturture' || sectionId === 'bestpracticehtml' || sectionId === 'htmlcommonmistakes' || sectionId === 'htmlinterviewquestions' || sectionId === 'htmlrealprojects' || sectionId === 'htmlcheatsheet' || sectionId === 'htmlfaq'
        ? HTML_SIDEBAR
        : sectionId === 'css'|| sectionId === 'prerequisitescss' ||
          sectionId === 'environmentsetupcss' || sectionId === 'csssyntax' || sectionId === 'waytoapply' || sectionId === 'csscomments' ||
          sectionId === 'csselector' || sectionId === 'csscolor' || sectionId === 'cssunit' || sectionId === 'backgrounds' || sectionId === 'borders'
          || sectionId === 'typography' || sectionId === 'textproperties' || sectionId === 'boxmodel' || sectionId === 'widthheight' || sectionId === 'display'
          || sectionId === 'positioning' || sectionId === 'overflow' || sectionId === 'floats' || sectionId === 'flexbox' || sectionId === 'cssgrid'
          || sectionId === 'tables' || sectionId === 'list' || sectionId === 'formstyling' || sectionId === 'images' || sectionId === 'cssvariable' || sectionId === 'function'
          || sectionId === 'transitions' || sectionId === 'animations' || sectionId === 'transform' || sectionId === 'filters' || sectionId === 'responshivedesign' || sectionId === 'cssarchitecture'
          || sectionId === 'cssmethodology' || sectionId === 'moderncssfeatures' || sectionId === 'cssaccessibility' || sectionId === 'performanceoptimization' || sectionId === 'browsercapability'
          || sectionId === 'csspreprocessors' || sectionId === 'postcss' || sectionId === 'cssframeworks' || sectionId === 'cssinjavascript' || sectionId === 'debuggingcss' 
          || sectionId === 'bestpractice' || sectionId === 'commonmistake' || sectionId === 'interviewquestion' || sectionId === 'realproject' || sectionId === 'cheatsheet' || sectionId === 'csfaq'
          ? CSS_SIDEBAR
          : undefined;

  if (!PageComponent) {
    return <Navigate to="/docs/introduction" replace />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <DocsSidebar navGroups={sidebarNavGroups} />
      <DocsSidebar
        navGroups={sidebarNavGroups}
        variant="temporary"
        open={mobileOpen}
        onClose={toggleMobileSidebar}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} />
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Docs navigation
          </Typography>
          <IconButton color="inherit" onClick={toggleMobileSidebar}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Container maxWidth="md" sx={{ py: { xs: 5, md: 7 } }}>
          <PageComponent />
        </Container>
      </Box>
    </Box>
  );
}