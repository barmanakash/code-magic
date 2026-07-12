import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSResponsiveDesignDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Responsive Design & Container Architecture</DocTitle>

            <DocP>
                Responsive Web Design is a development methodology that ensures digital interfaces adapt flawlessly across diverse hardware environments—from ultra-compact smartphone screens to massive high-resolution desktop viewports. Instead of maintaining separate, platform-specific codebases, modern responsive design leverages fluid grids, proportional typography layouts, media query engines, and container state monitors to dynamically calculate styling boundaries at runtime.
            </DocP>

            <DocH2>Design Methodologies & Breakpoint Strategies</DocH2>

            <DocH3>1. Mobile-First vs. Desktop-First Cascades</DocH3>
            <DocList
                items={[
                    'Mobile-First Architecture (Recommended): Styles are authored for base mobile viewports first, using min-width media queries to Layer on complexity as layout space scales upward. This approach optimizes performance on mobile devices by avoiding the parsing of heavy desktop styles.',
                    'Desktop-First Architecture: Styles are authored for large desktop displays first, using max-width constraints to progressively scale down, strip columns, or hide large components as viewport spaces contract.'
                ]}
            />



            <DocH3>2. Modern Viewport Boundaries & Range Syntaxes</DocH3>
            <DocList
                items={[
                    'Breakpoints: Explicit device-width milestones where a web layout intentionally shifts its structural column behavior to protect usability. Common industry baselines include 640px (Mobile-to-Tablet), 768px (Tablets), 1024px (Laptops), and 1280px+ (Enterprise Desktops).',
                    'Media Queries Level 4 Range Syntax: A modern, highly legible mathematical comparison syntax that replaces archaic, confusing min-width and max-width keywords with standard clean comparison operators (e.g., @media (width &gt;= 48rem)).'
                ]}
            />

            <DocH2>Fluidity Engines: Typography & Container Queries</DocH2>

            <DocH3>1. Responsive Fluid Typography</DocH3>
            <DocP>
                Relying on hardcoded pixel sizes or abrupt media query jumps causes typography to look unproportional on transitional screen sizes. Modern responsive layouts use mathematical functions like <code>clamp()</code> to smoothly scale font dimensions based on the current viewport width:
            </DocP>
            <blockquote>
                <code>font-size: clamp(1rem, 2.5vw + 0.5rem, 2.25rem);</code>
            </blockquote>

            <DocH3>2. Container Queries (The Component-Driven Era)</DocH3>
            <DocP>
                While traditional media queries look globally at the browser's overall viewport width, **Container Queries** monitor the precise physical dimensions of an item's immediate parent element. This enables components to adapt their internal layout based on where they are placed within an application, regardless of screen size.
            </DocP>



            <DocH2>Production Responsive Workspace Blueprint</DocH2>
            <DocP>
                Below is a production-grade application sheet demonstrating Mobile-First layout grids, clamp-based fluid typography scaling, Media Queries Level 4 range syntaxes, and Container Query configurations:
            </DocP>

            <DocH3>1. The Responsive Architecture Stylesheet (responsive-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION RESPONSIVE & CONTAINER QUERIES ENGINE
   ======================================================= */

/* A. FLUID TYPOGRAPHY RESOLUTION ROOT */
.responsive-fluid-title {
  /* Min floor: 1.5rem, Fluid ideal growth pace: 4vw, Max ceiling: 2.75rem */
  font-size: clamp(1.5rem, 4vw + 0.5rem, 2.75rem);
  font-weight: 800;
  color: oklch(0.2 0.02 240);
  line-height: 1.15;
}

/* B. MOBILE-FIRST FLUID LAYOUT GRID MATRIX */
.adaptive-workspace-grid {
  display: grid;
  /* Baseline: Single full-width track column for mobile views */
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
  padding: 16px;
}

/* MODERN MEDIA QUERIES LEVEL 4 RANGE SYNTAX
   Activates dual column layouts on Tablet viewports */
@media (width >= 48rem) { /* Equivalent to min-width: 768px */
  .adaptive-workspace-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 24px;
  }
}

/* Activates a 3-column distribution rule on desktop screens */
@media (width >= 64rem) { /* Equivalent to min-width: 1024px */
  .adaptive-workspace-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* C. COMPONENT-DRIVEN CONTAINER QUERIES SETUP */
.card-container-host {
  /* Registers this element block as a container query context monitor */
  container-type: inline-size;
  container-name: dynamicCardContext;
  width: 100%;
}

/* DEFAULT ELEMENT CARD STYLING (MOBILE / NARROW CONTAINER BASES) */
.adaptive-profile-card {
  display: flex;
  flex-direction: column; /* Vertical layout on compact viewports */
  gap: 12px;
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 16px;
}

/* TARGET CONTAINER QUERY OVERRIDE TRACKS
   Fires instantly when the parent container expands past 400px, 
   even if the viewport itself remains unchanged! */
@container dynamicCardContext (min-width: 400px) {
  .adaptive-profile-card {
    flex-direction: row; /* Flips card to horizontal layout inline flow */
    align-items: center;
    padding: 24px;
    background-color: oklch(0.98 0.005 240);
  }
  
  .adaptive-profile-card .card-avatar-node {
    width: 64px;
    height: 64px;
  }
}`}
            />

            <DocH3>2. Layout Implementation View (ResponsiveWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './responsive-engine.css';

export default function ResponsiveWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      
      {/* Fluid Header Section */}
      <header className="max-w-6xl mx-auto mb-8">
        <h2 className="responsive-fluid-title">Fluid Infrastructure Matrix</h2>
        <p className="text-xs text-gray-500 mt-1">Resize the viewport window to observe adaptive grid scaling and container query context switches.</p>
      </header>

      {/* Mobile-first multi-column layout grid */}
      <main className="adaptive-workspace-grid max-w-6xl mx-auto">
        
        {/* Component Card 1 wrapped inside a Container Host */}
        <div className="card-container-host">
          <div className="adaptive-profile-card shadow-sm">
            <div className="card-avatar-node w-12 h-12 bg-blue-600 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-sm">
              N1
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Primary Core Telemetry</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Adapts dynamically based on parent component element widths.</p>
            </div>
          </div>
        </div>

        {/* Component Card 2 */}
        <div className="card-container-host">
          <div className="adaptive-profile-card shadow-sm">
            <div className="card-avatar-node w-12 h-12 bg-emerald-600 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-sm">
              N2
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Secondary Sync Pipeline</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Leverages modern container layouts to maintain robust component rendering structures.</p>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}`}
            />
        </>
    );
}