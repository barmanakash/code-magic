import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptScopeDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Scope in JavaScript</DocTitle>

            <DocP>
                Scope determines where in your code a variable, function, or object is accessible. Understanding scope is essential for avoiding naming collisions, writing predictable code, and reasoning about how closures work later on.
            </DocP>

            <DocH2>Global Scope</DocH2>
            <DocP>
                Variables declared outside of any function or block live in the global scope, meaning they are accessible from anywhere in your program — including inside every function and block.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const appName = "Code Magic"; // global scope

function printName() {
  console.log(appName); // accessible here — inherited from the global scope
}

printName(); // "Code Magic"
console.log(appName); // also accessible here`}
            />
            <DocNote tone="warning">
                Minimize global variables. Every script sharing the same global scope can read and overwrite them, which is a common source of naming collisions and hard-to-trace bugs in larger applications.
            </DocNote>

            <DocH2>Local Scope</DocH2>
            <DocP>
                Local scope is a general term for any scope that isn't global — variables declared inside a function or block that are only accessible within that region. It's an umbrella term that covers both function scope and block scope.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function greet() {
  const message = "Hello!"; // local to this function
  console.log(message);
}

greet();
console.log(message); // ReferenceError: message is not defined`}
            />

            <DocH2>Function Scope</DocH2>
            <DocP>
                Variables declared with `var` are scoped to the nearest enclosing function, regardless of any nested blocks (`if`, `for`, etc.) inside that function.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function demo() {
  if (true) {
    var x = "function-scoped";
  }
  console.log(x); // "function-scoped" — accessible outside the if-block
}

demo();
console.log(typeof x); // "undefined" — not accessible outside the function`}
            />

            <DocH2>Block Scope</DocH2>
            <DocP>
                Variables declared with `let` and `const` are scoped to the nearest enclosing pair of curly braces — including `if` statements, loops, and even a standalone block with no keyword at all.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`if (true) {
  let y = "block-scoped";
  console.log(y); // "block-scoped"
}
console.log(typeof y); // "undefined" — y doesn't exist out here

// A "naked" block also creates scope
{
  const z = "isolated";
  console.log(z);
}
console.log(typeof z); // "undefined"

// Classic loop pitfall — var vs let
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 — var leaks out of the loop

for (let j = 0; j < 3; j++) {}
console.log(typeof j); // "undefined" — let stays properly scoped to the loop`}
            />

            <DocH2>Lexical Scope</DocH2>
            <DocP>
                Lexical (or "static") scope means a variable's accessibility is determined by where it is physically written in the source code — not by where or how a function is called. Every nested function has access to variables declared in its outer (enclosing) functions, forming what's called the "scope chain".
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function outer() {
  const outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // accessible — inner is lexically nested inside outer
  }

  inner();
}

outer(); // "I'm from outer"

function a() {
  const value = "a's value";
  function b() {
    function c() {
      console.log(value); // still accessible — walks up the whole scope chain
    }
    c();
  }
  b();
}
a(); // "a's value"`}
            />
            <DocNote tone="info">
                Lexical scoping is what makes closures possible — an inner function "remembers" the variables from its enclosing scope even after the outer function has finished running. This is a core mechanism used throughout JavaScript, from event handlers to React hooks.
            </DocNote>

            <DocH2>Scope Chain Summary</DocH2>
            <DocList
                items={[
                    'When a variable is referenced, JavaScript first looks in the current (innermost) scope.',
                    'If not found, it walks outward to the next enclosing scope, and continues doing so until it reaches the global scope.',
                    'If the variable still isn\'t found in the global scope, a ReferenceError is thrown.',
                    'This lookup direction is one-way — an outer scope can never access variables declared in an inner scope.',
                ]}
            />
        </>
    );
}
