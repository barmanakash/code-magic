import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLFormControlsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Form Controls: Input Widgets, Selection Elements, and Live Output Fields</DocTitle>

            <DocP>
                Beyond the <code>&lt;form&gt;</code> wrapper itself, HTML5 provides a rich set of dedicated control elements — text entry, selection widgets, and elements that display computed or live values — each with its own semantic role and accessibility expectations.
            </DocP>

            <DocH2>Core Control Elements</DocH2>

            <DocH3>1. input</DocH3>
            <DocP>
                The most versatile form control, with its behavior entirely determined by the <code>type</code> attribute: <code>text</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>checkbox</code>, <code>radio</code>, <code>date</code>, <code>file</code>, <code>range</code>, and more. Always pair it with a matching <code>&lt;label&gt;</code> for accessibility.
            </DocP>

            <DocH3>2. textarea</DocH3>
            <DocList
                items={[
                    'A multi-line free-text input, resizable by default via CSS resize.',
                    'Sized with rows and cols attributes rather than width/height styling alone.',
                    'Unlike input, its default value goes BETWEEN the opening and closing tags, not in a value attribute.',
                ]}
            />

            <DocH3>3. button</DocH3>
            <DocList
                items={[
                    'type="submit" (default inside a form): submits the enclosing form.',
                    'type="reset": resets all form controls back to their initial values.',
                    'type="button": performs no default action — used purely with JavaScript event handlers.',
                    'Prefer <button> over <input type="submit"> when you need rich content inside it, like an icon plus text.',
                ]}
            />

            <DocH3>4. select, option & optgroup</DocH3>
            <DocList
                items={[
                    'select: a dropdown (or, with the multiple attribute, a multi-select list box) container for choosing from predefined values.',
                    'option: each individual choice inside a select — the value attribute is what gets submitted, while its text content is what the user sees.',
                    'optgroup: groups related options under a shared, non-selectable label heading, improving scannability in long lists.',
                ]}
            />

            <DocH3>5. datalist</DocH3>
            <DocP>
                Provides a list of predefined autocomplete suggestions for a text input, linked via the input's <code>list</code> attribute — unlike select, the user can still type a completely custom value not in the list.
            </DocP>

            <DocH3>6. output</DocH3>
            <DocP>
                Represents the result of a calculation or user action, commonly used together with JavaScript to display a live-computed value (for example, showing the sum as a user adjusts two number inputs).
            </DocP>

            <DocH3>7. progress</DocH3>
            <DocP>
                Represents the completion progress of a task, such as a file upload or download. Set <code>value</code> and <code>max</code> for a determinate bar, or omit <code>value</code> entirely for an indeterminate "loading" animation.
            </DocP>

            <DocH3>8. meter</DocH3>
            <DocP>
                Represents a scalar measurement within a known range — like disk usage or a rating — NOT a task's progress. Supports <code>min</code>, <code>max</code>, <code>low</code>, <code>high</code>, and <code>optimum</code> to color-code the value's position within that range.
            </DocP>

            <blockquote>
                <strong>progress vs meter:</strong> Use <code>progress</code> for "how much of a task is done" (moves toward completion over time). Use <code>meter</code> for "where does this value sit within a known range" (a static or slowly-changing gauge, like battery level or a star rating — not necessarily related to task completion).
            </blockquote>

            <DocH2>Production-Grade Form Controls Implementation</DocH2>
            <DocP>
                Below is a production-level demonstration combining selection widgets, a live-computed output, and both progress and meter gauges.
            </DocP>

            <DocH3>1. Complete Semantic Controls Structure (form-controls-production.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<form class="c-order-form">
  <label for="quantity">Quantity</label>
  <input
    type="number"
    id="quantity"
    name="quantity"
    min="1"
    max="10"
    value="1"
    oninput="updateTotal()"
  />

  <label for="plan">Subscription Plan</label>
  <select id="plan" name="plan" oninput="updateTotal()">
    <optgroup label="Personal">
      <option value="10">Basic — $10/mo</option>
      <option value="20">Pro — $20/mo</option>
    </optgroup>
    <optgroup label="Team">
      <option value="50">Team — $50/mo</option>
    </optgroup>
  </select>

  <label for="browser">Preferred Browser</label>
  <input list="browsers" id="browser" name="browser" />
  <datalist id="browsers">
    <option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Safari"></option>
    <option value="Edge"></option>
  </datalist>

  <label for="notes">Additional Notes</label>
  <textarea id="notes" name="notes" rows="4" cols="40"></textarea>

  <p>
    Total:
    <output name="total" for="quantity plan">$10</output>
  </p>

  <label for="upload-progress">Upload Progress</label>
  <progress id="upload-progress" value="70" max="100">70%</progress>

  <label for="storage-meter">Disk Usage</label>
  <meter id="storage-meter" min="0" max="100" low="60" high="85" optimum="30" value="45">
    45%
  </meter>

  <button type="submit">Place Order</button>
  <button type="reset">Clear</button>
</form>`}
            />

            <DocH3>2. Layout Integration View (HTMLFormControlsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLFormControlsWorkspace() {
  const [quantity, setQuantity] = useState(1);
  const [planPrice, setPlanPrice] = useState(10);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">

      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Form Controls Gallery</h3>
        <p className="text-gray-500 mt-1">
          A live output field recalculates as the quantity and plan selection change.
        </p>
      </header>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Controls Renderer
        </div>

        <div className="space-y-1">
          <label className="block font-semibold text-slate-700">Quantity</label>
          <input
            type="number"
            min={1}
            max={10}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-slate-200 rounded-lg px-2 py-1.5"
          />
        </div>

        <div className="space-y-1">
          <label className="block font-semibold text-slate-700">Subscription Plan</label>
          <select
            value={planPrice}
            onChange={(e) => setPlanPrice(Number(e.target.value))}
            className="w-full border border-slate-200 rounded-lg px-2 py-1.5"
          >
            <optgroup label="Personal">
              <option value={10}>Basic — $10/mo</option>
              <option value={20}>Pro — $20/mo</option>
            </optgroup>
            <optgroup label="Team">
              <option value={50}>Team — $50/mo</option>
            </optgroup>
          </select>
        </div>

        <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
          <span className="font-semibold text-emerald-900">Live Total (output)</span>
          <span className="font-bold text-emerald-700">\${quantity * planPrice}</span>
        </div>

        <div className="space-y-1">
          <label className="block font-semibold text-slate-700">Upload Progress</label>
          <progress value={70} max={100} className="w-full h-2" />
        </div>

        <div className="space-y-1">
          <label className="block font-semibold text-slate-700">Disk Usage (meter)</label>
          <meter min={0} max={100} low={60} high={85} optimum={30} value={45} className="w-full h-2" />
        </div>

        <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-1.5 text-indigo-950">
          <span className="font-bold text-indigo-900 text-[10px] uppercase block">Control Selection Guide</span>
          <ul className="list-disc pl-4 text-[11px] space-y-1">
            <li>Use <code>datalist</code> when suggestions should be optional, not mandatory choices.</li>
            <li><code>progress</code> tracks task completion; <code>meter</code> shows a value's position in a fixed range.</li>
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
