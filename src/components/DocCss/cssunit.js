import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSUnitsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Dimension Systems & Sizing Units</DocTitle>

            <DocP>
                CSS leverages a diverse matrix of measurement units to map coordinate spaces, typographic configurations, and layout bounds onto rendering viewports. Selecting the appropriate unit type determines whether an application layout behaves rigidly, scales relative to ambient font sizes, or adapts dynamically to responsive viewport boundaries.
            </DocP>

            <DocH2>Unit Taxonomy Matrix</DocH2>

            <DocH3>1. Absolute Length Primitives</DocH3>
            <DocList
                items={[
                    'px (Pixels): The canonical digital measurement unit. Historically representing a single physical screen dot, it is defined by the W3C as an anchor unit equivalent to 1/96th of an inch. Ideal for precise layout borders, but rigid and non-adaptive for fluid typography.',
                    'Physical Print Units (cm, mm, in, pt, pc): Fixed hardware measurements (Centimeters, Millimeters, Inches, Points where 1pt = 1/72in, Picas where 1pc = 12pt). These units should be reserved exclusively for screen-to-paper print stylesheets (@media print).'
                ]}
            />

            <DocH3>2. Relative Font-Metrics Scale</DocH3>
            <DocList
                items={[
                    'em: A relative sizing factor based on the computed font-size of the element itself. When applied to layout dimensions like margins or padding, it compounds iteratively through nested DOM sub-trees.',
                    'rem (Root EM): Scales relative strictly to the root font-size of the HTML document container (typically defaulting to 16px). This unit provides a predictable layout metric that scales gracefully with user accessibility font adjustments.',
                    'ch & ex: Content-relative metrics based on the width of the zero character ("0") and the x-height of lowercase glyphs respectively, within the currently active font face. Excellent for capping human-readable typography widths.'
                ]}
            />



            <DocH3>3. Responsive Viewport Mechanics</DocH3>
            <DocList
                items={[
                    '% (Percentage): Resolves dimensions directly relative to the computed sizing parameters of the immediate structural parent element.',
                    'vw & vh (Viewport Width / Height): Equal to exactly 1% of the rendering window\'s horizontal width or vertical height axes.',
                    'vmin & vmax: Evaluates the current viewport dimensions to scale relative to the smaller (vmin) or larger (vmax) active screen dimension parameter.',
                    'Dynamic Mobile Viewport Primitives (svh, lvh, dvh): Engineered to resolve mobile address-bar scaling issues. svh captures the Small Viewport height (hiding variable browser UI expansion fields), lvh maps the Large Viewport extent, and dvh dynamically computes real-time layout space as toolbars expand or collapse.'
                ]}
            />

            <DocH3>4. Grid Layout Space</DocH3>
            <DocList
                items={[
                    'fr (Fractional Unit): A specialized grid layout unit that represents a fractional share of the remaining unallocated free space within a CSS Grid container.'
                ]}
            />

            <DocH2>Fluid Responsive Math: Advanced Sizing Functions</DocH2>
            <DocP>
                Modern UI layouts frequently leverage mathematical operators to establish responsive bounding thresholds without relying on complex JavaScript window listeners:
            </DocP>
            <DocList
                items={[
                    'calc(): Executes dynamic runtime arithmetic using mixed units (e.g., width: calc(100vw - 32px);). Semicolon bounds must flank operators (+, -) to resolve correctly.',
                    'clamp(): Establishes an absolute fluid sizing bounds matrix mapping out an explicit floor, an active scalable factor, and a fixed ceiling. Syntax: clamp(MIN, VAL, MAX).'
                ]}
            />

            <DocH2>Production Responsive Dimension Blueprint</DocH2>
            <DocP>
                Below is a production-grade layout configuration illustrating the proper integration of `dvh` wrappers, relative accessibility tracking via `rem`, character count controls, and fluid `clamp()` math:
            </DocP>

            <DocH3>1. The Flexible Layout Interface Sheet (dimensions.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION FLUID DIMENSION GRID ARCHITECTURE
   ======================================================= */
:root {
  /* FLUID TYPOGRAPHY ACCESSIBILITY TRACKING (clamp)
     Floor: 1.25rem (20px) | Scaling: 2vw + 1rem | Ceiling: 2.5rem (40px) */
  --fluid-h1: clamp(1.25rem, 2vw + 1rem, 2.5rem);
  
  --spacing-base: 1rem; /* 16px target base */
  --border-weight: 1px; /* Absolute tracking pixel requirement */
}

/* FULL ACCESSIBLE APPARATUS VIEWPORTCONTAINER */
.viewport-hero-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* Resolves mobile address bar overflows by utilizing dynamic height scaling */
  min-height: 100dvh; 
  padding: calc(var(--spacing-base) * 2);
  background-color: oklch(0.98 0.01 240);
}

.responsive-article-node {
  background-color: #ffffff;
  border: var(--border-weight) solid oklch(0.9 0.01 240);
  border-radius: 0.75rem; /* 12px relative */
  padding: 2.5em; /* Padding scales proportionally if components adjust internal font metrics */
  
  /* Typographic Readability Boundary: Restricts text layout wrapper to 
     exactly 65 characters wide to prevent visual reading fatigue */
  max-width: 65ch; 
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.03);
}

.responsive-article-node h1 {
  font-size: var(--fluid-h1);
  color: oklch(0.2 0.02 240);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.responsive-article-node p {
  /* 1rem relative body text tracks user system magnification updates cleanly */
  font-size: 1rem; 
  line-height: 1.6;
  color: oklch(0.4 0.02 240);
  margin: 0;
}`}
            />

            <DocH3>2. Layout Implementation View (DimensionsSandboxView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './dimensions.css';

export default function DimensionsSandboxView() {
  return (
    <div className="viewport-hero-wrapper">
      {/* Container responds fluidly to diverse viewports, maintaining 
          strict typographic readability and accessibility settings */}
      <article className="responsive-article-node">
        <h1>Fluid Screen Topography</h1>
        <p>
          This presentation card uses dynamic typography scales, character-width layout restrictions, and mobile dvh height optimizations to deliver highly resilient user interface structures across modern screen configurations.
        </p>
      </article>
    </div>
  );
}`}
            />
        </>
    );
}