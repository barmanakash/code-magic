import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLSEODoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Search Engine Optimization (SEO): Metadata Ingestion, Open Graph Protocols, and Semantic Crawler Orchestration</DocTitle>

            <DocP>
                Search Engine Optimization (SEO) represents the programmatic discipline of structuring web applications to maximize discovery, parsing accuracy, and ranking indices by automated search engine web crawlers (such as Googlebot and Bingbot). High-performance technical SEO requires setting precise document configurations inside the document head, managing index permissions via explicit rule files, and feeding crawlers structured relational data graphs.
            </DocP>

            <DocH2>Document Head Architecture: Meta Tags & Link Directives</DocH2>
            <DocP>
                The HTML <code>&lt;head&gt;</code> container serves as the primary metadata exchange layer between the browser window, crawler indexers, and social graph scrapers.
            </DocP>

            <DocH3>1. Standard SEO Metadata Tags</DocH3>
            <DocP>
                Search indexers prioritize title configurations and conceptual summary strings to construct Search Engine Result Page (SERP) blocks:
            </DocP>
            <DocList
                items={[
                    'Title Tag (max 50-60 chars): The primary identifier displayed as the clickable headline in search results.',
                    'Meta Description (max 150-160 chars): The text snippet that appears underneath the title link in search results, providing a brief summary of the page content.'
                ]}
            />

            <DocH3>2. Overriding Duplicate Indexes via Canonical Link Tags</DocH3>
            <DocP>
                When an application serves the exact same content across duplicate variations—such as tracking parameters (<code>?ref=product_hunt</code>), staging links, or minor route differences—search engine crawlers split page-rank value or penalize duplicate text. To prevent this, you specify a single, absolute source URL using a canonical link directive:
            </DocP>
            <CodeBlock
                language="html"
                code={`<link rel="canonical" href="https://domain.com/production-route" />`}
            />

            <DocH2>Social Media Integration: The Open Graph Protocol</DocH2>
            <DocP>
                To control how layout summaries, visual media thumbnails, and site titles render when links are shared across communication networks (such as LinkedIn, X, or Slack), you must integrate Facebook's **Open Graph (og:)** protocol schema elements:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Open Graph Meta Key</th>
                            <th className="p-3">Target Payload Value Format</th>
                            <th className="p-3">Social Layout Render Effect</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">og:title</td>
                            <td className="p-3">String Content Text</td>
                            <td className="p-3 font-sans">The bold text header link attached inside the social media card display block.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">og:description</td>
                            <td className="p-3">Summary Paragraph String</td>
                            <td className="p-3 font-sans">The supporting textual description summary mapped beneath the shared link title.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">og:image</td>
                            <td className="p-3">Absolute HTTP URL Path</td>
                            <td className="p-3 font-sans">The target link pointing to a promotional graphics file to display as a rich link preview thumbnail image.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Structured Data via JSON-LD Schema</DocH2>
            <DocP>
                While standard layout code text details what content is on a page, **Structured Data** provides explicit contextual meaning. Using the **JSON-LD (JavaScript Object Notation for Linked Data)** format embedded in a script element, you tell crawlers exactly what a page represents—such as a specific Product, Article, Organization, or Event. This explicit data map allows engines to display enhanced search results like rich snippets, star ratings, and review carousels.
            </DocP>

            <DocH2>Crawler Governance: Robots.txt & XML Sitemaps</DocH2>
            <DocP>
                To prevent search crawlers from overloading backend databases or accessing administrative layout sectors, applications expose automated guidance manifests at the root domain level:
            </DocP>

            <DocH3>1. The Robots.txt Control Policy File</DocH3>
            <DocP>
                A public plain-text configurations file loaded at <code>/robots.txt</code> that instructs search engines which individual system paths they are allowed to crawl:
            </DocP>
            <CodeBlock
                language="text"
                code={`User-agent: *
Disallow: /admin/
Disallow: /api/private/

Sitemap: https://domain.com/sitemap.xml`}
            />

            <DocH3>2. The XML Sitemap Discovery Index</DocH3>
            <DocP>
                An XML-mapped directory document detailing all valid production URLs available for indexing. It includes optional priority metrics and last-modification date hooks to help crawlers discover new pages faster.
            </DocP>

            <DocH2>Production-Grade SEO Infrastructure Blueprint</DocH2>
            <DocP>
                Below is a fully production-ready document configuration displaying structured head assets, real-time metadata mutation management, and embedded JSON-LD schema objects:
            </DocP>

            <DocH3>1. Complete Document Meta Template (seo-head-manifest.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Advanced React Bundle Architecture | Technical Architecture Panel</title>
  <meta name="description" content="Deep-dive professional engineering analysis into JavaScript bundle optimization techniques, code-splitting paradigms, and Webpack build pipeline refactoring.">
  <link rel="canonical" href="https://domain.com/docs/react-bundle-opt">
  
  <meta property="og:type" content="article">
  <meta property="og:title" content="Advanced React Bundle Architecture Optimization Matrix">
  <meta property="og:description" content="Deep-dive professional engineering analysis into structural client performance optimizations.">
  <meta property="og:url" content="https://domain.com/docs/react-bundle-opt">
  <meta property="og:image" content="https://domain.com/assets/promo/react-opt-banner.jpg">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Advanced React Bundle Architecture Optimization Matrix",
    "description": "Deep-dive professional engineering analysis into structural client performance optimizations.",
    "proficiencyLevel": "Expert",
    "publisher": {
      "@type": "Organization",
      "name": "Frontend Engineering Alliance",
      "logo": {
        "@type": "ImageObject",
        "url": "https://domain.com/assets/identity-branding-logo.png"
      }
    }
  }
  </script>
