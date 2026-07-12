import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSFlexboxDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Flexible Box Layout Engine (Flexbox)</DocTitle>

            <DocP>
                The Flexible Box Layout Model (Flexbox) is a one-dimensional layout engine engineered to distribute space and align items along a single axis (either horizontally as a row or vertically as a column). It dynamically calculates item dimensions to fit inside fluid container viewports, eliminating layout break hazards caused by floats or absolute spacing traps.
            </DocP>

            <DocH2>The Axis Control Matrix</DocH2>
            <DocP>
                Flexbox positioning operates strictly on a dual-axis structural plane determined by the active <code>flex-direction</code> value:
            </DocP>
            <DocList
                items={[
                    'Main Axis: The primary path along which flex items are laid out sequentially. If flex-direction is set to row, the main axis runs horizontally from left to right. If it is set to column, it runs vertically from top to bottom.',
                    'Cross Axis: The axis running perpendicular to the main axis plane. For a row configuration, it tracks vertically; for a column setup, it tracks horizontally.'
                ]}
            />



            <DocH2>Container Configuration Taxonomy Matrix</DocH2>

            <DocH3>1. Directional Vectors & Wrapped Lines</DocH3>
            <DocList
                items={[
                    'display: flex: Transforming a block element into a flex container activates the flexible layout engine for its immediate child nodes.',
                    'flex-direction: Defines the orientation of the main axis. Values include row (default LTR horizontal), row-reverse (RTL horizontal), column (vertical stacking), and column-reverse.',
                    'flex-wrap: Dictates whether items must stack onto multiple lines when container boundaries overflow. Values include nowrap (forces all children onto a single line, risking layout breaking overflows), wrap (spills overflow elements onto subsequent rows or columns), and wrap-reverse.',
                    'gap: Sets a unified structural spacing distance between adjacent flex items, preventing margin collapse bugs.'
                ]}
            />

            <DocH3>2. Space Distribution & Axis Alignment</DocH3>
            <DocList
                items={[
                    'justify-content: Distributes unallocated free space and aligns flex items along the main axis plane (flex-start, flex-end, center, space-between, space-around, space-evenly).',
                    'align-items: Aligns flex items uniformly along the cross axis across a single row tracking line (stretch, flex-start, flex-end, center, baseline).',
                    'align-content: Aligns wrapping structural track rows within the container along the cross axis when extra space is available. This property has no effect on single-line flex setups.'
                ]}
            />

            <DocH2>Flex Item Dynamics (Children Level properties)</DocH2>
            <DocP>
                Flex child elements adjust their individual width or height boundaries along the active main axis using three core parameters:
            </DocP>
            <DocList
                items={[
                    'flex-grow: An integer growth factor enabling items to claim a proportional share of available free space inside the container (default is 0; stays rigid).',
                    'flex-shrink: A proportional shrinkage value that determines how an item scales down when container space is restricted to prevent overflow issues (default is 1; scales down naturally).',
                    'flex-basis: The initial base dimension of a flex item along the main axis before any growth or shrinkage calculations occur (default is auto).',
                    'align-self: Allows a single flex child to override its parent container\'s align-items setting, positioning itself uniquely along the cross axis.',
                    'order: Alters the visual rendering sequence of a child element without modifying its underlying structural position within the DOM tree (default is 0).'
                ]}
            />

            <DocH2>Production-Grade Responsive Dashboard Blueprint</DocH2>
            <DocP>
                Below is a production-ready application layout sheet showing standard flex navigation headers, responsive wrap modules, variable card weight distributions, and targeted item overrides:
            </DocP>

            <DocH3>1. The Flex Engine Module Sheet (flexbox-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION FLEXBOX LAYOUT ARCHITECTURE
   ======================================================= */

/* A. APPLICATION FLEX ROW HEADER CONTROLS */
.flex-header-wrapper {
  display: flex;
  justify-content: space-between; /* Pushes content groups to opposite ends */
  align-items: center; /* Aligns items perfectly along the horizontal cross axis */
  
  padding: 16px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid oklch(0.9 0.01 240);
}

.flex-header-nav-links {
  display: flex;
  gap: 16px; /* Injects a clean 16px gap between navigation hooks */
  align-items: center;
}

/* B. RESPONSIVE DATA DEPLOYMENT MATRIX GRID */
.dashboard-flex-grid {
  display: flex;
  flex-direction: row; /* Runs main axis left-to-right */
  flex-wrap: wrap; /* Wraps overflowing rows cleanly onto new lines on mobile */
  gap: 20px;
  padding: 24px;
}

/* C. ADAPTIVE FLEX CHILD PRIMITIVES */
.dashboard-flex-grid .metric-card-node {
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.03);

  /* --- FLEX MACRO EXPANSION SHORTHAND ---
     flex-grow: 1  -> Card scales up to occupy available free space tracks
     flex-shrink: 1 -> Card scales down safely to avoid container blowouts
     flex-basis: 280px -> Establishes an initial baseline width threshold before scaling
  */
  flex: 1 1 280px; 
}

/* D. HIGH-WEIGHT DOMINANT CARD VARIANT */
.dashboard-flex-grid .metric-card-node.is-dominant {
  /* Claims double the free space shares compared to standard sibling cards */
  flex-grow: 2; 
  border-color: oklch(0.55 0.18 250);
}

/* E. INDEPENDENT CROSS-AXIS SELF ALIGN OVERRIDE */
.dashboard-flex-grid .system-alert-badge {
  /* Pulls out of parent centering to align with the bottom edge */
  align-self: flex-end; 
  
  padding: 6px 12px;
  background-color: oklch(0.65 0.15 20);
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 6px;
  text-transform: uppercase;
}`}
            />

            <DocH3>2. Layout Implementation View (FlexboxDashboardWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './flexbox-engine.css';

export default function FlexboxDashboardWorkspace() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Flex Header Element */}
      <header className="flex-header-wrapper">
        <div className="text-sm font-bold text-gray-900">Cluster Hub Matrix</div>
        <nav className="flex-header-nav-links text-xs font-semibold text-gray-600">
          <a href="#nodes" className="hover:text-blue-600">Active Nodes</a>
          <a href="#logs" className="hover:text-blue-600">Log Streams</a>
          <span className="system-alert-badge">Status Stable</span>
        </nav>
      </header>

      {/* 2. Responsive Wrapped Layout Grid */}
      <main className="dashboard-flex-grid">
        
        <article className="metric-card-node">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">Core Stream 01</h4>
          <p className="text-xl font-extrabold text-gray-800 mt-2 mb-1">942.82 Mb/s</p>
          <p className="text-xs text-gray-500">Calculated base allocation traffic.</p>
        </article>

        <article className="metric-card-node is-dominant">
          <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wide">Dominant Analyzer Stream 02</h4>
          <p className="text-xl font-extrabold text-gray-800 mt-2 mb-1">2,481.90 Requests/s</p>
          <p className="text-xs text-gray-500">This higher-priority tracker naturally scales to claim double the unallocated layout width space.</p>
        </article>

        <article className="metric-card-node">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">Storage Arrays</h4>
          <p className="text-xl font-extrabold text-gray-800 mt-2 mb-1">14.2 TB Free</p>
          <p className="text-xs text-gray-500">Distributed multi-region node blocks.</p>
        </article>

      </main>

    </div>
  );
}`}
            />
        </>
    );
}