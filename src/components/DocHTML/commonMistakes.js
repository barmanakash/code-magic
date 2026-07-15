import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLCommonMistakesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Common HTML Mistakes: Accessibility Gaps, Structural Errors, and Markup Validity</DocTitle>

            <DocP>
                Certain HTML mistakes show up repeatedly across codebases — mostly because the browser is remarkably forgiving about malformed markup, silently "fixing" errors instead of throwing them. That forgiveness hides real problems: broken accessibility, unpredictable rendering, and invalid documents that only surface as bugs later.
            </DocP>

            <DocH2>Common Mistakes</DocH2>

            <DocH3>1. Missing Alt Text</DocH3>
            <DocP>
                Every meaningful <code>&lt;img&gt;</code> needs an <code>alt</code> attribute describing its content — screen reader users rely on it entirely, and browsers display it if the image fails to load.
            </DocP>
            <CodeBlock
                language="html"
                code={`<!-- MISTAKE: missing alt entirely -->
<img src="team-photo.jpg" />

<!-- MISTAKE: unhelpful alt text -->
<img src="team-photo.jpg" alt="image" />

<!-- CORRECT: describes the actual content -->
<img src="team-photo.jpg" alt="Our five-person engineering team at the 2026 offsite" />

<!-- CORRECT: purely decorative images use an EMPTY alt, not a missing one -->
<img src="divider-line.svg" alt="" />`}
            />

            <DocH3>2. Improper Nesting</DocH3>
            <DocP>
                HTML has strict rules about which elements can contain which others. Violating them produces invalid, unpredictable markup that the browser silently "repairs" in ways you didn't intend.
            </DocP>
            <CodeBlock
                language="html"
                code={`<!-- MISTAKE: <p> cannot contain block-level elements like <div> -->
<p>
  Some text
  <div>This breaks the paragraph</div>
</p>

<!-- MISTAKE: <a> wrapping a <button> — invalid, browsers handle it inconsistently -->
<a href="/page">
  <button>Click</button>
</a>

<!-- MISTAKE: overlapping tags instead of properly nested ones -->
<b><i>bold and italic</b></i>

<!-- CORRECT: properly closed, non-overlapping nesting -->
<b><i>bold and italic</i></b>

<!-- CORRECT: use a <div> or restructure instead of nesting block inside inline paragraph -->
<div>
  <p>Some text</p>
  <div>Separate block content</div>
</div>`}
            />

            <DocH3>3. Missing Labels</DocH3>
            <DocP>
                Every form input needs an associated <code>&lt;label&gt;</code> — without one, screen reader users have no idea what the field is for, and sighted users lose the larger clickable target a label provides.
            </DocP>
            <CodeBlock
                language="html"
                code={`<!-- MISTAKE: placeholder text is NOT a substitute for a label -->
<input type="email" placeholder="Email Address" />

<!-- MISTAKE: visually adjacent text isn't programmatically linked to the input -->
<span>Email Address</span>
<input type="email" />

<!-- CORRECT: explicit label linked via matching for/id -->
<label for="email">Email Address</label>
<input type="email" id="email" />

<!-- CORRECT: implicit label — wrapping the input works too, no 'for'/'id' needed -->
<label>
  Email Address
  <input type="email" />
</label>`}
            />

            <DocH3>4. Deprecated Tags</DocH3>
            <DocP>
                Older presentational tags from early HTML versions have been deprecated in favor of CSS — they may still render in browsers for backward compatibility, but shouldn't be used in new code.
            </DocP>
            <CodeBlock
                language="html"
                code={`<!-- MISTAKE: deprecated presentational tags -->
<center>Welcome</center>
<font color="red" size="5">Important</font>
<b>Bold via legacy styling intent</b>

<!-- CORRECT: semantic markup + CSS for styling -->
<h1 style="text-align: center;">Welcome</h1>
<p class="warning-text">Important</p>
<strong>Bold with actual semantic meaning</strong>`}
            />
            <DocNote tone="info">
                See the dedicated Deprecated Tags page for a full list of obsolete elements and their modern replacements.
            </DocNote>

            <DocH3>5. Duplicate IDs</DocH3>
            <DocP>
                An <code>id</code> must be unique within an entire document. Duplicates break CSS selectors, JavaScript's <code>getElementById</code> (which only ever returns the first match), label associations, and anchor links.
            </DocP>
            <CodeBlock
                language="html"
                code={`<!-- MISTAKE: the same id used on two different elements -->
<div id="card">First card</div>
<div id="card">Second card</div>

<script>
  document.getElementById("card"); // ALWAYS returns the first one — the second is invisible to this lookup
</script>

<!-- CORRECT: unique ids, use a shared CLASS for shared styling instead -->
<div id="card-1" class="card">First card</div>
<div id="card-2" class="card">Second card</div>`}
            />

            <DocH3>6. Invalid HTML</DocH3>
            <DocP>
                Beyond the specific mistakes above, general markup validity issues — unclosed tags, missing required attributes, incorrect attribute values — quietly degrade both accessibility and SEO, even when the page "looks fine" visually.
            </DocP>
            <CodeBlock
                language="html"
                code={`<!-- MISTAKE: unclosed tags relying on browser auto-correction -->
<ul>
  <li>Item one
  <li>Item two
</ul>

<!-- MISTAKE: invalid attribute value -->
<input type="mail" /> <!-- not a real input type — silently falls back to type="text" -->

<!-- CORRECT: explicitly closed tags, valid attribute values -->
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
<input type="email" />`}
            />
            <DocList
                items={[
                    'Use the W3C Markup Validation Service (validator.w3.org) to catch structural errors automatically.',
                    'Most code editors with an HTML linting extension flag many of these issues live, before you even save the file.',
                    'Automated accessibility checkers (like axe DevTools or Lighthouse) catch missing alt text, missing labels, and other a11y-related mistakes specifically.',
                ]}
            />
        </>
    );
}
