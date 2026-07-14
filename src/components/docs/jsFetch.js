import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptFetchDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">The Fetch API</DocTitle>

            <DocP>
                The Fetch API is the modern, Promise-based way to make HTTP requests from JavaScript — replacing the older, more cumbersome `XMLHttpRequest`. It's built into every modern browser and Node.js, and pairs naturally with `async`/`await`.
            </DocP>

            <DocH2>GET</DocH2>
            <DocP>
                A GET request retrieves data from a server. It's the default method for `fetch` — no extra configuration needed.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));

// With async/await
async function getUsers() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  return data;
}`}
            />

            <DocH2>POST</DocH2>
            <DocP>
                A POST request sends new data to be created on the server, typically with a JSON body.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function createUser(user) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

createUser({ name: "Ava", email: "ava@example.com" });`}
            />

            <DocH2>PUT</DocH2>
            <DocP>
                A PUT request fully replaces an existing resource with the data provided — every field is expected, since anything omitted is typically treated as removed.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function replaceUser(id, user) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user), // must include ALL fields, not just changed ones
  });
  return response.json();
}

replaceUser(1, { name: "Ava", email: "ava@example.com", role: "admin" });`}
            />

            <DocH2>PATCH</DocH2>
            <DocP>
                A PATCH request partially updates an existing resource — only the fields you include are changed, everything else on the server stays untouched.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function updateUser(id, changes) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changes), // only send the fields that actually changed
  });
  return response.json();
}

updateUser(1, { email: "newemail@example.com" }); // only updates the email field`}
            />

            <DocH2>DELETE</DocH2>
            <DocP>
                A DELETE request removes a resource from the server, usually identified by an id in the URL.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function deleteUser(id) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: "DELETE",
  });
  return response.ok; // true if the deletion succeeded (status 200-299)
}

deleteUser(1);`}
            />

            <DocH2>Headers</DocH2>
            <DocP>
                Headers carry metadata about the request or response — content type, authentication tokens, caching rules, and more.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Setting request headers
fetch("https://api.example.com/data", {
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_TOKEN_HERE",
    "Accept-Language": "en-US",
  },
});

// Reading response headers
fetch("https://api.example.com/data").then((response) => {
  console.log(response.headers.get("Content-Type"));
  console.log(response.headers.get("X-RateLimit-Remaining"));

  // Iterating over all headers
  for (const [key, value] of response.headers.entries()) {
    console.log(key, value);
  }
});

// The Headers object can also be built explicitly
const headers = new Headers();
headers.append("Content-Type", "application/json");`}
            />

            <DocH2>JSON</DocH2>
            <DocP>
                Most modern APIs exchange data as JSON. `fetch` doesn't parse the response body automatically — you must explicitly call `.json()`, which itself returns a Promise.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function getData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json(); // parses the JSON body into a JS object/array
  return data;
}

// Sending JSON requires BOTH steps: stringify the body AND set the header
fetch("https://api.example.com/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ava" }), // JS object → JSON string
});`}
            />
            <DocNote tone="warning">
                Forgetting `JSON.stringify()` on the body, or forgetting the `Content-Type: application/json` header, is one of the most common Fetch mistakes — the server will often silently misinterpret or reject the request.
            </DocNote>

            <DocH2>Error Handling</DocH2>
            <DocP>
                A crucial Fetch quirk: the Promise returned by `fetch` only rejects on network failures (no internet, DNS failure, CORS block) — NOT on HTTP error status codes like 404 or 500. You must check `response.ok` yourself.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`async function getUser(id) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);

    if (!response.ok) {
      // fetch does NOT throw for 404/500 — you have to check manually
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.log("Failed to fetch user:", error.message);
    throw error; // re-throw if the caller also needs to know
  }
}`}
            />
            <DocNote tone="info">
                `response.ok` is a shorthand for a status code between 200 and 299 (inclusive). Always check it (or `response.status` directly) before trusting the response body — treating any resolved `fetch` promise as "success" is a very common source of silently broken error handling.
            </DocNote>
        </>
    );
}
