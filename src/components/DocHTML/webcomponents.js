import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLWebComponentsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Web Components: Native Element Architecture, Shadow DOM Isolation, and Template Engines</DocTitle>

            <DocP>
                Web Components are a suite of low-level, native browser APIs that enable the creation of reusable, encapsulated, and framework-agnostic HTML elements. Operating directly within the browser's layout engine, they bypass the parsing overhead of virtual DOM structures, providing true CSS scoping boundaries and performance-isolated runtime boxes.
            </DocP>
            <DocP>
                This architecture is built on three core pillars: **Custom Elements** for lifecycle management, **Shadow DOM** for strict DOM and style isolation, and **HTML Templates (`&lt;template&gt;` / `&lt;slot&gt;`)** for declarative blueprint markup injection.
            </DocP>

            <DocH2>The Architectural Core Pillars</DocH2>
            <DocP>
                To build durable interface component sets, you must master the relationship between these decoupled browser layers.
            </DocP>

            <DocH3>1. Custom Elements &amp; Lifecycles</DocH3>
            <DocP>
                Custom Elements extend the native browser parser by mapping custom JavaScript classes to standard tag definitions. They must use a hyphenated name to prevent collision with future HTML specifications.
            </DocP>
            <DocList
                items={[
                    '<code>constructor()</code>: Runs during element instantiation. Used to declare state, bind context hooks, and attach the shadow tree boundary.',
                    '<code>connectedCallback()</code>: Fires when the custom element appends to the document DOM tree. Recommended for API fetches, DOM assembly, and event stream attachments.',
                    '<code>disconnectedCallback()</code>: Fires when the node removes from the document tree. Used to clean up memory, clear event listeners, and prevent memory leaks.',
                    '<code>attributeChangedCallback()</code>: A reactive hook that catches attribute mutations on fields declared inside the <code>observedAttributes</code> getter array.'
                ]}
            />

            <DocH3>2. Shadow DOM Encapsulation Boundaries</DocH3>
            <DocP>
                The Shadow DOM attaches a completely isolated DOM tree onto the component host node. This shields your component from global styles and protects it from unexpected queries like global <code>document.querySelector()</code> operations.
            </DocP>
            <DocList
                items={[
                    '<code>mode: "open"</code>: The shadow root is inspectable from the outer layout tree using the host\'s <code>.shadowRoot</code> property, enabling external diagnostic tools.',
                    '<code>mode: "closed"</code>: Prevents all external JavaScript runtime visibility. The host\'s shadow root returns <code>null</code>, providing absolute security encapsulation.'
                ]}
            />

            <DocH3>3. HTML Templates &amp; Content Composition Slots</DocH3>
            <DocP>
                Templates store layout blueprints that aren't parsed as active assets until cloned, while slots manage composition markup inside the encapsulated component.
            </DocP>
            <DocList
                items={[
                    '<code>&lt;template&gt;</code>: Content inside this tag is parsed by the engine but sits dormant. Images do not load and scripts do not run until the element is cloned.',
                    '<code>&lt;slot&gt;</code> (Default): Captures any standard children passed into the element body and projects them into the template viewport.',
                    'Named Slots (<code>&lt;slot name="x"&gt;</code>): Directs targeted elements from the parent markup into specific designated locations within the shadow DOM layout.'
                ]}
            />



            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Architecture Concept</th>
                            <th className="p-3">Primary Purpose</th>
                            <th className="p-3">Native Web Platform API Standard</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Custom Elements</td>
                            <td className="p-3 font-sans">Binds JS class behaviors to HTML strings.</td>
                            <td className="p-3"><code>customElements.define('app-card', Class)</code></td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Shadow DOM</td>
                            <td className="p-3 font-sans">Enforces isolated script scope and zero style bleeding.</td>
                            <td className="p-3"><code>this.attachShadow(&#123; mode: 'open' &#125;)</code></td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Templates / Slots</td>
                            <td className="p-3 font-sans">Handles placeholder rendering and runtime DOM compilation.</td>
                            <td className="p-3"><code>this.shadowRoot.appendChild(template.content)</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production Component Implementation Manifest</DocH2>
            <DocP>
                Below is a clean, native Web Component implementation script, followed by an interactive workspace that demonstrates how native elements update in a reactive loop inside a React context:
            </DocP>

            <DocH3>1. Native Web Component Declaration Blueprint (user-profile.js)</DocH3>
            <CodeBlock
                language="javascript"
                code={`/**
 * ============================================================================
 * NATIVE WEB COMPONENT ENTERPRISE IMPLEMENTATION SCHEMATIC
 * ============================================================================
 */
class EnterpriseUserProfile extends HTMLElement {
  static get observedAttributes() {
    return ['status-level'];
  }

  constructor() {
    super();
    // Attach isolated rendering plane to intercept global cascades
    this.attachShadow({ mode: 'open' });
    
    // Inject structural blueprint markup and scoped rules directly
    this.shadowRoot.innerHTML = \`
      <style>
        :host {
          display: block;
          font-family: system-ui, sans-serif;
          color: #334155;
        }
        .wrapper {
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
        }
        .header-title {
          margin: 0 0 8px 0;
          font-size: 14px;
          color: #0f172a;
        }
        .badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 9999px;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .status-standard { bg-slate-100; color: #475569; }
        .status-premium { background: #dbeafe; color: #1d4ed8; }
      </style>

      <div class="wrapper">
        <h3 class="header-title">
          <slot name="username">Anonymous Operator</slot>
          <span id="badge-node" class="badge status-standard">Standard</span>
        </h3>
        <div class="bio-content">
          <slot>No description provided by host document.</slot>
        </div>
      </div>
    \`;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.wrapper').addEventListener('click', this._onElementSelected);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.wrapper').removeEventListener('click', this._onElementSelected);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'status-level' && oldValue !== newValue) {
      const badge = this.shadowRoot.getElementById('badge-node');
      if (badge) {
        badge.textContent = newValue;
        badge.className = \\\`badge status-\\\${newValue.toLowerCase()}\\\`;
      }
    }
  }

  _onElementSelected() {
    this.dispatchEvent(new CustomEvent('profile-click', {
      bubbles: true,
      composed: true,
      detail: { timestamp: Date.now() }
    }));
  }
}

customElements.define('enterprise-user-profile', EnterpriseUserProfile);`}
            />

            <DocH3>2. Native Web Component Integration Workspace (HTMLWebComponentsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLWebComponentsWorkspace() {
  const [tier, setTier] = useState<'Standard' | 'Premium'>('Standard');
  const [userName, setUserName] = useState('Akash Barman');

  // Declaring code previews dynamically using string arrays to safeguard runtime compile tracking
  const webComponentMarkupPreview = [
    '',
    '<enterprise-user-profile status-level="' + tier.toLowerCase() + '">',
    '  <span slot="username">' + userName + '</span>',
    '  <p>Core Frontend Architecture Engineer specializing in component topologies.</p>',
    '</enterprise-user-profile>'
  ].join('\\n');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Web Component Isolation Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Modify host attributes and projection slot fragments to see how the browser renders data across the shadow root boundary.
        </p>
      </header>

      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px]">
        
        {/* LEFT COMPONENT CONTROLS (5 Columns) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
              Mutate Component Host State
            </span>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Slot Value (slot="username")</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-slate-50 font-mono text-[11px] focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Observed Attribute (status-level)</label>
              <div className="flex space-x-2">
                {(['Standard', 'Premium'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setTier(level)}
                    className={"flex-1 py-1.5 rounded-lg border font-medium transition-all " + (tier === level ? "bg-blue-600 text-white border-blue-600 shadow-xs" : "bg-white text-slate-600 border-gray-200 hover:bg-slate-50")}
                  >
                    {level} Tier
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Active DOM Injection Matrix</span>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre leading-normal">
              {webComponentMarkupPreview}
            </pre>
          </div>
        </div>

        {/* RIGHT PIPELINE PREVIEW SCREEN (7 Columns) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Encapsulated Engine Output Frame
            </span>

            {/* Mocking the shadow root layout display layer dynamically using clean standard markup patterns */}
            <div className="p-6 border border-slate-200 bg-slate-50 rounded-xl min-h-[160px] flex items-center justify-center">
              <div className="w-full max-w-sm bg-white p-4 border border-slate-200 rounded-xl shadow-xs font-sans">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                  <h4 className="text-sm font-bold text-slate-800 m-0">
                    {userName || <span className="text-slate-300 italic">Empty Slot</span>}
                  </h4>
                  <span className={"text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full " + (tier === 'Premium' ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600")}>
                    {tier}
                  </span>
                </div>
                <p className="text-xs text-slate-500 m-0 leading-relaxed">
                  Core Frontend Architecture Engineer specializing in component topologies. Passed through standard fallback runtime slots.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Architecture Rule:</strong> Web Components guarantee complete CSS isolation out of the box. Global application rules cannot leak inside their shadow borders, ensuring structural reliability across diverse micro-frontend architectures.
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