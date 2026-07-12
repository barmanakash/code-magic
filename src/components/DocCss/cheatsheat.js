import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSCheatSheetsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">The Ultimate CSS Engineering Reference Cheat Sheet</DocTitle>

            <DocP>
                This comprehensive cheat sheet serves as an instant technical reference for core CSS layout parameters, sizing units, positioning matrices, animation timelines, and structural selection engines. It provides syntactical syntax keys and structural blueprints to build, audit, and debug complex stylesheets across production environments.
            </DocP>

            <DocH2>1. Selectors & Specificity Matrix</DocH2>
            <DocP>
                Specificity determines which rule wins when multiple CSS declarations target the same DOM node. It is calculated as a three-component vector ($A, B, C$):
            </DocP>
            <DocList
                items={[
                    'ID Selectors (A): Adds weight to the first column (e.g., #nav-profile has a specificity of 1,0,0).',
                    'Class, Attribute, & Pseudo-Classes (B): Adds weight to the second column (e.g., .c-card, [type="text"], :hover have a specificity of 0,1,0).',
                    'Elements & Pseudo-Elements (C): Adds weight to the third column (e.g., div, main, ::before have a specificity of 0,0,1).',
                    'Universal Selector (*): Has zero specificity value (0,0,0).',
                    'The !important Flag: Bypasses the standard cascade vector completely, overriding even high-specificity inline styles.'
                ]}
            />

            <DocH3>Selector Syntax Reference Table</DocH3>
            <div className="overflow-x-auto my-4 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Selector Pattern</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Matching Logic</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">div, p</td>
                            <td className="p-3">Grouping</td>
                            <td className="p-3">Matches all &lt;div&gt; elements AND all &lt;p&gt; elements.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">div p</td>
                            <td className="p-3">Descendant</td>
                            <td className="p-3">Matches any &lt;p&gt; nested anywhere inside a &lt;div&gt;.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">div &gt; p</td>
                            <td className="p-3">Child</td>
                            <td className="p-3">Matches &lt;p&gt; elements that are direct immediate children of a &lt;div&gt;.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">div + p</td>
                            <td className="p-3">Adjacent Sibling</td>
                            <td className="p-3">Matches a &lt;p&gt; element that immediately follows a &lt;div&gt;.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">div ~ p</td>
                            <td className="p-3">General Sibling</td>
                            <td className="p-3">Matches any &lt;p&gt; element preceded by a sibling &lt;div&gt;.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>2. Layout Layout Engines: Flexbox vs. Grid</DocH2>



            <DocH3>Flexbox Quick-Keys (One-Dimensional Flow)</DocH3>
            <CodeBlock
                language="css"
                code={`.u-flex-container {
  display: flex;
  flex-direction: row;        /* Options: row | row-reverse | column | column-reverse */
  flex-wrap: nowrap;          /* Options: nowrap | wrap | wrap-reverse */
  justify-content: flex-start;/* Main Axis Alignment: flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: stretch;       /* Cross Axis Alignment: stretch | flex-start | flex-end | center | baseline */
}

.u-flex-child {
  flex: 1 1 auto;             /* Shorthand for: flex-grow | flex-shrink | flex-basis */
  align-self: auto;           /* Overrides container's cross-axis alignment rules */
}`}
            />

            <DocH3>Grid Quick-Keys (Two-Dimensional Matrix)</DocH3>
            <CodeBlock
                language="css"
                code={`.u-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* Creates three equal fluid columns */
  grid-template-rows: auto 150px;
  gap: 16px;                              /* Row and column spacing track gutter */
  
  /* Auto-fit responsive track layout engine (zero media queries required) */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.u-grid-child {
  grid-column: 1 / span 2;     /* Starts at grid line 1 and spans across 2 columns */
  grid-row: 2;                 /* Positions item directly on row track 2 */
}`}
            />

            <DocH2>3. Units, Colors, & Display Modes</DocH2>

            <DocH3>Core Sizing Dimensions</DocH3>
            <DocList
                items={[
                    'px: Absolute pixel boundaries. Ideal for thin structural element borders, but should be avoided for typography layers.',
                    'rem: Relative to the root HTML element font size (usually 1rem = 16px). Essential for building responsive, accessible typography systems.',
                    'em: Relative to the font size of the parent element container context.',
                    'vw / vh: Viewport units representing percentages of the overall screen viewport width and height (e.g., 100vh captures full screen height).'
                ]}
            />

            <DocH3>Color Spaces Mapping Reference</DocH3>
            <CodeBlock
                language="css"
                code={`.c-color-demo {
  color: #0284c7;                             /* Hexadecimal Base Code */
  color: rgb(2, 132, 199);                    /* Standard RGB Integer Space */
  color: rgba(2, 132, 199, 0.8);              /* RGB + Alpha Opacity Control */
  
  /* Next-Gen Perceptually Uniform Space (Highly recommended for modern design systems) */
  color: oklch(0.55 0.18 250);                 /* Parameters: Lightness (0-1) | Chroma (Color Intensity) | Hue (0-360) */
}`}
            />

            <DocH3>Display & Positioning Behaviours</DocH3>
            <DocList
                items={[
                    'display: block: Forces the element to take up the full available width, starting on a fresh line.',
                    'display: inline: Wraps tight around content boundaries; ignores explicit width, height, and vertical margin adjustments.',
                    'display: inline-block: Flows inline along text tracks but respects custom width, height, padding, and margin limits.',
                    'position: relative: Keeps the element in the normal document layout flow while allowing fine-tuned offsets via top/bottom/left/right coordinates.',
                    'position: absolute: Pulls the element completely out of the normal layout flow, positioning it relative to its closest parent container with a non-static position configuration.',
                    'position: fixed: Pins the element relative to the browser viewport layout window, anchoring it securely in place even during page scrolls.',
                    'position: sticky: Acts like a relative element in normal flow until it hits a specified scroll boundary threshold (e.g., top: 0;), where it locks into a fixed position.'
                ]}
            />

            <DocH2>4. Motion, Transforms, & Media Queries</DocH2>

            <DocH3>Hardware-Accelerated 3D Transform Workspaces</DocH3>
            <CodeBlock
                language="css"
                code={`.c-motion-card {
  /* Composing multiple modifications securely inside one line */
  transform: translateX(20px) rotate(45deg) scale(1.05);
  
  /* Elevates the animation timeline to a dedicated GPU hardware compositing layer */
  will-change: transform;
  
  /* Transition: Property | Duration | Timing Function | Delay */
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}`}
            />

            <DocH3>Keyframe Animation Orchestrations</DocH3>
            <CodeBlock
                language="css"
                code={`.c-pulse-indicator {
  /* Animation shorthand configuration link */
  animation: pulseEffect 2s infinite ease-in-out;
}

@keyframes pulseEffect {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`}
            />

            <DocH3>Standard Mobile-First Responsive Breakpoints</DocH3>
            <CodeBlock
                language="css"
                code={`/* Mobile First Standard Base (Default styles apply to mobile viewports) */
.c-responsive-container { width: 100%; padding: 12px; }

/* Small Tablet / Large Mobile Focus */
@media (min-width: 640px) {
  .c-responsive-container { padding: 24px; }
}

/* Medium Desktop Viewports */
@media (min-width: 768px) {
  .c-responsive-container { max-width: 720px; }
}

/* Large Enterprise Desktop Monitors */
@media (min-width: 1024px) {
  .c-responsive-container { max-width: 960px; }
}`}
            />

            <DocH2>Unified Interactive Cheat Sheet View</DocH2>
            <DocP>
                Below is a production-tier testing dashboard component that combines the core layout rules from this reference guide—including responsive CSS grids, absolute tag placements, transform states, and mobile-first container logic:
            </DocP>

            <DocH3>Interactive Cheat Sheet Component (CheatSheetWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function CheatSheetWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center text-xs font-sans">
      
      {/* Container utilizing mobile-first widths and modern grid layouts */}
      <article className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md">
        
        {/* Absolute positioning utility pinning status tag to top-right corner */}
        <span className="absolute top-4 right-4 font-mono text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
          Ref Active
        </span>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight">CSS Layout Engine Sandbox</h3>
            <p className="text-gray-500 mt-1 leading-relaxed">
              Hover over this card to watch the smooth GPU-accelerated transition and absolute positioning tokens scale seamlessly across the box architecture.
            </p>
          </div>

          {/* Flexbox layout container row mapping values evenly */}
          <div className="flex justify-between gap-3 bg-gray-50 p-3 rounded-xl border font-mono text-[10px]">
            <div className="flex flex-col">
              <span className="text-gray-400 font-bold uppercase text-[8px]">Unit Model</span>
              <span className="text-gray-700 font-semibold mt-0.5">Fluid rem/em</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 font-bold uppercase text-[8px]">Color Matrix</span>
              <span className="text-gray-700 font-semibold mt-0.5">OKLCH Space</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-gray-400 font-bold uppercase text-[8px]">Viewport</span>
              <span className="text-blue-600 font-bold mt-0.5">Mobile First</span>
            </div>
          </div>

          <button className="w-full bg-gray-900 text-white font-semibold py-2.5 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer text-center">
            Verify Reference Engine
          </button>
        </div>

      </article>

    </div>
  );
}`}
            />
        </>
    );
}