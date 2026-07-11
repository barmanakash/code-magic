import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function WaysToApplyCSSDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Methods of Applying CSS</DocTitle>

            <DocP>
                There are three primary methods to integrate stylesheets into the Document Object Model (DOM), alongside specialized directive rules. Choosing an implementation strategy directly affects network performance, layout rendering paths, browser caching efficiency, and long-term codebase maintainability.
            </DocP>

            <DocH2>Integration Methodology Matrix</DocH2>
            <DocList
                items={[
                    'Inline CSS: Styling declarations written directly within the HTML element\'s "style" attribute. It maps rules exclusively to that specific node instance, bypassing the standard selector cascade completely. Because it has high specificity ($1,0,0,0$), it is difficult to override programmatically.',
                    'Internal CSS (Embedded): Declared using a <style> block directly within the <head> container of an HTML document. This approach confines styling scope to a single standalone webpage asset.',
                    'External CSS: Maintained in entirely independent file sheets (*.css) and linked via the semantic <link> tag. This industry-standard approach cleanly separates data structures from presentation layers.',
                    '@import Directive: A native CSS rule syntax that allows a stylesheet to pull in external sub-sheets from other locations. However, because it forces the rendering engine to fully parse the parent sheet before discovering and downloading child assets, it creates sequential network bottlenecks.'
                ]}
            />



            <DocH2>Performance & Caching Profiles</DocH2>
            <p className="text-sm text-gray-700 mb-4">
                Evaluating load mechanics highlights why external asset pipelines are preferred for production-grade software:
            </p>

            <table className="min-w-full divide-y divide-gray-200 border text-xs text-left mt-2 mb-6">
                <thead className="bg-gray-50 font-bold text-gray-700">
                    <tr>
                        <th className="p-3 border-b">Method</th>
                        <th className="p-3 border-b">HTTP Requests</th>
                        <th className="p-3 border-b">Browser Caching</th>
                        <th className="p-3 border-b">Render Blocking Profile</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                    <tr>
                        <td className="p-3 font-medium text-gray-900">Inline CSS</td>
                        <td className="p-3 text-green-600">Zero (Embedded in HTML)</td>
                        <td className="p-3 text-red-500">None (Re-parsed with every HTML hit)</td>
                        <td className="p-3 text-amber-600">Increases base document byte weight</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-medium text-gray-900">Internal CSS</td>
                        <td className="p-3 text-green-600">Zero (Embedded in HTML)</td>
                        <td className="p-3 text-red-500">None (Tied strictly to HTML file life)</td>
                        <td className="p-3 text-green-600">Instant parse; blocks initial paint until complete</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-medium text-gray-900">External CSS</td>
                        <td className="p-3 text-amber-600">1 Request per linked asset</td>
                        <td className="p-3 text-green-600">Excellent (Cached permanently until invalidated)</td>
                        <td className="p-3 text-green-600">Highly optimized via parallel CDN streaming</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-medium text-gray-900">@import Rule</td>
                        <td className="p-3 text-red-500">Creates deep sequential request chains</td>
                        <td className="p-3 text-green-600">Dependent on individual asset headers</td>
                        <td className="p-3 text-red-500">High: Triggers significant layout delays</td>
                    </tr>
                </tbody>
            </table>

            <DocH2>Architectural Best Practices</DocH2>
            <DocList
                items={[
                    'Enforce Unidirectional External Pipelines: Rely almost entirely on external link elements to handle the presentation layer, keeping HTML files lightweight and maximizing caching.',
                    'Bypass the @import Bottleneck: Use multiple link tags or rely on modern build-time tools (like Vite, PostCSS, or Sass) to bundle sub-sheets together during compilation rather than forcing the browser to resolve them at runtime.',
                    'Reserve Inline Code for Dynamic Calculations: Limit inline style declarations to highly fluid properties mapped dynamically via JavaScript engines (such as moving parallax transitions or dynamic 3D rotation coordinates).'
                ]}
            />

            <DocH2>Production Integration Blueprint</DocH2>
            <DocP>
                Below is a production-ready file architecture showing the correct implementation of an **External Style Sheet** paired with an optimized dynamic **Inline Variable Overriding pattern**:
            </DocP>

            <DocH3>1. The Global Structural Sheet (css/global-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION APPLICATION EXTERNAL BASE PIPELINE
   ======================================================= */
:root {
  --app-primary-tint: oklch(0.6 0.25 250);
  --app-surface-color: #ffffff;
  --dynamic-rotation: 0deg; /* Fallback safe baseline coordinate */
}

body {
  font-family: system-ui, sans-serif;
  background-color: oklch(0.97 0.01 240);
  margin: 0;
}

.data-layer-card {
  background-color: var(--app-surface-color);
  border: 1px solid oklch(0.9 0.02 240);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
  
  /* Implement high-performance GPU hardware acceleration transformations */
  transform: rotate(var(--dynamic-rotation));
  transition: transform 0.1s linear;
}`}
            />

            <DocH3>2. Layout Implementation View (ApplicationView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect } from 'react';
import './css/global-engine.css';

export default function ApplicationView() {
  const [rotationDegrees, setRotationDegrees] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Compute mouse coordinates into dynamic rotation degrees
      const normalizedDegree = (event.clientX / window.innerWidth) * 15;
      setRotationDegrees(normalizedDegree);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* BEST PRACTICE ENFORCEMENT:
        1. Class structure remains safely decoupled inside the external stylesheet.
        2. Inline style mapping is used strictly to pipe fluid, rapid real-time script variations.
      */}
      <div 
        className="data-layer-card max-w-sm"
        style={{ '--dynamic-rotation': \`\${rotationDegrees}deg\` } as React.CSSProperties}
      >
        <h3 className="text-md font-bold text-gray-800 mb-2">Dynamic Render Layer</h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Move your mouse across the screen viewport to observe dynamic inline styling variables orchestrating real-time visual transforms, backed by optimized external style rule layouts.
        </p>
      </div>
    </div>
  );
}`}
            />
        </>
    );
}