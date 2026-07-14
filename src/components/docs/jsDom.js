import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptDomDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">The DOM in JavaScript</DocTitle>

            <DocP>
                The DOM (Document Object Model) is the browser's in-memory, tree-shaped representation of an HTML page. JavaScript uses the DOM API to read and modify that tree, which is how a webpage becomes interactive rather than static.
            </DocP>

            <DocH2>DOM Tree</DocH2>
            <DocP>
                Every HTML element becomes a "node" in the DOM tree, nested according to how the HTML was written. The `document` object is the root entry point to this entire tree.
            </DocP>
            <CodeBlock
                language="html"
                filename="index.html"
                code={`<!-- This HTML... -->
<body>
  <div id="app">
    <h1>Hello</h1>
    <p>Welcome!</p>
  </div>
</body>

<!-- ...becomes this DOM tree:
document
 └─ html
     └─ body
         └─ div#app
             ├─ h1 ("Hello")
             └─ p ("Welcome!")
-->`}
            />

            <DocH2>Selecting Elements</DocH2>
            <DocP>Before you can change anything, you need to select the element(s) you want to work with.</DocP>
            <CodeBlock
                language="javascript"
                code={`document.getElementById("app");            // single element by id
document.getElementsByClassName("card");      // live HTMLCollection by class
document.getElementsByTagName("li");            // live HTMLCollection by tag

document.querySelector(".card");                  // first match, any CSS selector
document.querySelectorAll(".card");                 // static NodeList, all matches

// querySelectorAll results are iterable directly
document.querySelectorAll(".card").forEach(card => console.log(card));`}
            />
            <DocNote tone="info">
                `querySelector`/`querySelectorAll` accept any valid CSS selector (classes, ids, attributes, combinators), making them the most flexible and generally preferred choice over the older `getElementBy...` methods.
            </DocNote>

            <DocH2>Creating Elements</DocH2>
            <DocP>New elements are built in memory first, then explicitly inserted into the document.</DocP>
            <CodeBlock
                language="javascript"
                code={`const newItem = document.createElement("li");
newItem.textContent = "New task";
newItem.classList.add("task-item");

const list = document.querySelector("#task-list");
list.appendChild(newItem);        // adds it as the last child
list.prepend(newItem);              // adds it as the first child

// Inserting relative to another element
const referenceItem = document.querySelector(".first-item");
referenceItem.before(newItem);        // insert immediately before
referenceItem.after(newItem);           // insert immediately after`}
            />

            <DocH2>Updating Elements</DocH2>
            <DocP>Elements can be updated by changing their text content, HTML, or individual properties.</DocP>
            <CodeBlock
                language="javascript"
                code={`const heading = document.querySelector("h1");

heading.textContent = "New Heading";          // sets plain text (safe, no HTML parsing)
heading.innerHTML = "New <em>Heading</em>";     // sets raw HTML (parses tags — be careful with user input!)

const input = document.querySelector("input");
input.value = "prefilled text";                     // for form fields specifically`}
            />
            <DocNote tone="warning">
                Never set `innerHTML` using untrusted user input directly — it can execute injected scripts (a cross-site scripting/XSS vulnerability). Use `textContent` for plain text, or sanitize the input first if HTML is genuinely needed.
            </DocNote>

            <DocH2>Removing Elements</DocH2>
            <CodeBlock
                language="javascript"
                code={`const item = document.querySelector(".task-item");

item.remove();                       // modern, direct way to remove an element

// Older pattern, still seen in legacy code
item.parentNode.removeChild(item);`}
            />

            <DocH2>Traversing DOM</DocH2>
            <DocP>Once you have one element, you can navigate to its relatives using these properties.</DocP>
            <CodeBlock
                language="javascript"
                code={`const el = document.querySelector(".item");

el.parentElement;         // the direct parent element
el.children;                 // live HTMLCollection of direct child elements
el.firstElementChild;          // first child element
el.lastElementChild;             // last child element
el.nextElementSibling;             // next sibling at the same level
el.previousElementSibling;           // previous sibling at the same level

el.closest(".card");                   // nearest ancestor (or self) matching a selector`}
            />

            <DocH2>Attributes</DocH2>
            <DocP>HTML attributes (like `src`, `href`, `data-*`) can be read and written directly.</DocP>
            <CodeBlock
                language="javascript"
                code={`const link = document.querySelector("a");

link.getAttribute("href");              // reads the attribute value
link.setAttribute("href", "/about");      // sets/overwrites the attribute
link.removeAttribute("target");             // removes an attribute entirely
link.hasAttribute("href");                    // true

// Custom data-* attributes have a dedicated, convenient API
const card = document.querySelector(".card");
card.dataset.userId;                            // reads data-user-id="..."
card.dataset.userId = "42";                        // sets data-user-id="42"`}
            />

            <DocH2>Classes</DocH2>
            <DocP>The `classList` API is the standard way to manage an element's CSS classes.</DocP>
            <CodeBlock
                language="javascript"
                code={`const box = document.querySelector(".box");

box.classList.add("active");         // adds a class
box.classList.remove("hidden");        // removes a class
box.classList.toggle("open");            // adds if absent, removes if present
box.classList.contains("active");          // true/false check
box.classList.replace("old", "new");         // swap one class for another`}
            />

            <DocH2>Styles</DocH2>
            <DocP>Inline styles can be set directly through the `style` property, though toggling a CSS class is usually the better long-term approach.</DocP>
            <CodeBlock
                language="javascript"
                code={`const box = document.querySelector(".box");

box.style.color = "red";
box.style.backgroundColor = "black";       // camelCase for hyphenated CSS properties
box.style.setProperty("--main-color", "blue"); // for CSS custom properties (variables)

// Reading the FINAL computed style (including from stylesheets, not just inline)
const computed = window.getComputedStyle(box);
computed.color;`}
            />
            <DocNote tone="info">
                Prefer toggling CSS classes (via `classList`) over setting individual `style` properties directly. Keeping styling rules in your CSS file — and only switching classes in JavaScript — keeps concerns separated and is much easier to maintain.
            </DocNote>
        </>
    );
}
