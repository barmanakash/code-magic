import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptBrowserApisDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Browser APIs in JavaScript</DocTitle>

            <DocP>
                Beyond the DOM and BOM basics, modern browsers expose a wide range of specialized Web APIs — for location, hardware access, observing changes efficiently, and more — each with its own permission model and use cases.
            </DocP>

            <DocH2>Geolocation</DocH2>
            <DocP>Requests the user's physical location, always requiring explicit user permission first.</DocP>
            <CodeBlock
                language="javascript"
                code={`navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  },
  (error) => {
    console.log("Location access denied or unavailable:", error.message);
  }
);

// Continuously track position as it changes
const watchId = navigator.geolocation.watchPosition((position) => {
  console.log("Updated location:", position.coords);
});
navigator.geolocation.clearWatch(watchId); // stop watching`}
            />

            <DocH2>Clipboard</DocH2>
            <DocP>Reads from and writes to the system clipboard, replacing the older, more limited `document.execCommand("copy")` approach.</DocP>
            <CodeBlock
                language="javascript"
                code={`// Writing text to the clipboard
navigator.clipboard.writeText("Copied text!")
  .then(() => console.log("Copied successfully"));

// Reading text from the clipboard (requires user permission)
navigator.clipboard.readText()
  .then((text) => console.log("Clipboard contents:", text));`}
            />

            <DocH2>Notifications</DocH2>
            <DocP>Displays native OS-level notifications, requiring explicit permission from the user first.</DocP>
            <CodeBlock
                language="javascript"
                code={`Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    new Notification("New message!", {
      body: "You have a new message from Ava.",
      icon: "/icon.png",
    });
  }
});`}
            />

            <DocH2>History</DocH2>
            <DocP>Lets you navigate the user's session history, or change the URL without a full page reload — commonly used by client-side routers.</DocP>
            <CodeBlock
                language="javascript"
                code={`history.pushState({ page: 1 }, "", "/new-url"); // changes URL, adds a history entry
history.back();                                     // go back one entry
window.addEventListener("popstate", (event) => {
  console.log("Navigated via back/forward:", event.state);
});`}
            />

            <DocH2>Drag & Drop</DocH2>
            <DocP>Lets elements be dragged and dropped, using a set of dedicated drag events on both the source and the drop target.</DocP>
            <CodeBlock
                language="javascript"
                code={`const draggable = document.querySelector(".draggable");
const dropzone = document.querySelector(".dropzone");

draggable.setAttribute("draggable", "true");

draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "some-item-id");
});

dropzone.addEventListener("dragover", (event) => {
  event.preventDefault(); // required — dropping is blocked by default otherwise
});

dropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text/plain");
  console.log("Dropped item:", itemId);
});`}
            />

            <DocH2>Fullscreen</DocH2>
            <DocP>Lets an element (or the whole page) fill the entire screen, commonly used for videos, games, and presentations.</DocP>
            <CodeBlock
                language="javascript"
                code={`const video = document.querySelector("video");

video.requestFullscreen().catch((error) => {
  console.log("Fullscreen request failed:", error.message);
});

document.addEventListener("fullscreenchange", () => {
  console.log(document.fullscreenElement ? "Entered fullscreen" : "Exited fullscreen");
});

document.exitFullscreen();`}
            />

            <DocH2>Intersection Observer</DocH2>
            <DocP>Efficiently detects when an element enters or leaves the viewport (or another container), without expensive manual scroll-event calculations — ideal for lazy loading and infinite scroll.</DocP>
            <CodeBlock
                language="javascript"
                code={`const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Element is now visible:", entry.target);
      entry.target.classList.add("visible"); // e.g. trigger a fade-in animation
    }
  });
}, {
  threshold: 0.5, // fires when 50% of the element is visible
});

document.querySelectorAll(".lazy-section").forEach((el) => observer.observe(el));`}
            />

            <DocH2>Resize Observer</DocH2>
            <DocP>Efficiently detects when an element's size changes, useful for responsive components that need to react to their own container's dimensions rather than just the browser window.</DocP>
            <CodeBlock
                language="javascript"
                code={`const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const { width, height } = entry.contentRect;
    console.log("Element resized to:", width, height);
  });
});

resizeObserver.observe(document.querySelector(".resizable-panel"));

resizeObserver.unobserve(document.querySelector(".resizable-panel")); // stop watching one element
resizeObserver.disconnect(); // stop watching everything`}
            />

            <DocH2>Mutation Observer</DocH2>
            <DocP>Watches for changes to the DOM tree itself — added/removed nodes, attribute changes, text content changes — useful for reacting to dynamic content you don't directly control (like third-party widgets).</DocP>
            <CodeBlock
                language="javascript"
                code={`const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log("Mutation type:", mutation.type); // "childList", "attributes", or "characterData"
    console.log("Target:", mutation.target);
  });
});

mutationObserver.observe(document.querySelector("#container"), {
  childList: true,   // watch for added/removed children
  attributes: true,     // watch for attribute changes
  subtree: true,           // watch descendants too, not just direct children
});

mutationObserver.disconnect(); // stop watching`}
            />
            <DocNote tone="info">
                Intersection Observer, Resize Observer, and Mutation Observer all follow the same efficient pattern: the browser notifies you asynchronously when something changes, instead of you having to poll or listen to expensive events like `scroll`/`resize` on every single frame.
            </DocNote>
        </>
    );
}
