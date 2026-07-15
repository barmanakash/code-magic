import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLSemanticDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Semantic HTML5: Document Architecture, Accessibility Trees, and Structural Layouts</DocTitle>

            <DocP>
                Semantic HTML5 involves using elements that clearly describe their meaning to both the browser and the developer. Moving away from legacy "div soup" layout frameworks, semantic markup forms the backbone of the browser's **Accessibility Tree**. This allows assistive technologies (like screen readers) to efficiently index pages, improves search engine crawler optimization (SEO), and creates highly maintainable source code.
            </DocP>

            <DocH2>The Structural Blueprint Tags</DocH2>

            <DocH3>1. Landmark Parent Layout Containers</DocH3>
            <DocList
                items={[
                    'header: Defines an introductory header container for a page or an isolated section. It typically holds logos, navigational links, search fields, or organizational tracking headings.',
                    'nav: Marks a block of navigational elements explicitly targeted for site index pathways. Bypassing standard links, screen readers look for <nav> nodes to offer quick skip-navigation routes.',
                    'main: Represents the unique, central core content of the document. A single page must contain only **one** visible <main> element, and it should exclude content repeated across pages like sidebars or footers.'
                ]}
            />



            <DocH3>2. Content Scoping Layout Blocks</DocH3>
            <DocList
                items={[
                    'article: Wraps an independent, self-contained composition that can be structurally removed and distributed on its own (e.g., a forum post, a blog entry, a product card, or an interactive widget).',
                    'section: Defines a logical grouping of related content, typically identified with a nested heading tag (<h2> through <h6>). Use it to break a long document into distinct chapters or themes.',
                    'aside: Defines content that is tangentially related to the surrounding material—frequently styled as sidebars, dynamic callout blocks, glossary terms, or contextual advertisement containers.',
                    'footer: Defines the concluding footer block for its nearest layout parent. It generally contains copyright information, terms of service agreements, privacy policy references, and quick contact anchors.'
                ]}
            />

            <DocH2>Inline Semantic Micro-Formats & Interactive Tags</DocH2>

            <DocH3>1. Embedded Assets & Contact Nodes</DocH3>
            <DocList
                items={[
                    'figure & figcaption: An isolated semantic block used to wrap an illustration, diagram, code snippet, or media element along with a clear title or caption (<figcaption>).',
                    'address: Provides contact details for a person or an organization. When wrapped inside an <article>, it represents the contact information for that specific post; when placed inside the global page footer, it represents the site author\'s contact info.'
                ]}
            />

            <DocH3>2. Date Tracking & Native Accordion Modules</DocH3>
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Element Tag</th>
                            <th className="p-3">Semantic Purpose & Mechanics</th>
                            <th className="p-3">SEO / User Agent Advantage</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;time datetime="value"&gt;</td>
                            <td className="p-3">Translates human-readable calendar strings into machine-readable ISO 8601 strings (e.g., <code>datetime="2026-07-15"</code>).</td>
                            <td className="p-3">Allows calendar applications to parse page schedules automatically and enhances rich snippets for search engines.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;details&gt;</td>
                            <td className="p-3">Creates a native disclosure widget that lets users reveal hidden text without requiring JavaScript toggle code.</td>
                            <td className="p-3">Reduces bundle size by replacing custom toggle components with a highly accessible native browser element.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;summary&gt;</td>
                            <td className="p-3">Defines the visible, clickable label heading for its parent <code>&lt;details&gt;</code> container.</td>
                            <td className="p-3">Automatically receives keyboard focus hooks (Space/Enter keys) to let users toggle the disclosure panel natively.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production Semantic Shell Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready document shell demonstrating correct nesting rules for semantic structures, time parameters, and dynamic disclosure interfaces:
            </DocP>

            <DocH3>1. Complete Semantic Architecture (semantic-index.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<header class="c-global-header">
  <div class="c-logo">Enterprise Operations Vault</div>
  <nav class="c-main-navigation" aria-label="Primary Portal Navigation">
    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/telemetry">Telemetry Systems</a></li>
    </ul>
  </nav>
</header>

<main id="main-content" class="c-global-main">
  
  <section class="c-content-section" aria-labelledby="section-heading-nodes">
    <h2 id="section-heading-nodes">Active Telemetry Cluster Overview</h2>
    
    <article class="c-node-card">
      <header class="c-node-card__header">
        <h3>Primary Cluster: Node ap-south-1a</h3>
        <p>System deployment timestamp: <time datetime="2026-07-15T09:30">July 15, 2026</time></p>
      </header>
      
      <p>This node controls core data streams and manages microservice routing topologies across the regional database cluster.</p>
      
      <details class="c-accordion">
        <summary class="c-accordion__trigger">View Advanced Hardware Specifications</summary>
        <div class="c-accordion__content">
          <p>Memory Configuration: 64GB ECC DDR5 RAM. Processor Infrastructure: AMD EPYC 32-Core Platform.</p>
        </div>
      </details>
    </article>
  </section>

  <aside class="c-context-sidebar" aria-label="Secondary Metrics Context">
    <h4>Cluster Support Line</h4>
    <address class="c-contact-card">
      Enterprise Cloud Operations<br />
      <a href="mailto:ops@enterprise.com">ops@enterprise.com</a><br />
      Building 4, Sector 12, Jabalpur, MP
    </address>
  </aside>

</main>

<footer class="c-global-footer">
  <p>&copy; 2026 Enterprise Operations. All Rights Reserved. Systems Running Standard Verified Configurations.</p>
</footer>`}
            />

            <DocH3>2. Layout Integration View (HTMLSemanticWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLSemanticWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Semantic Document Inspector</h3>
        <p className="text-gray-500 mt-1">
          Observe how semantic elements map out clean sections, sidebars, and native accordions.
        </p>
      </header>

      {/* Main Structural Mockup Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Semantic Shell
        </div>

        {/* Header Block simulation */}
        <header className="bg-slate-900 text-white p-3 rounded-xl flex items-center justify-between border">
          <span className="font-bold tracking-tight text-[10px]">Header: [ AppLogo ]</span>
          <nav className="flex gap-3 text-slate-400 font-medium font-mono text-[9px]">
            <span className="hover:text-white cursor-pointer underline">Nav-LinkA</span>
            <span className="hover:text-white cursor-pointer underline">Nav-LinkB</span>
          </nav>
        </header>

        {/* Central main workspace layout split */}
        <main className="grid grid-cols-3 gap-4">
          
          {/* Main content grid area (2 columns) */}
          <section className="col-span-2 space-y-3 border border-dashed border-slate-300 p-3 rounded-xl bg-slate-50/50">
            <span className="font-mono text-[8px] text-slate-400 uppercase block font-bold">Section Container</span>
            
            <article className="bg-white border p-3 rounded-lg shadow-sm space-y-2">
              <span className="bg-emerald-50 text-emerald-700 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase inline-block">
                Article
              </span>
              <h4 className="font-bold text-gray-800 text-[11px]">System Status Log</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Core partitions running smoothly. Last verified node sync: 
                <time className="font-mono text-blue-600 bg-blue-50/50 px-1 py-0.5 rounded mx-1 text-[9px]" dateTime="2026-07-15">2026-07-15</time>
              </p>

              {/* Native interactive details display component inside template literal string */}
              <details className="border rounded-lg mt-2 bg-slate-50 group cursor-pointer overflow-hidden transition-all duration-200 select-none">
                <summary className="p-2 font-semibold text-slate-700 hover:bg-slate-100 flex justify-between items-center text-[10px]">
                  <span>Details / Summary Trigger</span>
                  <span className="text-[8px] text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-2 border-t text-[9px] text-slate-500 leading-relaxed bg-white font-mono">
                  [ Hidden telemetry variables inside disclosure box. Fully responsive markup. ]
                </div>
              </details>
            </article>
          </section>

          {/* Aside sidebar widget layout representation */}
          <aside className="border border-dashed border-slate-300 p-2.5 rounded-xl bg-slate-50 flex flex-col justify-between text-gray-600">
            <div>
              <span className="font-mono text-[8px] text-slate-400 uppercase block font-bold mb-1">Aside Node</span>
              <p className="text-[9px] leading-snug">Tangential metrics panel info block.</p>
            </div>
            
            <address className="not-italic border-t pt-2 border-slate-200 mt-2 text-[9px] text-slate-400 font-mono">
              <strong>Address:</strong><br />
              ops@node.io
            </address>
          </aside>

        </main>

        {/* Global base footer layout block */}
        <footer className="bg-slate-100 p-2 rounded-xl text-center border text-slate-400 font-mono text-[9px]">
          Footer Container &copy; 2026 Registry Hub
        </footer>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}