import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSBoxModelDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">The CSS Box Model & Layout Engine</DocTitle>

            <DocP>
                The CSS Box Model is the foundational layout engine of the visual web. Every HTML element rendered into the document tree is processed as a concentric rectangular box. Understanding how these structural layers—content, padding, borders, and margins—interact and accumulate size is vital for avoiding layout breaks and alignment bugs.
            </DocP>

            <DocH2>Anatomy of the Box Model Layers</DocH2>



            <DocList
                items={[
                    'Content Area: The innermost core zone where text glyphs, imagery, or child component frameworks are actively rendered. Controlled via width and height properties.',
                    'Padding Zone: The transparent spacing layer surrounding the content area, clear of any background fills. It acts as an internal cushion between the content and the element border boundary.',
                    'Border Layer: The structural frame wrapping around the padding and content. It supports custom thickness, color vector paths, and raster textures.',
                    'Margin Area: The outermost transparent spacing layer that separates the element box from its surrounding structural neighbors. Margins exist entirely outside the element boundary and do not inherit background color configurations.'
                ]}
            />

            <DocH2>The Box Sizing Revolution: Box Models Compared</DocH2>
            <DocP>
                The browser calculation math changes drastically based on the active <code>box-sizing</code> parsing model:
            </DocP>

            <DocH3>1. content-box (W3C Legacy Baseline Default)</DocH3>
            <DocP>
                Width and height apply **only** to the internal content pool. Adding padding or borders expands the element beyond its defined dimensions.
            </DocP>
            <blockquote>
                Computed Component Width = width + left padding + right padding + left border + right border
            </blockquote>

            <DocH3>2. border-box (Modern Production Standard)</DocH3>
            <DocP>
                Width and height absorb padding and borders inside the specified boundary lines, maintaining predictable layout calculations across fluid grids.
            </DocP>
            <blockquote>
                Computed Component Width = inclusive of padding and borders
            </blockquote>

            <DocH2>The Mechanics of Margin Collapse</DocH2>
            <DocP>
                Vertical margins of adjacent block elements in the normal document flow often combine into a single margin zone instead of stacking sequentially.
            </DocP>
            <DocList
                items={[
                    'Adjacent Siblings: When two block elements stack vertically, their shared margin collapses into a single gap. The system drops the smaller value and applies only the larger margin (e.g., a bottom margin of 30px meeting a top margin of 20px collapses to exactly 30px).',
                    'Parent-Child Isolation: If a parent box lacks an explicit border, padding, or inline context formatting to separate it, its top margin can merge with its first child\'s top margin, dragging the parent container down the viewport layout stack.'
                ]}
            />

            <DocH2>Production Box Model Framework Blueprint</DocH2>
            <DocP>
                Below is a production-grade stylesheet demonstrating global modern `border-box` resets, explicit structural layout limits, and implementations that avoid margin collapse issues:
            </DocP>

            <DocH3>1. The Box-Model Reset & Layout Sheet (box-model.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION BOX MODEL RESET & SPACING TUNING
   ======================================================= */

/* A. GLOBAL PRODUCTION STANDARD BOX-SIZING RESET
   Forces every node and generated pseudo-element to use predictable border-box math */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* B. LAYOUT HUB MANAGING MARGIN COLLAPSE EXCLUSIONS */
.layout-stack-container {
  display: flex;
  flex-direction: column;
  gap: 24px; /* Using Flexbox gap completely bypasses traditional vertical margin collapse loops */
  
  padding: 32px;
  background-color: oklch(0.97 0.01 240);
  border-radius: 16px;
}

/* C. COMPONENT STRIP DEMONSTRATING EXPLICIT BORDER-BOX STRUCTURING */
.box-model-demo-card {
  /* Dimensions are absolutely locked to 100% width and 120px height. 
     Padding and borders compress inward rather than blowing out the card bounds. */
  width: 100%;
  height: 120px;
  
  padding: 24px;
  border: 4px solid oklch(0.55 0.18 250);
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.box-model-demo-card h4 {
  margin: 0 0 4px 0;
  font-size: 1.1rem;
  color: oklch(0.2 0.02 240);
}

.box-model-demo-card p {
  margin: 0;
  font-size: 0.85rem;
  color: oklch(0.45 0.02 240);
  line-height: 1.4;
}`}
            />

            <DocH3>2. Layout Implementation View (BoxModelSandbox.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './box-model.css';

export default function BoxModelSandbox() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      {/* Container utilizing global border-box parsing layout models */}
      <section className="layout-stack-container">
        
        <div className="box-model-demo-card">
          <h4>Card Interface Node Alpha</h4>
          <p>This element incorporates padding and heavy borders seamlessly without expanding past its explicit 120px height profile.</p>
        </div>

        <div className="box-model-demo-card">
          <h4>Card Interface Node Beta</h4>
          <p>Predictable spacing is maintained using isolated flex layout distributions, eliminating un-trackable block vertical margin collapse bugs.</p>
        </div>

      </section>
    </div>
  );
}`}
            />
        </>
    );
}