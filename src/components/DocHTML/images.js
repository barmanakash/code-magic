import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLImagesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Images: Responsive Media, Art Direction, and Performance Optimization</DocTitle>

            <DocP>
                Handling images in modern web development goes far beyond simply dropping an asset onto a page. With varied device viewports, high-density retina displays, and strict Core Web Vitals metrics, optimizing media delivery is critical. Properly utilizing responsive markup, semantic wrapper elements, and native browser rendering strategies directly improves page performance, search rankings (SEO), and accessibility (A11y).
            </DocP>

            <DocH2>Core Image Mechanics & Layout Performance</DocH2>

            <DocH3>1. The &lt;img&gt; Tag & Essential Attributes</DocH3>
            <DocList
                items={[
                    'src (Source): Specifies the absolute or relative path to the image asset. Modern production setups favor high-performance web-optimized formats like WebP or AVIF over traditional JPEGs and PNGs.',
                    'alt (Alternative Text): Provides a descriptive text equivalent of the image. This attribute is essential for accessibility (read aloud by screen readers when users are visually impaired) and SEO. If an image is purely decorative (like a background pattern), write an empty alt attribute (alt="") so screen readers know to skip it.',
                    'width & height: Always define these native layout attributes directly in the HTML (e.g., width="600" height="400" using raw unitless pixel integers). Specifying these dimensions upfront lets the browser allocate the exact aspect ratio box before the image finishes downloading, completely preventing layout shifts (CLS).'
                ]}
            />

            <DocH3>2. Performance: Lazy Loading</DocH3>
            <DocP>
                Setting <code>loading="lazy"</code> instructs the browser to defer loading the image until it is about to enter the user's scroll viewport. This significantly reduces initial page load times and saves mobile data.
            </DocP>
            <blockquote>
                <strong>Important:</strong> Only apply <code>loading="lazy"</code> to off-screen images. For critical above-the-fold hero images, omit this attribute or use <code>loading="eager"</code> to ensure they render as quickly as possible.
            </blockquote>

            <DocH2>Responsive Media & Art Direction Engines</DocH2>
            <DocP>
                Serving a massive desktop-sized image to a mobile phone wastes bandwidth, while serving a low-resolution image to a high-density retina display looks pixelated. HTML5 provides two robust solutions to solve these issues:
            </DocP>



            <DocH3>1. The Resolution Switching Engine: <code>srcset</code> & <code>sizes</code></DocH3>
            <DocP>
                Use this approach when you want to serve the **exact same image cropped identically, but at different resolutions** based on screen size:
            </DocP>
            <DocList
                items={[
                    'srcset: Lists a set of image files along with their physical width in pixels, using the "w" descriptor (e.g., logo-320w.jpg 320w, logo-640w.jpg 640w).',
                    'sizes: Tells the browser how much space the image will occupy in the layout at different viewport breakpoints (e.g., (max-width: 600px) 100vw, 50vw).'
                ]}
            />

            <DocH3>2. The Art Direction & Format Selection Engine: <code>&lt;picture&gt;</code></DocH3>
            <DocP>
                Use the <code>&lt;picture&gt;</code> element when you need to perform **Art Direction** (serving completely different image crops for mobile vs. desktop) or **Format Fallbacks** (serving next-gen formats like AVIF while falling back to WebP/PNG for older browsers):
            </DocP>
            <DocList
                items={[
                    'The structure wraps one or more <source> tags followed by a fallback <img> tag.',
                    'The browser evaluates the <source> media queries from top to bottom, downloading the first compatible match and applying it directly to the nested fallback <img> node.'
                ]}
            />

            <DocH2>Semantic Media Wrapping: Figures & Captions</DocH2>
            <DocP>
                To group an image with a visible caption semantically, wrap them in a <code>&lt;figure&gt;</code> element and use a nested <code>&lt;figcaption&gt;</code> element for the description:
            </DocP>

            <CodeBlock
                language="html"
                code={`<figure class="c-graphic-wrapper">
  <img src="charts/telemetry-plot.png" alt="X-axis tracking active system threads, Y-axis representing request latency." width="800" height="400" />
  <figcaption class="c-graphic-caption">
    Figure 4.1: Live node latency logs during the API transition period.
  </figcaption>
</figure>`}
            />

            <DocH2>Production Responsive Media Implementations</DocH2>

            <DocH3>1. Optimized Multi-Format Art Direction (media-component.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="c-media-vault">
  <picture>
    <source 
      media="(max-width: 640px)" 
      srcset="images/hero-mobile.webp 1x, images/hero-mobile@2x.webp 2x" 
      type="image/webp"
    />
    
    <source 
      media="(max-width: 1024px)" 
      srcset="images/hero-tablet.webp" 
      type="image/webp"
    />

    <source srcset="images/hero-desktop.avif" type="image/avif" />
    <source srcset="images/hero-desktop.webp" type="image/webp" />

    <img 
      src="images/hero-desktop.jpg" 
      alt="Software developers configuring physical cloud servers inside an enterprise data center." 
      width="1200" 
      height="600"
      loading="lazy"
      class="c-media-vault__img"
    />
  </picture>
</div>`}
            />

            <DocH3>2. Layout Integration View (HTMLImagesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLImagesWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Semantic Figure & Media Playground</h3>
        <p className="text-gray-500 mt-1">
          Explore how the browser integrates responsive images, semantic figure components, and placeholder fallbacks.
        </p>
      </header>

      {/* Target Interaction Panel */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          DOM Media Render
        </div>

        {/* Semantic Figure Wrapper Component */}
        <figure className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50 p-3">
          
          <div className="aspect-video w-full bg-slate-200 rounded-lg overflow-hidden relative flex items-center justify-center text-slate-400 font-mono text-[11px] border">
            {/* Visual simulation representation of a picture/source stack */}
            <div className="text-center space-y-1 p-4">
              <div className="font-bold text-slate-600">[ Simulated Hardware Diagram ]</div>
              <div className="text-[9px] text-slate-500">
                &lt;picture&gt; / srcset &amp; sizes active
              </div>
              <code className="block bg-slate-300/50 p-1 rounded text-[9px] mt-2 text-slate-700">
                loading="lazy" | aspect-ratio: 16/9
              </code>
            </div>
          </div>

          <figcaption className="mt-3 text-slate-500 text-[10px] leading-relaxed border-t pt-2 border-slate-200/60">
            <strong>Figure 1.2:</strong> System routing schema visual. Notice how specifying exact dimensions prevents Layout Shift (CLS) when loading assets.
          </figcaption>
        </figure>

        {/* Informative Diagnostic Checklist */}
        <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-2">
          <span className="font-bold text-indigo-900 text-[10px] uppercase block">Core Media Checkpoint</span>
          <ul className="list-disc pl-4 text-indigo-950 space-y-1 text-[11px]">
            <li>Always assign a descriptive <code>alt</code> to prevent screen readers from reading raw filenames.</li>
            <li>Maintain an explicit ratio container via HTML <code>width</code> and <code>height</code> to ensure stable page loading scores.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}