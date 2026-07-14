import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptControlFlowDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Control Flow in JavaScript</DocTitle>

            <DocP>
                Control flow statements determine the order in which your code executes — letting a program make decisions and branch down different paths based on conditions, rather than always running top to bottom.
            </DocP>

            <DocH2>if</DocH2>
            <DocP>
                The `if` statement executes a block of code only when its condition evaluates to `true` (or a truthy value).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}`}
            />

            <DocH2>else</DocH2>
            <DocP>
                `else` provides a fallback block that runs when the `if` condition is `false`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}`}
            />

            <DocH2>else if</DocH2>
            <DocP>
                `else if` lets you chain multiple conditions in sequence — JavaScript checks each one in order and runs the first block whose condition is `true`, skipping the rest.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C"); // this one runs — the first matching condition
} else {
  console.log("Grade: F");
}`}
            />

            <DocH2>switch</DocH2>
            <DocP>
                `switch` compares a single expression against multiple possible values (using strict equality `===`), useful as a cleaner alternative to long `if/else if` chains when checking one variable against many exact values.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek grind"); // multiple cases can share one block
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("It's the weekend");
}`}
            />
            <DocNote tone="warning">
                Never forget the `break` statement — without it, execution "falls through" to the next case regardless of whether it matches, which is a very common source of switch-statement bugs. Fall-through is occasionally used intentionally (as with the grouped "Tuesday"/"Wednesday"/"Thursday" cases above), but should always be a deliberate choice.
            </DocNote>

            <DocH2>Ternary Operator</DocH2>
            <DocP>
                The ternary operator (`condition ? valueIfTrue : valueIfFalse`) is a compact expression-based alternative to a simple `if/else`, useful when you need to assign a value based on a condition in a single line.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const age = 20;
const status = age >= 18 ? "adult" : "minor";

// Can be chained, but readability suffers quickly — prefer if/else if for 3+ branches
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// Great for inline conditional rendering-style logic
const message = isLoggedIn ? \`Welcome back, \${username}!\` : "Please log in";`}
            />
            <DocNote tone="info">
                Use `if/else` when you need to run different blocks of statements (side effects like logging, API calls, etc.). Use the ternary operator when you just need to pick between two values inline — for example, computing a variable or a piece of JSX to render.
            </DocNote>
        </>
    );
}
