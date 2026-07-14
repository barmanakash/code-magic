import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptJsonDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JSON in JavaScript</DocTitle>

            <DocP>
                JSON (JavaScript Object Notation) is a lightweight, text-based data format for exchanging structured data. Despite its name and syntactic origins in JavaScript object literals, JSON is language-independent and is the de facto standard format used by virtually every modern web API.
            </DocP>

            <DocH2>JSON Syntax</DocH2>
            <DocP>
                JSON syntax is a strict subset of JavaScript's object/array literal syntax, with a few important restrictions that make it stricter than plain JavaScript.
            </DocP>
            <CodeBlock
                language="json"
                filename="user.json"
                code={`{
  "name": "Ava",
  "age": 25,
  "isActive": true,
  "address": null,
  "roles": ["admin", "editor"],
  "profile": {
    "bio": "Frontend developer",
    "joined": "2024-01-15"
  }
}`}
            />
            <DocList
                items={[
                    'Keys must always be double-quoted strings — single quotes and unquoted keys are invalid.',
                    'String values must also use double quotes — single quotes are not allowed.',
                    'Only these value types are valid: string, number, boolean, null, object, and array. Dates, functions, undefined, and Symbols have no JSON representation.',
                    'Trailing commas are not allowed (unlike modern JavaScript object/array literals).',
                    'Comments are not supported anywhere in JSON.',
                ]}
            />

            <DocH2>JSON.parse()</DocH2>
            <DocP>
                Converts a JSON-formatted string into a real JavaScript value (object, array, or primitive) that you can work with directly.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const jsonString = '{"name":"Ava","age":25,"roles":["admin","editor"]}';

const user = JSON.parse(jsonString);
user.name;         // "Ava" — now a real JavaScript object, not a string
user.roles[0];        // "admin"

// Invalid JSON throws a SyntaxError
JSON.parse("{ invalid json }"); // SyntaxError: Unexpected token i in JSON

// A "reviver" function can transform values during parsing
const withDates = JSON.parse(
  '{"joined":"2024-01-15"}',
  (key, value) => (key === "joined" ? new Date(value) : value)
);
withDates.joined instanceof Date; // true`}
            />
            <DocNote tone="warning">
                `JSON.parse()` throws a `SyntaxError` on malformed input. Always wrap it in a `try/catch` when parsing data from an external, untrusted source (like a network response or user-provided file).
            </DocNote>

            <DocH2>JSON.stringify()</DocH2>
            <DocP>
                Converts a JavaScript value into a JSON-formatted string, ready to be sent over the network, saved to storage, or logged.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25, roles: ["admin", "editor"] };

JSON.stringify(user); // '{"name":"Ava","age":25,"roles":["admin","editor"]}'

// Pretty-printing with indentation (useful for logs/debugging)
JSON.stringify(user, null, 2);
/*
{
  "name": "Ava",
  "age": 25,
  "roles": [
    "admin",
    "editor"
  ]
}
*/

// A "replacer" array whitelists which keys get included
JSON.stringify(user, ["name", "age"]); // '{"name":"Ava","age":25}'

// A "replacer" function can transform values before stringifying
JSON.stringify(user, (key, value) =>
  typeof value === "number" ? value * 2 : value
);`}
            />
            <DocList
                items={[
                    'Functions, undefined, and Symbol values are silently DROPPED from objects during stringify.',
                    'Dates are automatically converted to ISO 8601 strings via their built-in toJSON() method.',
                    'NaN and Infinity are converted to null, since JSON has no representation for them.',
                    'Circular references (an object referencing itself) throw a TypeError.',
                ]}
            />

            <DocH2>Working with APIs</DocH2>
            <DocP>
                JSON and the Fetch API work together constantly — sending JavaScript data as JSON in a request body, and parsing JSON responses back into usable JavaScript values.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function createUser(userData) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData), // JS object → JSON string, for sending
  });

  const createdUser = await response.json(); // JSON string → JS object, for use
  return createdUser;
}

createUser({ name: "Ava", email: "ava@example.com" });

// A common utility: deep-cloning a plain object via a JSON round-trip
const original = { name: "Ava", nested: { role: "admin" } };
const clone = JSON.parse(JSON.stringify(original)); // deep copy, but loses functions/dates/undefined`}
            />
            <DocNote tone="info">
                The `JSON.parse(JSON.stringify(obj))` deep-clone trick is popular for its simplicity, but it silently drops functions, `undefined` values, and converts Dates to strings. For anything beyond plain data, prefer `structuredClone(obj)`, which is built-in, faster, and preserves far more types correctly.
            </DocNote>
        </>
    );
}
