import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptHoistingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Hoisting in JavaScript</DocTitle>

            <DocP>
                Hoisting is JavaScript's behavior of processing declarations before executing any code, effectively "moving" them to the top of their scope during compilation. It applies differently to variables and functions, and understanding it is key to avoiding subtle "used before defined" bugs.
            </DocP>

            <DocH2>Variable Hoisting</DocH2>
            <DocP>
                All variable declarations are hoisted, but `var`, `let`, and `const` behave very differently once hoisted.
            </DocP>
            <DocH3>var</DocH3>
            <DocP>`var` declarations are hoisted to the top of their enclosing function and automatically initialized to `undefined`.</DocP>
            <CodeBlock
                language="javascript"
                code={`console.log(name); // undefined — not an error, because 'name' is already declared
var name = "Ava";
console.log(name);   // "Ava"

// The above is effectively interpreted as:
var name;             // declaration hoisted to the top, initialized to undefined
console.log(name);     // undefined
name = "Ava";            // assignment stays in its original place
console.log(name);        // "Ava"`}
            />

            <DocH3>let and const</DocH3>
            <DocP>`let` and `const` are also hoisted, but are NOT initialized — they remain in the Temporal Dead Zone until their declaration line actually executes.</DocP>
            <CodeBlock
                language="javascript"
                code={`console.log(city); // ReferenceError: Cannot access 'city' before initialization
let city = "Delhi";

console.log(country); // ReferenceError: Cannot access 'country' before initialization
const country = "India";`}
            />

            <DocH2>Function Hoisting</DocH2>
            <DocP>
                Function declarations are hoisted completely — both their name AND their full definition — so they can be safely called before they appear in the code.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`greet("Ava"); // "Hello, Ava!" — works, fully hoisted

function greet(name) {
  return \`Hello, \${name}!\`;
}`}
            />
            <DocP>
                Function <em>expressions</em> and arrow functions, however, are not hoisted the same way — only the variable holding them is hoisted (following `var`/`let`/`const` rules), not the function itself.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`greet("Ava"); // TypeError: greet is not a function

var greet = function (name) {
  return \`Hello, \${name}!\`;
};

sayHi("Ava"); // ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = (name) => \`Hi, \${name}!\`;`}
            />
            <DocNote tone="warning">
                When both a `var` variable and a function share the same name, the function declaration takes priority during hoisting — the function "wins" over the variable declaration (though a later assignment can still overwrite it).
            </DocNote>

            <DocH2>Temporal Dead Zone (TDZ)</DocH2>
            <DocP>
                The Temporal Dead Zone is the period between entering a scope and the point where a `let`/`const` variable is actually declared. During this window, the variable technically exists (it's been hoisted) but cannot be accessed — attempting to do so throws a `ReferenceError` rather than returning `undefined`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`{
  // TDZ for 'score' starts here — the block has begun
  console.log(score); // ReferenceError: Cannot access 'score' before initialization

  let score = 100; // TDZ for 'score' ends here
  console.log(score); // 100 — perfectly fine now
}`}
            />
            <DocList
                items={[
                    'The TDZ exists for every `let` and `const` declaration, scoped to its nearest enclosing block.',
                    'The TDZ was introduced specifically to catch bugs early — accessing a variable before its intended declaration is almost always a mistake, so throwing an error is more useful than silently returning undefined (which is what var does).',
                    '`typeof` does not protect you from the TDZ either — `typeof someVar` on a TDZ variable also throws, unlike an undeclared variable where typeof safely returns "undefined".',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`console.log(typeof undeclaredVar); // "undefined" — safe, no error, variable was never declared

console.log(typeof tdzVar); // ReferenceError — 'tdzVar' is in the TDZ
let tdzVar = 5;`}
            />

            <DocNote tone="info">
                Best practice takeaway: always declare variables at the top of their scope before using them, and prefer `let`/`const` over `var`. This naturally avoids the TDZ and keeps hoisting behavior from ever becoming a source of confusion in your code.
            </DocNote>
        </>
    );
}
