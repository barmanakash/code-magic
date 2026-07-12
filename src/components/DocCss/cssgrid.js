import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSGridDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Grid Layout Engine</DocTitle>

            <DocP>
                The CSS Grid Layout Model is a highly powerful two-dimensional layout engine built to handle both columns and rows simultaneously. While Flexbox excels at aligning items along a single axis, CSS Grid provides complete structural control over complex web interfaces, dashboard layouts, and media grids.
            </DocP>

            <DocH2>Grid Structural Architecture</DocH2>
            <DocList
                items={[
                    'Grid Container: The parent element initialized with display: grid or display: inline-grid. This establishes a new grid formatting context for its immediate children.',
                    'Grid Items: The immediate child nodes of a grid container. These items naturally place themselves into designated tracks or can be manually positioned across custom cell ranges.'
                ]}
            />



            <DocH2>Track Definitions & Structural Fluidity Operators</DocH2>

            <DocH3>1. Track Geometry Properties</DocH3>
            <DocList
                items={[
                    'grid-template-columns & grid-template-rows: Configures the explicit dimensions of horizontal column and vertical row tracks using length units, percentages, or fractional fr units.',
                    'grid-template-areas: Binds named layout tokens to specific grid cell clusters. This allows you to construct highly visual, declarative page layouts directly within your stylesheet.',
                    'gap: A shorthand property that configures grid-row-gap and grid-column-gap simultaneously to create a clean spacing matrix between grid tracks.'
                ]}
            />

            <DocH3>2. Advanced Scaling Operators</DocH3>
            <DocList
                items={[
                    'repeat(): A functional syntax that eliminates repetitive track listings by duplicating declarations over a specified count (e.g., repeat(4, 1fr)).',
                    'minmax(): Establishes a flexible sizing range with a rigid minimum floor and a fluid maximum ceiling (e.g., minmax(200px, 1fr) ensures tracks never shrink below 200px).',
                    'auto-fill vs. auto-fit: Sizing keywords used inside repeat() to build highly responsive layouts without media queries. auto-fill creates as many columns as will fit inside the container space, even leaving them empty if no child elements remain. auto-fit acts similarly but collapses any empty tracks down to 0px, stretching the active cards to absorb all remaining space.'
                ]}
            />

            <DocH2>Alignment & Matrix Distribution Controls</DocH2>
            <DocP>
                Grid items can be aligned globally at the container level or overridden individually using three core tracking properties:
            </DocP>
            <DocList
                items={[
                    'justify-items: Aligns child element content blocks horizontally along the inline axis within their assigned grid cells (start, end, center, stretch).',
                    'align-items: Aligns child element content blocks vertically along the block axis within their assigned grid cells.',
                    'place-items: An elegant shorthand syntax that sets both justify-items and align-items in a single line (e.g., place-items: center;).'
                ]}
            />

            <DocH2>Architectural Analysis: Grid vs. Flexbox</DocH2>
            <DocP>
                Choosing between these layout engines comes down to assessing content requirements versus layout structure constraints:
            </DocP>
            <table className="min-w-full divide-y divide-gray-200 border text-xs my-4 bg-white">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 font-bold text-left text-gray-700 border-r">Layout Metric</th>
                        <th className="px-4 py-2 font-bold text-left text-gray-700 border-r">CSS Grid Layout Model</th>
                        <th className="px-4 py-2 font-bold text-left text-gray-700">Flexible Box Model (Flexbox)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-2 font-semibold text-gray-900 border-r bg-gray-50/50">Dimensional Core</td>
                        <td className="px-4 py-2 border-r text-gray-600">**Two-Dimensional**: Orchestrates structural alignments across both columns and rows simultaneously.</td>
                        <td className="px-4 py-2 text-gray-600">**One-Dimensional**: Handles alignment along a single axis layout stream (row OR column).</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 font-semibold text-gray-900 border-r bg-gray-50/50">Design Philosophy</td>
                        <td className="px-4 py-2 border-r text-gray-600">**Structure-First**: Defines a rigid, predetermined layout track matrix before placing child components inside.</td>
                        <td className="px-4 py-2 text-gray-600">**Content-First**: Elements fluidly size and position themselves based on their internal text volumes and content weights.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 font-semibold text-gray-900 border-r bg-gray-50/50">Overlapping Nodes</td>
                        <td className="px-4 py-2 border-r text-gray-600">**Native Support**: Elements can be assigned to identical track lines or areas, stacking cleanly via z-index values.</td>
                        <td className="px-4 py-2 text-gray-600">**Complex**: Requires breaking out of the layout track using absolute coordinates or transform tricks.</td>
                    </tr>
                </tbody>
            </table>

            <DocH2>Production Responsive App Grid Blueprint</DocH2>
            <DocP>
                Below is a production-grade layout architecture sheet demonstrating named area mappings, responsive auto-fit grid matrices, and pixel-perfect element alignments:
            </DocP>

            <DocH3>1. The Master Grid Blueprint Sheet (grid-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION TWO-DIMENSIONAL GRID ENGINE
   ======================================================= */

/* A. DECLARATIVE OVERALL MACRO APPLICATION LAYOUT */
.app-shell-grid-container {
  display: grid;
  /* Configures a 3-tier vertical structure: fixed header, fluid body, and fixed footer */
  grid-template-rows: 60px 1fr 50px;
  /* Configures a 2-column horizontal split: an adaptive sidebar and a flexible workspace */
  grid-template-columns: 240px 1fr;
  
  /* Maps semantic layout tokens directly to the grid coordinates */
  grid-template-areas:
    "top-nav top-nav"
    "side-menu main-panel"
    "side-menu status-bar";
    
  min-height: 100vh;
  gap: 1px; /* Emulates a clean separating line boundary */
  background-color: oklch(0.9 0.01 240);
}

/* B. LAYOUT CHANNELS MAPPED TO GRID AREAS */
.grid-node-header  { grid-area: top-nav; background-color: #ffffff; }
.grid-node-sidebar { grid-area: side-menu; background-color: oklch(0.18 0.02 240); }
.grid-node-footer  { grid-area: status-bar; background-color: #ffffff; }

.grid-node-main {
  grid-area: main-panel;
  background-color: oklch(0.98 0.01 240);
  padding: 32px;
  overflow-y: auto;
}

/* C. RESPONSIVE AUTO-FIT METRIC CARDS MATRIX 
   Bypasses media queries entirely to wrap cards gracefully down the viewport */
.metric-cards-matrix {
  display: grid;
  /* Injects columns that scale from a minimum floor of 280px up to 1 fractional share of free space */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.data-metric-card {
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.02);
  
  /* Centers internal content alignment grids instantly */
  display: grid;
  place-items: stretch;
}`}
            />

            <DocH3>2. Layout Implementation View (GridAppWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './grid-engine.css';

export default function GridAppWorkspace() {
  return (
    <div className="app-shell-grid-container text-xs">
      
      {/* 1. Global Header Area */}
      <header className="grid-node-header flex items-center px-6 border-b justify-between">
        <strong className="text-sm font-bold text-gray-800">Enterprise Orchestration Mesh</strong>
        <span className="p-1 px-2 rounded bg-green-50 text-green-700 font-medium">Cluster Alpha</span>
      </header>

      {/* 2. Collapsible Side Sidebar Channel */}
      <aside className="grid-node-sidebar p-4 text-gray-400 space-y-2">
        <div className="p-2 text-white bg-gray-800 rounded font-semibold">Workspace Nodes</div>
        <div className="p-2 hover:text-white cursor-pointer">Security Policies</div>
        <div className="p-2 hover:text-white cursor-pointer">Telemetry Feeds</div>
      </aside>

      {/* 3. Main Adaptive Dynamic Workspace Core */}
      <main className="grid-node-main">
        <h3 className="text-base font-bold text-gray-900">Telemetry Data Visualizer</h3>
        <p className="text-gray-500">Fluid dashboard cards respond seamlessly to available layout space.</p>

        {/* Responsive sub-grid matrix utilizing auto-fit mechanics */}
        <section className="metric-cards-matrix">
          <div className="data-metric-card">
            <span className="text-gray-400 uppercase tracking-wider font-bold">Node Compute</span>
            <span className="text-xl font-black text-gray-800 mt-2">78.42%</span>
          </div>
          <div className="data-metric-card">
            <span className="text-gray-400 uppercase tracking-wider font-bold">Network Throughput</span>
            <span className="text-xl font-black text-gray-800 mt-2">4.12 Gbps</span>
          </div>
          <div className="data-metric-card">
            <span className="text-gray-400 uppercase tracking-wider font-bold">Disk Operational IOPS</span>
            <span className="text-xl font-black text-gray-800 mt-2">12,481 IOPS</span>
          </div>
        </section>
      </main>

      {/* 4. Global Footer Status Strip */}
      <footer className="grid-node-footer flex items-center px-6 border-t text-gray-400 font-mono text-[10px]">
        System Status Pipeline: STABLE // Sync Target latency: 14ms
      </footer>

    </div>
  );
}`}
            />
        </>
    );
}