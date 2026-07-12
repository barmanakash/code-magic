import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSInJSDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Component Co-Location & CSS-in-JS Engines</DocTitle>

            <DocP>
                The CSS-in-JS paradigm unifies visual styles with application logic by co-locating styling declarations directly inside component files. This architecture solves traditional styling issues like global namespace pollution, specificity collisions, and dead-code accumulation. It is divided into two major strategies: <strong>Runtime Evaluation Engines</strong>, which dynamically generate and inject styles into the browser's CSSOM at runtime, and <strong>Zero-Runtime Build-Time Compilers</strong>, which parse typescript/javascript declarations and output optimized, static CSS files during the build process.
            </DocP>

            <DocH2>The Component-Driven Styling Matrix</DocH2>

            <DocH3>1. Runtime Interpolation & CSSOM Injection Engines</DocH3>
            <DocList
                items={[
                    'Styled Components: A pioneering runtime framework that utilizes JavaScript\'s tagged template literals syntax to bind standard CSS statements directly to React components. It automatically generates unique, hashed class names to guarantee absolute style scoping.',
                    'Emotion: A high-performance runtime CSS-in-JS engine that offers both a styled component API and a flexible object/string-based css prop. It includes optimization layers like automated cache management and fast style map lookups.',
                    'Runtime Trade-offs: While runtime systems allow for effortless theme switching and style variations driven by React props, they introduce client-side execution overhead. The browser must parse JavaScript strings, generate CSS styles, and inject them into the DOM during app execution, which can degrade performance in animation-heavy layouts.'
                ]}
            />



            <DocH3>2. Static Zero-Runtime & Type-Safe Compilers</DocH3>
            <DocList
                items={[
                    'CSS Modules: A reliable build-time scoping strategy. Developers write standard CSS files, and the build system (Webpack/Vite) generates an object map tracking localized class hashes (e.g., .card becomes .Card_card__x91a3), completely automating encapsulation without runtime performance costs.',
                    'Vanilla Extract: A zero-runtime, type-safe styling framework. Styles are authored in dedicated TypeScript files (.css.ts) using type-checked utility functions. The compiler processes these definitions during the build step, generating static CSS stylesheets with zero JavaScript runtime footprint.',
                    'Linaria: A zero-runtime compiler that lets developers write styled-components syntax using tagged template literals. A build-time tool extracts these declarations into external static CSS files, utilizing CSS custom properties (variables) to support dynamic props.'
                ]}
            />



            <DocH2>Production Component-Driven CSS Blueprint</DocH2>
            <DocP>
                Below is a production-tier layout demonstrating how identical UI card modules are structured using both a **Runtime Tagged Template System** (Styled Components/Emotion) and a **Zero-Runtime Type-Safe Sheet Configuration** (Vanilla Extract/CSS Modules style):
            </DocP>

            <DocH3>1. Approach A: Runtime Styled-Components Implementation</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import styled from 'styled-components';

// Runtime Engine automatically injects hashes and maps props dynamically
const StyledTelemetryCard = styled.article<{ $isCritical?: boolean }>\`
  background-color: #ffffff;
  border: 1px solid \${props => props.$isCritical ? 'oklch(0.6 0.18 20)' : 'oklch(0.9 0.01 240)'};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: border-color 200ms ease;

  &:hover {
    border-color: \${props => props.$isCritical ? 'oklch(0.5 0.18 20)' : 'oklch(0.55 0.18 250)'};
  }
\`;

const CardHeading = styled.h3\`
  font-size: 14px;
  font-weight: 700;
  color: oklch(0.2 0.02 240);
  margin: 0 0 8px 0;
\`;

export function RuntimeStyledCard({ isCritical }: { isCritical?: boolean }) {
  return (
    <StyledTelemetryCard $isCritical={isCritical}>
      <CardHeading>Runtime Node Module</CardHeading>
      <p className="text-xs text-gray-500 leading-relaxed">
        This container evaluates its styles on the fly, injecting custom CSS directly into the CSSOM based on active component props.
      </p>
    </StyledTelemetryCard>
  );
}`}
            />

            <DocH3>2. Approach B: Zero-Runtime Static Configuration (Vanilla Extract Style)</DocH3>
            <CodeBlock
                language="typescript"
                code={`/* =======================================================
   COMPILATION TARGET SPECIFICATION: telemetry.css.ts
   ======================================================= */
import { style, styleVariants } from '@vanilla-extract/css';

export const baseCard = style({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  transition: 'border-color 200ms ease'
});

// Generates static variant classes during the production build step
export const cardVariants = styleVariants({
  normal: [baseCard, { border: '1px solid oklch(0.9 0.01 240)', ':hover': { borderColor: 'oklch(0.55 0.18 250)' } }],
  critical: [baseCard, { border: '1px solid oklch(0.6 0.18 20)', backgroundColor: 'oklch(0.99 0.01 20)', ':hover': { borderColor: 'oklch(0.5 0.18 20)' } }]
});

export const headingText = style({
  fontSize: '14px',
  fontWeight: 700,
  color: 'oklch(0.2 0.02 240)',
  margin: '0 0 8px 0'
});`}
            />

            <DocH3>3. Layout Workspace Controller (CSSInJSWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';
import { RuntimeStyledCard } from './RuntimeStyledCard';
import { cardVariants, headingText } from './telemetry.css';

export default function CSSInJSWorkspace() {
  const [faultActive, setFaultActive] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-8 text-xs">
      
      <button 
        onClick={() => setFaultActive(!faultActive)}
        className="bg-gray-900 text-white font-mono px-4 py-2 rounded-md font-bold hover:bg-gray-800 transition-colors"
      >
        Toggle Environment State: {faultActive ? 'CRITICAL_FAULT' : 'STABLE'}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
        
        {/* Render Track A: Runtime CSS-in-JS style injection */}
        <div>
          <h4 className="font-mono text-gray-400 mb-2">Approach A: Runtime Evaluation</h4>
          <RuntimeStyledCard isCritical={faultActive} />
        </div>

        {/* Render Track B: Static zero-runtime class assignment */}
        <div>
          <h4 className="font-mono text-gray-400 mb-2">Approach B: Zero-Runtime Compiler</h4>
          <article className={faultActive ? cardVariants.critical : cardVariants.normal}>
            <h3 className={headingText}>Static Node Module</h3>
            <p className="text-gray-500 leading-relaxed">
              This container resolves its styles completely during compilation, outputting optimized, static CSS classes with zero runtime execution cost.
            </p>
          </article>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}