</head>
<body>
</body>
</html>`}
            />

            <DocH3>2. Interactive SEO Configuration Sandbox (HTMLSEOWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

interface MetaState {
  title: string;
  description: string;
  ogType: string;
  isIndexable: boolean;
}

export default function HTMLSEOWorkspace() {
  const [metaConfig, setMetaConfig] = useState<MetaState>({
    title: 'Modern Frontend Engineering Ecosystems',
    description: 'A structural handbook analyzing progressive enterprise layout system development loops.',
    ogType: 'website',
    isIndexable: true
  });

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">SEO Architecture Simulation Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Modify the state attributes inside the configuration panel below to see a real-time visualization of how search engine crawlers and social media rich cards index the page metadata.
        </p>
      </header>

      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
        
        <div className="space-y-4">
          <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider">
            Metadata State Controls
          </span>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="block text-slate-700 font-bold">Document Title String</label>
              <input 
                type="text"
                value={metaConfig.title}
                onChange={(e) => setMetaConfig({ ...metaConfig, title: e.target.value })}
                className="w-full p-2 border rounded-lg bg-slate-50 font-mono text-[10px] text-slate-800 focus:outline-blue-500" 
              />
            </div>

            <div className="space-y-1">
              <label className="block text-slate-700 font-bold">Meta Description Context</label>
              <textarea 
                rows={3}
                value={metaConfig.description}
                onChange={(e) => setMetaConfig({ ...metaConfig, description: e.target.value })}
                className="w-full p-2 border rounded-lg bg-slate-50 font-mono text-[10px] text-slate-800 focus:outline-blue-500 resize-none" 
              />
            </div>

            <div className="flex items-center justify-between p-2.5 border rounded-lg bg-slate-50">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-800 block">Crawler Discovery Indexing</span>
                <span className="text-slate-400 text-[10px]">Appends noindex tags if toggled closed.</span>
              </div>
              <button
                onClick={() => setMetaConfig({ ...metaConfig, isIndexable: !metaConfig.isIndexable })}
                className={"px-2.5 py-1 rounded-md font-bold transition-colors text-[10px] " + (metaConfig.isIndexable ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800")}
              >
                {metaConfig.isIndexable ? "index, follow" : "noindex, nofollow"}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Google SERP Component Preview
            </span>

            <div className="p-4 bg-white border border-slate-200 shadow-xs rounded-xl space-y-1 font-sans text-left">
              <div className="text-slate-500 text-[10px] truncate flex items-center space-x-1">
                <span>https://domain.com</span>
                <span className="text-slate-300 font-mono text-[8px]">&gt;</span>
                <span className="truncate">docs &gt; frontend-handbook</span>
              </div>
              <h4 className="text-[#1a0dab] hover:underline text-sm font-medium leading-snug cursor-pointer font-sans">
                {metaConfig.title || 'Missing Title Element Warning'}
              </h4>
              <p className="text-[#4d5156] text-[10px] leading-relaxed font-sans">
                {metaConfig.description ? (
                  metaConfig.description.length > 155 ? metaConfig.description.substring(0, 152) + '...' : metaConfig.description
                ) : (
                  <span className="text-rose-500 italic">No conceptual document summary provided. Google will pull random layout text blocks instead.</span>
                )}
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] space-y-1 mt-4 shadow-inner">
            <span className="text-amber-400 font-bold block uppercase tracking-wider">// Rendered JSON-LD Context</span>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre">
              {"{\n" +
               "  \"@context\": \"https://schema.org\",\n" +
               "  \"@type\": \"WebPage\",\n" +
               "  \"name\": \"" + metaConfig.title.replace(/"/g, '\\"') + "\",\n" +
               "  \"description\": \"" + metaConfig.description.replace(/"/g, '\\"') + "\"\n" +
               "}"}
            </pre>
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