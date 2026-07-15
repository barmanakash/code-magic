import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLWithCSSDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">HTML Integration with CSS: Linking Paradigms, Scoping Rules, and Cascade Architecture</DocTitle>

      <DocP>
        Cascading Style Sheets (CSS) govern the presentation layer of a document, complementing the structural data layer provided by HTML. To link style rules with structural elements efficiently, the web platform supports three integration methodologies: **Inline**, **Internal**, and **External**.
      </DocP>
      <DocP>
        Managing how these style layers interact is essential for maintaining page performance. Choosing the wrong method can result in uncacheable code assets, delayed visual rendering paths (Flash of Unstyled Content, or FOUC), and overly high specificity weights that disrupt the global design cascade.
      </DocP>

      <DocH2>The Three Styling Methodologies</DocH2>
      <DocP>
        Each integration strategy alters how the browser fetches, compiles, and assigns style parameters across the document layout tree.
      </DocP>

      <DocH3>1. Inline CSS (Presentational Element Scoping)</DocH3>
      <DocP>
        Inline styles attach rules directly to a single element using the global `style` attribute. This completely bypasses the standard CSS selector matching engine.
      </DocP>
      <DocList
        items={[
          '<strong>Mechanics:</strong> Rules apply exclusively to the specific node hosting the attribute, carrying an incredibly high CSS specificity weight.',
          '<strong>Production Risks:</strong> Inline styles clutter HTML files, complicate updates, and disable browser resource optimization because styling strings cannot be cached separately from data trees.'
        ]}
      />

      <DocH3>2. Internal CSS (Document-Level Embedded Blocks)</DocH3>
      <DocP>
        Internal stylesheets isolate rules within a structured `&lt;style&gt;` block, typically nested directly inside the document's `&lt;head&gt;` section.
      </DocP>
      <DocList
        items={[
          '<strong>Mechanics:</strong> Scopes styling parameters to that single HTML file document context.',
          '<strong>Use Case:</strong> Perfect for completely self-contained single-page applications or critical path optimizations where you inline above-the-fold styles to maximize initial render speeds.'
        ]}
      />

      <DocH3>3. External CSS (Decoupled Global Asset Pipelines)</DocH3>
      <DocP>
        External styling decouples presentation logic entirely, hosting rules in a distinct `.css` text file linked via the structural `&lt;link&gt;` element tag.
      </DocP>
      <DocList
        items={[
          '<strong>Mechanics:</strong> The browser fetches the stylesheet asset over the network in parallel. Once downloaded, the asset is saved in the browser cache, drastically improving load times across subsequent subpage navigations.',
          '<strong>Production Standard:</strong> This is the default approach for enterprise applications. It cleanly splits data and style logic, allows for modular code management, and minimizes asset transmission sizes.'
        ]}
      />

      <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
        <table className="min-w-full text-left text-xs bg-white">
          <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
            <tr>
              <th className="p-3">Styling Method</th>
              <th className="p-3">Specificity Precedence</th>
              <th className="p-3">Cache Capabilities</th>
              <th className="p-3">Primary Best Practice Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
            <tr>
              <td className="p-3 font-sans font-semibold text-blue-600">Inline CSS</td>
              <td className="p-3">Highest (Overrides sheets)</td>
              <td className="p-3 text-red-600">None (Bundled in HTML)</td>
              <td className="p-3 font-sans">Dynamic scripting offsets or quick node testing.</td>
            </tr>
            <tr>
              <td className="p-3 font-sans font-semibold text-blue-600">Internal CSS</td>
              <td className="p-3">Medium (Depends on location)</td>
              <td className="p-3 text-red-600">None (Per-page load)</td>
              <td className="p-3 font-sans">Critical performance styling inlined for fast initial paint.</td>
            </tr>
            <tr>
              <td className="p-3 font-sans font-semibold text-blue-600">External CSS</td>
              <td className="p-3">Standard Selector Rules</td>
              <td className="p-3 text-emerald-600 font-bold">Absolute (Cached by Client)</td>
              <td className="p-3 font-sans">Global design systems, design consistency across all pages.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocH2>Production Styling Implementation Architecture</DocH2>
      <DocP>
        Review the structured source layouts below showing standard production file assembly, followed by an interactive workspace that demonstrates how inline overrides interact with the global style cascade:
      </DocP>

      <DocH3>1. Global Linked Stylesheet Target Blueprint (application-head.html)</DocH3>
      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Production Integration Matrix</title>

  <link rel="stylesheet" type="text/css" href="/assets/css/global-design-system.css">

  <style>
    /* Scoped document rules following selector rules */
    .hero-display-panel {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
    }
    .action-dispatch-trigger {
      color: #ffffff;
      background-color: #2563eb;
    }
  </style>
