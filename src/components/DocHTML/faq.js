import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLFaqDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML FAQs</DocTitle>

            <DocP>
                A final round-up of the questions most frequently asked about HTML fundamentals — quick, direct answers to wrap up this section.
            </DocP>

            <DocH2>Frequently Asked Questions</DocH2>

            <DocH3>What is HTML?</DocH3>
            <DocP>
                HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. It describes the meaning and structure of a page — headings, paragraphs, links, images, forms — which browsers then render visually, typically styled with CSS and made interactive with JavaScript.
            </DocP>

            <DocH3>HTML vs HTML5?</DocH3>
            <DocP>
                HTML5 is simply the current, modern version of the HTML specification — not a separate language. It introduced semantic elements (header, nav, article, section), native audio/video support, form input types, canvas/SVG graphics, and numerous JavaScript APIs (geolocation, drag and drop, local storage) that earlier HTML versions lacked, while dropping the more rigid XML-based syntax rules of XHTML.
            </DocP>

            <DocH3>HTML vs XHTML?</DocH3>
            <DocP>
                XHTML reformulated HTML to follow strict XML syntax rules — every tag must be properly closed, attribute values must always be quoted, and tags must be lowercase, with malformed markup causing the ENTIRE page to fail to render. HTML5 is more forgiving: browsers automatically recover from many syntax mistakes rather than refusing to render the page. XHTML has largely fallen out of common use in favor of standard HTML5.
            </DocP>

            <DocH3>What is Semantic HTML?</DocH3>
            <DocP>
                Semantic HTML means choosing elements based on their meaning rather than just their default appearance — using header, nav, main, article, and footer instead of generic divs for everything. It improves accessibility (screen readers can navigate by landmark), SEO (search engines weigh semantically structured content), and code readability for other developers.
            </DocP>

            <DocH3>What is DOCTYPE?</DocH3>
            <DocP>
                `&lt;!DOCTYPE html&gt;` is a required declaration at the very top of every HTML document, telling the browser to render the page in modern "standards mode" following the HTML5 specification, rather than a legacy "quirks mode" with inconsistent, browser-specific rendering behavior.
            </DocP>

            <DocH3>Why use alt?</DocH3>
            <DocP>
                The `alt` attribute on an `img` provides a text alternative describing the image's content or purpose. It's read aloud by screen readers for visually impaired users, displayed if the image fails to load, and used by search engines to understand image content — making it essential for accessibility, resilience, and SEO all at once.
            </DocP>

            <DocH3>Difference between div and span?</DocH3>
            <DocP>
                `div` is a block-level generic container — it starts on a new line and takes the full available width, used to group larger sections of content. `span` is an inline generic container — it flows within surrounding text and only takes up as much width as its content needs, used to wrap small portions of text or inline elements for styling/scripting purposes.
            </DocP>
            <CodeBlock
                language="html"
                code={`<div>This starts on its own line and takes full width.</div>

<p>This sentence has a <span style="color: red;">highlighted word</span> inline.</p>`}
            />

            <DocH3>What is the viewport meta tag?</DocH3>
            <DocP>
                The viewport meta tag controls how a page is scaled and sized on mobile devices — without it, mobile browsers render the page at a desktop width and then zoom out, making text tiny and layouts broken. It's essential for any responsive design to work correctly.
            </DocP>
            <CodeBlock
                language="html"
                code={`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`}
            />
            <DocList
                items={[
                    'width=device-width: sets the page width to match the device\'s actual screen width, rather than a default desktop-sized viewport.',
                    'initial-scale=1.0: sets the initial zoom level to 1 (no zoom) when the page first loads.',
                ]}
            />

            <DocNote tone="info">
                This page wraps up the HTML documentation section — for deeper coverage of any topic mentioned briefly here, check its dedicated page in the sidebar.
            </DocNote>
        </>
    );
}
