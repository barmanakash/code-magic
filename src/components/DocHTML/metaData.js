import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLMetadataDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">HTML Document Metadata: SEO Optimization, Rich Previews, Asset Manifests, and Application Identity</DocTitle>
      
      <DocP>
        HTML metadata refers to machine-readable information nested within the <code>&lt;head&gt;</code> tag of an HTML document. Unlike body markup, metadata is not rendered on the main webpage viewport. Instead, it directs browser behaviors, configures viewports, provides assets to search engine web-crawlers (SEO), structures rich visual previews for social platforms, and declares progressive web app (PWA) installation states.
      </DocP>

      <DocH2>The Anatomy of Document Metadata</DocH2>
      <DocP>
        A production-grade document configuration handles several layers of metadata, moving from basic document behavior declarations to rich app integration.
      </DocP>

      <DocH3>1. Baseline Document Elements (`&lt;title&gt;` &amp; `&lt;meta&gt;`)</DocH3>
      <DocP>
        These core elements set the baseline properties of your page:
      </DocP>
      <DocList
        items={[
          'title: Sets the label shown in browser tabs and serves as the clickable headline in search engine result pages (SERPs). It is critical for SEO and should stay under 60 characters.',
          'meta charset="utf-8": Declares the document character encoding standard, preventing broken text rendering by supporting almost all written characters.',
          'meta name="viewport": Configures the mobile viewport boundary width and initial scale, making responsive, mobile-friendly layouts possible.',
          'meta name="description": Provides a brief summary (typically 150-160 characters) of the page content. Search engines often display this text as the snippet on search results pages.'
        ]}
      />

      <DocH3>2. Rich Sharing Protocol Engines (Open Graph &amp; Twitter Cards)</DocH3>
      <DocP>
        When users share a URL on digital communication platforms (like Slack, Discord, or LinkedIn), social web crawlers parse the target document's head tags to generate rich visual cards.
      </DocP>

      

      <DocList
        items={[
          'Open Graph (og:): Originally created by Facebook, this standard turns webpages into rich objects in social graphs. Key tags include og:title, og:description, og:image, and og:type.',
          'Twitter Cards (twitter:): Proprietary metadata tags used by X (formerly Twitter) to format visual preview cards. If missing, the platform typically falls back to matching Open Graph values.'
        ]}
      />

      <DocH3>3. Icons &amp; Progressive Web App Manifests</DocH3>
      <DocP>
        To make a website feel like a native application, you need to configure browser-tab favicons alongside a web application manifest.
      </DocP>

      

      <DocList
        items={[
          'Icons: Includes standard 16x16 or 32x32 pixel favicons, Apple Touch Icons for iOS home screens, and SVG icons that scale cleanly to any size on high-density displays.',
          'manifest.json: A JSON configuration file that informs the user\'s OS how the site should behave when installed as a PWA (configuring features like full-screen display, theme colors, orientation locks, and system icons).'
        ]}
      />

      <DocH2>Production Metadata Implementation Blueprint</DocH2>
      <DocP>
        Below is a fully validated <code>&lt;head&gt;</code> template that integrates modern metadata standards, alongside an interactive playground to test and preview your configurations:
      </DocP>

      <DocH3>1. Standard Production Metadata Template (document-head.html)</DocH3>
      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Acme Cloud Services — High-Performance Computing Pipelines</title>
  <meta name="description" content="Deploy and manage scale-out GPU compute nodes and storage pipelines with zero cold starts. Learn about our developer APIs.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://acmecloud.com/compute">

  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0f172a">

  <meta property="og:type" content="website">
  <meta property="og:url" content="https://acmecloud.com/compute">
  <meta property="og:title" content="Acme Cloud Services — High-Performance Computing Pipelines">
  <meta property="og:description" content="Deploy and manage scale-out GPU compute nodes and storage pipelines with zero cold starts.">
  <meta property="og:image" content="https://acmecloud.com/assets/og-image-compute.jpg">
  <meta property="og:site_name" content="Acme Cloud">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@AcmeCloud">
  <meta name="twitter:title" content="Acme Cloud Services — High-Performance Computing Pipelines">
  <meta name="twitter:description" content="Deploy and manage scale-out GPU compute nodes and storage pipelines with zero cold starts.">
  <meta name="twitter:image" content="https://acmecloud.com/assets/og-image-compute.jpg">
</head>
<body>
  </body>
