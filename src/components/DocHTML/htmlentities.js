import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLEntitiesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Entities: Character Referencing, Reserved Syntax Escaping, and Universal Symbol Mapping</DocTitle>

            <DocP>
                HTML entities are specialized text strings used to display reserved characters, invisible spaces, currency formats, and mathematical signs that could otherwise be misinterpreted by the browser's parser. Because characters like <code>&lt;</code> and <code>&gt;</code> are part of the core HTML syntax, rendering them as raw text requires character references to avoid breaking the Document Object Model (DOM).
            </DocP>

            <DocH2>The Entity Structure & Reserved Characters</DocH2>
            <DocP>
                An HTML entity always begins with an ampersand (<code>&amp;</code>) and ends with a semicolon (<code>;</code>). These can be written using **named references** (like <code>&amp;lt;</code>) or **numerical Unicode references** (like <code>&amp;#60;</code>).
            </DocP>

            <DocH3>Escaping the Parser's Reserved Characters</DocH3>
            <DocList
                items={[
                    '&amp;lt; (Less Than: <) and &amp;gt; (Greater Than: >): Essential for rendering brackets on a page without the browser treating them as real HTML tags.',
                    '&amp;amp; (Ampersand: &): Prevents the parser from confusing a standard text ampersand with the beginning of an entity string sequence.',
                    '&amp;quot; (Double Quote: ") and &amp;apos; (Single Quote: \'): Crucial when rendering text inside HTML attribute values where raw quotes would prematurely close the string wrapper.'
                ]}
            />



            <DocH2>Global Symbol Registry Matrices</DocH2>

            <DocH3>1. Legal Identity & Currency Standards</DocH3>
            <DocList
                items={[
                    '&amp;copy; (Copyright Notice: ©): Used to place formal copyright declarations on web footers.',
                    '&amp;reg; (Registered Trademark: ®) and &amp;trade; (Trademark: ™): Protects brand assets and operational commercial titles.',
                    '&amp;cent; (¢), &amp;pound; (£), &amp;yen; (¥), and &amp;euro; (€): Displays global monetary notations cleanly across different operating system text rendering engines.'
                ]}
            />

            <DocH3>2. Mathematical Operators & Unicode Emoji Mappings</DocH3>
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Character Concept</th>
                            <th className="p-3">Named Entity</th>
                            <th className="p-3">Hexadecimal / Numeric Hook</th>
                            <th className="p-3">Render Output</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-gray-900 font-medium">Infinity Constant</td>
                            <td className="p-3 text-blue-600">&amp;infin;</td>
                            <td className="p-3">&amp;#8734;</td>
                            <td className="p-3 font-sans text-base">∞</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-gray-900 font-medium">Plus-Minus Variance</td>
                            <td className="p-3 text-blue-600">&amp;plusmn;</td>
                            <td className="p-3">&amp;#177;</td>
                            <td className="p-3 font-sans text-base">±</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-gray-900 font-medium">Greater-Than Or Equal</td>
                            <td className="p-3 text-blue-600">&amp;ge;</td>
                            <td className="p-3">&amp;#8805;</td>
                            <td className="p-3 font-sans text-base">≥</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-gray-900 font-medium">Rocket Emoji</td>
                            <td className="p-3 text-gray-400">N/A (Use Numeric)</td>
                            <td className="p-3 text-blue-600">&amp;#128640;</td>
                            <td className="p-3 font-sans text-base">🚀</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-gray-900 font-medium">Gear Emoji</td>
                            <td className="p-3 text-gray-400">N/A (Use Hex)</td>
                            <td className="p-3 text-blue-600">&amp;#9881;</td>
                            <td className="p-3 font-sans text-base">⚙️</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Entity Blueprint</DocH2>
            <DocP>
                Below is a fully validated HTML code snippet demonstrating how to escape syntax tokens and display specialized mathematical variables or symbols safely:
            </DocP>

            <DocH3>1. Structural Markup References (entities-catalog.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<article class="c-article-card">
  
  <header class="c-card-header">
    <h3>Code Instruction Component</h3>
    <p>
      To declare a division wrap block in your markup source, use the code block layout: 
      <code>&lt;div class="layout"&gt;&amp;amp;&lt;/div&gt;</code>
    </p>
  </header>

  <section class="c-legal-notices">
    <p>
      Enterprise Systems &trade; is a registered platform asset of Registry Hub &reg;. 
      All software source configurations &copy; 2026 Core Operations.
    </p>
  </section>

  <div class="c-math-bounds">
    <span>Calculated Threshold Variance: Delta &le; &plusmn; 0.045 &mu;s</span>
    <br />
    <span>Resource Capacity Limit Parameters: Allocation &rarr; &infin;</span>
  </div>

  <footer class="c-status-bar">
    <span>System Status: &#128640; Optimal Operational Ingress Mode</span>
  </footer>

</article>`}
            />

            <DocH3>2. Layout Integration View (HTMLEntitiesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLEntitiesWorkspace() {
  const [activeView, setActiveView] = useState<'escaped' | 'rendered'>('rendered');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML Entity Component Workspace</h3>
        <p className="text-gray-500 mt-1">
          Toggle below to look behind the scenes and see how character entities protect the browser DOM layout.
        </p>
      </header>

      {/* View Filter Panel Toggles */}
      <div className="flex gap-2 bg-slate-200 p-1 rounded-xl">
        <button 
          onClick={() => setActiveView('rendered')} 
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeView === 'rendered' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          Rendered Layout
        </button>
        <button 
          onClick={() => setActiveView('escaped')} 
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeView === 'escaped' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          Raw Entity Source View
        </button>
      </div>

      {/* Main Structural Mockup Card Window */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative text-[11px]">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          {activeView === 'rendered' ? 'Browser Paint' : 'Parser Raw String'}
        </div>

        {activeView === 'rendered' ? (
          <div className="space-y-4 pt-4">
            
            {/* Box Layer 1: Reserved tags representation */}
            <div className="p-3 bg-slate-50 border rounded-xl space-y-1">
              <span className="font-mono text-[9px] text-gray-400 block uppercase font-bold">Code String Rendering</span>
              <p className="text-gray-800 font-mono text-[10px]">
                &lt;input required name="token" /&gt;
              </p>
            </div>

            {/* Box Layer 2: Financial/Legal metrics block */}
            <div className="p-3 bg-slate-50 border rounded-xl space-y-1">
              <span className="font-mono text-[9px] text-gray-400 block uppercase font-bold">Corporate Identity telemetry</span>
              <p className="text-gray-700 leading-relaxed">
                Core Billing Processing Services &trade; ensures secure currency calculations across international nodes in Euro values (€) and UK Pounds (£) &copy; 2026.
              </p>
            </div>

            {/* Box Layer 3: Math and Emoji components */}
            <div className="p-3 bg-slate-50 border rounded-xl space-y-1">
              <span className="font-mono text-[9px] text-gray-400 block uppercase font-bold">Mathematical Analytics</span>
              <p className="text-gray-800 font-medium">
                ⚙️ Vector Ingress Tolerance Variance Validation: Check Bounds &ge; &plusmn; 45% (Limit &rarr; ∞) 🚀
              </p>
            </div>

          </div>
        ) : (
          <div className="space-y-4 pt-4 font-mono text-[10px] text-slate-600 whitespace-pre-wrap bg-slate-950 p-4 rounded-xl shadow-inner border border-slate-800 text-slate-300 leading-relaxed">
            {/* Displaying raw strings within character array mapping */}
            {\`<div>
  <p>&amp;lt;input required name="token" /&amp;gt;</p>

  <p>Core Billing Processing Services &amp;trade; ensures secure currency calculations across international nodes in Euro values (&amp;euro;) and UK Pounds (&amp;pound;) &amp;copy; 2026.</p>

  <p>&amp;#9881; Vector Ingress Tolerance Variance Validation: Check Bounds &amp;ge; &amp;plusmn; 45% (Limit &amp;rarr; &amp;infin;) &amp;#128640;</p>
</div>\`}
          </div>
        )}

        {/* Informative Best Practice Notice Block */}
        <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-950 text-[10px] leading-relaxed">
          <strong>Production Best Practice:</strong> Always include the <code>&lt;meta charset="UTF-8"&gt;</code> tag in your document head. While using entities like <code>&amp;amp;</code> and <code>&amp;lt;</code> is mandatory for escaping HTML tags and system code symbols, a UTF-8 configuration allows you to safely insert emojis directly into your source file strings without needing numerical entity lookups.
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}