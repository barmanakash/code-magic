import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSListsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Lists & Marker Customization Systems</DocTitle>

            <DocP>
                The CSS list rendering engine controls the layout, structural markers, and box indentation properties of ordered (`&lt;ol&gt;`) and unordered (`&lt;ul&gt;`) list elements. Beyond standard bullet adjustments, mastering list markers requires an understanding of text-flow positions, vector marker scaling, and CSS Counters for procedural multi-level document structures.
            </DocP>

            <DocH2>List Property Taxonomy Matrix</DocH2>

            <DocH3>1. Core Marker & Position Controls</DocH3>
            <DocList
                items={[
                    'list-style Shorthand: Combines list-style-type, list-style-position, and list-style-image into a single declaration line (e.g., list-style: square inside;).',
                    'list-style-type: Standardizes the glyph or numbering format used for the list item marker. Supports standard shapes (disc, circle, square), numeric systems (decimal, decimal-leading-zero), and alphabetical/regional styles (lower-alpha, upper-roman, georgian, devanagari). Passing none completely strips default user-agent symbols.',
                    'list-style-image: Replaces standard bullets with custom external raster images or vector graphics via a url() functional wrapper. However, it offers minimal vertical alignment or scaling controls, making it less preferred in production compared to modern alternatives.',
                    'list-style-position: Controls whether the marker sit inside or outside the list item\'s bounding block container.'
                ]}
            />



            <DocH3>2. Marker Positioning Models Compared</DocH3>
            <DocList
                items={[
                    'outside (Default): The marker sits completely to the left of the list item block frame (within the element\'s padding zone). Wrapped multi-line text lines align cleanly underneath each other, keeping the marker isolated on the side.',
                    'inside: The marker is treated as an inline text fragment injected directly at the very beginning of the content string. If text wraps, subsequent lines flow underneath the marker block, disrupting clean vertical grid lines.'
                ]}
            />

            <DocH3>3. Modern Custom Bullets & Procedural Systems</DocH3>
            <DocList
                items={[
                    'The ::marker Pseudo-element: A modern CSS selector that targets the list bullet or number indicator directly. It supports styling properties like color, font-size, and content injections, eliminating the need to strip markers just to apply standard text accents.',
                    'CSS Counters: Specialized integer state variables maintained by the browser engine. They increment procedurally using counter-reset and counter-increment tokens, making them perfect for rendering multi-level nested technical documents (e.g., 1.1, 1.1.1).'
                ]}
            />

            <DocH2>Production Technical Document Blueprint</DocH2>
            <DocP>
                Below is a production-grade layout configuration illustrating the use of custom vector `::marker` styles, cross-browser inline layout resets, and robust multi-level legal counter pipelines:
            </DocP>

            <DocH3>1. The Tabular List Engine Sheet (lists-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION ACCESSIBLE LIST & MARKER ENGINE
   ======================================================= */

/* A. MODERN VECTOR ::MARKER CUSTOMIZATION TOOL */
.vector-bullet-list {
  list-style-type: "→ "; /* Injects an explicit string character as a marker baseline */
  list-style-position: outside; /* Retains crisp multi-line vertical reading grids */
  padding-left: 24px;
  margin: 16px 0;
}

.vector-bullet-list li {
  padding-left: 4px;
  margin-bottom: 12px;
  font-size: 0.875rem;
  color: oklch(0.3 0.02 240);
}

/* Leveraging the modern marker engine for semantic target separation */
.vector-bullet-list li::marker {
  color: oklch(0.55 0.18 250); /* Custom primary accent brand tint */
  font-weight: 800;
  font-size: 1.1rem;
}

/* B. NESTED PROCEDURAL LEGAL DOCUMENT ENGINE (CSS Counters) */
.nested-counter-root {
  /* Resets or instantiates a fresh tracking variable state named "legal" */
  counter-reset: legal; 
  list-style-type: none; /* Strips standard decimal tracks */
  padding-left: 0;
}

.nested-counter-root li {
  /* Increments the active counter tier by exactly 1 target integer step */
  counter-increment: legal; 
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: oklch(0.2 0.02 240);
}

.nested-counter-root li::before {
  /* Dynamically processes the counter path string on runtime */
  content: counters(legal, ".") " "; 
  
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  color: oklch(0.45 0.15 150);
  margin-right: 8px;
}

/* Auto nesting tracking setups */
.nested-counter-root ul {
  counter-reset: legal;
  list-style-type: none;
  padding-left: 20px;
  margin-top: 6px;
}`}
            />

            <DocH3>2. Layout Implementation View (ListsSandboxWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './lists-engine.css';

export default function ListsSandboxWorkspace() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-8 p-6 bg-white border rounded-2xl shadow-sm">
      
      {/* 1. Vector Custom Marker Stream */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-2">System Architecture Pipeline</h4>
        <ul className="vector-bullet-list">
          <li>Initialize high-performance two-dimensional container grids.</li>
          <li>Isolate independent stacking contexts using targeted relative structures and z-index distributions.</li>
          <li>Track multi-line text flow constraints with box-decoration clone setups.</li>
        </ul>
      </div>

      {/* 2. Procedural Counter Subtree */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-3">Operational Directive Hierarchies</h4>
        <ol className="nested-counter-root">
          <li>
            Security Protocol Protocols
            <ul>
              <li>Asymmetric token parsing algorithms.</li>
              <li>Hardware encryption keys constraints.</li>
            </ul>
          </li>
          <li>
            Network Telemetry Routes
            <ul>
              <li>WebSocket connection handshakes.</li>
            </ul>
          </li>
        </ol>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}