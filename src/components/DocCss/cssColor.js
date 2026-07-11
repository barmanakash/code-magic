import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSColorsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Color Spaces & Accessibility Engineering</DocTitle>

            <DocP>
                Managing color in modern web applications goes beyond simple visual styling. To build scalable interfaces, developers must understand digital color spaces, coordinate models, alpha-channel transparency math, and hardware-accelerated color engines while strictly meeting accessibility standards.
            </DocP>

            <DocH2>Color Coordinate Spaces & Functions</DocH2>

            <DocH3>1. Traditional Syntaxes & Digital Spaces</DocH3>
            <DocList
                items={[
                    'Named Colors: A fixed set of 140 keyword constants (e.g., tomato, steelblue). They lack scalability and offer no programmatic fine-tuning.',
                    'HEX Notation (#RRGGBB[AA]): A base-16 hexadecimal representation of Red, Green, and Blue light channels. The optional final two digits manage alpha transparency channels ($00$ for full transparency, $ff$ for full opacity).',
                    'RGB / RGBA (Red, Green, Blue): A foundational additive color model based on integer channels ($0$ to $255$) or percentages. Modern CSS normalizes both under the single functional rgb() syntax, accepting space-separated arguments and an optional slash-delimited alpha value (e.g., rgb(255 0 0 / 0.5)).',
                    'HSL / HSLA (Hue, Saturation, Lightness): A cylindrical coordinate mapping model. Hue is measured as an angle on the color wheel ($0°$ to $360°$), while Saturation and Lightness are defined as percentages. This model makes shifting color variants highly intuitive.'
                ]}
            />



            <DocH3>2. Specialized System Tokens & Modern Functions</DocH3>
            <DocList
                items={[
                    'HWB (Hue, Whiteness, Blackness): A human-centric color model that starts with a base Hue angle and adds percentages of pure Whiteness and Blackness. This makes it incredibly easy to quickly create soft pastel shades or deep dark-mode tones.',
                    'currentColor Keyword: A dynamic CSS keyword that acts as a variable reflecting the element\'s computed color value. It automatically syncs child property paths—like borders, SVG paths, or text underlines—with the surrounding typography color.',
                    'transparent: A keyword shorthand representing an alpha value of absolute zero, compiled internally as rgba(0, 0, 0, 0).',
                    'Color-Mix Engine (color-mix()): A native function that blends two distinct color spaces together at targeted percentage ratios directly within the browser runtime.'
                ]}
            />

            <DocH2>Contrast & Digital Accessibility (WCAG 2.2)</DocH2>
            <DocP>
                To comply with international web accessibility frameworks (**WCAG 2.2 Standards**), text color pairings must guarantee strict contrast ratios against their background fields to ensure scannability for visually impaired users:
            </DocP>
            <DocList
                items={[
                    'AA Threshold: Requires a minimum contrast ratio of **4.5:1** for standard body text (under 18pt/24px) and **3:1** for large structural display headers.',
                    'AAA Threshold: Enforces an enhanced high-contrast ratio of **7:1** for daily body text and **4.5:1** for large typography headers.'
                ]}
            />

            <DocH2>Production Color Tokens Blueprint</DocH2>
            <DocP>
                Below is a production-grade CSS theme architecture utilizing modern functional color parameters, dynamic `currentColor` bindings, and WCAG AA-compliant contrast tokens:
            </DocP>

            <DocH3>1. The Enterprise Theme Variables Sheet (colors.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION ACCESSIBLE COLOR ARCHITECTURE
   ======================================================= */
:root {
  /* HSL Coordinate Primitives - Easily modifiable design system tokens */
  --core-hue: 220;
  --core-saturation: 85%;
  
  /* WCAG AA Compliant Combinations (Contrast evaluated > 4.5:1) */
  --sys-bg-canvas: hsl(var(--core-hue) 20% 98%);
  --sys-text-main: hsl(var(--core-hue) 40% 12%);
  --sys-brand-base: hsl(var(--core-hue) var(--core-saturation) 45%);
  --sys-brand-light: hsl(var(--core-hue) var(--core-saturation) 95%);

  /* Alpha Channel Integration via Modern Space-Separated Syntax */
  --sys-border-alpha: rgb(15 23 42 / 0.12);

  /* Native Dynamic Mixing Engine */
  /* Blends 20% brand base color into 80% pure white canvas sheets */
  --sys-surface-mixed: color-mix(in hsl, var(--sys-brand-base) 20%, #ffffff);
}

body {
  background-color: var(--sys-bg-canvas);
  color: var(--sys-text-main);
  font-family: system-ui, sans-serif;
  margin: 0;
}

.accessible-card {
  background-color: var(--sys-surface-mixed);
  border: 1px solid var(--sys-border-alpha);
  border-radius: 12px;
  padding: 24px;
  
  /* Explicit component color block sets the contextual token foundation */
  color: var(--sys-brand-base);
}

.accessible-card h3 {
  /* Inherits color value dynamically out of parent brand context token */
  color: inherit;
  margin: 0 0 8px 0;
  font-size: 1.25rem;
}

.accessible-card p {
  /* Overrides context for high-contrast body text layout rules */
  color: var(--sys-text-main);
  font-size: 0.875rem;
  line-height: 1.5;
}

.accessible-card .vector-icon-badge {
  display: inline-flex;
  padding: 8px;
  background-color: var(--sys-brand-light);
  border-radius: 50%;
  
  /* CRITICAL CURRENTCOLOR IMPLEMENTATION:
     Forces the SVG stroke to dynamically match the surrounding text color token,
     completely eliminating duplicate color property declarations */
  border: 2px solid currentColor;
}

.accessible-card .vector-icon-badge svg {
  stroke: currentColor;
  fill: transparent;
}`}
            />

            <DocH3>2. Layout Implementation Consumption (ColorSandboxView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './colors.css';

export default function ColorSandboxView() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <article className="accessible-card shadow-sm">
        <header className="flex items-center gap-3 mb-3">
          <div className="vector-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <h3>System Metrics Telemetry</h3>
        </header>
        
        <p>
          This user interface component automatically resolves color mix values and currentColor inheritances while maintaining strict WCAG AA contrast compliance across standard desktop displays.
        </p>
      </article>
    </div>
  );
}`}
            />
        </>
    );
}