import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptCommonMistakesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Common JavaScript Mistakes</DocTitle>

            <DocP>
                Certain mistakes show up again and again across JavaScript codebases — mostly because of quirks in the language's type coercion, scoping rules, and asynchronous model. Recognizing these patterns helps you catch them before they become bugs in production.
            </DocP>

            <DocH2>== vs ===</DocH2>
            <DocP>
                `==` (loose equality) coerces operand types before comparing, which frequently produces surprising results. `===` (strict equality) never coerces, comparing both value and type directly.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`0 == "";          // true  — both coerced to 0
0 == "0";           // true
"" == "0";             // false — surprising! neither coerces the same way here
null == undefined;        // true  — a special-cased pair
null === undefined;         // false — different types

// The safe default: always use === and !==
0 === "";          // false — correct, no coercion
"" === "0";           // false

// The ONE common exception where == is intentionally used:
if (value == null) { /* catches BOTH null and undefined in one check */ }`}
            />
            <DocNote tone="warning">
                Always default to `===`/`!==`. The single common exception above (`value == null`) is a deliberate, well-known idiom — everywhere else, loose equality is a liability, not a convenience.
            </DocNote>

            <DocH2>Global Variables</DocH2>
            <DocP>
                Accidentally creating global variables — usually by forgetting `let`/`const`/`var` — pollutes the shared global scope, risking naming collisions and making bugs hard to trace.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function calculateTotal() {
  total = 100; // MISTAKE: missing 'let'/'const' — silently creates a global variable
  return total;
}

calculateTotal();
console.log(total); // 100 — leaked into the global scope, accessible everywhere

// Fix: always declare variables, and enable strict mode to catch this automatically
"use strict";
function calculateTotal() {
  total = 100; // now correctly throws: ReferenceError: total is not defined
}`}
            />

            <DocH2>Hoisting Confusion</DocH2>
            <DocP>
                Misunderstanding hoisting leads to code that appears to work by accident, or throws confusing errors that don't match the visible order of the code.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`console.log(count); // undefined, NOT a ReferenceError — 'var' is hoisted but not yet assigned
var count = 5;

console.log(total); // ReferenceError: Cannot access 'total' before initialization
let total = 10;         // 'let' is hoisted too, but stuck in the Temporal Dead Zone

// A classic loop pitfall — var leaks and shares ONE variable across iterations
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Logs: 3, 3, 3 — all three callbacks share the SAME final 'i'

// Fix: use let, which creates a fresh binding per iteration
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Logs: 0, 1, 2 — as expected`}
            />

            <DocH2>this Keyword</DocH2>
            <DocP>
                The value of `this` depends on HOW a function is called, not where it's defined — this dynamic behavior is one of the most common sources of confusion, especially with callbacks and arrow functions.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const user = {
  name: "Ava",
  greet() {
    console.log(this.name); // works fine — called as user.greet()
  },
};

user.greet(); // "Ava"

const detachedGreet = user.greet;
detachedGreet(); // undefined (or throws in strict mode) — 'this' lost its context

// A callback loses 'this' the same way
setTimeout(user.greet, 100); // undefined — called with no object context at all

// Common fixes
setTimeout(() => user.greet(), 100);      // arrow function preserves the outer call
setTimeout(user.greet.bind(user), 100);      // bind locks 'this' explicitly

// Arrow functions inside class/object methods DON'T have their own 'this' either
const obj = {
  name: "Ava",
  greet: () => {
    console.log(this.name); // undefined — arrow functions use the SURROUNDING scope's 'this', not obj
  },
};`}
            />

            <DocH2>Async Mistakes</DocH2>
            <DocP>
                Asynchronous code introduces its own category of easy-to-make mistakes, mostly around forgetting to `await`, or misusing async logic inside array iteration.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// MISTAKE: forgetting 'await' — logs a pending Promise object, not the actual data
async function getUser() {
  const data = fetch("/api/user"); // missing await!
  console.log(data); // Promise { <pending> }
}

// MISTAKE: forEach does NOT wait for async callbacks — they all fire in parallel,
// uncontrolled, and forEach itself doesn't return a Promise you can await
async function processAll(items) {
  items.forEach(async (item) => {
    await processItem(item); // forEach doesn't wait for this at all
  });
  console.log("Done!"); // logs IMMEDIATELY, before any item has actually finished
}

// Fix: use a for...of loop (sequential) or Promise.all (parallel, but awaited properly)
async function processAllFixed(items) {
  for (const item of items) {
    await processItem(item); // properly awaited, one at a time
  }
  console.log("Done!"); // now genuinely runs after all items finish
}

async function processAllParallel(items) {
  await Promise.all(items.map((item) => processItem(item))); // parallel AND awaited
  console.log("Done!");
}

// MISTAKE: unhandled promise rejection — no .catch() and no try/catch
fetchUser(); // if this rejects, the error is silently swallowed / logged as unhandled`}
            />

            <DocH2>Memory Leaks</DocH2>
            <DocP>
                Memory leaks in JavaScript almost always come down to something staying reachable longer than intended — usually a forgotten reference the garbage collector can't clean up.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// MISTAKE: interval never cleared
function startPolling() {
  setInterval(() => fetchLatestData(), 1000); // runs forever, even after it's no longer needed
}

// Fix: store the id and clear it when appropriate
const intervalId = setInterval(() => fetchLatestData(), 1000);
clearInterval(intervalId); // when the component/feature is torn down

// MISTAKE: event listener attached but never removed
function setupWidget(el) {
  el.addEventListener("click", handleClick);
}
// If 'el' is later removed from the DOM but the listener isn't removed first,
// the listener (and anything it closes over) can still leak.

// Fix
el.removeEventListener("click", handleClick);`}
            />
            <DocNote tone="info">
                A useful debugging habit: for every `setInterval`, `addEventListener`, or subscription you add, immediately write down (even just as a comment) where and when it will be cleaned up. It's much easier to enforce this discipline while writing the code than to hunt down a leak afterward.
            </DocNote>
        </>
    );
}
