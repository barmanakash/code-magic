import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptErrorHandlingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Error Handling in JavaScript</DocTitle>

            <DocP>
                Error handling lets your program respond gracefully to unexpected failures — invalid input, failed network requests, bugs — instead of crashing outright. JavaScript provides the `try/catch/finally` construct along with a built-in hierarchy of Error types.
            </DocP>

            <DocH2>try</DocH2>
            <DocP>
                The `try` block wraps code that might throw an error. If an error occurs anywhere inside it, execution immediately jumps to the matching `catch` block.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`try {
  const result = JSON.parse("{ invalid json }");
  console.log(result); // never reached — parsing throws before this line
} catch (error) {
  console.log("Something went wrong:", error.message);
}`}
            />

            <DocH2>catch</DocH2>
            <DocP>
                The `catch` block runs only if an error was thrown inside the corresponding `try` block, receiving the error object as its parameter.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`try {
  undefinedFunction(); // ReferenceError
} catch (error) {
  console.log(error.name);       // "ReferenceError"
  console.log(error.message);      // "undefinedFunction is not defined"
}

// The parameter is optional (ES2019+) if you don't need the error object
try {
  riskyOperation();
} catch {
  console.log("Operation failed, using fallback.");
}`}
            />

            <DocH2>finally</DocH2>
            <DocP>
                The `finally` block always runs after `try`/`catch`, regardless of whether an error was thrown or caught — ideal for cleanup code that must run no matter what.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function readFile() {
  console.log("Opening file...");
  try {
    throw new Error("File not found");
  } catch (error) {
    console.log("Caught:", error.message);
  } finally {
    console.log("Closing file..."); // always runs, error or not
  }
}
readFile();
// "Opening file..."
// "Caught: File not found"
// "Closing file..."`}
            />

            <DocH2>throw</DocH2>
            <DocP>
                `throw` manually raises an error, immediately stopping normal execution and passing control to the nearest enclosing `catch` block. You can throw any value, but throwing an `Error` object (or subclass) is strongly recommended.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.log(error.message); // "Cannot divide by zero"
}`}
            />
            <DocNote tone="warning">
                Avoid `throw "some string"` or `throw 404`. Non-Error values don't carry a stack trace or a consistent shape, making them much harder to debug than a proper `Error` object.
            </DocNote>

            <DocH2>Custom Errors</DocH2>
            <DocP>
                You can extend the built-in `Error` class to create your own error types, giving callers a reliable way to distinguish between different failure categories using `instanceof`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative", "age");
  }
  return age;
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(\`Validation failed on field "\${error.field}": \${error.message}\`);
  } else {
    throw error; // re-throw errors we don't know how to handle
  }
}`}
            />

            <DocH2>Error Object</DocH2>
            <DocP>
                The built-in `Error` object (and its specialized subclasses) carries structured information about what went wrong.
            </DocP>
            <DocList
                items={[
                    'error.name: the type of error, e.g. "TypeError", "RangeError", "SyntaxError".',
                    'error.message: a human-readable description of what went wrong.',
                    'error.stack: a stack trace string showing where the error was thrown (non-standard, but supported virtually everywhere).',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`try {
  null.someProperty; // accessing a property on null
} catch (error) {
  console.log(error.name);    // "TypeError"
  console.log(error.message);  // "Cannot read properties of null (reading 'someProperty')"
}

// Common built-in error subtypes
new TypeError("wrong type");     // invalid type used, e.g. calling a non-function
new RangeError("out of range");    // number outside an allowed range, e.g. array(-1)
new SyntaxError("bad syntax");       // invalid code, often from JSON.parse
new ReferenceError("not defined");     // referencing a variable that doesn't exist`}
            />
            <DocNote tone="info">
                Async code needs its own error handling approach — wrap `await` calls in `try/catch`, or attach a `.catch()` handler to Promise chains. Errors thrown inside a synchronous `try` block will not be caught by code awaiting an unrelated Promise.
            </DocNote>
        </>
    );
}
