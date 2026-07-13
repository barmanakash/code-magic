import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptVariablesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Variables in JavaScript</DocTitle>

            <DocP>
                Variables are named containers used to store data that your program can reference and manipulate. JavaScript gives you three keywords to declare variables — `var`, `let`, and `const` — each with different rules around scope, reassignment, and hoisting.
            </DocP>

            <DocH2>var</DocH2>
            <DocP>
                `var` is the original way to declare variables in JavaScript (pre-ES6). It is function-scoped (or globally-scoped if declared outside a function), can be redeclared, and is hoisted with an initial value of `undefined`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`var count = 1;
var count = 2; // redeclaring is allowed — no error

if (true) {
  var message = "hi";
}
console.log(message); // "hi" — var ignores block scope entirely`}
            />
            <DocNote tone="warning">
                `var` is largely considered legacy today. Its lack of block scoping is a common source of bugs, which is exactly why `let` and `const` were introduced in ES6.
            </DocNote>

            <DocH2>let</DocH2>
            <DocP>
                `let` declares a block-scoped variable that can be reassigned but not redeclared in the same scope. It is the modern default for variables whose value will change.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let score = 10;
score = 20; // reassignment is fine

if (true) {
  let message = "hi";
  console.log(message); // "hi"
}
console.log(typeof message); // ReferenceError: message is not defined (block scoped)`}
            />

            <DocH2>const</DocH2>
            <DocP>
                `const` declares a block-scoped variable that cannot be reassigned after its initial value is set. It must be initialized at the time of declaration.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const PI = 3.14159;
PI = 3.14; // TypeError: Assignment to constant variable.

// const objects/arrays are NOT deeply frozen —
// their contents can still be mutated:
const user = { name: "Ava" };
user.name = "Ivy";       // allowed — modifying a property
user.age = 25;            // allowed — adding a property
// user = {};              // NOT allowed — reassigning the variable itself`}
            />
            <DocNote tone="info">
                Best practice: default to `const` for everything. Only switch to `let` when you know the variable's value genuinely needs to change later. Avoid `var` in new code entirely.
            </DocNote>

            <DocH2>Variable Declaration</DocH2>
            <DocP>
                Declaration is the act of introducing a variable name into a scope, without necessarily giving it a value yet.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let age;        // declared, but not yet initialized
var city;        // declared, value is undefined
const total = 0; // const must be declared AND initialized together`}
            />

            <DocH2>Variable Initialization</DocH2>
            <DocP>
                Initialization is the act of assigning the first value to a declared variable. Declaration and initialization can happen together or separately (except for `const`, which requires both at once).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let age;      // declaration
age = 30;      // initialization (later)

let city = "Delhi"; // declaration + initialization together
const MAX = 100;      // const must be initialized immediately`}
            />

            <DocH2>Scope</DocH2>
            <DocP>
                Scope determines where in your code a variable is accessible. JavaScript has three main kinds of scope:
            </DocP>
            <DocList
                items={[
                    'Global scope: declared outside any function or block — accessible from anywhere in the file.',
                    'Function scope: `var` is scoped to the nearest enclosing function, regardless of blocks (if/for) inside it.',
                    'Block scope: `let` and `const` are scoped to the nearest enclosing pair of curly braces `{ }` — including if-statements, loops, and standalone blocks.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`function demo() {
  var a = "function-scoped";
  let b = "block-scoped";

  if (true) {
    var a = "changed!";      // same 'a' — var ignores the block
    let b = "different b";    // new 'b' — shadows the outer one
    console.log(a, b);        // "changed!" "different b"
  }

  console.log(a, b); // "changed!" "block-scoped"
}`}
            />

            <DocH2>Hoisting</DocH2>
            <DocP>
                Hoisting is JavaScript's behavior of processing variable and function declarations before executing any code. However, `var`, `let`, and `const` behave very differently once hoisted.
            </DocP>
            <DocList
                items={[
                    '`var` declarations are hoisted and initialized to `undefined` — so accessing them before their line runs gives `undefined`, not an error.',
                    '`let` and `const` are hoisted too, but remain in the "Temporal Dead Zone" (TDZ) — accessing them before their declaration line throws a `ReferenceError`.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`console.log(x); // undefined (var is hoisted, initialized to undefined)
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;`}
            />

            <DocH2>Best Practices</DocH2>
            <DocList
                items={[
                    'Prefer `const` by default; use `let` only when reassignment is genuinely needed.',
                    'Avoid `var` in modern code — its function scoping and hoisting behavior are common sources of bugs.',
                    'Declare variables as close as possible to where they are first used, and give them descriptive, meaningful names.',
                    'One `let`/`const` declaration per variable is easier to read and debug than combining several with commas.',
                    'Never rely on the Temporal Dead Zone or hoisting quirks intentionally — always declare a variable before using it.',
                ]}
            />
        </>
    );
}
