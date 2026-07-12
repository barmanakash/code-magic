import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSFrameworksDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Framework Ecosystems & UI Paradigms</DocTitle>

            <DocP>
                CSS Frameworks provide abstract layout grids, pre-compiled UI components, responsive utilities, and structural baselines to accelerate user interface development. The ecosystem is split into two primary architectures: <strong>Component-Based Frameworks</strong>, which offer fully styled visual elements out of the box, and <strong>Utility-First Engines</strong>, which provide low-level atomic building blocks to compose custom interfaces directly inside the markup.
            </DocP>

            <DocH2>The Framework Paradigm Matrix</DocH2>

            <DocH3>1. Heavy Component-Driven Paradigms</DocH3>
            <DocList
                items={[
                    'Bootstrap: The industry-pioneering, feature-complete UI framework built on a responsive 12-column Flexbox grid layout system. It relies heavily on a large catalog of predefined semantic component classes (e.g., .btn, .modal, .card) and JavaScript plugins for interactive state machines.',
                    'Foundation: An enterprise-grade, semantic-first responsive framework. It provides deep design customization flexibility, allowing engineers to write layout structures via Sass mixins without cluttering markup with presentation classes.',
                    'Bulma: A clean, lightweight component ecosystem based purely on modern CSS Flexbox parameters. It utilizes highly readable semantic class naming tracks (e.g., .button is-primary is-large) and does not bundle any JavaScript dependencies.',
                    'Materialize: A responsive framework engineered to implement Google\'s structured Material Design visual language system, providing native card surfaces, ink ripple effects, and Z-axis floating depth shadows.'
                ]}
            />



            <DocH3>2. Low-Level Atomic & Minimalist Engines</DocH3>
            <DocList
                items={[
                    'Tailwind CSS: A utility-first CSS engine that completely shifts focus away from pre-designed components. It provides a dense matrix of single-purpose utility primitives (e.g., flex, pt-4, shadow-sm, text-center) that compile via a JIT (Just-In-Time) compiler to emit exactly the CSS used in production code paths.',
                    'Pure.css: A minimalist, modular collection of small CSS files crafted by Yahoo. It features a tiny footprint (~3.7KB gzipped), making it ideal for mobile apps or resource-constrained embedded browser systems.',
                    'Skeleton: A dead-simple, zero-dependency Boilerplate grid framework that includes basic button structures, forms, and typography styles designed strictly as a lightweight canvas foundation for micro-projects.'
                ]}
            />

            <DocH2>Production Framework Architectural Blueprint</DocH2>
            <DocP>
                Below is an advanced implementation layout demonstrating a unified user interface element built using two contrasting architectural methods: traditional **Semantic Component Styling** versus **Utility-First Multi-Class Composition**:
            </DocP>

            <DocH3>1. The Paradigm Separation Sheet (frameworks-mesh.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION FRAMEWORK COMPARISON WORKSPACE LAYER
   ======================================================= */

/* APPROACH A: CLASSIC BOOTSTRAP/BULMA INSPIRED SEMANTIC PATTERN */
.ui-component-card {
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.ui-component-card__badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: oklch(0.95 0.03 250);
  color: oklch(0.55 0.18 250);
  padding: 2px 8px;
  border-radius: 4px;
}

.ui-component-card__cta {
  background-color: oklch(0.55 0.18 250);
  color: #ffffff;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.ui-component-card__cta:hover {
  opacity: 0.9;
}`}
            />

            <DocH3>2. Layout Implementation View (FrameworksWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './frameworks-mesh.css';

export default function FrameworksWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-center gap-8 text-xs">
      
      {/* Target Module A: Structured via Pre-Defined Component Classes */}
      <div className="w-full max-w-xs">
        <h4 className="font-mono text-gray-400 mb-2">Approach A: Component Class Model</h4>
        <article className="ui-component-card">
          <span className="ui-component-card__badge">Framework Node</span>
          <h3 className="text-sm font-bold text-gray-900 mt-2 mb-1">Semantic Layer Core</h3>
          <p className="text-gray-500 leading-relaxed mb-4">
            Encapsulates presentation styles inside clean, high-level semantic class names to isolate layout logic.
          </p>
          <button className="ui-component-card__cta">Dispatch Routine</button>
        </article>
      </div>

      {/* Target Module B: Structured via Atomic Utility-First Primitives (Tailwind Model) */}
      <div className="w-full max-w-xs">
        <h4 className="font-mono text-gray-400 mb-2">Approach B: Utility-First Composited Model</h4>
        <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
            Utility Engine
          </span>
          <h3 className="text-sm font-bold text-gray-900 mt-2 mb-1">Atomic Composition</h3>
          <p className="text-gray-500 leading-relaxed mb-4">
            Composes layouts on the fly by combining granular single-purpose styles directly within the component markup.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Dispatch Routine
          </button>
        </article>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}