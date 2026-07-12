import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSModernFeaturesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Next-Gen Modern CSS Engines & APIs</DocTitle>

            <DocP>
                Modern CSS features have evolved from a simple styling sheet system into an advanced layout, structural scoping, and timeline animation platform. With native nesting, explicit architectural layering, parent-relational matching, and high-performance scroll interpolation, developers can build complex visual experiences natively in the browser without relying on heavy JavaScript workarounds.
            </DocP>

            <DocH2>Advanced Structure & Selector Scoping Matrix</DocH2>

            <DocH3>1. Native Nesting & Cascade Layers</DocH3>
            <DocList
                items={[
                    'Native CSS Nesting: Allows child rules to be nested directly inside parent style blocks, mirroring the nesting behavior of preprocessors like Sass while parsing natively in the browser engine.',
                    '@layer (Cascade Layers): Establishes explicit specificity buckets, allowing developers to control the exact cascade order of styles regardless of their declaration order or selector weight. This completely resolves the problem of third-party libraries unintentionally overriding application-specific styles.'
                ]}
            />



            <DocH3>2. Logical & Relational Matchers</DocH3>
            <DocList
                items={[
                    ':has() (The Parent Selector): A relational pseudo-class that matches an element if any of its descendants pass a given selector criteria. It enables styling parent containers based on their child states (e.g., card:has(img) or form:has(:invalid)), which previously required JavaScript logic.',
                    ':is() vs. :where(): Functional matchers that simplify long, comma-separated selector lists. While :is() adopts the specificity of its heaviest matching argument, :where() drops its selector specificity completely to zero ($0,0,0$), making it ideal for writing safe style overrides.'
                ]}
            />

            <DocH2>High-Performance Layouts & Motion APIs</DocH2>

            <DocH3>1. Subgrid Alignment & Scroll Control</DocH3>
            <DocList
                items={[
                    'grid-template-columns: subgrid: Instructs a nested child grid element to inherit and align directly to the structural track lines of its parent grid container. This guarantees perfect cross-component column alignments for asymmetric dynamic data sets.',
                    'Scroll Snap: Creates precise scroll-locking behavior by pairing container settings (scroll-snap-type: y mandatory;) with child targets (scroll-snap-align: start;). This is highly effective for building fullscreen sliders and touch-friendly mobile carousels.'
                ]}
            />



            <DocH3>2. Next-Gen Animation Workspaces</DocH3>
            <DocList
                items={[
                    'Scroll-driven Animations: Binds custom keyframe timelines directly to a container\'s scroll tracking progress using animation-timeline: scroll();, eliminating the need for expensive scroll event listeners in JavaScript.',
                    'View Transitions API: Enables animated page transitions across different view states. The browser takes live visual snapshots of the active DOM states and smoothly morphs the layout between screens automatically.'
                ]}
            />

            <DocH2>Production Advanced Features Workspace Blueprint</DocH2>
            <DocP>
                Below is a production-grade template implementing cascade layers, native element nesting, relational parent targeting, scroll-snap sliders, and scroll-progress tracking bars:
            </DocP>

            <DocH3>1. The Next-Gen Engine Module Sheet (modern-features.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION ADVANCED NEXT-GEN MODERN CSS ARCHITECTURE
   ======================================================= */

/* A. CASCADE LAYER DECLARATIONS
   Explicitly forces the architectural evaluation sequence hierarchy */
@layer framework, components, utilities;

@layer framework {
  /* Lowest specificity priority layer */
  .modern-workspace-canvas {
    background-color: oklch(0.99 0.005 240);
    color: oklch(0.2 0.02 240);
  }
}

@layer components {
  /* B. NATIVE NESTING & RELATIONAL ENGINES MODULE */
  .c-interactive-node {
    background-color: #ffffff;
    border: 1px solid oklch(0.9 0.01 240);
    border-radius: 16px;
    padding: 24px;
    transition: border-color 0.2s ease;

    /* Native nesting block */
    .node-header {
      font-size: 0.9rem;
      font-weight: 700;
    }

    /* C. THE POWERFUL :has() RELATIONAL STATE TRIGGER 
       Modifies the border layout theme if a child checkbox is checked */
    &:has(input[type="checkbox"]:checked) {
      border-color: oklch(0.55 0.18 250);
      background-color: oklch(0.98 0.005 250);
    }
  }

  /* D. HIGH-PERFORMANCE SCROLL-SNAP CONTAINER */
  .scroll-snap-carousel {
    display: flex;
    overflow-x: auto;
    /* Forces strict horizontal alignment alignment locking */
    scroll-snap-type: x mandatory;
    gap: 16px;
    padding: 16px 0;
    scrollbar-width: none; /* Strips scrollbars */
    
    .carousel-item {
      flex: 0 0 85%;
      scroll-snap-align: center; /* Locks item center point to view focus */
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
    }
  }

  /* E. NATIVE SCROLL-DRIVEN ANIMATION TIMELINE TRACK */
  @keyframes trackScrollProgress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  .scroll-progress-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: oklch(0.55 0.18 250);
    transform-origin: left center;
    
    /* Binds keyframe steps natively to the scroll timeline progress hook */
    animation: trackScrollProgress linear both;
    animation-timeline: scroll(root);
  }
}

