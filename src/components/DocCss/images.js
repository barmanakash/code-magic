import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSImagesDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">Advanced Graphics & Element Masking Engines</DocTitle>
      
      <DocP>
        CSS image and graphics management controls asset resolution mapping, spatial scaling constraints, vector masks, and runtime bitmap processing. Mastering these properties allows you to serve highly responsive image assets that fit neatly within dynamic UI boundaries without distortion or performance overhead.
      </DocP>

      <DocH2>Graphics Control & Asset Fitting Matrix</DocH2>
      
      <DocH3>1. Spatial Sizing & Proportional Controls</DocH3>
      <DocList
        items={[
          'object-fit: Dictates how a replaced element\'s content box (like an <img> or <video>) scales to fit its physical layout container. Options include fill (distorts aspect ratios), contain (preserves ratio, letterboxes content), and cover (preserves ratio, clips overflow to fill the container perfectly).',
          'object-position: Works identically to background-position, moving the media alignment center within its structural boundary frame (e.g., object-position: center top;).'
        ]}
      />

      

      <DocH3>2. Raster Ingestion & Image Processing</DocH3>
      <DocList
        items={[
          'image-rendering: Instructs the browser\'s scaling engine how to process pixelated bitmaps when scaling up or down. Setting pixelated or crisp-edges bypasses standard bilinear smoothing algorithms, which is essential for keeping pixel art, QR codes, and retro graphics looking sharp.',
          'filter: Applies runtime GPU-accelerated graphic alterations directly onto the visual layer. Supports chainable parameter values like blur(), brightness(), contrast(), grayscale(), invert(), and drop-shadow().'
        ]}
      />

      <DocH3>3. Geometric Masking & Vector Injections</DocH3>
      <DocList
        items={[
          'clip-path: Generates a hardware-accelerated vector clipping boundary path that hides content outside the shape area. It handles basic primitives like circle(), ellipse(), or inset(), alongside complex custom vectors created via polygon() paths.',
          'mask (mask-image): Uses an alpha-channel transparency graphic or gradient vector to dynamically fade sections of an element out of view. Where the mask image is solid, the content renders completely; where it is transparent, the content is hidden.'
        ]}
      />

      

      <DocH2>Production-Grade Responsive Graphics Blueprint</DocH2>
      <DocP>
        Below is an advanced layout sheet detailing production-grade aspect-ratio locks, responsive picture element configurations, crisp pixel-art filters, and custom polygon clipping paths:
      </DocP>

      <DocH3>1. The Performance Graphics Sheet (graphics-engine.css)</DocH3>
      <CodeBlock
        language="css"
        code={`/* =======================================================
   PRODUCTION GRAPHICS ENGINE & MASKING CONTROLS
   ======================================================= */

/* A. HIGH-PERFORMANCE RESPONSIVE MEDIA CONTAINER */
.media-avatar-frame {
  width: 100%;
  aspect-ratio: 1 / 1; /* Establishes perfect square spatial geometry */
  background-color: oklch(0.9 0.01 240);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    /* Guarantees media stretches across the square frame without warping aspect ratios */
    object-fit: cover;
    object-position: center 20%; /* Prioritizes framing on the upper portion of the asset */
    
    transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Soft GPU-accelerated hardware rendering interaction blur */
  &:hover img {
    filter: brightness(0.9) blur(2px);
  }
}

/* B. HARDWARE ACCELERATED GEOMETRIC CARD SHAPE */
.polygon-clipped-card {
  position: relative;
  width: 100%;
  max-width: 340px;
  min-height: 200px;
  background-color: oklch(0.2 0.02 240);
  
  /* Creates a modern angular badge shape by mapping coordinate percentage pairs */
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);
  
  color: #ffffff;
  padding: 24px;
}

/* C. RASTER SCALING CONTROLS FOR CRYPTO KEY QR CODES */
.pixel-perfect-rendering-node {
  width: 128px;
  height: 128px;
  
  /* Forces the browser to scale the asset cleanly without introducing modern blur loops */
  image-rendering: pixelated;
}

/* D. LINEAR ALPHA CHANNEL GRADIENT MASKING */
.gradient-masked-billboard {
  width: 100%;
  height: 180px;
  background: linear-gradient(to right, oklch(0.55 0.18 250), oklch(0.65 0.25 200));
  
  /* Automatically fades the right edge of the card out of view using alpha mapping vectors */
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
}`}
      />

      <DocH3>2. Layout Implementation View (GraphicsSandboxWorkspace.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React from 'react';
import './graphics-engine.css';

export default function GraphicsSandboxWorkspace() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-8 p-4">
      
      {/* 1. Responsive Picture Element pairing with Object-Fit asset managers */}
      <div className="flex items-center gap-4 p-4 border bg-white rounded-xl shadow-sm">
        <div className="w-16 h-16 shrink-0">
          <picture className="media-avatar-frame">
            {/* Delivers highly optimized modern asset formats if browser support passes */}
            <source srcSet="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" type="image/webp" />
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
              alt="Cluster Administrator Profile" 
              loading="lazy"
            />
          </picture>
        </div>
        <div className="text-xs">
          <h4 className="font-bold text-gray-800">Akash Barman</h4>
          <p className="text-gray-500">Frontend Platform Engineer</p>
        </div>
      </div>

      {/* 2. Custom Clip-Path Vector Geometry Node */}
      <div className="polygon-clipped-card shadow-sm">
        <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400 block mb-1">Secure Cluster Card</span>
        <h5 className="text-sm font-bold">Asymmetric Masking Matrix</h5>
        <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
          The bottom-right corner of this container is precisely sliced using native CSS vector polygon mappings.
        </p>
      </div>

      {/* 3. Alpha Transparency Masking Track */}
      <div className="gradient-masked-billboard rounded-xl p-4 flex items-start">
        <span className="text-white text-xs font-bold bg-black/20 px-2 py-1 rounded">
          Alpha Masked Backdrop Overlay
        </span>
      </div>

    </div>
  );
}`}
      />
    </>
  );
}