</html>`}
      />

      <DocH3>2. Interactive Metadata Preview Sandbox (HTMLMetadataWorkspace.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React, { useState } from 'react';

export default function HTMLMetadataWorkspace() {
  const [pageTitle, setPageTitle] = useState('Acme Cloud Services — Enterprise Compute');
  const [pageDesc, setPageDesc] = useState('Scale massive computational workloads across thousands of GPUs seamlessly.');
  const [themeColor, setThemeColor] = useState('#0f172a');
  const [activeTab, setActiveTab] = useState<'serp' | 'og' | 'manifest'>('serp');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-md">
        <h3 className="font-bold text-gray-900 text-sm">Interactive Metadata Simulator</h3>
        <p className="text-gray-500 mt-1">
          Adjust the key metadata properties below to see how search engine crawlers, social share cards, and mobile operating systems render your document's head definitions.
        </p>
      </header>

      {/* Main Workspace Frame */}
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px]">
        
        {/* LEFT COLUMN: CONTROL INPUTS (5 Columns) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
              Configure Metadata Attributes
            </span>

            <div className="space-y-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Page Title (&lt;title&gt;)</label>
                <input
                  type="text"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg bg-slate-50 text-[11px] font-mono focus:outline-blue-500"
                  maxLength={100}
                />
                <div className="flex justify-between text-[9px] mt-1 text-slate-400">
                  <span>Target length: ~50-60 chars</span>
                  <span className={pageTitle.length > 60 ? "text-amber-600" : "text-emerald-600"}>
                    {pageTitle.length} chars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Meta Description</label>
                <textarea
                  rows={3}
                  value={pageDesc}
                  onChange={(e) => setPageDesc(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg bg-slate-50 text-[11px] font-mono focus:outline-blue-500 resize-none"
                  maxLength={200}
                />
                <div className="flex justify-between text-[9px] mt-1 text-slate-400">
                  <span>Target length: ~150-160 chars</span>
                  <span className={pageDesc.length > 160 ? "text-amber-600" : "text-emerald-600"}>
                    {pageDesc.length} chars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">System Theme Color</label>
                <div className="flex space-x-2">
                  <input
                    type="color"
                    value={themeColor}
                    onChange={(e) => setThemeColor(e.target.value)}
                    className="w-10 h-8 cursor-pointer rounded border p-0.5 bg-white"
                  />
                  <input
                    type="text"
                    value={themeColor}
                    onChange={(e) => setThemeColor(e.target.value)}
                    className="w-full px-3 py-1.5 border rounded-lg bg-slate-50 text-[11px] font-mono focus:outline-blue-500"
                  />
                </div>
                <p className="text-[9px] text-slate-400 mt-1">Configures top browser taskbar coloring on mobile OS frames.</p>
              </div>
            </div>
          </div>

          {/* Quick Syntax Manifest View */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Resulting Source Inject</span>
            <div className="max-h-[120px] overflow-y-auto space-y-1 scrollbar-thin text-emerald-400 leading-normal">
              <div>&lt;title&gt;{pageTitle}&lt;/title&gt;</div>
              <div>&lt;meta name="description" content="{pageDesc}"&gt;</div>
              <div>&lt;meta name="theme-color" content="{themeColor}"&gt;</div>
              <div>&lt;meta property="og:title" content="{pageTitle}"&gt;</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE PREVIEW PANEL (7 Columns) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                Select Output Preview Channel
              </span>
              <div className="flex space-x-1">
                {(['serp', 'og', 'manifest'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={"px-2.5 py-1 rounded font-bold uppercase text-[9px] transition-colors " + (activeTab === tab ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200")}
                  >
                    {tab === 'serp' ? 'Google Search' : tab === 'og' ? 'Open Graph Card' : 'PWA Manifest'}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB PREVIEW MODULES */}
            <div className="min-h-[220px] flex items-center justify-center p-2 bg-slate-50 border rounded-xl">
              
              {/* GOOGLE SEARCH RESULTS SIMULATION (SERP) */}
              {activeTab === 'serp' && (
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs max-w-md w-full space-y-1">
                  <div className="flex items-center space-x-2 text-slate-600 text-[10px]">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[8px] font-bold">Ad</span>
                    <span>https://acmecloud.com/compute</span>
                  </div>
                  <h4 className="text-[#1a0dab] hover:underline cursor-pointer text-[15px] leading-tight font-medium line-clamp-1">
                    {pageTitle}
                  </h4>
                  <p className="text-[#4d5156] leading-relaxed text-[11px] line-clamp-2 pt-1">
                    {pageDesc || "No description declared. Search engine crawler will scan body copy vectors randomly."}
                  </p>
                </div>
              )}

              {/* OPEN GRAPH SOCIAL CARD PREVIEW */}
              {activeTab === 'og' && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs max-w-sm w-full overflow-hidden">
                  <div className="h-28 bg-slate-200 flex items-center justify-center text-slate-400 font-mono text-[10px] border-b relative">
                    <span className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent z-10" />
                    <div className="absolute top-2 left-2 z-20 bg-slate-900/80 text-white px-2 py-0.5 rounded font-bold text-[8px] tracking-wide uppercase">
                      Image Assets Block
                    </div>
                    <span className="z-20 text-slate-600 font-bold">og:image (1200 x 630px)</span>
                  </div>
                  <div className="p-3 space-y-1">
                    <span className="text-slate-400 text-[9px] uppercase font-bold tracking-wider block">ACMECLOUD.COM</span>
                    <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{pageTitle}</h4>
                    <p className="text-slate-500 text-[10px] leading-snug line-clamp-2">{pageDesc}</p>
                  </div>
                </div>
              )}

              {/* PROGRESSIVE WEB APP (PWA) MANIFEST PREVIEW */}
              {activeTab === 'manifest' && (
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-lg max-w-xs w-full space-y-3 font-mono text-[9px]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-amber-400 font-bold">site.webmanifest</span>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded font-bold uppercase">Valid JSON</span>
                  </div>
                    <div className="space-y-1 text-slate-300">
                    <div>{'{'}</div>
                    <div className="pl-3"><span className="text-blue-400">"short_name"</span>: "Acme",</div>
                    <div className="pl-3"><span className="text-blue-400">"name"</span>: "{pageTitle.split('—')[0].trim()}",</div>
                    <div className="pl-3"><span className="text-blue-400">"theme_color"</span>: <span className="text-emerald-400">"{themeColor}"</span>,</div>
                    <div className="pl-3"><span className="text-blue-400">"background_color"</span>: "#ffffff",</div>
                    <div className="pl-3"><span className="text-blue-400">"display"</span>: "standalone"</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Production Rule:</strong> Do not guess how metadata is structured. Use Open Graph standards to provide clean preview cards across communication channels, and use web manifests to turn simple web sites into fully installable progressive web applications (PWAs).
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