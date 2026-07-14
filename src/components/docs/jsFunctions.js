import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptFunctionsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Functions in JavaScript</DocTitle>

            <DocP>
                Functions are reusable blocks of code designed to perform a specific task. They are first-class citizens in JavaScript — meaning they can be stored in variables, passed as arguments, and returned from other functions, which unlocks powerful patterns like callbacks and higher-order functions.
            </DocP>

            <DocH2>Function Declaration</DocH2>
            <DocP>
                A named function defined using the `function` keyword at the statement level. Function declarations are fully hoisted, meaning they can be called before their definition appears in the code.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`greet("Ava"); // works even though called before the definition below — hoisted!

function greet(name) {
  return \`Hello, \${name}!\`;
}`}
            />

            <DocH2>Function Expression</DocH2>
            <DocP>
                A function assigned to a variable. Unlike declarations, function expressions are not hoisted in a callable way — the variable exists, but its value isn't assigned until that line runs.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`greet("Ava"); // TypeError: greet is not a function (not yet assigned)

const greet = function (name) {
  return \`Hello, \${name}!\`;
};

// Named function expression — the name is useful for stack traces / recursion
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};`}
            />

            <DocH2>Arrow Functions</DocH2>
            <DocP>
                Introduced in ES6, arrow functions offer a more compact syntax and — critically — do not have their own `this`, `arguments`, or `super`; they inherit these from the surrounding scope.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const greet = (name) => {
  return \`Hello, \${name}!\`;
};

const greetShort = (name) => \`Hello, \${name}!\`; // implicit return, no braces needed
const square = x => x * x;                           // single param — parens optional
const add = (a, b) => a + b;
const noop = () => {};                                 // no params — parens required`}
            />
            <DocNote tone="warning">
                Avoid arrow functions when you need your own `this` — for example, object methods or class methods that rely on the calling context. Use them for callbacks and short utility functions instead.
            </DocNote>

            <DocH2>Parameters</DocH2>
            <DocP>
                Parameters are the named placeholders listed in a function's definition — they describe what inputs the function expects.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function add(a, b) { // 'a' and 'b' are parameters
  return a + b;
}`}
            />

            <DocH2>Arguments</DocH2>
            <DocP>
                Arguments are the actual values passed into a function when it is called. JavaScript doesn't enforce a fixed number — you can call a function with fewer or more arguments than declared parameters.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function add(a, b) {
  return a + b;
}

add(2, 3);        // 5   — 2 and 3 are the arguments
add(2);            // NaN — b is undefined, undefined + 2 = NaN
add(2, 3, 4);        // 5   — extra argument 4 is simply ignored

// Regular functions (not arrows) get an array-like 'arguments' object
function sumAll() {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}
sumAll(1, 2, 3); // 6`}
            />

            <DocH2>Default Parameters</DocH2>
            <DocP>
                Default parameters (ES6) let you specify a fallback value used when an argument is omitted or explicitly `undefined`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

greet();          // "Hello, Guest!"
greet("Ava");       // "Hello, Ava!"
greet(undefined);    // "Hello, Guest!" — undefined triggers the default
greet(null);           // "Hello, null!" — null does NOT trigger the default`}
            />

            <DocH2>Rest Parameters</DocH2>
            <DocP>
                Rest parameters (`...`) collect any remaining arguments into a real array, giving you a cleaner alternative to the old `arguments` object.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function sumAll(...numbers) { // 'numbers' is a real Array
  return numbers.reduce((total, n) => total + n, 0);
}
sumAll(1, 2, 3, 4); // 10

function logFirst(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
logFirst(1, 2, 3, 4); // First: 1, Rest: [2, 3, 4]`}
            />
            <DocNote tone="info">
                The rest parameter must be the last parameter in the function signature, and there can only be one.
            </DocNote>

            <DocH2>Return Statement</DocH2>
            <DocP>
                `return` exits a function immediately and specifies the value sent back to the caller. Without an explicit `return`, a function returns `undefined` by default.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function add(a, b) {
  return a + b; // exits here, sends back the sum
  console.log("never runs"); // unreachable code after return
}

function noReturn() {
  console.log("just a side effect");
}
noReturn(); // returns undefined`}
            />

            <DocH2>Higher-Order Functions</DocH2>
            <DocP>
                A higher-order function either accepts a function as an argument, returns a function, or both. They're foundational to functional-style JavaScript, powering methods like `map`, `filter`, and `reduce`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Accepts a function as an argument
function applyDiscount(price, discountFn) {
  return discountFn(price);
}
applyDiscount(100, price => price * 0.9); // 90

// Returns a function
function multiplier(factor) {
  return function (n) {
    return n * factor;
  };
}
const double = multiplier(2);
double(5); // 10`}
            />

            <DocH2>Callback Functions</DocH2>
            <DocP>
                A callback is a function passed into another function to be executed later, often after some operation completes (like an event, a timer, or a network request).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData(function (result) {
  console.log(result); // "Data received!" — after 1 second
});

// Extremely common with array methods too
[1, 2, 3].forEach(function (n) {
  console.log(n);
});`}
            />

            <DocH2>Pure Functions</DocH2>
            <DocP>
                A pure function always returns the same output for the same input, and produces no side effects (it doesn't modify anything outside its own scope). Pure functions are predictable, easy to test, and easy to reason about.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Pure — same input always gives the same output, no external state touched
function add(a, b) {
  return a + b;
}

// Impure — relies on and mutates external state
let total = 0;
function addToTotal(n) {
  total += n; // side effect: mutates a variable outside its own scope
  return total;
}`}
            />

            <DocH2>IIFE (Immediately Invoked Function Expression)</DocH2>
            <DocP>
                An IIFE is a function that runs immediately as soon as it's defined, wrapped in parentheses to be treated as an expression. Commonly used to create an isolated scope, avoiding polluting the global namespace.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`(function () {
  const secret = "hidden from the outside world";
  console.log(secret);
})(); // runs immediately

// Arrow function version
(() => {
  console.log("also runs immediately");
})();

// With arguments
(function (name) {
  console.log(\`Hello, \${name}!\`);
})("Ava");`}
            />
            <DocNote tone="info">
                IIFEs were the standard way to avoid global scope pollution before ES6 modules existed. In modern codebases using `import`/`export`, each module already has its own scope, so IIFEs are far less commonly needed — but they still appear in bundler output and some library code.
            </DocNote>
        </>
    );
}
