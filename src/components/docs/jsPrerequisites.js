import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptPrerequisitesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Prerequisites for Learning JavaScript</DocTitle>

            <DocP>
                JavaScript is beginner-friendly, but a small amount of groundwork makes the learning curve much smoother. You don't need to be an expert in anything listed below — just comfortable enough to follow along without getting stuck on unrelated basics.
            </DocP>

            <DocH2>Basic Computer Knowledge</DocH2>
            <DocList
                items={[
                    'Comfortable navigating a file system: creating folders, moving/renaming files, and understanding file extensions (e.g. knowing the difference between `.js`, `.html`, and `.txt`).',
                    'Knowing how to install software and manage applications on your operating system (Windows, macOS, or Linux).',
                    'Basic keyboard shortcuts (copy, paste, undo, switching between windows) to keep your workflow efficient.',
                    'Understanding what a "path" is (relative vs. absolute) — this becomes essential once you start linking files together.',
                ]}
            />

            <DocH2>HTML Basics</DocH2>
            <DocP>
                JavaScript almost always manipulates a web page, and that page is written in HTML. You should be comfortable with:
            </DocP>
            <DocList
                items={[
                    'The basic document structure: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.',
                    'Common tags: headings (`<h1>`–`<h6>`), paragraphs (`<p>`), links (`<a>`), images (`<img>`), lists (`<ul>`/`<ol>`), and containers (`<div>`, `<span>`).',
                    'Attributes like `id`, `class`, `src`, and `href`, which JavaScript frequently reads or modifies.',
                    'Forms and inputs (`<form>`, `<input>`, `<button>`) since a large part of JavaScript is about handling user input.',
                ]}
            />

            <DocH2>CSS Basics</DocH2>
            <DocP>
                You don't need to master CSS, but you should recognize enough to understand how JavaScript-driven style changes take effect:
            </DocP>
            <DocList
                items={[
                    'Selectors (element, class `.name`, and id `#name`) — JavaScript uses the exact same selector syntax to find elements.',
                    'The idea of properties and values (e.g. `color: red;`), since JavaScript can read and set these directly via the `style` property.',
                    'How classes toggle visual states — many JavaScript interactions simply add/remove a CSS class rather than writing inline styles.',
                ]}
            />

            <DocH2>Browser Basics</DocH2>
            <DocList
                items={[
                    'Understanding that a browser (Chrome, Firefox, Edge, Safari) is the program that parses HTML/CSS/JS and renders the final page.',
                    'Knowing how to open a local HTML file directly in the browser (double-click, or drag-and-drop) versus serving it through a local development server.',
                    'Basic awareness of tabs, the address bar, and browser extensions — some of which can interfere with your JavaScript code while testing.',
                ]}
            />

            <DocH2>Code Editors</DocH2>
            <DocP>
                A good editor makes writing and debugging JavaScript significantly faster. Popular choices include:
            </DocP>
            <DocList
                items={[
                    'VS Code (recommended): Free, extensible, with excellent built-in JavaScript IntelliSense, debugging, and a massive extension marketplace.',
                    'Sublime Text / WebStorm / Atom: Alternative editors with varying levels of built-in JavaScript tooling.',
                    'Useful VS Code extensions to know about: ESLint (catches errors/style issues), Prettier (auto-formatting), and Live Server (auto-reloading local preview).',
                ]}
            />

            <DocH2>Browser Developer Tools</DocH2>
            <DocP>
                DevTools are built into every modern browser (open with <strong>F12</strong> or <strong>Ctrl+Shift+I</strong> / <strong>Cmd+Option+I</strong>) and are where most real-world JavaScript debugging happens:
            </DocP>
            <DocList
                items={[
                    'Console: Run JavaScript directly, view `console.log()` output, and inspect runtime errors with full stack traces.',
                    'Elements panel: Inspect and live-edit the rendered HTML/CSS — useful for seeing exactly what your JavaScript changed on the page.',
                    'Sources panel: Set breakpoints, step through code line-by-line, and inspect variable values as your script executes.',
                    'Network panel: Watch API requests your JavaScript makes (`fetch`, `XMLHttpRequest`) — see status codes, payloads, and response times.',
                ]}
            />

            <DocH2>Command Line Basics</DocH2>
            <DocP>
                As you move beyond simple browser scripts into tools like Node.js and npm, comfort with a terminal becomes essential. You only need a handful of commands to get started:
            </DocP>
            <CodeBlock
                language="bash"
                filename="terminal"
                code={`# Navigate directories
cd my-project        # move into a folder
cd ..                 # move up one level

# List files in the current folder
ls                    # macOS / Linux
dir                   # Windows (cmd)

# Create a new folder or file
mkdir scripts
touch app.js          # macOS / Linux
type nul > app.js      # Windows (cmd) equivalent

# Run a JavaScript file with Node.js
node app.js

# Check installed versions
node -v
npm -v`}
            />

            <DocNote tone="info">
                You don't need to master any of these areas before starting — most of this "clicks" naturally as you build your first few scripts. Treat this list as a reference to circle back to whenever something on a page (like DevTools or the terminal) feels unfamiliar.
            </DocNote>
        </>
    );
}
