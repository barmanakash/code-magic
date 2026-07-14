import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptPerformanceDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Performance Optimization in JavaScript</DocTitle>

            <DocP>
                As applications grow, shipping and running less JavaScript becomes increasingly important for load time and responsiveness. Modern tooling and browser APIs give you several complementary strategies to reduce bundle size, defer work, and measure what's actually slow.
            </DocP>

            <DocH2>Lazy Loading</DocH2>
            <DocP>
                Lazy loading defers loading a resource (a module, an image, a component) until it's actually needed, rather than upfront — reducing the amount of work done on initial page load.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Lazy-loading a module only when a button is clicked
button.addEventListener("click", async () => {
  const { renderChart } = await import("./chartModule.js");
  renderChart();
});

// Lazy-loading images natively — the browser defers offscreen images automatically
// <img src="photo.jpg" loading="lazy" alt="..." />

// Lazy-loading a React component
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));`}
            />

            <DocH2>Code Splitting</DocH2>
            <DocP>
                Code splitting breaks a single large JavaScript bundle into multiple smaller chunks, so users only download the code needed for the page/feature they're actually using — powered under the hood by dynamic `import()`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Route-based splitting — each page becomes its own separate bundle chunk
const routes = {
  "/dashboard": () => import("./pages/Dashboard.js"),
  "/settings": () => import("./pages/Settings.js"),
  "/profile": () => import("./pages/Profile.js"),
};

async function navigate(path) {
  const module = await routes[path]();
  module.render();
}`}
            />
            <DocNote tone="info">
                Bundlers like Webpack, Vite, and Rollup automatically create a separate chunk file for each dynamic `import()` call, and load it on demand — you rarely need to configure this manually beyond writing `import()` in the right places.
            </DocNote>

            <DocH2>Tree Shaking</DocH2>
            <DocP>
                Tree shaking is a bundler optimization that removes unused exports from the final bundle, based on statically analyzing ES Module `import`/`export` statements at build time.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="mathUtils.js"
                code={`export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; } // never imported anywhere`}
            />
            <CodeBlock
                language="javascript"
                filename="app.js"
                code={`import { add } from "./mathUtils.js"; // only 'add' is used

console.log(add(2, 3));
// A tree-shaking bundler removes 'subtract' and 'multiply' entirely from the
// final output, since static analysis proves they're never imported anywhere`}
            />
            <DocList
                items={[
                    'Tree shaking requires ES Modules (import/export) — it generally does NOT work reliably with CommonJS (require/module.exports), since those are dynamic and harder to statically analyze.',
                    'Side effects can block tree shaking — a module that runs code on import (not just defining exports) may need to be kept even if none of its exports are used.',
                    'Marking a package.json with "sideEffects": false tells bundlers it\'s safe to more aggressively remove unused code from that package.',
                ]}
            />

            <DocH2>Performance API</DocH2>
            <DocP>
                The built-in `Performance` API provides precise, high-resolution timing tools for measuring exactly how long operations take — far more reliable than manually comparing `Date.now()` calls.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`performance.mark("start-render");

renderExpensiveComponent();

performance.mark("end-render");
performance.measure("render-duration", "start-render", "end-render");

const [measurement] = performance.getEntriesByName("render-duration");
console.log(measurement.duration); // e.g. 42.31 milliseconds

// High-resolution timing without marks/measures
const start = performance.now();
doSomething();
const elapsed = performance.now() - start; // sub-millisecond precision

// Navigation timing — how long the overall page load took
const [nav] = performance.getEntriesByType("navigation");
console.log(nav.loadEventEnd - nav.startTime);`}
            />
            <DocNote tone="info">
                `performance.now()` is preferred over `Date.now()` for measuring durations — it's monotonic (never goes backward, even if the system clock changes) and offers sub-millisecond precision.
            </DocNote>

            <DocH2>Web Workers</DocH2>
            <DocP>
                Web Workers run JavaScript on a separate background thread, freeing the main thread (and the UI) from being blocked by CPU-intensive work like heavy computation or large data processing.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="worker.js"
                code={`// This code runs on a SEPARATE thread, not the main UI thread
self.onmessage = function (event) {
  const numbers = event.data;
  const result = numbers.reduce((sum, n) => sum + n, 0); // heavy computation
  self.postMessage(result);
};`}
            />
            <CodeBlock
                language="javascript"
                filename="main.js"
                code={`const worker = new Worker("worker.js");

worker.postMessage([1, 2, 3, 4, 5]); // send data to the worker

worker.onmessage = function (event) {
  console.log("Result from worker:", event.data); // 15 — UI never froze while this ran
};

worker.onerror = function (error) {
  console.log("Worker error:", error.message);
};

worker.terminate(); // stop the worker when it's no longer needed`}
            />
            <DocNote tone="warning">
                Web Workers cannot access the DOM directly, and communicate with the main thread only through message passing (`postMessage`) — data is copied (or, for supported types, transferred) between threads rather than shared directly. They're ideal for pure computation (parsing large files, image processing, complex calculations), not for anything that needs to touch the page itself.
            </DocNote>
        </>
    );
}
