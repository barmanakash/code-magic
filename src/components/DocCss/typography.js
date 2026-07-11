import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSTypographyDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Typography & Text Layout Engineering</DocTitle>

            <DocP>
                Typography management controls the layout, line wrapping, and legibility of text content across varying display resolutions. Modern web typography combines relative scaling engines with fluid mathematical layout functions, native variable font axes, and performance-optimized asset delivery pipelines.
            </DocP>

            <DocH2>Typographic Property Taxonomy Matrix</DocH2>

            <DocH3>1. Font Metrics & Family Layouts</DocH3>
            <DocList
                items={[
                    'font-family: Declares a prioritized list of font names for the browser engine to evaluate. Always include generic fallback structures (e.g., sans-serif, serif, monospace) at the end of the stack to ensure clean user-agent rendering if custom web fonts fail to load.',
                    'font-size: Sets glyph dimensions. Avoid using absolute absolute pixels (px) for document text, as it overrides user browser magnification preferences. Use relative root units (rem) or container percentages instead.',
                    'font-weight: Controls line thickness using numerical values ($100$ to $900$) or standard keyword strings (normal, bold).',
                    'font-style & font-variant: Maps italic/oblique angles and specialized capital glyph designs (like small-caps) directly to native font configurations.',
                    'line-height: Adjusts the vertical spacing between text lines. Best practice dictates using unitless values (e.g., 1.5) to ensure line-height scales naturally relative to changing font sizes without compounding layout errors.'
                ]}
            />



            <DocH3>2. Spacing & Text Layout Enhancements</DocH3>
            <DocList
                items={[
                    'letter-spacing & word-spacing: Adjusts the horizontal tracking distance between characters or independent words.',
                    'text-transform: Modifies uppercase, lowercase, or capitalized formatting inline without altering the underlying raw data payload inside the DOM structure.',
                    'text-decoration: Applies typographic accents like underlines, overlines, or line-through strikes, and supports style modifications like dotted or wavy patterns and custom color offsets.',
                    'text-shadow: Applies layered shadow blur vectors behind text glyphs using offset coordinates and color metrics (e.g., text-shadow: X-offset Y-offset blur-radius color;).'
                ]}
            />

            <DocH2>Next-Generation Web Font Delivery</DocH2>

            <DocH3>Modern Web Fonts vs. Variable Fonts</DocH3>
            <DocP>
                Traditional web font workflows require downloading separate file instances for every single weight and style permutation (e.g., Regular, Italic, Medium, Bold), which rapidly inflates asset bundle sizes.
            </DocP>
            <DocP>
                <strong>Variable Fonts</strong> resolve this bottleneck by embedding an entire font family into a single lightweight file container. They operate on continuous structural axes, allowing developers to fine-tune features like weight (`wght`), slant (`slnt`), or optical size (`opsz`) to any fractional value using the `font-variation-settings` property.
            </DocP>

            <DocH2>Production-Grade Typographic Layout Blueprint</DocH2>
            <DocP>
                Below is a production-ready typography sheet detailing custom `@font-face` optimization configurations, unitless scale tracking, variable font parameters, and fluid heading calculations:
            </DocP>

            <DocH3>1. The Performance Typography Sheet (typography.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION VARIABLE & ACCESSIBLE TYPOGRAPHY ENGINE
   ======================================================= */

/* A. PERFORMANCE-OPTIMIZED EXTERNAL VARIABLE FONT INGESTION */
@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/Inter-VariableFont_slnt,wght.woff2') format('woff2 supports variations'),
       url('/fonts/Inter-VariableFont_slnt,wght.woff2') format('woff2');
  font-weight: 100 900; /* Maps continuous weight range capabilities */
  font-style: normal;
  font-display: swap; /* Keeps text visible using system fallbacks during font load */
}

:root {
  /* Dynamic Fluid Heading Typography via Mathematical Clamping */
  --fluid-title: clamp(1.75rem, 3vw + 1rem, 3.5rem);
  
  /* Standardizing System Font Fallbacks */
  --font-stack-main: 'Inter Variable', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  font-family: var(--font-stack-main);
  font-size: 1rem; /* Tracks root 16px default browser magnification cleanly */
  line-height: 1.6; /* Unitless structural baseline prevents compounding layout errors */
  color: oklch(0.2 0.02 240);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* HIGH-DENSITY HEADER INTERFACE ROUTINES */
.editorial-header-block {
  max-width: 65ch; /* Caps paragraph layouts to ideal reading character widths */
  margin: 40px auto;
  padding: 0 24px;

  h1 {
    font-size: var(--fluid-title);
    line-height: 1.15;
    letter-spacing: -0.03em; /* Tightens tracking for large font headers */
    margin: 0 0 16px 0;
    
    /* Variable Axis Interaction Properties */
    font-weight: 850; 
    font-variation-settings: 'wght' 850, 'slnt' 0;
    
    text-shadow: 0 2px 4px rgb(0 0 0 / 0.05);
  }

  .editorial-lead-paragraph {
    font-size: 1.125rem;
    line-height: 1.7;
    color: oklch(0.4 0.02 240);
    margin: 0 0 24px 0;
    word-spacing: 0.02em;
  }

  .action-link-reference {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: oklch(0.55 0.18 250);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    transition: all 0.2s ease;

    &:hover {
      color: oklch(0.45 0.18 250);
      text-decoration-color: dotted;
    }
  }
}`}
            />

            <DocH3>2. Layout Implementation View (TypographySandboxView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './typography.css';

export default function TypographySandboxView() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Structural presentation block parsing typographic properties */}
      <article className="editorial-header-block bg-white p-8 border rounded-2xl shadow-sm">
        <h1>Scalable Systems & Responsive Typography</h1>
        <p className="editorial-lead-paragraph">
          This article block leverages fluid mathematical clamps, precise relative unit metrics, and native variable font weight axes to maintain cross-browser typographic alignment.
        </p>
        <a href="#explore" className="action-link-reference">
          Access Documentation Matrix
        </a>
      </article>
    </main>
  );
}`}
            />
        </>
    );
}