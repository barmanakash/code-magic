import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLFormsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Forms: Submission Architecture, Encoding, and Client Validation Control</DocTitle>

            <DocP>
                The <code>&lt;form&gt;</code> element is the container that groups interactive controls together and defines how the collected data should be packaged and delivered to a server. Understanding its core attributes — where data goes, how it's sent, and how it's encoded — is essential before diving into individual input types.
            </DocP>

            <DocH2>The &lt;form&gt; Element and Core Attributes</DocH2>

            <DocH3>1. form</DocH3>
            <DocP>
                The parent wrapper for all related controls (inputs, selects, textareas, buttons). Every control nested inside it — or explicitly linked via a matching <code>form</code> attribute on the control itself — is included when the form is submitted.
            </DocP>

            <DocH3>2. action</DocH3>
            <DocList
                items={[
                    'Specifies the URL that receives the submitted form data.',
                    'If omitted, the form submits to the current page\'s own URL by default.',
                    'Can be absolute (https://api.example.com/submit) or relative (/submit, ../submit).',
                ]}
            />

            <DocH3>3. method</DocH3>
            <DocList
                items={[
                    'GET (default): appends form data as URL query parameters (?name=Ava&age=25). Visible in the URL, bookmarkable, but unsuitable for sensitive data or large payloads.',
                    'POST: sends form data in the request body, invisible in the URL — the correct choice for sensitive data, file uploads, and any request that changes server state.',
                ]}
            />

            <DocH3>4. enctype</DocH3>
            <DocList
                items={[
                    'application/x-www-form-urlencoded (default): encodes data as key=value pairs, spaces become +. Fine for standard text-only forms.',
                    'multipart/form-data: REQUIRED whenever the form includes a file upload (input type="file") — splits data into distinct parts, preserving binary file content.',
                    'text/plain: sends data with minimal encoding, mostly for debugging — rarely used in production.',
                ]}
            />

            <DocH3>5. autocomplete</DocH3>
            <DocList
                items={[
                    'on (default): the browser may offer to save and auto-fill previously entered values.',
                    'off: instructs the browser not to autofill — commonly set on sensitive one-time fields like OTP or CVV inputs (though browsers may not always honor it fully).',
                    'Can also be set on individual inputs, overriding the form-level setting for that specific field.',
                ]}
            />

            <DocH3>6. novalidate</DocH3>
            <DocList
                items={[
                    'A boolean attribute that disables the browser\'s built-in HTML5 validation (required, type="email", pattern, min/max, etc.) for that form.',
                    'Commonly used when a JavaScript-driven validation library handles validation instead, avoiding duplicate/conflicting validation UI.',
                    'Validation can also be selectively skipped per-button using formnovalidate on a specific submit button (e.g. a "Save as Draft" button that shouldn\'t require full validation).',
                ]}
            />

            <blockquote>
                <strong>Security Note:</strong> The <code>action</code> URL and <code>method</code> alone provide no protection — the server must independently validate and sanitize all incoming form data, since <code>novalidate</code> or a bypassed client-side check can never be trusted as the only line of defense.
            </blockquote>

            <DocH2>Production-Grade Form Implementation</DocH2>
            <DocP>
                Below is a production-level, fully validated HTML5 form demonstrating a POST submission with file upload support, explicit encoding, and controlled autocomplete/validation behavior.
            </DocP>

            <DocH3>1. Complete Semantic Form Structure (form-production.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<form
  class="c-signup-form"
  action="/api/register"
  method="POST"
  enctype="multipart/form-data"
  autocomplete="on"
>
  <fieldset class="c-signup-form__section">
    <legend>Account Details</legend>

    <label for="email">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      autocomplete="email"
    />

    <label for="otp">One-Time Password</label>
    <input
      type="text"
      id="otp"
      name="otp"
      autocomplete="off"
      required
    />
  </fieldset>

  <fieldset class="c-signup-form__section">
    <legend>Profile Photo</legend>
    <label for="avatar">Upload Avatar</label>
    <input type="file" id="avatar" name="avatar" accept="image/*" />
  </fieldset>

  <button type="submit">Create Account</button>
  <button type="submit" formnovalidate name="action" value="draft">
    Save as Draft
  </button>
</form>`}
            />

            <DocH3>2. Layout Integration View (HTMLFormsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLFormsWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">

      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Form Submission Model</h3>
        <p className="text-gray-500 mt-1">
          Observe how action, method, and enctype together determine where and how
          submitted data actually reaches the server.
        </p>
      </header>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Form DOM Renderer
        </div>

        <form className="space-y-3 text-[11px]">
          <div className="space-y-1">
            <label className="block font-semibold text-slate-700">Email Address</label>
            <input
              type="email"
              className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600"
              placeholder="you@example.com"
              readOnly
            />
          </div>

          <div className="space-y-1">
            <label className="block font-semibold text-slate-700">One-Time Password</label>
            <input
              type="text"
              className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600"
              placeholder="autocomplete disabled"
              readOnly
            />
          </div>

          <div className="space-y-1">
            <label className="block font-semibold text-slate-700">Avatar</label>
            <div className="border border-dashed border-slate-300 rounded-lg px-2 py-3 text-center text-slate-400">
              multipart/form-data upload zone
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <span className="flex-1 text-center bg-blue-600 text-white font-semibold rounded-lg py-1.5">
              Create Account
            </span>
            <span className="flex-1 text-center bg-slate-100 text-slate-600 font-semibold rounded-lg py-1.5">
              Save as Draft
            </span>
          </div>
        </form>

        <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-1.5 text-indigo-950">
          <span className="font-bold text-indigo-900 text-[10px] uppercase block">Submission Checklist</span>
          <ul className="list-disc pl-4 text-[11px] space-y-1">
            <li>Use <code>method="POST"</code> whenever data is sensitive or changes server state.</li>
            <li>Always pair file inputs with <code>enctype="multipart/form-data"</code>.</li>
            <li>Reserve <code>novalidate</code> for forms handled by custom JS validation logic.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}
