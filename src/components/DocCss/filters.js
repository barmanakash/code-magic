import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSFiltersDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Visual Filters & Bitmap Processing Engines</DocTitle>

            <DocP>
                The CSS <code>filter</code> property grants web applications direct access to hardware-accelerated, GPU-driven graphical operations on the browser's paint layer. Instead of requiring static image pre-processing in creative software, CSS filters execute real-time bitmap manipulations—such as color shifting, contrast stretching, blur operations, and directional shadows—on standard images, backgrounds, and video elements.
            </DocP>

            <DocH2>Filter Function Taxonomy Matrix</DocH2>

            <DocH3>1. Spatial Blur & Dimensional Shadows</DocH3>
            <DocList
                items={[
                    'blur(radius): Blends pixel values using a Gaussian smoothing function. The radius parameter sets the depth of the blur effect using absolute length units (e.g., blur(4px);). It does not accept percentage inputs.',
                    'drop-shadow(x y blur color): Applies a hardware-accelerated, true directional shadow to an element\'s visible content contour. Unlike box-shadow, which draws a strict rectangle around the element\'s boundary frame, drop-shadow traces the transparent alpha mask paths of PNGs, SVGs, or text glyphs cleanly.'
                ]}
            />



            <DocH3>2. Color Balance & Contrast Tuning</DocH3>
            <DocList
                items={[
                    'brightness(amount): Adjusts the linear gain of the target asset\'s color channels. Values span from 0% (absolute pitch black) up to 100% (nominal value), with values over 100% blowing out the colors into overexposed ranges.',
                    'contrast(amount): Recalculates the distribution scale between dark highlights and light tones. A value of 0% flattens the image into a uniform gray canvas, while values surpassing 100% widen the value gaps for high-contrast effects.',
                    'saturate(amount): Manages the color purity vectors of the input pixel stream. Setting this to 0% strips all color intensity, while multiplying it past 100% over-saturates the color space.'
                ]}
            />

            <DocH3>3. Aesthetic Monochromatic & Phase Inversions</DocH3>
            <DocList
                items={[
                    'grayscale(amount): Converts all color channels into a single desaturated luminance track. Accepts values ranging from 0% (unaltered) to 100% (complete monochrome black-and-white).',
                    'sepia(amount): Processes pixels through a nostalgic, warm copper-brown filter envelope. Scales from 0% up to 100%.',
                    'invert(amount): Flips the mathematical value of every color channel to its exact polar opposite color match along the RGB wheel (e.g., black becomes white, cyan becomes red). A setting of 100% produces a full photographic negative effect.'
                ]}
            />



            <DocH2>Production-Grade High-Performance Filters Blueprint</DocH2>
            <DocP>
                Below is a production-ready graphical dashboard toolkit illustrating individual filter states, multi-layered inline function chaining, and high-performance hardware-accelerated interactive states:
            </DocP>

            <DocH3>1. The Graphical Filter Module Sheet (filters-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION GPU-ACCELERATED VISUAL FILTERS ENGINE
   ======================================================= */

/* A. BASE PIPELINE normalizations */
.filter-preview-card {
  width: 100%;
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.02);
}

.filter-media-asset {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  
  /* Forces layer pre-rendering on the GPU to maximize rendering efficiency */
  will-change: filter;
  transition: filter 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* B. TARGETED FILTER VARIANT SCHEMES */
.variant-monochrome { filter: grayscale(100%); }
.variant-sepia      { filter: sepia(80%); }
.variant-inverted   { filter: invert(100%); }
.variant-high-gain  { filter: brightness(1.2) contrast(130%) saturate(140%); }

/* C. SMOOTH INTERACTIVE RECOVERY */
.filter-preview-card:hover .filter-media-asset {
  /* Restores the bitmap instantly to pure original profiles on hover */
  filter: grayscale(0%) sepia(0%) invert(0%) brightness(1) contrast(100%) saturate(100%);
}

/* D. TRUE SVG CONTOUR DIRECTIONAL SHADOW */
.alpha-channel-vector-node {
  /* Fits the shadow drop explicitly to structural SVG path curves */
  filter: drop-shadow(0px 8px 12px rgba(2, 132, 199, 0.25));
  
  transition: filter 250ms ease;
}

.alpha-channel-vector-node:hover {
  filter: drop-shadow(0px 12px 20px rgba(2, 132, 199, 0.4));
}`}
            />

            <DocH3>2. Layout Implementation View (FiltersSandboxWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './filters-engine.css';

export default function FiltersSandboxWorkspace() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 space-y-8">
      
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-1">GPU Filter Channel Matrix</h3>
        <p className="text-xs text-gray-500">Hover over any processing card to reset its bitmap filters back to baseline parameters.</p>
      </div>

      {/* Grid Layout demonstrating multi-stage filter states */}
      <section className="grid grid-columns-1 sm:grid-columns-2 md:grid-columns-4 gap-6 text-xs">
        
        {/* Card 1: Monochrome */}
        <div className="filter-preview-card">
          <img 
            className="filter-media-asset variant-monochrome" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" 
            alt="Telemetry Core Stream" 
          />
          <div className="mt-3 font-bold text-gray-700">grayscale(100%)</div>
        </div>

        {/* Card 2: High Gain Multi-Chain */}
        <div className="filter-preview-card">
          <img 
            className="filter-media-asset variant-high-gain" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" 
            alt="Telemetry Core Stream" 
          />
          <div className="mt-3 font-bold text-gray-700">Chained High-Gain</div>
        </div>

        {/* Card 3: Inverted Photographic Negative */}
        <div className="filter-preview-card">
          <img 
            className="filter-media-asset variant-inverted" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" 
            alt="Telemetry Core Stream" 
          />
          <div className="mt-3 font-bold text-gray-700">invert(100%)</div>
        </div>

        {/* Card 4: Hardware Contoured Drop-Shadow */}
        <div className="filter-preview-card flex flex-col justify-between items-center p-6">
          {/* Custom shape template demonstrating transparency mapping */}
          <svg className="w-16 h-16 text-blue-600 alpha-channel-vector-node" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <div className="mt-4 font-bold text-center text-gray-700 w-full">drop-shadow() Contour</div>
        </div>

      </section>

    </div>
  );
}`}
            />
        </>
    );
}