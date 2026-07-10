import React from 'react';
import { DocTitle, DocP, DocH2 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function Faq() {
  return (
    <>
      <DocTitle eyebrow="Ship it">FAQ & troubleshooting</DocTitle>

      <DocH2>"npm start" opens a blank page or errors out</DocH2>
      <DocP>Delete <code>node_modules</code> and the lockfile, then reinstall clean:</DocP>
      <CodeBlock language="bash" code={`rm -rf node_modules package-lock.json\nnpm install\nnpm start`} />

      <DocH2>Port 3000 is already in use</DocH2>
      <DocP>Either stop whatever else is running on that port, or start on a different one:</DocP>
      <CodeBlock language="bash" code={`PORT=3001 npm start`} />
      <DocP>On Windows (Command Prompt), use <code>set PORT=3001 && npm start</code> instead.</DocP>

      <DocH2>Fonts look like the browser default, not Fraunces/Inter/JetBrains Mono</DocH2>
      <DocP>
        Check your internet connection — the fonts load from Google Fonts via a <code>&lt;link&gt;</code>{' '}
        tag in <code>public/index.html</code>. If you need the site to work fully offline, download the
        font files and self-host them instead.
      </DocP>

      <DocH2>"npm run build" fails with ESLint errors</DocH2>
      <DocP>
        Create React App treats warnings as build-breaking errors only when the <code>CI</code>{' '}
        environment variable is set to <code>true</code>. Locally, <code>npm run build</code> will still
        show the warnings but won't necessarily fail unless CI is set — fix the specific warning listed
        in the terminal output, or run without CI mode to confirm.
      </DocP>

      <DocH2>Docs sidebar doesn't highlight the active page</DocH2>
      <DocP>
        The sidebar reads the current route via <code>useParams()</code> from React Router. Make sure
        the app is wrapped in a <code>&lt;BrowserRouter&gt;</code> in <code>src/index.js</code> — without
        it, routing hooks won't work.
      </DocP>

      <DocH2>Still stuck?</DocH2>
      <DocP>
        Re-read <strong>Installation</strong> and <strong>Running the project</strong> in order — most
        setup issues come from a skipped step, not a bug in the code.
      </DocP>
    </>
  );
}