import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../docs/DocPrimitives';
import CodeBlock from '../docs/CodeBlock';

export default function CSSBordersDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Borders, Outlines, & Fragment Layouts</DocTitle>

            <DocP>
                The border and outline rendering subsystems control the structural framing edges of elements. While borders form an integral layer of the standard CSS Box Model, outlines sit outside layout calculations. Mastering these boundary layers, along with multi-line fragment styling, is essential for building polished, accessible user interfaces.
            </DocP>

            <DocH2>Boundary System Taxonomy Matrix</DocH2>

            <DocH3>1. Box Model Borders & Corner Geometry</DocH3>
            <DocList
                items={[
                    'border Shorthand: Configures thickness (width), raster pattern (style), and color in a single line (e.g., border: 2px solid #000;). Individual edges can be styled independently using properties like border-top or border-inline-start.',
                    'border-style Matrix: Defines the render pattern of the edge vector. Options include solid, dashed, dotted, and double, as well as structural structural profiles like groove, ridge, inset, and outset.',
                    'border-radius: Controls the curvature of an element\'s corners. It supports complex elliptical rounding using a slash syntax (e.g., horizontal-radius / vertical-radius) or fine-grained per-corner mappings.',
                    'Logical Border Mapping: Modern CSS utilizes logical properties like border-block-start or border-inline-end to automatically mirror layouts based on the active document reading direction (LTR to RTL).'
                ]}
            />



            <DocH3>2. Interactive Outlines: Accessibility Drawing Layers</DocH3>
            <DocList
                items={[
                    'outline Shorthand: Draws a visible boundary completely outside the element\'s structural box framework. It takes zero layout space, meaning it does not affect parent dimensions or trigger layout shifts when toggled.',
                    'outline-offset: Controls the spatial gap between the element\'s outer border edge and the outline boundary. Negative values render the outline completely inside the container frame.'
                ]}
            />

            <DocH3>3. Fragmentation Control</DocH3>
            <DocList
                items={[
                    'box-decoration-break: Dictates how styles (like borders, padding, background gradients, or shadows) wrap across fragmented text or multi-line inline wrappers. The slice value continues calculations as a single continuous virtual block, while clone duplicates borders and paddings for each line fragment independently.'
                ]}
            />

            <DocH2>Production-Grade Edge Component Blueprint</DocH2>
            <DocP>
                Below is an advanced stylesheet demonstrating interactive focus outline offsets, multi-radius corner curves, and clean handling of multi-line inline text fragments using `box-decoration-break`:
            </DocP>

            <DocH3>1. The Framed Structural Sheet (borders.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION BOUNDARY & EDGE ENGINEERING
   ======================================================= */
:root {
  --border-primary-tint: oklch(0.55 0.18 250);
  --outline-focus-glow: oklch(0.65 0.25 200);
}

/* INTERACTIVE ACTION TRIGGER CONTROLLER */
.interactive-action-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #ffffff;
  
  /* Advanced 8-value border-radius mapping unique elliptical curvature paths */
  border-radius: 30px 15px 40px 20px / 20px 40px 15px 30px;
  
  /* Traditional Box Model Border definition */
  border: 2px solid oklch(0.9 0.01 240);
  background-clip: padding-box;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* ACCESSIBLE INTERACTIVE ACCENT BOUNDS */
  &:focus-visible {
    /* Completely clean focus treatment that avoids layout shifts */
    outline: 3px dashed var(--outline-focus-glow);
    outline-offset: 6px; /* Injects a clean gap outside the card border */
    border-color: var(--border-primary-tint);
  }
}

/* FRAGMENTATION DECORATION WRAPPER */
.fragmented-highlight-text {
  font-size: 1.15rem;
  line-height: 2;
  font-weight: 600;
  color: #ffffff;
  
  /* Linear gradient fill combined with inline padding */
  background-image: linear-gradient(to right, oklch(0.6 0.18 320), oklch(0.5 0.2 340));
  padding: 4px 10px;
  
  /* CRITICAL MULTI-LINE RENDERING FIX */
  /* clone forces every wrapped text line to render its own start/end borders and paddings */
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  
  border-radius: 6px;
  border: 1px solid rgb(255 255 255 / 0.2);
}`}
            />

            <DocH3>2. Layout Implementation View (BorderSandboxView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './borders.css';

export default function BorderSandboxView() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-8">
      {/* Interactive component utilizing non-layout-shifting accessibility outlines */}
      <div tabIndex={0} className="interactive-action-card shadow-sm">
        <h4 className="text-sm font-bold text-gray-800 mb-2">Asymmetric Elliptical Framework</h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          Select or tab into this item to inspect its non-displacing dashed outline, spaced out using negative or positive offsets, alongside custom structural corner radius distributions.
        </p>
      </div>

      {/* Multi-line inline container displaying fragment cloning rules */}
      <div className="p-4 border rounded-xl bg-gray-50">
        <p className="text-sm text-gray-700">
          Operational telemetry states: <span className="fragmented-highlight-text">This is an inline text highlight section crafted to stretch over multiple lines to prove the box-decoration-break clone property is rendering identical border wraps.</span>
        </p>
      </div>
    </div>
  );
}`}
            />
        </>
    );
}