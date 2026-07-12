import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function PostCSSDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">PostCSS & Abstract Syntax Tree Build Pipelines</DocTitle>

            <DocP>
                PostCSS is a highly performant build tool that transforms CSS styles using JavaScript-based plugins. Unlike traditional preprocessors (such as Sass or Less) that force a rigid, predefined language dialect, PostCSS operates as a modular compiler engine. It parses standard CSS into an <strong>Abstract Syntax Tree (AST)</strong>, runs it through a customized chain of plugins, and serializes the modified tree back into optimized browser-ready stylesheets.
            </DocP>

            <DocH2>The PostCSS Compilation Engine & Workflow</DocH2>

            <DocH3>1. The AST Transformation Pipeline</DocH3>
            <DocP>
                The PostCSS runtime follows a strict three-stage compilation lifecycle to parse and modify style files securely:
            </DocP>
            <DocList
                items={[
                    'Parser: Ingests raw source CSS files and deconstructs the textual declarations into an Abstract Syntax Tree (AST)—a nested object map representing selectors, properties, values, and media rules.',
                    'Plugin Processor Chain: Iterates through the AST nodes. JavaScript plugins intercept this traversal to modify, inject, optimize, or polyfill values based on configuration parameters.',
                    'Stringifier: Regenerates the modified AST back into clean, concatenated output strings, creating the final production stylesheets.'
                ]}
            />



            <DocH3>2. Core Production Plugins</DocH3>
            <DocList
                items={[
                    'Autoprefixer: An essential cross-browser compatibility utility. It cross-references target environment baselines with the Can I Use database, automatically appending necessary vendor prefixes (-webkit-, -moz-, -ms-) to next-gen properties to ensure consistent multi-browser rendering.',
                    'CSSNano: A production-tier minification framework. It performs advanced AST cleanups, stripping comments, extra whitespaces, duplicate rules, and rewriting color spaces or lengths into compressed formats to reduce payload size over the network.',
                    'PostCSS Preset Env: Translates modern, next-gen CSS specifications (such as native nesting, custom media ranges, or color-mix functions) into backwards-compatible standard CSS that older rendering engines can successfully evaluate.'
                ]}
            />

            <DocH2>Production-Grade PostCSS Architecture & Blueprint</DocH2>
            <DocP>
                Below is an advanced build configuration setup detailing plugin piping arrangements alongside an automated, next-gen syntax workspace:
            </DocP>

            <DocH3>1. The PostCSS Core Configurator (postcss.config.js)</DocH3>
            <CodeBlock
                language="javascript"
                code={`/* =======================================================
   PRODUCTION POSTCSS BUNDLING & PLUGIN CHAIN CONFIG
   ======================================================= */

module.exports = {
  plugins: [
    // Imports external files and processes inline @import rules early
    require('postcss-import'),
    
    // Polyfills next-gen CSS features based on target browser baselines
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true
      }
    }),
    
    // Automatically appends vendor prefixes based on Browserslist profiles
    require('autoprefixer')({
      cascade: false,
      grid: 'autoplace'
    }),
    
    // Compresses and minifies the final AST output during production builds
    ...(process.env.NODE_ENV === 'production' 
      ? [require('cssnano')({ preset: 'default' })] 
      : [])
  ]
};`}
            />

            <DocH3>2. Next-Gen Source Input (postcss-source.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* Source code using cutting-edge native specifications */
@layer processing-nodes {
  .c-processor-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    backdrop-filter: blur(12px);
    
    /* Native nesting handled smoothly by preset-env transformations */
    & .card-heading {
      font-weight: 700;
      color: oklch(0.55 0.18 250);
      
      /* Webkit or Mozilla transformation hooks injected automatically later */
      user-select: none;
    }
  }
}`}
            />

            <DocH3>3. Layout Implementation View (PostCSSWorkspaceView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
// Ingests the optimized stylesheet generated by the PostCSS pipeline
import './postcss-compiled-output.css';

export default function PostCSSWorkspaceView() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-xs">
      
      {/* Target card reflecting production-ready optimized styles */}
      <article className="c-processor-card bg-white border rounded-xl p-6 max-w-sm w-full shadow-sm space-y-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-bold">
            AST Engine Verified
          </span>
          <h3 className="card-heading text-sm mt-2">Abstract Transformation Hub</h3>
        </div>
        
        <p className="text-gray-500 leading-relaxed">
          This component's layout source was compiled through PostCSS, passing through <code>Autoprefixer</code> and <code>CSSNano</code> to yield an optimized, production-ready stylesheet.
        </p>

        <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-t pt-3">
          <span>Minified via CSSNano</span>
          <span className="text-emerald-600 font-bold">OPTIMIZED</span>
        </div>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}