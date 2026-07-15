import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLWebLayoutDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Web Layout Architecture: Structural Wrappers, Semantic Schemas, and Responsive Viewports</DocTitle>

            <DocP>
                Web layout engineering focuses on how elements are grouped, structured, and arranged within the browser viewport. Modern layout architecture balances non-semantic grouping boxes, semantic skeletons for accessibility, and responsive boundaries to adapt across mobile screens and desktop monitors.
            </DocP>

            <DocH2>Structural Elements: Div vs Span</DocH2>
            <DocP>
                Before styling a document, developers group elements using layout containers. The two most common building blocks are non-semantic tags, which carry no inherent meaning but serve as hooks for CSS and JavaScript:
            </DocP>

            <DocH3>1. The &lt;div&gt; Element (Block-Level)</DocH3>
            <DocList
                items={[
                    'Behavior: Operates as a block-level container. By default, it takes up the full width of its parent container and begins on a new line.',
                    'Primary Use: Used to bundle sections, create grid columns, or act as structural layout wrappers for CSS Flexbox and Grid engines.'
                ]}
            />

            <DocH3>2. The &lt;span&gt; Element (Inline-Level)</DocH3>
            <DocList
                items={[
                    'Behavior: Operates as an inline container. It takes up only as much width as its nested content requires and does not disrupt the flow of text.',
                    'Primary Use: Used to style or target specific words, phrases, or inline fragments inside a paragraph without breaking them onto a new line.'
                ]}
            />

            <DocH2>Layout Containers & Semantic Scaffolding</DocH2>

            <DocH3>1. The Concept of a "Container"</DocH3>
            <DocP>
                In CSS and frontend frameworks, a <strong>container</strong> is a top-level wrapper used to control the layout width. It centers content on larger monitors, applies horizontal padding, and sets a maximum width constraint (e.g., <code>max-width: 1200px; margin: 0 auto;</code>) so content doesn't stretch awkwardly across wide screens.
            </DocP>

            <DocH3>2. Semantic Layout Systems</DocH3>
            <DocP>
                While <code>&lt;div&gt;</code> elements are useful for visual layout styling, production-grade applications rely on semantic layout containers to organize structural regions. This makes pages accessible to assistive technologies and easier for search engines to index.
            </DocP>



            <DocH2>Responsive Layout Basics</DocH2>
            <DocP>
                A responsive layout automatically adjusts its configuration, grid sizes, and media assets to look good on any screen size. Building responsive layouts relies on a few core frontend technologies:
            </DocP>
            <DocList
                items={[
                    'The Meta Viewport Tag: A critical configuration element placed in the document <head> (e.g., <meta name="viewport" content="width=device-width, initial-scale=1.0">) that tells the browser to match the page width to the device screen, preventing mobile devices from rendering desktop layouts at a tiny scale.',
                    'Fluid Layout Grids: Moving away from absolute pixel values (like width: 960px) to relative, fluid layout measurements using percentages (%), viewport widths (vw), or flexible fraction tokens (fr).',
                    'CSS Flexbox and Grid Layouts: Modern native layout systems built to handle multi-dimensional spacing, text alignment, and dynamic row-to-column shifting without requiring complex float hacks.',
                    'Media Queries (@media): Conditional CSS rules that apply specific styles only when the device matches precise screen width cutoffs, known as breakpoints (e.g., shifting from a single-column phone layout to a three-column desktop layout at 768px).'
                ]}
            />

            <DocH2>Production-Grade Responsive Layout Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready HTML structure demonstrating semantic landmarks, container wrappers, and inline styling hooks:
            </DocP>

            <DocH3>1. Semantic Layout Architecture (layout-core.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enterprise Node Control Center</title>
</head>
<body>

  <header class="c-global-header">
    <div class="c-container">
      <h1>Operations Hub</h1>
    </div>
  </header>

  <main class="c-main-layout c-container">
    
    <section class="c-layout-grid">
      
      <article class="c-card-node">
        <h3>Primary Cluster</h3>
        <p>
          Node runtime is currently executing in <span class="u-text-highlight">Production Mode</span>. 
          All ingress data telemetry routing lanes are active.
        </p>
      </article>

      <article class="c-card-node">
        <h3>Secondary Backup Cluster</h3>
        <p>
          Standby partitions are currently in a <span class="u-text-alert">Muted Idle State</span>, 
          awaiting failover commands.
        </p>
      </article>

    </section>

  </main>

  <footer class="c-global-footer">
    <div class="c-container">
      <p>&copy; 2026 Core Systems. Built with semantic responsive grids.</p>
    </div>
  </footer>

</body>
</html>`}
            />

            <DocH3>2. Responsive Layout Workspace (HTMLLayoutWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLLayoutWorkspace() {
  const [viewportWidth, setViewportWidth] = useState('desktop');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Responsive Grid Workspace Panel</h3>
        <p className="text-gray-500 mt-1">
          Toggle between simulated device breakpoints below to see the content container and layout boxes adjust fluidly.
        </p>
      </header>

      {/* Breakpoint Simulation Toggles */}
      <div className="flex gap-2 bg-slate-200 p-1 rounded-xl">
        <button 
          onClick={() => setViewportWidth('mobile')} 
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${viewportWidth === 'mobile' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          Mobile Viewport
        </button>
        <button 
          onClick={() => setViewportWidth('desktop')} 
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${viewportWidth === 'desktop' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          Desktop Viewport (100% Width Container)
        </button>
      </div>

      {/* Simulated Display Window */}
      <div className={\`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-300 relative text-[11px] \${
        viewportWidth === 'mobile' ? 'w-[320px]' : 'w-full max-w-md'
      }\`}>
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          {viewportWidth === 'mobile' ? 'Mobile Breakpoint' : 'Desktop Grid'}
        </div>

        <div className="space-y-4 pt-4">
          
          {/* Simulated Semantic Header Container */}
          <header className="bg-slate-900 text-white p-3 rounded-xl">
            <span className="font-bold tracking-tight block">Header Container Wrapper</span>
          </header>

          {/* Dynamic Grid Layout Component */}
          <div className={\`gap-3 \${viewportWidth === 'mobile' ? 'flex flex-col' : 'grid grid-cols-2'}\`}>
            
            {/* Block Layout Box 1 */}
            <div className="p-3 border rounded-xl bg-slate-50 space-y-2">
              <div className="bg-blue-600 text-white font-mono text-[8px] font-bold px-1.5 py-0.5 rounded uppercase inline-block">
                div (Block Node A)
              </div>
              <p className="text-gray-600 leading-relaxed text-[10px]">
                This block element takes up 100% of the available layout column width. 
                Inside this text, we can use an inline <span className="bg-amber-100 text-amber-800 font-bold px-1 rounded font-mono text-[9px]">span node hook</span> to highlight individual words.
              </p>
            </div>

            {/* Block Layout Box 2 */}
            <div className="p-3 border rounded-xl bg-slate-50 space-y-2">
              <div className="bg-blue-600 text-white font-mono text-[8px] font-bold px-1.5 py-0.5 rounded uppercase inline-block">
                div (Block Node B)
              </div>
              <p className="text-gray-600 leading-relaxed text-[10px]">
                When switched to the mobile view, these columns automatically collapse and stack vertically into a single column.
              </p>
            </div>

          </div>

          {/* Footer Infrastructure Node */}
          <footer className="border-t pt-3 text-center text-[9px] text-gray-400 font-mono">
            Footer Region Container Structure
          </footer>

        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}