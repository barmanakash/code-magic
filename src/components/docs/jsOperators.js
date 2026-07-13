import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptOperatorsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Operators</DocTitle>

            <DocP>
                Operators are special symbols or keywords used to perform operations on values (called operands) — from simple math to comparisons, logic, and object manipulation. JavaScript has a rich set of operators covering nearly every category of computation.
            </DocP>

            <DocH2>Arithmetic Operators</DocH2>
            <DocP>Perform mathematical calculations.</DocP>
            <CodeBlock
                language="javascript"
                code={`5 + 3;   // 8   addition
5 - 3;   // 2   subtraction
5 * 3;   // 15  multiplication
5 / 3;   // 1.666... division
5 % 3;   // 2   remainder (modulo)
5 ** 2;  // 25  exponentiation
5++;     // increment (postfix)
--5;     // decrement (prefix)`}
            />

            <DocH2>Assignment Operators</DocH2>
            <DocP>Assign a value to a variable, optionally combined with another operation.</DocP>
            <CodeBlock
                language="javascript"
                code={`let x = 10;
x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2
x **= 3; // x = x ** 3 → 8`}
            />

            <DocH2>Comparison Operators</DocH2>
            <DocP>Compare two values and return a boolean result.</DocP>
            <CodeBlock
                language="javascript"
                code={`5 == "5";   // true  — loose equality (type coercion happens)
5 === "5";  // false — strict equality (no type coercion)
5 != "5";   // false — loose inequality
5 !== "5";  // true  — strict inequality
5 > 3;      // true
5 < 3;      // false
5 >= 5;     // true
5 <= 4;     // false`}
            />
            <DocNote tone="info">
                Best practice: always prefer `===` and `!==` over `==` and `!=` to avoid unexpected type coercion bugs.
            </DocNote>

            <DocH2>Logical Operators</DocH2>
            <DocP>Combine or invert boolean expressions.</DocP>
            <CodeBlock
                language="javascript"
                code={`true && false;   // false — AND: both must be true
true || false;   // true  — OR: at least one must be true
!true;            // false — NOT: inverts the boolean

// Short-circuit evaluation is commonly used for defaults/guards
const name = userInput || "Guest";     // fallback if userInput is falsy
isLoggedIn && showDashboard();           // only runs if isLoggedIn is true`}
            />

            <DocH2>Bitwise Operators</DocH2>
            <DocP>Operate on the individual bits of 32-bit integer representations of numbers. Rarely used in everyday app code, but common in low-level or performance-critical logic.</DocP>
            <CodeBlock
                language="javascript"
                code={`5 & 1;   // 1  AND
5 | 1;   // 5  OR
5 ^ 1;   // 4  XOR
~5;      // -6 NOT
5 << 1;  // 10 left shift
5 >> 1;  // 2  right shift
5 >>> 1; // 2  unsigned right shift`}
            />

            <DocH2>Ternary Operator</DocH2>
            <DocP>A compact one-line shorthand for a simple if/else, in the form `condition ? valueIfTrue : valueIfFalse`.</DocP>
            <CodeBlock
                language="javascript"
                code={`const age = 20;
const status = age >= 18 ? "adult" : "minor"; // "adult"`}
            />

            <DocH2>Nullish Coalescing (??)</DocH2>
            <DocP>Returns the right-hand value only if the left-hand value is `null` or `undefined` — unlike `||`, it does not treat other falsy values (`0`, `""`, `false`) as missing.</DocP>
            <CodeBlock
                language="javascript"
                code={`const count = 0;
count || 10; // 10  — 0 is falsy, so || falls through (often wrong here!)
count ?? 10; // 0   — 0 is not null/undefined, so ?? keeps it correctly`}
            />

            <DocH2>Optional Chaining (?.)</DocH2>
            <DocP>Safely accesses deeply nested properties, short-circuiting to `undefined` instead of throwing if an intermediate value is `null`/`undefined`.</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { profile: null };

user.profile.avatar;   // TypeError: Cannot read properties of null
user.profile?.avatar;  // undefined — no error

user.getName?.();      // safely calls getName only if it exists as a function`}
            />

            <DocH2>Spread (...)</DocH2>
            <DocP>Expands an iterable (array, string) or an object's own properties into individual elements — commonly used for copying, merging, and passing arguments.</DocP>
            <CodeBlock
                language="javascript"
                code={`const nums = [1, 2, 3];
const copy = [...nums, 4, 5];       // [1, 2, 3, 4, 5]

const base = { name: "Ava" };
const merged = { ...base, age: 25 }; // { name: "Ava", age: 25 }

Math.max(...nums); // 3 — spreads array items as individual arguments`}
            />

            <DocH2>Rest (...)</DocH2>
            <DocP>Uses the same `...` syntax but in the opposite direction — it collects multiple remaining elements into a single array or object, typically in function parameters or destructuring.</DocP>
            <CodeBlock
                language="javascript"
                code={`function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10 — all args collected into 'numbers' array

const { name, ...rest } = { name: "Ava", age: 25, role: "admin" };
// rest = { age: 25, role: "admin" }`}
            />

            <DocH2>typeof</DocH2>
            <DocP>Returns a string indicating the type of a value.</DocP>
            <CodeBlock
                language="javascript"
                code={`typeof "hello";    // "string"
typeof 42;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" (a known quirk)
typeof {};           // "object"
typeof [];           // "object" (arrays are objects)
typeof function(){}; // "function"`}
            />

            <DocH2>instanceof</DocH2>
            <DocP>Checks whether an object's prototype chain includes a given constructor's prototype — commonly used to verify what "kind" of object something is.</DocP>
            <CodeBlock
                language="javascript"
                code={`const arr = [1, 2, 3];
arr instanceof Array;   // true
arr instanceof Object;  // true — arrays are also objects

class Animal {}
const dog = new Animal();
dog instanceof Animal;  // true`}
            />

            <DocH2>in</DocH2>
            <DocP>Checks whether a property exists in an object (including inherited properties from its prototype chain).</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25 };
"name" in user;    // true
"email" in user;   // false
"toString" in user; // true — inherited from Object.prototype`}
            />

            <DocH2>delete</DocH2>
            <DocP>Removes a property from an object entirely (not just sets it to undefined).</DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25 };
delete user.age;
console.log(user);       // { name: "Ava" }
console.log("age" in user); // false`}
            />

            <DocH2>void</DocH2>
            <DocP>Evaluates an expression and always returns `undefined`, discarding the actual result. Rarely needed in modern code, but historically used in `javascript:void(0)` links to prevent page navigation.</DocP>
            <CodeBlock
                language="javascript"
                code={`void 0;              // undefined
void (console.log("side effect still runs")); // logs, then returns undefined`}
            />
        </>
    );
}
