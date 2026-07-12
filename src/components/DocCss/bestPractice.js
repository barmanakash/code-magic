import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSBestPracticesDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">CSS Production Best Practices & System Governance</DocTitle>
      
      <DocP>
        CSS Best Practices establish a standardized code quality blueprint for writing clean, modular, high-performance, and maintainable style sheets. Left unmanaged, CSS naturally trends toward maximum entropy due to its global namespace and append-only nature. Enforcing strict organization rules, modular class reuse, logical directory structures, and performant selectors guarantees that a design system can scale across large teams without turning into tech debt.
      </DocP>

      <DocH2>Architectural Style & Clean Code Governance</DocH2>
      
      <DocH3>1. Component Reusability & Single-Purpose Modifiers</DocH3>
      <DocList
        items={[
          'The Open-Closed Principle: Core component classes should be locked down for structural behaviors, while modifications (like color switches or theme variants) are applied by appending explicit, flat modifier tokens (e.g., .c-button combined with .c-button--danger).',
          'Avoiding Selector Coupling: Never mirror specific HTML tree paths within selectors (e.g., div.sidebar > ul > li > a). Doing so locks the stylesheet to a rigid DOM structure, making markup refactors impossible without breaking styles.'
        ]}
      />

      <DocH3>2. Predictable Declaration Sorting Order</DocH3>
      <DocP>
        To keep stylesheets scannable for developers, style declarations should follow a consistent, logical layout structure inside selector blocks rather than an arbitrary order:
      </DocP>
      <DocList
        items={[
          '1. Positioning Metrics (position, top, z-index, display, float)',
          '2. Box Model Properties (width, height, padding, margin, border)',
          '3. Typography & Text Control (font-size, line-height, text-align, color)',
          '4. Visual Accents & Overlays (background, box-shadow, opacity)',
          '5. Motion & Interaction Hooks (transition, transform, will-change)'
        ]}
      />

      <DocH2>Directory Scoping & File System Topography</DocH2>
      <DocP>
        A scalable, clean codebase relies on an organized directory structure. Adopting a clear modular layout (inspired by patterns like ITCSS or SMACSS) ensures every global variable, component sheet, and utility class has a predictable, defined home:
      </DocP>

      <CodeBlock
        language="text"
        code={`styles/
├── 01-abstracts/          # Global Design System Foundations (No rendered CSS output)
│   ├── _tokens.css        # Centralized Core Design Tokens / Custom Properties
│   └── _mixins.css        # Shared Global Preprocessor Mixins / Functions
│
├── 02-base/               # Element Level Normalization Defaults
│   ├── _reset.css         # Reset / Universal Box-Sizing Target Overrides
│   └── _typography.css    # Global Font Scopes and Baseline Body Scales
│
├── 03-layout/             # Macro Application Layout Structural Frames
│   ├── _grid.css          # Global Responsive Grid Wireframes
│   └── _sidebar.css       # Fixed Global Navigation App Wrappers
│
├── 04-components/         # Self-Contained UI Component Envelopes (SRP Rules)
│   ├── _button.css        # Scoped Button Presentation States
│   ├── _card.css          # Isolated Card Telemetry Shells
│   └── _modal.css         # Layered Overlay Interaction Blocks
│
├── 05-utilities/          # Immutable High-Priority Performance Overrides
│   ├── _spacing.css       # Margin / Padding Absolute Adjuster Tokens
│   └── _visibility.css    # Screen-Reader (.sr-only) / Layout Hiders
│
└── main.css               # Central Processing Entry Ingestion Point`}
      />

      <DocH2>Production-Grade System Governance Blueprint</DocH2>
      <DocP>
        Below is a production-tier component sheet demonstrating clean code organization, sorted layout attributes, strict class naming semantics, self-documenting comment anchors, and optimized selector pipelines:
      </DocP>

      <DocH3>1. The Standardized Core Components Sheet (_card.css)</DocH3>
      <CodeBlock
        language="css"
        code={`/* ==========================================================================
   COMPONENT: TELEMETRY SYSTEM BOX 
   ========================================================================== */

/**
 * 1. Block Shell Container
 * Enforces strict single-responsibility layout isolation bounds.
 */
.c-dashboard-card {
  /* Positioning & Display */
  position: relative;
  display: flex;
  flex-direction: column;

  /* Box Model Metrics */
  width: 100%;
  max-width: 340px;
  padding: 24px;
  border: 1px solid var(--sys-color-border, #e2e8f0);
  border-radius: 12px;

  /* Visual Presentation */
  background-color: var(--sys-color-canvas, #ffffff);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  /* Performance & Motion optimization */
  will-change: transform, border-color;
  transition: 
    border-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Interactive hover enhancement pipeline */
.c-dashboard-card:hover {
  border-color: var(--sys-color-primary, #0284c7);
  transform: translateY(-2px);
}

/**
 * 2. Nested Child Element Nodes
 * Maintained completely flat to keep specificity minimal.
 */
.c-dashboard-card__title {
  /* Box Model */
  margin: 0 0 8px 0;

  /* Typography */
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--sys-color-text-main, #0f172a);
}

.c-dashboard-card__description {
  /* Box Model */
  margin: 0 0 16px 0;

  /* Typography */
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--sys-color-text-muted, #64748b);
}

/**
 * 3. Conditional Modification Variants (-- Flag System)
 * Appended alongside base class targets safely to alter the theme visual profiles.
 */
.c-dashboard-card--highlighted {
  border-left: 4px solid var(--sys-color-primary, #0284c7);
  background-color: oklch(0.99 0.005 240);
}`}
      />

      <DocH3>2. Layout Implementation View (GovernanceWorkspaceView.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React from 'react';
import './_card.css';

export default function GovernanceWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs">
      
      <header className="text-center max-w-xs">
        <h3 className="font-bold text-gray-900 text-sm">System Governance Matrix</h3>
        <p className="text-gray-500 mt-1">
          This workspace enforces clean code parameters, deterministic layout sorting rules, and decoupled component classes.
        </p>
      </header>

      {/* Target Module: Composed by pairing clean structural blocks with modifier tokens */}
      <article className="c-dashboard-card c-dashboard-card--highlighted">
        <h4 className="c-dashboard-card__title">
          Clean Code Infrastructure
        </h4>
        
        <p className="c-dashboard-card__description">
          This card demonstrates production-grade CSS best practices: flat selector specificity trees, self-documenting comment structures, organized declaration blocks, and modular class reuse.
        </p>

        <div className="mt-auto pt-3 border-t flex justify-between items-center text-[10px] font-mono text-gray-400">
          <span>Namespace: c- component</span>
          <span className="text-blue-600 font-bold">MAINTAINABLE</span>
        </div>
      </article>

    </div>
  );
}`}
      />
    </>
  );
}