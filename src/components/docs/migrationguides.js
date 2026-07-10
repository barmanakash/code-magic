import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function MigrationGuidesDoc() {
    return (
        <>
            <DocTitle eyebrow="Codebase Evolution">Architectural Migration Guides</DocTitle>

            <DocP>
                Modernizing React architectures requires strategic, step-by-step codebase refactoring. Upgrading build engines, moving from JavaScript to type-safe environments, or adjusting application configurations for major runtime releases preserves security, minimizes bundle overhead, and unlocks next-generation performance metrics.
            </DocP>

            <DocH2>Migration Framework Strategies</DocH2>

            <DocH3>1. Build Systems & Language Upgrades</DocH3>
            <DocList
                items={[
                    'JavaScript to React UI: Transitioning from imperative DOM manipulation workflows (e.g., document.getElementById) to declarative state-driven interface structures, where the layout functions as a direct, predictable mapping of application data tracking models.',
                    'Create React App (CRA) to Vite: Replacing the legacy Webpack build engine with Vite\'s lightning-fast Esbuild pre-bundling pipeline. This modification cuts dev startup latency down from minutes to milliseconds and drops configuration overhead cleanly.',
                    'JavaScript to TypeScript (JS → TS): Converting raw codebase setups into strongly typed environments. Step-by-step migration involves adding a tsconfig.json config wrapper, renaming .js modules to .tsx formats, and systematically stamping out open data patterns.'
                ]}
            />

            <DocH3>2. React Major Runtime Upgrades</DocH3>
            <DocList
                items={[
                    'React 17 → React 18: Upgrades the core rendering engine by switching the old mount pipeline to the modern createRoot context wrapper. This step enables the concurrent rendering architecture, automatic batching updates, and native support for Suspense wrappers.',
                    'React 18 → React 19: Unlocks production-level Server Components, streamlined asset loading tags, actions APIs for handling form tracking natively, and eliminates the useMemo/useCallback boilerplate requirements by introducing the automated React Compiler compilation engine.'
                ]}
            />



            <DocH2>Step-by-Step Production Migration Templates</DocH2>
            <DocP>
                Below are configuration adjustments detailing how to complete two high-priority architectural upgrades: moving from **CRA to Vite**, and modernizing mount pipelines from **React 17 to React 18/19 standards**.
            </DocP>

            <DocH3>1. Build Engine Swap: Vite Setup Blueprint (vite.config.ts)</DocH3>
            <CodeBlock
                language="typescript"
                code={`// 1. Purge legacy react-scripts and install vite alongside @vitejs/plugin-react
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Re-establish clean directory path resolution layers to match legacy configurations
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173, // Enforce strict fallback port assignment parameters
    open: true,
  },
  build: {
    outDir: 'dist', // Replaces Webpack's default /build folder output destination
    sourcemap: false, // Turn off on production builds to protect original source files
  },
});`}
            />

            <DocH3>2. Entrypoint Architecture Update: Mount Pipeline Migration</DocH3>
            <CodeBlock
                language="tsx"
                code={`// =======================================================
// LEGACY PATTERN: React 17 Entrypoint (index.js)
// =======================================================
/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 🚫 Deprecated synchronous mounting architecture pattern
ReactDOM.render(<App />, document.getElementById('root'));
*/

// =======================================================
// UPGRADED PATTERN: React 18 & 19 Compliant Entrypoint (index.tsx)
// =======================================================
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Access the target mounting destination container in the public HTML container shell
const domTargetContainer = document.getElementById('root');

if (!domTargetContainer) {
  throw new Error('Application initialization exception: Root DOM node element placeholder missing.');
}

// Instantiate the modern root scheduler manager to enable concurrent rendering systems
const concurrentRootEngine = createRoot(domTargetContainer);

concurrentRootEngine.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
            />

            <DocH3>3. Strict TypeScript Config Upgrade (tsconfig.json)</DocH3>
            <CodeBlock
                language="json"
                code={`{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler resolution config parameters */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* High-Priority Quality & Safety Thresholds */
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}`}
            />
        </>
    );
}