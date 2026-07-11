import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSPositioningDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Advanced CSS Positioning & The Stacking Engine</DocTitle>

            <DocP>
                The CSS positioning subsystem allows developers to break elements out of the normal document layout flow. By altering positioning contexts, mapping directional offsets, and managing z-axis stacking orders, you can orchestrate complex UI layers—including sticky headers, context menus, modal overlays, and parallax backgrounds.
            </DocP>

            <DocH2>Positioning Scheme Taxonomy Matrix</DocH2>

            <DocH3>1. Core Positioning Primitives</DocH3>
            <DocList
                items={[
                    'static: The default layout mode for every DOM element. Nodes render strictly within the normal document layout flow based on block/inline rules. Directional offsets (top, right, bottom, left) and z-index declarations are completely ignored.',
                    'relative: The element is positioned according to the normal document flow, but then shifted relative to its original self based on offset coordinates. Crucially, the empty footprint it leaves behind remains fully preserved in the normal layout flow, preventing neighboring layout elements from shifting.',
                    'absolute: The element is completely yanked out of the normal layout flow, taking up zero space. It positions itself relative to its closest ancestor that has a position value other than static. If no positioned ancestor exists, it anchors itself against the initial root viewport container.',
                    'fixed: Completely removed from the normal layout flow and anchored directly relative to the main browser viewport coordinate system. It remains locked in place even when the user scrolls the page.',
                    'sticky: A highly powerful hybrid layout engine. The element behaves like a static/relative item in the normal document flow until its container boundaries hit a defined offset threshold (e.g., top: 0;), at which point it locks into a fixed layout position until it reaches the end of its parent container.'
                ]}
            />



            <DocH3>2. Coordinate Shorthand System</DocH3>
            <DocList
                items={[
                    'inset: A logical shorthand property that configures top, right, bottom, and left coordinates simultaneously in a single line (e.g., inset: 0; maps top/right/bottom/left to 0, which is perfect for full-size absolute layer overlays).'
                ]}
            />

            <DocH2>The Z-Axis & Stacking Context Mechanics</DocH2>
            <DocP>
                The <code>z-index</code> property controls the layer order of elements along the z-axis, but it does not operate in a single global workspace. Instead, elements are scoped within localized <strong>Stacking Contexts</strong>.
            </DocP>



            <DocH3>How Stacking Contexts are Instantiated</DocH3>
            <DocP>
                A completely independent stacking context layer group is spawned when an element satisfies conditions such as:
            </DocP>
            <DocList
                items={[
                    'Being a positioned element (relative/absolute) paired with a numerical z-index value other than auto.',
                    'Elements configured with a position mode of fixed or sticky.',
                    'Elements utilizing opacity values strictly less than 1.',
                    'Containers with advanced visual rules applied, such as mix-blend-mode, transform, filter, or will-change.'
                ]}
            />
            <blockquote>
                <strong>Critical Stacking Trap:</strong> If Parent Container A has a computed <code>z-index: 1</code> and Parent Container B has a computed <code>z-index: 2</code>, a child inside Container A with <code>z-index: 9999</code> can never render on top of Container B. This occurs because the child is locked inside Container A's localized hierarchy layer group.
            </blockquote>

            <DocH2>Production Layered Interface Blueprint</DocH2>
            <DocP>
                Below is a production-grade layout architecture demonstrating sticky header pinning, relative container coordinate roots, absolute badge overlays, and isolated z-index stacking layers:
            </DocP>

            <DocH3>1. The Layered Layout Engine Sheet (positioning.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION HIGH-PERFORMANCE POSITIONING ARCHITECTURE
   ======================================================= */

/* A. INDEPENDENT ROOT LAYER GROUP GENERATION */
.workspace-stack-root {
  position: relative;
  z-index: 10; /* Establishes a strict, isolated stacking context container */
}

/* B. PINNED ACCESSIBLE STICKY NAVIGATION HEADER */
.sticky-control-bar {
  position: sticky;
  top: 0; /* Pins layout to the absolute top edge of the scrolling boundary */
  z-index: 100; /* Guarantees header stays on top of internal scrolling content */
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px); /* Modern blur overlay */
  border-bottom: 1px solid oklch(0.9 0.01 240);
}

/* C. COORDINATE ROOT ANCHOR CONTAINER */
.telemetry-card-anchor {
  position: relative; /* Acts as the coordinate system root for any absolute children */
  
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
}

/* D. ABSOLUTE TARGET BADGE OVERLAY */
.absolute-status-badge {
  position: absolute;
  
  /* Positions badge precisely relative to the card's top-right corner padding boundaries */
  top: -10px;
  right: 12px;
  z-index: 5; /* Stacked cleanly on top of the parent card background surface */

  padding: 4px 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  color: #ffffff;
  background-color: oklch(0.6 0.2 140);
  border-radius: 6px;
  text-transform: uppercase;
}

/* E. FULL MODAL BACKDROP VIA INSET SHORTHAND */
.fullscreen-overlay-mask {
  position: fixed;
  /* Replaces traditional top:0; right:0; bottom:0; left:0; */
  inset: 0; 
  z-index: 9999; /* Ultimate top-level application stack depth priority */
  
  background-color: rgb(15 23 42 / 0.6);
  backdrop-filter: blur(4px);
}`}
            />

            <DocH3>2. Layout Implementation View (PositioningWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';
import './positioning.css';

export default function PositioningWorkspaceView() {
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  return (
    <div className="workspace-stack-root min-h-screen bg-gray-50">
      
      {/* Pinned application navigation bar */}
      <header className="sticky-control-bar">
        <span className="text-xs font-bold text-gray-800">Cluster Core Studio</span>
        <button 
          onClick={() => setIsAlertVisible(true)}
          className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-gray-800"
        >
          Trigger Alert Mask
        </button>
      </header>

      {/* Main content scroll container */}
      <main className="max-w-md mx-auto mt-12 p-4">
        <div className="telemetry-card-anchor">
          {/* Absolute child matching coordinates with the relative parent node framework */}
          <span className="absolute-status-badge">Operational</span>
          
          <h4 className="text-sm font-bold text-gray-800 mb-2">Isolated Stacking Context Node</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            This element provides a stable bounding framework, forcing child components to lock seamlessly into coordinate alignment layers without breaking layout templates.
          </p>
        </div>
      </main>

      {/* Conditional portal layer utilizing viewport position tracking */}
      {isAlertVisible && (
        <div 
          className="fullscreen-overlay-mask flex items-center justify-center"
          onClick={() => setIsAlertVisible(false)}
        >
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs text-center">
            <h5 className="text-sm font-bold text-gray-900 mb-1">System Signal Broadcast</h5>
            <p className="text-xs text-gray-500 mb-4">Fixed position backdrop completely isolates layout interactivity trees.</p>
            <button className="text-xs text-red-500 font-semibold" onClick={() => setIsAlertVisible(false)}>
              Dismiss Portal
            </button>
          </div>
        </div>
      )}

    </div>
  );
}`}
            />
        </>
    );
}