import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSOverflowDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Overflow Mechanics & Box Containment Engines</DocTitle>

            <DocP>
                The CSS overflow subsystem dictates how a browser's layout engine handles content that exceeds the physical boundary dimensions of its parent container box. When child elements or text strings outgrow their structural boundaries, the overflow engine determines whether to clip the content, display scrollbars, or let it bleed into neighboring layouts.
            </DocP>

            <DocH2>Overflow Property Taxonomy Matrix</DocH2>

            <DocH3>1. Bounding Axes Controls</DocH3>
            <DocList
                items={[
                    'overflow Shorthand: Configures both horizontal and vertical clipping parameters simultaneously. Passing a single value sets both axes uniformly; passing two space-separated values applies the first to the horizontal plane and the second to the vertical plane.',
                    'overflow-x & overflow-y: Provides independent, isolated mapping for specific axes. For instance, you can allow vertical document scrolling while completely locking down horizontal overflow sweeps.'
                ]}
            />



            <DocH3>2. Operational Values & Rendering Behaviors</DocH3>
            <DocList
                items={[
                    'visible: The default user-agent behavior. Content that outgrows its container renders completely outside the element\'s boundary lines. It does not alter the container\'s layout footprint or affect neighboring blocks, often leading to visual overlapping bugs.',
                    'hidden: Content that exceeds the boundary box lines is completely truncated and hidden from view. The container generates no scrollbars, and users cannot access the hidden data via standard mouse interaction paths.',
                    'scroll: Forces the browser engine to draw both horizontal and vertical scrollbars, regardless of whether the content actually overflows the container boundaries. This guarantees fixed, predictable element geometry but can introduce empty scrollbar footprints.',
                    'auto: A smart container approach. The browser engine monitors content dimensions dynamically and displays scrollbars only if the child assets physically exceed the parent container boundaries.',
                    'clip: Similar to hidden, content is hard-truncated at the element\'s boundary box. However, clip completely forbids programmatic scrolling via JavaScript APIs (like scrollTo()) and creates a strict rendering boundary that completely bypasses the browser\'s internal layout scroll mechanics.'
                ]}
            />

            <DocH2>Production Box Containment Blueprint</DocH2>
            <DocP>
                Below is a production-grade layout architecture demonstrating independent axes management, modern custom scrollbar stylings, and robust containment blocks that prevent layout breaks:
            </DocP>

            <DocH3>1. The Performance Scroll Containment Sheet (overflow-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION HIGH-PERFORMANCE OVERFLOW CONTAINMENT
   ======================================================= */

/* A. DYNAMIC HORIZONTAL SCROLL COMPONENT (e.g., Code Blocks, Data Tables) */
.horizontal-scroll-hub {
  /* Restricts vertical shifting while opening horizontal scroll vectors */
  overflow-x: auto;
  overflow-y: hidden;
  
  width: 100%;
  background-color: oklch(0.15 0.02 240);
  border: 1px solid oklch(0.25 0.02 240);
  border-radius: 8px;
  padding: 16px;
  
  /* Modern Webkit Scrollbar Customizations */
  &::-webkit-scrollbar {
    height: 6px; /* Horizontal scrollbar thickness track */
  }
  &::-webkit-scrollbar-track {
    background: oklch(0.12 0.01 240);
  }
  &::-webkit-scrollbar-thumb {
    background: oklch(0.35 0.02 240);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: oklch(0.45 0.02 240);
  }
}

/* B. BALANCED VERTICAL TELEMETRY MONITOR */
.vertical-scroll-monitor {
  width: 100%;
  height: 200px; /* Explicit height boundary sets the overflow ceiling */
  
  /* Locks the horizontal axis while enabling vertical scrolling */
  overflow-x: hidden;
  overflow-y: auto;
  
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
}

/* C. STRICT VISUAL TRUNCATION BOX */
.secure-containment-shield {
  width: 100%;
  /* Hard truncation across both axes ensures no visual leakage */
  overflow: hidden; 
  
  background-color: oklch(0.98 0.01 50);
  border-left: 4px solid oklch(0.65 0.15 50);
  padding: 12px 16px;
  border-radius: 0 8px 8px 0;
}`}
            />

            <DocH3>2. Layout Implementation View (OverflowSandboxWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './overflow-engine.css';

export default function OverflowSandboxWorkspace() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      
      {/* 1. Independent Horizontal Scroll Track */}
      <div>
        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1 font-bold">Data Stream Output</span>
        <div className="horizontal-scroll-hub">
          <code className="text-emerald-400 text-xs whitespace-nowrap">
            const initializeCluster = async (nodeId) =&gt; &#123; return await fetch(\`https://api.core.network/v2/telemetry/nodes/\${nodeId}/handshake\` confirmation: true) &#125;;
          </code>
        </div>
      </div>

      {/* 2. Controlled Vertical Container Layout */}
      <div>
        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1 font-bold">System Log Feeds</span>
        <div className="vertical-scroll-monitor space-y-3">
          <div className="p-2 bg-gray-50 border rounded text-xs">[2026-07-11 19:58] System core heartbeat status verified active.</div>
          <div className="p-2 bg-gray-50 border rounded text-xs">[2026-07-11 19:59] Database handshake pipeline resolved.</div>
          <div className="p-2 bg-gray-50 border rounded text-xs">[2026-07-11 20:00] Router connection initialized on socket port 443.</div>
          <div className="p-2 bg-gray-50 border rounded text-xs">[2026-07-11 20:01] Broadcast channels mounted to structural grid nodes.</div>
        </div>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}