import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptCollectionsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Collections in JavaScript</DocTitle>

            <DocP>
                Beyond plain objects and arrays, ES6 introduced four specialized collection types — `Map`, `Set`, `WeakMap`, and `WeakSet` — each solving specific limitations of using a plain object as a makeshift key-value store.
            </DocP>

            <DocH2>Map</DocH2>
            <DocP>
                A `Map` holds key-value pairs where keys can be of ANY type (not just strings, unlike plain objects), and remembers the original insertion order.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const scores = new Map();

scores.set("Ava", 95);
scores.set("Ivy", 88);
scores.set(42, "numeric key works too"); // keys can be any type, not just strings

scores.get("Ava");        // 95
scores.has("Ivy");          // true
scores.delete("Ivy");
scores.size;                    // 2

// Iterating — preserves insertion order
for (const [name, score] of scores) {
  console.log(name, score);
}
scores.forEach((score, name) => console.log(name, score));

[...scores.keys()];    // ["Ava", 42]
[...scores.values()];    // [95, "numeric key works too"]
[...scores.entries()];     // [["Ava", 95], [42, "numeric key works too"]]

// Creating a Map from an array of pairs, or converting back
const fromArray = new Map([["a", 1], ["b", 2]]);
const backToArray = [...fromArray]; // [["a", 1], ["b", 2]]`}
            />
            <DocNote tone="info">
                Prefer `Map` over a plain object when: keys aren't known ahead of time, keys need to be non-string types (like objects or numbers), insertion order matters, or you need frequent additions/removals — Maps are optimized for that access pattern.
            </DocNote>

            <DocH2>Set</DocH2>
            <DocP>
                A `Set` stores a collection of unique values — any duplicate added is automatically ignored, using strict equality (with the exception that `NaN` is treated as equal to itself, unlike normal `===`).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const tags = new Set(["react", "js", "react"]); // duplicate "react" is dropped
tags.size; // 2

tags.add("css");
tags.has("js");         // true
tags.delete("css");
tags.clear();               // removes everything

// Iterating — preserves insertion order
for (const tag of tags) console.log(tag);

// A very common pattern: deduplicating an array
const numbers = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(numbers)]; // [1, 2, 3]

// ES2025 adds native Set composition methods
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
a.union(b);           // Set(4) {1, 2, 3, 4}
a.intersection(b);      // Set(2) {2, 3}
a.difference(b);           // Set(1) {1}`}
            />

            <DocH2>WeakMap</DocH2>
            <DocP>
                A `WeakMap` is like a `Map`, but its keys must be objects, and those keys are held "weakly" — meaning they don't prevent the garbage collector from reclaiming memory once nothing else references that object. It is also NOT iterable and has no `size` property.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const privateData = new WeakMap();

function createUser(name) {
  const user = { name };
  privateData.set(user, { loginAttempts: 0 }); // attach "private" metadata
  return user;
}

const user = createUser("Ava");
privateData.get(user); // { loginAttempts: 0 }

// When 'user' is no longer referenced anywhere else, both it AND its
// entry in privateData become eligible for garbage collection automatically —
// no manual cleanup needed, and no memory leak.`}
            />
            <DocNote tone="warning">
                Because `WeakMap` isn't iterable, you can't loop over it, get its size, or clear it entirely — this is an intentional trade-off that enables its garbage-collection behavior. Use it specifically for attaching metadata to objects you don't own or control the lifecycle of.
            </DocNote>

            <DocH2>WeakSet</DocH2>
            <DocP>
                A `WeakSet` is like a `Set`, but can only contain objects (not primitives), held weakly, and is also not iterable and has no `size` — commonly used to mark or track objects without leaking memory.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const processedItems = new WeakSet();

function processItem(item) {
  if (processedItems.has(item)) {
    console.log("Already processed, skipping");
    return;
  }
  // ...do the processing...
  processedItems.add(item);
}

const item1 = { id: 1 };
processItem(item1); // processes it
processItem(item1); // "Already processed, skipping"

// If 'item1' is later discarded and no longer referenced elsewhere,
// it's automatically removed from processedItems too via garbage collection.`}
            />

            <DocH2>Quick Comparison</DocH2>
            <DocList
                items={[
                    'Map: general-purpose key-value store, any key type, iterable, has size.',
                    'Set: collection of unique values, any value type, iterable, has size.',
                    'WeakMap: object-only keys, held weakly, NOT iterable, no size — for private/metadata attached to objects.',
                    'WeakSet: object-only values, held weakly, NOT iterable, no size — for tracking/marking objects without leaks.',
                ]}
            />
        </>
    );
}
