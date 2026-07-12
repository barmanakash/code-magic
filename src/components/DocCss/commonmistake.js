import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSCommonMistakesDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">Anti-Patterns, Pitfalls & Layout Resolution Engines</DocTitle>
      
      <DocP>
        CSS is deceptively simple to write but notoriously difficult to scale. Because the language relies on a global scope and implicit layout algorithms, subtle architecture mistakes—such as specificity inflation, unmanaged constraints, or rigid dimensions—can cause far-reaching layout regressions. Identifying and correcting these common anti-patterns is essential to building robust, predictable stylesheets.
      </DocP>

      <DocH2>The Specificity & Nesting Traps</DocH2>
      
      <DocH3>1. Specificity Wars & The <code>!important</code> Escape Hatch</DocH3>
      <DocList
        items={[
          'The Mistake: Combining deep, high-specificity element selectors (e.g., body #app .main-content ul li a) makes overriding styles down the line nearly impossible without resorting to the !important flag.',
          'The Anti-Pattern: Using !important bypasses the standard rules of the cascade. While it offers a quick fix for a broken style, it leads to a chain reaction where subsequent style tweaks require even more !important flags to take effect, making the code unmaintainable.',
          'The Fix: Keep specificity completely flat by styling elements using single component classes (e.g., .c-nav-link). Use native CSS Cascade Layers (@layer) to organize third-party overrides cleanly.'
        ]}
      />

      

      <DocH3>2. Deep Nesting Code Chains</DocH3>
      <DocList
        items={[
          'The Mistake: Preprocessors (like SCSS) and native browser nesting make it easy to mimic DOM tree nesting structures inside stylesheets (nesting four or five levels deep).',
          'The Cost: This outputs heavily coupled selectors that increase overall file size, slow down browser engine parsing speeds, and break completely if the HTML structural layout is modified.',
          'The Fix: Adhere to a strict "two-levels-deep" maximum limit for nesting, using it primarily to target pseudo-classes (e.g., :hover, :focus) or explicit component modifier blocks.'
        ]}
      />

      <DocH2>Geometric & Operational Constraints</DocH2>
      
      <DocH3>1. The Rigid Fixed-Width Illusion</DocH3>
      <DocList
        items={[
          'The Mistake: Hardcoding explicit horizontal boundaries on layout structures (e.g., width: 400px;) forces elements to maintain a strict size regardless of viewport changes.',
          'The Cost: This breaks responsive flows, causing content to clip or trigger ugly horizontal scrollbars on smaller smartphone screens.',
          'The Fix: Embrace fluid layout systems. Use max-width properties alongside flexible percentage allocations (e.g., width: 100%; max-width: 400px;) or fluid layout options like CSS Grid and Flexbox.'
        ]}
      />

      

      <DocH3>2. Missing Browser Box Resets</DocH3>
      <DocList
        items={[
          'The Mistake: Neglecting to normalize default browser stylesheets allows variations in margins, paddings, and sizing behaviors between browsers (like Chrome, Safari, and Firefox) to skew layout designs.',
          'The Cost: The biggest culprit is skipping the box-sizing reset. By default, browsers use content-box, which adds an element\'s border and padding on top of its defined width, making layout math fragile.',
          'The Fix: Apply a universal box reset to the top of the project stylesheet to force predictable size calculations across all elements:'
        ]}
      />
      <blockquote>
        <code>*, ::before, ::after {'{'} box-sizing: border-box; margin: 0; padding: 0; {'}'}</code>
      </blockquote>

      <DocH2>Production Anti-Pattern Diagnostic & Refactoring Blueprint</DocH2>
      <DocP>
        Below is a diagnostic layout highlighting legacy, fragile anti-patterns alongside their clean, refactored, production-ready alternatives:
      </DocP>

      <DocH3>1. The Defective vs. Refactored Style Sheets (mistakes-diff.css)</DocH3>
      <CodeBlock
        language="css"
        code={`/* =======================================================
   ANTI-PATTERN EXAMPLE: FRAGILE & HIGHLY SPECIFIC
   ======================================================= */

/* BUG 1: Deep selector nesting and hardcoded fixed widths */
body #workspace-root .legacy-card-wrapper div.data-box {
  width: 380px; /* Breaks layout fluidity on small viewports */
  padding: 16px;
  background-color: #ffffff;
}

/* BUG 2: Specificity trap forcing the use of !important */
body #workspace-root .legacy-card-wrapper div.data-box h3.title-node {
  font-size: 18px !important; /* Blocked from clean modifier overrides */
  color: #0f172a;
}


/* =======================================================
   PRODUCTION SOLUTION: CLEAN, FLUID, & DECOUPLED
   ======================================================= */

/* REFACTOR 1: Fluid architecture utilizing flat component namespaces */
.c-telemetry-box {
  width: 100%;
  max-width: 380px; /* Adapts safely to smaller viewports */
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 8px;
}

/* REFACTOR 2: Flat, override-safe element configurations */
.c-telemetry-box__title {
  font-size: 1.125rem; /* Flexible typography tracking rem floors */
  color: oklch(0.2 0.02 240);
  margin: 0 0 8px 0;
}

/* Clean modifier variation without !important side effects */
.c-telemetry-box__title--accented {
  color: oklch(0.55 0.18 250);
}`}
      />

      <DocH3>2. Layout Implementation View (MistakesWorkspaceView.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React from 'react';
import './mistakes-diff.css';

export default function MistakesWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-8 text-xs">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Refactoring Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Compare a fragile, deeply nested structure against a clean, fluid, class-driven alternative.
        </p>
      </header>

      <div className="w-full max-w-md space-y-6">
        
        {/* Anti-Pattern Context Display */}
        <div className="opacity-60 pointer-events-none">
          <span className="font-mono text-[10px] text-red-500 font-bold block mb-1">✕ Fragile Anti-Pattern</span>
          <div id="workspace-root">
            <div className="legacy-card-wrapper">
              <div className="data-box border shadow-sm rounded-lg">
                <h3 className="title-node">Fixed Width Node</h3>
                <p className="text-gray-400">Deep layout paths and fixed px settings break responsiveness and complicate style overrides.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Optimized Solution Display */}
        <div>
          <span className="font-mono text-[10px] text-emerald-600 font-bold block mb-1">✓ Refactored Production Model</span>
          <article className="c-telemetry-box shadow-sm">
            <h3 className="c-telemetry-box__title c-telemetry-box__title--accented">
              Fluid Telemetry Module
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Using a single-class selector hierarchy, max-width bounds, and relative units guarantees cross-browser flexibility and delete-safety.
            </p>
          </article>
        </div>

      </div>

    </div>
  );
}`}
      />
    </>
  );
}