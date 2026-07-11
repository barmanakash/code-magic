import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSIntroductionDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Introduction to Cascading Style Sheets</DocTitle>

            <DocP>
                Cascading Style Sheets (CSS) is the foundational design language of the modern web. By establishing a declarative system for visual presentation, CSS enables developers to separate structural data blueprints from layout architectures, visual styles, and user interface behaviors across digital environments.
            </DocP>

            <DocH2>Evolutionary Roadmap & Architectural Timeline</DocH2>

            <DocH3>The Architectural Evolution of CSS</DocH3>
            <DocList
                items={[
                    'What is CSS?: A declarative stylesheet language managed by the W3C. It dictates exactly how structured markup text documents (HTML/XML) map onto physical display media, screen boundaries, print paper, or speech synthesizers.',
                    'CSS1 & CSS2 (The Foundations): Launched in 1996 and 1998, introducing fundamental visual rules (fonts, margins, colors) followed by basic position systems, media types, and z-index structures.',
                    'CSS2.1 (The Stabilization): Refined the core specification to clear up early browser layout implementation bugs, establishing a reliable baseline for layout rendering.',
                    'CSS3 (The Modular Split): Discarded the unified single-document specification path in favor of independent, specialized modules (Flexbox, Grid, Animations, Color). This allowed individual sub-systems to mature rapidly without blocking the core language.',
                    'Modern CSS (2020+ Hub): The current era of advanced client capabilities, powered by the W3C CSS Working Group. Features native CSS Custom Properties (Variables), Cascade Layers (@layer), Container Queries, nesting syntaxes, and advanced color engines (OKLCH).'
                ]}
            />



            <DocH2>Architectural Framework Comparison</DocH2>
            <p className="text-sm text-gray-700 mb-4">
                Choosing the right visual structure directly affects long-term application performance, maintainability, and compilation workflows:
            </p>

            <table className="min-w-full divide-y divide-gray-200 border text-xs text-left mt-2 mb-6">
                <thead className="bg-gray-50 font-bold text-gray-700">
                    <tr>
                        <th className="p-3 border-b">Styling Methodology</th>
                        <th className="p-3 border-b">Core Mechanism</th>
                        <th className="p-3 border-b">Performance Profile</th>
                        <th className="p-3 border-b">Key Trade-off</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                    <tr>
                        <td className="p-3 font-medium text-gray-900">Standard CSS / Utility Modules</td>
                        <td className="p-3">Decoupled text sheets linked via class identifiers</td>
                        <td className="p-3 text-green-600">High: Native browser parsing & cache optimization</td>
                        <td className="p-3">Global namespace cascades require careful naming structures</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-medium text-gray-900">Inline HTML Styling</td>
                        <td className="p-3">Style declarations mapped directly inside style attributes</td>
                        <td className="p-3 text-amber-600">Moderate: Inflates HTML weight; bypasses caching</td>
                        <td className="p-3">Breaks separation of concerns; zero pseudo-element support</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-medium text-gray-900">CSS-in-JS (Runtime)</td>
                        <td className="p-3">Dynamic string styling injected by JavaScript evaluation</td>
                        <td className="p-3 text-red-500">Low: Induces script parsing latency on heavy renders</td>
                        <td className="p-3">Tight coupling with JS component logic binds styles to runtimes</td>
                    </tr>
                </tbody>
            </table>

            <DocH2>System Capabilities, Pros, and Limitations</DocH2>

            <DocH3>Core System Features & Advantages</DocH3>
            <DocList
                items={[
                    'Separation of Concerns: Isolates raw markup layout data completely from presentation rules, dramatically simplifying code maintenance.',
                    'Bandwidth Efficiency: A single global stylesheet can control thousands of independent platform views simultaneously, maximizing browser cache optimization.',
                    'Responsive Fluidity: Native layout media queries and container nodes adapt layouts to diverse screens with zero JavaScript processing overhead.'
                ]}
            />

            <DocH3>Disadvantages & Cascade Constraints</DocH3>
            <DocList
                items={[
                    'Global Namespace Collision: By default, style selectors live in a global workspace. Unchecked overrides can cause unexpected visual bugs across distant view layout nodes.',
                    'Browser Parsing Discrepancies: While modern engines follow W3C guidelines closely, complex edge features can still render differently across legacy browser engines.'
                ]}
            />

            <DocH2>Production-Grade Modern Blueprint</DocH2>
            <DocP>
                Below is a production-ready styling structure showcasing native modern nesting architectures, explicit Cascade Isolation Layers (`@layer`), custom system properties, and component tokens:
            </DocP>

            <DocH3>1. The Unified Core Design Sheet (styles.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   A. CASCADE LAYER ARCHITECTURE SETUP (@layer)
   Guarantees strict parsing priority regardless of selector weight order
   ======================================================= */
@layer theme, components, utilities;

@layer theme {
  :root {
    /* Tokenized color configurations inside modern OKLCH color spaces */
    --sys-bg-primary: oklch(0.98 0.01 240);
    --sys-txt-primary: oklch(0.25 0.02 240);
    --sys-brand-core: oklch(0.55 0.18 250);
    --sys-brand-hover: oklch(0.45 0.18 250);
    
    --sys-radius-md: 8px;
    --sys-transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  body {
    background-color: var(--sys-bg-primary);
    color: var(--sys-txt-primary);
    font-family: system-ui, sans-serif;
    margin: 0;
  }
}

@layer components {
  /* =======================================================
     B. NATIVE MODERN CSS NESTING MODULE
     ======================================================= */
  .workspace-card {
    background-color: #ffffff;
    border: 1px solid oklch(0.9 0.01 240);
    border-radius: var(--sys-radius-md);
    padding: 24px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);

    h3 {
      font-size: 1.25rem;
      margin: 0 0 8px 0;
      color: var(--sys-brand-core);
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5;
      color: oklch(0.45 0.02 240);
    }

    .action-trigger {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      background-color: var(--sys-brand-core);
      color: #ffffff;
      border: none;
      border-radius: calc(var(--sys-radius-md) - 2px);
      font-size: 0.813rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--sys-transition-smooth);

      /* Nesting pseudo-states cleanly with the '&' parent reference selector */
      &:hover {
        background-color: var(--sys-brand-hover);
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid var(--sys-brand-core);
        outline-offset: 2px;
      }
    }
  }
}

@layer utilities {
  .txt-uppercase {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}`}
            />

            <DocH3>2. Consolidated Declarative Interface Consumption (WorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './styles.css';

export default function WorkspaceView() {
  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Consuming our layered style architecture.
        Business logic remains decoupled from visual rendering definitions.
      */}
      <article className="workspace-card">
        <span className="text-xs font-bold txt-uppercase tracking-wider text-gray-400 block mb-1">
          System Registry Node
        </span>
        <h3>Modern Layout Isolation</h3>
        <p>
          This component consumes native modern CSS layers and color scales, completely bypassing legacy global cascade bugs.
        </p>
        <button type="button" className="action-trigger mt-4">
          Execute Operations
        </button>
      </article>
    </div>
  );
}`}
            />
        </>
    );
}