import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../docs/DocPrimitives';
import CodeBlock from '../docs/CodeBlock';

export default function CSSPreprocessorsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Preprocessors & Compilation Workflows</DocTitle>

            <DocP>
                CSS Preprocessors (such as Sass, SCSS, Less, and Stylus) extend standard CSS with programming logic, scripting APIs, and architectural tools. By introducing features like programmatic variables, reusable mixins, custom mathematical functions, and scoped partial files, preprocessors allow engineering teams to write highly structured, clean, and DRY (Don't Repeat Yourself) style systems that compile down into browser-ready, static CSS stylesheets.
            </DocP>

            <DocH2>The Preprocessor Ecosystem Matrix</DocH2>

            <DocH3>1. Syntax Dialects & Compilation Engines</DocH3>
            <DocList
                items={[
                    'Sass (Syntactically Awesome Style Sheets): The original whitespace-sensitive, indented syntax variant. It completely omits curly braces ({}) and semicolons (;), relying strictly on line breaks and clean tab indentations to map tree structures.',
                    'SCSS (Sassy CSS): A modern, fully CSS-compatible dialect variant of Sass. It maintains traditional CSS code formatting guidelines—utilizing brackets and semicolons—making it much easier to integrate into modern web development codebases.',
                    'Less (Leaner Style Sheets): A JavaScript-driven preprocessor ecosystem that extends standard CSS syntax. It handles theme injections using a unique signifier identifier token prefix (@primary-color: #000;) instead of the standard dollar sign prefix.',
                    'Stylus: A highly flexible preprocessor syntax engine that allows developers to freely mix, match, omission, or retain bracket rules, commas, and semicolons interchangeably based on personal preferences.'
                ]}
            />



            <DocH3>2. Functional Logic & Composition Features</DocH3>
            <DocList
                items={[
                    'Preprocessor Variables: Scripting tokens prefixed with identifiers (e.g., $brand-blue: #0284c7; in Sass) that evaluate during compilation. Unlike native runtime CSS variables, preprocessor tokens are completely compiled away into static strings in the final browser output.',
                    'Mixins (@mixin / @include): Parameterized functions that encapsulate reusable groups of CSS declarations. They allow code blocks to be injected on the fly, with support for custom default parameters to handle variations.',
                    'Custom Functions (@function): Mathematical scripts that ingest parameters, execute processing logic, and return exact computed style values back into property maps.',
                    'Nesting Hierarchy: Allows child elements, pseudo-classes, and mod modifiers to be declared inline inside parents, matching the exact tree layout of the application markup.',
                    'Partials & Module Bundling: Splitting massive code architectures into scoped, underscore-prefixed asset sheets (e.g., _buttons.scss, _grid.scss) that are imported into a central entry point file using module loaders like @use or @import, without creating extra HTTP fetch calls.'
                ]}
            />

            <DocH2>Production Preprocessor Structural Blueprint</DocH2>
            <DocP>
                Below is a production-ready SCSS infrastructure block illustrating partial modular system design, functional channel color tint maps, variable math calculations, and recursive mixin configurations:
            </DocP>

            <DocH3>1. The Architecture Source Blueprint (mixins-bundle.scss)</DocH3>
            <CodeBlock
                language="scss"
                code={`/* =======================================================
   PRODUCTION SCSS PREPROCESSOR SOURCE COMPILATION
   ======================================================= */

/* A. BASE VARIABLE PRIMITIVES (Strips down to static output strings) */
$grid-spacing-unit: 8px;
$color-brand-primary: #0284c7;
$radius-default: 12px;

/* B. ADVANCED COMPUTATIONAL FUNCTION SYSTEM */
@function compute-element-padding($multiplier) {
  /* Dynamic compile-time arithmetic operations parsing */
  @return $grid-spacing-unit * $multiplier;
}

/* C. PARAMETERIZED FLEXIBLE MIXIN CONTROL */
@mixin configure-flex-alignment($direction: row, $justify: center, $align: center) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

/* D. HIGHLY SCOPED NESTED STRUCTURE WITH AMY CONVENTIONS */
.c-telemetry-module {
  background-color: #ffffff;
  border-radius: $radius-default;
  border: 1px solid #e2e8f0;
  
  /* Invokes computational padding function */
  padding: compute-element-padding(3); /* Compiles to 24px flat */
  
  /* Invokes flexible mixin engine */
  @include configure-flex-alignment($direction: column, $justify: flex-start, $align: stretch);

  /* Clean native nested element structure maps */
  .telemetry-header {
    font-size: 14px;
    font-weight: 700;
    color: #0f172a;
    
    /* Nesting parent suffix indicator (&) maps to .telemetry-header:hover */
    &:hover {
      color: $color-brand-primary;
    }
  }

  .telemetry-data-node {
    margin-top: compute-element-padding(2);
    font-family: monospace;
    font-size: 12px;
  }
}`}
            />

            <DocH3>2. Layout Implementation View (PreprocessorWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
// Imagine this maps to the pre-compiled stylesheet asset layer output
import './mixins-bundle.css';

export default function PreprocessorWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-xs">
      
      {/* Target Container generated via modern precompiled SCSS logic blocks */}
      <article className="c-telemetry-module max-w-sm w-full shadow-sm">
        <div className="telemetry-header cursor-pointer transition-colors">
          System Preprocessor Router
        </div>
        
        <p className="text-gray-500 leading-relaxed mt-2">
          This component's layout architecture maps compilation variables, structured class nesting layers, and clean parametric mixins down into ultra-efficient static code tokens.
        </p>

        <div className="telemetry-data-node text-blue-600 bg-blue-50 p-2 rounded border border-blue-100">
          STATUS_OK // COMPILER_RESOLVED
        </div>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}