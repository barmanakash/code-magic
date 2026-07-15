import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptDebuggingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Debugging JavaScript</DocTitle>

            <DocP>
                Debugging is the process of finding and fixing the root cause of unexpected behavior in your code. JavaScript developers rely heavily on the browser's built-in DevTools — console logging, breakpoints, and dedicated panels for inspecting exactly what's happening at runtime.
            </DocP>

            <DocH2>Console Methods</DocH2>
            <DocP>
                The `console` object offers far more than just `console.log()` — a range of methods tailored to different debugging needs.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`console.log("Basic message", { data: "value" });
console.info("Informational message");
console.warn("Something looks off");
console.error("Something failed");

console.table([{ name: "Ava", age: 25 }, { name: "Ivy", age: 30 }]); // renders a formatted table

console.group("User Details");
console.log("Name: Ava");
console.log("Age: 25");
console.groupEnd();

console.time("operation");
// ...some operation...
console.timeEnd("operation"); // logs elapsed time automatically

console.count("clicked"); // logs how many times this exact line has run
console.trace("Where did this get called from?"); // logs a full stack trace

console.assert(1 === 2, "This will log because the assertion is false");`}
            />
            <DocNote tone="info">
                `console.table()` is especially useful for arrays of objects — it's far easier to scan a formatted table than a wall of nested `console.log()` output.
            </DocNote>

            <DocH2>Breakpoints</DocH2>
            <DocP>
                A breakpoint pauses code execution at a specific line, letting you inspect variable values, the call stack, and step through subsequent lines one at a time — far more powerful than scattering `console.log()` calls throughout your code.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    debugger; // execution automatically pauses here if DevTools is open
    total += item.price;
  }
  return total;
}`}
            />
            <DocList
                items={[
                    'Line breakpoints: click a line number in the Sources panel to pause execution right before it runs.',
                    'Conditional breakpoints: right-click a line number to pause only when a specific expression is true — useful inside a loop that runs many times.',
                    'The debugger statement: pauses execution directly from your code, without needing to manually find the line in DevTools first.',
                    'Step controls: once paused, use Step Over (run the current line), Step Into (enter a function call), and Step Out (finish the current function) to move through code one step at a time.',
                ]}
            />

            <DocH2>Chrome DevTools</DocH2>
            <DocP>
                Chrome's built-in developer tools, opened with F12 or Ctrl+Shift+I (Cmd+Option+I on macOS), are the most widely used JavaScript debugging environment.
            </DocP>
            <DocList
                items={[
                    'Console panel: run JavaScript live, view logs and errors with full stack traces.',
                    'Sources panel: set breakpoints, step through code, watch variable values, and inspect the call stack.',
                    'Elements panel: inspect and live-edit the rendered DOM/CSS.',
                    'Application panel: inspect localStorage, sessionStorage, cookies, IndexedDB, and Service Workers.',
                    'Performance panel: record and analyze runtime performance, spotting slow functions and layout thrashing.',
                ]}
            />

            <DocH2>Firefox DevTools</DocH2>
            <DocP>
                Firefox's developer tools (also opened with F12) offer a very similar feature set to Chrome, with a few standout strengths of its own.
            </DocP>
            <DocList
                items={[
                    'Excellent CSS Grid and Flexbox visual inspectors — often considered ahead of Chrome for layout debugging.',
                    'A dedicated, powerful accessibility inspector for auditing ARIA roles and screen-reader behavior.',
                    'A debugger panel with the same breakpoint/step functionality as Chrome, with a slightly different UI layout.',
                ]}
            />
            <DocNote tone="info">
                The core debugging workflow — breakpoints, stepping, watching variables, inspecting the call stack — is essentially the same across both browsers, since they both implement the same underlying DevTools/debugging protocol concepts.
            </DocNote>

            <DocH2>Source Maps</DocH2>
            <DocP>
                A source map is a file that maps the minified/bundled/transpiled code actually running in production back to your original, readable source files — so DevTools can show you the real file names, line numbers, and unminified variable names, even though the browser is executing compiled output.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// A bundled/minified file ends with a comment pointing to its source map
//# sourceMappingURL=app.min.js.map

// Without a source map, an error in minified code might show:
// "Uncaught TypeError at app.min.js:1:4821" — completely unhelpful

// With a source map loaded, DevTools instead shows:
// "Uncaught TypeError at UserProfile.jsx:42" — the ORIGINAL file and line`}
            />
            <DocNote tone="warning">
                Most build tools (Webpack, Vite, Create React App) generate source maps automatically in development. For production, consider whether to ship them publicly — they reveal your original, unminified source code, which some teams prefer to keep private or upload only to an error-tracking service instead of serving them to end users.
            </DocNote>

            <DocH2>Network Panel</DocH2>
            <DocP>
                The Network panel records every HTTP request your page makes — essential for debugging API calls, checking response payloads, and diagnosing slow-loading resources.
            </DocP>
            <DocList
                items={[
                    'Inspect request/response headers, status codes, and payloads for any fetch/XHR call.',
                    'Filter by resource type (XHR/Fetch, JS, CSS, images) to focus on what matters.',
                    'Throttle the connection to simulate slow 3G/4G networks and see how your app behaves.',
                    '"Preserve log" keeps entries across page navigations — useful when debugging a redirect or a full page reload.',
                    'Right-click any request to "Copy as fetch" or "Copy as cURL", handy for reproducing the exact same request elsewhere.',
                ]}
            />
        </>
    );
}
