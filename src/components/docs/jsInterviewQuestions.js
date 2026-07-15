import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptInterviewQuestionsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Interview Questions</DocTitle>

            <DocP>
                A curated set of questions commonly asked in JavaScript interviews, organized by difficulty and format — conceptual questions, questions asking you to write code, "predict the output" puzzles, and scenario-based problem solving.
            </DocP>

            <DocH2>Beginner</DocH2>

            <DocH3>What is the difference between let, const, and var?</DocH3>
            <DocP>
                `var` is function-scoped and hoisted with an initial value of `undefined`. `let` and `const` are block-scoped and remain in the Temporal Dead Zone until declared. `const` additionally cannot be reassigned after its initial value (though objects/arrays it holds can still be mutated).
            </DocP>

            <DocH3>What is the difference between null and undefined?</DocH3>
            <DocP>
                `undefined` means a variable has been declared but not yet assigned a value — it's the language's own default. `null` is an intentional, explicit value a developer assigns to represent "no value here". `null == undefined` is true, but `null === undefined` is false.
            </DocP>

            <DocH3>What are truthy and falsy values?</DocH3>
            <DocP>
                Falsy values are the eight specific values that evaluate to `false` in a boolean context: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Everything else — including empty arrays/objects and the string "0" — is truthy.
            </DocP>

            <DocH2>Intermediate</DocH2>

            <DocH3>Explain closures with an example.</DocH3>
            <DocP>
                A closure is formed when an inner function retains access to variables from its outer function's scope, even after the outer function has finished executing.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function makeCounter() {
  let count = 0;
  return () => ++count;
}
const counter = makeCounter();
counter(); // 1
counter(); // 2 — 'count' persists between calls, private to this closure`}
            />

            <DocH3>What is event delegation, and why use it?</DocH3>
            <DocP>
                Event delegation attaches a single listener to a shared parent element instead of individual listeners on every child, relying on event bubbling and checking `event.target` to identify which child was actually interacted with. It's more memory-efficient and automatically works for elements added later.
            </DocP>

            <DocH3>What's the difference between Promise.all and Promise.allSettled?</DocH3>
            <DocP>
                `Promise.all` resolves with all results only if every promise succeeds — it rejects immediately as soon as any one promise rejects. `Promise.allSettled` always resolves once every promise has settled, returning the status (fulfilled or rejected) of each one individually, never short-circuiting on failure.
            </DocP>

            <DocH2>Advanced</DocH2>

            <DocH3>Explain the event loop, and why setTimeout(fn, 0) doesn't run immediately.</DocH3>
            <DocP>
                JavaScript is single-threaded, using an event loop to handle async work. Synchronous code runs first on the call stack. Once the stack is empty, the ENTIRE microtask queue (Promise callbacks) is drained before the event loop picks up even one macrotask (like a `setTimeout` callback) — so a `setTimeout(fn, 0)` callback always runs after all currently pending synchronous code and microtasks, never truly "immediately".
            </DocP>

            <DocH3>What is the difference between deep and shallow copying, and how do you do each?</DocH3>
            <DocP>
                A shallow copy duplicates only the top-level properties — nested objects/arrays are still shared by reference with the original. A deep copy recursively duplicates everything, so nested structures are fully independent.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const original = { name: "Ava", address: { city: "Delhi" } };

const shallow = { ...original }; // or Object.assign({}, original)
shallow.address === original.address; // true — same nested object!

