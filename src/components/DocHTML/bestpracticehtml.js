import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLBestPracticesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Enterprise Web Architecture: Structural Semantics, Global Accessibility (a11y), Performance Optimization, and SEO Blueprints</DocTitle>

            <DocP>
                Building production-ready HTML requires balancing structural accessibility, semantic clarity, search engine visibility, and fast page loads. A messy DOM structure degrades user experience and hurts search rankings. Following industry-wide best practices ensures your applications remain readable, highly performant, and completely accessible to assistive devices.
            </DocP>

            <DocH2>The Pillars of Modern Web Engineering</DocH2>
            <DocP>
                Building professional interfaces means managing file structures, making code accessible, and writing semantic markup that search engines can easily index.
            </DocP>

            <DocH3>1. Standardized Naming Conventions &amp; Code Organization</DocH3>
            <DocP>
                Clean, standardized file names keep code paths intuitive and predictable across team deployments.
            </DocP>
            <DocList
                items={[
                    '<strong>Resource Case Formatting:</strong> Always use lowercase Kebab-Case (e.g., <code>user-profile-card.html</code>) for document files, style files, and media assets. Avoid spaces or mixed casing to prevent link breaks on case-sensitive Unix servers.',
                    '<strong>Structural Organization:</strong> Separate asset pipelines by isolating template segments, page modules, global styles, and dynamic runtime scripts into distinct, dedicated folders.'
                ]}
            />

            <DocH3>2. Semantic HTML &amp; Global Accessibility (WCAG Compliance)</DocH3>
            <DocP>
                Semantic tags explain the layout structure clearly to both the browser and assistive technologies.
            </DocP>
            <DocList
                items={[
                    '<strong>Document Landmarks:</strong> Replace unsemantic <code>&lt;div&gt;</code> elements with structural layout tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code>.',
                    '<strong>Accessibility Anchors:</strong> Enforce explicit <code>aria-label</code> controls on interactive items, maintain a logical heading progression (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>), and ensure all visual assets include meaningful alternative text (<code>alt="..."</code>) attributes.'
                ]}
            />

            <DocH3>3. Core Web Vitals Performance Optimization</DocH3>
            <DocP>
                Optimizing HTML mechanics directly improves load speeds and reduces layout shifts.
            </DocP>
            <DocList
                items={[
                    '<strong>Layout Stability Metrics:</strong> Always declare explicit aspect ratios using <code>width</code> and <code>height</code> attributes on media tags. This prevents layout shifts and improves your Cumulative Layout Shift (CLS) score.',
                    '<strong>Resource Fetch Strategy:</strong> Speed up initial page paints by using <code>loading="lazy"</code> on below-the-fold media elements and setting up <code>rel="preload"</code> hooks for critical runtime typography assets.'
                ]}
            />

            <DocH3>4. Search Engine Optimization (SEO) Architecture</DocH3>
            <DocP>
                HTML structures form the foundation for web search crawlers. Adding structured metadata details ensures your content indexes cleanly.
            </DocP>
            <DocList
                items={[
                    '<strong>Metadata Clusters:</strong> Include descriptive <code>&lt;title&gt;</code> tags along with search summaries in <code>&lt;meta name="description"&gt;</code> configuration headers.',
                    '<strong>Social Index Links:</strong> Integrate Open Graph (<code>og:type</code>, <code>og:title</code>) and Twitter card descriptors to control exactly how links look when shared across digital platforms.'
                ]}
            />

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Optimization Domain</th>
                            <th className="p-3">Critical Architectural Impact Factor</th>
                            <th className="p-3">Production Verification Standards</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Semantic Structure</td>
                            <td className="p-3">Assists assistive screen readers and clarifies page content mapping for search indexing crawlers.</td>
                            <td className="p-3">Zero un-semantic component wrappers; passing strict W3C validator checks.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Performance Engineering</td>
                            <td className="p-3">Speeds up content delivery, preventing layout shifts when visual assets load.</td>
                            <td className="p-3">Lazy-loading media, layout dimensions on images, and deferred script processing pipelines.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">SEO Strategy</td>
                            <td className="p-3">Controls your site's search visibility and manages how rich snippets render across social platforms.</td>
                            <td className="p-3">Valid canonical links, verified robots directives, and complete Open Graph schemas.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Enterprise Production Blueprint</DocH2>
            <DocP>
                Review the fully optimized code implementation below to guide your application builds, followed by an interactive workspace that demonstrates how accessible and semantic rules are verified:
            </DocP>

            <DocH3>1. Hardened Semantic &amp; Accessible Web Layout (accessible-platform.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Analytics Engine Dashboard | Enterprise Processing Systems</title>
  <meta name="description" content="Access real-time stream execution metrics, custom reporting pipelines, and modular cluster data nodes safely.">
  <link rel="canonical" href="https://systems.example.com/dashboard">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Analytics Engine Dashboard">
  <meta property="og:description" content="Access real-time stream execution metrics.">
  <meta property="og:image" content="https://systems.example.com/assets/meta-preview.jpg">

  <link rel="preload" href="/assets/fonts/inter-core.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/design-system.css">
  <script defer src="/assets/js/dashboard-runtime.js"></script>
</head>
<body>

  <header class="global-navigation-bar">
    <nav aria-label="Primary Application Navigation">
      <a href="/dashboard" class="brand-logo-anchor">
        <img src="/assets/branding/logo.svg" width="120" height="40" alt="Enterprise Processing Engine Home">
      </a>
      <ul class="nav-links-list">
        <li><a href="/clusters">Data Nodes</a></li>
        <li><a href="/security" aria-current="page">Security Log</a></li>
      </ul>
    </nav>
  </header>

  <main id="primary-content-viewport">
    
    <article class="data-metrics-card">
      <header class="card-headings-group">
        <h1>Node System Performance Metrics</h1>
        <p class="timestamp-subtitle">Data stream updated <time datetime="2026-07-15T16:00">4:00 PM</time></p>
      </header>

      <section aria-labelledby="stream-status-heading">
        <h2 id="stream-status-heading">Active Pipeline Clusters</h2>
        <p>Operational data parameters reflect consistent data streams across global cluster networks.</p>
        
        <img 
          src="/assets/visualizations/graph.webp" 
          width="800" 
          height="400" 
          loading="lazy" 
          alt="Visual bar chart plotting data packet distribution across clusters alpha through delta."
          class="fluid-metrics-image"
        >
      </section>
    </article>

  </main>

  <footer class="global-system-footer">
    <p>&copy; 2026 Enterprise Processing Systems. Distributed under verified compliance frameworks.</p>
  </footer>

</body>
</html>`}
            />

            <DocH3>2. Live Accessibility and Semantics Audit Simulator (HTMLBestPracticesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLBestPracticesWorkspace() {
  const [useAccessibility, setUseAccessibility] = useState(true);

  // Dynamic audit tracker reports
  const activeDeficiencies = useAccessibility 
    ? [] 
    : [
        'Missing standard alternative image label [alt=""] text descriptor.',
        'Interactive control lacks clear text descriptor labels [aria-label].',
        'Unsemantic node layout wrapper breaks standard screen reader accessibility tree mappings.'
      ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Semantic &amp; Accessibility Inspector</h3>
        <p className="text-gray-500 mt-1">
          Toggle the quality mode settings below to see how adding semantic elements and ARIA landmarks updates the accessibility tree.
        </p>
      </header>

      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px]">
        
        {/* LEFT COMPONENT CONTROLS (5 Columns) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
              Quality Assurance Profiler
            </span>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">Code Configuration Profile</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setUseAccessibility(true)}
                  className={"flex-1 py-2 rounded-lg border font-medium transition-all " + (useAccessibility ? "bg-emerald-600 text-white border-emerald-600 shadow-xs" : "bg-white text-slate-600 border-gray-200 hover:bg-slate-50")}
                >
                  Enterprise Compliant
                </button>
                <button
                  onClick={() => setUseAccessibility(false)}
                  className={"flex-1 py-2 rounded-lg border font-medium transition-all " + (!useAccessibility ? "bg-red-600 text-white border-red-600 shadow-xs" : "bg-white text-slate-600 border-gray-200 hover:bg-slate-50")}
                >
                  Legacy Unstructured
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Active Structural Blueprint View</span>
            <div className="max-h-[120px] overflow-y-auto font-mono text-emerald-400 whitespace-pre-wrap leading-normal text-[10px]">
              {useAccessibility ? (
\`<main id="content">
  <article>
    <h1>System Active Nodes</h1>
    <button aria-label="Refresh Systems">
      <img src="icon.svg" alt="Reload System logs">
    </button>
  </article>
</main>\`
              ) : (
\`<div id="wrapper">
  <div class="box">
    <div class="heading-bold">System Active Nodes</div>
    <div class="clickable-icon-btn" onclick="refresh()">
      <img src="icon.svg">
    </div>
  </div>
</div>\`
              )}
            </div>
          </div>
        </div>

        {/* RIGHT PIPELINE PREVIEW SCREEN (7 Columns) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Screen Reader Engine Accessibility Mapping
            </span>

            {/* Simulated diagnostic window viewport */}
            <div className="p-6 border border-slate-200 bg-slate-50 rounded-xl min-h-[160px] flex flex-col justify-center">
              {useAccessibility ? (
                <div className="space-y-2 w-full">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl shadow-xs text-emerald-900 flex items-center space-x-2">
                    <span className="font-bold text-xs text-emerald-600">✓</span>
                    <span className="font-sans">Accessibility tree compiled successfully with zero validation errors.</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg text-slate-600 font-mono text-[10px] space-y-1 shadow-2xs">
                    <div><span className="text-blue-600 font-bold">Role: Main Landmark</span> — Contains semantic article structures.</div>
                    <div><span className="text-blue-600 font-bold">Heading L1</span> — "System Active Nodes" verified text label.</div>
                    <div><span className="text-blue-600 font-bold">Role: Focusable Button</span> — Alternative access route active ("Reload System logs").</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 w-full">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl shadow-xs text-red-900 flex items-center space-x-2">
                    <span className="font-bold text-xs text-red-600">⚠</span>
                    <span className="font-sans">Lighthouse accessibility audit reports serious compliance defects:</span>
                  </div>
                  <div className="p-2 bg-white border border-red-100 rounded-lg space-y-1 shadow-2xs">
                    {activeDeficiencies.map((error, idx) => (
                      <div key={idx} className="text-red-600 font-mono text-[10px] pl-2 border-l-2 border-red-500">
                        {error}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Key Architecture Rule:</strong> Browsers rely on clean semantic structures to build accessibility trees. Writing accessible code isn't just a compliance requirement—it directly helps search engines understand your application layout, improving both user experience and organic search rankings.
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