import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLResponsiveDocs() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Responsive HTML: Viewport Orchestration, Art Direction, and Mobile-First Architecture</DocTitle>

            <DocP>
                Responsive web design is the engineering discipline of structuring HTML documents to adapt perfectly across varying device screen configurations, from low-resolution mobile viewports to ultra-wide desktop monitors. Rather than relying on heavy client-side JavaScript calculations to fix breaking layouts, high-performance responsive systems utilize declarative HTML5 metadata, fluid asset resource rules, and mobile-first architectural structures parsed natively by the browser.
            </DocP>

            <DocH2>The Viewport Meta Tag: Bridging Hardware and CSS</DocH2>
            <DocP>
                By default, mobile browsers simulate a standard desktop screen resolution (typically 980 pixels wide) and scale the rendered layout down to fit the physical hardware screen. This results in tiny text and broken touch targets.
            </DocP>
            <DocP>
                To neutralize this simulation layer and force the page layout to follow the physical screen dimensions of the device, you must configure a specialized viewport metadata directive inside the document head:
            </DocP>
            <CodeBlock
                language="html"
                code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            />
            <DocP>
                This directive contains two critical instructions:
            </DocP>
            <DocList
                items={[
                    '<code>width=device-width</code>: Instructs the browser engine to map the layout viewport width directly to the device\'s screen size in device-independent pixels.',
                    '<code>initial-scale=1.0</code>: Establishes a 1:1 translation relationship between CSS pixels and device-independent pixels upon initial page load, preventing unexpected automatic zoom behaviors.'
                ]}
            />

            <DocH2>Responsive Images: Fluid Sizing via `srcset` and `sizes`</DocH2>
            <DocP>
                Serving a large, desktop-optimized image to a mobile device wastes bandwidth and slows down page rendering. The native image tag features advanced structural attributes that let you offer a collection of different image sizes, allowing the browser to automatically select the best file for the user's screen:
            </DocP>

            <DocH3>1. The `srcset` Attribute (Resource Manifest)</DocH3>
            <DocP>
                Instead of declaring a single image source, <code>srcset</code> provides a comma-separated list of image files along with their exact physical pixel widths using the <code>w</code> descriptor (e.g., <code>600w</code> means the image is exactly 600 pixels wide).
            </DocP>

            <DocH3>2. The `sizes` Attribute (Layout Breakpoints)</DocH3>
            <DocP>
                The <code>sizes</code> attribute tells the browser exactly how wide the image will render in the layout at different screen sizes *before* the CSS files finish downloading. This allows the browser to download the optimal image size immediately.
            </DocP>
            <CodeBlock
                language="html"
                code={`<img 
  src="photo-fallback.jpg" 
  srcset="photo-sm.jpg 480w, photo-md.jpg 800w, photo-lg.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px" 
  alt="Production infrastructure analytics platform overview dashboard" 
/>`}
            />

            <DocH2>Advanced Layout Direction: The `picture` Element</DocH2>
            <DocP>
                While <code>srcset</code> gives the browser choices for scaling the *same* image, the HTML5 <code>&lt;picture&gt;</code> element gives engineers complete control over **Art Direction** and **Format Switching**. This is ideal for changing the composition of an image for different screens or serving high-efficiency next-gen image formats.
            </DocP>



            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Element / Attribute</th>
                            <th className="p-3">Operational Purpose</th>
                            <th className="p-3">Key Technical Capability</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">&lt;source media="..."&gt;</td>
                            <td className="p-3 font-sans">Art Direction Media Matching</td>
                            <td className="p-3 font-sans">Loads completely different image content variations (like a tight square crop for mobile screens vs a widescreen landscape layout for desktops).</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">&lt;source type="..."&gt;</td>
                            <td className="p-3 font-sans">Next-Gen Format Switching</td>
                            <td className="p-3 font-sans">Delivers advanced compression formats like AVIF or WebP to modern browsers, falling back to a standard JPEG/PNG only if the client environment requires it.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">&lt;img&gt; (Inside Picture)</td>
                            <td className="p-3 font-sans">Fallback Anchor Element</td>
                            <td className="p-3 font-sans">Mandatory structural node that handles the final rendering loop, applies styling rules, and ensures the layout degrades gracefully in older browsers.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Mobile-First Layout Architectural Concepts</DocH2>
            <DocP>
                Mobile-first architecture means designing your application for mobile viewports first, then layering on enhancements for larger screens using CSS media queries.
            </DocP>
            <DocP>
                This strategy keeps your core structure clean and lightweight by reducing style overrides, avoiding unneeded desktop asset downloads on mobile devices, and prioritizing key features early in the development lifecycle.
            </DocP>

            <DocH2>Production-Grade Responsive Infrastructure Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready responsive workspace implementation that pairs native art direction containers with a live layout scaling simulator:
            </DocP>

            <DocH3>1. Art-Directed Content Template (responsive-picture-block.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<picture>
  <source media="(min-width: 1024px)" srcSet="/assets/hero-desktop.avif" type="image/avif" />
  <source media="(min-width: 1024px)" srcSet="/assets/hero-desktop.webp" type="image/webp" />

  <source media="(min-width: 640px)" srcSet="/assets/hero-tablet.webp" type="image/webp" />

  <source srcSet="/assets/hero-mobile-cropped.webp" type="image/webp" />

  <img 
    src="/assets/hero-fallback.jpg" 
    alt="Corporate server management node control deck" 
    width="800"
    height="450"
    loading="lazy"
    class="fluid-image-frame"
  />
</picture>`}
            />

            <DocH3>2. Interactive Responsive Workspace Simulator (HTMLResponsiveWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

type ViewportMode = 'mobile' | 'tablet' | 'desktop';

interface ViewportConfig {
  width: string;
  label: string;
  description: string;
  imgUrl: string;
}

export default function HTMLResponsiveWorkspace() {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');

  const viewports: Record<ViewportMode, ViewportConfig> = {
    mobile: {
      width: 'w-[320px]',
      label: 'Mobile Viewport (320px)',
      description: 'Serving tight vertical image variations; column rules shift to a 100% full-width stack.',
      imgUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&q=80' // Square Crop
    },
    tablet: {
      width: 'w-[600px]',
      label: 'Tablet Viewport (600px)',
      description: 'Displaying mid-range layout scales; grid containers shift to a dual-column layout matrix.',
      imgUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80' // Standard Landscape
    },
    desktop: {
      width: 'w-full',
      label: 'Enterprise Desktop Viewport (100%)',
      description: 'Displaying widescreen landscape variations; layout spans out into a multi-column horizontal grid.',
      imgUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=450&fit=crop&q=80' // Wide Aspect Ratio
    }
  };

  const currentView = viewports[viewport];

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Responsive Architecture Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Select a device viewport profile below to simulate how the HTML layout adapts its grid spacing and swaps image resources based on active breakpoints.
        </p>
      </header>

      {/* VIEWPORT CONTROLS BAR */}
      <div className="flex bg-gray-200 p-1 rounded-xl space-x-1 border shadow-xs">
        {(Object.keys(viewports) as ViewportMode[]).map((key) => (
          <button
            key={key}
            onClick={() => setViewport(key)}
            className={"px-3 py-1.5 rounded-lg font-bold transition-all uppercase text-[9px] font-mono " + (viewport === key ? "bg-white text-gray-900 shadow-xs" : "text-gray-600 hover:text-gray-900")}
          >
            {key}
          </button>
        ))}
      </div>

      {/* RENDERING CANVAS BOARD */}
      <div className="w-full max-w-3xl border border-gray-200 bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center transition-all duration-300">
        <div className={"border border-dashed border-slate-300 rounded-xl p-4 bg-slate-50 transition-all duration-500 space-y-4 " + currentView.width}>
          
          <div className="flex items-center justify-between border-b pb-2">
            <span className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-wider">
              {currentView.label}
            </span>
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* SIMULATED LAYOUT CONTAINER MATCHING RESPONSIVE PRINCIPLES */}
          <div className={"grid gap-4 " + (viewport === 'mobile' ? 'grid-cols-1' : viewport === 'tablet' ? 'grid-cols-2' : 'grid-cols-3')}>
            
            {/* MAIN IMAGE BLOCK (ART DIRECTED PREVIEW) */}
            <div className={(viewport === 'desktop' ? 'col-span-2' : 'col-span-1') + " border border-slate-200 rounded-lg overflow-hidden bg-white aspect-video relative"}>
              <img 
                src={currentView.imgUrl} 
                alt="Responsive Sandbox Workspace Display Component"
                className="object-cover w-full h-full transition-all duration-300" 
              />
              <div className="absolute top-2 left-2 bg-slate-900/80 text-white font-mono text-[8px] px-1.5 py-0.5 rounded">
                Active Source: {viewport === 'mobile' ? 'Square Crop' : 'Widescreen Source'}
              </div>
            </div>

            {/* CONTENT DESCRIPTIONS COLUMN */}
            <div className="p-4 bg-white border border-slate-200 rounded-lg flex flex-col justify-between space-y-2">
              <div>
                <h4 className="font-bold text-gray-900 text-[11px] leading-tight">Fluid Structural Blocks</h4>
                <p className="text-gray-500 mt-1 text-[10px] leading-relaxed">
                  {currentView.description}
                </p>
              </div>
              <div className="pt-2 border-t font-mono text-[8px] text-slate-400">
                meta.viewport scale = 1.0
              </div>
            </div>

          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed font-mono">
            <strong>Mobile-First Tip:</strong> When using CSS grid layouts, define your base grid structure using a single vertical column for mobile sizes, then layer on multi-column setups inside media queries for larger viewports.
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