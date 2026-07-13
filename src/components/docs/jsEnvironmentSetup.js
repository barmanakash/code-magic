import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptEnvironmentSetupDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Environment Setup</DocTitle>

            <DocP>
                Before writing any real JavaScript, it helps to set up a proper local environment — an editor, a browser you know well, and (once you go beyond simple browser scripts) a JavaScript runtime like Node.js along with a package manager. This page walks through each piece and how to confirm it's working.
            </DocP>

            <DocH2>1. Installing VS Code</DocH2>
            <DocP>
                Visual Studio Code is the most widely used editor for JavaScript thanks to its built-in IntelliSense, debugger, and integrated terminal.
            </DocP>
            <DocList
                items={[
                    'Download the installer for your OS from the official VS Code website and run it — defaults are fine for most users.',
                    'On first launch, install the recommended extensions for JavaScript: ESLint (linting), Prettier (formatting), and optionally Live Server (auto-reloading local preview).',
                    'Open the integrated terminal with Ctrl+` (backtick) — you will use this constantly to run scripts and Node/npm commands.',
                ]}
            />

            <DocH2>2. Browser Setup</DocH2>
            <DocP>
                Pick one modern browser as your primary development browser and get comfortable with it (Chrome and Firefox both have excellent DevTools). Keep it updated, since new JavaScript engine features land in new browser releases.
            </DocP>
            <DocList
                items={[
                    'Disable ad blockers or heavy extensions on your local test pages — they can intercept network requests and produce confusing console errors that have nothing to do with your code.',
                    'Bookmark `about:blank` or a simple local HTML file as your scratch page for quickly testing snippets.',
                ]}
            />

            <DocH2>3. Node.js Installation</DocH2>
            <DocP>
                Node.js lets JavaScript run outside the browser — on your machine, directly from the terminal — and is required for using npm, build tools, and backend frameworks.
            </DocP>
            <DocList
                items={[
                    'Download the LTS (Long-Term Support) version from the official Node.js website — LTS is more stable for learning and production use than the "Current" release line.',
                    'Alternatively, use a version manager like nvm (Node Version Manager) so you can switch Node versions per project without conflicts.',
                    'Installing Node.js automatically installs npm alongside it — no separate installation step is needed for npm.',
                ]}
            />

            <DocH2>4. npm Installation</DocH2>
            <DocP>
                npm (Node Package Manager) ships bundled with Node.js. It manages your project's dependencies and lets you run scripts defined in `package.json`.
            </DocP>
            <CodeBlock
                language="bash"
                filename="terminal"
                code={`# npm comes pre-installed with Node.js — just confirm the version
npm -v

# Initialize a new project (creates package.json)
npm init -y

# Install a package and save it as a dependency
npm install lodash`}
            />

            <DocH2>5. Yarn</DocH2>
            <DocP>
                Yarn is an alternative package manager built for speed and reliability, using a lockfile (`yarn.lock`) to guarantee consistent installs across machines.
            </DocP>
            <CodeBlock
                language="bash"
                filename="terminal"
                code={`# Install Yarn globally via npm
npm install --global yarn

# Verify installation
yarn -v

# Common commands
yarn init -y
yarn add lodash`}
            />

            <DocH2>6. pnpm</DocH2>
            <DocP>
                pnpm is a fast, disk-space-efficient package manager. Instead of duplicating packages across every project, it stores a single copy on disk and links to it, which speeds up installs significantly on large projects.
            </DocP>
            <CodeBlock
                language="bash"
                filename="terminal"
                code={`# Install pnpm globally via npm
npm install --global pnpm

# Verify installation
pnpm -v

# Common commands
pnpm init
pnpm add lodash`}
            />

            <DocH2>7. Bun</DocH2>
            <DocP>
                Bun is a newer, all-in-one JavaScript runtime, bundler, test runner, and package manager, built for speed using the JavaScriptCore engine. It aims to be largely compatible with Node.js and npm workflows while running significantly faster for many tasks.
            </DocP>
            <CodeBlock
                language="bash"
                filename="terminal"
                code={`# macOS / Linux
curl -fsSL https://bun.sh/install | bash

# Verify installation
bun -v

# Run a file directly
bun run app.js`}
            />

            <DocH2>8. Running JavaScript</DocH2>
            <DocP>
                There are three common ways to actually execute JavaScript code while learning:
            </DocP>
            <DocList
                items={[
                    'In a browser via a <script> tag: link a .js file to an HTML page and open it in the browser — good for anything involving the DOM.',
                    'In the browser console: paste or type JavaScript directly and press Enter to run it immediately — perfect for quick experiments.',
                    'With Node.js from the terminal: run a .js file directly using the `node` command — ideal for scripts that don\'t need a browser/DOM.',
                ]}
            />
            <CodeBlock
                language="html"
                filename="index.html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Script</title>
</head>
<body>
  <h1>Hello!</h1>
  <script src="app.js"></script>
</body>
</html>`}
            />

            <DocH2>9. Browser Console</DocH2>
            <DocP>
                The console is the fastest way to experiment with JavaScript with zero setup. Open it with <strong>F12</strong> or <strong>Ctrl+Shift+J</strong> (Chrome) / <strong>Ctrl+Shift+K</strong> (Firefox), go to the "Console" tab, and start typing.
            </DocP>
            <CodeBlock
                language="javascript"
                filename="browser console"
                code={`// Type directly into the console and press Enter
1 + 1                     // 2
"hello".toUpperCase()     // "HELLO"

const arr = [3, 1, 2];
arr.sort();                // [1, 2, 3]

console.log("It works!");`}
            />

            <DocH2>10. Verify Installation</DocH2>
            <DocP>
                Once everything is set up, run this quick checklist in your terminal to confirm every tool is correctly installed and on your PATH:
            </DocP>
            <CodeBlock
                language="bash"
                filename="terminal"
                code={`node -v      # e.g. v22.11.0
npm -v       # e.g. 10.9.0
yarn -v      # e.g. 1.22.22 (if installed)
pnpm -v      # e.g. 9.12.0 (if installed)
bun -v       # e.g. 1.1.34 (if installed)

# Quick sanity check — should print "Environment ready"
node -e "console.log('Environment ready')"`}
            />

            <DocNote tone="info">
                You do not need Yarn, pnpm, and Bun all at once — npm alone is enough to get started. Most developers pick one package manager per project (usually whichever the project's lockfile already uses) rather than mixing them.
            </DocNote>
        </>
    );
}
