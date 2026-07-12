import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSPerformanceOptimizationDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Performance Engineering & Asset Delivery Optimization</DocTitle>

            <DocP>
                CSS Performance Optimization governs how stylesheets are parsed, minified, compressed, and delivered over the network to maximize rendering speed. Optimization directly addresses the critical rendering path, as CSS is a render-blocking resource. Optimizing asset sizes and execution paths prevents visual delays and ensures rapid First Contentful Paint (FCP) and Largest Contentful Paint (LCP) times.
            </DocP>

            <DocH2>Network & Compilation Optimization Matrix</DocH2>

            <DocH3>1. Serialization & Payload Reduction</DocH3>
            <DocList
                items={[
                    'Minification & Compression: Minification strips comments, whitespaces, and redundant characters from compiled files. Compression engines (such as Gzip or Brotli) compress the file on the fly before transmission, cutting down data transfer sizes.',
                    'Unused CSS Removal (Tree Shaking): Utilities like PurgeCSS analyze production HTML, JavaScript, and React component code paths to identify and strip unused styles from the final deployment build.'
                ]}
            />

            <DocH3>2. Critical Rendering Path Optimization</DocH3>
            <DocList
                items={[
                    'Critical CSS Extraction: Extracts the exact styles needed to render content above the fold (the initial visible viewport space) and inlines them directly inside the HTML <head>. The remaining non-critical global layout sheets are then deferred and loaded asynchronously.',
                    'Render-Blocking Bypass: Standard stylesheets block browser parsing while loading. Loading non-critical sheets asynchronously ensures that layout assets are fetched in parallel without pausing DOM reconstruction.'
                ]}
            />



            <DocH3>3. Selector Efficiency & Font Delivery</DocH3>
            <DocList
                items={[
                    'Efficient Selector Trees: Browsers read CSS selectors from right to left (the key selector matches first). Deeply nested selector paths (e.g., body div .main ul li a) force the engine to check every ancestral DOM node, degrading paint speeds. Flat, explicit selector structures bypass this overhead completely.',
                    'Lazy Loading Fonts (font-display): Web fonts can cause layout shifts or flash invisible text during page loads. Using font-display: swap; tells the browser to temporarily use a fallback system font while downloading the custom web font, preventing text delays.'
                ]}
            />

            <DocH2>Production-Grade Optimization & Delivery Blueprint</DocH2>
            <DocP>
                Below is a production-optimized CSS delivery layout demonstrating efficient asset structures, fallback system font mappings, and critical inline delivery setups:
            </DocP>

            <DocH3>1. The Optimized Performance Sheet (perf-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION HIGH-PERFORMANCE OPTIMIZED ASSET BLOCKS
   ======================================================= */

/* A. PERFORMANCE OPTIMIZED WEBFONT DISPATCHER */
@font-face {
  font-family: 'Geist Variable';
  src: url('/fonts/GeistVF.woff2') format('woff2');
  font-weight: 100 900;
  
  /* CRITICAL: Instantly renders system fallback fonts while asset pulls in */
  font-display: swap;
}

/* B. MINIMAL FALLBACK FONT STACK MAPPING */
.perf-optimized-typography {
  font-family: 'Geist Variable', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* C. HIGH-EFFICIENCY FLAT INTERFACE SELECTOR CHANNELS
   Avoids deep ancestral lookups like "body .container .card div h4" */
.c-perf-card {
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
}

.c-perf-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: oklch(0.2 0.02 240);
}

.c-perf-card__telemetry {
  font-family: monospace;
  font-size: 0.75rem;
  color: oklch(0.55 0.18 250);
}`}
            />

            <DocH3>2. Layout Implementation View (PerformanceWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './perf-engine.css';

export default function PerformanceWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-8 perf-optimized-typography text-xs flex flex-col items-center justify-center">
      
      {/* Target HTML Container utilizing critical optimized styles */}
      <article className="c-perf-card max-w-sm w-full shadow-sm space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="c-perf-card__title">Optimized Node Dispatcher</h3>
          <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
            100% Core Web Vital
          </span>
        </div>
        
        <p className="text-gray-500 leading-relaxed">
          This component leverages optimized, flat selectors, non-blocking asynchronous font swaps, and streamlined payloads to minimize layout thrashing and speed up page rendering.
        </p>

        <div className="bg-gray-50 p-3 rounded-lg border font-mono text-[10px] flex justify-between">
          <span className="text-gray-400">First Contentful Paint (FCP)</span>
          <span className="font-bold text-gray-700">0.2s</span>
        </div>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}