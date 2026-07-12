import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSAccessibilityDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">A11y Engineering & Inclusive Display Systems</DocTitle>

            <DocP>
                CSS Accessibility (A11y) governs how layout structures, colors, focus pipelines, and interactive states render for users with varying visual, auditory, motor, and cognitive capabilities. Rather than treated as an afterthought, web accessibility must be designed natively into the layout sheet layer. This ensures software remains readable, logical, and fully navigable by keyboard interfaces and screen reading technologies.
            </DocP>

            <DocH2>Inclusive Presentation Taxonomy Matrix</DocH2>

            <DocH3>1. Chromatic Contrast & High-Contrast Adaptation</DocH3>
            <DocList
                items={[
                    'Color Contrast Ratios: To comply with WCAG 2.1 AA guidelines, normal body text must maintain a contrast ratio of at least 4.5:1 against its backdrop, while large headers (18pt/24px or higher) require at least 3:1. Enhanced criteria (AAA) raise these requirements to 7:1 for normal text.',
                    'forced-colors Media Feature: Detects when a user enables operating system high-contrast modes (like Windows High Contrast Mode). When active, the browser limits the color palette to a restrictive system-defined set. Authors should use standard semantic system keywords (like Canvas, CanvasText, Link, and Highlight) to preserve readable, non-distorted contrasts.'
                ]}
            />



            <DocH3>2. Keyboard Navigation Pipelines</DocH3>
            <DocList
                items={[
                    'Focus Rings (:focus-visible): Essential for users relying on keyboards, switches, or assistive hardware to navigate a page. The :focus-visible pseudo-class targets elements receiving focus via non-pointer inputs (like keyboards), allowing teams to style prominent focus indicators for keyboard users while suppressing them for mouse clicks.',
                    'outline-offset: Creates breathing room between an element\'s border edge and its focus ring, preventing visual clipping and keeping the focus location distinct.'
                ]}
            />

            <DocH3>3. Screen Reader Ingestion & Layout Synchronization</DocH3>
            <DocList
                items={[
                    'The .sr-only Architectural Pattern: Visually hides descriptive contextual metadata text off-screen while keeping it fully detectable by text-to-speech screen readers (e.g., JAWS, NVDA, VoiceOver).',
                    'content: " " Restrictions: Avoid injecting critical semantic text or data inside CSS pseudo-elements (::before/::after) via content tokens, as screen reader support for CSS-generated content varies and can leave assistive tech users missing key info.'
                ]}
            />



            <DocH3>4. Motion Dampening & Accessible Typography</DocH3>
            <DocList
                items={[
                    'prefers-reduced-motion: A media query hook that reads operating system accessibility flags. It allows developers to disable, reduce, or substitute flashing or movement transitions that could otherwise cause distress or vestibulocochlear issues for sensitive users.',
                    'Scalable Text Heights (rem / em): Avoid absolute pixel bounds (px) for sizing typography or element containers. Utilizing rem guarantees that when a user increases their default browser font scale, text tracks expand proportionally without breaking containers.'
                ]}
            />

            <DocH2>Production-Grade Accessible CSS Blueprint</DocH2>
            <DocP>
                Below is an advanced accessible styles configuration detailing keyboard focus ring enhancements, screen-reader helper states, motion dampening engines, and forced-colors high-contrast support:
            </DocP>

            <DocH3>1. The Universal Accessibility Layer (accessibility-core.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION ACCESSIBLE ENGINE & INCLUSIVE GRAPHICS
   ======================================================= */

/* A. ACCESSIBLE TYPOGRAPHY DEFAULTS */
.a11y-readable-body {
  font-size: 1rem; /* Scales smoothly based on root browser settings */
  line-height: 1.5; /* Meets WCAG line-height criteria for reading ease */
  color: oklch(0.2 0.01 240); /* High-contrast baseline text */
}

/* B. KEYBOARD-ONLY SEPARATION FOCUS ENGINE */
.a11y-interactive-trigger {
  cursor: pointer;
  background-color: oklch(0.55 0.18 250);
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  
  /* Reset default system blur rings */
  outline: none;
  transition: background-color 200ms ease;
}

/* Standard click interaction state */
.a11y-interactive-trigger:hover {
  background-color: oklch(0.45 0.15 250);
}

/* Highlights the control ONLY when tab-focused via keyboard */
.a11y-interactive-trigger:focus-visible {
  outline: 3px solid oklch(0.65 0.2 200);
  outline-offset: 4px; /* Spaces the indicator out for crisp visibility */
}

/* C. SCREEN READER UTILITY COMPARTMENT (SR-ONLY) */
.u-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* D. ENVIRONMENT MOTION DAMPENING */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* E. SYSTEM HIGH-CONTRAST OVERRIDES MAPPING */
@media (forced-colors: active) {
  .a11y-interactive-trigger {
    /* Explicitly forces standard high-contrast system coloring keywords */
    border: 2px solid ButtonText;
    background-color: ButtonFace;
    color: ButtonText;
  }
  
  .a11y-interactive-trigger:focus-visible {
    outline: 2px dashed Highlight;
  }
}`}
            />

            <DocH3>2. Layout Implementation View (AccessibilityWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './accessibility-core.css';

export default function AccessibilityWorkspaceView() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-6 max-w-xl mx-auto a11y-readable-body">
      
      <header>
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Inclusive Pipeline Control
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          This panel implements full keyboard navigation focus rings, motion dampening hooks, and high-contrast styling layers.
        </p>
      </header>

      {/* Accessible Interface Card Element */}
      <section className="p-6 border border-gray-200 rounded-xl bg-gray-50/50 space-y-4">
        <h3 className="text-base font-bold text-gray-900">System Telemetry Module</h3>
        <p className="text-sm text-gray-700">
          Press the <kbd className="bg-white border px-1.5 py-0.5 rounded shadow-sm font-mono text-xs font-bold">Tab</kbd> key to focus the action button below and verify the keyboard focus ring alignment.
        </p>

        <div>
          <button type="button" className="a11y-interactive-trigger text-sm">
            Execute Core Purge
            {/* Screen reader only descriptive text block providing context */}
            <span className="u-sr-only"> (Warning: This action permanently clears all network tracking buffers)</span>
          </button>
        </div>
      </section>

    </div>
  );
}`}
            />
        </>
    );
}