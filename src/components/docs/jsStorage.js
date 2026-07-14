import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptStorageDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Browser Storage in JavaScript</DocTitle>

            <DocP>
                Browsers give JavaScript several ways to persist data on the user's machine — from simple key-value pairs to a full client-side database. Choosing the right one depends on how much data you need to store, how long it should last, and whether the server needs to see it.
            </DocP>

            <DocH2>localStorage</DocH2>
            <DocP>
                Stores key-value string data with no expiration — it persists even after closing the browser, until explicitly cleared. Scoped per origin (protocol + domain + port) and shared across all tabs of that origin.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`localStorage.setItem("theme", "dark");
localStorage.getItem("theme");     // "dark"
localStorage.removeItem("theme");
localStorage.clear();                // removes EVERYTHING for this origin

// Storing objects requires manual JSON conversion — localStorage only stores strings
const user = { name: "Ava", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
const stored = JSON.parse(localStorage.getItem("user"));

// Reacting to changes made in OTHER tabs of the same origin
window.addEventListener("storage", (event) => {
  console.log(event.key, event.oldValue, event.newValue);
});`}
            />
            <DocNote tone="warning">
                localStorage has a size limit around 5-10MB (varies by browser) and is synchronous — large reads/writes can briefly block the main thread. Never store sensitive data like tokens or passwords here, since any JavaScript running on the page (including injected via XSS) can read it freely.
            </DocNote>

            <DocH2>sessionStorage</DocH2>
            <DocP>
                Shares the exact same API as localStorage, but data only persists for the lifetime of that specific browser tab — it's cleared automatically when the tab is closed, and is NOT shared across tabs, even to the same site.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`sessionStorage.setItem("formDraft", "unsaved changes");
sessionStorage.getItem("formDraft");
sessionStorage.removeItem("formDraft");
sessionStorage.clear();

// Great for temporary, per-tab state like:
// - a multi-step form's in-progress data
// - a "don't show this popup again" flag for the current visit only`}
            />

            <DocH2>Cookies</DocH2>
            <DocP>
                Cookies are small pieces of data (roughly 4KB max) automatically sent by the browser to the server with every matching HTTP request — making them the original mechanism for things like login sessions, unlike localStorage/sessionStorage which never leave the browser on their own.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Reading/writing via document.cookie is clunky — it's a single semicolon-delimited string
document.cookie = "theme=dark; max-age=3600; path=/";
document.cookie; // "theme=dark; otherCookie=value; ..." — all cookies as one string

// Manual parsing is often needed to read a specific cookie
function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}
getCookie("theme"); // "dark"

// Deleting a cookie — set it with an already-expired date
document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`}
            />
            <DocList
                items={[
                    'Expires/Max-Age: controls how long the cookie persists — omit for a "session cookie" cleared when the browser closes.',
                    'HttpOnly: prevents JavaScript from reading the cookie at all — set server-side only, critical for protecting session tokens from XSS.',
                    'Secure: only sent over HTTPS connections.',
                    'SameSite: controls whether the cookie is sent on cross-site requests, an important defense against CSRF attacks.',
                ]}
            />
            <DocNote tone="info">
                Cookies are best set and read by the server (via response/request headers) rather than manually through `document.cookie`, especially for anything security-sensitive — server-set `HttpOnly` cookies can't be touched by client-side JavaScript at all.
            </DocNote>

            <DocH2>IndexedDB</DocH2>
            <DocP>
                IndexedDB is a full transactional, asynchronous, object-oriented database built into the browser — designed for large amounts of structured data (thousands of records, binary files) that localStorage's simple key-value model can't handle well.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const request = indexedDB.open("MyAppDB", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const store = db.createObjectStore("users", { keyPath: "id" });
  store.createIndex("byName", "name", { unique: false });
};

request.onsuccess = (event) => {
  const db = event.target.result;

  // Writing a record
  const tx = db.transaction("users", "readwrite");
  tx.objectStore("users").add({ id: 1, name: "Ava", email: "ava@example.com" });

  // Reading a record
  const readTx = db.transaction("users", "readonly");
  const getRequest = readTx.objectStore("users").get(1);
  getRequest.onsuccess = () => console.log(getRequest.result);
};

request.onerror = (event) => console.log("DB error:", event.target.error);`}
            />
            <DocNote tone="info">
                The raw IndexedDB API is verbose and callback-heavy, as shown above. In practice, most developers use a lightweight wrapper library like `idb` to interact with it using cleaner Promise-based syntax instead.
            </DocNote>

            <DocH2>Choosing the Right Storage</DocH2>
            <DocList
                items={[
                    'localStorage: small amounts of non-sensitive data that should persist indefinitely across sessions (theme preference, UI settings).',
                    'sessionStorage: small amounts of data scoped to a single tab session (in-progress form data, one-time flags).',
                    'Cookies: data the SERVER also needs to see automatically with each request (authentication/session tokens, especially as HttpOnly).',
                    'IndexedDB: larger structured datasets, offline-first apps, or binary data (files, images) that need querying capabilities.',
                ]}
            />
        </>
    );
}
