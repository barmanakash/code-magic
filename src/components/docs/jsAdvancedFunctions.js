import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptAdvancedFunctionsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Advanced Functions in JavaScript</DocTitle>

            <DocP>
                Beyond basic function syntax, JavaScript's first-class functions and lexical scoping unlock a set of powerful patterns — closures, currying, memoization, and more — that show up constantly in real-world code, from React hooks to performance-sensitive event handlers.
            </DocP>

            <DocH2>Closures</DocH2>
            <DocP>
                A closure is formed when an inner function "remembers" and continues to access variables from its outer (enclosing) function's scope, even after that outer function has already finished running.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function createCounter() {
  let count = 0; // enclosed by the returned function below

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3 — 'count' persists between calls, private to this counter instance

const counter2 = createCounter(); // a completely independent closure
counter2(); // 1 — its own separate 'count'`}
            />
            <DocNote tone="info">
                Closures are the foundation of many patterns you already use — private state (as above), React hooks like `useState`, module patterns, and event handler callbacks that need access to outer variables.
            </DocNote>

            <DocH2>Currying</DocH2>
            <DocP>
                Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument at a time.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Regular function
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3); // 6

// Curried version
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
curriedAdd(1)(2)(3); // 6

// Arrow function version — much more concise
const curriedAddArrow = a => b => c => a + b + c;
curriedAddArrow(1)(2)(3); // 6

// Practical use: pre-configuring a specialized function
const addTax = rate => amount => amount + amount * rate;
const addGST = addTax(0.18);
addGST(100); // 118`}
            />

            <DocH2>Partial Application</DocH2>
            <DocP>
                Similar to currying, but partial application fixes some arguments of a function upfront, returning a new function that accepts the rest — without necessarily breaking it down into single-argument steps.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function multiply(a, b, c) {
  return a * b * c;
}

function partial(fn, ...presetArgs) {
  return (...remainingArgs) => fn(...presetArgs, ...remainingArgs);
}

const double = partial(multiply, 2);       // 'a' is fixed at 2
double(3, 4); // 24 — equivalent to multiply(2, 3, 4)

const doubleOfFive = partial(multiply, 2, 5); // both 'a' and 'b' fixed
doubleOfFive(3); // 30 — equivalent to multiply(2, 5, 3)`}
            />

            <DocH2>Memoization</DocH2>
            <DocP>
                Memoization caches the result of an expensive function call, so repeated calls with the same arguments return the cached result instantly instead of recomputing it.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key); // cache hit — skip the expensive work entirely
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowSquare(n) {
  for (let i = 0; i < 1e8; i++) {} // simulate expensive work
  return n * n;
}

const fastSquare = memoize(slowSquare);
fastSquare(5); // slow the first time
fastSquare(5); // instant — served from cache`}
            />

            <DocH2>Debouncing</DocH2>
            <DocP>
                Debouncing delays running a function until a specified time has passed since the LAST time it was invoked — ideal for events that fire rapidly, like typing, where you only care about the final state.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // cancel the previous pending call
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => {
  console.log("Searching for:", query);
}, 300);

// Rapid calls while typing "hello" — only the LAST one actually runs, after typing stops
searchInput.addEventListener("input", (e) => search(e.target.value));`}
            />

            <DocH2>Throttling</DocH2>
            <DocP>
                Throttling ensures a function runs at most once every N milliseconds, no matter how often it's triggered — ideal for continuous, high-frequency events like scrolling, where you want regular updates but not on every single event.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function throttle(fn, limit) {
  let inCooldown = false;
  return function (...args) {
    if (!inCooldown) {
      fn(...args);
      inCooldown = true;
      setTimeout(() => (inCooldown = false), limit);
    }
  };
}

const logScroll = throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 200);

window.addEventListener("scroll", logScroll); // runs at most once every 200ms`}
            />
            <DocNote tone="info">
                Debouncing vs throttling: debouncing waits for a pause in activity before running once (good for search-as-you-type). Throttling guarantees a steady, capped rate of execution during continuous activity (good for scroll/resize handlers).
            </DocNote>

            <DocH2>call()</DocH2>
            <DocP>
                `call()` invokes a function immediately with an explicitly specified `this` value, passing remaining arguments individually.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function greet(greeting) {
  return \`\${greeting}, \${this.name}!\`;
}

const user = { name: "Ava" };
greet.call(user, "Hello"); // "Hello, Ava!" — 'this' inside greet is set to 'user'`}
            />

            <DocH2>apply()</DocH2>
            <DocP>
                Works exactly like `call()`, but takes the remaining arguments as a single array instead of individually.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}

const user = { name: "Ava" };
greet.apply(user, ["Hello", "!"]); // "Hello, Ava!" — args passed as an array

// Classic pre-spread use case: passing an array as individual arguments
Math.max.apply(null, [1, 5, 3]); // 5 — modern code would use Math.max(...[1, 5, 3]) instead`}
            />

            <DocH2>bind()</DocH2>
            <DocP>
                `bind()` does NOT call the function immediately — it returns a NEW function with `this` permanently locked to the given value (and optionally some arguments pre-filled), ready to be called later.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function greet(greeting) {
  return \`\${greeting}, \${this.name}!\`;
}

const user = { name: "Ava" };
const greetAva = greet.bind(user); // returns a new function, doesn't run it yet

greetAva("Hi");    // "Hi, Ava!" — 'this' is permanently locked to 'user'
greetAva("Hey");     // "Hey, Ava!" — still locked, can be called again anytime

// bind() can also pre-fill arguments (partial application)
const greetAvaHello = greet.bind(user, "Hello");
greetAvaHello(); // "Hello, Ava!"`}
            />
            <DocNote tone="warning">
                A common real-world need: a class method passed as a callback (e.g. an event handler) loses its `this` binding unless explicitly bound — either with `.bind(this)` in the constructor, or by defining the method as a class field using an arrow function, which captures `this` lexically.
            </DocNote>
        </>
    );
}
