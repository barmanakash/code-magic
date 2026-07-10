import React from 'react';
import { DocTitle, DocP, DocH2, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function Deployment() {
  return (
    <>
      <DocTitle eyebrow="Ship it">Deployment</DocTitle>

      <DocP>
        This is a static site once built — no server-side code required — so it can be hosted almost
        anywhere that serves static files.
      </DocP>

      <DocH2>1. Build the production bundle</DocH2>
      <CodeBlock language="bash" code={`npm run build`} />
      <DocP>
        This creates a <code>build/</code> folder containing minified HTML, CSS, and JS — this folder is
        what you deploy, not the source code.
      </DocP>

      <DocH2>Option A — Netlify</DocH2>
      <DocP>Drag-and-drop friendly, and supports Git-based auto-deploys.</DocP>
      <CodeBlock
        language="text"
        filename="Netlify settings"
        code={`Build command:      npm run build\nPublish directory:  build`}
      />

      <DocH2>Option B — Vercel</DocH2>
      <CodeBlock language="bash" code={`npm install -g vercel\nvercel`} />
      <DocP>Vercel auto-detects Create React App projects and configures the build for you.</DocP>

      <DocH2>Option C — GitHub Pages</DocH2>
      <CodeBlock language="bash" code={`npm install --save-dev gh-pages`} />
      <DocP>Add these to <code>package.json</code>:</DocP>
      <CodeBlock
        language="json"
        filename="package.json"
        code={`"homepage": "https://<your-username>.github.io/code_magic_by_me",\n"scripts": {\n  "predeploy": "npm run build",\n  "deploy": "gh-pages -d build"\n}`}
      />
      <CodeBlock language="bash" code={`npm run deploy`} />

      <DocNote tone="warning">
        Because this site uses client-side routing (React Router) for <code>/docs/:sectionId</code>{' '}
        URLs, make sure your host redirects unknown paths back to <code>index.html</code>. Netlify and
        Vercel do this automatically for React apps; GitHub Pages needs a small workaround (search
        "React Router GitHub Pages 404" if you hit this).
      </DocNote>
    </>
  );
}