@layer utilities {
  /* Highest precedence override tracking layer */
  .u-force-visible {
    display: block !important;
  }
}`}
            />

            <DocH3>2. Layout Implementation View (ModernFeaturesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './modern-features.css';

export default function ModernFeaturesWorkspace() {
  return (
    <div className="modern-workspace-canvas min-h-[150vh] p-6 space-y-10 text-xs">
      
      {/* Scroll-driven timeline visual bar anchor */}
      <div className="scroll-progress-indicator" />

      <header className="max-w-md mx-auto pt-6">
        <h2 className="text-base font-bold text-gray-900">Next-Gen Native UI Interface</h2>
        <p className="text-gray-500 mt-1">Scroll the page down to view the native scroll-driven header indicator progress bar bar.</p>
      </header>

      {/* Relational selector testing sandbox */}
      <section className="max-w-md mx-auto">
        <div className="c-interactive-node shadow-sm">
          <h3 className="node-header text-gray-900 mb-2">Relational Node Engine</h3>
          <p className="text-gray-500 leading-relaxed mb-4">
            Checking the box below triggers a CSS parent rule via <code>:has()</code>, changing this entire card's border tint and background color natively.
          </p>
          <label className="flex items-center gap-2 font-bold cursor-pointer text-blue-600">
            <input type="checkbox" className="w-4 h-4 accent-blue-600" />
            <span>Apply Dynamic Parent Theme</span>
          </label>
        </div>
      </section>

      {/* Scroll Snap Carousel Demonstration */}
      <section className="max-w-md mx-auto">
        <h4 className="font-bold text-gray-700 mb-2">Horizontal Scroll-Snap Slider</h4>
        <div className="scroll-snap-carousel">
          <div className="carousel-item border shadow-sm">
            <span className="font-bold block text-gray-900 mb-1">Telemetry Segment A</span>
            <p className="text-gray-500">Swipe horizontally to snap columns into focus.</p>
          </div>
          <div className="carousel-item border shadow-sm">
            <span className="font-bold block text-gray-900 mb-1">Telemetry Segment B</span>
            <p className="text-gray-500">Snap boundaries compute layout alignment targets accurately.</p>
          </div>
          <div className="carousel-item border shadow-sm">
            <span className="font-bold block text-gray-900 mb-1">Telemetry Segment C</span>
            <p className="text-gray-500">GPU layer transitions keep horizontal movement smooth.</p>
          </div>
        </div>
      </section>

    </div>
  );
}`}
            />
        </>
    );
}