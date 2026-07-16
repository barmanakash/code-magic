import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLCheatSheetDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML Cheat Sheet</DocTitle>

            <DocP>
                A fast, scannable reference for the tags, attributes, and structures you reach for most often — useful for a quick refresher rather than deep explanations (see the dedicated topic pages for those).
            </DocP>

            <DocH2>HTML Tags</DocH2>
            <CodeBlock
                language="html"
                code={`<!-- Document structure -->
<!DOCTYPE html>
<html lang="en"><head></head><body></body></html>

<!-- Text content -->
<h1> - <h6>          <!-- headings -->
<p>                     <!-- paragraph -->
<span>                    <!-- inline generic container -->
<div>                       <!-- block generic container -->
<a href="...">                <!-- link -->
<strong>  <em>                  <!-- bold / italic emphasis -->
<br>  <hr>                         <!-- line break / thematic break -->

<!-- Lists -->
<ul><li></li></ul>          <!-- unordered list -->
<ol><li></li></ol>            <!-- ordered list -->
<dl><dt></dt><dd></dd></dl>      <!-- description list -->

<!-- Media -->
<img src="..." alt="..." />
<audio controls src="..."></audio>
<video controls src="..."></video>
<figure><img /><figcaption></figcaption></figure>`}
            />

            <DocH2>Attributes</DocH2>
            <CodeBlock
                language="html"
                code={`id="uniqueName"            class="reusableName"
href="url"                    src="url"
alt="description"                title="tooltip text"
target="_blank"                    rel="noopener noreferrer"
disabled                             readonly
required                               placeholder="hint text"
data-*="custom-value"                    aria-label="accessible name"
tabindex="0"                               hidden
loading="lazy"                               contenteditable="true"`}
            />

            <DocH2>Forms</DocH2>
            <CodeBlock
                language="html"
                code={`<form action="/submit" method="POST" enctype="multipart/form-data">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <textarea name="message" rows="4"></textarea>

  <select name="plan">
    <option value="basic">Basic</option>
  </select>

  <input type="checkbox" name="agree" />
  <input type="radio" name="choice" value="a" />
  <input type="file" name="upload" />
  <input type="range" min="0" max="100" />

  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>

<!-- Common input types -->
text  email  password  number  date  time  color  range  file  checkbox  radio  search  tel  url`}
            />

            <DocH2>Tables</DocH2>
            <CodeBlock
                language="html"
                code={`<table>
  <caption>Table title</caption>
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Ava</td><td>25</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="2">Footer note</td></tr>
  </tfoot>
</table>

<!-- Merging cells -->
<td colspan="2">spans 2 columns</td>
<td rowspan="2">spans 2 rows</td>`}
            />

            <DocH2>Semantic Elements</DocH2>
            <CodeBlock
                language="html"
                code={`<header>       <!-- introductory content / navigation for a page or section -->
<nav>            <!-- major navigation links -->
<main>              <!-- the page's primary, unique content (one per page) -->
<section>             <!-- a thematic grouping of content, usually with a heading -->
<article>               <!-- self-contained, independently distributable content -->
<aside>                   <!-- tangentially related content (sidebars, pull quotes) -->
<footer>                    <!-- footer content for a page or section -->
<figure><figcaption>            <!-- self-contained media with a caption -->
<time datetime="2026-07-16">        <!-- machine-readable date/time -->
<details><summary>                     <!-- native collapsible disclosure widget -->
<mark>                                    <!-- highlighted/relevant text -->
<address>                                  <!-- contact information -->`}
            />

            <DocH2>Entities</DocH2>
            <CodeBlock
                language="html"
                code={`&lt;      <!-- < -->
&gt;         <!-- > -->
&amp;          <!-- & -->
&quot;           <!-- " -->
&apos;             <!-- ' -->
&nbsp;               <!-- non-breaking space -->
&copy;                 <!-- © -->
&reg;                    <!-- ® -->
&trade;                    <!-- ™ -->
&mdash;                       <!-- — -->
&hellip;                        <!-- … -->
&#169;                             <!-- © via numeric code -->`}
            />

            <DocNote tone="info">
                This sheet intentionally trades depth for speed — for the "why" behind any of these, check the corresponding full topic page in this documentation.
            </DocNote>
        </>
    );
}
