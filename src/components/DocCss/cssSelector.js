import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSSelectorsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Selectors & Structural Matching Engine</DocTitle>

            <DocP>
                Selectors form the query matching layer of the CSS engine. By traversing the Document Object Model (DOM) tree, selectors bind style declarations to exact structural patterns, attribute states, user interactions, or complex relational context trees.
            </DocP>

            <DocH2>Selector Taxonomy & Functional Modules</DocH2>

            <DocH3>1. Foundational Primitives & Combinators</DocH3>
            <DocList
                items={[
                    'Universal Selector (*): Matches every active node within the document. Commonly used for low-level baseline layout resets.',
                    'Element Type Selector (e.g., h1): Matches nodes matching the explicit HTML tag namespace.',
                    'Class (.) & ID (#) Selectors: Class selectors query multi-use layout hooks ($0,0,1,0$ specificity). ID selectors target a single, unique DOM token constraint ($0,1,0,0$ specificity).',
                    'Grouping Combinator (,): Combines multiple separate selectors to apply a shared declaration block, reducing code repetition.',
                    'Descendant Combinator (space): Targets nodes nested anywhere deep inside a specified ancestor container.',
                    'Child Combinator (&gt;): Restricts matching exclusively to direct, first-level children of the parent node.',
                    'Adjacent Sibling Combinator (+): Targets the very next sibling element immediately following the initial node at the same hierarchical level.',
                    'General Sibling Combinator (~): Matches any subsequent sibling elements matching the target selector within the same parent container.'
                ]}
            />



            <DocH3>2. Attribute Constraints</DocH3>
            <DocList
                items={[
                    'Exact Match [attr="value"]: Targets nodes with an attribute string exactly matching the specified value.',
                    'Substring Matching Operators: Includes prefix match `[attr^="val"]` (starts with), suffix match `[attr$="val"]` (ends with), and substring match `[attr*="val"]` (contains anywhere within the attribute string).'
                ]}
            />

            <DocH3>3. Advanced Functional Pseudo-Classes</DocH3>
            <DocList
                items={[
                    'User Action States: `:hover` (pointer entry), `:focus` (keyboard/tab capture), and `:active` (mouse click/engagement threshold).',
                    'Structural Nth Filters: `:first-child`, `:last-child`, `:nth-child(n)` (filters by strict index position across all siblings), and `:nth-of-type(n)` (filters index positions strictly within matching tag names).',
                    'Logical Matches: `:not()` (negates selectors), `:is()` (groups targets and assumes the specificity of its highest weight parameter), and `:where()` (groups targets but forces the entire selector block\'s specificity down to absolute zero ($0,0,0,0$)).',
                    'The Relational Parent Engine (`:has()`): A game-changing selector that checks child configurations to style the parent node. For example, `.card:has(img)` styles the `.card` container *only* if it contains an image.'
                ]}
            />

            <DocH3>4. Pseudo-Elements (Generated Material & Structural Fragments)</DocH3>
            <DocList
                items={[
                    'Generated Content (`::before` / `::after`): Injects virtual styling nodes into the DOM directly inside the target element. Requires a defined `content` property string to render.',
                    'Typography & Interaction Primitives: `::first-letter` and `::first-line` target micro-typographic layouts, while `::selection` styles text highlighted by the user.',
                    'UI Fragment Injectors: `::placeholder` styles input hint overlays, and `::marker` customizes the bullet points or numbers of list items.'
                ]}
            />

            <DocH2>Production Selectors Blueprint</DocH2>
            <DocP>
                Below is an advanced stylesheet illustrating structured pseudo-classes, the functional relational parent engine (`:has()`), zero-specificity groupings, and pseudo-element content injections:
            </DocP>

            <DocH3>1. The Advanced Selector Module (selectors.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   ADVANCED SELECTOR PIPELINE ENGINE
   ======================================================= */

/* A. ZERO-SPECIFICITY OVERLAY RESET (:where)
   Groups system layouts while keeping specificity at (0,0,0,0) for easy overriding */
:where(input, button, textarea) {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}

/* B. RELATIONAL PARENT ENGINE CONTEXT (:has)
   Applies an amber accent border to the control layout container ONLY if 
   it contains an active, disabled form input element node */
.control-layout:has(input:disabled) {
  border-color: oklch(0.7 0.15 50);
  background-color: oklch(0.98 0.01 50);
}

/* C. CHILD COMBINATOR & SUBSTRING ATTRIBUTE INGESTION
   Targets anchor nodes that are direct children of the nav layer, 
   specifically tracking secure HTTPS external links */
.navigation-bar > a[href^="https://"] {
  color: oklch(0.5 0.2 240);
  text-decoration: none;

  /* Injects a security icon marker via pseudo-element generation */
  &::before {
    content: "🔒 ";
    font-size: 0.85em;
  }
}

/* D. STRUCTURAL CONTROLS & DYNAMIC INTERACTION STATES
   Applies styling to rows inside the data grid container, filtering for odd indexes 
   while ignoring lines flagged with an explicit active configuration */
.data-grid-row:nth-child(odd):not(.is-active) {
  background-color: oklch(0.97 0.01 240);
}

.data-grid-row {
  position: relative;
  transition: background-color 0.2s ease;

  /* Highlights target tracks seamlessly on cursor engagement */
  &:hover {
    background-color: oklch(0.93 0.02 240);
  }

  /* Customizes highlighted text selections within rows */
  &::selection {
    background-color: oklch(0.85 0.15 200);
    color: oklch(0.2 0.02 240);
  }
}

/* E. UI INTERACTION INPUT TARGETS
   Styles text placeholders when their parent form fields gain input focus */
.form-field-input:focus::placeholder {
  color: oklch(0.7 0.02 240);
  transform: translateX(4px);
  transition: transform 0.2s ease;
}`}
            />

            <DocH3>2. Layout Implementation (SelectorsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './selectors.css';

export default function SelectorsWorkspace() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      
      {/* 1. Relational Parent Test Block */}
      <fieldset className="control-layout p-4 border rounded-xl transition-all">
        <legend className="text-xs font-bold text-gray-400 px-1">Control Hub</legend>
        <label className="block text-xs font-medium text-gray-700 mb-1">System Node Channel</label>
        <input 
          type="text" 
          disabled 
          className="form-field-input w-full border p-2 text-xs rounded bg-gray-100" 
          placeholder="Channel locked (Disabled)"
        />
      </fieldset>

      {/* 2. Combinator & Attribute Nav Track */}
      <nav className="navigation-bar bg-white p-3 border rounded-lg flex gap-4 text-xs font-medium">
        <a href="https://api.internal.network">Secure Console Portal</a>
        <a href="http://unsecure.local" className="text-gray-400">Local Debug</a>
      </nav>

      {/* 3. Structural Row Grid */}
      <div className="border rounded-lg overflow-hidden bg-white divide-y">
        <div className="data-grid-row p-3 text-xs flex justify-between">
          <span>Row Index #1 (Targeted by odd selector rules)</span>
          <strong>Active</strong>
        </div>
        <div className="data-grid-row p-3 text-xs flex justify-between">
          <span>Row Index #2 (Skipped by odd formulas)</span>
          <strong>Standby</strong>
        </div>
        <div className="data-grid-row p-3 text-xs flex justify-between">
          <span>Row Index #3 (Highlighted text selection pool)</span>
          <strong>Active</strong>
        </div>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}