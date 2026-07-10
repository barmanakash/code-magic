import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function SEODoc() {
    return (
        <>
            <DocTitle eyebrow="Discovery & Marketing">Search Engine Optimization (SEO)</DocTitle>

            <DocP>
                Search Engine Optimization (SEO) ensures your application can be discovered, indexed, and correctly interpreted by search engines and social media scraping crawlers. Managing dynamic meta descriptions, page titles, structured index directories, and card templates is vital for growing organic web traffic.
            </DocP>

            <DocH2>Search Architecture Elements</DocH2>
            <DocList
                items={[
                    'React Helmet (or standard alternatives like Capsize/Unhead): A specialized document head manager component library. It allows you to declaratively inject and override HTML <head> tags—such as title, base, and script metadata—dynamically on a per-page basis across your application runtime router passes.',
                    'Meta Tags: Machine-readable standard HTML tags nested directly inside document heads. They provide search engine scrapers with critical indexing signals, target keywords, canonical structural validation paths, and responsive browser viewport descriptions.',
                    'Open Graph (OG) Protocols: A standardized metadata protocol created by Facebook that turns standard web pages into rich, interactive content graph objects. Injecting og: tags dictates exactly how images, custom headlines, and descriptive copy display when URLs are shared across messaging apps and social media feeds.',
                    'Sitemaps: XML configuration maps that list every single public-facing index route asset destination hosted within an application. They act as explicit navigation blueprints for search engine crawlers, pointing out update frequencies and historical modification dates.'
                ]}
            />

            <DocH2>Dynamic Meta Metadata Controller Integration</DocH2>
            <DocP>
                Below is a clean, modern implementation file structure showcasing a reusable meta configuration wrapper component mapped to handle custom platform page titles, open graph assets, and crawl-friendly indexing variables:
            </DocP>

            <DocH3>1. The Reusable Meta Orchestrator Component (SEOManager.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import { Helmet } from 'react-helmet-async'; // Modern thread-safe React Helmet context standard

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
}

export function SEOManager({ 
  title, 
  description, 
  canonicalUrl = 'https://code-magic-hub.com', 
  ogImage = 'https://code-magic-hub.com/assets/og-default.png',
  ogType = 'website'
}: SEOProps) {
  
  // Format consistent unified tracking headers cleanly
  const formattedTitle = \`\${title} | Code Magic Production Hub\`;

  return (
    <Helmet>
      {/* A. Standard HTML Core Meta Headers */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* B. Open Graph (OG) Facebook & Link Graph Protocols */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* C. Twitter Summary Card Architectures */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}`}
            />

            <DocH3>2. Declaring Search Directives on Pages (ProductPage.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import { SEOManager } from './SEOManager';

export default function ReactCourseProductPage() {
  return (
    <div className="product-view-container p-6 bg-white">
      {/* Injecting targeted page-level crawling variables cleanly into the document head layout */}
      <SEOManager 
        title="Mastering Advanced MERN Stack Development"
        description="Build secure web architectures using React, Node.js, Express, and MongoDB. Learn advanced animations, performance caching, and deep deployment workflows."
        canonicalUrl="https://code-magic-hub.com/courses/mern-stack-mastery"
        ogImage="https://code-magic-hub.com/assets/course-thumbnails/mern-og.png"
        ogType="article"
      />

      <header className="product-header">
        <h1 className="text-2xl font-bold">Advanced MERN Architecture Syllabus</h1>
        <p className="text-gray-600 mt-2">Accelerate your modern web engineering skillset with practical structural system models.</p>
      </header>
    </div>
  );
}`}
            />

            <DocH3>3. Production XML Sitemap Structure (sitemap.xml)</DocH3>
            <CodeBlock
                language="xml"
                code={`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://code-magic-hub.com/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://code-magic-hub.com/courses/mern-stack-mastery</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`}
            />
        </>
    );
}