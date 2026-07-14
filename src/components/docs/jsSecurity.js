import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptSecurityDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Security</DocTitle>

            <DocP>
                Client-side JavaScript runs in an environment fundamentally exposed to the user and, by extension, to attackers — anything shipped to the browser can be inspected, modified, or bypassed. Understanding the common attack categories and defenses is essential for building safe web applications.
            </DocP>

            <DocH2>XSS (Cross-Site Scripting)</DocH2>
            <DocP>
                XSS occurs when an attacker manages to inject and execute their own JavaScript in your page — typically by getting unsanitized user input rendered as HTML, letting them steal cookies, session tokens, or perform actions as the victim.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// DANGEROUS — rendering untrusted input directly as HTML
const comment = getUserComment(); // e.g. '<img src=x onerror="stealCookies()">'
document.querySelector("#comments").innerHTML += comment; // executes the injected script!

// SAFE — use textContent for plain text, it never parses HTML
document.querySelector("#comments").textContent = comment;

// SAFE — if HTML rendering is genuinely needed, sanitize first with a trusted library
// (e.g. DOMPurify) before ever touching innerHTML
element.innerHTML = DOMPurify.sanitize(comment);`}
            />
            <DocNote tone="warning">
                Never trust data from the URL, form inputs, query parameters, or even your own database if it originated from user input at any point — always treat it as potentially hostile before rendering it as HTML.
            </DocNote>

            <DocH2>CSRF (Cross-Site Request Forgery)</DocH2>
            <DocP>
                CSRF tricks a logged-in user's browser into unknowingly sending a request to a site they're authenticated with — for example, a malicious page that auto-submits a form to your bank's "transfer money" endpoint, relying on the browser automatically attaching the user's existing session cookie.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// A malicious page could contain something like this, hoping the visitor
// is currently logged into yourbank.com in another tab:
// <form action="https://yourbank.com/transfer" method="POST">
//   <input type="hidden" name="amount" value="10000" />
//   <input type="hidden" name="to" value="attacker-account" />
// </form>
// <script>document.forms[0].submit()</script>

// DEFENSE: include a CSRF token the attacker's page can't know or forge,
// generated server-side and sent back with every state-changing request
fetch("/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken, // read from a meta tag or cookie set by the server
  },
  body: JSON.stringify({ amount: 100, to: "friend-account" }),
});`}
            />
            <DocNote tone="info">
                Modern defenses also rely heavily on the `SameSite` cookie attribute (set server-side), which prevents cookies from being automatically sent on many cross-site requests in the first place — reducing reliance on CSRF tokens alone.
            </DocNote>

            <DocH2>CORS (Cross-Origin Resource Sharing)</DocH2>
            <DocP>
                CORS is a browser security mechanism that blocks JavaScript on one origin from reading responses from a different origin, unless that origin explicitly opts in via response headers. It protects users, not servers — the request often still reaches the server, but the browser withholds the response from your script.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Requesting a different-origin API from the browser
fetch("https://api.otherdomain.com/data")
  .then((res) => res.json())
  .catch((err) => console.log(err));
// Fails with a CORS error UNLESS api.otherdomain.com's server responds with a header like:
// Access-Control-Allow-Origin: https://yoursite.com

// Sending credentials (cookies) cross-origin requires explicit opt-in on BOTH sides
fetch("https://api.otherdomain.com/data", {
  credentials: "include", // client opts in
});
// ...and the server must respond with:
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Origin: https://yoursite.com  (cannot be "*" when using credentials)`}
            />
            <DocNote tone="warning">
                CORS is configured on the SERVER, not the client — there's no client-side JavaScript fix for a CORS error. If you're building the API too, add the appropriate `Access-Control-*` response headers there.
            </DocNote>

            <DocH2>Content Security Policy</DocH2>
            <DocP>
                A Content Security Policy (CSP) is a response header that restricts what sources of scripts, styles, images, and other resources a page is allowed to load from — a strong defense-in-depth layer against XSS, since even successfully injected script tags can be blocked from executing.
            </DocP>
            <CodeBlock
                language="html"
                filename="server response header"
                code={`Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:;`}
            />
            <DocList
                items={[
                    "default-src 'self': only load resources from the page's own origin by default.",
                    "script-src: whitelist specific origins scripts are allowed to load from — omitting 'unsafe-inline' blocks inline <script> tags and inline event handlers entirely.",
                    'A strict CSP is one of the most effective single mitigations against XSS, since it blocks unauthorized scripts from executing even if an attacker manages to inject markup.',
                ]}
            />

            <DocH2>Input Validation</DocH2>
            <DocP>
                Input validation checks that data conforms to expected rules (type, format, length, range) BEFORE it's used or stored — the first line of defense against malformed or malicious data.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function validateEmail(email) {
  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return pattern.test(email);
}

function validateAge(age) {
  return Number.isInteger(age) && age >= 0 && age <= 120;
}

function validateUsername(username) {
  return typeof username === "string"
    && username.length >= 3
    && username.length <= 20
    && /^[a-zA-Z0-9_]+$/.test(username);
}`}
            />
            <DocNote tone="warning">
                Client-side validation is for user experience only — it can always be bypassed by anyone sending requests directly. The server must independently re-validate every single piece of incoming data, regardless of what the client already checked.
            </DocNote>

            <DocH2>Sanitization</DocH2>
            <DocP>
                Sanitization removes or neutralizes potentially dangerous content from input, rather than simply rejecting it outright — commonly needed when you genuinely need to accept some HTML (like a rich-text comment) but must strip out anything executable.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Escaping for safe display as plain text
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Sanitizing HTML that's meant to allow SOME tags — use a proven library,
// never write your own HTML parser/sanitizer from scratch
const clean = DOMPurify.sanitize(userSuppliedHtml, {
  ALLOWED_TAGS: ["b", "i", "em", "strong", "a"],
  ALLOWED_ATTR: ["href"],
});
element.innerHTML = clean;`}
            />
            <DocNote tone="info">
                Escaping and sanitization solve different problems: escaping converts special characters so they display as literal text (used with `textContent`-style output), while sanitization strips dangerous content while preserving safe HTML structure (used when `innerHTML` output is genuinely required).
            </DocNote>
        </>
    );
}
