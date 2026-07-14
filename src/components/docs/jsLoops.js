import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptLoopsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Loops in JavaScript</DocTitle>

            <DocP>
                Loops let you repeat a block of code multiple times, either a fixed number of times or until a condition is no longer met. JavaScript offers several loop constructs, each suited to different situations.
            </DocP>

            <DocH2>for</DocH2>
            <DocP>
                The classic loop with three parts — initialization, condition, and increment — giving full control over exactly how iteration happens.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Iterating an array by index
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
            />

            <DocH2>while</DocH2>
            <DocP>
                Runs a block of code as long as its condition remains `true`, checking the condition <em>before</em> each iteration. Useful when you don't know the exact number of iterations in advance.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

// Real-world example: retry until success or limit reached
let attempts = 0;
let success = false;
while (!success && attempts < 3) {
  success = tryOperation();
  attempts++;
}`}
            />

            <DocH2>do...while</DocH2>
            <DocP>
                Similar to `while`, but checks the condition <em>after</em> each iteration — guaranteeing the loop body runs at least once, even if the condition is false from the start.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let count = 0;

do {
  console.log(count); // runs once even if the condition below were false
  count++;
} while (count < 5);

// Even with a false condition, the body still runs once
let x = 10;
do {
  console.log("This still runs once"); // logs once
} while (x < 5);`}
            />

            <DocH2>for...in</DocH2>
            <DocP>
                Iterates over the <em>enumerable property keys</em> of an object (including inherited ones from its prototype chain). Best used for plain objects, not arrays.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25, role: "admin" };

for (const key in user) {
  console.log(key, user[key]);
}
// "name" "Ava"
// "age" 25
// "role" "admin"`}
            />
            <DocNote tone="warning">
                Avoid `for...in` on arrays — it iterates over indices as strings and can also pick up inherited enumerable properties, leading to unexpected results. Use `for...of`, `forEach`, or `map` for arrays instead.
            </DocNote>

            <DocH2>for...of</DocH2>
            <DocP>
                Iterates over the <em>values</em> of any iterable — arrays, strings, Maps, Sets, and more. This is the cleanest, most modern way to loop through values directly.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

for (const char of "hi") {
  console.log(char); // "h", "i"
}

const scores = new Map([["Ava", 95], ["Ivy", 88]]);
for (const [name, score] of scores) {
  console.log(name, score);
}`}
            />

            <DocH2>break</DocH2>
            <DocP>
                Immediately exits the nearest enclosing loop (or `switch` statement), skipping any remaining iterations.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // stop the loop entirely once i reaches 5
  }
  console.log(i); // 0, 1, 2, 3, 4
}`}
            />

            <DocH2>continue</DocH2>
            <DocP>
                Skips the rest of the current iteration and moves straight to the next one, without exiting the loop entirely.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i); // 1, 3, 5, 7, 9
}`}
            />

            <DocH2>Labels</DocH2>
            <DocP>
                Labels let `break` and `continue` target a specific outer loop when working with nested loops, rather than only affecting the innermost one.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outerLoop; // skips to the next iteration of the OUTER loop
    }
    console.log(i, j);
  }
}
// Output: 0,0 / 1,0 / 2,0 — j never reaches 2 because of the labeled continue

searchLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break searchLoop; // exits BOTH loops entirely
    }
    console.log(i, j);
  }
}`}
            />
            <DocNote tone="info">
                Labels are rarely needed in everyday code — they're mostly useful for breaking out of deeply nested loops in search-like algorithms. Overusing them can hurt readability, so reach for them sparingly.
            </DocNote>
        </>
    );
}
