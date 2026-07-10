import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function Installation() {
  return (
    <>
      <DocTitle eyebrow="Get started">Installation</DocTitle>

      <DocP>Before running this project, install the following on your machine:</DocP>

      <DocH2>1. Node.js and npm</DocH2>
      <DocP>
        This project needs <strong>Node.js 18 or later</strong> (npm comes bundled with it). Check what
        you have installed:
      </DocP>
      <CodeBlock language="bash" code={`node -v\nnpm -v`} />
      <DocP>
        If either command isn't recognized, download the LTS installer from{' '}
        <strong>nodejs.org</strong> and re-run the checks above after installing.
      </DocP>

      <DocH2>2. A code editor</DocH2>
      <DocP>
        Any editor works, but <strong>VS Code</strong> is a solid free option with good React and MUI
        autocomplete support.
      </DocP>

      <DocH2>3. Git (optional, recommended)</DocH2>
      <DocP>Useful if you want to version-control the project or push it to GitHub later.</DocP>
      <CodeBlock language="bash" code={`git --version`} />

      <DocNote tone="info">
        You do not need to install React, MUI, or any other library globally — they're installed
        per-project via <code>npm install</code>, covered in the next section.
      </DocNote>

      <DocH2>What you'll end up with</DocH2>
      <DocList
        items={[
          'A local copy of the Code Magic project on your machine.',
          'All dependencies installed inside a project-local node_modules folder.',
          'A dev server you can run with one command to preview the site live.',
        ]}
      />
    </>
  );
}