import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function DeploymentDoc() {
  return (
    <>
      <DocTitle eyebrow="DevOps & Pipelines">Deployment & Hosting Platforms</DocTitle>
      
      <DocP>
        Ship production applications to global edge environments requires transforming modular source code into optimized, static static assets. Modern cloud hosting platforms handle continuous integration and deployment (CI/CD) natively, pushing code directly to globally distributed Content Delivery Networks (CDNs).
      </DocP>

      <DocH2>Hosting Platforms Matrix</DocH2>
      <DocList
        items={[
          'Vercel: The creators of Next.js and a premier cloud platform for static sites and serverless functions. It features seamless GitHub synchronization, atomic branch preview deployments, and an instant global edge framework out-of-the-box.',
          'Netlify: A pioneered pioneer of the JAMstack movement. It offers high-performance global application hosting alongside built-in infrastructure hooks for form processing, split-testing, and serverless background execution functions.',
          'GitHub Pages: A completely free static site hosting solution hosted directly out of regular GitHub source repositories. It is highly efficient for staging portfolio projects, shared documentation hubs, and client landing templates.',
          'Firebase Hosting: Google\'s secure, fast static asset hosting engine tailored for production apps. It couples web assets with realtime database systems, authentication clusters, and serverless Cloud Functions under a unified ecosystem.',
          'AWS (S3 + CloudFront + Amplify): Amazon\'s robust enterprise infrastructure pipeline. You can manage deployments manually by binding decoupled S3 asset buckets to CloudFront global edge caching networks, or automate workflows using AWS Amplify.',
          'Cloudflare Pages: A lightning-fast, secure JAMstack platform built natively on Cloudflare\'s global edge network. It delivers near-instant build deployments, deep integrated edge caching, and a robust free-tier tier configuration for scalable applications.'
        ]}
      />

      <DocH2>Production Multi-Environment Build Setup</DocH2>
      <DocP>
        Modern deployment architectures use clean configuration files to dictate build rules, routing overrides, fallback handlers for Single Page Application (SPA) routing, and cache-control headers across global CDNs:
      </DocP>

      <DocH3>1. Vercel Project Routing Configuration (vercel.json)</DocH3>
      <CodeBlock
        language="json"
        code={`{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}`}
      />

      <DocH3>2. Netlify Build & Redirect Rules (netlify.toml)</DocH3>
      <CodeBlock
        language="toml"
        code={`[build]
  publish = "dist"
  command = "npm run build"

# Handle SPA client-side routing fallback rules gracefully
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"`}
      />

      <DocH3>3. GitHub Actions Automated Deployment CI/CD (deploy.yml)</DocH3>
      <CodeBlock
        language="yaml"
        code={`name: Live Production Build & Ship Pipeline

on:
  push:
    branches: [ main ]

jobs:
  deploy_hub:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Initialize Node Environment Engine
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Standardize Project Dependency Layers
        run: npm ci

      - name: Compile Optimized Static Bundle Chunks
        run: npm run build
        env:
          VITE_PUBLIC_API_GATEWAY: \${{ secrets.PRODUCTION_API_ENDPOINT }}`}
      />
    </>
  );
}