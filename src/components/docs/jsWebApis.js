import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptWebApisDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Web APIs in JavaScript</DocTitle>

            <DocP>
                "Web APIs" is the umbrella term for browser-provided capabilities beyond the core JavaScript language — from making HTTP requests to real-time communication and offline support. This page rounds up the major networking and offline-capable APIs, including a quick recap of two covered in more depth elsewhere.
            </DocP>

            <DocH2>Fetch API</DocH2>
            <DocP>
                The modern, Promise-based way to make HTTP requests — see the dedicated Fetch API page for the full breakdown of GET/POST/PUT/PATCH/DELETE, headers, and error handling.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const response = await fetch("https://api.example.com/data");
const data = await response.json();`}
            />

            <DocH2>Web Storage API</DocH2>
            <DocP>
                `localStorage` and `sessionStorage` provide simple key-value persistence in the browser — see the dedicated Storage page for the full comparison against cookies and IndexedDB.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`localStorage.setItem("theme", "dark");
localStorage.getItem("theme"); // "dark"`}
            />

            <DocH2>WebSocket</DocH2>
            <DocP>
                WebSocket provides a persistent, full-duplex connection between client and server — unlike HTTP, either side can send messages at any time without the overhead of repeated requests, making it ideal for chat apps, live dashboards, and multiplayer features.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const socket = new WebSocket("wss://example.com/chat");

socket.addEventListener("open", () => {
  console.log("Connected");
  socket.send(JSON.stringify({ type: "join", room: "general" }));
});

socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  console.log("Received:", data);
});

socket.addEventListener("close", () => console.log("Disconnected"));
socket.addEventListener("error", (error) => console.log("WebSocket error:", error));

socket.close(); // manually close the connection`}
            />

            <DocH2>Server-Sent Events</DocH2>
            <DocP>
                Server-Sent Events (SSE) provide a one-way stream of updates from server to client over a single long-lived HTTP connection — simpler than WebSocket when you only need server-to-client updates (like live notifications or a live news feed), not two-way communication.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const eventSource = new EventSource("/api/live-updates");

eventSource.onmessage = (event) => {
  console.log("New update:", event.data);
};

// Listening to a specific named event type
eventSource.addEventListener("priceChange", (event) => {
  console.log("Price changed:", JSON.parse(event.data));
});

eventSource.onerror = () => console.log("Connection lost, browser will auto-reconnect");

eventSource.close(); // stop listening`}
            />
            <DocNote tone="info">
                A key SSE advantage over manually polling with `setInterval` + `fetch`: the browser automatically attempts to reconnect if the connection drops, without any extra code needed.
            </DocNote>

            <DocH2>WebRTC</DocH2>
            <DocP>
                WebRTC (Web Real-Time Communication) enables direct peer-to-peer audio, video, and data connections between browsers — powering video calls, voice chat, and P2P file sharing, often without the data ever passing through a central server.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Getting access to the user's camera/microphone
const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
document.querySelector("video").srcObject = stream;

// Setting up a peer connection (simplified — a real app needs signaling too)
const peerConnection = new RTCPeerConnection();
stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));

peerConnection.ontrack = (event) => {
  document.querySelector("#remoteVideo").srcObject = event.streams[0];
};`}
            />
            <DocNote tone="warning">
                A working WebRTC connection also requires a separate "signaling" mechanism (often built with WebSocket) to exchange connection details between peers before the direct P2P link can be established — WebRTC itself doesn't include signaling, by design.
            </DocNote>

            <DocH2>Service Workers</DocH2>
            <DocP>
                A Service Worker is a background script that runs separately from the page, sitting between your app and the network — enabling offline support, push notifications, and background sync by intercepting network requests.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="main.js"
                code={`if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then((registration) => console.log("Service Worker registered:", registration.scope))
    .catch((error) => console.log("Registration failed:", error));
}`}
            />
            <CodeBlock
                language="javascript"
                filename="sw.js"
                code={`self.addEventListener("install", (event) => {
  console.log("Service Worker installing");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});`}
            />

            <DocH2>Cache API</DocH2>
            <DocP>
                The Cache API lets you programmatically store and retrieve network responses (typically used from inside a Service Worker), forming the foundation of offline-first web applications.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function cacheAssets() {
  const cache = await caches.open("app-cache-v1");
  await cache.addAll(["/", "/styles.css", "/app.js", "/logo.png"]);
}

async function getFromCache(request) {
  const cache = await caches.open("app-cache-v1");
  const cachedResponse = await cache.match(request);
  return cachedResponse || fetch(request); // fall back to network if not cached
}

// Removing an old cache version during an update
caches.delete("app-cache-v0");`}
            />
            <DocNote tone="info">
                Service Workers and the Cache API together form the backbone of Progressive Web Apps (PWAs) — enabling an app to load instantly and even function without an internet connection at all.
            </DocNote>
        </>
    );
}
