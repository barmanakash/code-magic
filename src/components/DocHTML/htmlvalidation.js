import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLValidationDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Validation: W3C Compliance, Structural Syntax Auditing, and Error Mitigation</DocTitle>

            <DocP>
                HTML Validation is the technical process of testing a document's markup against the official structural rules set by the World Wide Web Consortium (W3C). Validating your HTML code ensures that browser layout engines can parse the Document Object Model (DOM) without triggering fallback error-correction modes. This consistency directly improves cross-browser rendering stability, accessibility mappings, and search engine crawl accuracy.
            </DocP>

            <DocH2>The W3C Validation Process</DocH2>
            <DocP>
                When a browser encounters malformed HTML markup, it doesn't crash. Instead, it tries to repair the missing tags or incorrect attributes on the fly using internal "quirks mode" rules. While this keeps the page from breaking completely, it can lead to unpredictable layouts across different screen configurations and devices.
            </DocP>
            <DocP>
                The <strong>W3C Markup Validation Service</strong> serves as the industry standard parser to catch structural bugs before code hits production servers. Passing validation means your markup is safe from unpredictable browser guesswork.
            </DocP>



            <DocH2>High-Frequency Validation Errors Matrix</DocH2>
            <DocP>
                Enterprise web applications frequently trip over a predictable set of structural markup errors. The table below details these common validation errors, why they break specs, and how to resolve them:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">W3C Validation Error Type</th>
                            <th className="p-3">Broken Code Sample</th>
                            <th className="p-3">Technical Impact & Correction Rule</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">Improper Element Nesting Order</td>
                            <td className="p-3"><code>&lt;strong&gt;&lt;em&gt;Text&lt;/strong&gt;&lt;/em&gt;</code></td>
                            <td className="p-3 font-sans">Elements must be closed in the exact reverse order they were opened. The corrected syntax rule requires: <code>&lt;strong&gt;&lt;em&gt;Text&lt;/em&gt;&lt;/strong&gt;</code>.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">Illegal Element Containment</td>
                            <td className="p-3"><code>&lt;ul&gt;&lt;div&gt;List Item&lt;/div&gt;&lt;/ul&gt;</code></td>
                            <td className="p-3 font-sans">Unordered lists can only accept <code>&lt;li&gt;</code> tags as direct children. Move wrapping layout elements inside the list item node instead.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">Missing Void-Tag Attribute Meta</td>
                            <td className="p-3"><code>&lt;img src="pic.jpg"&gt;</code> (with no alt text)</td>
                            <td className="p-3 font-sans">The W3C standard marks the <code>alt</code> attribute as a mandatory structural key for all image elements. Provide an empty string (<code>alt=""</code>) if the image is purely decorative.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">Duplicate Global Identifiers</td>
                            <td className="p-3">Multiple nodes declaring <code>id="submit-action"</code></td>
                            <td className="p-3 font-sans">An <code>id</code> value must be completely unique within a page view. Switch duplicate tags to a shared <code>class</code> attribute instead.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Programmatic Error Mitigation Strategies</DocH2>
            <DocP>
                Manually uploading pages to a validation website isn't scalable for modern development teams. Instead, engineering teams catch syntax bugs early using automated tools:
            </DocP>
            <DocList
                items={[
                    'Integrated Development Environment (IDE) Linters: Configure project rules using plugins like HTMLHint or ESLint with HTML extensions. This surfaces parsing bugs directly in the code editor with real-time warning indicators.',
                    'Continuous Integration (CI) Checks: Add automated headless validation steps (such as html-validator modules) into your deployment pipelines. This blocks code changes from merging if they contain malformed markup structure.'
                ]}
            />

            <DocH2>Production-Grade HTML Validation Blueprint</DocH2>
            <DocP>
                Below is a side-by-side comparison of malformed markup corrected into clean, validated code, paired with an interactive workspace that demonstrates how validation states map to live components:
            </DocP>

            <DocH3>1. Structural Debugging Transformation (validation-remediation.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div id="content-block">
  <p>Review the primary operational chart metrics:
    <div class="nested-data-box">Telemetry values record green bounds.</div>
  </p>
  <a href="/download-logs" target="_blank">
    <button id="action-trigger">Download Ledger Logs</button>
  </a>
</div>

<div id="content-block-remediated">
  <p>Review the primary operational chart metrics:</p>
  <div class="nested-data-box">Telemetry values record green bounds.</div>
  
  <a href="/download-logs" target="_blank" class="button-styled-link">Download Ledger Logs</a>
</div>`}
            />

            <DocH3>2. Interactive Validation Compliance Sandbox (HTMLValidationWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLValidationWorkspace() {
  const [fixErrors, setFixErrors] = useState(false);

  // Raw text visualization showing malformed element nesting structures
  const brokenCodeSnippet = 
    \`\n\` +
    \`<p>Our baseline telemetry report highlights:\n\` +
    \`  <div class="metric-card">Core Temp: 42°C</div>\n\` +
    \`</p>\n\` +
    \`<img src="/assets/data-chart.webp">\`;

  // Raw text visualization showing fully compliant element nesting structures
  const validCodeSnippet = 
    \`\n\` +
    \`<p>Our baseline telemetry report highlights:</p>\n\` +
    \`<div class="metric-card">Core Temp: 42°C</div>\n\` +
    \`<img src="/assets/data-chart.webp" alt="System telemetry metrics data chart" />\`;

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML Validation Simulator Workspace</h3>
        <p className="text-gray-500 mt-1">
          Toggle the validation state switch below to see how malformed HTML markup triggers structural syntax errors, and how to fix them for standard browser engines.
        </p>
      </header>

      {/* Main Validation Simulator Grid Split */}
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
        
        {/* LEFT CARD PANEL: PARSER CODE VIEW ORCHESTRATOR */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                Parser Target Stream
              </span>
              <button
                onClick={() => setFixErrors(!fixErrors)}
                className={"px-3 py-1 rounded-md font-mono font-bold uppercase transition-colors text-[9px] " + (fixErrors ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800")}
              >
                Remediation: {fixErrors ? "Errors Fixed" : "Show Raw Errors"}
              </button>
            </div>

            <p className="text-gray-600 leading-relaxed mb-3">
              {fixErrors ? (
                "The code structure below splits block-level elements cleanly out of paragraph tags and provides valid alt text for the image node. This creates a predictable layout flow."
              ) : (
                "The target sample below nests a block-level <div> inside a inline-level <p> tag, and leaves off the mandatory alt attribute. This creates structural bugs in the document tree."
              )}
            </p>

            {/* Validation Log Output Deck */}
            <div className={"p-3 border rounded-xl font-mono text-[10px] space-y-2 " + (fixErrors ? "bg-emerald-50/50 border-emerald-200" : "bg-rose-50/50 border-rose-200")}>
              <span className={"font-bold uppercase tracking-wider text-[9px] block " + (fixErrors ? "text-emerald-800" : "text-rose-800")}>
                // W3C Validation Engine Report
              </span>
              {fixErrors ? (
                <div className="text-emerald-800">
                  ✓ Document parsing check complete. 0 structural syntax warnings found. Document status: Compliant.
                </div>
              ) : (
                <div className="text-rose-800 space-y-1">
                  <div>• ERROR: Element &lt;div&gt; not allowed as child of element &lt;p&gt; in this context.</div>
                  <div>• ERROR: Element &lt;img&gt; must provide a valid text string for attribute alt.</div>
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
              {fixErrors ? validCodeSnippet : brokenCodeSnippet}
            </pre>
          </div>
        </div>

        {/* RIGHT CARD PANEL: RENDER EFFECTS AND BEST PRACTICES */}
        <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Simulated DOM Tree Interpretation
            </span>

            {/* Simulated browser presentation block */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-left shadow-xs">
              <p className="text-slate-800 font-sans">
                Our baseline telemetry report highlights:
              </p>
              
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-950 font-bold font-mono text-center">
                Core Temp: 42°C
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t font-mono">
                <span>Element Hierarchy: Valid</span>
                <span className={fixErrors ? "text-emerald-600 font-bold" : "text-rose-500 font-bold"}>
                  {fixErrors ? "Clean DOM Map" : "Broken Tree Branch"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-950 text-[10px] leading-relaxed rounded-xl">
            <strong>Engineering Rule:</strong> Browsers are very forgiving with broken HTML and will often render it anyway, but assistive tools like screen readers and search indexers aren't. Write validated markup to ensure your site works perfectly for all users and tools.
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