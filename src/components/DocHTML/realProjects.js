import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLRealProjectsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Real Projects to Practice HTML</DocTitle>

            <DocP>
                Structuring real pages is where semantic HTML actually clicks. Below are eight classic project ideas, each emphasizing different elements and structural patterns, with a representative semantic skeleton for each to help you get started.
            </DocP>

            <DocH2>Portfolio</DocH2>
            <DocP>A personal site showcasing your work, skills, and contact info.</DocP>
            <DocList
                items={[
                    'Key elements: header/nav, section per area (about, projects, skills, contact), figure/figcaption for project screenshots.',
                    'Stretch goals: a downloadable resume link, project filtering by category, a contact form.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<header>
  <nav><a href="#about">About</a> <a href="#projects">Projects</a> <a href="#contact">Contact</a></nav>
</header>
<main>
  <section id="about"><h1>Ava Smith</h1><p>Frontend developer...</p></section>
  <section id="projects">
    <h2>Projects</h2>
    <article>
      <figure>
        <img src="project1.png" alt="Screenshot of Project One dashboard" />
        <figcaption>Project One — a task management app</figcaption>
      </figure>
    </article>
  </section>
</main>
<footer><p>&copy; 2026 Ava Smith</p></footer>`}
            />

            <DocH2>Landing Page</DocH2>
            <DocP>A single-page marketing site for a product or service.</DocP>
            <DocList
                items={[
                    'Key elements: hero section, feature cards, testimonials, a prominent call-to-action form.',
                    'Stretch goals: an FAQ section using details/summary, a pricing table, an embedded video.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<section class="hero">
  <h1>Ship faster with FlowApp</h1>
  <p>The project management tool built for small teams.</p>
  <a href="#signup" class="cta-button">Get Started Free</a>
</section>
<section class="features">
  <article><h3>Fast Setup</h3><p>Get running in under 5 minutes.</p></article>
  <article><h3>Real-time Sync</h3><p>Your team, always in sync.</p></article>
</section>
<details>
  <summary>Is there a free plan?</summary>
  <p>Yes — up to 3 team members, forever free.</p>
</details>`}
            />

            <DocH2>Blog</DocH2>
            <DocP>A content-focused site listing articles with dates, authors, and categories.</DocP>
            <DocList
                items={[
                    'Key elements: article, time (with datetime attribute), semantic byline structure, pagination.',
                    'Stretch goals: tag-based filtering, an RSS feed link, a comment section.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<article>
  <header>
    <h2><a href="/posts/html-basics">Understanding HTML Semantics</a></h2>
    <p>By Ava Smith · <time datetime="2026-07-14">July 14, 2026</time></p>
  </header>
  <p>Semantic HTML describes meaning, not just appearance...</p>
  <footer><a href="/tags/html">#html</a> <a href="/tags/webdev">#webdev</a></footer>
</article>`}
            />

            <DocH2>Resume</DocH2>
            <DocP>A printable, structured resume/CV page.</DocP>
            <DocList
                items={[
                    'Key elements: definition lists (dl/dt/dd) for skills, ordered structure for work history, print-friendly semantic markup.',
                    'Stretch goals: a print stylesheet, a downloadable PDF version, structured data (JSON-LD) for search engines.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<section>
  <h2>Experience</h2>
  <article>
    <h3>Frontend Developer — TechCorp</h3>
    <p><time datetime="2023-01">Jan 2023</time> – Present</p>
    <ul>
      <li>Led a redesign that improved page load time by 40%</li>
    </ul>
  </article>
</section>
<section>
  <h2>Skills</h2>
  <dl>
    <dt>Languages</dt><dd>JavaScript, TypeScript, HTML, CSS</dd>
    <dt>Frameworks</dt><dd>React, Next.js</dd>
  </dl>
</section>`}
            />

            <DocH2>Restaurant Website</DocH2>
            <DocP>A small business site with a menu, hours, location, and reservation info.</DocP>
            <DocList
                items={[
                    'Key elements: a structured menu (using tables or definition-list-style markup), an embedded map iframe, address markup.',
                    'Stretch goals: an online reservation form, a photo gallery, structured data for local SEO.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<section id="menu">
  <h2>Menu</h2>
  <table>
    <thead><tr><th>Dish</th><th>Price</th></tr></thead>
    <tbody>
      <tr><td>Margherita Pizza</td><td>$12</td></tr>
      <tr><td>Caesar Salad</td><td>$9</td></tr>
    </tbody>
  </table>
</section>
<address>
  123 Main Street, Delhi · <a href="tel:+911234567890">+91 12345 67890</a>
</address>`}
            />

            <DocH2>E-commerce Homepage</DocH2>
            <DocP>A storefront homepage showcasing featured products and categories.</DocP>
            <DocList
                items={[
                    'Key elements: product cards (figure/figcaption or article per product), a search form, category navigation.',
                    'Stretch goals: a shopping cart icon with item count, a newsletter signup form, breadcrumb navigation.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<nav aria-label="Categories">
  <a href="/electronics">Electronics</a> <a href="/clothing">Clothing</a>
</nav>
<section aria-label="Featured Products">
  <article class="product-card">
    <img src="headphones.jpg" alt="Wireless over-ear headphones in black" />
    <h3>Wireless Headphones</h3>
    <p>$79.99</p>
    <button type="button">Add to Cart</button>
  </article>
</section>`}
            />

            <DocH2>News Website</DocH2>
            <DocP>A content-heavy homepage with a headline story, secondary stories, and category sections.</DocP>
            <DocList
                items={[
                    'Key elements: aside for secondary/related content, multiple nested article/section combinations, byline and timestamp metadata.',
                    'Stretch goals: a "breaking news" ticker, category-based navigation, an embedded video article.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<main>
  <article class="lead-story">
    <h1>Major Policy Announcement Made Today</h1>
    <p>By Staff Writer · <time datetime="2026-07-16">July 16, 2026</time></p>
    <p>In a statement this morning...</p>
  </article>
  <aside aria-label="Related stories">
    <h2>More on this topic</h2>
    <ul>
      <li><a href="/related-1">Background: how we got here</a></li>
    </ul>
  </aside>
</main>`}
            />

            <DocH2>Product Page</DocH2>
            <DocP>A detailed single-product page with images, specs, reviews, and a purchase form.</DocP>
            <DocList
                items={[
                    'Key elements: figure for the product gallery, a definition list or table for specs, meter/progress for stock levels, a form for size/quantity selection.',
                    'Stretch goals: a review section with star ratings (via meter), related products, an image zoom feature.',
                ]}
            />
            <CodeBlock
                language="html"
                code={`<article>
  <figure>
    <img src="shoe-main.jpg" alt="Blue running shoe, side view" />
  </figure>
  <h1>Trail Runner Pro</h1>
  <p>$120.00</p>

  <form>
    <label for="size">Size</label>
    <select id="size" name="size">
      <option>8</option><option>9</option><option>10</option>
    </select>
    <button type="submit">Add to Cart</button>
  </form>

  <section aria-label="Specifications">
    <dl>
      <dt>Weight</dt><dd>250g</dd>
      <dt>Material</dt><dd>Mesh, rubber sole</dd>
    </dl>
  </section>
</article>`}
            />

            <DocNote tone="info">
                Notice a common thread across all eight: real content structures rarely need more than a handful of semantic elements — header, nav, main, section, article, aside, footer — combined thoughtfully. Reaching for a generic div should be the exception, not the default.
            </DocNote>
        </>
    );
}
