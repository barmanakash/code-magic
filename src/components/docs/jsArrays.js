import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptArraysDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Arrays in JavaScript</DocTitle>

            <DocP>
                An array is an ordered, index-based collection of values. Arrays in JavaScript are technically a specialized kind of object, with numeric keys starting at `0` and a large built-in set of methods for searching, transforming, and iterating over their contents.
            </DocP>

            <DocH2>Creating Arrays</DocH2>
            <CodeBlock
                language="javascript"
                code={`const fruits = ["apple", "banana", "cherry"]; // array literal — the preferred way
const empty = [];
const mixed = [1, "two", true, null, { a: 1 }]; // arrays can hold any type

const fromConstructor = new Array(3);            // array with length 3, all empty slots
const filled = new Array(1, 2, 3);                 // [1, 2, 3] — different behavior with multiple args!

const filledZeros = Array(5).fill(0);                // [0, 0, 0, 0, 0]
const range = Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]`}
            />
            <DocNote tone="warning">
                `new Array(3)` creates an array with `length: 3` but no actual elements (a "sparse" array), while `new Array(1, 2, 3)` creates `[1, 2, 3]`. This inconsistency is why array literal syntax `[]` is strongly preferred over the `Array` constructor.
            </DocNote>

            <DocH2>Accessing Elements</DocH2>
            <CodeBlock
                language="javascript"
                code={`const fruits = ["apple", "banana", "cherry"];

fruits[0];          // "apple" — zero-indexed
fruits[2];           // "cherry"
fruits[fruits.length - 1]; // "cherry" — common way to get the last item
fruits.at(-1);         // "cherry" — modern, cleaner way to access from the end
fruits[10];              // undefined — out-of-range access doesn't throw`}
            />

            <DocH2>Updating Arrays</DocH2>
            <CodeBlock
                language="javascript"
                code={`const fruits = ["apple", "banana", "cherry"];

fruits[1] = "blueberry";     // direct index assignment: ["apple", "blueberry", "cherry"]

fruits.push("date");           // adds to the end
fruits.pop();                    // removes & returns the last element
fruits.unshift("apricot");         // adds to the beginning
fruits.shift();                      // removes & returns the first element

fruits.splice(1, 1, "kiwi", "mango"); // remove 1 item at index 1, insert two new ones
fruits.length = 2;                       // truncates the array to 2 elements`}
            />

            <DocH2>Array Methods</DocH2>
            <DocP>The most commonly used array methods, grouped by purpose:</DocP>
            <CodeBlock
                language="javascript"
                code={`const nums = [5, 1, 4, 2, 3];

// Transformation — return a NEW array, do not mutate the original
nums.map(n => n * 2);              // [10, 2, 8, 4, 6]
nums.filter(n => n > 2);            // [5, 4, 3]
nums.slice(1, 3);                     // [1, 4] — extracts a portion

// Reduction — collapse the array into a single value
nums.reduce((sum, n) => sum + n, 0); // 15

// Searching
nums.find(n => n > 3);                 // 5 — first matching element
nums.findIndex(n => n > 3);              // 0 — index of first match
nums.includes(4);                          // true
nums.indexOf(4);                             // 2

// Checking
nums.some(n => n > 4);                        // true — at least one matches
nums.every(n => n > 0);                        // true — all match

// Ordering — MUTATE the original array
nums.sort((a, b) => a - b);                     // [1, 2, 3, 4, 5]
nums.reverse();                                   // [5, 4, 3, 2, 1]

// Combining
[1, 2].concat([3, 4]);                              // [1, 2, 3, 4]
[1, 2].join("-");                                     // "1-2"
[[1, 2], [3, [4, 5]]].flat(2);                          // [1, 2, 3, 4, 5]`}
            />
            <DocNote tone="info">
                Key distinction: `map`, `filter`, `slice`, and `concat` return a new array and leave the original untouched. `sort`, `reverse`, `splice`, `push`, and `pop` mutate the original array in place — a common source of bugs if you forget which category a method falls into.
            </DocNote>

            <DocH2>Iteration</DocH2>
            <DocP>There are several ways to loop through an array, each suited to different needs.</DocP>
            <CodeBlock
                language="javascript"
                code={`const fruits = ["apple", "banana", "cherry"];

// for loop — full control over index
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of — cleanest way to iterate over values
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach — functional style, no return value
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

// entries() — iterate with both index and value
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}`}
            />

            <DocH2>Multidimensional Arrays</DocH2>
            <DocP>JavaScript doesn't have true multidimensional arrays — instead, you nest arrays inside arrays.</DocP>
            <CodeBlock
                language="javascript"
                code={`const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

grid[1][2];       // 6 — row 1, column 2

// Iterating a 2D array
for (const row of grid) {
  for (const cell of row) {
    console.log(cell);
  }
}

// Flattening back to a single dimension
grid.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
            />

            <DocH2>Sparse Arrays</DocH2>
            <DocP>
                A sparse array is one with "holes" — indices that were never assigned a value, as opposed to explicitly containing `undefined`. Many array methods treat holes differently from actual `undefined` values.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const sparse = [1, , 3]; // hole at index 1
sparse.length;              // 3
sparse[1];                    // undefined — reading a hole returns undefined
1 in sparse;                    // false — but the key genuinely doesn't exist

sparse.forEach(n => console.log(n)); // skips the hole entirely — only logs 1 and 3
sparse.map(n => n * 2);                // [2, <1 empty item>, 6] — holes are preserved

const dense = [1, undefined, 3]; // NOT sparse — explicit undefined, not a hole
1 in dense;                        // true`}
            />
            <DocNote tone="warning">
                Sparse arrays are usually created by accident — e.g. `new Array(5)`, `arr.length = 10`, or `delete arr[2]`. They behave inconsistently across array methods and are best avoided in application code.
            </DocNote>
        </>
    );
}
