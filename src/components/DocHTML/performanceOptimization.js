import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLPerformanceOptimizationDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Performance Optimization: Asset Delivery Pipelines, Resource Prioritization Directives, and Runtime Efficiency</DocTitle>

            <DocP>
                Performance optimization is the architectural practice of minimizing the time required to download, parse, render, and interact with a web application. High-performance engineering targets the reduction of initial bundle weights, optimizes the delivery of rich media files, handles wire-level data squeezing, and leverages early resource hint signals to utilize the browser's networking pipeline efficiently.
            </DocP>

            <DocH2>Resource Prioritization Hints: Preload vs. Prefetch</DocH2>
            <DocP>
                Browsers scan HTML documents sequentially to discover assets, which can lead to late discovery of critical dependencies like fonts or deep CSS files. Resource directives explicitly dictate how the internal networking buffer prioritizes incoming network calls:
            </DocP>

            <DocH3>1. The Preload Directive (`rel="preload"`)</DocH3>
            <DocP>
                Preload tells the browser to download a high-priority asset immediately because it will be needed during the current page-load lifecycle. Use this for assets discovered late that are essential to the critical rendering path (such as custom web fonts or hero images).
            </DocP>
            <CodeBlock
                language="html"
                code={`<link rel="preload" href="/assets/fonts/inter-bold.woff2" as="font" type="font/woff2" crossorigin="anonymous" />`}
            />

            <DocH3>2. The Prefetch Directive (`rel="prefetch"`)</DocH3>
            <DocP>
                Prefetch targets future navigation. It instructs the browser to download an asset in the background during idle periods because the user is highly likely to request it on the next page (e.g., clicking to a product details view). Assets are stored directly in the HTTP cache.
            </DocP>



            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Directive Mode</th>
                            <th className="p-3">Priority Level</th>
                            <th className="p-3">Target Lifecycle Window</th>
                            <th className="p-3">Ideal Resource Use Case</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">preload</td>
                            <td className="p-3 text-amber-600 font-bold">High / Urgent</td>
                            <td className="p-3 font-sans">Current active page view render tick.</td>
                            <td className="p-3 font-sans">Above-the-fold hero images, critical structural CSS modules, web fonts.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">prefetch</td>
                            <td className="p-3 text-slate-500">Low / Idle</td>
                            <td className="p-3 font-sans">Future multi-page routing transitions.</td>
                            <td className="p-3 font-sans">Next-step route bundle code-splits, modal asset packs, subsequent wizard steps.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>On-Demand Deferred Loading (Lazy Loading)</DocH2>
            <DocP>
                Downloading off-screen imagery or heavy iframe containers below the fold increases Initial Page Load metrics and wastes mobile data buffers. **Lazy Loading** defers the loading of these non-critical resources until they approach the user's viewport.
            </DocP>
            <DocP>
                Modern web browsers support native lazy loading via the <code>loading="lazy"</code> layout attribute on image and iframe elements. For legacy systems or highly customized visual tracking workflows, engineers implement the **Intersection Observer API** to watch element intersection ratios programmatically.
            </DocP>

            <DocH2>Image Optimization Strategies</DocH2>
            <DocP>
                Images are often the heaviest assets transferred over the wire. To deliver production-grade rich media, applications must optimize three distinct layers:
            </DocP>
            <DocList
                items={[
                    'Next-Gen Media Formats: Serve modern compression formats like WebP or AVIF instead of legacy JPEG/PNG options. WebP provides superior lossless and lossy compression algorithms, reducing file size by up to 30%.',
                    'Responsive Display Attributes (srcset): Provide multiple image source variations tailored to different device viewport sizes, ensuring mobile screens do not waste bandwidth downloading desktop-scale files.',
                    'Layout Stabilization: Always declare intrinsic aspect ratio dimensions (width and height attributes). This reserves layout space ahead of render time, avoiding sudden page jumps and optimizing Cumulative Layout Shift (CLS).'
                ]}
            />

            <DocH2>Wire-Level Reduction: Minification & Compression</DocH2>
            <DocP>
                Before text assets (HTML, CSS, JavaScript) enter the network layer, they should be processed by minification engines and compression algorithms:
            </DocP>

            <DocH3>1. Asset Minification</DocH3>
            <DocP>
                Minification engines (like Terser, esbuild, or post-CSS processors) parse code structures to strip out human-centric artifacts. They remove whitespace, line breaks, code comments, and shorten internal variable and function identifiers without altering code behavior.
            </DocP>

            <DocH3>2. Server-Side Compression (Gzip vs. Brotli)</DocH3>
            <DocP>
                Once assets are minified, the web hosting origin server compresses them before transmission over HTTP. The browser automatically decompresses these files upon receipt.
            </DocP>
            <DocList
                items={[
                    'Gzip: The baseline compression standard utilizing the DEFLATE algorithm, widely compatible across legacy systems.',
                    'Brotli: A modern compression algorithm developed by Google that uses a dictionary-based data model. Brotli routinely outperforms Gzip, producing file sizes that are 15-25% smaller for text-based assets (HTML/CSS/JS).'
                ]}
            />

            <DocH2>Production-Grade Optimization Architecture Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready implementation showing optimized resource head configurations, next-gen responsive graphic setups, and an automated programmatic lazy-loading image card wrapper in React:
            </DocP>

            <DocH3>1. Critical Resource Prioritization Layout (head-optimization.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<head>
  <meta charset="UTF-8">
  <title>Enterprise Performance Optimization Stack</title>

  <link rel="preconnect" href="https://api.production-cluster.com" />
  <link rel="preconnect" href="https://images.asset-delivery-cdn.net" crossorigin />

  <link rel="preload" href="/main-bundle-core.modern.js" as="script" />
  <link rel="preload" href="/global-critical-styles.css" as="style" />

  <link rel="prefetch" href="/analytics-dashboard-module.js" as="script" />
</head>`}
            />

            <DocH3>2. Interactive Performance Workspace Sandbox (HTMLPerformanceWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect, useRef } from 'react';

export default function HTMLPerformanceWorkspace() {
  const [isBrotliActive, setIsBrotliActive] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Baseline mockup metrics representing sample resource bundle compression ratios
  const baseScriptBytes = 450000; // 450 KB Raw Uncompressed Source
  const minifiedBytes = 185000;   // 185 KB Post Minification
  const gzipBytes = 54000;        // 54 KB Post Gzip Pipeline
  const brotliBytes = 41000;      // 41 KB Post Brotli Engine

  const activeCompressedBytes = isBrotliActive ? brotliBytes : gzipBytes;
  const totalSavingsPercentage = (((baseScriptBytes - activeCompressedBytes) / baseScriptBytes) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Performance Optimization Dashboard</h3>
        <p className="text-gray-500 mt-1">
          Toggle the settings below to analyze how wire-level compression algorithms and responsive graphic containers optimize data delivery pipelines.
        </p>
      </header>

      {/* Main Sandbox Interface Board */}
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
        
        {/* LEFT COLUMN: COMPRESSION METRICS TRACK PANEL */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                Wire Compression Algorithms
              </span>
              <button
                onClick={() => setIsBrotliActive(!isBrotliActive)}
                className={"px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase transition-colors " + (isBrotliActive ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800")}
              >
                Engine: {isBrotliActive ? "Brotli Active" : "Gzip Active"}
              </button>
            </div>

            {/* Simulated Data Bar Graph Chart Layout */}
            <div className="space-y-3 font-mono text-[10px]">
              <div className="space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>1. Raw Development Source</span>
                  <span>{(baseScriptBytes / 1000).toFixed(0)} KB</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-slate-400 h-full w-full"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-700">
                  <span>2. Minified Core (Stripped Tokens)</span>
                  <span>{(minifiedBytes / 1000).toFixed(0)} KB</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: (minifiedBytes / baseScriptBytes * 100) + "%" }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-900 font-bold">
                  <span>3. Active Network HTTP Payload ({isBrotliActive ? "Brotli" : "Gzip"})</span>
                  <span className={isBrotliActive ? "text-emerald-600" : "text-blue-600"}>{(activeCompressedBytes / 1000).toFixed(0)} KB</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={"h-full " + (isBrotliActive ? "bg-emerald-500" : "bg-blue-500")} style={{ width: (activeCompressedBytes / baseScriptBytes * 100) + "%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 text-slate-300 font-mono text-[10px] rounded-xl shadow-inner">
            <span className="text-emerald-400 font-bold block mb-0.5">// Data Savings Efficiency Map</span>
            Wire-transfer load footprint optimized by <strong className="text-amber-400 text-xs">{totalSavingsPercentage}%</strong> from development baseline output weights.
          </div>
        </div>

        {/* RIGHT COLUMN: RESPONSIVE OPTIMIZED GRAPHIC WRAPPER */}
        <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-2">
              Next-Gen Responsive Element Sandbox
            </span>

            {/* Optimized Picture Art-Direction Grid Wrapper */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 relative aspect-video flex items-center justify-center">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 italic font-mono text-[10px]">
                  Simulating Next-Gen Image Load...
                </div>
              )}
              
              <picture>
                {/* Serve AVIF if supported by client environment */}
                <source srcSet="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=70&fm=avif" type="image/avif" />
                {/* Fallback to modern high-efficiency WebP format */}
                <source srcSet="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=75&fm=webp" type="image/webp" />
                
                {/* Baseline legacy standard JPEG fallback element */}
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80" 
                  alt="Production Optimized IDE IDE Environment"
                  loading="lazy"
                  width="400"
                  height="225"
                  onLoad={() => setImageLoaded(true)}
                  className={"object-cover w-full h-full transition-opacity duration-300 " + (imageLoaded ? "opacity-100" : "opacity-0")}
                />
              </picture>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-950 text-[10px] leading-relaxed rounded-xl">
            <strong>Engineering Rule:</strong> Notice that the <code>&lt;picture&gt;</code> asset explicitly declares both <code>width="400"</code> and <code>height="225"</code>. This prevents layout shifts by telling the browser the aspect ratio before the file downloads.
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