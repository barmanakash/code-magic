import React from 'react';
import { DocTitle, DocP, DocH2, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function RunningProject() {
  return (
    <>
      <DocTitle eyebrow="Get started">Running the project</DocTitle>

      <DocP>
        Once you have the project folder on your machine (see <strong>Creating the project</strong> or
        your unzipped copy), here's the full end-to-end workflow.
      </DocP>

      <DocH2>1. Install dependencies</DocH2>
      <DocP>From inside the project folder, run:</DocP>
      <CodeBlock language="bash" code={`npm install`} />
      <DocP>
        This reads <code>package.json</code> and downloads every dependency into a local{' '}
        <code>node_modules</code> folder. Only needs to be run once — or again any time{' '}
        <code>package.json</code> changes.
      </DocP>

      <DocH2>2. Start the development server</DocH2>
      <CodeBlock language="bash" code={`npm start`} />
      <DocP>
        This opens the app at <strong>http://localhost:3000</strong> and watches your files — any edit
        you save is reflected in the browser almost instantly, without a manual refresh.
      </DocP>
      <DocNote tone="info">
        Leave this command running in its own terminal window while you work. Press{' '}
        <code>Ctrl + C</code> in that terminal to stop it.
      </DocNote>

      <DocH2>3. Run the test suite</DocH2>
      <CodeBlock language="bash" code={`npm test`} />
      <DocP>
        Launches the test runner in interactive watch mode. This project ships with the default
        Create React App testing setup (Jest + React Testing Library).
      </DocP>

      <DocH2>4. Build for production</DocH2>
      <CodeBlock language="bash" code={`npm run build`} />
      <DocP>
        Produces an optimized, minified build in a new <code>build/</code> folder — this is the folder
        you actually deploy. See <strong>Deployment</strong> for hosting instructions.
      </DocP>

      <DocH2>Quick reference</DocH2>
      <CodeBlock
        language="bash"
        filename="all commands"
        code={`npm install     # install dependencies (run once)\nnpm start       # run the dev server at localhost:3000\nnpm test        # run tests in watch mode\nnpm run build   # create an optimized production build`}
      />
    </>
  );
}