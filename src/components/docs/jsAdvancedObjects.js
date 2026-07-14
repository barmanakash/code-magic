import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptAdvancedObjectsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Advanced Objects in JavaScript</DocTitle>

            <DocP>
                Beyond everyday object literals, JavaScript exposes a lower-level layer of control over how properties behave, how objects inherit, and even how fundamental operations like property access can be intercepted entirely.
            </DocP>

            <DocH2>Property Descriptors</DocH2>
            <DocP>
                Every object property has an underlying descriptor controlling its behavior — not just its value, but whether it can be changed, deleted, or shown up during iteration.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava" };

Object.getOwnPropertyDescriptor(user, "name");
// value: "Ava", writable: true, enumerable: true, configurable: true — the defaults

Object.defineProperty(user, "id", {
  value: 42,
  writable: false,      // cannot be reassigned
  enumerable: false,       // won't show up in for...in / Object.keys()
  configurable: false,        // cannot be deleted or redefined
});

user.id = 100;              // silently fails (or throws in strict mode) — not writable
Object.keys(user);            // ["name"] — 'id' is hidden from enumeration
delete user.id;                  // fails — not configurable

// Defining multiple properties at once
Object.defineProperties(user, {
  age: { value: 25, writable: true, enumerable: true },
  role: { value: "admin", writable: true, enumerable: true },
});`}
            />
            <DocNote tone="info">
                This is exactly how getters and setters work under the hood too — a descriptor can define `get`/`set` functions instead of a plain `value`, which is what class `get`/`set` syntax compiles down to.
            </DocNote>

            <DocH2>Object.create()</DocH2>
            <DocP>
                Creates a brand-new object with a specific prototype passed in directly, giving fine-grained control over inheritance without using classes or constructor functions at all.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const animalProto = {
  speak() {
    return \`\${this.name} makes a sound.\`;
  },
};

const dog = Object.create(animalProto); // dog's prototype is animalProto directly
dog.name = "Rex";
dog.speak(); // "Rex makes a sound." — inherited via the prototype chain

// Object.create(null) makes a truly "bare" object with NO prototype at all —
// no inherited toString, hasOwnProperty, etc. — useful as a clean dictionary/map
const dict = Object.create(null);
dict.toString; // undefined — nothing inherited, a genuinely empty object`}
            />

            <DocH2>Object.assign()</DocH2>
            <DocP>
                Copies the enumerable own properties from one or more source objects into a target object, commonly used for shallow merging and cloning.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const defaults = { theme: "light", fontSize: 14 };
const userPrefs = { theme: "dark" };

const merged = Object.assign({}, defaults, userPrefs); // { theme: "dark", fontSize: 14 }
// Later sources override earlier ones for matching keys — 'theme' from userPrefs wins

// Mutating the FIRST argument directly (be careful — this modifies 'defaults'!)
Object.assign(defaults, userPrefs);

// Shallow clone — same caveat as spread: nested objects are still shared by reference
const original = { name: "Ava", address: { city: "Delhi" } };
const clone = Object.assign({}, original);
clone.address === original.address; // true — same nested object, NOT a deep copy`}
            />
            <DocNote tone="warning">
                `Object.assign(target, ...sources)` mutates and returns `target` directly. Always pass an empty object literal as the first argument (as shown above) unless you specifically intend to mutate an existing object.
            </DocNote>

            <DocH2>Reflect API</DocH2>
            <DocP>
                `Reflect` is a built-in object providing methods that mirror many fundamental object operations (get, set, delete, define, etc.) as clean, consistent functions rather than operators or throwing behaviors — designed to pair naturally with `Proxy` traps.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava" };

Reflect.get(user, "name");             // "Ava" — equivalent to user.name
Reflect.set(user, "age", 25);            // true — equivalent to user.age = 25
Reflect.has(user, "name");                 // true — equivalent to "name" in user
Reflect.deleteProperty(user, "age");         // true — equivalent to delete user.age
Reflect.ownKeys(user);                          // ["name"] — includes Symbol keys too

// Cleaner error handling than the throwing behavior of Object.defineProperty
const success = Reflect.defineProperty(user, "id", { value: 1 });
if (!success) console.log("Failed to define property"); // returns false, doesn't throw`}
            />

            <DocH2>Proxy API</DocH2>
            <DocP>
                A `Proxy` wraps an object and lets you intercept and customize fundamental operations on it — reading a property, writing one, checking existence, and more — through a set of "trap" functions.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const user = { name: "Ava", age: 25 };

const loggedUser = new Proxy(user, {
  get(target, property) {
    console.log(\`Reading property: \${property}\`);
    return Reflect.get(target, property); // delegate to the default behavior
  },
  set(target, property, value) {
    console.log(\`Setting \${property} to \${value}\`);
    return Reflect.set(target, property, value);
  },
});

loggedUser.name;         // logs "Reading property: name", returns "Ava"
loggedUser.age = 26;        // logs "Setting age to 26", then actually sets it

// A common real-world use: validation
const validatedUser = new Proxy(user, {
  set(target, property, value) {
    if (property === "age" && value < 0) {
      throw new Error("Age cannot be negative");
    }
    return Reflect.set(target, property, value);
  },
});
validatedUser.age = -5; // throws: "Age cannot be negative"`}
            />
            <DocNote tone="info">
                `Proxy` and `Reflect` are designed to work together — `Reflect` gives you the correct default behavior for any trap you don't need to customize, so you rarely write a Proxy trap without calling the matching `Reflect` method inside it. Proxies power libraries like Vue 3's reactivity system and are also useful for API mocking, access logging, and runtime validation.
            </DocNote>
        </>
    );
}
