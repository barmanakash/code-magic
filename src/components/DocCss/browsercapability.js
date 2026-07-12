import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSBrowserCompatibilityDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Cross-Browser Strategy & Convergence Engineering</DocTitle>

            <DocP>
                Browser Compatibility governs the techniques used to ensure styles render consistently across different web browsers, layouts, and rendering engines (Blink, WebKit, Gecko). Because browser engines adopt W3C specifications at varying rates, managing cross-platform stability requires defensive engineering. This includes feature detection queries, automated prefixing workflows, fallback strategies, and conditional polyfills to maintain a robust experience without breaking the layout.
            </DocP>

            <DocH2>Feature Detection & Compilation Safeguards</DocH2>

            <DocH3>1. Vendor Prefixes & Autoprefixer Automation</DocH3>
            <DocList
                items={[
                    'Vendor Prefixes: Historical browser identifiers (e.g., -webkit-, -moz-, -ms-, -o-) prefixed to experimental CSS rules to prevent global naming conflicts before specifications became final. Today, manually writing prefixes is an anti-pattern.',
                    'Autoprefixer Integration: A production build tool that parses standard CSS and automatically appends required vendor prefixes by checking current market adoption metrics from the Can I Use database, keeping the source code clean and maintainable.'
                ]}
            />

            <DocH3>2. Native Feature Ingestion Detection</DocH3>
            <DocList
                items={[
                    '@supports (Feature Queries): A native CSS conditional rule that executes style blocks only if the user\'s browser supports a specified property-value pair (e.g., @supports (display: grid) or @supports (background: oklch(0 0 0))). This allows for progressive enhancement, serving modern styling layers to compatible platforms while keeping reliable fallbacks for older browsers.'
                ]}
            />



            <DocH3>3. Core Polyfills & Readiness Verification</DocH3>
            <DocList
                items={[
                    'CSS Polyfilling Strategies: Unlike JavaScript, which can execute logic to mimic missing APIs, unsupported CSS properties are simply dropped by the browser\'s parser. CSS polyfills typically combine JavaScript scripts (like PostCSS transformations) that parse the stylesheets at runtime and inject fallback script layouts to reproduce next-gen behaviors (such as mimicking CSS Container Queries in older engines).',
                    'Can I Use Database: The industry-standard reference repository containing up-to-date compatibility matrix tables, tracking desktop and mobile platform support for HTML, CSS, and browser APIs.'
                ]}
            />

            <DocH2>Production Progressive Enhancement Blueprint</DocH2>
            <DocP>
                Below is a production-grade component stylesheet demonstrating feature queries, legacy engine fallbacks, manual prefix isolation checks, and defensive design token setups:
            </DocP>

            <DocH3>1. The Cross-Browser Engine Sheet (compatibility-matrix.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION CROSS-BROWSER COMPATIBILITY ENGINE
   ======================================================= */

/* A. LAYERED FALLBACK ARCHITECTURE 
   Browsers skip declarations they do not understand, 
   allowing us to layer progressive values safely */
.compat-flexible-banner {
  /* Baseline legacy color standard */
  background-color: rgb(2, 132, 199);
  
  /* Next-gen color space asset layer evaluated if supported */
  background-color: oklch(0.55 0.18 250);
  
  width: 100%;
  height: 140px;
  border-radius: 12px;
}

/* B. ADVANCED COMPONENT PROGRESSIVE ENHANCEMENT VIA @SUPPORTS */
.compat-grid-container {
  /* Fallback: Standard block display layout for legacy browsers */
  display: block;
  margin-bottom: 16px;
}

/* Executes modern layout tracks exclusively if the parsing engine passes verification */
@supports (display: grid) and (grid-template-columns: subgrid) {
  .compat-grid-container {
    display: grid;
    grid-template-columns: subgrid;
    gap: 20px;
  }
}

/* C. MANUAL PREFIX OVERRIDES FOR CRITICAL SCROLLBAR LAYOUTS
   Ensures custom scrollbar modifications work across WebKit and Firefox */
.compat-scroll-pane {
  overflow-y: auto;
  
  /* Firefox standard scroll configuration tracking */
  scrollbar-width: thin;
  scrollbar-color: oklch(0.7 0.01 240) transparent;
  
  /* Legacy WebKit engine implementation controls */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: oklch(0.7 0.01 240);
    border-radius: 3px;
  }
}`}
            />

            <DocH3>2. Layout Implementation View (CompatibilityWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './compatibility-matrix.css';

export default function CompatibilityWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-8 text-xs flex flex-col items-center justify-center space-y-6">
      
      {/* Container utilizing layered browser fallbacks */}
      <article className="bg-white border rounded-xl p-6 max-w-sm w-full shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-gray-900">Convergence Framework</h3>
          <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-mono font-bold">
            @supports Checked
          </span>
        </div>

        {/* Triggers native fallback checks across color formats */}
        <div className="compat-flexible-banner flex items-center justify-center p-4">
          <span className="text-white font-bold font-mono text-[10px] tracking-wider text-center bg-black/20 px-3 py-1 rounded-md">
            Layered Color Space Node
          </span>
        </div>
        
        <p className="text-gray-500 leading-relaxed">
          This component layers native color fallback tracks alongside conditional <code>@supports</code> feature flags to ensure clean layouts regardless of target platform maturity or engine versioning.
        </p>

        <div className="compat-scroll-pane h-16 bg-gray-50 p-3 rounded border text-gray-400 font-mono text-[10px]">
          <p className="h-24">Scroll node track testing custom webkit and firefox properties safely embedded.</p>
        </div>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}