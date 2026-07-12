import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSMethodologiesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Enterprise CSS Methodologies & Maintainability Systems</DocTitle>

            <DocP>
                CSS Methodologies define structural paradigms, organization rules, and naming conventions engineered to transform global stylesheets into modular, scalable, and maintainable systems. At scale, un-architected CSS suffer from specificity inflation, complex inheritance chains, and regression loops. Implementing software engineering discipline at the CSS layer guarantees that style systems grow linearly without degrading build speeds or rendering performance.
            </DocP>

            <DocH2>The Core Pillars of Scale</DocH2>

            <DocH3>1. Standardized Naming Conventions</DocH3>
            <DocList
                items={[
                    'Semantic Namespace Isolation: Pre-fixing class selectors with domain context tokens (e.g., c- for components, l- for layouts, u- for utilities, and is-/has- for state configurations) prevents style contamination.',
                    'Decoupling DOM Structure: Selecting components via dedicated style classes rather than nesting element tags (e.g., preferring .c-button to divine chains like div > ul > li > a) strips dependency links, allowing HTML elements to change without breaking styles.'
                ]}
            />

            <DocH3>2. Modular & Scoped CSS Architecture</DocH3>
            <DocList
                items={[
                    'The Single Responsibility Principle (SRP): A component stylesheet should dictate the appearance of exactly one self-contained interface element. Global spacing anchors, layout positions, or macro tracking weights are externalized to wrapper sheets.',
                    'Encapsulation Boundaries: Modern build engines extend modular thinking via CSS Modules or CSS-in-JS. These tools generate unique hash keys for local class selectors at compile-time, creating automated component-level scoping rules.'
                ]}
            />



            <DocH3>3. Long-Term Maintainability Frameworks</DocH3>
            <DocList
                items={[
                    'The Single Source of Truth (SSOT): Hardcoded values are eliminated in favor of centralized design tokens. Standard color tables, font scales, and spacing units are stored inside global custom properties, ensuring that style updates cascade uniformly across the application.',
                    'Predictable Refactoring Loops: Codebases achieve delete-safety when developers can confidently remove a component markup file along with its companion stylesheet, knowing it will not break other visual elements.'
                ]}
            />



            <DocH2>Production Enterprise Scalability Blueprint</DocH2>
            <DocP>
                Below is an advanced implementation demonstrating decoupled architecture, namespace enforcement, token assignment pipelines, and atomic modifier composition:
            </DocP>

            <DocH3>1. The Architecture Matrix Core (methodologies-mesh.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION ENTERPRISE SYSTEM METHODOLOGY WORKSPACE
   ======================================================= */

/* LAYER 1: DESIGN SYSTEM TOKEN ARCHITECTURE (SSOT) */
:root {
  --sys-radius-md: 12px;
  --sys-pad-lg: 24px;
  
  --sys-color-canvas: #ffffff;
  --sys-color-border: oklch(0.9 0.01 240);
  --sys-color-primary: oklch(0.55 0.18 250);
}

/* LAYER 2: SYSTEM COMPONENT DEFINITIONS (c- NAMESPACE)
   Enforces flat specificity paths to isolate components */
.c-telemetry-panel {
  background-color: var(--sys-color-canvas);
  border: 1px solid var(--sys-color-border);
  border-radius: var(--sys-radius-md);
  padding: var(--sys-pad-lg);
  display: flex;
  flex-direction: column;
}

/* Nested elements remain flat via clear naming strategies */
.c-telemetry-panel__heading {
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 12px 0;
}

/* LAYER 3: STATE MACHINE MONITOR HOOKS (is- / has- NAMESPACES) */
.c-telemetry-panel.is-error-state {
  border-color: oklch(0.6 0.18 20);
  background-color: oklch(0.98 0.01 20);
}

/* LAYER 4: IMMUTABLE SINGLE-PURPOSE UTILITIES (u- NAMESPACE)
   Injected only to override minor values without modifying component sheets */
.u-text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.u-margin-top-auto {
  margin-top: auto;
}`}
            />

            <DocH3>2. Layout Implementation View (MethodologiesWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';
import './methodologies-mesh.css';

export default function MethodologiesWorkspaceView() {
  const [hasFault, setHasFault] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs">
      
      {/* Simulation Controller */}
      <button 
        onClick={() => setHasFault(!hasFault)}
        className="bg-gray-900 text-white font-mono px-4 py-2 rounded-md font-bold hover:bg-gray-800 transition-colors"
      >
        Trigger State Shift: {hasFault ? 'RESOLVE' : 'INJECT FAULT'}
      </button>

      {/* Structured component leveraging strict structural separation rules */}
      <article className={\`c-telemetry-panel max-w-sm w-full h-48 shadow-sm \${hasFault ? 'is-error-state' : ''}\`}>
        <h3 className="c-telemetry-panel__heading text-gray-900">
          Network Data Ingestion Router
        </h3>
        
        {/* Immutable utility classes mixed into structural tokens safely */}
        <p className="text-gray-500 u-text-truncate" title="active_payload_frame_hash_stream_id_secure_09x218a4">
          Stream Token: active_payload_frame_hash_stream_id_secure_09x218a4
        </p>
        
        <div className="u-margin-top-auto pt-4 flex justify-between items-center border-t">
          <span className="font-mono text-[10px] text-gray-400">Namespace Tier: Component Shell</span>
          <span className={\`w-2 h-2 rounded-full \${hasFault ? 'bg-red-500' : 'bg-emerald-500'}\`} />
        </div>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}