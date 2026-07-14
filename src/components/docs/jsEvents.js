import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptEventsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Events in JavaScript</DocTitle>

            <DocP>
                Events are how the browser tells your code that something happened — a click, a keypress, a page load, a form submission. JavaScript's event system lets you "listen" for these moments and run code in response.
            </DocP>

            <DocH2>Event Handling</DocH2>
            <DocP>
                The modern, recommended way to respond to events is `addEventListener()`, which lets you attach multiple handlers to the same element without overwriting each other.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const button = document.querySelector("#submit-btn");

button.addEventListener("click", function () {
  console.log("Button was clicked!");
});

// Arrow function version
button.addEventListener("click", () => {
  console.log("Clicked again — a second, independent listener");
});

// Removing a listener requires a named function reference
function handleClick() {
  console.log("Handled once");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);`}
            />
            <DocNote tone="warning">
                Avoid inline HTML handlers like `onclick="doSomething()"` and the older `element.onclick = fn` style — both only allow a single handler per event and mix logic into markup. `addEventListener()` is the standard modern approach.
            </DocNote>

            <DocH2>Event Object</DocH2>
            <DocP>
                Every event handler automatically receives an `event` object containing details about what happened — which element triggered it, what key was pressed, the cursor position, and more.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`button.addEventListener("click", (event) => {
  console.log(event.type);          // "click"
  console.log(event.target);          // the exact element that was clicked
  console.log(event.currentTarget);     // the element the listener is attached to
  console.log(event.clientX, event.clientY); // cursor position
});

document.addEventListener("keydown", (event) => {
  console.log(event.key);       // e.g. "Enter", "a", "Escape"
  console.log(event.ctrlKey);     // true if Ctrl was held
});`}
            />

            <DocH2>Bubbling</DocH2>
            <DocP>
                By default, most events "bubble" — after triggering on the target element, the same event fires again on each ancestor, all the way up to `document`. This lets a parent element react to events that originated in its children.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// HTML structure: <div id="outer"><button id="inner">Click me</button></div>

document.querySelector("#outer").addEventListener("click", () => {
  console.log("Outer div handler ran");
});

document.querySelector("#inner").addEventListener("click", () => {
  console.log("Inner button handler ran");
});

// Clicking the button logs BOTH, in this order:
// "Inner button handler ran"
// "Outer div handler ran"  — bubbles up to the parent`}
            />

            <DocH2>Capturing</DocH2>
            <DocP>
                Capturing is the opposite phase — events travel <em>downward</em> from `document` to the target first, before the bubbling phase happens. You opt into it by passing `capture: true` (or just `true`) as the third argument to `addEventListener`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`document.querySelector("#outer").addEventListener(
  "click",
  () => console.log("Outer — capturing phase"),
  { capture: true } // runs during the DOWNWARD capturing phase
);

document.querySelector("#inner").addEventListener("click", () =>
  console.log("Inner — target phase")
);

// Clicking the button now logs, in this order:
// "Outer — capturing phase"  — travels down first
// "Inner — target phase"`}
            />
            <DocNote tone="info">
                The three phases of any event, in order: capturing (document down to target) → target (the element itself) → bubbling (target back up to document). Capturing is rarely used in everyday code but is useful when a parent needs to intercept an event before a child gets a chance to handle it.
            </DocNote>

            <DocH2>Delegation</DocH2>
            <DocP>
                Event delegation takes advantage of bubbling: instead of attaching a listener to every individual child element, you attach a single listener to a shared parent and check `event.target` to determine which child was actually interacted with. This is more memory-efficient and automatically works for elements added later.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// HTML: <ul id="list"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

document.querySelector("#list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});

// This works even for <li> elements added to the list AFTER this listener was set up —
// no need to attach a new listener to each new item individually.`}
            />

            <DocH2>preventDefault()</DocH2>
            <DocP>
                Stops the browser's default behavior for an event — for example, preventing a form from actually submitting, or a link from navigating away.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`document.querySelector("#myForm").addEventListener("submit", (event) => {
  event.preventDefault(); // stops the page from reloading/navigating
  console.log("Form submission intercepted — handle it with JavaScript instead");
});

document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault(); // stops navigation to the link's href
  console.log("Link click intercepted");
});`}
            />

            <DocH2>stopPropagation()</DocH2>
            <DocP>
                Stops an event from continuing to bubble (or capture) further — preventing ancestor elements' listeners for the same event from being triggered at all.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`document.querySelector("#inner").addEventListener("click", (event) => {
  event.stopPropagation(); // the outer div's click listener will NOT run
  console.log("Inner button handler ran");
});

document.querySelector("#outer").addEventListener("click", () => {
  console.log("This will never log if the button is clicked directly");
});`}
            />
            <DocNote tone="warning">
                `preventDefault()` and `stopPropagation()` do two completely different things and are often confused. `preventDefault()` stops the browser's built-in behavior (like navigation or form submission) but still lets the event bubble normally. `stopPropagation()` stops the event from bubbling/capturing further but has no effect on the browser's default behavior.
            </DocNote>
        </>
    );
}
