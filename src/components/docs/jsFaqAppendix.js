import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptFaqAppendixDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript FAQs & Appendix</DocTitle>

            <DocP>
                A final round-up of frequently asked questions, plus reference material worth bookmarking — glossary terms, the ECMAScript release timeline, common error messages, and recommended tools.
            </DocP>

            <DocH2>Frequently Asked Questions</DocH2>

            <DocH3>What is JavaScript?</DocH3>
            <DocP>
                A high-level, dynamically-typed, prototype-based scripting language, originally built to run in web browsers and now also used on servers (Node.js), mobile apps, and desktop apps. It's standardized under the ECMAScript specification.
            </DocP>

            <DocH3>JavaScript vs ECMAScript?</DocH3>
            <DocP>
                ECMAScript is the language specification maintained by TC39. JavaScript is the most popular implementation of that specification, extended with host-specific APIs (like the DOM) that aren't part of ECMAScript itself.
            </DocP>

            <DocH3>var vs let vs const?</DocH3>
            <DocP>
                `var` is function-scoped and hoisted to `undefined`. `let` and `const` are block-scoped and sit in the Temporal Dead Zone until declared. `const` cannot be reassigned after its initial value. Default to `const`, use `let` when reassignment is needed, avoid `var`.
            </DocP>

            <DocH3>== vs ===?</DocH3>
            <DocP>
                `==` coerces types before comparing, often producing surprising results. `===` compares value and type directly, with no coercion. Always prefer `===`/`!==`.
            </DocP>

            <DocH3>What is hoisting?</DocH3>
            <DocP>
                JavaScript's behavior of processing declarations before executing code. `var` and function declarations are hoisted fully usable; `let`/`const` are hoisted but remain inaccessible (the Temporal Dead Zone) until their declaration line runs.
            </DocP>

            <DocH3>What is a closure?</DocH3>
            <DocP>
                A function that retains access to variables from its enclosing scope even after that outer function has finished executing — the mechanism behind private state, callbacks, and many functional patterns.
            </DocP>

            <DocH3>What is the event loop?</DocH3>
            <DocP>
                The mechanism that lets single-threaded JavaScript handle async work: synchronous code runs first, then the entire microtask queue (Promises) is drained, then one macrotask (like a setTimeout callback) runs, repeating continuously.
            </DocP>

            <DocH3>What is a Promise?</DocH3>
            <DocP>
                An object representing a value that may not be available yet, moving through pending, then either fulfilled (with a value) or rejected (with an error) — the modern replacement for callback-based async code.
            </DocP>

            <DocH3>What is async/await?</DocH3>
            <DocP>
                Syntax built on top of Promises that lets asynchronous code read like synchronous, top-to-bottom code. `async` functions always return a Promise; `await` pauses execution until a Promise settles.
            </DocP>

            <DocH3>What is the DOM?</DocH3>
            <DocP>
                The Document Object Model — the browser's in-memory, tree-shaped representation of an HTML page, which JavaScript reads and modifies to make pages interactive.
            </DocP>

            <DocH2>Reserved Keywords</DocH2>
            <DocP>
                Words JavaScript reserves for its own syntax — these cannot be used as variable, function, or class names.
            </DocP>
            <DocList
                items={[
                    'break, case, catch, class, const, continue, debugger, default, delete, do',
                    'else, export, extends, false, finally, for, function, if, import, in',
                    'instanceof, let, new, null, return, super, switch, this, throw, true',
                    'try, typeof, var, void, while, with, yield, async, await, static',
                ]}
            />

            <DocH2>Operator Precedence</DocH2>
            <DocP>Highest to lowest priority among commonly used operators (higher runs first when mixed).</DocP>
            <DocList
                items={[
                    'Grouping: parentheses () — always evaluated first.',
                    'Unary: !, typeof, ++, -- (prefix)',
                    'Exponentiation: **',
                    'Multiplicative: *, /, %',
                    'Additive: +, -',
                    'Relational: <, >, <=, >=, instanceof, in',
                    'Equality: ==, !=, ===, !==',
                    'Logical AND: &&',
                    'Logical OR: ||, Nullish coalescing: ??',
                    'Ternary: ? :',
                    'Assignment: =, +=, -=, etc. — lowest, evaluated last',
                ]}
            />
            <DocNote tone="info">
                When in doubt, use explicit parentheses rather than relying on memorized precedence — it removes all ambiguity for the next reader.
            </DocNote>

            <DocH2>Browser Compatibility</DocH2>
            <DocList
                items={[
                    "Can I Use (caniuse.com): check feature support across browsers before relying on something new.",
                    'MDN Web Docs: every API page includes a browser compatibility table at the bottom.',
                    "Babel: transpiles modern JavaScript syntax down to older, more widely-supported syntax.",
                    "Polyfills (e.g. core-js): add missing built-in methods/objects for older environments that lack them natively.",
                ]}
            />

            <DocH2>VS Code Extensions</DocH2>
            <DocList
                items={[
                    'ESLint — real-time linting and error detection.',
                    'Prettier — automatic, consistent code formatting.',
                    'JavaScript (ES6) code snippets — quick boilerplate for common patterns.',
                    'Path Intellisense — autocompletes file paths in import statements.',
                    'Live Server — auto-reloading local development preview.',
                    'GitLens — inline Git blame/history information.',
                ]}
            />

            <DocH2>Useful Libraries</DocH2>
            <DocList
                items={[
                    'lodash — battle-tested utility functions for arrays, objects, and more.',
                    'date-fns / luxon — modern date manipulation, an alternative to the native Date API\'s limitations.',
                    'axios — a popular HTTP client alternative to fetch, with some added convenience.',
                    'zod / yup — schema-based data validation.',
                    'DOMPurify — sanitizing HTML before rendering user-supplied content.',
                    'RxJS — reactive programming with Observables, for complex async event streams.',
                ]}
            />

            <DocH2>Useful Resources</DocH2>
            <DocList
                items={[
                    'MDN Web Docs — the most authoritative JavaScript/Web API reference.',
                    'TC39 proposals repository — track upcoming ECMAScript features in progress.',
                    'JavaScript.info — a thorough, modern, freely available tutorial.',
                    'You Don\'t Know JS (book series) — a deep dive into JavaScript\'s core mechanics.',
                    'Node.js documentation — for server-side JavaScript specifics.',
                ]}
            />

            <DocH2>Glossary</DocH2>
            <DocList
                items={[
                    'Callback: a function passed into another function, to be called later.',
                    'Closure: a function retaining access to its outer scope\'s variables.',
                    'Coercion: automatic conversion of a value from one type to another.',
                    'Hoisting: declarations being processed before code execution.',
                    'Immutable: a value that cannot be changed after creation.',
                    'Polyfill: code that implements a missing feature for older environments.',
                    'Transpile: converting code from one syntax version to another (e.g. modern JS to older JS).',
                    'Truthy/Falsy: how a value behaves when evaluated in a boolean context.',
                ]}
            />

            <DocH2>ECMAScript Release Timeline</DocH2>
            <DocList
                items={[
                    'ES1 (1997) — first official specification.',
                    'ES3 (1999) — regex, try/catch.',
                    'ES5 (2009) — strict mode, JSON, array iteration methods.',
                    'ES6 / ES2015 — classes, modules, let/const, arrow functions, Promises, template literals.',
                    'ES2016–ES2020 — async/await, optional chaining, nullish coalescing, BigInt, dynamic import.',
                    'ES2021–ES2023 — logical assignment operators, top-level await, private class fields, Array.at().',
                    'ES2024–ES2025 — Object.groupBy, Promise.withResolvers, Set composition methods, iterator helpers.',
                ]}
            />

            <DocH2>Common Error Messages</DocH2>
            <DocList
                items={[
                    'ReferenceError: x is not defined — using a variable that was never declared, or accessed outside its scope.',
                    "Cannot access 'x' before initialization — a Temporal Dead Zone violation with let/const.",
                    "TypeError: Cannot read properties of undefined/null — accessing a property on undefined/null, often from a missing optional chain (?.).",
                    'TypeError: x is not a function — calling something that isn\'t actually a function, often a typo or wrong import.',
                    'SyntaxError: Unexpected token — malformed syntax, often a missing/extra brace, comma, or quote.',
                    'RangeError: Maximum call stack size exceeded — infinite or excessively deep recursion.',
                    'Uncaught (in promise) — a rejected Promise with no .catch()/try-catch handling it.',
                ]}
            />

            <DocH2>Coding Standards</DocH2>
            <DocList
                items={[
                    'Use const by default, let when reassignment is needed, never var.',
                    'Always use === / !== over == / !=.',
                    'Run a linter (ESLint) and formatter (Prettier) automatically, ideally on save and in CI.',
                    'Prefer async/await over raw .then() chains for readability.',
                    'Use meaningful, descriptive names — avoid abbreviations that aren\'t immediately obvious.',
                    'Keep functions small and focused on a single responsibility.',
                    'Always handle errors explicitly — never silently swallow a caught exception.',
                ]}
            />

            <DocNote tone="info">
                This page wraps up the JavaScript documentation section — for deeper coverage of any topic mentioned briefly here, check its dedicated page in the sidebar.
            </DocNote>
        </>
    );
}
