import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSVariablesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Variables & Dynamic Cascading Custom Properties</DocTitle>

            <DocP>
                CSS Variables (officially known as <strong>Custom Properties</strong>) allow developers to store reusable design primitives—such as color tokens, semantic spacing tracks, typography weights, and layout boundaries—directly inside the stylesheet. Unlike preprocessor variables (Sass/Less) which compile down to static strings, native CSS variables live natively in the browser DOM. They maintain full access to the cascade, follow runtime scope structures, and can be modified dynamically via JavaScript for real-time application theming.
            </DocP>

            <DocH2>Custom Properties & The Cascade Scope Matrix</DocH2>

            <DocH3>1. Declaration Syntax & Scope Isolation</DocH3>
            <DocList
                items={[
                    'Custom Property Tokens: Declared using a dual-dash prefix identifier (e.g., --primary-brand-color: #0284c7;). The browser treats these as standard property maps, evaluating them at runtime.',
                    'Global Scope (:root): Declaring properties inside the :root pseudo-class exposes those tokens globally across the entire DOM tree. The :root selector maps directly to the <html> tag but carries higher specificity weight.',
                    'Local/Component Scope: Custom properties are fully subject to standard CSS inheritance and cascade rules. Declaring a variable inside a specific class container restricts its operational availability exclusively to that subtree branch, isolating component styles safely.'
                ]}
            />



            <DocH3>2. Operational Ingestion & Safety Resilience</DocH3>
            <DocList
                items={[
                    'The var() Functional Wrapper: Ingests custom property definitions into standard CSS attributes (e.g., color: var(--primary-brand-color);).',
                    'Fallback Resilience Parameters: The var() function accepts a comma-separated fallback value that the rendering engine falls back to if the target variable is undefined or fails to load (e.g., color: var(--dynamic-accent, oklch(0.6 0.2 250));). You can also nest custom properties as fallbacks (e.g., var(--color-a, var(--color-b, #000))).'
                ]}
            />

            <DocH2>Dynamic Theme Architectures & Dark Mode Engines</DocH2>
            <DocP>
                Because custom properties maintain a live state inside the DOM tree, dark-and-light color mode switching or fluid multi-tenant theme management can be achieved instantly without duplicating code or swapping out stylesheets.
            </DocP>



            <DocH3>1. Declarative Media Preferences Queries</DocH3>
            <DocP>
                By embedding design token redefinitions inside the <code>@media (prefers-color-scheme: dark)</code> system hook, browsers automatically detect user-level operating system toggles and swap variables instantly with zero execution latency.
            </DocP>

            <DocH3>2. Attribute-Driven JavaScript Injection Toggles</DocH3>
            <DocP>
                For explicit, user-controlled theme selectors, applications can bind custom properties onto data attributes (like <code>[data-theme="dark"]</code>). This allows frontend frameworks to toggle color systems programmatically by updating the root HTML wrapper attribute:
            </DocP>
            <blockquote>
                <code>document.documentElement.setAttribute('data-theme', 'dark');</code>
            </blockquote>

            <DocH2>Production Scalable Variable & Theming Blueprint</DocH2>
            <DocP>
                Below is a production-grade workspace stylesheet and runtime view detailing global token architectures, nested fallback safeholds, and attribute-driven dark mode engines:
            </DocP>

            <DocH3>1. The Global Theme System Sheet (variables-theme.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION VARIABLES ENGINE & LIVE THEME ARCHITECTURE
   ======================================================= */

/* A. DEFAULT LIGHT THEME DESIGN SYSTEM TOKENS */
:root {
  --canvas-bg: oklch(0.99 0.005 240);
  --surface-card: #ffffff;
  
  --text-main: oklch(0.2 0.02 240);
  --text-muted: oklch(0.5 0.02 240);
  
  --brand-primary: oklch(0.55 0.18 250); /* Vivid Technical Blue */
  --brand-accent-glow: rgba(2, 132, 199, 0.15);
  
  --card-radius: 12px;
  --transition-smooth: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* B. IMPLICIT SYSTEM DARK MODE DETECTOR OVERRIDES */
@media (prefers-color-scheme: dark) {
  :root {
    --canvas-bg: oklch(0.12 0.01 240);
    --surface-card: oklch(0.16 0.01 240);
    
    --text-main: oklch(0.95 0.01 240);
    --text-muted: oklch(0.7 0.01 240);
    
    --brand-primary: oklch(0.65 0.15 200); /* Neon Teal-Blue */
    --brand-accent-glow: rgba(56, 189, 248, 0.2);
  }
}

/* C. EXPLICIT OVERRIDE HOOKS VIA DATA ATTRIBUTES 
   Takes layout priority for manual interface state toggles */
[data-theme="dark"] {
  --canvas-bg: oklch(0.12 0.01 240);
  --surface-card: oklch(0.16 0.01 240);
  --text-main: oklch(0.95 0.01 240);
  --text-muted: oklch(0.7 0.01 240);
  --brand-primary: oklch(0.65 0.15 200);
  --brand-accent-glow: rgba(56, 189, 248, 0.2);
}

/* D. LOGICAL IMPLEMENTATION MODULES */
.theme-adaptive-canvas {
  background-color: var(--canvas-bg);
  color: var(--text-main);
  transition: background-color var(--transition-smooth), color var(--transition-smooth);
}

.theme-card-node {
  /* Dynamic values ingest smoothly, relying on explicit fallback definitions if lost */
  background-color: var(--surface-card, #ffffff);
  border: 1px solid var(--text-muted, #ccc);
  border-radius: var(--card-radius, 8px);
  padding: 24px;
  box-shadow: 0 4px 12px var(--brand-accent-glow);
}

/* LOCALIZED SPECIFICITY OVERRIDE SWITCH */
.isolated-neon-panel {
  /* Local parameters disrupt the global cascade tree for this element block */
  --surface-card: oklch(0.2 0.05 300);
  --text-main: #ffffff;
  --text-muted: oklch(0.8 0.05 300);
}`}
            />

            <DocH3>2. Layout Implementation View (ThemeSandboxWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect } from 'react';
import './variables-theme.css';

export default function ThemeSandboxWorkspace() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  // Sync state transitions seamlessly to the HTML DOM wrapper node
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const toggleExplicitTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-adaptive-canvas min-h-screen p-8 space-y-6 flex flex-col items-center justify-center">
      
      {/* Interactive Controller Button */}
      <div className="flex gap-4 items-center">
        <span className="text-xs font-semibold uppercase tracking-wider">
          Active Scheme Mode: <span className="font-mono font-bold text-blue-500">{currentTheme}</span>
        </span>
        <button 
          onClick={toggleExplicitTheme}
          className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm"
        >
          Toggle Engine Matrix
        </button>
      </div>

      {/* Global standard theme card configuration */}
      <article className="theme-card-node max-w-sm w-full">
        <h4 className="text-sm font-bold mb-1">Adaptive Telemetry Hub</h4>
        <p className="text-xs opacity-80 leading-relaxed">
          This container dynamically maps its canvas tokens, backgrounds, text contrasts, and drop shadows on the fly via CSS Variable injection vectors.
        </p>
      </article>

      {/* Localized scope isolation overrides panel */}
      <article className="theme-card-node isolated-neon-panel max-w-sm w-full">
        <h4 className="text-sm font-bold mb-1">Isolated Localized Workspace</h4>
        <p className="text-xs opacity-80 leading-relaxed">
          This block overrides global theme properties locally inside its own CSS block rule, ignoring external system states completely.
        </p>
      </article>

    </div>
  );
}`}
            />
        </>
    );
}