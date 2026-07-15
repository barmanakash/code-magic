import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLBestPracticesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Best Practices: Clean Markup Architecture, Validation, Semantics, and Enterprise Maintainability</DocTitle>

            <DocP>
                Writing high-quality HTML means treating frontend markup as a structured data layer rather than a casual visual framework. Clean, well-structured HTML serves as the foundation for modern web applications. It directly impacts browser rendering efficiency, SEO crawling precision, assistive technology mapping, and the long-term maintainability of enterprise-scale codebases.
            </DocP>

            <DocH2>The Pillars of Professional Markup Quality</DocH2>

            <DocH3>1. Structural Readability & Uniform Indentation</DocH3>
            <DocP>
                Consistent nesting and alignment make code clear and predictable, helping team members find structural bugs faster.
            </DocP>
            <DocList
                items={[
                    'Indent Standard: Use a consistent spacing model (typically 2 spaces) for every level of element nesting.',
                    'Case Uniformity: Write all HTML tags, attribute labels, and configuration flags in strict lower-case.',
                    'Clean Attribute Layout: Quote every attribute value with double quotes (<code>class="card-panel"</code>), and space layout keys cleanly.',
                    'Self-Closing Tags: In standard HTML5, avoid trailing forward slashes on self-closing tags (use <code>&lt;input type="text"&gt;</code> rather than <code>&lt;input /&gt;</code>) to align with standard web specifications.'
                ]}
            />

            <DocH3>2. Native Structural Semantics over Div Inflation</DocH3>
            <DocP>
                Avoid generic layout nesting (commonly known as "div soup"). Use native structural tags to declare exactly what purpose a content section serves:
            </DocP>
            <DocList
                items={[
                    'Use <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> to frame navigational blocks and structural footers.',
                    'Isolate main page content within a singular, high-level <code>&lt;main&gt;</code> tag wrapper.',
                    'Organize standalone, reusable layout blocks inside <code>&lt;article&gt;</code> tags, and group related content themes within <code>&lt;section&gt;</code> tags.',
                    'Use <code>&lt;aside&gt;</code> to isolate sidebar column components, tooltips, or secondary callout links.'
                ]}
            />



            <DocH3>3. Hardened Native Accessibility (A11y)</DocH3>
            <DocP>
                Build accessibility directly into your base DOM structure. Ensure every interactive or visual element includes its required accessibility configurations:
            </DocP>
            <DocList
                items={[
                    'Always provide functional <code>alt</code> text descriptions on graphics assets.',
                    'Ensure every form input is explicitly connected to a dedicated <code>&lt;label&gt;</code> element.',
                    'Use correct heading hierarchies (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>) sequentially without skipping levels to maintain a clear document structure for screen readers.'
                ]}
            />

            <DocH2>Document Validation Compliance Matrix</DocH2>
            <DocP>
                Invalid code forces browser layout engines into unpredictable compatibility rendering loops. Running documents through official W3C validation parsers catches structural errors early. The following table highlights common structural issues that break document compliance:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Structural Element Block</th>
                            <th className="p-3">Common Invalid Pattern</th>
                            <th className="p-3">Production-Grade Correct Syntax Rule</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">Element Nesting Rules</td>
                            <td className="p-3"><code>&lt;p&gt;Row Content &lt;div&gt;Block&lt;/div&gt;&lt;/p&gt;</code></td>
                            <td className="p-3 font-sans">Paragraph nodes cannot contain block-level element children. Keep inside block containers like <code>&lt;div&gt;</code> or <code>&lt;section&gt;</code> instead.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">Inline Links Placement</td>
                            <td className="p-3"><code>&lt;a href="..."&gt;&lt;h2&gt;Header Title&lt;/h2&gt;&lt;/a&gt;</code></td>
                            <td className="p-3 font-sans">While HTML5 allows wrapping structural tags in anchor links, placing large interactive blocks inside buttons or formatting links breaks screen reader reading orders. Keep link scopes tight.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">Global Key Identifiers</td>
                            <td className="p-3">Using duplicate <code>id="submit-btn"</code> keys on the same page view.</td>
                            <td className="p-3 font-sans">An <code>id</code> value must be completely unique across the active DOM view layer. Use reusable classes for repeated styles.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Architecting for Codebase Maintainability</DocH2>
            <DocP>
                As software engineering teams scale, standardizing structural styles ensures the codebase remains maintainable over time:
            </DocP>
            <DocList
                items={[
                    'Separation of Concerns: Keep structural layout completely isolated from presentation and interactive logic. Never write inline styling attributes (style="color: blue;") or raw inline event bindings (onclick="runAction()"). Handle these through CSS modules and JavaScript event listeners instead.',
                    'Enforce Automated Linters: Integrate formatting tools like Prettier and HTMLHint into your continuous integration (CI/CD) pipelines. Automated tools catch missing tags, trailing spaces, or unquoted attributes before they reach production servers.'
                ]}
            />

            <DocH2>Production-Grade Clean Code Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready template contrasted against an interactive architectural simulation component. It demonstrates proper code organization, complete semantics, and structural best practices:
            </DocP>

            <DocH3>1. Standard Validated Layout Structure (semantic-clean-base.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Corporate Platform Inventory Architecture Overview</title>
</head>
<body>

  <header class="app-navigation-deck">
    <nav aria-label="Primary Platform Navigation Directory">
      <a href="/dashboard" class="brand-anchor-link">
        <img src="/identity-logo.svg" alt="Enterprise Inventory Control Hub Identity" />
      </a>
      <ul class="nav-links-list">
        <li><a href="/stock">Stock Control Matrix</a></li>
        <li><a href="/reports">System Ledger Logs</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content-anchor">
    <article class="data-summary-report">
      <header>
        <h1>Q2 Operational Metrics Ledger</h1>
        <p>Published by Systems Operations Team on <time datetime="2026-06-15">June 15, 2026</time></p>
      </header>

      <section aria-labelledby="metrics-sub-heading">
        <h2 id="metrics-sub-heading">1. Operational Velocity Analytics</h2>
        <p>Current server telemetry details record significant performance jumps post bundle optimizations.</p>
      </section>
    </article>
  </main>

</body>
</html>`}
            />

            <DocH3>2. Interactive Code Quality Sandbox (HTMLBestPracticesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLBestPracticesWorkspace() {
  const [showSemanticCode, setShowSemanticCode] = useState(true);

  // Raw mock string representation of anti-pattern "Div Soup" structural coding
  const legacyDivSoupMarkup = 
    \`<div class="holder">\n\` +
    \`  <div class="top-row">\n\` +
    \`    <span class="header-text">System Alerts Log</span>\n\` +
    \`  </div>\n\` +
    \`  <div class="main-body">\n\` +
    \`    <div class="item-card" onclick="alert('Raw Action Execution')">\n\` +
    \`      <span class="bold-text">Critical Failure Alert</span><br>\n\` +
    \`      <span class="desc-text">Database connection pool timed out during health check.</span>\n\` +
    \`    </div>\n\` +
    \`  </div>\n\` +
    \`</div>\`;

  // Raw mock string representation of professional semantic structural coding
  const professionalSemanticMarkup = 
    \`<section aria-labelledby="alert-heading" class="p-4 border bg-white rounded-xl">\n\` +
    \`  <header class="border-b pb-2 mb-3">\n\` +
    \`    <h3 id="alert-heading" class="text-sm font-bold text-slate-900">System Alerts Log</h3>\n\` +
    \`  </header>\n\` +
    \`  <article class="p-3 bg-rose-50 border border-rose-200 rounded-lg flex flex-col space-y-1">\n\` +
    \`    <h4 class="font-bold text-rose-900 text-[11px]">Critical Failure Alert</h4>\n\` +
    \`    <p class="text-rose-800 text-[10px] leading-relaxed">\n\` +
    \`      Database connection pool timed out during health check.\n\` +
    \`    </p>\n\` +
    \`  </article>\n\` +
    \`</section>\`;

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML Code Quality Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Toggle between legacy anti-patterns and production-grade semantic markup to compare structural hierarchy and layout accessibility.
        </p>
      </header>

      {/* Main Panel View Card Split */}
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
        
        {/* LEFT CARD: CODE INTERACTION PROFILE CONTROLLER */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider">
                Structural Strategy Selection
              </span>
              <button
                onClick={() => setShowSemanticCode(!showSemanticCode)}
                className={"px-3 py-1 rounded-md font-mono font-bold uppercase transition-colors text-[9px] " + (showSemanticCode ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800")}
              >
                Strategy: {showSemanticCode ? "Semantic Core" : "Legacy Div Soup"}
              </button>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              {showSemanticCode ? (
                "Semantic elements give content clear context. Search engine crawlers and screen readers can naturally parse this structure, improving SEO metrics and accessibility without extra code overrides."
              ) : (
                "Div soup relies entirely on custom class names to explain what content means. This hides the structural meaning from assistive devices and screen readers, breaking the page's natural accessibility flow."
              )}
            </p>

            {/* Scorecard checklist box row */}
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-3 space-y-2 font-mono text-[10px]">
              <div className="flex items-center space-x-2">
                <span className={showSemanticCode ? "text-emerald-500" : "text-amber-500"}>{showSemanticCode ? "✓" : "✗"}</span>
                <span className="text-slate-700">W3C Compliant Validation Match</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={showSemanticCode ? "text-emerald-500" : "text-amber-500"}>{showSemanticCode ? "✓" : "✗"}</span>
                <span className="text-slate-700">Screen Reader Accessibility (A11y) Mapped</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={showSemanticCode ? "text-emerald-500" : "text-amber-500"}>{showSemanticCode ? "✓" : "✗"}</span>
                <span className="text-slate-700">Clean, Scalable Maintainability Score</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner">
            <span className="text-amber-400 font-bold block mb-1">// Active Code Snippet Visualization</span>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
              {showSemanticCode ? professionalSemanticMarkup : legacyDivSoupMarkup}
            </pre>
          </div>
        </div>

        {/* RIGHT CARD: LIVE VISUAL SIMULATED DISPLAY BOARD */}
        <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Simulated Client Viewport Output
            </span>

            {/* Visual simulation engine view container renders based on user chosen code path state */}
            {showSemanticCode ? (
              <div className="p-4 border bg-white rounded-xl shadow-xs text-left space-y-3 font-sans">
                <div className="border-b pb-1 flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 font-sans">System Alerts Log</h3>
                  <span className="bg-emerald-50 text-emerald-700 font-mono text-[8px] font-bold px-1 py-0.2 rounded uppercase">Accessible</span>
                </div>
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex flex-col space-y-1 font-sans">
                  <h4 className="font-bold text-rose-900 text-[10px] font-sans">Critical Failure Alert</h4>
                  <p className="text-rose-800 text-[10px] leading-relaxed font-sans">
                    Database connection pool timed out during health check.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 border border-dashed border-amber-300 bg-amber-50/30 rounded-xl shadow-xs text-left space-y-3 font-sans">
                <div className="flex items-center justify-between">
                  <span className="text-slate-800 font-bold text-xs font-sans">System Alerts Log</span>
                  <span className="bg-amber-100 text-amber-800 font-mono text-[8px] font-bold px-1 py-0.2 rounded uppercase">Div Soup Structure</span>
                </div>
                <div 
                  onClick={() => alert('Raw Action Execution via Element Property Hook')}
                  className="p-3 bg-white border border-slate-300 rounded cursor-pointer hover:bg-slate-50 transition-colors font-sans"
                >
                  <span className="font-bold text-slate-900 text-[10px] block font-sans">Critical Failure Alert</span>
                  <span className="text-slate-600 text-[10px] leading-relaxed block mt-1 font-sans">
                    Database connection pool timed out during health check.
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Key Architecture Rule:</strong> Using semantic HTML doesn't mean you can't style things freely. Write clean, descriptive code first, then apply your CSS layer to build beautiful, highly accessible web interfaces.
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