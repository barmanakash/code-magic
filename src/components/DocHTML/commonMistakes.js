import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLCommonMistakesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Common HTML Mistakes: Accessibility Gaps, Structural Errors, and Validation Failures</DocTitle>

            <DocP>
                Even experienced developers repeat a small set of HTML mistakes — most of them invisible in the rendered page but harmful to accessibility, SEO, and long-term maintainability. This page walks through the most frequent offenders and how to fix each one.
            </DocP>

            <DocH2>Frequent Mistake Categories</DocH2>

            <DocH3>1. Missing Alt Text</DocH3>
            <DocList
                items={[
                    'Every meaningful <img> needs a descriptive alt attribute — screen reader users rely on it entirely to understand the image.',
                    'Purely decorative images should use alt="" (empty, but present) so screen readers skip them entirely, rather than reading the filename aloud.',
                    'Never omit the alt attribute altogether — a missing attribute is treated differently (and worse) than an intentionally empty one by assistive technology.',
                ]}
            />

            <DocH3>2. Improper Nesting</DocH3>
            <DocList
                items={[
                    'Block-level elements (like <div>, <p>) cannot legally be nested inside inline elements meant only for text-level content (like <span>, <a> in older HTML) without violating the spec — browsers often "fix" this silently, producing unpredictable DOM structure.',
                    'A <p> cannot contain another <p>, a <div>, or most other block elements — the browser will auto-close the first <p> early, producing a different DOM tree than what the markup visually suggests.',
                    'List items belong directly inside <ul>/<ol> — any other direct child is invalid.',
                ]}
            />

            <DocH3>3. Missing Labels</DocH3>
            <DocList
                items={[
                    'Every form input needs an associated <label>, connected via a matching for/id pair (or by wrapping the input directly inside the label).',
                    'A placeholder is NOT a substitute for a label — it disappears once the user starts typing and isn\'t reliably announced by all screen readers.',
                    'Missing labels are one of the most common, and most damaging, accessibility failures on real-world sites.',
                ]}
            />

            <DocH3>4. Deprecated Tags</DocH3>
            <DocList
                items={[
                    'Presentational tags like <font>, <center>, <marquee>, and <big> are obsolete — all styling belongs in CSS, not HTML markup.',
                    'Layout tags like <frame>/<frameset> have been removed from the HTML5 spec entirely in favor of <iframe> or modern CSS layout.',
                    'Using deprecated tags may still "work" in some browsers for legacy compatibility, but they fail HTML validation and offer no accessibility or semantic benefit.',
                ]}
            />

            <DocH3>5. Duplicate IDs</DocH3>
            <DocList
                items={[
                    'The id attribute MUST be unique across an entire page — duplicates break document.getElementById() (which silently returns only the first match), CSS ID selectors, and label/for associations.',
                    'A common cause: copy-pasting a reusable component block (like a card or modal) multiple times without updating its internal IDs.',
                    'Use classes for anything that repeats across multiple elements; reserve IDs for genuinely unique, single-instance elements.',
                ]}
            />

            <DocH3>6. Invalid HTML</DocH3>
            <DocList
                items={[
                    'Unclosed tags, mismatched opening/closing tags, and missing required attributes (like alt on img, or a DOCTYPE at the top of the document) all constitute invalid HTML.',
                    'Browsers are extremely forgiving and will attempt to auto-correct invalid markup — but different browsers may "fix" the same mistake differently, leading to inconsistent rendering.',
                    'The W3C Markup Validator (validator.w3.org) can check any page or HTML snippet against the official spec and flag every one of these issues explicitly.',
                ]}
            />

            <blockquote>
                <strong>Why "it looks fine" isn't proof:</strong> Browsers silently repair broken HTML, so visually broken markup often still renders correctly. This hides real problems from sighted developers testing casually, while screen readers, search engine crawlers, and older browsers can be affected in ways that aren't visible during normal browsing.
            </blockquote>

            <DocH2>Production-Grade Corrected Implementation</DocH2>
            <DocP>
                Below is a "before and after" comparison demonstrating fixes for every mistake category above in a single realistic form/content block.
            </DocP>

            <DocH3>1. Corrected Semantic Structure (common-mistakes-fixed.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!-- BEFORE (contains all six mistake categories) -->
<!--
<img src="logo.png">
<p><div>Some text</div></p>
<input type="text" placeholder="Name">
<font color="red">Warning!</font>
<div id="card">Item 1</div>
<div id="card">Item 2</div>
-->

<!-- AFTER — corrected -->
<img src="logo.png" alt="Company logo" />

<div>
  <p>Some text</p>
</div>

<label for="fullName">Name</label>
<input type="text" id="fullName" name="fullName" placeholder="e.g. Ava Smith" />

<p class="warning-text">Warning!</p>

<div class="card">Item 1</div>
<div class="card">Item 2</div>

<style>
  .warning-text { color: red; font-weight: bold; }
</style>`}
            />

            <DocH3>2. Layout Integration View (HTMLCommonMistakesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

const mistakes = [
  { title: "Missing Alt Text", bad: '<img src="logo.png">', good: '<img src="logo.png" alt="Company logo" />' },
  { title: "Missing Labels", bad: '<input placeholder="Name">', good: '<label for="n">Name</label><input id="n">' },
  { title: "Duplicate IDs", bad: 'id="card" (used twice)', good: 'class="card" (reusable)' },
];

export default function HTMLCommonMistakesWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">

      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Before / After: Common HTML Mistakes</h3>
        <p className="text-gray-500 mt-1">
          Each fix below is invisible in casual browsing but critical for
          accessibility and validation.
        </p>
      </header>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Mistake Auditor
        </div>

        {mistakes.map((m) => (
          <div key={m.title} className="border border-slate-200 rounded-xl p-3 space-y-1.5">
            <span className="font-bold text-slate-800 text-[11px]">{m.title}</span>
            <div className="flex items-start gap-1.5 text-[10px]">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <code className="text-red-600 bg-red-50 px-1.5 py-0.5 rounded">{m.bad}</code>
            </div>
            <div className="flex items-start gap-1.5 text-[10px]">
              <span className="text-emerald-500 font-bold shrink-0">✓</span>
              <code className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">{m.good}</code>
            </div>
          </div>
        ))}

        <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-1.5 text-indigo-950">
          <span className="font-bold text-indigo-900 text-[10px] uppercase block">Validation Habit</span>
          <p className="text-[11px]">
            Run new pages through the W3C Markup Validator before shipping —
            it catches every category above automatically.
          </p>
        </div>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}