</head>
<body>

  <div class="hero-display-panel p-6 rounded-xl shadow-xs">
    <h1 class="text-slate-900 font-bold">System Status Log</h1>
    
    <button 
      class="action-dispatch-trigger px-4 py-2 font-semibold" 
      style="border-radius: 8px; transform: translateY(-2px);"
    >
      Initialize Pipeline
    </button>
  </div>

</body>
</html>`}
      />

      <DocH3>2. Style Precedence Cascade Workspace (HTMLCSSPrecedenceWorkspace.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React, { useState } from 'react';

export default function HTMLCSSPrecedenceWorkspace() {
  const [inlineColor, setInlineColor] = useState('#dc2626');
  const [useInlineOverride, setUseInlineOverride] = useState(true);

  const dynamicMarkupPreview = [
    '',
    '<style>',
    '  .alert-box { background-color: #f8fafc; color: #1e293b; } /* Internal Sheet */',
    '</style>',
    '',
    '<div class="alert-box" ' + (useInlineOverride ? 'style="color: ' + inlineColor + ';"' : '') + '>',
    '  System Notification: Connection bounds warning alert.',
    '</div>'
  ].join('\\n');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Style Integration Cascade Workspace</h3>
        <p className="text-gray-500 mt-1">
          Modify inline attributes to observe how inline properties take immediate precedence over internal or external stylesheet declarations.
        </p>
      </header>

      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px]">
        
        {/* LEFT COMPONENT CONTROLS (5 Columns) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
              Style Strategy Control
            </span>

            <div className="flex items-center justify-between border p-3 rounded-xl bg-slate-50">
              <span className="font-semibold text-slate-700">Apply Inline Style Attribute</span>
              <button
                onClick={() => setUseInlineOverride(!useInlineOverride)}
                className={"px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase transition-colors " + (useInlineOverride ? "bg-red-100 text-red-800" : "bg-slate-200 text-slate-600")}
              >
                {useInlineOverride ? "Active" : "Disabled"}
              </button>
            </div>

            {useInlineOverride && (
              <div className="space-y-2 animate-[fadeIn_0.2s_ease-out]">
                <label className="block text-slate-700 font-semibold mb-1">Inline Attribute Value (color)</label>
                <div className="flex space-x-2">
                  <input
                    type="color"
                    value={inlineColor}
                    onChange={(e) => setInlineColor(e.target.value)}
                    className="w-10 h-8 cursor-pointer rounded border p-0.5 bg-white"
                  />
                  <input
                    type="text"
                    value={inlineColor}
                    onChange={(e) => setInlineColor(e.target.value)}
                    className="w-full px-3 py-1.5 border rounded-lg bg-slate-50 text-[11px] font-mono focus:outline-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Resulting Pipeline Node Source</span>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre leading-normal">
              {dynamicMarkupPreview}
            </pre>
          </div>
        </div>

        {/* RIGHT PIPELINE PREVIEW SCREEN (7 Columns) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Browser Layout Engine Simulation
            </span>

            <div className="p-6 border border-slate-200 bg-slate-100 rounded-xl min-h-[160px] flex items-center justify-center">
              <div 
                className="w-full max-w-sm p-4 border border-slate-200 rounded-xl shadow-xs font-sans font-medium text-center bg-white transition-all duration-200"
                style={{ color: useInlineOverride ? inlineColor : '#1e293b' }}
              >
                <h4 className="text-xs font-bold uppercase tracking-wide mb-1 block opacity-60">Live Output View</h4>
                System Notification: Connection bounds warning alert.
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Key Cascade Principle:</strong> Inline styles apply style rules directly to an element, overriding standard rules declared in internal style blocks or external files. Use external files to keep your styling scalable, and reserve inline attributes for real-time dynamic scripting adjustments.
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