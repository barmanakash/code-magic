import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptBasicsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Basics</DocTitle>

            <DocP>
                Before diving into variables, functions, and logic, it helps to understand the fundamental building blocks of the language itself — how JavaScript code is structured, read, and interpreted by the engine. This page covers the ground rules every script follows.
            </DocP>

            <DocH2>Syntax</DocH2>
            <DocP>
                JavaScript syntax is the set of rules that define how a correctly structured program is written. It borrows heavily from the C-family of languages (curly braces for blocks, semicolons to end statements, parentheses for function calls and conditions).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// A simple JavaScript program
let name = "Ava";
function greet(person) {
  return "Hello, " + person + "!";
}
console.log(greet(name)); // "Hello, Ava!"`}
            />

            <DocH2>Statements</DocH2>
            <DocP>
                A statement is an instruction that performs an action — declaring a variable, running a loop, or making a decision. A JavaScript program is essentially a sequence of statements executed one after another by the engine.
            </DocP>
            <DocList
                items={[
                    'Declaration statements: `let x = 5;`, `const name = "Ava";`',
                    'Control-flow statements: `if...else`, `for`, `while`, `switch`.',
                    'Expression statements: any expression followed by a semicolon, e.g. `x + 1;` or `console.log("hi");`',
                    'Blocks: multiple statements grouped together using curly braces `{ }`, commonly used as the body of a function or loop.',
                ]}
            />

            <DocH2>Comments</DocH2>
            <DocP>
                Comments are notes in your code that the JavaScript engine completely ignores at runtime. They exist purely to explain intent to other developers (or your future self).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// This is a single-line comment

/*
  This is a multi-line comment.
  It can span as many lines as needed.
*/

let total = 0; // inline comment explaining this line`}
            />

            <DocH2>Semicolons</DocH2>
            <DocP>
                Semicolons mark the end of a statement. JavaScript has a feature called <strong>Automatic Semicolon Insertion (ASI)</strong>, which lets you omit semicolons in many cases and the engine will insert them for you — but relying on this can cause subtle bugs.
            </DocP>
            <DocList
                items={[
                    'Recommended practice: always write semicolons explicitly, even though JavaScript allows omitting them in most cases.',
                    'Common ASI pitfall: a `return` statement followed by a newline before the value can silently return `undefined`, because ASI inserts a semicolon right after `return`.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`// Dangerous ASI pitfall — this returns undefined, not the object!
function getUser() {
  return
  {
    name: "Ava"
  };
}

console.log(getUser()); // undefined`}
            />

            <DocH2>Strict Mode</DocH2>
            <DocP>
                Strict mode is an opt-in restricted variant of JavaScript that catches common mistakes and unsafe actions (like accidentally creating global variables) by throwing errors instead of failing silently.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`"use strict";

// Without strict mode this would silently create a global variable
x = 10; // ReferenceError: x is not defined

function demo() {
  "use strict"; // can also be scoped to a single function
  let y = 5;
  return y;
}`}
            />
            <DocNote tone="info">
                ES6 modules and classes are automatically in strict mode — you don't need to add `"use strict";` manually when using `import`/`export` or `class` syntax.
            </DocNote>

            <DocH2>Case Sensitivity</DocH2>
            <DocP>
                JavaScript is case-sensitive. Variable names, function names, and keywords must match exactly — `myVariable`, `MyVariable`, and `MYVARIABLE` are treated as three completely different identifiers.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let color = "blue";
let Color = "red";

console.log(color); // "blue"
console.log(Color); // "red" — a totally different variable`}
            />

            <DocH2>Reserved Keywords</DocH2>
            <DocP>
                Reserved keywords are words the language has set aside for its own syntax. You cannot use them as variable, function, or class names.
            </DocP>
            <DocList
                items={[
                    'Declaration & control flow: let, const, var, if, else, for, while, switch, function, return, break, continue.',
                    'Object-oriented: class, extends, super, new, this, static.',
                    'Modules & async: import, export, async, await, yield.',
                    'Others: typeof, instanceof, delete, void, in, try, catch, finally, throw.',
                ]}
            />

            <DocH2>Identifiers</DocH2>
            <DocP>
                An identifier is the name given to a variable, function, class, or property. Identifiers must follow specific naming rules:
            </DocP>
            <DocList
                items={[
                    'Can contain letters, digits, underscores (_), and dollar signs ($).',
                    'Cannot start with a digit (`1name` is invalid, `name1` is fine).',
                    'Cannot be a reserved keyword (`let` cannot be a variable name).',
                    'Convention: camelCase for variables/functions (`firstName`), PascalCase for classes (`UserProfile`), UPPER_SNAKE_CASE for constants (`MAX_RETRIES`).',
                ]}
            />

            <DocH2>Literals</DocH2>
            <DocP>
                A literal is a fixed value written directly into the source code — not computed, just stated as-is.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`42               // number literal
3.14             // number literal (float)
"hello"          // string literal
'hello'          // string literal (single quotes)
\`hello \${name}\`  // template literal
true             // boolean literal
null             // null literal
undefined        // undefined literal
[1, 2, 3]        // array literal
{ key: "value" } // object literal`}
            />

            <DocH2>Expressions</DocH2>
            <DocP>
                An expression is any piece of code that produces (evaluates to) a value. Expressions can be as simple as a single literal, or as complex as a chained function call.
            </DocP>
            <DocList
                items={[
                    'Arithmetic expression: `5 + 3` evaluates to `8`.',
                    'String expression: `"Hello, " + "World"` evaluates to `"Hello, World"`.',
                    'Logical expression: `age >= 18` evaluates to `true` or `false`.',
                    'Function call expression: `Math.max(4, 9)` evaluates to `9`.',
                    'Assignment expression: `x = 5` both assigns 5 to x and evaluates to `5`.',
                ]}
            />
            <DocNote tone="info">
                The key distinction: statements <em>do</em> something, expressions <em>produce a value</em>. A single line of code is often a statement that contains one or more expressions inside it — e.g. `let total = 5 + 3;` is a statement containing the expression `5 + 3`.
            </DocNote>
        </>
    );
}
