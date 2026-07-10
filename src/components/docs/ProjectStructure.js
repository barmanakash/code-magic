import React from 'react';
import { DocTitle, DocP, DocH2 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function ProjectStructure() {
  return (
    <>
      <DocTitle eyebrow="Understanding the code">Project structure</DocTitle>

      <DocP>Here's the full folder layout, and what belongs where.</DocP>

      <CodeBlock
        language="text"
        filename="folder tree"
        code={`code_magic_by_me/
├── public/
│   └── index.html          # HTML shell + Google Fonts links
├── src/
│   ├── components/
│   │   ├── Navbar.js        # top navigation bar
│   │   ├── Hero.js          # landing page hero section
│   │   ├── SpellBlock.js    # animated code-block used in the hero
│   │   ├── Features.js      # feature grid section
│   │   ├── HowItWorks.js    # 3-step process section
│   │   ├── CtaFooter.js     # call-to-action + footer
│   │   └── docs/
│   │       ├── CodeBlock.js       # terminal-style code block (docs)
│   │       ├── DocsSidebar.js     # left-hand docs navigation
│   │       └── DocPrimitives.js   # shared docs typography helpers
│   ├── pages/
│   │   ├── Home.js           # composes the landing page sections
│   │   ├── DocsPage.js        # docs layout: sidebar + routed content
│   │   └── docs/
│   │       ├── Introduction.js
│   │       ├── Installation.js
│   │       ├── CreatingProject.js
│   │       ├── RunningProject.js
│   │       ├── ProjectStructure.js
│   │       ├── ComponentsOverview.js
│   │       ├── Theming.js
│   │       ├── Deployment.js
│   │       └── Faq.js
│   ├── data/
│   │   └── docsNav.js        # sidebar nav config (groups + links)
│   ├── theme.js               # MUI theme: palette, typography
│   ├── App.js                  # router setup, top-level routes
│   ├── index.js                 # React entry point
│   └── index.css                 # global base styles
└── package.json`}
      />

      <DocH2>Why it's organized this way</DocH2>
      <DocP>
        <strong>components/</strong> holds anything reused or visual — a section of the landing page, or
        a shared docs building block like <code>CodeBlock</code>.
      </DocP>
      <DocP>
        <strong>pages/</strong> holds the things routed to directly — one file per URL, essentially.
        Each docs page under <code>pages/docs/</code> is plain content built from the shared primitives
        in <code>components/docs/DocPrimitives.js</code>, so every page looks consistent without
        repeating layout code.
      </DocP>
      <DocP>
        <strong>data/</strong> holds configuration, not UI — in this case, the list of sidebar links.
        Add a new docs page by creating the file in <code>pages/docs/</code>, then adding one entry to{' '}
        <code>data/docsNav.js</code> and one line in <code>DocsPage.js</code>.
      </DocP>
    </>
  );
}