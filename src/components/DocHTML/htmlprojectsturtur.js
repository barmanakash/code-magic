import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLProjectStructureDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Project Structure Architecture: Directory Topologies for Landings, Portfolios, Blogs, and Enterprise Layouts</DocTitle>

            <DocP>
                A clean workspace layout is essential for maintaining application codebases over time. As web systems scale from simple landing pages to content-heavy micro-architectures like blogs and business websites, keeping scripts, assets, and structural documents separated ensures clean build paths and fast file lookups.
            </DocP>

            <DocH2>Directory Typologies By Application Scale</DocH2>
            <DocP>
                Organizing your directory structure directly impacts how easily your application can scale, bundle assets, and integrate with continuous deployment environments.
            </DocP>

            <DocH3>1. The Conversion Landing Page (Flat Architecture)</DocH3>
            <DocP>
                Landing pages are built to achieve a single business objective. Because they are self-contained layouts, their folder trees should focus on minimizing download sizes and keeping paths flat.
            </DocP>
            <DocList
                items={[
                    '<strong>Topology:</strong> A single structural root file (<code>index.html</code>) supported by flat asset buckets.',
                    '<strong>Optimization Profile:</strong> Designed for extreme asset compression, inlined critical rendering paths, and minimal asset lookups.'
                ]}
            />

            <DocH3>2. Developer Portfolio (Modular Showcase Blueprint)</DocH3>
            <DocP>
                Portfolio setups must balance personal branding assets, interactive case studies, and structured downloadable resources (like resumes) without cluttering the project root.
            </DocP>
            <DocList
                items={[
                    '<strong>Topology:</strong> Segmented directories for distinct visual projects, mixed media components, and global styling variations.',
                    '<strong>Optimization Profile:</strong> Heavy use of localized responsive imagery targets and dedicated downloads buckets.'
                ]}
            />

            <DocH3>3. The Static/Dynamic Blog (Content Tree Sub-Routing)</DocH3>
            <DocP>
                Blogs manage growing trees of text articles, media, and categories. Organizing files cleanly here prevents duplicate paths and makes routing intuitive.
            </DocP>
            <DocList
                items={[
                    '<strong>Topology:</strong> Organized using deep nested post sub-folders or structured layout templates that separate dynamic views from global layouts.',
                    '<strong>Optimization Profile:</strong> Optimized for semantic article structures and clear metadata tags to enhance search engine visibility.'
                ]}
            />

            <DocH3>4. Multi-Page Enterprise Business Website (Modular Hierarchies)</DocH3>
            <DocP>
                Enterprise platforms require highly structured, modular directory setups to handle multiple layout views, legally required documents, and shared global components.
            </DocP>
            <DocList
                items={[
                    '<strong>Topology:</strong> Deep structural decoupling using isolated pages modules, components folders, and global utility asset repositories.',
                    '<strong>Optimization Profile:</strong> Fine-tuned for shared asset caching rules across all pages and strict separation between staging and production environments.'
                ]}
            />



            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Application Context</th>
                            <th className="p-3">Structural Complexity</th>
                            <th className="p-3">Asset Pipeline Focus</th>
                            <th className="p-3">Routing Architecture Model</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Landing Page</td>
                            <td className="p-3">Flat Core (1-2 Pages)</td>
                            <td className="p-3 text-amber-600 font-semibold">Critical Inline Injection</td>
                            <td className="p-3">Single-Root Element Document Selector</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Blog Template</td>
                            <td className="p-3">Nested Content Matrix</td>
                            <td className="p-3 text-emerald-600 font-semibold">Shared Article Media</td>
                            <td className="p-3">Deep Hierarchical Post Tree Sub-paths</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-blue-600">Enterprise Site</td>
                            <td className="p-3">Modular Global Decoupling</td>
                            <td className="p-3 text-emerald-600 font-semibold">Global Design Caches</td>
                            <td className="p-3">Multi-Page Independent View Maps</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Enterprise Architecture Folder Schematics</DocH2>
            <DocP>
                Review the directory tree layouts below to guide the structural design of your projects, followed by an interactive workspace that demonstrates how file paths resolve within a project tree:
            </DocP>

            <DocH3>1. Multi-Page Enterprise Business Structure Manifest (business-topology.txt)</DocH3>
            <CodeBlock
                language="text"
                code={`my-enterprise-website/
├── index.html                   # Main entry point landing node
├── about.html                   # Corporate identity sub-page
├── contact.html                 # Lead generation submission portal
├── privacy-policy.html          # Legal disclaimer document node
├── assets/                      # Global asset repository
│   ├── css/
│   │   ├── global.css           # Global design system rules
│   │   └── modules/             # Section-specific page layouts
│   │       ├── contact-form.css
│   │       └── hero-slider.css
│   ├── js/
│   │   ├── core.js              # Standard interaction script
│   │   └── form-validator.js    # Dedicated input processing utility
│   ├── images/
│   │   ├── branding/            # Logos and corporate symbols
│   │   └── uploads/             # Contextual site graphics
│   └── documents/
│       └── technical-spec.pdf   # Public resource downloads
└── components/                  # Shared HTML include fragments
    ├── navigation.html
    └── footer.html`}
            />

            <DocH3>2. Modular Static Content Blog Structure Manifest (blog-topology.txt)</DocH3>
            <CodeBlock
                language="text"
                code={`my-content-blog/
├── index.html                   # Main dashboard aggregating posts
├── archive.html                 # Historical taxonomy listings
├── assets/
│   ├── style.css                # Global typographic stylesheet
│   └── media/                   # Content illustration library
└── posts/                       # Content engine routing directory
    ├── index.html               # Category redirect landing point
    ├── 2026/                    # Year-based content groupings
    │   ├── frontend-trends.html
    │   └── backend-scaling.html
    └── 2025/
        └── legacy-systems.html`}
            />

            <DocH3>3. Workspace Asset Path Resolution Simulator (HTMLProjectWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLProjectWorkspace() {
  const [selectedFileType, setSelectedFileType] = useState<'root' | 'nested' | 'asset'>('root');

  // Computing resolution target maps explicitly
  const getResolvedPathMap = () => {
    switch (selectedFileType) {
      case 'root':
        return {
          currentFile: './index.html',
          targetAsset: 'assets/css/global.css',
          resolvedSyntax: '<link rel="stylesheet" href="assets/css/global.css">',
          explanation: 'Relative lookups from the root directory point straight into the public assets folders without changing folder levels.'
        };
      case 'nested':
        return {
          currentFile: './posts/2026/frontend-trends.html',
          targetAsset: 'assets/css/global.css',
          resolvedSyntax: '<link rel="stylesheet" href="../../assets/css/global.css">',
          explanation: 'The browser must back out two directory levels using standard deep syntax paths ("../../") to reach the root level before entering the public asset folder.'
        };
      case 'asset':
        return {
          currentFile: './assets/js/core.js',
          targetAsset: 'assets/images/branding/logo.svg',
          resolvedSyntax: 'const logoPath = "../images/branding/logo.svg";',
          explanation: 'Scripts navigating inside the public assets folder back out one level ("../") to transition from the script directory over to the images directory.'
        };
    }
  };

  const activePathManifest = getResolvedPathMap();

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Path Resolution &amp; Structure Workspace</h3>
        <p className="text-gray-500 mt-1">
          Select a file position within the project tree to see how relative URLs resolve across different directory structures.
        </p>
      </header>

      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px]">
        
        {/* LEFT COMPONENT CONTROLS (5 Columns) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
              File System Positioning
            </span>

            <div className="space-y-2">
              <label className="block text-slate-700 font-semibold mb-1">Active File Scope Pointer</label>
              <div className="flex flex-col space-y-2">
                {[
                  { key: 'root', label: 'Root File (index.html)' },
                  { key: 'nested', label: 'Nested Post (frontend-trends.html)' },
                  { key: 'asset', label: 'Asset Script (core.js)' }
                ].map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setSelectedFileType(option.key as any)}
                    className={"w-full text-left px-3 py-2 rounded-lg border font-medium transition-all " + (selectedFileType === option.key ? "bg-blue-600 text-white border-blue-600 shadow-xs" : "bg-white text-slate-600 border-gray-200 hover:bg-slate-50")}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Active File Coordinates</span>
            <div className="space-y-1 font-mono text-emerald-400">
              <div><span className="text-slate-500">Source Node:</span> {activePathManifest.currentFile}</div>
              <div><span className="text-slate-500">Target Resource:</span> {activePathManifest.targetAsset}</div>
            </div>
          </div>
        </div>

        {/* RIGHT PIPELINE PREVIEW SCREEN (7 Columns) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Computed Platform Resolution Output
            </span>

            {/* Path compilation preview window box */}
            <div className="p-6 border border-slate-200 bg-slate-50 rounded-xl min-h-[160px] flex flex-col justify-center space-y-3">
              <div>
                <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block mb-1">HTML/JS Inclusion Reference Syntax</span>
                <div className="bg-slate-900 text-emerald-400 px-4 py-2 rounded-lg font-mono text-xs overflow-x-auto whitespace-nowrap shadow-md border border-slate-800">
                  {activePathManifest.resolvedSyntax}
                </div>
              </div>

              <div className="bg-white p-3 border border-slate-200 rounded-lg text-slate-600 leading-relaxed shadow-xs">
                {activePathManifest.explanation}
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Structure Principle:</strong> Always maintain clean file layouts. Linking files relatively keeps your projects portable, allowing them to load and run seamlessly on local machines, staging nodes, or production cloud CDNs without breaking links.
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