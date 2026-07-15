import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLDeprecatedTagsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Deprecated HTML Tags: Architectural Evacuation, Presentation-Markup Separation, and Legacy Refactoring Strategies</DocTitle>

            <DocP>
                In the foundational eras of the web, HTML routinely handled both document structure and visual presentation. However, modern web standards strictly enforce the **Separation of Concerns**: HTML serves purely as a semantic data layer, while CSS handles all presentation and styling layout configurations.
            </DocP>
            <DocP>
                Tags that violate this principle are classified as **Deprecated** or **Obsolete** by the W3C. While modern evergreen browsers occasionally maintain legacy internal routing to parse them for backwards compatibility, using them degrades application performance, triggers inefficient browser rendering pathways, breaks accessibility (A11y) tree structures, and causes validation failures in modern development pipelines.
            </DocP>

            <DocH2>The Legacy Element Evacuation Directory</DocH2>
            <DocP>
                To ensure production setups run on standard web engine paths, codebases must replace obsolete elements with modern, standard alternatives.
            </DocP>

            <DocH3>1. Presentational Styling Elements (`&lt;font&gt;`, `&lt;center&gt;`, `&lt;basefont&gt;`)</DocH3>
            <DocP>
                These tags explicitly hardcoded visual layouts into the DOM tree, forcing developers to make manual, repetitive updates across large sites.
            </DocP>
            <DocList
                items={[
                    '<code>&lt;font&gt;</code> &amp; <code>&lt;basefont&gt;</code>: Used historically to inject size, color, and face attributes directly onto textual content. Modern replacement requires applying explicit CSS typography properties.',
                    '<code>&lt;center&gt;</code>: Explicitly forced standard block layouts to align horizontally inside viewports. Modern architectures handle this cleanly using CSS Flexbox or Grid alignments.'
                ]}
            />

            <DocH3>2. Proprietary Engine Artifacts (`&lt;marquee&gt;`, `&lt;blink&gt;`)</DocH3>
            <DocP>
                Introduced during the historic browser wars, these non-standard components relied on unoptimized, custom browser rendering behaviors that often caused performance issues.
            </DocP>
            <DocList
                items={[
                    '<code>&lt;marquee&gt;</code>: Created rough scrolling horizontal loops of text. Modern implementations replace this with smooth, hardware-accelerated CSS keyframe transitions.',
                    '<code>&lt;blink&gt;</code>: Toggled element visibility on a fixed timer. This causes severe distractions for users and violates accessibility guidelines. If absolute animation loops are required, they must be implemented using controlled CSS animations.'
                ]}
            />

            <DocH3>3. Rigid Interface Containers (`&lt;frame&gt;`, `&lt;frameset&gt;`, `&lt;applet&gt;`)</DocH3>
            <DocP>
                These tags partitioned browser viewports into entirely distinct documents or loaded heavy third-party plug-in runtimes. This caused broken navigation flows, security risks, and poor search engine crawl accuracy.
            </DocP>
            <DocList
                items={[
                    '<code>&lt;frame&gt;</code> &amp; <code>&lt;frameset&gt;</code>: Split the browser screen into rigid sub-windows that broke standard browser back buttons and bookmark tracking. Modern single-page layouts use standard semantic sections combined with responsive CSS grid templates. For isolated nested documents, the modern standard is the <code>&lt;iframe&gt;</code> element.',
                    '<code>&lt;applet&gt;</code>: Used to execute heavy Java applets directly within the browser ecosystem. This pattern has been entirely replaced by modern, native HTML5 APIs (like the <code>&lt;canvas&gt;</code> element for graphics) or standard compiled JavaScript execution bundles.'
                ]}
            />



            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Obsolete Element</th>
                            <th className="p-3">Primary Technical Impact</th>
                            <th className="p-3">Modern Production Standard Replacement Syntax</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;font color="red"&gt;</td>
                            <td className="p-3 font-sans">Pollutes structural code layers; overrides global stylesheet definitions.</td>
                            <td className="p-3"><code>&lt;span className="text-rose-600"&gt;Text&lt;/span&gt;</code></td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;center&gt;</td>
                            <td className="p-3 font-sans">Lacks flexibility; overrides structural layout rules.</td>
                            <td className="p-3"><code>&lt;div className="flex justify-center items-center"&gt;</code></td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;marquee&gt;</td>
                            <td className="p-3 font-sans">Triggers layout re-calculations on the main execution thread, causing visual stutter.</td>
                            <td className="p-3"><code>@keyframes scroll &#123; 0% &#123; transform: translateX(0); &#125; &#125;</code></td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;frameset&gt;</td>
                            <td className="p-3 font-sans">Breaks URL states, document deep-linking, and blocks screen-reader readability paths.</td>
                            <td className="p-3 font-sans">Modular page routing built via CSS Grid and modern Javascript framework engines.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Refactoring Blueprint</DocH2>
            <DocP>
                Below is a side-by-side example showing legacy, invalid markup refactored into clean, production-ready code, followed by an interactive workspace that demonstrates how to implement smooth animations without using deprecated tags:
            </DocP>

            <DocH3>1. Legacy Content Cleanup Manifest (refactoring-archetype.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<center>
  <basefont face="Arial" size="4" color="#333333">
  <div class="banner-panel">
    <font size="6" color="#ff0000"><b>System Alert Status Log</b></font>
    <marquee scrollamount="5">Warning: Memory threshold bounds exceeded on node-04 cluster.</marquee>
  </div>
</center>

<div class="flex flex-col items-center justify-center text-center font-sans text-slate-700 text-sm">
  <div class="banner-panel-optimized p-6 max-w-xl bg-white border border-gray-200 rounded-xl shadow-sm">
    
    <h1 class="text-xl font-bold text-red-600 tracking-tight">System Alert Status Log</h1>
    
    <div class="overflow-hidden relative w-full mt-3 whitespace-nowrap bg-slate-50 p-2 rounded-lg border border-dashed border-slate-200">
      <p class="inline-block animate-[marquee_15s_linear_infinite] text-xs font-mono text-amber-700">
        Warning: Memory threshold bounds exceeded on node-04 cluster.
      </p>
    </div>

  </div>
</div>`}
            />

            <DocH3>2. Modern Element Animation Workspace (HTMLDeprecatedRefactorWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLDeprecatedRefactorWorkspace() {
  const [useLegacyMarquee, setUseLegacyMarquee] = useState(false);

  // Raw code preview string mapping the deprecated layout path
  const legacyCodeString = 
    \`\\n\` +
    \`<center>\\n\` +
    \`  <font color="red" size="5"><b>Telemetry Error</b></font>\\n\` +
    \`  <marquee>Data sync pipeline connection timeout</marquee>\\n\` +
    \`</center>\`;

  // Raw code preview string mapping the modern semantic layout path
  const modernCodeString = 
    \`\\n\` +
    \`<div class="text-center font-sans">\\n\` +
    \`  <h3 class="text-red-600 font-bold text-sm">Telemetry Error</h3>\\n\` +
    \`  <div class="overflow-hidden whitespace-nowrap bg-slate-50 rounded p-2">\\n\` +
    \`    <p class="animate-marquee inline-block text-xs font-mono">\\n\` +
    \`      Data sync pipeline connection timeout\\n\` +
    \`    </p>\\n\` +
    \`  </div>\\n\` +
    \`</div>\`;

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      {/* Inject custom animation styles for the modern marquee alternative safely */}
      <style>{\`
        @keyframes customMarqueeLoop {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-modern-marquee {
          animation: customMarqueeLoop 10s linear infinite;
        }
      \`}</style>

      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Legacy Refactoring Architecture Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Toggle between legacy deprecated implementations and clean, modern CSS alternatives to see how the browser interprets visual animations.
        </p>
      </header>

      {/* Main Refactoring Control Board */}
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
        
        {/* LEFT VIEW COLUMN: SOURCE STRATEGY SELECTION */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                Active Architecture Mode
              </span>
              <button
                onClick={() => setUseLegacyMarquee(!useLegacyMarquee)}
                className={"px-3 py-1 rounded-md font-mono font-bold uppercase transition-colors text-[9px] " + (useLegacyMarquee ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800")}
              >
                Strategy: {useLegacyMarquee ? "Legacy Elements" : "Modern Standard"}
              </button>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              {useLegacyMarquee ? (
                "This mode uses older styling tags like center and marquee. While the browser may still render it for backwards compatibility, it bypasses modern validation engines and lacks performance optimizations."
              ) : (
                "This mode replaces legacy tags with standard layout elements combined with modern CSS animations. This keeps your markup clean, valid, and fully accessible to assistive tools like screen readers."
              )}
            </p>

            {/* Quality metric comparison list box */}
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-3 space-y-2 font-mono text-[10px]">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">W3C Validation Compliance:</span>
                <span className={useLegacyMarquee ? "text-red-600 font-bold" : "text-emerald-600 font-bold"}>
                  {useLegacyMarquee ? "FAIL (Obsolete)" : "PASS (Valid)"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Rendering Layer Isolation:</span>
                <span className={useLegacyMarquee ? "text-red-500" : "text-emerald-600 font-bold"}>
                  {useLegacyMarquee ? "Mixed Struct/Style" : "100% CSS Isolated"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Active Code Stream View</span>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
              {useLegacyMarquee ? legacyCodeString : modernCodeString}
            </pre>
          </div>
        </div>

        {/* RIGHT VIEW COLUMN: RENDER SCREEN OUTPUT SIMULATION */}
        <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Live Layout Pipeline Preview
            </span>

            {/* Simulated sandbox preview frame */}
            <div className="p-6 border border-slate-200 bg-white rounded-xl shadow-xs min-h-[140px] flex flex-col items-center justify-center text-center relative overflow-hidden">
              {useLegacyMarquee ? (
                /* Simulated Legacy Fallback Engine Box */
                <div>
                  <font color="#dc2626" size="4"><strong>Telemetry Error</strong></font>
                  {/* Using standard marquee here safely for visualization mock context */}
                  <marquee className="text-xs font-mono text-slate-700 block mt-2">Data sync pipeline connection timeout</marquee>
                </div>
              ) : (
                /* Modern Valid Alternative Elements Output */
                <div className="w-full max-w-xs">
                  <h3 className="text-red-600 font-bold text-sm tracking-tight">Telemetry Error</h3>
                  <div className="overflow-hidden whitespace-nowrap bg-slate-50 rounded-lg p-2 border border-slate-200 mt-2 w-full relative">
                    <p className="animate-modern-marquee inline-block text-[10px] font-mono text-slate-800 font-semibold">
                      Data sync pipeline connection timeout — Node execution returning safe error bounds.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Key Architecture Rule:</strong> Never rely on deprecated tags just because they still work in some browsers. Always use modern semantic markup paired with explicit CSS classes to build robust, future-proof interfaces that render consistently across all web platforms.
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