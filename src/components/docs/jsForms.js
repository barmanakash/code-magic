import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptFormsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Forms in JavaScript</DocTitle>

            <DocP>
                Forms are the primary way users submit data to a web application. JavaScript gives you full control over reading input values, validating them, reacting to form-specific events, and packaging the data for submission.
            </DocP>

            <DocH2>Form Validation</DocH2>
            <DocP>
                Validation can be handled declaratively with built-in HTML attributes, or programmatically with JavaScript for more complex rules.
            </DocP>
            <CodeBlock
                language="html"
                filename="form.html"
                code={`<form id="signupForm">
  <input type="email" required placeholder="Email" />
  <input type="password" minlength="8" required placeholder="Password" />
  <input type="number" min="18" max="99" placeholder="Age" />
  <button type="submit">Sign Up</button>
</form>`}
            />
            <CodeBlock
                language="javascript"
                code={`const form = document.querySelector("#signupForm");
const email = form.querySelector("input[type=email]");

// Built-in Constraint Validation API
email.checkValidity();     // true/false based on the 'required'/'type' attributes
email.validity.valueMissing; // true if 'required' and left empty
email.validity.typeMismatch;   // true if entered text doesn't match type="email"
email.setCustomValidity("");     // clears any custom error message

// Custom validation logic
form.addEventListener("submit", (event) => {
  const password = form.querySelector("input[type=password]").value;
  if (password.length < 8) {
    event.preventDefault(); // stop submission
    alert("Password must be at least 8 characters");
  }
});`}
            />
            <DocNote tone="warning">
                Client-side validation improves user experience but is never a substitute for server-side validation — anyone can bypass JavaScript entirely and submit raw requests, so the server must always re-validate incoming data.
            </DocNote>

            <DocH2>Input Types</DocH2>
            <DocP>
                Choosing the right `type` attribute gives users the appropriate keyboard/UI on mobile and enables free built-in validation.
            </DocP>
            <DocList
                items={[
                    'text: general single-line text input.',
                    'email: validates a basic email pattern, shows an @ key on mobile keyboards.',
                    'password: masks the entered characters.',
                    'number: numeric input, often with spinner arrows and min/max/step support.',
                    'checkbox / radio: boolean or single-choice-from-a-group selections.',
                    'date / time / datetime-local: native date and time pickers.',
                    'file: lets the user select one or more files from their device.',
                    'range: a slider input between a min and max value.',
                    'tel / url: hints appropriate mobile keyboards for phone numbers and URLs.',
                ]}
            />

            <DocH2>Form Events</DocH2>
            <DocP>Forms and their inputs fire specialized events you can listen for.</DocP>
            <CodeBlock
                language="javascript"
                code={`const form = document.querySelector("#signupForm");
const input = form.querySelector("input[type=email]");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // almost always needed to handle submission via JS
  console.log("Form submitted");
});

input.addEventListener("input", (event) => {
  console.log("Current value:", event.target.value); // fires on every keystroke/change
});

input.addEventListener("change", (event) => {
  console.log("Value committed:", event.target.value); // fires when focus leaves after a change
});

input.addEventListener("focus", () => console.log("Input focused"));
input.addEventListener("blur", () => console.log("Input lost focus"));

form.addEventListener("reset", () => console.log("Form was reset"));`}
            />
            <DocNote tone="info">
                `input` fires immediately on every keystroke — ideal for live character counters or real-time validation feedback. `change` fires only once focus moves away after the value has changed — better suited for triggering heavier operations like an API call.
            </DocNote>

            <DocH2>FormData API</DocH2>
            <DocP>
                `FormData` provides an easy way to collect all of a form's field values at once — including files — ready to be sent via `fetch` without manually reading each input.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const form = document.querySelector("#signupForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form); // reads ALL named fields automatically

  formData.get("email");              // read a single value
  formData.getAll("interests");         // read all values for a repeated field name
  formData.set("email", "new@x.com");     // overwrite a value
  formData.append("source", "landing-page"); // add an extra field not in the form

  // Convert to a plain object (works well when there are no duplicate keys)
  const data = Object.fromEntries(formData.entries());
  console.log(data); // { email: "...", password: "..." }

  // Send it directly — fetch handles multipart/form-data encoding automatically
  fetch("/api/signup", {
    method: "POST",
    body: formData,
  });
});`}
            />
            <DocNote tone="info">
                Every form input needs a `name` attribute for `FormData` to pick it up — inputs without a `name` are silently skipped, which is a common source of "why is this field missing" bugs.
            </DocNote>
        </>
    );
}
