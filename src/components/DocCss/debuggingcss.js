import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSDebuggingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Debugging, Runtime Auditing & Box Profiling</DocTitle>

            <DocP>
                Debugging CSS requires a deep understanding of browser rendering engines, the Cascade, layout calculation systems, and browser developer tool suites. Visual issues—such as layout shifting, specificity overrides, hidden overflows, and compositing delays—cannot be resolved by raw code inspections alone. Instead, developers must leverage active DOM state inspection panels, real-time computed value tracking, layout overlays, and performance profiling tracks to diagnose and fix display issues.
            </DocP>

            <DocH2>DevTools Inspection & Layout Framework Matrices</DocH2>

            <DocH3>1. Core DOM Inspection & Cascading Overrides</DocH3>
            <DocList
                items={[
                    'Inspect Element: The primary entry point for visual debugging. Right-clicking a DOM node opens its live tree representation, displaying active CSS class match states, inline template styles, and style rules in order of cascade precedence.',
                    'Styles Panel Override Map: Displays all CSS rules matching the active element, ordered by specificity weight. Overridden or invalid declarations are struck through, allowing developers to quickly identify where cascade conflicts or inheritance loops are causing bugs.',
                    'Computed Styles Tracking Panel: Displays the final, resolved absolute pixel calculations calculated by the browser rendering engine, stripping away relative units like <code>rem</code>, <code>em</code>, or <code>%</code>. This is critical for auditing inherited fonts, line heights, or color spaces.'
                ]}
            />



            <DocH3>2. Layout Panels & Grid/Flexbox Overlays</DocH3>
            <DocList
                items={[
                    'Chrome & Firefox Layout Panels: Central hubs for analyzing complex structural layout systems on the page. They map out all active CSS Grid and Flexbox structures, providing toggle switches to overlay track lines, area names, and gap boundaries directly onto the visual viewport.',
                    'Box Model Graphic: A classic visual diagram in the DevTools sidebar that maps out an element\'s exact physical dimensions, broken down by content core, padding, border boundaries, and margin offsets.',
                    'Firefox Flexbox Inspector: Includes unique debugging indicators that point out exactly why a flex child shrank or expanded, tracking parameters like <code>flex-basis</code> minimum thresholds and container sizing constraints.'
                ]}
            />



            <DocH3>3. Runtime Performance Profiling & Layout Thrashing</DocH3>
            <DocList
                items={[
                    'Performance Panel (Timeline Profiling): Captures runtime execution blocks to audit frames-per-second (FPS) stability, layout invalidation flags, paint boundaries, and composite steps. This is the primary tool for identifying stuttering scroll animations or laggy transitions.',
                    'Layout Thrashing (Forced Synchronous Layout): Occurs when JavaScript changes a style property and immediately requests a geometric layout value (e.g., calling <code>element.offsetHeight</code>) within the same frame cycle. This forces the browser to recalculate layouts prematurely, hurting performance.',
                    'Rendering Overlays: Developer tools provide diagnostic color highlights to show layout activity in real time. Toggling "Paint Flashing" outlines areas the browser is actively repainting in green, helping developers ensure that scrolling animations rely on cheap GPU compositing layers (like transforms) rather than expensive repaints.'
                ]}
            />

            <DocH2>Production Diagnostic Debugging Sandbox</DocH2>
            <DocP>
                Below is a production-tier component playground designed with intentional debugging puzzles—including hidden layout overflows, text clipping challenges, and forced composite layers to test DevTools inspections:
            </DocP>

            <DocH3>1. The Telemetry Sandbox Diagnostic Styles (debugging-workspace.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION DIAGNOSTIC TEST SHEET & BUG TRAPS
   ======================================================= */

/* A. BASE BOX-SIZING RESET COMPARTMENT */
.debug-sandbox-root {
  box-sizing: border-box;
  width: 100%;
  max-width: 360px;
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 16px;
  padding: 24px;
}

/* B. INTENTIONAL FLEXBOX STRUCURAL CONSTRAINTS FOR INSPECTION 
   Open the Layout Panel to track active gap and flex-shrink tracks */
.debug-flex-container {
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: oklch(0.98 0.005 240);
  padding: 12px;
  border-radius: 8px;
  
  /* Prevent child elements from wrapping to force clipping testing */
  flex-wrap: nowrap;
}

/* C. THE INVISIBLE OVERFLOW TEXT CLIP BUG 
   Audit the Computed Styles panel to verify how width boundaries 
   and flex-shrink factors interact on this element */
.debug-clipping-payload {
  font-family: monospace;
  font-size: 11px;
  color: oklch(0.4 0.02 240);
  
  /* Bug scenario: Without min-width: 0 or an explicit width anchor, 
     long text strings can break out of flex container parents */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* D. HIGH-PERFORMANCE GPU COMPOSITING MATRIX 
   Toggling "Paint Flashing" verifies that this animation stays 
   on its own hardware layer without triggering constant repaints */
.debug-hardware-node {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: oklch(0.62 0.17 150);
  
  /* Marks layer boundaries explicitly for browser compositing engines */
  will-change: transform;
  
  animation: debugPulse 2s infinite linear;
}

@keyframes debugPulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.4; }
  100% { transform: scale(1); opacity: 1; }
}`}
            />

            <DocH3>2. Layout Implementation View (DebuggingWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './debugging-workspace.css';

export default function DebuggingWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6">
      
      <header className="text-center max-w-xs text-xs">
        <h3 className="font-bold text-gray-900 text-sm">DevTools Debugging Lab</h3>
        <p className="text-gray-500 mt-1">
          Right-click this card and select <strong>Inspect Element</strong> to analyze its box metrics, flex values, and composite layers.
        </p>
      </header>

      {/* Target Diagnostic Sandbox Card */}
      <article className="debug-sandbox-root shadow-sm text-xs space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            Live DOM Node
          </span>
          {/* Active GPU accelerated flashing pulse circle */}
          <div className="debug-hardware-node" title="GPU Layer Active" />
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-1">Telemetry Layout Stream</h4>
          <p className="text-gray-500 leading-relaxed">
            Use the Computed tab to view the absolute pixel dimensions of this element's margins, borders, and padding.
          </p>
        </div>

        {/* Flex layout container element trap */}
        <div className="debug-flex-container border">
          <span className="shrink-0 bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
            DATA_REF
          </span>
          
          {/* Text block demonstrating overflow clipping strategies inside flexbox layouts */}
          <p className="debug-clipping-payload">
            hex_stream_payload_chunk_id_secure_authentication_hash_alpha_node_verify
          </p>
        </div>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}