import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSCommentsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Comments & Documentation Architecture</DocTitle>

            <DocP>
                Comments are essential tools for maintaining large-scale, enterprise stylesheets. Because CSS lacks native compiler namespaces or visibility controls, clear inline documentation ensures that design choices, complex layout dependencies, and browser-specific fixes remain easily understandable for development teams.
            </DocP>

            <DocH2>Comment Taxonomy & Structures</DocH2>
            <DocList
                items={[
                    'Syntax Boundaries: CSS supports block comment syntax initialized via opening forward-slash asterisk (/*) symbols and terminated strictly by closing asterisk forward-slash (*/) sequences. Unlike JavaScript, CSS has no native single-line comment double-slash (//) directive; using double-slashes will cause the parser to treat the entire subsequent rule as a syntax error and discard it.',
                    'Single-Line Comments: Used for concise inline descriptions of specific declaration overrides, browser hacks, or isolated layout constraints.',
                    'Multi-Line Comments: Designed for high-level block documentation, containing architectural explanations, parameter summaries, or multi-developer tracking notes.',
                    'Section Dividers (TOC): Structural code breaks that split massive monolithic stylesheets into scannable, modular sections, often mirroring Table of Contents mappings.'
                ]}
            />

            <DocH2>Architectural Best Practices</DocH2>
            <DocList
                items={[
                    'Document Intent, Not Output: Avoid writing superficial descriptions like "sets color to red". Instead, explain the architectural reason *why* the rule exists (e.g., "Overrides default alert tokens to comply with corporate branding guidelines").',
                    'Flag Technical Debt: Clearly mark temporary configurations, edge-case browser fixes, or technical workarounds using explicit tracking keywords like TODO:, FIXME:, or HACK:.',
                    'Automate Production Stripping: Maintain comprehensive documentation during development, but configure build tools (like Vite, PostCSS, or Lightning CSS) to strip out all comments during production compilation. This keeps asset sizes small and optimizes delivery speeds.'
                ]}
            />

            <DocH2>Production-Grade Documentation Blueprint</DocH2>
            <DocP>
                Below is a production-ready stylesheet illustrating structured section dividers, standardized header documentation blocks, inline variable trackers, and safe debugging flags:
            </DocP>

            <DocH3>1. The Enterprise Documented Sheet (telemetry-system.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* ==========================================================================
   SECTION: TELEMETRY CORE CONTROL INTERFACE
   Module: Dashboard Operational Panels
   Dependencies: design-tokens.css, layout-grid.css
   ========================================================================== */

/**
 * Enterprise Telemetry Card Wrapper
 * Encapsulates dynamic hardware monitoring grid readouts.
 *
 * @section components
 * @component .telemetry-card
 */
.telemetry-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: oklch(0.2 0.02 240); /* Dark mode high-contrast background */
  border: 1px solid oklch(0.3 0.02 240);
  border-radius: 8px;

  /* HACK: Safely forces hardware GPU acceleration to eliminate micro-stuttering 
     during intensive chart rendering routines across Safari (WebKit) runtimes */
  will-change: transform; 
  transform: translateZ(0); 
}

/* --------------------------------------------------------------------------
   CHILD METRIC PRIMITIVES
   -------------------------------------------------------------------------- */

.telemetry-card .metric-readout {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  
  /* FIXME: Temporary hardcoded value fallback until dynamic OKLCH color token formulas 
     are fully wired through the core theme provider system */
  color: #10b981; 
}

.telemetry-card .status-indicator {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  /* TODO: Integrate responsive container queries (@container) once design system 
     breakpoints are finalized for mobile viewport layouts */
  margin-top: 8px;
}`}
            />

            <DocH3>2. Layout Implementation (TelemetryView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './telemetry-system.css';

export default function TelemetryView() {
  return (
    <div className="max-w-md mx-auto mt-10">
      {/* The component layout maps directly to the documented classes.
        Engineers can quickly cross-reference any design rule in the CSS file.
      */}
      <section className="telemetry-card">
        <span className="text-xs text-gray-400 font-semibold mb-1">CPU Cluster Load</span>
        <div className="metric-readout">45.82%</div>
        <div className="status-indicator text-emerald-400">System Stable</div>
      </section>
    </div>
  );
}`}
            />
        </>
    );
}