const deep = structuredClone(original); // built-in, preferred modern approach
deep.address === original.address; // false — fully independent copy`}
            />

            <DocH3>Explain prototypal inheritance and the prototype chain.</DocH3>
            <DocP>
                Every JavaScript object has an internal link to another object (its prototype). When a property isn't found on the object itself, JavaScript automatically looks up the prototype chain — object to its prototype, to that prototype's prototype, and so on — until it's found or the chain ends at `null`. Class syntax with `extends` builds this chain automatically under the hood.
            </DocP>

            <DocH2>Coding Questions</DocH2>

            <DocH3>Write a function to reverse a string.</DocH3>
            <CodeBlock
                language="javascript"
                code={`function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello"); // "olleh"`}
            />

            <DocH3>Write a function to check if a string is a palindrome.</DocH3>
            <CodeBlock
                language="javascript"
                code={`function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
isPalindrome("A man a plan a canal Panama"); // true`}
            />

            <DocH3>Write a function to flatten a nested array without using Array.flat().</DocH3>
            <CodeBlock
                language="javascript"
                code={`function flatten(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}
flatten([1, [2, [3, 4], 5], 6]); // [1, 2, 3, 4, 5, 6]`}
            />

            <DocH3>Write a debounce function from scratch.</DocH3>
            <CodeBlock
                language="javascript"
                code={`function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}`}
            />

            <DocH2>Output Questions</DocH2>
            <DocP>
                "Predict the output" questions test how well you understand hoisting, closures, coercion, and the event loop — reasoning through them line by line is the key skill being tested.
            </DocP>

            <DocH3>Question 1</DocH3>
            <CodeBlock
                language="javascript"
                code={`console.log(1 + "1");
console.log(1 - "1");
console.log([] + []);
console.log([] + {});
// Answer:
// "11"   — number coerced to string, then concatenated
// 0        — string coerced to number for subtraction
// ""         — both arrays coerce to empty strings, concatenated
// "[object Object]" — array coerces to "", object coerces to its string tag`}
            />

            <DocH3>Question 2</DocH3>
            <CodeBlock
                language="javascript"
                code={`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Answer: 3, 3, 3
// 'var' is function-scoped, so all three callbacks share the SAME 'i',
// which has already reached 3 by the time any callback actually runs.`}
            />

            <DocH3>Question 3</DocH3>
            <CodeBlock
                language="javascript"
                code={`console.log("1: sync");
setTimeout(() => console.log("2: macrotask"), 0);
Promise.resolve().then(() => console.log("3: microtask"));
console.log("4: sync");
// Answer, in order: "1: sync", "4: sync", "3: microtask", "2: macrotask"
// Sync code always runs first, then ALL microtasks, THEN the next macrotask.`}
            />

            <DocH2>Scenario-Based Questions</DocH2>

            <DocH3>You need to fetch data for 5 different users. How would you fetch them in parallel and handle the case where some might fail?</DocH3>
            <CodeBlock
                language="javascript"
                code={`async function getAllUsers(ids) {
  const results = await Promise.allSettled(ids.map((id) => fetchUser(id)));

  const succeeded = results
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length) {
    console.log(\`\${failed.length} user(s) failed to load\`);
  }

  return succeeded;
}
// Promise.allSettled ensures ONE failure doesn't stop the others from being returned`}
            />

            <DocH3>A search input is making an API call on every keystroke, causing lag. How would you fix it?</DocH3>
            <DocP>
                Debounce the input handler so the API call only fires after the user pauses typing for a short window (e.g. 300ms), instead of firing on every single keystroke. This dramatically reduces unnecessary network requests and re-renders.
            </DocP>

            <DocH3>Your app's memory usage keeps climbing the longer a user stays on a single-page application. How would you investigate?</DocH3>
            <DocList
                items={[
                    'Take heap snapshots in DevTools\' Memory panel before and after repeating an action several times, and compare which object types keep growing.',
                    'Check for uncleared intervals/timeouts left running after a component/page is torn down.',
                    'Check for event listeners attached but never removed when elements are destroyed.',
                    'Check for closures unintentionally holding references to large data structures longer than needed.',
                ]}
            />

            <DocNote tone="info">
                For interviews specifically: it's usually more valuable to explain your REASONING out loud as you work through a question — including trade-offs and edge cases you're considering — than to silently arrive at a correct final answer.
            </DocNote>
        </>
    );
}
