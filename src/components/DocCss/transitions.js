import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSTransitionsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">State Transitions & Timing Engines</DocTitle>

            <DocP>
                CSS transitions provide a declarative way to animate changes to CSS properties. Instead of states snapping instantly when an element modifies an attribute (such as on hover or focus), the transition engine interpolates values over time along a defined mathematical easing curve, generating hardware-accelerated UI animations.
            </DocP>

            <DocH2>Transition Property Subsystem Matrix</DocH2>

            <DocH3>1. Core Timing & Target Controls</DocH3>
            <DocList
                items={[
                    'transition Shorthand: Combines property, duration, timing function, and delay into a single clean declaration line (e.g., transition: background-color 0.2s ease-in-out 0.1s;).',
                    'transition-property: Specifies the precise CSS properties targeted for animated interpolation. Avoid using the blanket all keyword in production as it forces the browser layout engine to monitor every attribute, which can degrade performance.',
                    'transition-duration: Sets the time required to complete the state animation sequence, typically expressed in seconds (s) or milliseconds (ms) (e.g., 200ms).',
                    'transition-delay: Defines an intentional pause between the moment an interaction state triggers and when the interpolation animation begins.'
                ]}
            />



            <DocH3>2. Mathematical Interpolation Easing</DocH3>
            <DocList
                items={[
                    'transition-timing-function: Maps the acceleration profile of the animation over its lifecycle. Common keywords include linear (constant velocity), ease (slow start, fast middle, slow end), ease-in (accelerating), and ease-out (decelerating).',
                    'Cubic Bezier Curves: An advanced functional curve syntax—cubic-bezier(x1, y1, x2, y2)—that defines custom acceleration profiles based on four geometric control coordinates. It allows developers to build bouncy or highly stylized physical simulations that cannot be achieved with standard keywords.'
                ]}
            />



            <DocH2>Performance Optimization & Production Best Practices</DocH2>
            <DocList
                items={[
                    'Animate Composite-Only Properties: Restrict transitions strictly to transform and opacity. These properties bypass the browser\'s expensive Layout and Paint rendering pipelines, executing directly on the GPU for silk-smooth 60fps/120fps animations.',
                    'Avoid Layout Thrashing: Animating structural geometry attributes like width, height, margin, top, or left forces the browser to recalculate the page layout and repaint layers on every frame, which can cause visible stuttering or mobile battery drain.',
                    'Hardware Acceleration Injections: For critical interactive components, you can use the will-change property (e.g., will-change: transform;) to instruct the browser to promote the element to its own GPU layer ahead of time.'
                ]}
            />

            <DocH2>Production High-Performance Interactive Blueprint</DocH2>
            <DocP>
                Below is a production-grade component layout implementing explicit property listings, isolated composite transforms, custom cubic-bezier curves, and hardware acceleration layer promotions:
            </DocP>

            <DocH3>1. The Transitions Module Sheet (transitions-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION HIGH-PERFORMANCE TRANSITION ENGINE
   ======================================================= */

.interactive-action-card {
  width: 100%;
  max-width: 320px;
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  
  /* Promotes the layer to the GPU to optimize performance ahead of interaction */
  will-change: transform, box-shadow;
  
  /* CRITICAL: Explicitly maps individual properties instead of using 'all' */
  transition-property: transform, box-shadow, border-color;
  transition-duration: 300ms;
  /* Custom snapping cubic-bezier profile that overrides standard easing curves */
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* INTERACTION MUTATION STATES */
.interactive-action-card:hover {
  border-color: oklch(0.55 0.18 250);
  /* Safe composite-only transform scaling */
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 12px 20px -8px rgba(2, 132, 199, 0.15);
}

.interactive-action-card:active {
  /* Snaps downward slightly on physical click click */
  transform: translateY(-1px) scale(0.99);
  transition-duration: 80ms; /* Fast response time on click release */
}

/* SUBELEMENT LINK ARROW INTERACTION */
.interactive-action-card .action-vector-arrow {
  display: inline-block;
  margin-left: 6px;
  color: oklch(0.55 0.18 250);
  
  transition: transform 250ms cubic-bezier(0.25, 1, 0.5, 1);
}

.interactive-action-card:hover .action-vector-arrow {
  /* Shifts the arrow icon horizontally without causing a layout repaint */
  transform: translateX(4px);
}`}
            />

            <DocH3>2. Layout Implementation View (TransitionsWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './transitions-engine.css';

export default function TransitionsWorkspaceView() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      
      {/* High-performance hardware accelerated interactive card component */}
      <article className="interactive-action-card shadow-sm">
        <h4 className="text-sm font-bold text-gray-900 mb-1">
          Accelerated Motion Node
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          Hover over this container to see high-performance composite animations driven by a custom cubic-bezier curves engine.
        </p>
        <span className="text-xs font-bold text-blue-600 inline-flex items-center">
          Initialize Pipeline 
          <span className="action-vector-arrow" aria-hidden="true">→</span>
        </span>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}