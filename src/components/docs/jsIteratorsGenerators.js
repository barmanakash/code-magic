import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptIteratorsGeneratorsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Iterators & Generators</DocTitle>

            <DocP>
                Iterators and generators are the mechanism behind JavaScript's `for...of` loops, spread syntax, and destructuring of arrays, strings, Maps, and Sets. Understanding them reveals how these "just work" for built-in types — and lets you build your own iterable custom objects.
            </DocP>

            <DocH2>Iterator Protocol</DocH2>
            <DocP>
                An object is an <em>iterator</em> if it has a `next()` method that returns an object shaped like `value` and `done`. An object is <em>iterable</em> if it has a method at the special key `Symbol.iterator` that returns an iterator. Arrays, strings, Maps, and Sets are all built-in iterables.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator](); // get the iterator manually

iterator.next(); // { value: 10, done: false }
iterator.next(); // { value: 20, done: false }
iterator.next(); // { value: 30, done: false }
iterator.next(); // { value: undefined, done: true }

// for...of, spread, and destructuring all use this protocol internally
for (const n of arr) console.log(n);
const [first, ...rest] = arr;`}
            />

            <DocH2>Building a Custom Iterable</DocH2>
            <DocP>
                Any plain object can become iterable by manually implementing `Symbol.iterator`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const n of range) console.log(n); // 1, 2, 3, 4, 5
[...range]; // [1, 2, 3, 4, 5] — spread works too, since 'range' is now iterable`}
            />
            <DocNote tone="info">
                Writing an iterator by hand like this works, but is verbose and error-prone to track state correctly. Generators solve exactly this problem with much simpler syntax.
            </DocNote>

            <DocH2>Generators</DocH2>
            <DocP>
                A generator is a special kind of function, declared with `function*`, that can pause and resume its execution. Calling a generator function doesn't run its body immediately — it returns a generator object, which is both an iterator AND an iterable.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator(); // nothing has run yet — just returns a generator object

gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }

// Generators are directly iterable, so for...of and spread work automatically
for (const n of numberGenerator()) console.log(n); // 1, 2, 3
[...numberGenerator()]; // [1, 2, 3]`}
            />

            <DocH2>yield</DocH2>
            <DocP>
                The `yield` keyword pauses the generator function, sending a value out to whoever called `next()`. Execution resumes right after that `yield` the next time `next()` is called.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function* rangeGenerator(from, to) {
  for (let i = from; i <= to; i++) {
    yield i; // pause here, hand 'i' out, resume on the next next() call
  }
}

[...rangeGenerator(1, 5)]; // [1, 2, 3, 4, 5] — MUCH simpler than the manual iterator above

// yield can also RECEIVE a value passed into next()
function* conversation() {
  const name = yield "What's your name?";
  const age = yield \`Hi \${name}, how old are you?\`;
  return \`\${name} is \${age} years old.\`;
}

const convo = conversation();
convo.next();          // { value: "What's your name?", done: false }
convo.next("Ava");       // { value: "Hi Ava, how old are you?", done: false }
convo.next("25");          // { value: "Ava is 25 years old.", done: true }

// yield* delegates to another iterable/generator entirely
function* combined() {
  yield* [1, 2];
  yield* [3, 4];
}
[...combined()]; // [1, 2, 3, 4]`}
            />
            <DocNote tone="warning">
                Regular generators produce values lazily — a value is only computed when `next()` is actually called, not all at once upfront. This makes generators well-suited for representing infinite sequences that would be impossible to build as a plain array.
            </DocNote>

            <DocH2>for...of with Generators</DocH2>
            <DocP>
                `for...of` works seamlessly with any generator, and even lazily-produced infinite sequences can be safely consumed as long as you `break` out at some point.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function* infiniteCounter() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

for (const n of infiniteCounter()) {
  if (n > 5) break; // essential — this generator never finishes on its own
  console.log(n); // 1, 2, 3, 4, 5
}

// A practical real-world use: a paginated data fetcher, lazily yielding one page at a time
function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

for (const page of paginate([1, 2, 3, 4, 5, 6, 7], 3)) {
  console.log(page); // [1, 2, 3] then [4, 5, 6] then [7]
}`}
            />
        </>
    );
}
