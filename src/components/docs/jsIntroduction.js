import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptIntroductionDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Introduction to JavaScript</DocTitle>

            <DocP>
                JavaScript is a lightweight, interpreted (or JIT-compiled) programming language that powers interactivity on the web. Alongside HTML and CSS, it forms one of the three core technologies of the World Wide Web — HTML structures content, CSS styles it, and JavaScript makes it behave and respond to the user.
            </DocP>

            <DocH2>What is JavaScript?</DocH2>
            <DocP>
                JavaScript is a high-level, dynamically-typed, prototype-based scripting language. It was originally built to run inside web browsers, but has since grown into a general-purpose language capable of running on servers, mobile apps, desktop apps, IoT devices, and even embedded hardware. It is single-threaded with an event-loop concurrency model, supports multiple programming paradigms (procedural, object-oriented, and functional), and is standardized under the specification known as ECMAScript.
            </DocP>

            <DocH2>History of JavaScript</DocH2>
            <DocList
                items={[
                    '1995 — Creation: Brendan Eich created the language in just 10 days at Netscape. It was first named Mocha, then LiveScript, and finally renamed JavaScript as a marketing move to ride on the popularity of Java (the two languages are otherwise unrelated).',
                    '1996 — Standardization begins: Netscape submitted the language to Ecma International to prevent fragmentation, leading to the ECMAScript specification.',
                    '1997 — ECMAScript 1: The first official standard (ES1) was published.',
                    '2009 — ES5: A major stabilization release adding strict mode, JSON support, and array iteration methods, widely adopted across all browsers.',
                    '2015 — ES6 / ES2015: A landmark release that modernized the language with classes, modules, arrow functions, let/const, promises, and template literals.',
                    '2015–Present — Yearly releases: Since ES6, TC39 (the technical committee behind ECMAScript) ships a new yearly edition, each adding a small, well-tested set of features.',
                ]}
            />

            <DocH3>Evolution Timeline (ES1 → ES2025)</DocH3>
            <DocList
                items={[
                    'ES1 (1997) & ES2 (1998): Initial specification and minor editorial alignment with the ISO standard.',
                    'ES3 (1999): Added regular expressions, try/catch exception handling, and better string handling — this became the baseline for early 2000s browsers.',
                    'ES4: Drafted but abandoned due to disagreements over scope (too ambitious a redesign).',
                    'ES5 (2009): Introduced "strict mode", Array.prototype methods (map, filter, forEach), JSON.parse/stringify, and getters/setters.',
                    'ES5.1 (2011): Editorial alignment with the ISO/IEC 16262 standard.',
                    'ES6 / ES2015: let & const, arrow functions, classes, template literals, destructuring, default & rest parameters, Promises, modules (import/export), Map & Set.',
                    'ES2016 (ES7): Array.prototype.includes() and the exponentiation operator (**).',
                    'ES2017 (ES8): async/await, Object.entries()/values(), string padding.',
                    'ES2018 (ES9): Rest/spread properties for objects, asynchronous iteration, Promise.finally().',
                    'ES2019 (ES10): Array.flat()/flatMap(), Object.fromEntries(), optional catch binding.',
                    'ES2020 (ES11): Optional chaining (?.), nullish coalescing (??), BigInt, Promise.allSettled(), dynamic import().',
                    'ES2021 (ES12): String.replaceAll(), logical assignment operators (&&=, ||=, ??=), Promise.any().',
                    'ES2022 (ES13): Top-level await, class private fields (#field), Array.at(), Object.hasOwn().',
                    'ES2023 (ES14): Array copying methods (toSorted, toReversed, toSpliced, with()), Array.findLast()/findLastIndex().',
                    'ES2024 (ES15): Promise.withResolvers(), Object.groupBy()/Map.groupBy(), Atomics.waitAsync().',
                    'ES2025 (ES16): Iterator helper methods (map, filter, take on iterators), Set composition methods (union, intersection, difference), RegExp.escape proposal maturing, import attributes for JSON modules.',
                ]}
            />

            <DocH2>Why JavaScript?</DocH2>
            <DocList
                items={[
                    'Universality: It is the only language natively understood by every web browser — no plugin or compilation step is required to run it client-side.',
                    'Full-stack capability: With Node.js, the same language can be used for frontend and backend, reducing context switching for teams.',
                    'Massive ecosystem: npm is the largest software package registry in the world, offering ready-made solutions for nearly any problem.',
                    'Strong industry demand: It consistently ranks among the most widely used programming languages in developer surveys, with huge community support and job availability.',
                    'Fast iteration: Being interpreted/JIT-compiled, there is no separate build step required to see changes reflected — ideal for rapid prototyping.',
                ]}
            />

            <DocH2>Core Features</DocH2>
            <DocList
                items={[
                    'Dynamically typed: Variable types are determined at runtime, not declared explicitly.',
                    'Prototype-based object orientation: Objects inherit directly from other objects via the prototype chain, with class syntax as syntactic sugar on top.',
                    'First-class functions: Functions can be assigned to variables, passed as arguments, and returned from other functions.',
                    'Single-threaded, event-driven: Uses an event loop with a call stack, task queue, and microtask queue to handle asynchronous operations without blocking.',
                    'Interpreted & JIT-compiled: Modern engines compile hot code paths to machine code just-in-time for near-native performance.',
                    'Cross-platform: Runs identically across operating systems wherever a compatible engine is available.',
                ]}
            />

            <DocH2>Advantages & Disadvantages</DocH2>

            <DocH3>Advantages</DocH3>
            <DocList
                items={[
                    'No installation needed to run in a browser — every modern browser ships a JavaScript engine.',
                    'Huge, mature ecosystem of frameworks, libraries, and tooling (React, Vue, Express, Next.js, and more).',
                    'Asynchronous, non-blocking I/O model makes it well suited for real-time and I/O-heavy applications.',
                    'Interoperable with HTML/CSS and virtually every backend technology through APIs.',
                ]}
            />

            <DocH3>Disadvantages</DocH3>
            <DocList
                items={[
                    'Weak typing can lead to subtle runtime bugs — mitigated in large codebases with TypeScript.',
                    'Browser inconsistencies: while far better than in the past, subtle rendering and API differences across browsers can still surface.',
                    'Single-threaded nature means CPU-heavy synchronous work can block the main thread and freeze the UI unless offloaded (e.g., Web Workers).',
                    'Security surface: because it executes directly on the client, poorly written JavaScript is a common vector for XSS and other client-side attacks.',
                ]}
            />

            <DocH2>JavaScript vs ECMAScript</DocH2>
            <DocP>
                These two terms are often used interchangeably, but they are not the same thing. ECMAScript (ES) is the language specification — a formal standard maintained by Ecma International's TC39 committee that defines the syntax, semantics, and core built-in objects a compliant language must implement. JavaScript is an implementation of that specification, created and maintained by browser vendors and runtime authors (V8, SpiderMonkey, JavaScriptCore, etc.), which also adds host-specific APIs such as the DOM, `fetch`, or Node's `fs` module that are not part of ECMAScript itself. In short: ECMAScript defines the rules of the language; JavaScript is the most popular language that plays by those rules.
            </DocP>

            <DocH2>JavaScript Engines</DocH2>
            <DocList
                items={[
                    'V8 (Google): Written in C++, powers Google Chrome and Node.js. Compiles JavaScript directly to native machine code using the Ignition interpreter and TurboFan optimizing compiler.',
                    'SpiderMonkey (Mozilla): The original JavaScript engine, created by Brendan Eich himself, and still developed today to power Firefox.',
                    'JavaScriptCore (Apple): Also known as "Nitro", it powers Safari and WebKit-based browsers/apps, and is also used inside React Native and Bun.',
                    'Other notable engines: Chakra (legacy Microsoft Edge), Hermes (optimized for React Native on mobile).',
                ]}
            />

            <DocH2>Where JavaScript Runs</DocH2>
            <DocList
                items={[
                    'Web Browsers: The original and most common environment — Chrome, Firefox, Safari, Edge — all embed a JavaScript engine.',
                    'Servers: Node.js and Deno allow JavaScript to run outside the browser to build backend APIs, CLIs, and scripts.',
                    'Mobile apps: Frameworks like React Native and NativeScript compile or interpret JavaScript to build native mobile applications.',
                    'Desktop apps: Electron and Tauri (with a JS frontend) allow building cross-platform desktop applications using web technologies.',
                    'IoT & embedded devices: Runtimes like Johnny-Five or Espruino bring JavaScript to microcontrollers and hardware projects.',
                ]}
            />

            <DocH2>Use Cases</DocH2>
            <DocList
                items={[
                    'Interactive websites & SPAs: Form validation, animations, dynamic content updates without page reloads.',
                    'Web & mobile applications: Full products built with React, Vue, Angular, or React Native.',
                    'Backend APIs & microservices: Built using Node.js frameworks like Express, Fastify, or NestJS.',
                    'Real-time applications: Chat apps, collaborative tools, and live dashboards using WebSockets.',
                    'Automation & tooling: Build scripts, browser automation (Puppeteer/Playwright), and CLI tools.',
                    'Game development: 2D/3D browser games using engines like Phaser or Three.js.',
                ]}
            />

            <DocH2>JavaScript Ecosystem</DocH2>
            <DocList
                items={[
                    'Package managers: npm, yarn, and pnpm manage dependencies and scripts for JavaScript projects.',
                    'Frontend frameworks/libraries: React, Vue, Angular, Svelte — for building user interfaces.',
                    'Backend frameworks: Express, Fastify, NestJS, Koa — for building servers and APIs.',
                    'Build tools & bundlers: Vite, Webpack, esbuild, Rollup — for bundling and optimizing code for production.',
                    'Testing tools: Jest, Vitest, Playwright, Cypress — for unit, integration, and end-to-end testing.',
                    'Type safety: TypeScript adds static typing on top of JavaScript, catching errors before runtime.',
                ]}
            />

            <DocNote tone="info">
                Because TC39 now ships one ECMAScript edition every year, "learning JavaScript" is an ongoing process — features you read about in an older tutorial may already have a more modern, more ergonomic replacement in a recent ES edition.
            </DocNote>

            <DocH2>Quick Look: JavaScript in Action</DocH2>
            <DocP>
                The same language runs in two very different environments below — a browser and a Node.js server — illustrating how JavaScript is host-agnostic at its core, with host environments layering their own APIs on top.
            </DocP>

            <DocH3>1. Running in the Browser (script.js)</DocH3>
            <CodeBlock
                language="javascript"
                filename="script.js"
                code={`// Runs inside a <script src="script.js"></script> tag in the browser
console.log("Hello from the browser!");

// Browser-specific (Web) APIs — not part of ECMAScript itself
const heading = document.querySelector("h1");
heading.textContent = "JavaScript is running!";

// Modern ES2020+ syntax
const user = { name: "Ava", role: undefined };
const displayRole = user.role ?? "guest"; // nullish coalescing
console.log(\`\${user.name} is logged in as \${displayRole}\`);`}
            />

            <DocH3>2. Running on the Server (server.js — Node.js, ESM)</DocH3>
            <CodeBlock
                language="javascript"
                filename="server.js"
                code={`// package.json must include: { "type": "module" }
import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!");
});

server.listen(3000, () => {
  console.log("Server ready at http://localhost:3000");
});`}
            />
        </>
    );
}
