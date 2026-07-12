import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSFunctionsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Mathematical Functions & Value Engines</DocTitle>

            <DocP>
                CSS mathematical and color functions transform static stylesheets into dynamic, programmable computing engines. By evaluating values at runtime directly within the browser, functions like <code>clamp()</code> and <code>calc()</code> enable fluid layouts that scale smoothly between screen thresholds without relying on a barrage of media queries or heavy JavaScript event listeners.
            </DocP>

            <DocH2>Mathematical Layout Engines</DocH2>

            <DocH3>1. Dynamic Arithmetic & Safety Bounding</DocH3>
            <DocList
                items={[
                    'calc(): Performs basic arithmetic operations ($+$, $-$, $*$, $/$) directly inside values. It allows you to mix different structural units seamlessly—such as subtracting fixed pixel dimensions from fluid percentage containers (e.g., width: calc(100% - 32px);).',
                    'min(): Compares a comma-separated list of values and applies the smallest outcome. It acts as an implicit maximum ceiling; for example, width: min(80ch, 100%); guarantees the container expands across fluid viewports but stops exactly at an optimal reading length of 80 characters.',
                    'max(): Evaluates a list of expressions and applies the largest outcome. It establishes a rigid structural minimum floor, preventing text elements or control nodes from shrinking into illegibility on ultra-small screens.'
                ]}
            />

            <DocH3>2. Fluid Value Clamping</DocH3>
            <DocList
                items={[
                    'clamp(): A powerful structural layout shorthand that locks a dynamic value between a defined minimum floor, an ideal fluid value, and a maximum ceiling. It utilizes the formula clamp(MIN, VAL, MAX) and is highly effective for implementing fluid typography and responsive spacing grids.'
                ]}
            />



            <blockquote>
                Computed Output Value=max(MIN,min(VAL,MAX))
            </blockquote>

            <DocH2>Functional Tokens & Resource Mapping</DocH2>

            <DocH3>1. Reference & Structural Resolution</DocH3>
            <DocList
                items={[
                    'var(): Pulls the runtime value of a CSS custom property into an active declaration slot, supporting robust comma-separated fallback safeholds.',
                    'url(): Resolves paths to external binary assets, structural SVGs, raster images, or font formats, binding resource files directly to properties like background-image or mask-image.'
                ]}
            />

            <DocH3>2. Legacy Functional Color Pipelines</DocH3>
            <DocList
                items={[
                    'rgb() / rgba(): Formulates color points by blending Red, Green, and Blue color channels using integers ($0\text{–}255$) or percentages, with optional alpha channels for transparency mapping.',
                    'hsl() / hsla(): Defines colors using human-readable dimensions: Hue (an angle from $0^{\circ}$ to $360^{\circ}$ on the color wheel), Saturation (percentage of gray vs. pure color color), and Lightness (percentage of black vs. white white).'
                ]}
            />

            <DocH2>Production Fluid Sizing & Utility Blueprint</DocH2>
            <DocP>
                Below is a production-grade component stylesheet demonstrating mathematical unit mixing, media query-free fluid typography, and modern functional color spaces:
            </DocP>

            <DocH3>1. The Computational Style Sheet (functions-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION MATHEMATICAL FUNCTIONS & UTILITIES ENGINE
   ======================================================= */

:root {
  --base-spacing: 16px;
  --accent-hue: 250;
  
  /* Modern functional color generation using legacy fallbacks */
  --color-primary: hsl(var(--accent-hue) 85% 55%);
  --color-overlay: rgba(15, 23, 42, 0.06);
}

/* FLUID TYPOGRAPHY CONTAINER 
   Scales smoothly from 1.25rem on small screens to 2.5rem on large viewports */
.fluid-header-node {
  font-size: clamp(1.25rem, 4vw + 0.5rem, 2.5rem);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.2;
}

/* HIGH-PERFORMANCE MATH CONTAINER SETUP */
.computational-workspace-card {
  /* Dynamically leaves a uniform 32px padding boundary on fluid rows */
  width: calc(100% - (var(--base-spacing) * 2));
  
  /* Restricts scaling: grows fluidly but locks between 320px and 640px */
  min-width: 320px;
  max-width: 640px;
  
  /* Combines fluid units with rigid limits to ensure safe margins */
  margin: max(20px, 5vh) auto;
  padding: min(24px, 4vw);
  
  background-color: #ffffff;
  border: 1px solid var(--color-overlay);
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px var(--color-overlay);
}

.decorative-banner-frame {
  width: 100%;
  height: 120px;
  border-radius: 6px;
  
  /* Maps external graphic vectors using structural url functional hooks */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%23f8fafc" width="100" height="100"/><circle fill="%23eff6ff" cx="50" cy="50" r="40"/></svg>');
  background-repeat: repeat;
  
  display: flex;
  align-items: center;
  justify-content: center;
}`}
            />

            <DocH3>2. Layout Implementation View (FunctionsWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './functions-engine.css';

export default function FunctionsWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-4 flex flex-col items-center justify-center">
      
      {/* Container orchestrating mathematical alignment and boundary controls */}
      <section className="computational-workspace-card">
        
        <div className="decorative-banner-frame mb-4">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
            Asset Bound via url()
          </span>
        </div>

        {/* Fluid heading engine adjusting dynamically to viewport widths */}
        <h2 className="fluid-header-node mb-2">
          Fluid Sizing Engine
        </h2>
        
        <p className="text-xs text-slate-500 leading-relaxed">
          This panel combines <code>calc()</code>, <code>min()</code>, <code>max()</code>, and <code>clamp()</code> to construct highly adaptive component layouts that calculate optimal typography scales and spacing footprints completely natively.
        </p>

      </section>

    </div>
  );
}`}
            />
        </>
    );
}