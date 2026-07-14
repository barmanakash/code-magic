import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLIntroductionDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Structural Architecture & Markup Evolution</DocTitle>

            <DocP>
                HyperText Markup Language (HTML) is the foundational declarative standard of the World Wide Web. Rather than executing imperative programming logic, HTML defines the semantic skeleton, document model (DOM) nodes, and metadata of a web application. It acts as the core target for browser parsing engines, translating raw network payloads into structured node trees that CSS styles and JavaScript manipulates.
            </DocP>

            <DocH2>History & The Evolution Stream (HTML 1.0 → HTML5)</DocH2>
            <DocP>
                The development of HTML mirrors the transition of the web from a collection of static, text-based research papers into a platform for rich, highly interactive application workspaces:
            </DocP>
            <DocList
                items={[
                    'HTML 1.0 (1991 - 1993): Pioneered by Sir Tim Berners-Lee at CERN. It supported basic text formatting, simple hyperlinks (href), and native list components.',
                    'HTML 2.0 (1995): Established as the first formal W3C RFC standard. Introduced form input capabilities, mapping out interactive user input cycles.',
                    'HTML 3.2 (1997): Standardized table structures, text alignment properties, and basic scripting support (like applets), bringing layout controls directly into the markup.',
                    'HTML 4.01 (1999): Separated presentation (CSS) from document structure. It introduced robust styling options, script tags, and advanced table controls.',
                    'XHTML 1.0 (2000): Re-serialized HTML 4.01 using strict XML parsing rules. It mandated lowercase tags, self-closing tags, and quoted attributes, paving the way for structured markup.',
                    'HTML5 (2014 - Present): Introduced native multimedia elements (<video>, <audio>), high-performance vector graphics (<canvas>, <svg>), native semantic elements (<main>, <article>, <section>), and integration with browser APIs.'
                ]}
            />

            <DocH2>Standardization Governance: W3C vs. WHATWG</DocH2>
            <DocP>
                The dual-governance model of web standards was born out of a critical divergence in architectural philosophies:
            </DocP>
            <DocList
                items={[
                    'The W3C (World Wide Web Consortium): Envisioned a future built on XML. They pushed for XHTML 2.0, which was strictly parsed but lacked backwards compatibility, meaning existing websites would break on syntax errors.',
                    'The WHATWG (Web Hypertext Application Technology Working Group): Formed by browser developers (Mozilla, Opera, Apple) in 2004. They prioritized continuous backwards compatibility, dynamic web apps, and a pragmatic "Living Standard" model.',
                    'The Convergence: The W3C ultimately abandoned XHTML 2.0 in 2009. Today, WHATWG maintains the authoritative "HTML Living Standard," which continuously evolves alongside modern browser capabilities.'
                ]}
            />



            <DocH2>The Markup Specification Matrix</DocH2>
            <DocP>
                Understanding the differences between HTML, XHTML, and XML is essential for choosing the right parser and configuration for your application:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Specification</th>
                            <th className="p-3">Parsing Rules</th>
                            <th className="p-3">Error Handling</th>
                            <th className="p-3">Primary Use Case</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-semibold text-blue-600">HTML</td>
                            <td className="p-3">Flexible, permissive, case-insensitive.</td>
                            <td className="p-3">Graceful. Attempts to repair syntax errors (tag soup).</td>
                            <td className="p-3">Standard web layout rendering and SEO optimization.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-blue-600">XHTML</td>
                            <td className="p-3">Strict, structured XML rules (all lowercase, closed tags).</td>
                            <td className="p-3">Fatal. Parsing fails immediately if a syntax rule is violated.</td>
                            <td className="p-3">Legacy database ingestion pipelines requiring structured data.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-blue-600">XML</td>
                            <td className="p-3">Strict, extensible metalanguage (no predefined tag names).</td>
                            <td className="p-3">Fatal. Structural parsing fails on any markup errors.</td>
                            <td className="p-3">Cross-platform data transport, config maps, and serialization.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Engine Evaluation: Advantages & Disadvantages</DocH2>

            <DocH3>Key Features & Developer Advantages</DocH3>
            <DocList
                items={[
                    'Universal Runtime Support: Executed natively by every major browser engine (Blink, WebKit, Gecko) without compiling or installing external runtimes.',
                    'SEO & Accessibility (A11y): Semantic landmark nodes (<header>, <nav>, <main>) communicate document structures directly to search crawlers and screen readers.',
                    'Hardware-Accelerated Canvas & Media: Native graphic rendering APIs (<canvas>, <svg>) and media tags bypass old, battery-draining plugin architectures.',
                    'Zero License Barriers: Fully open-source and free, driven by global community consensus standards.'
                ]}
            />

            <DocH3>Disadvantages & Constraints</DocH3>
            <DocList
                items={[
                    'No Built-In Dynamic Logic: Lacks native state, loops, or conditional processing, relying entirely on client-side JavaScript or server-side preprocessors.',
                    'Inconsistent Engine Implementation: Even with WHATWG standards, older browsers or legacy layout engines can sometimes interpret elements differently, requiring fallback scripts.',
                    'Vulnerability to Injection: Permissive parsing rules can leave forms and input channels open to Cross-Site Scripting (XSS) attacks if values are not properly sanitized.'
                ]}
            />

            <DocH2>Production-Grade HTML5 Document Blueprint</DocH2>
            <DocP>
                Below is a production-ready, semantic HTML5 document template. It includes security optimization headers, search crawler metadata, open-graph integrations, and clean structural landmarks:
            </DocP>

            <DocH3>1. Standard Semantic Skeleton (index.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Production Web Console | Semantic Architecture</title>
  <meta name="description" content="An optimized, semantic-first HTML5 application workspace shell designed for standard enterprise runtimes.">
  <meta name="robots" content="index, follow">

  <meta property="og:title" content="Production Web Console">
  <meta property="og:description" content="An optimized semantic-first HTML5 application workspace shell.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://console.enterprise.com">
  <meta property="og:image" content="/assets/og-telemetry-banner.png">

  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>

  <header class="app-header">
    <div class="app-header__logo">Enterprise Console</div>
    <nav class="app-header__navigation" aria-label="Primary Application Navigation">
      <ul>
        <li><a href="/dashboard" aria-current="page">Dashboard</a></li>
        <li><a href="/clusters">System Clusters</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content" class="app-viewport">
    
    <article class="data-card">
      <header class="data-card__header">
        <span class="badge">Live Node</span>
        <h2>Telemetry Core Stream</h2>
      </header>
      
      <section class="data-card__body">
        <p>This layout skeleton maps modern HTML5 semantic landmarks to ensure structural search engine visibility and support assistive accessibility screen readers.</p>
      </section>

      <footer class="data-card__footer">
        <button type="button" class="btn btn-primary">Refresh Metrics</button>
      </footer>
    </article>

  </main>

  <footer class="app-footer">
    <p>&copy; 2026 Enterprise Console. Systems Online.</p>
  </footer>

  <script src="/js/app.js" defer></script>
</body>
</html>`}
            />

            <DocH3>2. Layout Integration View (HTMLIntroductionWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLIntroductionWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Architecture Hub</h3>
        <p className="text-gray-500 mt-1">
          A physical representation of semantic nesting structures inside an active React component interface.
        </p>
      </header>

      {/* Visual Simulation of the HTML5 Document Architecture */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Document Skeleton
        </div>

        <div className="space-y-3">
          <div className="border border-dashed border-gray-300 p-2 rounded bg-gray-50/50">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">&lt;header&gt;</span>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800">Console Core</span>
              <span className="text-[10px] text-gray-500 underline">Navigation Links</span>
            </div>
          </div>

          <div className="border border-dashed border-gray-300 p-3 rounded bg-blue-50/10">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">&lt;main&gt;</span>
            <article className="bg-white border p-3 rounded-lg shadow-sm space-y-2">
              <span className="font-mono text-[9px] text-gray-400 block">&lt;article&gt;</span>
              <h4 className="font-bold text-gray-900">Semantic Node Dispatcher</h4>
              <p className="text-gray-500 leading-relaxed text-[11px]">
                Structuring HTML cleanly ensures high SEO scores and robust cross-browser parsing.
              </p>
            </article>
          </div>

          <div className="border border-dashed border-gray-300 p-2 rounded bg-gray-50/50 text-center text-gray-400 font-mono text-[9px]">
            &lt;footer&gt; &copy; 2026 Enterprise Systems
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