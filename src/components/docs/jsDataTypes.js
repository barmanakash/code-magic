import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptDataTypesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Data Types</DocTitle>

            <DocP>
                JavaScript is dynamically typed — a variable's type is determined by the value it currently holds, and can change over time. Every value in JavaScript falls into one of two broad categories: <strong>primitive</strong> types (stored by value) and <strong>non-primitive</strong> types (stored by reference).
            </DocP>

            <DocH2>Primitive Types</DocH2>
            <DocP>
                Primitives are immutable — once created, their value cannot be changed (operations on them always produce a new value). They are compared and copied by value.
            </DocP>

            <DocH3>String</DocH3>
            <DocP>Represents textual data, written with single quotes, double quotes, or backticks (template literals, which allow interpolation).</DocP>
            <CodeBlock
                language="javascript"
                code={`const name = "Ava";
const greeting = 'Hello';
const message = \`\${greeting}, \${name}!\`; // "Hello, Ava!"
typeof name; // "string"`}
            />

            <DocH3>Number</DocH3>
            <DocP>Represents both integers and floating-point numbers using the IEEE 754 double-precision format. There is no separate "integer" type.</DocP>
            <CodeBlock
                language="javascript"
                code={`const age = 25;
const price = 19.99;
const notANumber = NaN;      // result of an invalid math operation
const infinity = Infinity;
typeof age; // "number"`}
            />

            <DocH3>BigInt</DocH3>
            <DocP>Represents integers of arbitrary precision, beyond the safe limit of the Number type (`Number.MAX_SAFE_INTEGER`). Created by appending `n` to an integer literal.</DocP>
            <CodeBlock
                language="javascript"
                code={`const big = 9007199254740993n;
const alsoBig = BigInt(9007199254740993);
typeof big; // "bigint"
// Note: BigInt cannot be mixed with Number in arithmetic directly`}
            />

            <DocH3>Boolean</DocH3>
            <DocP>Represents a logical value: `true` or `false`. Commonly the result of comparisons and logical expressions.</DocP>
            <CodeBlock
                language="javascript"
                code={`const isActive = true;
const isDone = 5 > 10; // false
typeof isActive; // "boolean"`}
            />

            <DocH3>Undefined</DocH3>
            <DocP>Represents a variable that has been declared but has not yet been assigned a value. It is also the automatic return value of functions with no explicit `return`.</DocP>
            <CodeBlock
                language="javascript"
                code={`let x;
console.log(x);       // undefined
typeof x;               // "undefined"`}
            />

            <DocH3>Null</DocH3>
            <DocP>Represents the intentional absence of any value — explicitly set by a developer to indicate "no value here". Notably, `typeof null` returns `"object"`, a long-standing quirk in the language.</DocP>
            <CodeBlock
                language="javascript"
                code={`let user = null; // explicitly "no user yet"
typeof user;       // "object" (a famous JavaScript bug kept for compatibility)`}
            />

            <DocH3>Symbol</DocH3>
            <DocP>Represents a unique and immutable value, often used as a hidden or collision-free key for object properties.</DocP>
            <CodeBlock
                language="javascript"
                code={`const id1 = Symbol("id");
const id2 = Symbol("id");
id1 === id2; // false — every Symbol is unique, even with the same description

const user = {
  name: "Ava",
  [id1]: "hidden-metadata",
};`}
            />

            <DocH2>Non-Primitive Types</DocH2>
            <DocP>
                Non-primitives (also called reference types) are mutable and are stored/compared by reference, not by value — two objects with identical contents are still considered different unless they point to the exact same location in memory.
            </DocP>

            <DocH3>Object</DocH3>
            <DocP>A collection of key-value pairs, the foundation of nearly everything in JavaScript (arrays, functions, and dates are all technically objects too).</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25 };
typeof user; // "object"`}
            />

            <DocH3>Array</DocH3>
            <DocP>An ordered, index-based list of values. Technically a specialized object with numeric keys and built-in methods for iteration and manipulation.</DocP>
            <CodeBlock
                language="javascript"
                code={`const colors = ["red", "green", "blue"];
colors[0]; // "red"
Array.isArray(colors); // true`}
            />

            <DocH3>Function</DocH3>
            <DocP>A callable, first-class object — functions can be stored in variables, passed as arguments, and returned from other functions.</DocP>
            <CodeBlock
                language="javascript"
                code={`function add(a, b) {
  return a + b;
}
typeof add; // "function"`}
            />

            <DocH3>Date</DocH3>
            <DocP>Represents a single moment in time, stored internally as the number of milliseconds since the Unix epoch (Jan 1, 1970).</DocP>
            <CodeBlock
                language="javascript"
                code={`const now = new Date();
const specific = new Date("2026-01-01");
now.getFullYear(); // e.g. 2026`}
            />

            <DocH3>Map</DocH3>
            <DocP>A collection of key-value pairs, similar to a plain Object, but keys can be of <em>any</em> type (not just strings/symbols), and insertion order is preserved.</DocP>
            <CodeBlock
                language="javascript"
                code={`const scores = new Map();
scores.set("Ava", 95);
scores.set("Ivy", 88);
scores.get("Ava"); // 95
scores.size;         // 2`}
            />

            <DocH3>Set</DocH3>
            <DocP>A collection of unique values — duplicates are automatically ignored on insertion.</DocP>
            <CodeBlock
                language="javascript"
                code={`const ids = new Set([1, 2, 2, 3]);
ids.size;        // 3 (duplicate 2 was ignored)
ids.has(2);      // true`}
            />

            <DocH3>WeakMap</DocH3>
            <DocP>Like a Map, but keys must be objects, and those keys are held "weakly" — meaning they don't prevent garbage collection. Not iterable, making it ideal for storing private data tied to an object's lifecycle.</DocP>
            <CodeBlock
                language="javascript"
                code={`const cache = new WeakMap();
const obj = {};
cache.set(obj, "some private metadata");
cache.get(obj); // "some private metadata"
// When 'obj' is no longer referenced elsewhere, it (and its entry) can be garbage collected`}
            />

            <DocH3>WeakSet</DocH3>
            <DocP>Like a Set, but can only contain objects, held weakly, and is not iterable — commonly used to track object membership without leaking memory.</DocP>
            <CodeBlock
                language="javascript"
                code={`const visited = new WeakSet();
const page = {};
visited.add(page);
visited.has(page); // true`}
            />

            <DocNote tone="info">
                Quick way to check a value's type: use the `typeof` operator for primitives, but for arrays, `null`, and other objects, prefer `Array.isArray()`, strict equality checks against `null`, or `Object.prototype.toString.call(value)` for more precise results.
            </DocNote>
        </>
    );
}
