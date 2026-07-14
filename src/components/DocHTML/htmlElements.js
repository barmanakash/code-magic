import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLElementsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Elements: Parsing Mechanics, Box Formatting, and Semantic Trees</DocTitle>

            <DocP>
                HTML elements are the individual building blocks of the Document Object Model (DOM). When a browser engine parses a document, it translates raw element markup into logical DOM nodes. An element's behavior, visual layout, and relationship with other elements are governed by its tag structure, nested capabilities, and default CSS display mechanics (Block vs. Inline formatting models).
            </DocP>

            <DocH2>Elements Architecture & Parsing Syntax</DocH2>

            <DocH3>1. Paired Tags vs. Empty (Void) Elements</DocH3>
            <DocList
                items={[
                    'Container Elements (Paired Tags): Consist of an opening tag, wrapped content (text or other elements), and a matching closing tag. For example, <code>&lt;p&gt;Content&lt;/p&gt;</code>. These tags form parent-child nesting hierarchies in the DOM.',
                    'Void Elements (Empty Tags): Elements that cannot contain nested child elements or text nodes. They do not have a closing tag. Examples include <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>, and <code>&lt;meta&gt;</code>.',
                    'The XHTML/JSX Self-Closing Syntax: In modern HTML5, void elements do not require a trailing slash (e.g., <code>&lt;input&gt;</code> is valid). However, in strict XML, XHTML, and React JSX parsers, void elements must be self-closed (e.g., <code>&lt;input /&gt;</code>) to compile correctly.'
                ]}
            />

            <DocH3>2. Element Nesting Rules</DocH3>
            <DocP>
                Elements must be nested in a strict **Last-In, First-Out (LIFO)** order. Interleaved tags (e.g., <code>&lt;strong&gt;&lt;em&gt;Text&lt;/strong&gt;&lt;/em&gt;</code>) violate parsing rules. The browser parser will attempt to fix this during DOM tree construction, but this can cause unpredictable layout calculations and styling bugs.
            </DocP>
            <blockquote>
                <strong>Correct LIFO Nesting:</strong> <code>&lt;strong&gt;&lt;em&gt;Text&lt;/em&gt;&lt;/strong&gt;</code>
            </blockquote>

            <DocH2>The Browser Layout Engine: Block vs. Inline Formatting Models</DocH2>
            <DocP>
                Every HTML element has a default layout behavior defined by the User Agent stylesheet. This determines how it interacts with surrounding elements in the normal document flow:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Layout Model</th>
                            <th className="p-3">Behavior & Viewport Flow</th>
                            <th className="p-3">Box Model Constraints</th>
                            <th className="p-3">Common Examples</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-semibold text-blue-600">Block Elements</td>
                            <td className="p-3">Automatically begin on a new line and expand horizontally to occupy 100% of the parent container's width.</td>
                            <td className="p-3">Full support for all box properties: <code>width</code>, <code>height</code>, <code>margin</code>, and <code>padding</code> on all sides.</td>
                            <td className="p-3 font-mono">&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;ul&gt;, &lt;section&gt;</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-blue-600">Inline Elements</td>
                            <td className="p-3">Flow horizontally alongside adjacent content and wrap naturally at the parent container boundary. They do not force a new line.</td>
                            <td className="p-3">Ignore <code>width</code> and <code>height</code> settings. Vertical <code>margin</code> and <code>padding</code> are ignored or fail to affect surrounding elements. Only horizontal spaces apply.</td>
                            <td className="p-3 font-mono">&lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;img&gt;</td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <DocH2>HTML5 Semantic Elements</DocH2>
            <DocP>
                HTML5 introduced direct semantic elements to replace generic layout wrappers (like nested `div` elements). These elements describe their content's purpose to search engines and assistive software:
            </DocP>
            <DocList
                items={[
                    '<header>: Defines structural headers for pages or standalone content sections.',
                    '<nav>: Wraps site navigation systems, allowing screen readers to jump directly to primary menus.',
                    '<main>: Encloses the unique, primary content of the document. There must only be one visible <main> element per page.',
                    '<article>: Encloses self-contained, independent compositions (e.g., blog posts, product cards, forum threads).',
                    '<section>: Represents a thematic grouping of content, typically introduced by a heading node.',
                    '<aside>: Identifies secondary content or sidebars that are tangentially related to the surrounding main content.',
                    '<footer>: Pinpoints copyright dates, legal links, or site credits at the bottom of pages or sections.'
                ]}
            />

            <DocH2>Production Element Architecture Blueprint</DocH2>
            <DocP>
                Below is a production-tier HTML markup snippet showcasing void elements, nested block systems, and inline semantic styling options:
            </DocP>

            <DocH3>1. Standard Structural Document Fragment (semantic-fragment.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<section class="c-article-card">
  
  <header class="c-article-card__header">
    <h2 class="c-article-card__title">
      Deploying <span class="c-highlight">Edge Router</span> Systems
    </h2>
    <hr class="c-divider" />
  </header>

  <div class="c-article-card__body">
    <p>
      Implementing secure telemetry bridges requires configuring local routing sockets. 
      Ensure you review the <a href="/docs/sec" class="c-link">Security Protocols</a> 
      and install the required <strong>encryption modules</strong>.
    </p>
    
    <img src="/assets/hardware-diagram.svg" alt="Hardware network node topology mapping" class="c-visual-preview" />
  </div>

</section>`}
            />

            <DocH3>2. Layout Implementation View (HTMLElementsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLElementsWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Block vs. Inline Laboratory</h3>
        <p className="text-gray-500 mt-1">
          Inspect how block and inline display rules format layout nodes differently inside the browser viewport.
        </p>
      </header>

      {/* Target Interaction Playground */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
        
        {/* BLOCK LEVEL DEMO */}
        <div>
          <span className="font-mono text-[9px] text-blue-600 font-bold uppercase block mb-1">Block-level elements (&lt;div&gt;)</span>
          <div className="space-y-2">
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg font-semibold text-blue-800 text-center">
              Block Node Alpha (Spans 100% Width)
            </div>
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg font-semibold text-blue-800 text-center">
              Block Node Beta (Forces New Line)
            </div>
          </div>
        </div>

        {/* INLINE LEVEL DEMO */}
        <div>
          <span className="font-mono text-[9px] text-amber-600 font-bold uppercase block mb-1">Inline-level elements (&lt;span&gt;, &lt;a&gt;)</span>
          <div className="bg-amber-50/50 border border-amber-200 p-3 rounded-lg text-amber-900 leading-relaxed">
            These elements flow <span className="bg-amber-200 px-1 rounded font-bold">horizontally</span> inline with the text. They only occupy the <a href="#test" className="underline font-bold text-amber-700">exact space</a> of their wrapped content without breaking to a new line.
          </div>
        </div>

        {/* VOID ELEMENT RETRIEVAL SYSTEM */}
        <div>
          <span className="font-mono text-[9px] text-purple-600 font-bold uppercase block mb-1">Void element validation (&lt;input&gt;)</span>
          <input 
            type="text" 
            placeholder="Void element (requires no closing tag)..." 
            className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}