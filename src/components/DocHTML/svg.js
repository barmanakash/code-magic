import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLSVGDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 SVG: Scalable Vector Graphics, Geometric Shapes, and Inline Graphic Assets</DocTitle>

            <DocP>
                SVG (Scalable Vector Graphics) is an XML-based vector image format used to render two-dimensional graphics directly inside the browser viewport. Unlike raster formats (such as PNG or JPEG) which map static pixels onto a grid, SVG defines images mathematically using points, lines, curves, and shapes. This ensures that graphics scale infinitely to any size or resolution without losing clarity, making them perfect for modern responsive frontends and high-density screens.
            </DocP>

            <DocH2>Foundational Elements & Shape Primitives</DocH2>

            <DocH3>1. The &lt;svg&gt; Root Wrapper</DocH3>
            <DocList
                items={[
                    'viewBox Attribute: Establishes the internal coordinate system coordinate window. A value like <code>viewBox="0 0 100 100"</code> defines a grid 100 units wide and 100 units high, making all internal shapes scale proportionally relative to this layout canvas.',
                    'width & height Attributes: Defines the actual space the graphic occupies in the browser layout. These can be easily configured or overridden using responsive CSS.'
                ]}
            />

            <DocH3>2. Geometric Shapes</DocH3>
            <DocList
                items={[
                    'rect: Renders rectangles and squares. Configured using position coordinates (<code>x</code>, <code>y</code>), size dimensions (<code>width</code>, <code>height</code>), and optional corner rounding tags (<code>rx</code>, <code>ry</code>).',
                    'circle: Renders exact circles. Positioned using center point attributes (<code>cx</code>, <code>cy</code>) and scaled using a radius coordinate (<code>r</code>).',
                    'line: Draws a single straight vector path between a starting point (<code>x1</code>, <code>y1</code>) and an ending point (<code>x2</code>, <code>y2</code>).'
                ]}
            />



            <DocH3>3. Core Graphic Attributes</DocH3>
            <DocList
                items={[
                    'fill: Controls the interior color of a shape. Supports named colors, hex codes, RGB syntax, or references to complex gradient masks.',
                    'stroke: Sets the color of the boundary line drawn around a shape.',
                    'stroke-width: Specifies the width of the shape outline in coordinate units.'
                ]}
            />

            <DocH2>Advanced Vectors: Text, Paths, and UI Icons</DocH2>

            <DocH3>1. Rendered Vector Typography (&lt;text&gt;)</DocH3>
            <DocP>
                The <code>&lt;text&gt;</code> element renders selectable, indexable text strings directly inside the vector space. Because this text exists inside the DOM tree, it remains fully searchable by engines (SEO) and readable by screen readers, unlike text flattened inside traditional image files.
            </DocP>

            <DocH3>2. Dynamic Paths (&lt;path&gt;)</DocH3>
            <DocP>
                The <code>&lt;path&gt;</code> element is the most powerful primitive in SVG, capable of drawing any complex shape. It builds shapes using a data sequence attribute (<code>d="..."</code>) composed of precise directional command letters and coordinates:
            </DocP>
            <DocList
                items={[
                    'M x,y (Move To): Picks up the virtual pen and places it at the starting coordinate without drawing a line.',
                    'L x,y (Line To): Draws a straight vector line from the current position to the target coordinates.',
                    'H / V (Horizontal/Vertical): Draws straight lines restricted horizontally or vertically.',
                    'C / S / Q (Curves): Renders smooth cubic or quadratic Bézier curves using mathematical control anchor points.',
                    'Z (Close Path): Draws a straight line from the current position back to the first point of the active sequence, closing the shape.'
                ]}
            />

            <DocH3>3. Inline SVG Integration</DocH3>
            <DocP>
                Embedding raw SVG code directly into your HTML document is known as **Inline SVG**. This method is the preferred standard for modern frontend application engineering due to several distinct advantages:
            </DocP>
            <DocList
                items={[
                    'Direct Style Hooks: Allows you to style individual vector elements using CSS rules (e.g., matching text colors dynamically using <code>fill: currentColor;</code>).',
                    'Dynamic Interactivity: Enables you to attach JavaScript event listeners directly to paths or groups for animations and hover effects.',
                    'Reduced Request Overhead: Eliminates the need for additional network requests by embedding graphics right inside the markup block.'
                ]}
            />

            <DocH2>Production-Grade Vector Architecture Blueprint</DocH2>
            <DocP>
                Below is a production-ready template demonstrating correctly constructed inline geometric shapes, custom path vectors, and optimized UI icon components:
            </DocP>

            <DocH3>1. Scalable Inline Vector Shell (vector-graphics.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="c-graphic-canvas">

  <svg viewBox="0 0 200 100" class="c-vector-canvas" aria-labelledby="svg-title" role="img">
    <title id="svg-title">System Architecture Topology Nodes</title>
    
    <rect x="0" y="0" width="200" height="100" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" />
    
    <circle cx="50" cy="50" r="25" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="50" y="54" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">AP-1</text>
    
    <path d="M 75 50 L 125 50" stroke="#94a3b8" stroke-width="3" stroke-dasharray="4,4" />
    
    <rect x="125" y="25" width="50" height="50" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
    <text x="150" y="54" font-family="sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">DB-CORE</text>
  </svg>

  <button class="c-icon-button">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="16" 
      height="16" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      aria-hidden="true">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
    <span>View Telemetry Analytics</span>
  </button>

</div>`}
            />

            <DocH3>2. Interactive Vector Sandbox View (HTMLSVGWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLSVGWorkspace() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Inline SVG Interactive Canvas</h3>
        <p className="text-gray-500 mt-1">
          Click on the interactive system status board below to trigger dynamic CSS color shifts across the paths and vector shapes.
        </p>
      </header>

      {/* Vector Canvas Container Panel */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative flex flex-col items-center">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Live Vector DOM
        </div>

        {/* Dynamic Inline Vector Element */}
        <div 
          onClick={() => setIsActive(!isActive)}
          className="w-full cursor-pointer group mt-4 transition-transform duration-200 active:scale-[0.99]"
        >
          <svg 
            viewBox="0 0 300 120" 
            className="w-full border rounded-xl overflow-hidden shadow-inner bg-slate-50 transition-colors"
          >
            {/* Component Header Bar */}
            <rect x="0" y="0" width="300" height="28" fill="#0f172a" />
            <text x="12" y="18" fill="#f8fafc" fontSize="9" fontFamily="monospace" fontWeight="bold">
              CLUSTER INTEGRITY: {isActive ? 'ACTIVE_OPTIMAL' : 'STANDBY_IDLE'}
            </text>

            {/* Interactive Signal Status indicator */}
            <circle 
              cx="276" 
              cy="14" 
              r="5" 
              className={\`transition-colors duration-300 \${isActive ? 'fill-emerald-400' : 'fill-amber-400'}\`}
            />

            {/* Path Drawing Node A */}
            <circle 
              cx="60" 
              cy="75" 
              r="20" 
              className={\`transition-colors duration-300 stroke-2 \${
                isActive ? 'fill-blue-50 stroke-blue-600' : 'fill-slate-100 stroke-slate-400'
              }\`}
            />
            <text x="60" y="78" textAnchor="middle" fontSize="9" fontWeight="bold" className="fill-slate-700 font-sans">
              Node A
            </text>

            {/* Multi-Segment Directional Path */}
            <path 
              d="M 80 75 L 140 75 Q 150 75 150 65 L 150 55" 
              fill="none" 
              strokeWidth="2"
              className={\`transition-colors duration-300 stroke-2 \${
                isActive ? 'stroke-blue-500' : 'stroke-slate-300'
              }\`}
              strokeDasharray={isActive ? '0' : '4,4'}
            />

            {/* Dynamic Curve Connection Path */}
            <path 
              d="M 150 55 L 220 75" 
              fill="none" 
              strokeWidth="2"
              className={\`transition-colors duration-300 \${isActive ? 'stroke-emerald-500' : 'stroke-slate-300'}\`}
            />

            {/* Target Path Endpoint Box Component */}
            <rect 
              x="220" 
              y="55" 
              width="50" 
              height="40" 
              rx="6" 
              className={\`transition-colors duration-300 stroke-2 \${
                isActive ? 'fill-emerald-50 stroke-emerald-600' : 'fill-slate-100 stroke-slate-400'
              }\`}
            />
            <text x="245" y="78" textAnchor="middle" fontSize="9" fontWeight="bold" className="fill-slate-700 font-sans">
              Sink
            </text>
          </svg>
        </div>

        {/* Explanatory Technical Metadata Alert */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl w-full flex items-start gap-2.5 text-slate-700">
          <span className="text-base leading-none">💡</span>
          <div className="space-y-0.5">
            <span className="font-bold text-slate-900 text-[10px] uppercase block">Developer Checklist</span>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Notice how the inline vector shape responds instantly to click events. By keeping SVGs inline within the DOM, they can be controlled using modern reactive application states just like standard HTML tags.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}