import React from 'react';
import { DocTitle, DocP, DocH2, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CreatingProject() {
  return (
    <>
      <DocTitle eyebrow="Get started">Creating the project</DocTitle>

      <DocP>
        This page documents, step by step, exactly how the Code Magic project was scaffolded — so you
        can rebuild it from zero, or use the same recipe to start a new React + MUI project of your own.
      </DocP>

      <DocH2>Step 1 — Scaffold a React app with Create React App</DocH2>
      <CodeBlock language="bash" code={`npx create-react-app code_magic_by_me\ncd code_magic_by_me`} />
      <DocP>
        This generates a ready-to-run React project: a dev server, a build pipeline, and a default{' '}
        <code>src/App.js</code> — all with zero manual config.
      </DocP>

      <DocH2>Step 2 — Install MUI</DocH2>
      <CodeBlock
        language="bash"
        code={`npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`}
      />
      <DocP>
        <code>@mui/material</code> is the component library itself. MUI's styling engine is built on{' '}
        <code>@emotion/react</code> and <code>@emotion/styled</code>, so both are required peer
        dependencies. <code>@mui/icons-material</code> adds the icon set used throughout this site.
      </DocP>

      <DocH2>Step 3 — Install React Router (for this docs section)</DocH2>
      <CodeBlock language="bash" code={`npm install react-router-dom`} />
      <DocP>
        React Router handles navigation between the landing page (<code>/</code>) and the docs pages
        (<code>/docs/:sectionId</code>) without a full page reload.
      </DocP>

      <DocH2>Step 4 — Add Google Fonts</DocH2>
      <DocP>
        Three typefaces are loaded via <code>public/index.html</code>: <strong>Fraunces</strong> (serif
        display headings), <strong>Inter</strong> (body text), and <strong>JetBrains Mono</strong>{' '}
        (code and labels).
      </DocP>

      <DocH2>Step 5 — Build out the theme and components</DocH2>
      <DocP>
        From here, everything else is application code: a custom MUI theme (
        <code>src/theme.js</code>), the landing page sections (<code>src/components/</code>), and the
        docs you're reading right now (<code>src/pages/docs/</code>). See{' '}
        <strong>Project structure</strong> for the full folder layout.
      </DocP>

      <DocNote tone="warning">
        If you're rebuilding this from scratch rather than copying the provided source files, you'll
        need to recreate <code>theme.js</code> and each component file manually — Create React App only
        scaffolds the base project, not this app's custom code.
      </DocNote>
    </>
  );
}