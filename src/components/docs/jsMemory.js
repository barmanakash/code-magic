import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptMemoryDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Memory Management in JavaScript</DocTitle>

            <DocP>
                JavaScript handles memory allocation and cleanup automatically, but understanding how it works underneath — and how to avoid common leak patterns — is essential for building applications that stay fast and stable over long sessions.
            </DocP>

            <DocH2>Stack</DocH2>
            <DocP>
                The call stack is a fixed-size region of memory that tracks function calls and stores primitive values (numbers, strings, booleans, etc.) directly. It follows a strict last-in-first-out order.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function multiply(a, b) {
  return a * b;
}
function square(n) {
  return multiply(n, n); // a new "frame" is pushed onto the stack here
}
square(5);
// Stack grows: square(5) → multiply(5, 5) → returns 25 → frames pop off in reverse order

let x = 10;   // primitive — the actual value 10 lives directly on the stack
let y = x;      // y gets its OWN independent copy of the value
y = 20;
console.log(x); // 10 — unaffected, since x and y are separate values`}
            />
            <DocNote tone="warning">
                The stack has a limited size. Deep or infinite recursion without a proper base case exhausts it, throwing a "Maximum call stack size exceeded" `RangeError`.
            </DocNote>

            <DocH2>Heap</DocH2>
            <DocP>
                The heap is a much larger, less structured region of memory used to store objects, arrays, and functions — anything whose size isn't known ahead of time or can grow dynamically. Variables on the stack hold only a reference (pointer) to the actual data living on the heap.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const obj1 = { value: 10 }; // the object itself lives on the heap;
                              // 'obj1' on the stack just holds a reference to it

const obj2 = obj1;             // obj2 gets a COPY of the reference, not the object
obj2.value = 20;
console.log(obj1.value);          // 20 — both variables point to the SAME heap object

const obj3 = { value: 10 };          // a completely separate object on the heap
console.log(obj1 === obj3);              // false — different references, even with identical contents`}
            />

            <DocH2>Garbage Collection</DocH2>
            <DocP>
                Garbage collection automatically reclaims heap memory that is no longer reachable from any active part of the program, freeing developers from manually allocating and deallocating memory (unlike languages such as C).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let user = { name: "Ava" }; // an object is created, referenced by 'user'

user = null; // 'user' no longer references the object —
             // if nothing else references it either, it becomes eligible for collection

function createTemp() {
  const temp = { data: "temporary" }; // exists only inside this function
  return "done";
} // once createTemp() returns, 'temp' is unreachable and eventually collected`}
            />
            <DocList
                items={[
                    'Reachability: an object is kept alive as long as it is "reachable" — reference-able starting from the global object, currently executing functions, or their local variables and closures.',
                    'Mark-and-sweep: the algorithm most modern engines use — periodically "mark" everything reachable from root references, then "sweep" (free) everything unmarked.',
                    'Garbage collection timing is NOT deterministic or immediately predictable — you cannot force it to run at a specific moment, and it typically runs during otherwise-idle time to minimize impact on performance.',
                ]}
            />

            <DocH2>Memory Leaks</DocH2>
            <DocP>
                A memory leak happens when memory that's no longer actually needed remains reachable, preventing garbage collection from reclaiming it — causing memory usage to grow over time, eventually slowing down or crashing long-running applications.
            </DocP>
            <DocH3>Common Leak Patterns</DocH3>
            <CodeBlock
                language="javascript"
                code={`// 1. Forgotten timers/intervals still referencing data
function startPolling(data) {
  setInterval(() => {
    console.log(data); // 'data' stays alive forever if this interval is never cleared
  }, 1000);
}
// Fix: always store the interval id and clearInterval() when it's no longer needed

// 2. Event listeners never removed
function attachHandler(el) {
  const largeData = new Array(1000000).fill("x");
  el.addEventListener("click", () => console.log(largeData.length));
}
// Fix: removeEventListener() when the element/component is destroyed

// 3. Accidental global variables
function leaky() {
  accidentalGlobal = "I'm never cleaned up"; // missing let/const/var — becomes global
}
// Fix: always declare variables, and use "use strict" to catch this automatically

// 4. Closures unintentionally holding onto large data
function setupHandler(hugeArray) {
  return function onClick() {
    console.log("clicked"); // this closure keeps ALL of 'hugeArray' alive,
                               // even though it never actually uses it
  };
}
// Fix: only capture the specific values you actually need, not the whole enclosing scope`}
            />
            <DocNote tone="info">
                Browser DevTools' Memory panel (heap snapshots, allocation timelines) is the standard tool for diagnosing real leaks — take a snapshot, perform an action repeatedly, take another snapshot, and compare which objects keep accumulating instead of being collected.
            </DocNote>
        </>
    );
}
