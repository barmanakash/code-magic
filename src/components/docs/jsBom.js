import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptBomDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">The BOM in JavaScript</DocTitle>

            <DocP>
                The BOM (Browser Object Model) is the set of objects the browser exposes for interacting with itself — the window, the URL, browser history, and the device — as opposed to the DOM, which represents the page's content. There's no official BOM standard the way there is for the DOM, but every browser implements a largely consistent set of these objects.
            </DocP>

            <DocH2>window</DocH2>
            <DocP>
                `window` is the global object in a browser environment — every global variable, function, and even the DOM's `document` object is actually a property of `window`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`window.innerWidth;   // viewport width in pixels
window.innerHeight;    // viewport height in pixels

window.open("https://example.com", "_blank"); // opens a new tab/window
window.close();                                  // closes the current window (scripted tabs only)

// Timers live on window too
window.setTimeout(() => console.log("later"), 1000);
window.setInterval(() => console.log("repeats"), 1000);

// Global variables become properties of window
var greeting = "hi";
console.log(window.greeting); // "hi"`}
            />

            <DocH2>document</DocH2>
            <DocP>
                `document` represents the loaded page itself and is the entry point into the DOM tree — it's technically part of the DOM, but accessed as a property of `window`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`document.title;                 // the page's <title>
document.title = "New Title";      // updates the browser tab title

document.URL;                        // current page URL as a string
document.referrer;                     // URL of the page that linked here
document.readyState;                     // "loading", "interactive", or "complete"`}
            />

            <DocH2>location</DocH2>
            <DocP>
                `window.location` (or just `location`) represents the current URL and provides methods to navigate to a new one.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`location.href;         // full URL, e.g. "https://example.com/page?id=5"
location.protocol;       // "https:"
location.host;             // "example.com"
location.pathname;           // "/page"
location.search;               // "?id=5"
location.hash;                    // "#section"

location.href = "https://example.com"; // navigate to a new page
location.reload();                        // reload the current page
location.assign("/new-page");               // navigate, adds to history
location.replace("/new-page");                // navigate WITHOUT adding to history`}
            />

            <DocH2>history</DocH2>
            <DocP>
                `window.history` lets you programmatically move through the user's browser session history, or manipulate the URL without a full page reload (commonly used by client-side routers).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`history.back();          // equivalent to clicking the browser's back button
history.forward();          // equivalent to clicking forward
history.go(-2);                // go back 2 entries in history

history.length;                  // number of entries in the session history

// Used by routers (like React Router) to change the URL without a reload
history.pushState({ page: 1 }, "", "/new-url");
history.replaceState({ page: 1 }, "", "/replaced-url");`}
            />

            <DocH2>navigator</DocH2>
            <DocP>
                `navigator` provides information about the browser and device the page is running on.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`navigator.userAgent;    // browser/OS identification string
navigator.language;        // e.g. "en-US"
navigator.onLine;             // true/false — network connectivity status
navigator.platform;              // e.g. "Win32", "MacIntel" (increasingly deprecated/spoofed)

navigator.clipboard.writeText("copied text"); // modern Clipboard API
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});`}
            />

            <DocH2>screen</DocH2>
            <DocP>
                `window.screen` provides information about the user's physical display, distinct from the browser window itself.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`screen.width;      // full screen width in pixels
screen.height;       // full screen height in pixels
screen.availWidth;      // width excluding OS taskbars/docks
screen.availHeight;       // height excluding OS taskbars/docks
screen.colorDepth;           // bits per pixel, typically 24`}
            />
            <DocNote tone="info">
                Don't confuse `screen` (the physical monitor) with `window.innerWidth`/`innerHeight` (the browser's viewport) — the viewport is almost always smaller than the full screen.
            </DocNote>

            <DocH2>alert</DocH2>
            <DocP>
                Displays a simple modal message box with an OK button, blocking further script execution until dismissed.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`alert("This is a message!");
console.log("This logs only after the alert is dismissed");`}
            />

            <DocH2>confirm</DocH2>
            <DocP>
                Displays a modal with OK and Cancel buttons, returning `true` if OK was clicked and `false` if Cancel was clicked (or the dialog was dismissed).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const confirmed = confirm("Are you sure you want to delete this?");
if (confirmed) {
  console.log("User confirmed — proceeding with delete");
} else {
  console.log("User cancelled");
}`}
            />

            <DocH2>prompt</DocH2>
            <DocP>
                Displays a modal with a text input field, returning the entered string, or `null` if the user cancels.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const name = prompt("What's your name?", "Guest"); // second arg is the default value

if (name !== null) {
  console.log(\`Hello, \${name}!\`);
} else {
  console.log("User cancelled the prompt");
}`}
            />
            <DocNote tone="warning">
                `alert`, `confirm`, and `prompt` are synchronous and block the entire page (including other scripts and rendering) until dismissed. They're fine for quick demos and debugging, but modern production UIs almost always use custom modal components instead, which don't freeze the page and can be styled to match the app.
            </DocNote>
        </>
    );
}
