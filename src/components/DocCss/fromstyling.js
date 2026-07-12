import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSFormsStylingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Form UI Architecture & Accent Systems</DocTitle>

            <DocP>
                Form styling controls the interactive inputs, selection matrices, and data-entry controls that users rely on to transmit information. Standardizing native input states requires bypassing browser defaults while ensuring focus states, accessibility compliance, and touch targets remain highly optimized.
            </DocP>

            <DocH2>Interactive Control Taxonomy Matrix</DocH2>

            <DocH3>1. Textual Inputs & Layout Truncations</DocH3>
            <DocList
                items={[
                    'Text Fields & Textareas: Base layout wrappers (<input type="text">, <textarea>) require explicit normalization of padding boundaries, font metrics, and background clipping paths. Textareas should leverage resize: vertical; to keep structural widths stable.',
                    '::placeholder Pseudo-element: Styles the temporary helper string displayed inside empty fields. Use clear color contrast pairs to ensure visibility remains accessible against varying backdrops.'
                ]}
            />



            <DocH3>2. Selection Fields & System Accents</DocH3>
            <DocList
                items={[
                    'accent-color: A modern, low-overhead utility property that sets the accent hue for native user-agent form inputs, such as checkboxes, radio buttons, progress bars, and range sliders (e.g., accent-color: oklch(0.55 0.18 250);).',
                    'Select Dropdowns & File Uploads: Native <select> lists and <input type="file"> nodes have traditionally been difficult to skin. Modern strategies hide or restyle them using properties like appearance: none; combined with custom pseudo-elements.'
                ]}
            />

            <DocH3>3. Focus & Interactive States</DocH3>
            <DocList
                items={[
                    ':focus-visible: The gold standard for focus visibility. It displays an intentional focus indicator ring ONLY when a user interacts via a keyboard or non-pointer device. This provides a clean interface for mouse users while ensuring full accessibility compliance.',
                    ':disabled: Targets inputs locked out of the operational data loop, softening their opacity and swapping cursor maps to not-allowed.'
                ]}
            />

            <DocH2>Production-Grade Accessible Form Blueprint</DocH2>
            <DocP>
                Below is a production-ready form control system implementing cross-browser baseline overrides, responsive sizing, modern native accents, and keyboard focus indicators:
            </DocP>

            <DocH3>1. The Form Controls Stylesheet (forms-engine.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION ACCESSIBLE FORM CONTROL ARCHITECTURE
   ======================================================= */

/* A. GLOBAL NATIVE CONTROL ACCENT SYSTEM SETUP */
:root {
  --form-brand-tint: oklch(0.55 0.18 250);
  --form-focus-glow: oklch(0.65 0.25 200);
  --form-error-tint: oklch(0.6 0.18 20);
}

/* Universally hooks custom color tracks into native browser interactive widgets */
input[type="checkbox"],
input[type="radio"],
input[type="range"] {
  accent-color: var(--form-brand-tint);
}

/* B. STANDARD INTERACTIVE INPUT STRIPS */
.form-input-field,
.form-textarea-field {
  width: 100%;
  padding: 10px 14px;
  font-size: 0.875rem;
  font-family: inherit;
  color: oklch(0.2 0.02 240);
  background-color: #ffffff;
  border: 1px solid oklch(0.85 0.01 240);
  border-radius: 8px;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.02);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-textarea-field {
  min-height: 100px;
  resize: vertical; /* Blocks horizontal breaking expansion tracks */
}

/* C. CRISP SEPARATION FOR HELPER PLACEHOLDERS */
.form-input-field::placeholder,
.form-textarea-field::placeholder {
  color: oklch(0.6 0.01 240);
  opacity: 1;
}

/* D. KEYBOARD FOCUS RINGS WITHOUT MOUSE FLUFF */
.form-input-field:focus-visible,
.form-textarea-field:focus-visible,
.form-select-field:focus-visible {
  outline: 3px solid var(--form-focus-glow);
  outline-offset: 0;
  border-color: var(--form-brand-tint);
}

/* E. SELECT DROPDOWN OVERRIDE */
.form-select-field {
  width: 100%;
  padding: 10px 14px;
  font-size: 0.875rem;
  background-color: #ffffff;
  border: 1px solid oklch(0.85 0.01 240);
  border-radius: 8px;
  cursor: pointer;
  
  /* Clears out platform-specific native arrow rendering */
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 40px;
}

/* F. ADVANCED MODERN CUSTOM FILE UPLOAD SYSTEM */
.form-file-node::-webkit-file-upload-button {
  background-color: oklch(0.2 0.02 240);
  color: #ffffff;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  margin-right: 12px;
  transition: background-color 0.15s ease;
}

.form-file-node::-webkit-file-upload-button:hover {
  background-color: oklch(0.3 0.02 240);
}`}
            />

            <DocH3>2. Layout Implementation View (FormSandboxWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './forms-engine.css';

export default function FormSandboxWorkspace() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-2xl shadow-sm">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5 text-xs">
        
        {/* Text Input Row */}
        <div>
          <label className="block text-gray-700 font-bold mb-1.5">Deployment Label Identifier</label>
          <input type="text" className="form-input-field" placeholder="e.g., node-cluster-primary-us-east" />
        </div>

        {/* Customized Select Control */}
        <div>
          <label className="block text-gray-700 font-bold mb-1.5">Routing Server Region</label>
          <select className="form-select-field">
            <option>AWS Mumbai (ap-south-1)</option>
            <option>GCP Frankfurt (europe-west3)</option>
            <option>Azure Virginia (us-east)</option>
          </select>
        </div>

        {/* Native Inline Elements utilizing Accent Color Systems */}
        <div className="flex gap-6 items-center py-2">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-semibold">
            <input type="checkbox" className="w-4 h-4" defaultChecked />
            <span>Enable TLS Session Anchoring</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-semibold">
            <input type="radio" name="perf-tier" className="w-4 h-4" defaultChecked />
            <span>High Capacity</span>
          </label>
        </div>

        {/* Custom Webkit File Input Hooks */}
        <div>
          <label className="block text-gray-700 font-bold mb-1.5">Manifest Cryptographic Signature</label>
          <input type="file" className="form-input-field form-file-node" />
        </div>

        {/* Form Action Submissions */}
        <button type="submit" className="w-100 bg-blue-600 text-white font-bold p-2.5 rounded-lg hover:bg-blue-700 transition-colors">
          Initialize Production Configuration
        </button>

      </form>
    </div>
  );
}`}
            />
        </>
    );
}