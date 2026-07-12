import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSAnimationsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Keyframe Animations & Layered Motion Engines</DocTitle>

            <DocP>
                The CSS animation engine enables complex, multi-stage transitions without relying on JavaScript libraries. By binding declarative <code>@keyframes</code> timelines to elements, you can control cyclical motion states, manage timing behaviors, configure fill states, and orchestrate advanced layout behaviors.
            </DocP>

            <DocH2>Animation Property Control Matrix</DocH2>

            <DocH3>1. Timeline & Runtime Properties</DocH3>
            <DocList
                items={[
                    'animation Shorthand: Combines name, duration, timing-function, delay, iteration-count, direction, fill-mode, and play-state into a single statement (e.g., animation: spin 2s linear infinite;).',
                    '@keyframes: Declares the procedural timeline tracking stop frames, using percentage indicators (0% to 100%) or from/to keywords to specify property values at precise points in the loop cycle.',
                    'animation-name: Binds an element to a specific declared @keyframes identifier rule.',
                    'animation-duration: Sets the total runtime length of a single full animation timeline sequence (e.g., 400ms or 3s).',
                    'animation-iteration-count: Sets the total number of times the animation sequence executes. Accepts explicit integers or the infinite keyword for looping animations.'
                ]}
            />



            <DocH3>2. Directionality & Fill State Management</DocH3>
            <DocList
                items={[
                    'animation-direction: Controls the playback trajectory of the timeline loop. Values include normal (loops forward), reverse (plays backward), alternate (swings forward then backward sequentially), and alternate-reverse.',
                    'animation-fill-mode: Configures how styles are applied to the element before the animation begins (during a delay) or after it concludes. This is critical for preventing jarring visual resets:',
                    'none (Default): The element retains its native base properties; animation styles have no effect outside active playback runtime frames.',
                    'forwards: Locks the element into the exact styling state defined at the final keyframe (100% or to) upon sequence completion.',
                    'backwards: Injects the styles from the initial keyframe (0% or from) immediately during an animation-delay period before execution begins.',
                    'both: Applies backwards parameters during the pre-run delay and forwards parameters upon conclusion, ensuring seamless state transitions.',
                    'animation-play-state: Pauses or resumes playback programmatically or via user interactions using running or paused states.'
                ]}
            />

            <DocH2>Performance-Critical Motion Architecture</DocH2>
            <DocList
                items={[
                    'Composite-Only Transforms: To achieve 60fps/120fps mobile fluid animations, limit keyframe properties to scale, translate, rotate, and opacity. These run on the GPU, avoiding expensive layout repaints.',
                    'Accessibility Integration: Always respect user operating system preferences by dampening or disabling flashing animations using prefers-reduced-motion media query hooks.'
                ]}
            />

            <DocH2>Production-Grade Layered Motion Blueprint</DocH2>
            <DocP>
                Below is an advanced animation module implementing custom infinite alternate oscillations, explicit keyframe percentage steps, fill state overrides, and state pausing mechanisms:
            </DocP>

            <DocH3>1. The Keyframe Animation Sheet (animations-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION HIGH-PERFORMANCE ANIMATIONS CONTROLS
   ======================================================= */

/* A. HIGH-PERFORMANCE GPU-ACCELERATED TIMELINE DECLARATION */
@keyframes clusterPulseOscillation {
  0% {
    transform: scale(1) translateY(0);
    filter: drop-shadow(0 4px 6px rgba(2, 132, 199, 0.1));
  }
  50% {
    transform: scale(1.02) translateY(-6px);
    filter: drop-shadow(0 20px 25px rgba(2, 132, 199, 0.25));
  }
  100% {
    transform: scale(1) translateY(0);
    filter: drop-shadow(0 4px 6px rgba(2, 132, 199, 0.1));
  }
}

@keyframes progressLoadStrip {
  from { width: 0%; }
  to { width: 100%; }
}

/* B. APPLICATION CORE MOTION WRAPPER */
.telemetry-pulse-node {
  width: 100%;
  max-width: 340px;
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 16px;
  padding: 24px;
  
  /* --- DETAILED CORE ANIMATION MAP --- */
  animation-name: clusterPulseOscillation;
  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: infinite; /* Infinite execution loop */
  animation-direction: normal;
  animation-fill-mode: both; /* Enforces absolute boundary state retention */
}

/* INTERACTIVE ENGINE PAUSE TRIGGER */
.telemetry-pulse-node:hover {
  /* Freezes the active animation precisely at its current frame on hover */
  animation-play-state: paused;
  border-color: oklch(0.55 0.18 250);
}

/* C. ONE-SHOT LOADING INDICATOR USING FILL MODE */
.system-loading-bar {
  height: 4px;
  background-color: oklch(0.55 0.18 250);
  border-radius: 2px;
  width: 0%;
  
  /* Executes once, staying locked at 100% width on completion via forwards */
  animation: progressLoadStrip 1.5s cubic-bezier(0.65, 0, 0.35, 1) 500ms forwards;
}

/* D. ACCESSIBILITY COMPLIANCE SAFEGUARD */
@media (prefers-reduced-motion: reduce) {
  .telemetry-pulse-node {
    animation: none !important;
    transform: none !important;
  }
  .system-loading-bar {
    transition: none !important;
    animation: none !important;
    width: 100% !important;
  }
}`}
            />

            <DocH3>2. Layout Implementation View (AnimationsSandboxWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './animations-engine.css';

export default function AnimationsSandboxWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center p-6 space-y-6">
      
      {/* Infinite loop pulse card that pauses on mouse interaction */}
      <article className="telemetry-pulse-node shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
            Live Stream Node
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        
        <h4 className="text-sm font-bold text-gray-900 mb-1">
          GPU Floating Telemetry Mesh
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          Hover over this container to activate animation-play-state overrides, pausing the runtime keyframe interpolation stream on the spot.
        </p>

        {/* Procedural single-shot progress meter using animation-fill-mode */}
        <div className="w-full bg-gray-100 rounded-full h-1 overflow-hidden">
          <div className="system-loading-bar" />
        </div>
        <span className="text-[9px] text-gray-400 mt-1.5 block text-right font-mono">
          Handshake Buffer Pipeline
        </span>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}