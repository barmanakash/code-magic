import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSWidthHeightDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Sizing Bounds & Aspect Ratio Mechanics</DocTitle>

            <DocP>
                CSS dimension properties define the physical or fluid extent of an element box across horizontal and vertical axes. By combining absolute constraints with min/max safety limits and automated geometric aspect ratios, developers can build resilient containers that prevent layout distortion and overflow bugs under dynamic content shifts.
            </DocP>

            <DocH2>Dimension Boundaries Property Matrix</DocH2>

            <DocH3>1. Spatial Extents & Safety Bounding Constraints</DocH3>
            <DocList
                items={[
                    'width & height: Declares the target base sizing of the element box. Can be expressed as absolute values (px), relative parent fractions (%), or viewport steps (vw, vh).',
                    'max-width & max-height: Imposes a strict sizing ceiling. The element can scale down fluidly to fit tight viewports but is forbidden from expanding past this defined maximum threshold. This is critical for preventing content overflow on large monitors.',
                    'min-width & min-height: Guarantees a structural floor. Regardless of how squished the surrounding layout context becomes, the container preserves this baseline dimension, protecting embedded UI data elements from overlapping or clipping out of view.'
                ]}
            />



            <DocH3>2. Native Geometric Locking</DocH3>
            <DocList
                items={[
                    'aspect-ratio: A modern declarative layout feature that locks the element\'s structural width-to-height ratio (e.g., aspect-ratio: 16 / 9;). By computing the dependent dimension automatically based on a single defined axis, it eliminates legacy hack approaches—like using padding-top percentages—and simplifies the handling of media cards and camera video portals.'
                ]}
            />

            <DocH2>Production Responsive Dimension Controls</DocH2>
            <DocP>
                Below is a production-ready template demonstrating how to safeguard a fluid grid system using explicit min/max sizing limits, adaptive card bounds, and responsive media placeholders:
            </DocP>

            <DocH3>1. The Dimensional Bounds Sheet (dimensions-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION STRUCTURAL BOUNDS ARCHITECTURE
   ======================================================= */
:root {
  --canvas-max-limit: 1200px;
  --card-ideal-width: 100%;
}

/* WORKSPACE PORTAL CONTAINER */
.app-viewport-stage {
  width: 100%;
  /* Caps structural content width to prevent extreme stretching on ultra-wide screens */
  max-width: var(--canvas-max-limit); 
  margin: 0 auto;
  padding: 24px;
}

/* RESPONSIBLE METRIC CARD HUD */
.fluid-telemetry-panel {
  /* Box scales naturally to span 100% of available space... */
  width: var(--card-ideal-width);
  /* ...but is rigidly restricted from squishing past 280px or blowing past 450px */
  min-width: 280px;
  max-width: 450px;
  
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
}

/* PERFORMANCE MEDIA STREAM HOOK */
.video-preview-canvas {
  width: 100%;
  /* Modern declarative ratio locking prevents layout shifts (CLS) 
     while assets stream into the viewport frame */
  aspect-ratio: 16 / 9; 
  
  background-color: oklch(0.15 0.02 240);
  border-radius: 6px;
  object-fit: cover; /* Keeps imagery un-distorted during active container scaling */
}

.panel-content-wrap {
  /* Guarantees sufficient height space for text data blocks, 
     expanding natively if text translations require extra lines */
  min-height: 80px;
  margin-top: 16px;
}`}
            />

            <DocH3>2. Layout Implementation View (DimensionsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './dimensions-engine.css';

export default function DimensionsWorkspace() {
  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <div className="app-viewport-stage">
        
        {/* Dynamic component enforcing explicit safety dimensions and geometric rules */}
        <section className="fluid-telemetry-panel">
          <header className="video-preview-canvas flex items-center justify-center text-gray-500 text-xs">
            {/* Aspect-ratio automatically calculates the height profile based on parent width */}
            <span>[Active Hardware Video Stream 16:9]</span>
          </header>
          
          <div className="panel-content-wrap">
            <h4 className="text-sm font-bold text-gray-800 mb-1">Node Analytics Monitor</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              This card interface uses min/max thresholds to keep layout content readable and safe from visual text breaking across both mobile and desktop views.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}`}
            />
        </>
    );
}