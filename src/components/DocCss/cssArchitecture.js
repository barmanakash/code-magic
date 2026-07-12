import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSArchitectureDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Architecture & Scalable Methodologies</DocTitle>

            <DocP>
                As web applications scale, CSS stylesheets can grow unwieldy, leading to unintended side effects, specificity conflicts, and duplication. CSS Architecture methodologies solve these challenges by enforcing structured naming conventions, explicit component boundaries, and strict design token organization to make stylesheets maintainable across large development teams.
            </DocP>

            <DocH2>Traditional Methodologies & Naming Systems</DocH2>

            <DocH3>1. BEM (Block, Element, Modifier)</DocH3>
            <DocP>
                BEM is a strict class-naming convention that structures code into standalone components. It improves scannability and eliminates cascading side effects by keeping specificity completely flat.
            </DocP>
            <DocList
                items={[
                    'Block: A standalone component that has semantic meaning on its own (e.g., .card).',
                    'Element: A semantic child node bound inside the block, prefixed by two underscores (e.g., .card__title).',
                    'Modifier: A flag configuration token that changes the appearance or state of a block or element, prefixed by two dashes (e.g., .card--featured, .card__title--large).'
                ]}
            />



            <DocH3>2. OOCSS, SMACSS, & ITCSS Frameworks</DocH3>
            <DocList
                items={[
                    'OOCSS (Object-Oriented CSS): Separates structure (layout footprints like width and padding) from skin (visual accents like colors, gradients, and borders). This maximizes style reusability across components.',
                    'SMACSS (Scalable and Modular Architecture for CSS): Categorizes stylesheets into five distinct structural layers: Base (defaults), Layout (major sections), Module (reusable UI parts), State (active/hidden indicators), and Theme.',
                    'ITCSS (Inverted Triangle CSS): Organizes project stylesheets into an inverted triangle based on specificity and reach. It scales from global generic settings down to highly specific, localized utility overrides, preventing specificity wars.'
                ]}
            />

            <DocH2>Modern Composition Systems: Atomic & Utility-First</DocH2>

            <DocH3>1. Atomic CSS vs. Utility-First Philosophy</DocH3>
            <DocP>
                Instead of writing scoped component styles, **Atomic and Utility-First CSS** frameworks (like Tailwind CSS) provide single-purpose utility classes that map directly to individual CSS attributes.
            </DocP>
            <DocList
                items={[
                    'Composition over Writing: Layouts are composed directly inside HTML or component markup by stacking pre-defined utility classes together.',
                    'Predictable Bundle Sizes: Because utility classes are reused across the entire application, the compiled CSS bundle reaches a fixed size ceiling, even as the codebase grows.',
                    'Strict Design Alignment: Constrains adjustments to predefined spacing scales and color themes, preventing arbitrary styling deviations across large teams.'
                ]}
            />



            <DocH2>Production CSS Architecture Blueprint</DocH2>
            <DocP>
                Below is a comparison demonstrating how identical UI card components are structured using traditional **BEM Naming Conventions** versus a **Utility-First Component Composition** approach:
            </DocP>

            <DocH3>1. Traditional BEM Implementation (BEMComponent.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   METHODOLOGY A: TRADITIONAL BEM STANDARD ARCHITECTURE
   ======================================================= */

/* Independent Block Element Layer */
.telemetry-card {
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

/* Modifiers targeting specific structural variations */
.telemetry-card--active {
  border-color: oklch(0.55 0.18 250);
  background-color: oklch(0.98 0.005 240);
}

/* Nested element nodes strictly bound to block parents */
.telemetry-card__title {
  font-size: 0.875rem;
  font-weight: 700;
  color: oklch(0.2 0.02 240);
  margin: 0 0 8px 0;
}

.telemetry-card__body {
  font-size: 0.75rem;
  color: oklch(0.5 0.02 240);
  line-height: 1.5;
}`}
            />

            <DocH3>2. Architectural Implementation View (ArchitectureSandbox.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './BEMComponent.css';

export default function ArchitectureSandbox() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-8 p-4">
      
      {/* Approach A: Rendered using strict semantic BEM conventions */}
      <div>
        <h4 className="text-xs font-mono text-gray-400 mb-2">Approach A: BEM Architecture</h4>
        <article className="telemetry-card telemetry-card--active">
          <h3 className="telemetry-card__title">Node Cluster Alpha</h3>
          <p className="telemetry-card__body">
            This element uses strict block-element naming layers to decouple styles and eliminate cascade side effects.
          </p>
        </article>
      </div>

      {/* Approach B: Rendered using clean modern Utility-First composition classes */}
      <div>
        <h4 className="text-xs font-mono text-gray-400 mb-2">Approach B: Utility-First CSS</h4>
        <article className="bg-white border border-blue-500 rounded-xl p-6 shadow-sm bg-[oklch(0.98_0.005_240)]">
          <h3 className="text-sm font-bold text-gray-900 mb-2">Node Cluster Alpha</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            This component builds identical layouts entirely by composing single-purpose atomic classes directly inside the markup.
          </p>
        </article>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}