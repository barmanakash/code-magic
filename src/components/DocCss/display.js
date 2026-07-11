import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSDisplayDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">The Display Property & Outer Formatting Models</DocTitle>

            <DocP>
                The <code>display</code> property is the master switch for the browser's rendering engine. It dictates an element's outer formatting context (how it behaves relative to neighboring elements) and its inner formatting context (how it structures and positions its direct child nodes).
            </DocP>

            <DocH2>Formatting Context Taxonomy Matrix</DocH2>

            <DocH3>1. Structural Layout Primitives</DocH3>
            <DocList
                items={[
                    'block: The element stretches horizontally to fill 100% of its parent container\'s width. It begins on a new line, and vertical margins, paddings, heights, and widths are fully respected by the layout engine.',
                    'inline: The element tightly wraps only its raw text or child contents, flowing horizontally within the current text line. Custom width and height properties are completely ignored, and vertical margins or paddings do not displace neighboring lines.',
                    'inline-block: A powerful hybrid formatting model. Elements flow inline horizontally alongside text fragments, but they retain full block capabilities—respecting custom width, height, margin, and padding constraints.'
                ]}
            />



            <DocH3>2. Layout Engine Introspections</DocH3>
            <DocList
                items={[
                    'flex & grid: Act as block-level structural elements on the outside while transforming their internal environments into highly specialized alignment setups (1D Flexbox columns/rows or 2D structural Grid tracks).',
                    'table: Forces standard elements (like dividers) to mimic legacy structural HTML table layouts layout relationships.'
                ]}
            />

            <DocH3>3. Specialized Structural Structural Controls</DocH3>
            <DocList
                items={[
                    'none: Completely strips the targeted element and all its children out of the visual render tree. The container takes up zero layout space, as if it doesn\'t exist in the HTML. This contrasts sharply with visibility: hidden, which hides the element visually but leaves its empty structural footprint intact.',
                    'contents: A semantic structural wrapper. It tells the browser engine to act as if the parent container doesn\'t exist, prompting it to evaluate and style the child elements directly as part of the next level up in the DOM hierarchy.',
                    'flow-root: Instantiates a completely clean, independent Block Formatting Context (BFC) wrapper. This ensures that internal floated elements remain safely contained inside the parent box, preventing them from bleeding out and breaking layout alignments down the page.'
                ]}
            />

            <DocH2>Production Structural Formatting Blueprint</DocH2>
            <DocP>
                Below is a production-ready styling architecture demonstrating the correct application of independent BFC generation, hybrid block alignment patterns, and safe hidden visibility overrides:
            </DocP>

            <DocH3>1. The Multi-Context Display Sheet (display-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION DISPLAY SYSTEM CONTROLS
   ======================================================= */

/* A. INDEPENDENT BLOCK FORMATTING CONTEXT (BFC)
   Guarantees all internal elements or floats are contained within this box */
.workspace-flow-node {
  display: flow-root;
  background-color: oklch(0.98 0.01 240);
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
}

/* B. HYBRID INLINE-BLOCK TELEMETRY TAGS */
.telemetry-tag-pill {
  display: inline-block;
  
  /* Dimensions are respected precisely while letting pills flow horizontally */
  padding: 6px 14px;
  width: auto;
  min-width: 80px;
  
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  background-color: oklch(0.55 0.18 250);
  border-radius: 9999px;
  margin-right: 8px;
  
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
}

/* C. VISIBILITY STATE CONTROLS */
.state-hidden-complete {
  display: none !important; /* Stripped from structural layout geometry */
}

.state-hidden-ghost {
  visibility: hidden; /* Empty layout frame is retained in the layout tree */
}

/* D. STRUCTURAL DOM WRAPPER DELETION */
.layout-passthrough-group {
  /* Tells the layout engine to ignore this wrapper box entirely and evaluate 
     its internal children against the surrounding parent grid/flex controls */
  display: contents; 
}`}
            />

            <DocH3>2. Layout Implementation View (DisplaySandboxWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './display-engine.css';

export default function DisplaySandboxWorkspace() {
  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      
      {/* Container establishing an independent formatting context (flow-root) */}
      <section className="workspace-flow-node">
        <h4 className="text-sm font-bold text-gray-800 mb-3">System Control Registry</h4>
        
        {/* Inline-block primitives flowing alongside each other while respecting padding metrics */}
        <div className="mb-4">
          <span className="telemetry-tag-pill">node-01</span>
          <span className="telemetry-tag-pill">node-02</span>
          <span className="telemetry-tag-pill">node-03</span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed">
          The tags above demonstrate hybrid formatting parameters, flowing horizontally within the container text lines while respecting explicit dimensions and hover animations.
        </p>
      </section>

    </div>
  );
}`}
            />
        </>
    );
}