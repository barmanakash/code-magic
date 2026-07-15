import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLFormValidationDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">HTML5 Form Validation: Constraint Validation API, Field Restraints, and Native Error Handling</DocTitle>
      
      <DocP>
        HTML5 native form validation provides a built-in method for checking user data before it is submitted to a server. By applying validation attributes directly to your input elements, you instruct the browser engine to enforce specific rules (such as checking text length, matching patterns, or enforcing numeric limits). This handles initial data filtering directly in the client, improving user experience and reducing unnecessary server requests.
      </DocP>

      <DocH2>The Constraint Validation Matrix</DocH2>
      
      <DocH3>1. Presence & String Bounds</DocH3>
      <DocList
        items={[
          'required: A boolean attribute indicating that a field must be filled out before the parent form can be submitted. When applied to checkboxes, it requires the user to check that specific box.',
          'minlength: Sets the minimum integer number of characters a user must enter. If the entry is shorter, the browser marks the field as invalid.',
          'maxlength: Sets the maximum integer number of characters allowed. Unlike minlength, the browser physically stops the user from typing any additional characters once this limit is hit.'
        ]}
      />

      <DocH3>2. Value & Step Bounds</DocH3>
      <DocList
        items={[
          'min: Establishes the lowest acceptable value for numeric, date, or time inputs.',
          'max: Establishes the highest acceptable value for numeric, date, or time inputs.',
          'step: Configures the allowed incremental granularity for numbers or dates. For example, setting step="2" on a numeric input allows values like 2, 4, or 6, making odd numbers invalid.'
        ]}
      />

      <DocH3>3. Regex Formatting & Field State Modifiers</DocH3>
      <DocList
        items={[
          'pattern: Takes a regular expression (Regex) string that the input\'s value must match exactly. For example, pattern="[A-Z]{3}" forces the user to enter exactly three uppercase letters.',
          'placeholder: Displays a temporary hint or example text inside the field when it is empty. *Crucial Accessibility Note:* Placeholders should never be used as a replacement for a formal <label> tag, as they disappear when the user starts typing.',
          'readonly: A boolean attribute that prevents the user from changing the field\'s value. However, the text can still be selected, focused, and its value is still submitted along with the form.',
          'disabled: A boolean attribute that completely deactivates the element. The field cannot be focused, clicked, or edited, and its value is **completely excluded** from the submitted form data.'
        ]}
      />

      <DocH2>Production-Grade Validated Form Architecture</DocH2>
      <DocP>
        Below is a fully accessible, production-ready HTML5 form demonstrating native validation attributes, pattern definitions, and state restrictions:
      </DocP>

      <DocH3>1. Robust Form Structure (validation-spec.html)</DocH3>
      <CodeBlock
        language="html"
        code={`<form action="/api/v1/nodes/provision" method="POST" class="c-validation-form">

  <div class="c-field-group">
    <label for="cluster-code">Cluster Identifier</label>
    <input 
      type="text" 
      id="cluster-code" 
      name="cluster_code" 
      required 
      minlength="4" 
      maxlength="12"
      placeholder="e.g. cluster-204"
      class="c-input-field"
    />
  </div>

  <div class="c-field-group">
    <label for="node-token">Custom Node Token (Format: 3 Letters - 4 Digits)</label>
    <input 
      type="text" 
      id="node-token" 
      name="node_token" 
      required
      pattern="[A-Z]{3}-[0-9]{4}"
      placeholder="e.g. KEL-4092"
      title="Token must consist of exactly 3 uppercase characters, a dash, and 4 numeric digits."
      class="c-input-field"
    />
  </div>

  <div class="c-field-group">
    <label for="burst-allocation">Burst Allocation Allocation (Even steps between 10 and 50)</label>
    <input 
      type="number" 
      id="burst-allocation" 
      name="burst_allocation" 
      min="10" 
      max="50" 
      step="2"
      value="20"
      class="c-input-field"
    />
  </div>

  <div class="c-field-group">
    <label for="deployment-year">Target Operations Baseline Year</label>
    <input 
      type="text" 
      id="deployment-year" 
      name="deployment_year" 
      value="2026" 
      readonly 
      class="c-input-field c-input-field--readonly"
    />
  </div>

  <div class="c-field-group">
    <label for="deprecated-zone">Legacy Zone Reference (Excluded from post)</label>
    <input 
      type="text" 
      id="deprecated-zone" 
      name="deprecated_zone" 
      value="zone-legacy-deprecated" 
      disabled 
      class="c-input-field c-input-field--disabled"
    />
  </div>

  <div class="c-form-footer">
    <button type="submit" class="c-submit-button">Validate &amp; Save Configuration</button>
  </div>

</form>`}
      />

      <DocH3>2. Interactive Validation Sandbox (HTMLFormValidationWorkspace.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React, { useState } from 'react';

export default function HTMLFormValidationWorkspace() {
  const [tokenValue, setTokenValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidationCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const targetInput = e.currentTarget.elements.namedItem('sandbox_token') as HTMLInputElement;
    
    if (targetInput.validity.patternMismatch) {
      setErrorMessage('🚨 Custom Error: Value does not match pattern [A-Z]{3}-[0-9]{4}');
    } else if (targetInput.validity.valueMissing) {
      setErrorMessage('🚨 Custom Error: This element is marked required.');
    } else {
      setErrorMessage('✅ Validation Pass. Data structured correctly.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Constraint Validation Lab</h3>
        <p className="text-gray-500 mt-1">
          Interact with this panel to observe native constraint errors and validation states.
        </p>
      </header>

      {/* Validation Sandbox Control Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Live Form State
        </div>

        <form onSubmit={handleValidationCheck} className="space-y-4 text-[11px]">
          
          {/* 1. Required & Pattern Checking Group */}
          <div>
            <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">
              pattern="[A-Z]{'{3}'}-[0-9]{'{4}'}" required
            </label>
            <input 
              type="text" 
              name="sandbox_token"
              required
              pattern="[A-Z]{3}-[0-9]{4}"
              placeholder="e.g. XYZ-1234"
              value={tokenValue}
              onChange={(e) => setTokenValue(e.target.value.toUpperCase())}
              className="w-full bg-slate-50 border p-2.5 rounded-lg font-mono focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
            />
          </div>

          {/* 2. Readonly vs Disabled Demo Container */}
          <div className="grid grid-cols-2 gap-3 border-t pt-4">
            <div>
              <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">readonly state</label>
              <input 
                type="text" 
                value="Can read & submit me" 
                readOnly 
                className="w-full bg-slate-50 border p-2 rounded-lg text-gray-600 font-medium cursor-default focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-500 font-semibold mb-1 uppercase font-mono text-[9px]">disabled state</label>
              <input 
                type="text" 
                value="Cannot interact" 
                disabled 
                className="w-full bg-slate-100 border p-2 rounded-lg text-gray-400 cursor-not-allowed select-none"
              />
            </div>
          </div>

          {/* Dynamic Telemetry Status Alert Board */}
          {\`\${errorMessage && (
            <div className={\\\`p-3 rounded-xl border text-[10px] font-mono font-semibold \\\${
              errorMessage.includes('Pass') ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'
            }\\\`}>
              \\\${errorMessage}
            </div>
          )}\`}

          {/* Submissions Action Row */}
          <div className="border-t pt-4">
            <button 
              type="submit" 
              className="w-full p-2.5 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
            >
              Test Form Submission Constraints
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}`}
      />
    </>
  );
}