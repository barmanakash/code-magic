import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLTextFormattingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Text Formatting: Semantic Typography, Block Layouts, and Technical Layout Elements</DocTitle>

            <DocP>
                Text formatting in HTML5 is about much more than just changing how words look on a screen. While CSS handles visual styling, HTML's typographic tags establish the semantic meaning of your content. This structural meaning is essential for search engine crawlers (SEO), screen reader accessibility (A11y), and proper browser translation services.
            </DocP>

            <DocH2>Semantic Block & Structural Typography Elements</DocH2>

            <DocH3>1. Headings (&lt;h1&gt; to &lt;h6&gt;)</DocH3>
            <DocP>
                Heading tags establish the structural outline of your document. Screen readers use these tags to build an interactive table of contents for users, so keeping them in order is essential for accessibility:
            </DocP>
            <DocList
                items={[
                    'h1: Identifies the primary topic of the page. There should strictly be only one visible <h1> per document.',
                    'h2 to h6: Create cascading sub-sections (e.g., an <h2> introduces a major topic, and an <h3> is nested inside it as a sub-topic). Do not skip heading levels (like jumping from an <h2> straight to an <h4>) simply to change font sizes—use CSS to style sizing instead.'
                ]}
            />

            <DocH3>2. Structural Flow: Paragraphs, Line Breaks, and Rules</DocH3>
            <DocList
                items={[
                    'p: Group sentences into logical paragraphs, automatically adding default vertical spacing (margin) above and below the block.',
                    'br: Inserts a simple line break without starting a new paragraph. Use this for content where line breaks are structurally required (such as postal addresses or poetry). Do not use multiple <br> tags to force empty layout spacing; manage spacing with CSS margins instead.',
                    'hr: Defines a horizontal rule, which visually and semantically represents a thematic break or transition between sections in a page.'
                ]}
            />



            <DocH2>Semantic Text Highlighting Elements</DocH2>
            <DocP>
                HTML5 distinguishes between purely visual styling tags (which are legacy) and modern semantic highlighting tags that add distinct emphasis and context to text:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Semantic Highlight Tag</th>
                            <th className="p-3">Primary Purpose & Context</th>
                            <th className="p-3">Accessibility (Screen Reader) Impact</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;strong&gt; vs &lt;b&gt;</td>
                            <td className="p-3"><strong>&lt;strong&gt;</strong> denotes high importance, seriousness, or urgency. <strong>&lt;b&gt;</strong> simply draws visual attention without adding extra structural importance.</td>
                            <td className="p-3">Screen readers read <code>&lt;strong&gt;</code> elements with increased emphasis and urgency in the synthetic voice.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;em&gt; vs &lt;i&gt;</td>
                            <td className="p-3"><strong>&lt;em&gt;</strong> marks text with stress emphasis that alters the meaning of the sentence. <strong>&lt;i&gt;</strong> represents an alternate voice or technical term (such as a taxonomic name or foreign word).</td>
                            <td className="p-3">Screen readers apply a verbal inflection change to words wrapped in <code>&lt;em&gt;</code>.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;mark&gt;</td>
                            <td className="p-3">Highlights a portion of text for reference purposes, typically indicating search query matches in a search results list.</td>
                            <td className="p-3">Announces highlighted text regions to keyboard and assistive users.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;small&gt;</td>
                            <td className="p-3">Represents side comments, legal disclaimers, or copyright text, rendering slightly smaller by default.</td>
                            <td className="p-3">Announces content as minor secondary information.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;del&gt; &amp; &lt;ins&gt;</td>
                            <td className="p-3"><strong>&lt;del&gt;</strong> tracks deleted document revisions (striking it out). <strong>&lt;ins&gt;</strong> tracks added text insertions (underlining it).</td>
                            <td className="p-3">Announces added or removed document edits to keep tracking clear.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;sub&gt; &amp; &lt;sup&gt;</td>
                            <td className="p-3"><strong>&lt;sub&gt;</strong> lowers text for chemical subscripts (e.g., H₂O). <strong>&lt;sup&gt;</strong> raises text for mathematical superscripts or footnotes (e.g., x²).</td>
                            <td className="p-3">Correctly handles formula formats in screen reader text lines.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Technical & Code Presentation Elements</DocH2>
            <DocP>
                HTML5 includes a collection of tags designed specifically for presenting source code, command-line interfaces, and technical documentation:
            </DocP>
            <DocList
                items={[
                    'code: Wraps an inline fragment of computer source code, rendering it in a monospace font by default.',
                    'pre: Preformatted Text. This tag preserves all whitespace, tabs, and line breaks exactly as they are written in the source file. It is commonly wrapped around <code> blocks to present multi-line code blocks cleanly.',
                    'kbd: Identifies user keyboard inputs or hotkey commands (e.g., pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>).',
                    'var: Defines mathematical or programming variables in equations and technical descriptions, rendering them in italics.',
                    'samp: Represents sample output from a computer program or system console.'
                ]}
            />

            <DocH2>Production Typography Integration Blueprint</DocH2>
            <DocP>
                Below is a production-grade HTML5 document fragment demonstrating the clean integration of technical elements, revisions, and semantic typography:
            </DocP>

            <DocH3>1. Complete Semantic Text Layout (typography-spec.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<article class="c-document-layout">
  <header>
    <h1>System Integration Engine V2.4</h1>
    <p class="c-lead">Technical update log, installation guidelines, and system revisions.</p>
  </header>

  <hr class="c-divider" />

  <section>
    <h2>Installation Pipeline Changes</h2>
    <p>
      The installation command has been updated. The previous command 
      <del class="c-del">npm install local-router-db</del> has been deprecated. 
      Please run the <ins class="c-ins">npm install @enterprise/router-db</ins> library instead.
    </p>

    <div class="c-code-frame">
      <span class="c-code-label">Setup Script (Node.js)</span>
      <pre><code>const router = require("@enterprise/router-db");
const client = router.init({
  port: 8080,
  secure: true
});
console.log("Routing channels open.");</code></pre>
    </div>
  </section>

  <section>
    <h2>Terminal Commands & Variable Matrix</h2>
    <p>
      To force-initialize your local routing channel manually, type the following command into your console window: 
      <kbd>sudo systemctl start router.service</kbd>.
    </p>
    
    <p>
      The connection endpoint is determined by calculating the formula 
      <var>E</var> = <var>mc</var><sup>2</sup>, where <var>m</var> represents local system loads 
      and <var>c</var> is the network speed constant. The console output should display:
    </p>

    <div class="c-sample-frame">
      <samp>System verification success. Route active: 10.0.0.1</samp>
    </div>
  </section>

  <footer>
    <p><small>&copy; 2026 Enterprise Telemetry Systems. All rights reserved.</small></p>
  </footer>
</article>`}
            />

            <DocH3>2. Interactive Typography Laboratory (HTMLTextFormattingWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLTextFormattingWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Typographical Semantic Laboratory</h3>
        <p className="text-gray-500 mt-1">
          Observe how the browser renders semantic formatting styles and tech documentation tags.
        </p>
      </header>

      {/* Typography Preview Panel */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Render Preview
        </div>

        {/* Semantic vs Simple Bold/Italic Comparison */}
        <div className="space-y-2">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Semantic Highlighting</span>
          <p className="text-gray-700 leading-relaxed text-[11px]">
            This statement is <strong>urgently important (strong)</strong>, while this part 
            is emphasized with <em className="text-blue-700 font-semibold">tonal stress (em)</em>. 
            You can also find <mark className="bg-yellow-100 text-yellow-800 px-1 rounded">searched terms (mark)</mark> highlighted on the page.
          </p>
        </div>

        {/* Subscript / Superscript Showcase */}
        <div className="space-y-2 border-t pt-4">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Formulas & Footnotes</span>
          <div className="flex gap-4 text-gray-800 font-semibold text-[11px]">
            <div>Water: H<sub>2</sub>O</div>
            <div>Square: x<sup>2</sup> + y<sup>2</sup></div>
          </div>
        </div>

        {/* Technical Layout Block */}
        <div className="space-y-2 border-t pt-4">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Technical Documentation Layout</span>
          
          <div className="space-y-2 bg-gray-50 p-3 rounded-xl border font-mono text-[10px]">
            <div>
              <span className="text-gray-400 block text-[8px] uppercase font-bold mb-1">Keyboard Input (kbd)</span>
              <span>To apply settings, press <kbd className="bg-white border px-1.5 py-0.5 rounded shadow-sm text-gray-800 font-bold">Ctrl</kbd> + <kbd className="bg-white border px-1.5 py-0.5 rounded shadow-sm text-gray-800 font-bold">S</kbd></span>
            </div>

            <div className="pt-2">
              <span className="text-gray-400 block text-[8px] uppercase font-bold mb-1">Preformatted Code (pre + code)</span>
              <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-[9px] overflow-x-auto">
{\`function init() {
                let v = 204;
            return v;
}\`}
        </pre>
            </div>
          </div>
        </div >

      </div >

    </div >
  );
} `}
            />
        </>
    );
}