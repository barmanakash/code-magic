import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLListsDoc() {
    return (
        <div>
            <DocTitle eyebrow="Core Foundations">HTML5 Lists: Grouping Data, Key-Value Relations, and Custom List Styling</DocTitle>

            <DocP>
                Lists are essential semantic structures used to group related items. In HTML5, lists are not merely visual design constructs; they provide critical navigational outlines for assistive technologies. Modern frontends leverage three distinct semantic list formats to structure sequential steps, unordered collections, or key-value metadata dictionaries.
            </DocP>

            <DocH2>The Three Core List Elements</DocH2>

            <DocH3>1. Unordered Lists (&lt;ul&gt;)</DocH3>
            <DocP>
                Used to group items whose sequence does not alter the document's meaning (e.g., shopping lists, product features, or main navigation menus).
            </DocP>
            <DocList
                items={[
                    'Core Structure: Wraps nested List Item (<code>&lt;li&gt;</code>) elements.',
                    'Default Styling: Browsers render these with solid circular bullets.',
                    'Styling Control: In production layouts, the bullets are typically removed via CSS using <code>list-style-type: none;</code>.'
                ]}
            />

            <DocH3>2. Ordered Lists (&lt;ol&gt;)</DocH3>
            <DocP>
                Used when the exact sequence of items is critical to the outcome (e.g., recipe instructions, technical deployment pipelines, or ranking indexes).
            </DocP>
            <DocList
                items={[
                    'The start Attribute: Specifies the initial integer value for the list sequence (e.g., <code>&lt;ol start="5"&gt;</code> starts numbering at 5).',
                    'The reversed Attribute: A boolean attribute that reverses the list numbering order (e.g., from 3 down to 1).',
                    'The type Attribute: Configures the marker system (options: <code>1</code> for decimals, <code>a</code>/<code>A</code> for lowercase/uppercase letters, or <code>i</code>/<code>I</code> for lowercase/uppercase Roman numerals).'
                ]}
            />



            <DocH3>3. Description Lists (&lt;dl&gt;)</DocH3>
            <DocP>
                A description list (formerly definition list) is designed specifically to display term-and-description pairings, such as metadata properties, FAQ lists, or dictionary glossaries:
            </DocP>
            <DocList
                items={[
                    '<dl>: The parent wrapper container.',
                    '<dt> (Description Term): The name, key, or term being described.',
                    '<dd> (Description Details): The value, definition, or descriptive text associated with the preceding term node. Multiple <dd> elements can follow a single <dt> if a key has multiple values.'
                ]}
            />

            <DocH2>Nesting & Customization Pipelines</DocH2>

            <DocH3>1. Strict Nesting Laws</DocH3>
            <DocP>
                The immediate parent elements <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> can **strictly only contain** <code>&lt;li&gt;</code> elements as direct children. Placing other tags (like <code>&lt;div&gt;</code> or <code>&lt;p&gt;</code>) directly inside a list container violates standard HTML parsing rules.
            </DocP>
            <blockquote>
                <strong>Crucial Nesting Rule:</strong> If you are nesting a sub-list, the secondary list container (<code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>) must be placed <strong>inside an active list item (<code>&lt;li&gt;</code>)</strong> of the parent list, never directly between list items.
            </blockquote>

            <DocH3>2. Modern Custom Lists</DocH3>
            <DocP>
                While standard browser lists use default bullets or numbering markers, modern production designs use CSS to style list layouts. By applying <code>list-style: none;</code>, you can leverage the CSS <code>::marker</code> pseudo-element, custom SVG icons, or custom counter variables (using CSS Counters) to design unique lists without losing their semantic accessibility benefits.
            </DocP>

            <DocH2>Production-Grade List Implementations</DocH2>
            <DocP>
                Below is a fully validated, production-ready HTML5 fragment demonstrating correct list nesting, description-key layouts, and customized data representations:
            </DocP>

            <DocH3>1. Complete Semantic List Structures (lists-production.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<nav class="c-directory-tree" aria-label="Documentation Index">
  <ul class="c-directory-list">
    <li>
      <strong>1. Core Foundations</strong>
      <ul class="c-directory-sublist">
        <li>1.1 Environment Setup</li>
        <li>1.2 HTML Document Structures</li>
      </ul>
    </li>
    <li>
      <strong>2. Media Assets</strong>
      <ul class="c-directory-sublist">
        <li>2.1 Responsive Picture Formats</li>
        <li>2.2 Audio Control Engines</li>
      </ul>
    </li>
  </ul>
</nav>

<hr class="c-divider" />

<section class="c-metadata-panel">
  <h3>System Telemetry Profile</h3>
  <dl class="c-metadata-list">
    <dt class="c-metadata-term">Cluster ID</dt>
    <dd class="c-metadata-desc">ap-south-1a-prod-node-20</dd>

    <dt class="c-metadata-term">Security Protocols</dt>
    <dd class="c-metadata-desc">Transport Layer Security (TLS 1.3)</dd>
    <dd class="c-metadata-desc">OAuth 2.0 Auth Server Auth</dd>

    <dt class="c-metadata-term">Uptime Status</dt>
    <dd class="c-metadata-desc">99.998% Active Over Past Month</dd>
  </dl>
</section>`}
            />

            <DocH3>2. Layout Integration View (HTMLListsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLListsWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML Lists Renderer</h3>
        <p className="text-gray-500 mt-1">
          Compare standard, nested, and description lists rendered cleanly inside the browser viewport.
        </p>
      </header>

      {/* Target Interaction Grid */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          DOM List Render
        </div>

        {/* 1. Custom Unordered List using SVG markers */}
        <div className="space-y-2">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Custom Bullet List (ul)</span>
          <ul className="space-y-1.5 text-[11px] text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span> Deploy Production Clusters
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span> Configure Security Guardrails
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span> Verify SSL Cert Bindings
            </li>
          </ul>
        </div>

        {/* 2. Standard Nested Ordered Checklist */}
        <div className="space-y-2 border-t pt-4">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Nested Sequence Lists (ol)</span>
          <ol className="list-decimal pl-5 space-y-2 text-[11px] text-gray-700">
            <li>
              Initialize Environment
              <ol className="list-alpha pl-4 mt-1 space-y-1 text-gray-500 text-[10px]">
                <li>Install Editor Extensions</li>
                <li>Setup Local Sandbox Port</li>
              </ol>
            </li>
            <li>Launch Server Pipelines</li>
          </ol>
        </div>

        {/* 3. Semantic Description List Showcase */}
        <div className="space-y-2 border-t pt-4">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Description Lists (dl)</span>
          <dl className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-2">
            <div>
              <dt className="font-mono text-[9px] font-bold text-gray-500 uppercase">Gateway Node</dt>
              <dd className="text-[11px] text-gray-800 font-semibold pl-2 border-l-2 border-blue-500 mt-0.5">
                https://api.enterprise.com
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[9px] font-bold text-gray-500 uppercase">SSL Version</dt>
              <dd className="text-[11px] text-gray-800 font-semibold pl-2 border-l-2 border-blue-500 mt-0.5">
                TLSv1.3 SHA-256
              </dd>
            </div>
          </dl>
        </div>

      </div>

    </div>
  );
}`}
            />
        </div>
    );
}