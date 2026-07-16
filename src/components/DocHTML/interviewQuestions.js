import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLInterviewQuestionsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Interview Questions</DocTitle>

            <DocP>
                A curated set of HTML questions commonly asked in frontend interviews, organized by difficulty and format — conceptual questions, questions with a practical/applied angle, and "predict the output/behavior" style questions.
            </DocP>

            <DocH2>Beginner</DocH2>

            <DocH3>What is the difference between HTML elements and tags?</DocH3>
            <DocP>
                A tag is the markup itself — the opening `&lt;p&gt;` or closing `&lt;/p&gt;`. An element is the complete unit: the opening tag, its content, and the closing tag together (or a self-closing tag like `&lt;img /&gt;` for void elements that never have content).
            </DocP>

            <DocH3>What is the difference between block-level and inline elements?</DocH3>
            <DocP>
                Block-level elements (like `div`, `p`, `h1`) start on a new line and take up the full available width by default. Inline elements (like `span`, `a`, `strong`) sit within the flow of surrounding text and only take up as much width as their content needs.
            </DocP>

            <DocH3>What is the purpose of the DOCTYPE declaration?</DocH3>
            <DocP>
                `&lt;!DOCTYPE html&gt;` tells the browser to render the page in "standards mode" rather than the older, inconsistent "quirks mode" — ensuring the page is interpreted according to the modern HTML5 specification.
            </DocP>

            <DocH3>What is semantic HTML, and why does it matter?</DocH3>
            <DocP>
                Semantic HTML uses elements that describe their meaning, not just their appearance — `header`, `nav`, `article`, `footer` instead of generic `div`s for everything. It improves accessibility (screen readers understand page structure), SEO (search engines weigh semantic content), and code readability.
            </DocP>

            <DocH2>Intermediate</DocH2>

            <DocH3>What's the difference between id and class attributes?</DocH3>
            <DocP>
                `id` must be unique per page and is used for a single specific element (JS hooks, label associations, anchor links). `class` can be reused across many elements and is meant for styling/grouping shared behavior across multiple elements.
            </DocP>

            <DocH3>What's the difference between localStorage, sessionStorage, and cookies from an HTML/browser perspective?</DocH3>
            <DocP>
                localStorage persists indefinitely per origin. sessionStorage persists only for the current tab's lifetime. Cookies are small (roughly 4KB), automatically sent to the server with every matching request, and can carry an expiration date — making them the mechanism traditionally used for authentication sessions.
            </DocP>

            <DocH3>Explain the difference between GET and POST methods on a form.</DocH3>
            <DocP>
                GET appends form data as visible URL query parameters — bookmarkable, but unsuitable for sensitive or large data. POST sends data in the request body, invisible in the URL, and is the correct choice for anything sensitive or that changes server-side state.
            </DocP>

            <DocH3>What is the purpose of the alt attribute, and what happens if it's omitted?</DocH3>
            <DocP>
                `alt` provides a text alternative for an image, read aloud by screen readers and shown if the image fails to load. Omitting it entirely (versus using `alt=""` intentionally for decorative images) is treated worse by assistive technology than an explicitly empty value.
            </DocP>

            <DocH2>Advanced</DocH2>

            <DocH3>What is the Shadow DOM, and how does it differ from the regular DOM?</DocH3>
            <DocP>
                The Shadow DOM is an encapsulated mini-DOM tree attached to an element via `attachShadow()`. Styles and markup inside it are isolated from the rest of the page — CSS doesn't leak in or out — unlike the regular (light) DOM, which is a single shared tree where styles cascade freely across the whole document.
            </DocP>

            <DocH3>How does the browser handle invalid or malformed HTML?</DocH3>
            <DocP>
                Browsers use error-recovery algorithms defined in the HTML5 parsing spec to "fix" invalid markup automatically — closing unclosed tags, moving misplaced elements, and so on. Different browsers historically handled this differently before HTML5 standardized the recovery behavior, which is why validating markup against the W3C Validator is still worthwhile even though pages usually "work" anyway.
            </DocP>

            <DocH3>What is the difference between defer and async on a script tag?</DocH3>
            <CodeBlock
                language="html"
                code={`<script src="app.js"></script>          <!-- blocks HTML parsing until downloaded AND executed -->
<script src="app.js" async></script>        <!-- downloads in parallel, executes AS SOON AS ready (order not guaranteed with other async scripts) -->
<script src="app.js" defer></script>           <!-- downloads in parallel, executes AFTER parsing finishes, in original document order -->`}
            />
            <DocP>
                `defer` is generally preferred for scripts that need the DOM to be ready and need to run in a predictable order relative to other scripts.
            </DocP>

            <DocH3>Explain how the browser's rendering pipeline works from HTML to pixels on screen.</DocH3>
            <DocList
                items={[
                    'Parsing: HTML is parsed into the DOM tree; CSS is parsed into the CSSOM tree.',
                    'Render tree construction: DOM and CSSOM are combined into a render tree, excluding non-visible nodes (like display: none elements).',
                    'Layout (reflow): the browser calculates exact size and position for every element in the render tree.',
                    'Paint: pixels are actually drawn for each element based on its computed styles.',
                    'Composite: painted layers are combined in the correct order onto the screen.',
                ]}
            />

            <DocH2>Practical Questions</DocH2>

            <DocH3>You need a form field for a country selector with 190+ options grouped by continent. Which elements would you use?</DocH3>
            <CodeBlock
                language="html"
                code={`<label for="country">Country</label>
<select id="country" name="country">
  <optgroup label="Asia">
    <option value="in">India</option>
    <option value="jp">Japan</option>
  </optgroup>
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="de">Germany</option>
  </optgroup>
</select>`}
            />
            <DocP>
                `select` with `optgroup` groups related options under labeled headings, making a long list far easier to scan than one flat list of 190 options.
            </DocP>

            <DocH3>How would you make an image accessible AND provide a longer description for complex images like charts or diagrams?</DocH3>
            <CodeBlock
                language="html"
                code={`<figure>
  <img src="sales-chart.png" alt="Bar chart of quarterly sales, trending upward" aria-describedby="chart-desc" />
  <figcaption id="chart-desc">
    Detailed description: Q1 sales were $50k, rising steadily to $120k by Q4,
    with the sharpest growth occurring between Q2 and Q3.
  </figcaption>
</figure>`}
            />

            <DocH3>How would you build a reusable, style-encapsulated component using only native HTML (no framework)?</DocH3>
            <DocP>
                Use a `template` element to define the markup, `attachShadow()` to encapsulate it, and `slot` elements to let consumers project their own content in — the native Web Components approach covered on the HTML Templates page.
            </DocP>

            <DocH2>Output-based Questions</DocH2>

            <DocH3>Question 1</DocH3>
            <CodeBlock
                language="html"
                code={`<p>First paragraph <div>Nested div</div> still first paragraph</p>
<!-- What happens? -->
<!-- Answer: the browser auto-closes the <p> before the invalid <div>,
     producing: <p>First paragraph</p><div>Nested div</div> still first paragraph
     (the trailing text ends up OUTSIDE any paragraph at all) -->`}
            />

            <DocH3>Question 2</DocH3>
            <CodeBlock
                language="html"
                code={`<div id="box">First</div>
<div id="box">Second</div>
<script>
  console.log(document.getElementById("box").textContent);
</script>
<!-- What gets logged? -->
<!-- Answer: "First" — getElementById always returns only the FIRST match
     in the document, even though having duplicate IDs is invalid HTML -->`}
            />

            <DocH3>Question 3</DocH3>
            <CodeBlock
                language="html"
                code={`<input type="text" placeholder="Enter name" required>
<!-- Is this input accessible? -->
<!-- Answer: No — it has no associated <label>. Screen readers may announce
     little or nothing useful, since a placeholder is not a substitute
     for a proper label. -->`}
            />

            <DocNote tone="info">
                For interviews specifically, explaining your reasoning as you answer — including WHY a fix matters (accessibility, SEO, standards compliance) — tends to demonstrate deeper understanding than a short correct answer alone.
            </DocNote>
        </>
    );
}
