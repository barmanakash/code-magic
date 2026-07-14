import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptAsyncDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Asynchronous JavaScript</DocTitle>

            <DocP>
                JavaScript is single-threaded — it can only do one thing at a time. Asynchronous programming is how it handles slow operations (network requests, timers, file reads) without freezing the entire program while waiting for them to finish.
            </DocP>

            <DocH2>Callbacks</DocH2>
            <DocP>
                The original approach to async code: pass a function to be called once an operation completes.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function fetchUser(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Ava" });
  }, 1000);
}

fetchUser(1, (user) => {
  console.log(user.name); // "Ava" — logged after 1 second
});`}
            />

            <DocH2>Callback Hell</DocH2>
            <DocP>
                When multiple async operations depend on each other, nesting callbacks inside callbacks quickly becomes deeply indented and hard to read — this is commonly called "callback hell" or the "pyramid of doom".
            </DocP>
            <CodeBlock
                language="javascript"
                code={`getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      getLikes(comments[0].id, (likes) => {
        console.log(likes); // four levels deep and growing
        // error handling gets messy here too — each level needs its own checks
      });
    });
  });
});`}
            />
            <DocNote tone="warning">
                Callback hell isn't just ugly — it makes error handling inconsistent (each nested callback needs its own error check) and control flow hard to follow. Promises and async/await were introduced specifically to solve this.
            </DocNote>

            <DocH2>Promises</DocH2>
            <DocP>
                A Promise represents a value that may not be available yet — it starts in a "pending" state and eventually settles as either "fulfilled" (with a value) or "rejected" (with an error).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Ava" });
      } else {
        reject(new Error("Invalid id"));
      }
    }, 1000);
  });
}

fetchUser(1)
  .then((user) => console.log(user.name)) // "Ava"
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Request finished"));

// Chaining flattens what used to be nested callbacks
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((error) => console.log("Something failed:", error.message));`}
            />

            <DocH2>Promise Methods</DocH2>
            <DocP>Static utility methods on the `Promise` constructor for coordinating multiple promises at once.</DocP>
            <CodeBlock
                language="javascript"
                code={`// Waits for ALL to succeed; rejects immediately if any one rejects
Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
  .then((users) => console.log(users)); // array of all three results

// Waits for ALL to settle, regardless of success/failure — never rejects
Promise.allSettled([fetchUser(1), fetchUser(-1)])
  .then((results) => console.log(results));
  // [{ status: "fulfilled", value: ... }, { status: "rejected", reason: ... }]

// Resolves/rejects as soon as the FIRST promise settles (success or failure)
Promise.race([fetchUser(1), timeoutAfter(2000)])
  .then((result) => console.log(result));

// Resolves as soon as the FIRST promise SUCCEEDS; only rejects if ALL fail
Promise.any([fetchUser(-1), fetchUser(2)])
  .then((user) => console.log(user)); // the first successful one`}
            />

            <DocH2>async</DocH2>
            <DocP>
                The `async` keyword marks a function as always returning a Promise, and unlocks the ability to use `await` inside it — letting asynchronous code read like ordinary, synchronous, top-to-bottom code.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function getUserName() {
  return "Ava"; // automatically wrapped in a resolved Promise
}

getUserName().then((name) => console.log(name)); // "Ava"

async function fail() {
  throw new Error("Something broke"); // automatically becomes a rejected Promise
}
fail().catch((error) => console.log(error.message));`}
            />

            <DocH2>await</DocH2>
            <DocP>
                `await` pauses execution inside an `async` function until the given Promise settles, then returns its resolved value directly (or throws if it rejects) — no `.then()` chaining needed.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function loadUserProfile(id) {
  try {
    const user = await fetchUser(id);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return { user, posts, comments };
  } catch (error) {
    console.log("Failed to load profile:", error.message);
  }
}

loadUserProfile(1); // the same operation from "Callback Hell" above, now flat and readable`}
            />
            <DocNote tone="info">
                `await` only pauses the current `async` function — it does NOT block the rest of the program. Other code, other event handlers, and other unrelated async operations continue running normally while one function is awaiting a result.
            </DocNote>

            <DocH2>Event Loop</DocH2>
            <DocP>
                The event loop is the mechanism that lets JavaScript's single thread handle asynchronous operations. It continuously checks: is the call stack empty? If so, take the next task from a queue and push it onto the stack to run.
            </DocP>
            <DocList
                items={[
                    'Call Stack: where synchronous code actually executes, one function frame at a time.',
                    'Web APIs / Node APIs: where the browser/runtime handles things like timers and network requests OUTSIDE the main JS thread.',
                    'Callback Queues: where completed async callbacks wait their turn to be pushed back onto the call stack.',
                    'Event Loop: the traffic controller — it only moves a queued callback to the call stack once the stack is completely empty.',
                ]}
            />

            <DocH2>Microtasks</DocH2>
            <DocP>
                Microtasks are a high-priority queue — Promise `.then`/`.catch`/`.finally` callbacks and `async`/`await` continuations land here. The ENTIRE microtask queue is fully drained after every single synchronous task, before the event loop even looks at the next macrotask.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`console.log("1: sync");

Promise.resolve().then(() => console.log("3: microtask"));

console.log("2: sync");

// Output order: "1: sync", "2: sync", "3: microtask"
// Synchronous code always finishes first, THEN microtasks run`}
            />

            <DocH2>Macrotasks</DocH2>
            <DocP>
                Macrotasks (also called "tasks") are the lower-priority queue — `setTimeout`, `setInterval`, and I/O callbacks land here. Only ONE macrotask runs per event loop cycle, and the full microtask queue is drained before AND after it.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`console.log("1: sync");

setTimeout(() => console.log("4: macrotask"), 0);

Promise.resolve().then(() => console.log("3: microtask"));

console.log("2: sync");

// Output order: "1: sync", "2: sync", "3: microtask", "4: macrotask"
// Even with a 0ms delay, the macrotask always runs AFTER all pending microtasks`}
            />
            <DocNote tone="warning">
                This ordering — synchronous code, then all microtasks, then one macrotask, repeat — is one of the most common JavaScript interview topics precisely because it trips people up. Remember: Promises always jump the queue ahead of setTimeout, no matter how small the delay.
            </DocNote>
        </>
    );
}
