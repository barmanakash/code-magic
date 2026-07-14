import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLBasicsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Syntactic Foundations & Document Lifecycle</DocTitle>

            <DocP>
                Writing robust HTML requires a deep understanding of its lexical rules, element hierarchy, and parser behavior. Unlike programming languages that throw runtime compilation exceptions on syntax errors, web browsers process HTML using a highly permissive parsing algorithm specified by the WHATWG standard. Understanding how elements, comments, whitespace, and case sensitivity rules govern the construction of the Document Object Model (DOM) is critical to writing predictable, error-free markup.
            </DocP>

            <DocH2>Anatomy of an Element & Syntax Rules</DocH2>

            <DocH3>1. Tags, Elements, and Attributes</DocH3>
            <DocP>
                An <strong>element</strong> represents an individual node in the DOM tree, typically consisting of a starting tag, optional key-value attributes, nested text or child nodes, and an ending tag:
            </DocP>
            <DocList
                items={[
                    'Start Tag (<tagname>): Signals the beginning of a DOM node boundary.',
                    'Attributes (name="value"): Name-value metadata keypairs configured inside the start tag. Attribute values must be enclosed in double or single quotes to prevent parsing issues with special characters.',
                    'Content: The raw text data, media assets, or child element nodes wrapped between the tags.',
                    'End Tag (</tagname>): Signals the closure of the node. Missing end tags force the browser parser to infer boundaries, which can cause layout issues.'
                ]}
            />

            <DocH3>2. Case Sensitivity & Standard Conventions</DocH3>
            <DocP>
                Technically, HTML tag names and attributes are **case-insensitive** in the browser parser (e.g., <code>&lt;DIV CLASS="CARD"&gt;</code> parses identically to <code>&lt;div class="card"&gt;</code>). However, standard development conventions mandate using strictly **lowercase** for all tag names, attributes, and values. Lowercase markup ensures clean readability, consistent formatting tools (Prettier), and compatibility with strict XHTML-compliant parsers.
            </DocP>

            <DocH2>Document Structure & Element Hierarchy</DocH2>
            <DocP>
                Every standards-compliant HTML document must adhere to a strict structural hierarchy to ensure browser parsers, search engine crawlers, and accessibility software can correctly parse the page content:
            </DocP>



            <DocH3>1. The <code>&lt;!DOCTYPE html&gt;</code> Declaration</DocH3>
            <DocP>
                Placed at the very first line of the document, <code>&lt;!DOCTYPE html&gt;</code> is not a typical HTML element; it is a critical instruction to the browser.
            </DocP>
            <DocList
                items={[
                    'Quirks Mode vs. Standards Mode: Without a declared DOCTYPE, modern browsers drop into "Quirks Mode", emulating legacy rendering behaviors from the late 1990s. Declaring the modern HTML5 DOCTYPE guarantees the browser runs in standard rendering mode.',
                    'Syntax: Must be written on line one without preceding spaces or comments.'
                ]}
            />

            <DocH3>2. The Root <code>&lt;html&gt;</code> Container</DocH3>
            <DocP>
                The <code>&lt;html&gt;</code> tag acts as the absolute root element of the document. All other elements must be nested inside this root.
            </DocP>
            <DocList
                items={[
                    'The lang Attribute: Always configure the <code>lang</code> attribute (e.g., <code>&lt;html lang="en"&gt;</code>) to announce the document\'s primary language. This is critical for screen reader accessibility, text-to-speech engines, and automated search engine indexing.'
                ]}
            />

            <DocH3>3. The Declarative <code>&lt;head&gt;</code> Element</DocH3>
            <DocP>
                Contains machine-readable metadata that does not render directly to the visual viewport. It includes character sets, page scaling rules, title configurations, SEO keywords, and external asset hooks (CSS/JavaScript links).
            </DocP>

            <DocH3>4. The Executable <code>&lt;body&gt;</code> Element</DocH3>
            <DocP>
                Contains the physical semantic landmarks, media assets, typography containers, and structural content rendered to users on the screen.
            </DocP>

            <DocH2>Formatting and Parser Interpretation Behaviors</DocH2>

            <DocH3>1. Whitespace Collapse Rule</DocH3>
            <DocP>
                By default, the browser engine compresses multiple sequential whitespace characters (spaces, tabs, and line breaks) into a **single space** during rendering. This allows developers to format code cleanly with indentations and spacing without bloating the final layout. If you need to preserve formatting (such as code snippets or poetry), wrap the text in a <code>&lt;pre&gt;</code> tag or use the CSS <code>white-space: pre;</code> property.
            </DocP>

            <DocH3>2. Code Comments Syntax</DocH3>
            <DocP>
                Comments allow developers to annotate layout sections or temporarily disable markup blocks during testing without affecting the rendered page.
            </DocP>
            <DocList
                items={[
                    'Syntax: Starts with <code>&lt;!--</code> and ends with <code>--&gt;</code>.',
                    'Safety Caution: Comments are transmitted to the client and can be read by anyone opening the browser\'s Page Source. Avoid placing sensitive data, database queries, or private passwords inside HTML comments.'
                ]}
            />

            <DocH2>Production HTML5 Foundation Template</DocH2>
            <DocP>
                Below is a fully validated, production-ready document demonstrating proper nesting, meta settings, comment anchors, and lowercase naming conventions:
            </DocP>

            <DocH3>1. The Validated Structural Layout (base-skeleton.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML5 Architectural Foundation</title>

  <style>
    body {
      background-color: #f1f5f9;
      font-family: system-ui, sans-serif;
      padding: 2rem;
      margin: 0;
    }
    .c-diagnostic-card {
      background-color: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 24px;
      max-width: 420px;
      margin: 0 auto;
    }
    .c-diagnostic-card__meta {
      font-family: monospace;
      font-size: 11px;
      color: #64748b;
    }
  </style>
</head>
<body>

  <main class="c-diagnostic-card">
    <header>
      <span class="c-diagnostic-card__meta">&lt;main&gt; landmark wrapper</span>
      <h1 style="font-size: 18px; margin: 8px 0;">Validated DOM Core Node</h1>
    </header>

    <section>
      <p style="font-size: 13px; color: #334155; line-height: 1.6;">
        Every   single      whitespace     character inside this tag 
        collapses into a single space, allowing us to keep our source code readable 
        without breaking layout designs.
      </p>
    </section>
  </main>

</body>
</html>`}
            />

            <DocH3>2. Layout Implementation View (HTMLBasicsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLBasicsWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML Parsing Sandbox</h3>
        <p className="text-gray-500 mt-1">
          A physical simulation showing how the browser parses and groups elements into structural layers.
        </p>
      </header>

      {/* Visual Simulation of the HTML DOM tree hierarchy */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Parser Matrix
        </div>

        <div className="space-y-2.5">
          <div className="border border-dashed border-gray-300 p-2 rounded bg-gray-50/50">
            <span className="font-mono text-[9px] text-gray-400 block mb-1">DOCTYPE Statement</span>
            <div className="font-mono text-[10px] text-emerald-600 font-bold">&lt;!DOCTYPE html&gt; (Standards Mode)</div>
          </div>

          <div className="border border-dashed border-blue-200 p-3 rounded bg-blue-50/10">
            <span className="font-mono text-[9px] text-blue-500 block mb-1">&lt;html lang="en"&gt; root</span>
            
            <div className="space-y-2 mt-2">
              <div className="border border-dashed border-amber-200 p-2 rounded bg-amber-50/20">
                <span className="font-mono text-[9px] text-amber-600 block">&lt;head&gt; metadata container</span>
                <span className="text-[10px] text-gray-500">Character sets, viewport configurations, SEO tags</span>
              </div>

              <div className="border border-dashed border-emerald-200 p-2 rounded bg-emerald-50/10">
                <span className="font-mono text-[9px] text-emerald-600 block">&lt;body&gt; layout container</span>
                <span className="text-[10px] text-gray-700 font-semibold">User-facing rendering elements</span>
              </div>
            </div>
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