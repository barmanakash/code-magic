import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLHeadElementsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Head Elements: Metadata Orchestration, Browser Instructions, and SEO Foundations</DocTitle>

            <DocP>
                The <code>&lt;head&gt;</code> element is a machine-readable container that holds critical metadata about an HTML document. Positioned strictly between the opening <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag, its contents do not render directly in the browser's visual viewport. Instead, they establish character encoding rules, configure mobile viewport scaling, hook up external stylesheets and scripts, manage search engine indexing (SEO), and define the page's entry point base URL.
            </DocP>

            <DocH2>The Head Metadata Architecture</DocH2>

            <DocH3>1. Structural Configurations & Favicons</DocH3>
            <DocList
                items={[
                    'title: Sets the document title displayed in the browser tab, history records, and search engine results pages (SERPs). For optimal SEO display, keep titles under 60 characters.',
                    'base: Specifies the base URL and target window for all relative URLs in a document (e.g., <base href="https://cdn.example.com/" target="_blank">). Only one <base> element is permitted per page.',
                    'favicon: Relates an external icon file to the browser tab using the link tag with the rel="icon" attribute. Modern environments favor lightweight, scalable SVG vector icons.'
                ]}
            />

            <DocH3>2. Resource Linking & Script Execution Contracts</DocH3>
            <DocList
                items={[
                    'link: Links the document to external resources like stylesheets, pre-rendered fonts, and canonical URLs. Example: <link rel="stylesheet" href="styles.css">.',
                    'style: Encloses internal, document-level CSS overrides directly within the head block.',
                    'script: Imports client-side JavaScript behaviors. To prevent script execution from blocking DOM parsing, use the async (executes immediately when downloaded) or defer (waits until DOM parsing completes) boolean attributes.'
                ]}
            />



            <DocH3>3. Core Meta Tags: Charset, Viewport, and SEO</DocH3>
            <DocList
                items={[
                    'Charset (<meta charset="UTF-8">): Declares the character encoding for the HTML document. Using UTF-8 is the industry standard because it safely encodes almost all written languages and special characters, preventing broken text layouts.',
                    'Viewport (<meta name="viewport" content="width=device-width, initial-scale=1.0">): Controls how mobile browsers scale and render the page. Setting the width to match the device\'s screen width prevents mobile browsers from displaying pages in zoomed-out desktop configurations.',
                    'SEO Meta Tags: Provide search engine crawlers with direct descriptions and indexing instructions. Key tags include the page description, robots indexing rules (index, follow), and open-graph tags (og:title, og:description) for rich previews on social media platforms.'
                ]}
            />

            <DocH2>Production-Grade Head Element Architecture</DocH2>
            <DocP>
                Below is a fully optimized head element template designed for security, standard SEO rendering, and efficient asset prefetching:
            </DocP>

            <DocH3>1. The Complete Head Configuration (head-production.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Global Telemetry Hub | Enterprise Console</title>
  <meta name="description" content="Access real-time server telemetry streams, cluster analytics, and system nodes on our secure HTML5 console.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://console.enterprise.com/telemetry">

  <meta property="og:title" content="Global Telemetry Hub">
  <meta property="og:description" content="Access real-time server telemetry streams and cluster analytics.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://console.enterprise.com/telemetry">
  <meta property="og:image" content="https://console.enterprise.com/assets/og-banner.png">

  <base href="https://console.enterprise.com/" target="_self">

  <link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="css/telemetry-layout.css">

  <style>
    :root {
      --primary-space-color: oklch(0.55 0.18 250);
    }
  </style>

  <script src="js/telemetry-engine.js" defer></script>
</head>
<body>
  </body>
</html>`}
            />

            <DocH3>2. Layout Implementation View (HTMLHeadWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLHeadWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML Head Parser Inspection</h3>
        <p className="text-gray-500 mt-1">
          Explore how the browser processes and acts on hidden metadata declarations inside the head tag.
        </p>
      </header>

      {/* Metatag Visual Representation Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          &lt;head&gt; Parser
        </div>

        <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider font-mono border-b pb-2">Active Head Declarations</h4>
        
        <div className="space-y-3">
          
          <div className="p-3 bg-slate-50 border rounded-xl flex items-start gap-3">
            <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded font-mono text-[9px] font-bold shrink-0">
              Charset
            </div>
            <div>
              <code className="text-[10px] text-gray-800 font-bold block">&lt;meta charset="UTF-8"&gt;</code>
              <p className="text-gray-500 mt-0.5 text-[11px]">Forces standard global character rendering across all languages and fonts.</p>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border rounded-xl flex items-start gap-3">
            <div className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-mono text-[9px] font-bold shrink-0">
              Viewport
            </div>
            <div>
              <code className="text-[10px] text-gray-800 font-bold block">width=device-width, initial-scale=1.0</code>
              <p className="text-gray-500 mt-0.5 text-[11px]">Configures 1:1 mobile scaling, stopping the browser from shrinking pages on mobile viewports.</p>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border rounded-xl flex items-start gap-3">
            <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-[9px] font-bold shrink-0">
              Defer Script
            </div>
            <div>
              <code className="text-[10px] text-gray-800 font-bold block">&lt;script src="..." defer&gt;</code>
              <p className="text-gray-500 mt-0.5 text-[11px]">Downloads scripts in the background and runs them only after the full DOM structure is parsed, keeping page loads fast.</p>
            </div>
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