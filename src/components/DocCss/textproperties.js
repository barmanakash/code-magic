import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSTextPropertiesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Advanced Text Flow & Layout Properties</DocTitle>

            <DocP>
                CSS text properties control typographic layout behaviors like alignment offsets, line wrapping boundaries, clipping mechanisms, and multi-directional writing flows. Managing these properties is essential for handling dynamic internationalized content and avoiding visual container overflows.
            </DocP>

            <DocH2>Text Flow & Layout Property Matrix</DocH2>

            <DocH3>1. Alignment, Indentation, & Spacing Bounds</DocH3>
            <DocList
                items={[
                    'text-align: Sets the horizontal alignment of inline content inside a block container (left, right, center, justify, start, end). The logical start and end values automatically adapt to document reading directions (LTR vs RTL).',
                    'text-indent: Injects an explicit indentation space before the first line of text within a block layout container.',
                    'white-space: Dictates how the browser processing engine handles text spaces, tabs, and newline line breaks (normal, nowrap, pre, pre-wrap, pre-line).'
                ]}
            />

            <DocH3>2. Overflow Management & Line Breaking Rules</DocH3>
            <DocList
                items={[
                    'text-overflow: Controls how the browser alerts users to hidden inline content that overflows its container bounds. Values include clip (hard truncation) and ellipsis (renders an un-selectable three-dot character string "…"). Requires white-space: nowrap; and overflow: hidden; to trigger correctly.',
                    'word-break: Controls inline word-snapping behavior. normal uses standard breaking logic; break-all splits words at any character boundary to prevent layout blowouts; keep-all forbids breaks within CJK (Chinese, Japanese, Korean) strings.',
                    'overflow-wrap (word-wrap): Instructs the browser whether to break an exceptionally long, unbroken word (like an API URL token) onto a new line if it exceeds its parent container\'s width bounding box.'
                ]}
            />



            <DocH3>3. Internationalization & Multi-Directional Layouts</DocH3>
            <DocList
                items={[
                    'direction: Establishes the primary reading vector of a text layout block (ltr for Left-to-Right layout tracks like English; rtl for Right-to-Left formatting like Arabic or Hebrew).',
                    'writing-mode: Changes the structural block layout coordinate flow from horizontal to vertical axes (horizontal-tb, vertical-rl, vertical-lr). This rearranges structural line-advancement vectors across the viewport.',
                    'text-orientation: Adjusts the vertical rotation of typographic characters (mixed, upright, sideways). This property applies exclusively when writing-mode is set to a vertical orientation module.'
                ]}
            />

            <DocH2>Production Text Constraint Blueprint</DocH2>
            <DocP>
                Below is an advanced stylesheet demonstrating robust multi-line layout clamping, single-line text truncation pipelines, and international vertical reading flows:
            </DocP>

            <DocH3>1. The Advanced Typography Management Sheet (text-flow.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION TEXT BOUNDARY & LAYOUT MANAGEMENT
   ======================================================= */

/* A. SECURE SINGLE-LINE TEXT TRUNCATION PIPELINE */
.ellipsis-truncation-node {
  /* Enforce structural constraints to trigger truncation correctly */
  display: block;
  width: 100%;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 

  font-size: 0.875rem;
  color: oklch(0.4 0.02 240);
}

/* B. ADVANCED MULTI-LINE LINE CLAMPING ENGINE */
.multiline-clamp-card {
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  max-width: 320px;

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: oklch(0.25 0.02 240);
    
    /* Forces breaking on exceptionally long strings or API tokens */
    overflow-wrap: break-word;
    word-break: normal;

    /* Legacy WebKit Box properties used for cross-browser line-clamping */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Restricts layout view strictly to 3 visible lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* C. INTERNATIONALIZATION: VERTICAL TELEMETRY BADGE */
.vertical-telemetry-badge {
  /* Rotates coordinate tracking to vertical layout directions */
  writing-mode: vertical-rl;
  text-orientation: mixed;
  
  background-color: oklch(0.2 0.02 240);
  color: oklch(0.7 0.15 140);
  padding: 16px 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 6px;
  text-align: center;
}`}
            />

            <DocH3>2. Layout Implementation View (TextSandboxView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './text-flow.css';

export default function TextSandboxView() {
  return (
    <div className="max-w-xl mx-auto mt-10 space-y-8 flex flex-col items-center">
      
      {/* Container showcasing single-line text truncation */}
      <div className="w-64 p-4 border rounded-xl bg-gray-50">
        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1 font-bold">Secure Hash Stream</span>
        <span className="ellipsis-truncation-node">
          sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
        </span>
      </div>

      <div className="flex gap-4 items-start">
        {/* Component demonstrating multi-line line-clamping */}
        <article className="multiline-clamp-card shadow-sm">
          <p>
            This paragraph block contains structural content that automatically wraps. If the data string grows too long, the WebKit line-clamp styling pipeline automatically caps the layout at exactly three lines, terminating the visible string with an ellipsis symbol without breaking container heights.
          </p>
        </article>

        {/* Component utilizing specialized vertical writing mode structures */}
        <aside className="vertical-telemetry-badge">
          Matrix-Active-v1.0.4
        </aside>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}