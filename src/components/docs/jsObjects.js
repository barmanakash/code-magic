import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptObjectsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Objects in JavaScript</DocTitle>

            <DocP>
                Objects are collections of key-value pairs and form the backbone of nearly everything in JavaScript — arrays, functions, dates, and even class instances are all specialized kinds of objects under the hood.
            </DocP>

            <DocH2>Creating Objects</DocH2>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25 };      // object literal — most common way
const empty = {};

const fromConstructor = new Object();          // rarely used
Object.assign({}, empty, { role: "admin" });      // merges into a new object

// Object.create — sets a specific prototype
const proto = { greet() { return "hi"; } };
const obj = Object.create(proto);
obj.greet(); // "hi" — inherited from proto`}
            />

            <DocH2>Properties</DocH2>
            <DocP>Properties are the key-value pairs stored on an object. Keys are always strings or Symbols, even if written without quotes.</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25, "full-name": "Ava Smith" };

user.name;              // "Ava" — dot notation (key must be a valid identifier)
user["full-name"];       // "Ava Smith" — bracket notation (required for special keys)

const key = "age";
user[key];                 // 25 — bracket notation allows dynamic keys

user.email = "ava@test.com"; // adding a new property
delete user.age;               // removing a property

"name" in user;                  // true
user.hasOwnProperty("name");      // true — checks own properties only, not inherited ones`}
            />

            <DocH2>Methods</DocH2>
            <DocP>A method is simply a property whose value is a function — it lets an object "do" something using its own data via `this`.</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = {
  name: "Ava",
  greet() {                 // ES6 shorthand method syntax
    return \`Hi, I'm \${this.name}\`;
  },
  greetOld: function () {     // equivalent, older function-expression syntax
    return \`Hi, I'm \${this.name}\`;
  },
};

user.greet(); // "Hi, I'm Ava"`}
            />
            <DocNote tone="warning">
                Avoid arrow functions for object methods that need `this` — arrow functions don't have their own `this`, so `this` inside them refers to the surrounding (often unrelated) scope, not the object.
            </DocNote>

            <DocH2>Object Methods</DocH2>
            <DocP>Static utility methods available on the global `Object` constructor for inspecting and transforming objects.</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25 };

Object.keys(user);         // ["name", "age"]
Object.values(user);         // ["Ava", 25]
Object.entries(user);          // [["name", "Ava"], ["age", 25]]

Object.fromEntries([["a", 1], ["b", 2]]); // { a: 1, b: 2 } — reverse of entries()

Object.assign({}, user, { role: "admin" }); // merges into a new object

Object.keys(user).length;   // 2 — common way to count properties`}
            />

            <DocH2>Destructuring</DocH2>
            <DocP>Destructuring extracts properties from an object into standalone variables in a single, concise expression.</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25, role: "admin" };

const { name, age } = user;             // name = "Ava", age = 25
const { name: userName } = user;         // rename while destructuring
const { country = "Unknown" } = user;      // default value if property is missing
const { name: n, ...rest } = user;           // rest = { age: 25, role: "admin" }

// Common in function parameters
function printUser({ name, age }) {
  console.log(\`\${name} is \${age}\`);
}
printUser(user);

// Nested destructuring
const { address: { city } } = { address: { city: "Delhi" } };`}
            />

            <DocH2>Spread</DocH2>
            <DocP>The spread operator (`...`) expands an object's own enumerable properties into a new object — most commonly used for copying and merging.</DocP>
            <CodeBlock
                language="javascript"
                code={`const base = { name: "Ava", age: 25 };

const copy = { ...base };                     // shallow copy
const updated = { ...base, age: 26 };            // override a specific property
const merged = { ...base, ...{ role: "admin" } };  // merge two objects

// Later keys win on conflicts
{ ...{ a: 1 }, ...{ a: 2 } }; // { a: 2 }`}
            />
            <DocNote tone="info">
                Both object spread (`...obj`) and `Object.assign()` create <em>shallow</em> copies — nested objects/arrays are still shared by reference. For a true deep copy, use `structuredClone(obj)` (built into modern browsers and Node.js).
            </DocNote>

            <DocH2>Object.freeze()</DocH2>
            <DocP>Makes an object fully immutable — no properties can be added, removed, or modified (in non-strict mode, these attempts fail silently; in strict mode, they throw).</DocP>
            <CodeBlock
                language="javascript"
                code={`const config = Object.freeze({ apiUrl: "https://api.example.com" });

config.apiUrl = "https://changed.com"; // silently ignored (or throws in strict mode)
config.newProp = "value";               // also ignored — cannot add new properties
delete config.apiUrl;                     // also ignored — cannot delete either

Object.isFrozen(config); // true`}
            />
            <DocNote tone="warning">
                `Object.freeze()` is shallow — it only freezes the top-level properties. If a frozen object contains a nested object, that nested object can still be mutated freely.
            </DocNote>

            <DocH2>Object.seal()</DocH2>
            <DocP>A lighter restriction than freeze — sealing prevents adding or removing properties, but existing properties can still be reassigned to new values.</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = Object.seal({ name: "Ava", age: 25 });

user.age = 26;         // allowed — modifying an existing property works
user.email = "x@x.com"; // ignored — cannot add new properties
delete user.name;         // ignored — cannot delete properties

Object.isSealed(user); // true`}
            />
        </>
    );
}
