import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptTimersDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Timers in JavaScript</DocTitle>

            <DocP>
                Timers let you schedule code to run after a delay, or repeatedly at a fixed interval, without blocking the rest of your program. They're part of the browser (and Node.js) environment, not the core ECMAScript language itself, and work hand-in-hand with the event loop.
            </DocP>

            <DocH2>setTimeout()</DocH2>
            <DocP>
                Schedules a function to run once, after a specified delay (in milliseconds). Execution continues immediately past the `setTimeout` call — it does not pause the program while waiting.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End"); // logs BEFORE the timeout callback — setTimeout doesn't block

// Passing extra arguments to the callback
setTimeout((name) => {
  console.log(\`Hello, \${name}!\`);
}, 1000, "Ava");`}
            />
            <DocNote tone="info">
                A delay of `0` doesn't mean "run immediately" — it means "run as soon as possible after the current call stack finishes and the event loop gets to it," which is still after any synchronous code that follows.
            </DocNote>

            <DocH2>setInterval()</DocH2>
            <DocP>
                Repeatedly runs a function every N milliseconds, indefinitely, until explicitly stopped.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Tick:", count);

  if (count === 5) {
    clearInterval(intervalId); // stop after 5 ticks — see clearInterval below
  }
}, 1000);`}
            />
            <DocNote tone="warning">
                `setInterval` does not account for how long the callback itself takes to run — if the callback is slow, intervals can queue up or overlap unpredictably. For precise, self-correcting repeated timing, a recursive `setTimeout` pattern is often more reliable.
            </DocNote>

            <DocH2>clearTimeout()</DocH2>
            <DocP>
                Cancels a pending `setTimeout` before it has a chance to run, using the ID returned by `setTimeout`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const timeoutId = setTimeout(() => {
  console.log("This will never run");
}, 5000);

clearTimeout(timeoutId); // cancelled before the 5 seconds pass

// Common real-world pattern: debouncing
let debounceId;
function handleInput(value) {
  clearTimeout(debounceId); // cancel the previous pending call
  debounceId = setTimeout(() => {
    console.log("Searching for:", value);
  }, 300);
}`}
            />

            <DocH2>clearInterval()</DocH2>
            <DocP>
                Stops a repeating `setInterval` from continuing to fire, using the ID returned by `setInterval`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const intervalId = setInterval(() => {
  console.log("This repeats every second");
}, 1000);

// Stop it after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);`}
            />
            <DocNote tone="warning">
                Always clear intervals you no longer need — especially in components/pages that can be destroyed while a `setInterval` is still running (like a React component's cleanup on unmount). Forgetting to do so is a very common source of memory leaks and callbacks firing on stale/removed elements.
            </DocNote>

            <DocH2>requestAnimationFrame()</DocH2>
            <DocP>
                Schedules a callback to run right before the browser's next repaint — the correct, performance-friendly way to drive JavaScript-based animations, synchronized with the display's refresh rate (typically ~60fps).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const box = document.querySelector(".box");
let position = 0;

function animate() {
  position += 2;
  box.style.transform = \`translateX(\${position}px)\`;

  if (position < 300) {
    requestAnimationFrame(animate); // schedule the next frame
  }
}

requestAnimationFrame(animate); // kick off the animation

// Cancelling an animation
const frameId = requestAnimationFrame(animate);
cancelAnimationFrame(frameId);`}
            />
            <DocNote tone="info">
                Prefer `requestAnimationFrame` over `setInterval`/`setTimeout` for any visual animation — it automatically pauses when the tab is in the background (saving battery/CPU) and syncs perfectly with the browser's paint cycle, avoiding the jank that fixed-interval timers can produce.
            </DocNote>
        </>
    );
}
