import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptModulesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Modules in JavaScript</DocTitle>

            <DocP>
                Modules let you split code across multiple files, each with its own scope, and explicitly share only the parts you want with other files. ES Modules (ESM), standardized in ES6, are now the modern default for organizing JavaScript across the browser and Node.js.
            </DocP>

            <DocH2>import</DocH2>
            <DocP>
                The `import` statement brings values exported from another module into the current file.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="app.js"
                code={`import { add, subtract } from "./mathUtils.js"; // named imports
import formatDate from "./formatDate.js";           // default import
import * as mathUtils from "./mathUtils.js";           // import everything as a namespace

console.log(add(2, 3));
console.log(mathUtils.subtract(5, 2));`}
            />
            <DocNote tone="info">
                In the browser, a script using `import`/`export` must be loaded with `type="module"` on the &lt;script&gt; tag. In Node.js, either use the `.mjs` extension or set `"type": "module"` in `package.json`.
            </DocNote>

            <DocH2>export</DocH2>
            <DocP>
                The `export` keyword marks a variable, function, or class as available for other modules to import.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="mathUtils.js"
                code={`// Exporting directly at declaration
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;

// Exporting a group at the bottom of the file
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
export { subtract, multiply };

// Renaming during export
export { subtract as minus };`}
            />

            <DocH2>Default Export</DocH2>
            <DocP>
                Each module can have exactly one default export — typically the "main" thing that module provides. Default imports can be named anything by the importing file, since there's no fixed name to match.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="formatDate.js"
                code={`export default function formatDate(date) {
  return date.toLocaleDateString();
}`}
            />
            <CodeBlock
                language="javascript"
                filename="app.js"
                code={`import formatDate from "./formatDate.js";     // matches, no curly braces needed
import myOwnName from "./formatDate.js";          // also valid — default imports can be renamed freely

console.log(formatDate(new Date()));`}
            />

            <DocH2>Named Export</DocH2>
            <DocP>
                A module can have any number of named exports. When importing, the names must match exactly (unless explicitly renamed with `as`), and are wrapped in curly braces.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="constants.js"
                code={`export const API_URL = "https://api.example.com";
export const MAX_RETRIES = 3;
export const TIMEOUT_MS = 5000;`}
            />
            <CodeBlock
                language="javascript"
                filename="app.js"
                code={`import { API_URL, MAX_RETRIES } from "./constants.js";
import { TIMEOUT_MS as timeout } from "./constants.js"; // renaming with 'as'

console.log(API_URL, MAX_RETRIES, timeout);`}
            />
            <DocNote tone="info">
                A single module can mix one default export with multiple named exports at the same time — a common pattern is exporting a main component/function as default, plus a few related helper utilities as named exports.
            </DocNote>

            <DocH2>Dynamic Import</DocH2>
            <DocP>
                `import()` (as a function call, not a statement) loads a module asynchronously at runtime, returning a Promise. This enables code-splitting — loading heavy modules only when actually needed, rather than upfront.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Using .then()
import("./heavyModule.js").then((module) => {
  module.doSomething();
});

// Using async/await
async function loadFeature() {
  const { default: HeavyComponent } = await import("./HeavyComponent.js");
  HeavyComponent();
}

// Common real-world use: only load a module when a button is clicked
button.addEventListener("click", async () => {
  const chartLib = await import("./chartLibrary.js");
  chartLib.renderChart();
});`}
            />
            <DocNote tone="info">
                Dynamic imports are the mechanism behind React's `React.lazy()` and most bundlers' automatic code-splitting — they let large applications ship smaller initial JavaScript bundles by deferring rarely-needed code until it's actually required.
            </DocNote>
        </>
    );
}
