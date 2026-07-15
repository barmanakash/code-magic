import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptCheatSheetDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Cheat Sheet</DocTitle>

            <DocP>
                A fast, scannable reference covering the syntax you reach for most often — useful for a quick refresher rather than deep explanations (see the dedicated topic pages for those).
            </DocP>

            <DocH2>Variables</DocH2>
            <CodeBlock
                language="javascript"
                code={`let x = 5;           // block-scoped, reassignable
const y = 10;           // block-scoped, cannot be reassigned
var z = 15;                // function-scoped, avoid in modern code

let a, b, c;                 // multiple declarations
const { name, age } = user;    // destructuring an object
const [first, second] = arr;     // destructuring an array`}
            />

            <DocH2>Operators</DocH2>
            <CodeBlock
                language="javascript"
                code={`+  -  *  /  %  **          // arithmetic
=  +=  -=  *=  /=            // assignment
===  !==  ==  !=               // comparison (prefer === / !==)
>  <  >=  <=                     // relational
&&  ||  !                          // logical
??                                    // nullish coalescing (null/undefined only)
?.                                      // optional chaining
condition ? a : b                        // ternary
...arr                                     // spread / rest
typeof x                                     // type check
a instanceof B                                 // instance check`}
            />

            <DocH2>Arrays</DocH2>
            <CodeBlock
                language="javascript"
                code={`const arr = [1, 2, 3];

arr.push(4);          arr.pop();
arr.unshift(0);          arr.shift();
arr.slice(1, 3);           arr.splice(1, 1, "x");

arr.map(n => n * 2);         arr.filter(n => n > 1);
arr.reduce((s, n) => s + n, 0); arr.find(n => n > 1);
arr.includes(2);                arr.indexOf(2);
arr.sort((a, b) => a - b);        arr.reverse();
arr.forEach(n => console.log(n));  arr.join(", ");
Array.isArray(arr);                  Array.from({ length: 3 }, (_, i) => i);`}
            />

            <DocH2>Objects</DocH2>
            <CodeBlock
                language="javascript"
                code={`const obj = { name: "Ava", age: 25 };

obj.name;              obj["name"];
Object.keys(obj);         Object.values(obj);
Object.entries(obj);         Object.assign({}, obj, { role: "admin" });
{ ...obj, role: "admin" };     // spread merge

const { name, ...rest } = obj;   // destructure + rest
Object.freeze(obj);                 // make immutable
Object.keys(obj).length;               // property count`}
            />

            <DocH2>Functions</DocH2>
            <CodeBlock
                language="javascript"
                code={`function add(a, b) { return a + b; }         // declaration — hoisted
const add2 = function (a, b) { return a + b; }; // expression — not hoisted
const add3 = (a, b) => a + b;                     // arrow — implicit return

function greet(name = "Guest") { ... }              // default parameter
function sum(...nums) { ... }                          // rest parameter

fn.call(thisArg, arg1, arg2);
fn.apply(thisArg, [arg1, arg2]);
const bound = fn.bind(thisArg);`}
            />

            <DocH2>Loops</DocH2>
            <CodeBlock
                language="javascript"
                code={`for (let i = 0; i < 5; i++) { ... }
while (condition) { ... }
do { ... } while (condition);

for (const item of array) { ... }        // values — arrays, strings, Maps, Sets
for (const key in object) { ... }          // keys — plain objects (avoid on arrays)

break;      // exit the loop
continue;      // skip to next iteration`}
            />

            <DocH2>DOM</DocH2>
            <CodeBlock
                language="javascript"
                code={`document.querySelector(".item");         document.querySelectorAll(".item");
document.getElementById("app");

el.textContent = "text";         el.innerHTML = "<b>html</b>";
el.classList.add("active");        el.classList.remove("hidden");
el.classList.toggle("open");         el.setAttribute("href", "/x");

const newEl = document.createElement("div");
parent.appendChild(newEl);             el.remove();
el.closest(".card");                     el.parentElement;`}
            />

            <DocH2>Events</DocH2>
            <CodeBlock
                language="javascript"
                code={`el.addEventListener("click", handler);
el.removeEventListener("click", handler);

function handler(event) {
  event.target;             event.preventDefault();
  event.stopPropagation();
}

// Delegation — listen on a parent, check event.target
parent.addEventListener("click", (e) => {
  if (e.target.matches(".item")) { ... }
});`}
            />

            <DocH2>Async</DocH2>
            <CodeBlock
                language="javascript"
                code={`fetch(url).then(res => res.json()).then(data => ...).catch(err => ...);

async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
}

Promise.all([p1, p2]);       Promise.allSettled([p1, p2]);
Promise.race([p1, p2]);         Promise.any([p1, p2]);
setTimeout(fn, 1000);              setInterval(fn, 1000);`}
            />

            <DocH2>ES6+</DocH2>
            <CodeBlock
                language="javascript"
                code={`\`Hello, \${name}!\`;                        // template literals
const { a, b } = obj;                       // destructuring
class Foo extends Bar { constructor() { super(); } } // classes
import { thing } from "./file.js";              // modules
export default thing;
async function fn() { await x(); }                 // async/await
[...arr1, ...arr2];                                   // spread
new Map();  new Set();                                  // collections
a ?? b;   a?.b;                                            // nullish/optional chaining
class Foo { #private = 1; }                                   // private fields`}
            />

            <DocH2>Browser APIs</DocH2>
            <CodeBlock
                language="javascript"
                code={`localStorage.setItem("k", "v");     localStorage.getItem("k");
sessionStorage.setItem("k", "v");

navigator.geolocation.getCurrentPosition(cb);
navigator.clipboard.writeText("text");

new IntersectionObserver(cb).observe(el);
new ResizeObserver(cb).observe(el);
new MutationObserver(cb).observe(el, { childList: true });

window.location.href;         history.pushState({}, "", "/path");
performance.now();`}
            />

            <DocNote tone="info">
                This sheet intentionally trades depth for speed — for the "why" behind any of these, check the corresponding full topic page in this documentation.
            </DocNote>
        </>
    );
}
