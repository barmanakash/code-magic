import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSFAQsDoc() {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    const faqs = [
        {
            id: 'not-applying',
            question: '1. Why are my CSS styles not applying to the page?',
            answer: (
                <>
                    <p className="mb-2">This common debugging headache is almost always caused by one of four root pipeline failures:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li><strong>Syntax Errors:</strong> A missing semicolon (<code>;</code>) or unmatched curly brace (<code>{"{}"}</code>) breaks the browser parser, causing it to discard subsequent style rules.</li>
                        <li><strong>Incorrect File Paths:</strong> Verify the <code>&lt;link rel="stylesheet" href="..."&gt;</code> path relative to the document root, checking for accidental typos or missing deployment build folders.</li>
                        <li><strong>Browser Aggressive Caching:</strong> The browser might be serving a stale, cached version of your stylesheet. Hard refresh via <kbd className="bg-white border px-1 rounded shadow-sm">Ctrl + F5</kbd> or <kbd className="bg-white border px-1 rounded shadow-sm">Cmd + Shift + R</kbd>, or add content hashes to your asset builds.</li>
                        <li><strong>Specificity & Cascade Precedence:</strong> Another style block further down the file or inside a high-priority selector is actively matching the node and rewriting your property. Check the Styles Panel in DevTools to see if your rule is struck through.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'margin-padding',
            question: '2. What is the fundamental operational difference between Margin and Padding?',
            answer: (
                <>
                    <p className="mb-2">While both properties inject transparent negative space around layouts, they serve opposite sides of the element boundary box:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li><strong>Padding:</strong> Creates breathing room <em>inside</em> the element border. It expands the clickable click target area of buttons and is colored by the element's <code>background-color</code> token.</li>
                        <li><strong>Margin:</strong> Creates separation space <em>outside</em> the element border, pushing neighboring layout blocks away. Margins do not expand clickable regions, never inherit background styles, and can collapse vertically into adjacent margins.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'centering',
            question: '3. What is the modern, definitive standard for centering an element?',
            answer: (
                <>
                    <p className="mb-2">Forget legacy absolute positioning hacks or float tricks. The clean, industry-standard modern solution utilizes Flexbox or CSS Grid parent layout containers:</p>
                    <CodeBlock
                        language="css"
                        code={`/* Parent Element Centering Matrix Engine */
.u-center-axis-parent {
  display: grid;
  place-items: center; /* Explicitly centers items horizontally AND vertically */
}`}
                    />
                </>
            )
        }
    ];

    return (
        <>
            <DocTitle eyebrow="Core Foundations">Production FAQ & Resolution Guide</DocTitle>

            <DocP>
                The CSS Frequently Asked Questions (FAQ) module covers the most common structural mistakes, layout alignment choices, component scaling strategies, and architectural questions encountered when engineering professional design systems.
            </DocP>

            <DocH2>Core Structural & Paradigm FAQs</DocH2>

            <DocH3>Flexbox vs. CSS Grid: Choosing the Right Engine</DocH3>
            <DocP>
                <strong>The Rule:</strong> Use <strong>Flexbox</strong> when laying out items in a single linear row or column (one-dimensional flow), such as utility toolbars, form element groupings, or responsive navbars. Choose <strong>CSS Grid</strong> when handling complex, overlapping, or multi-row and multi-column designs (two-dimensional matrix), such as complex page layouts, data analytics dashboards, or media galleries.
            </DocP>



            <DocH3>The Cascade & The Stacking Order Lifecycle</DocH3>
            <DocP>
                The CSS Cascade relies on three sorting layers to resolve style conflicts: **Importance** (checking regular vs. <code>!important</code> declarations), **Specificity** (calculating the weight score of selectors), and **Source Order** (where the last declared stylesheet rule wins). Stacking contexts manage how elements overlap along the Z-axis, driven by properties like <code>opacity</code>, <code>transform</code>, <code>filter</code>, or explicit <code>z-index</code> values.
            </DocP>

            <DocH3>Sizing Tokens: rem vs. em</DocH3>
            <DocList
                items={[
                    'rem (Root Em): Sized relative to the root font scale configuration of the HTML element (typically 16px). This provides a predictable baseline, making it perfect for typography, standard grids, and layouts to ensure smooth browser scaling.',
                    'em: Sized relative to the local font size of the immediate parent container. It is best used for components that should scale proportionally based on their container context, such as padding inside variable button sizes or icon layouts.'
                ]}
            />

            <DocH2>Interactive Troubleshooting Sandbox</DocH2>
            <DocP>
                Click on any architectural engineering question below to reveal diagnostic analysis, root-cause details, and clean production refactoring blueprints:
            </DocP>

            <div className="space-y-4 my-6">
                {faqs.map(faq => (
                    <div key={faq.id} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                        <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full text-left p-4 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50/50 transition-colors text-xs"
                        >
                            <span>{faq.question}</span>
                            <span className="text-gray-400 text-sm font-mono font-normal">
                                {activeFaq === faq.id ? '[-]' : '[+]'}
                            </span>
                        </button>

                        {activeFaq === faq.id && (
                            <div className="p-4 border-t border-gray-100 bg-slate-50/50 text-gray-600 leading-relaxed text-xs">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <DocH2>Production Diagnostic Component</DocH2>
            <DocP>
                Below is a diagnostic configuration dashboard showcasing safe runtime variables, proper box resets, and flexible alignment structures:
            </DocP>

            <DocH3>Unified Diagnostics Layout (FAQWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function FAQWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center text-xs font-sans">
      
      {/* Target Module: Resolves centering problems via clean grid alignment */}
      <article className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        
        <div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
            System Resolved
          </span>
          <h3 className="text-sm font-bold text-gray-900 tracking-tight mt-2">Architecture Resolution</h3>
        </div>

        <p className="text-gray-500 leading-relaxed">
          This container leverages a predictable structural layout: using <code>rem</code> floors to ensure readable typography scaling and flexible design token variables.
        </p>

        {/* Inner layout testing margin vs padding behavior loops */}
        <div className="p-3 bg-gray-50 border rounded-xl font-mono text-[10px] flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Root Units</span>
            <span className="font-bold text-gray-700">rem / Accessibility Stable</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Alignment Layout</span>
            <span className="font-bold text-emerald-600">Grid Center Triggered</span>
          </div>
        </div>

      </article>

    </div>
  );
}`}
            />
        </>
    );
}