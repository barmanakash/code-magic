import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLTemplatesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Templates: Inert Markup, Content Projection, and Shadow DOM Encapsulation</DocTitle>

            <DocP>
                HTML Templates and the Shadow DOM are the native browser building blocks behind Web Components — reusable, encapsulated custom elements that don't leak styles or markup into (or out of) the rest of the page. They form the foundation frameworks like Lit build on top of.
            </DocP>

            <DocH2>Core Concepts</DocH2>

            <DocH3>1. The &lt;template&gt; Element</DocH3>
            <DocList
                items={[
                    'Content inside <template> is parsed by the browser but never rendered and never executed — scripts inside don\'t run, images inside don\'t load, until the content is explicitly cloned into the live document.',
                    'Accessed via the element\'s .content property, which returns a DocumentFragment you can clone with .cloneNode(true).',
                    'Ideal for a reusable "stamp" of markup you\'ll instantiate multiple times via JavaScript — e.g. one row per item in a list.',
                ]}
            />

            <DocH3>2. slot</DocH3>
            <DocList
                items={[
                    'Used INSIDE a Shadow DOM template to mark a placeholder where content from the element\'s regular (light DOM) children should be projected.',
                    'A default, unnamed <slot> receives any light-DOM children that aren\'t assigned to a specific named slot.',
                    'A named slot (slot name="...") only receives light-DOM children explicitly marked with a matching slot="..." attribute.',
                    'This lets a custom element define its internal structure while still letting the CONSUMER of that element supply their own content into specific spots.',
                ]}
            />

            <DocH3>3. Shadow DOM Basics</DocH3>
            <DocList
                items={[
                    'Created by calling element.attachShadow({ mode: "open" }) (or "closed", which blocks outside JS access to the shadow root entirely).',
                    'Everything inside a shadow root is encapsulated: CSS written inside it does NOT leak out to the rest of the page, and page-level CSS does NOT leak in.',
                    'The shadow root has its own separate mini-DOM tree, distinct from the element\'s regular (light DOM) children.',
                    'mode: "open" allows outside JavaScript to access element.shadowRoot directly; mode: "closed" hides it, returning null.',
                ]}
            />

            <blockquote>
                <strong>Why this matters:</strong> Without Shadow DOM, a component's internal CSS class names can collide with unrelated classes elsewhere on the page. Encapsulation guarantees a component's styles and internal markup structure stay genuinely private, regardless of what else exists on the page.
            </blockquote>

            <DocH2>Production-Grade Web Component Implementation</DocH2>
            <DocP>
                Below is a production-level custom element combining a <code>&lt;template&gt;</code>, both a default and named <code>slot</code>, and Shadow DOM style encapsulation — built with zero framework dependencies.
            </DocP>

            <DocH3>1. Complete Semantic Web Component (user-card-production.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<template id="user-card-template">
  <style>
    /* Scoped ONLY to this component's shadow root — never leaks out */
    .card {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px;
      font-family: sans-serif;
    }
    .card__title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  </style>
  <div class="card">
    <div class="card__title">
      <slot name="title">Default Title</slot>
    </div>
    <div class="card__body">
      <slot>Default body content if none is provided</slot>
    </div>
  </div>
</template>

<script>
  class UserCard extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      const template = document.getElementById("user-card-template");
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define("user-card", UserCard);
</script>

<!-- Usage — light DOM content gets projected into the matching slots -->
<user-card>
  <span slot="title">Ava's Profile</span>
  <p>Frontend developer based in Delhi.</p>
</user-card>`}
            />

            <DocH3>2. Layout Integration View (HTMLTemplatesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useEffect, useRef } from 'react';

export default function HTMLTemplatesWorkspace() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current || hostRef.current.shadowRoot) return;

    const shadow = hostRef.current.attachShadow({ mode: "open" });
    shadow.innerHTML = \`
      <style>
        .card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; }
        .title { font-weight: bold; color: #1e293b; margin-bottom: 6px; }
      </style>
      <div class="card">
        <div class="title"><slot name="title">Untitled</slot></div>
        <slot>No content provided</slot>
      </div>
    \`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">

      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Shadow DOM Encapsulation Demo</h3>
        <p className="text-gray-500 mt-1">
          The card below is rendered inside a real Shadow DOM — its internal
          styles are fully isolated from the rest of this page.
        </p>
      </header>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Web Component Renderer
        </div>

        <div ref={hostRef}>
          <span slot="title">Ava's Profile</span>
          <p>Frontend developer based in Delhi — projected via the default slot.</p>
        </div>

        <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-1.5 text-indigo-950">
          <span className="font-bold text-indigo-900 text-[10px] uppercase block">Encapsulation Checklist</span>
          <ul className="list-disc pl-4 text-[11px] space-y-1">
            <li>Styles defined inside a shadow root never affect elements outside it, and vice versa.</li>
            <li>Named slots let a component author control layout while consumers control content.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}
