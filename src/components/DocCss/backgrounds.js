import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSBackgroundsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Background Mechanics & Layering Engines</DocTitle>

            <DocP>
                The CSS background rendering engine controls how solid fills, complex gradients, multi-layered images, and procedurally generated textures render across element boundaries. Designing performance-optimized backgrounds requires a solid grasp of container clipping masks, positioning grids, attachment scrolls, and dynamic rendering layers.
            </DocP>

            <DocH2>Background Property Taxonomy Matrix</DocH2>

            <DocH3>1. Spatial Positioning & Sizing Primitives</DocH3>
            <DocList
                items={[
                    'background-color: Declares a solid color fill across the container\'s active coordinate plane.',
                    'background-image: References asset paths via url() wrappers, linear/radial/conic gradient algorithms, or raw mathematical procedural patterns.',
                    'background-repeat: Dictates tile repeating mechanics (repeat, no-repeat, repeat-x, repeat-y, space, round). The round value automatically stretches or shrinks tiled graphics to avoid partial clipping layout defects.',
                    'background-size: Sets structural dimensions (auto, length values, percentages). Keywords include contain (scales graphics proportionally to fit entirely inside boundaries) and cover (stretches graphics to completely span the bounding field, cropping extra material).',
                    'background-position: Maps 2D coordinates (keywords, percentages, or absolute lengths) to anchor assets relative to the coordinate box framework (e.g., center, top right).'
                ]}
            />



            <DocH3>2. Box Scopes, Clips, & Layer Controls</DocH3>
            <DocList
                items={[
                    'background-attachment: Configures scroll interactivity. fixed locks images relative to the global viewport canvas; scroll binds images to the parent card framework; local scrolls assets alongside the element\'s internal overflow content pool.',
                    'background-origin: Sets the initial coordinate positioning root framework edge boundary (border-box, padding-box, or content-box).',
                    'background-clip: Dictates exactly where background textures truncate or bleed (border-box, padding-box, content-box, or text for advanced mask treatments).'
                ]}
            />

            <DocH3>3. Composite Multi-Layer Syntaxes & Procedural Gradients</DocH3>
            <DocList
                items={[
                    'Layer Stacking Rules: CSS parses comma-separated background properties as stacked visual layers. The very first asset declared renders on top; each subsequent asset stacks beneath it, with the background-color always drawing as the final background layer.',
                    'Gradients: Interpolates smooth color ranges through linear-gradient() (directional angles), radial-gradient() (elliptical/circular expansions), or conic-gradient() (sweeping angles around a central axis).'
                ]}
            />

            <DocH2>Production-Grade Background Engineering</DocH2>
            <DocP>
                Below is a production-ready component stylesheet implementing stacked image composites, procedurally generated design patterns, non-blocking fallback properties, and modern clipping masks:
            </DocP>

            <DocH3>1. The Layered Texture Sheet (backgrounds.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION HIGH-PERFORMANCE BACKGROUND ARCHITECTURE
   ======================================================= */
:root {
  --tint-brand-alpha: rgb(30 41 59 / 0.85);
  --tint-brand-beta: rgb(15 23 42 / 0.95);
  
  /* Procedural Micro-Grid CSS Pattern Definition Tokens */
  --grid-color: rgba(255, 255, 255, 0.05);
  --grid-size: 24px;
}

.composite-hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);

  /* --- HIGH-PERFORMANCE MULTIPLE BACKGROUND COMPOSITE ENGINE ---
     Layer 1: Linear Gradient Overlay (Top layer handles contrast safety for text readability)
     Layer 2: Mathematical Grid Pattern (Middle layer adds structural depth)
     Layer 3: Photographic Core Texture (Bottom layer imports high-resolution graphics)
  */
  background-image: 
    linear-gradient(135deg, var(--tint-brand-alpha), var(--tint-brand-beta)),
    linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px),
    url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80');

  /* Coordinated Multi-Layer Layout Mapping Properties */
  background-repeat: no-repeat, repeat, repeat, no-repeat;
  background-size: auto, var(--grid-size) var(--grid-size), var(--grid-size) var(--grid-size), cover;
  background-position: center, top left, top left, center;
  background-attachment: scroll, scroll, scroll, local;
  background-origin: padding-box;
  background-clip: border-box;

  /* Explicit Fallback Protection: Used if network requests drop image downloads */
  background-color: oklch(0.2 0.02 240); 
}

/* ADVANCED RENDERING: INLINE GRADIENT CLIPPING ON TEXTURE SHEETS */
.composite-hero-container h1 {
  font-size: 2.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 12px 0;

  /* Creates a vibrant, fluid gradient fill across the heading text */
  background-image: linear-gradient(to right, oklch(0.85 0.12 100), oklch(0.75 0.15 160));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Drops standard solid render layer fill */
}

.composite-hero-container p {
  font-size: 1rem;
  line-height: 1.6;
  color: oklch(0.9 0.01 240);
  max-width: 50ch;
  margin: 0;
}`}
            />

            <DocH3>2. Layout Implementation View (BackgroundSandboxView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './backgrounds.css';

export default function BackgroundSandboxView() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Structural presentation card processing stacked procedural backgrounds */}
      <section className="composite-hero-container">
        <h1>Engine Architecture</h1>
        <p>
          This dashboard container layers linear gradients, math-driven procedural grid grids, and fallback textures into a single high-performance canvas engine.
        </p>
      </section>
    </div>
  );
}`}
            />
        </>
    );
}