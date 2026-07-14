import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLPrerequisitesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Development Prerequisites & Environment Orchestration</DocTitle>

            <DocP>
                Before writing and deploying HTML5 markup, developers must establish a baseline understanding of web execution runtimes, operating system directories, and standard source code editing tools. Setting up a predictable, standardized development environment ensures that local markup files compile and execute consistently across different browser rendering engines.
            </DocP>

            <DocH2>Environment Prerequisites & Run-Time Concepts</DocH2>

            <DocH3>1. The Web Browser Execution Model</DocH3>
            <DocP>
                A web browser is not simply a static viewing window; it is a highly complex runtime compilation environment. Modern browsers rely on specialized execution engines to parse raw network payloads:
            </DocP>
            <DocList
                items={[
                    'Blink (Chrome, Edge, Opera, Brave): A fast rendering engine developed as part of the Chromium project.',
                    'WebKit (Safari): The core layout and rendering engine powering all web browsers on iOS and macOS.',
                    'Gecko (Firefox): A highly customizable, standards-compliant open-source engine developed by Mozilla.',
                    'The Parsing Loop: The browser engine ingests raw bytes, decodes them into characters, tokenizes them, and parses them into a Document Object Model (DOM) tree. At the same time, the CSS engine parses styles into a CSS Object Model (CSSOM) tree, which combines with the DOM to render the final visual layout.'
                ]}
            />



            <DocH3>2. Code Editors & IDE Infrastructure</DocH3>
            <DocP>
                While plain text editors (like Notepad) can technically save HTML files, modern web development relies on robust Integrated Development Environments (IDEs) like **Visual Studio Code (VS Code)**. These tools provide critical developer utilities:
            </DocP>
            <DocList
                items={[
                    'Syntax Highlighting: Color-codes tags, attributes, strings, and comments, making syntax errors visible at a glance.',
                    'Emmet Abbreviations: An essential shorthand engine built into modern editors (e.g., typing "ul>li*3" and hitting tab instantly expands into a structured unordered list with three items).',
                    'Live Reload Server: Launches a local development server that watches your workspace directory and automatically refreshes the browser viewport whenever you save a file.'
                ]}
            />

            <DocH2>File System Topography & Extensions</DocH2>

            <DocH3>1. The Universal Entry Point (index.html)</DocH3>
            <DocP>
                Web servers are pre-configured to look for a default file when a client requests a directory path without a specific filename. This default entry point is universally named <code>index.html</code>.
            </DocP>
            <blockquote>
                When a user requests <code>https://example.com/blog/</code>, the host web server automatically resolves and serves the <code>index.html</code> file located inside the <code>/blog</code> directory.
            </blockquote>

            <DocH3>2. Essential Web File Extensions</DocH3>
            <DocList
                items={[
                    '.html / .htm: The standard format extensions for HyperText Markup Language documents.',
                    '.css: Cascading Style Sheets containing all visual layouts and responsive presentation designs.',
                    '.js: JavaScript scripts that inject interactivity and dynamic client-side logic into the parsed DOM.',
                    '.svg: Scalable Vector Graphics, an XML-based vector image format that renders perfectly at any scale.'
                ]}
            />

            <DocH2>Standard Production Project Workspace Architecture</DocH2>
            <DocP>
                A clean, predictable directory structure is essential for scaling design systems, managing asset resolution pathways, and ensuring trouble-free deployments:
            </DocP>

            <CodeBlock
                language="text"
                code={`my-web-project/
├── index.html             # The primary root entry point (Home Page)
├── about.html             # Secondary page resource
├── css/                   # Stylesheet asset folder
│   └── styles.css         # Main production layout styles
├── js/                    # Client-side scripts folder
│   └── main.js            # Primary application interaction logic
└── assets/                # Media assets folder
    ├── images/            # Static photography and graphics
    │   └── hero-banner.jpg
    └── icons/             # Custom SVG icon symbols
        └── logo.svg`}
            />

            <DocH3>Interactive Local Development Sandbox (EnvironmentSetupView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function EnvironmentSetupView() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Workspace Environment Sandbox</h3>
        <p className="text-gray-500 mt-1">
          A visual simulation of a web application workspace. It demonstrates how clean directory architectures map to physical components.
        </p>
      </header>

      {/* Directory Map & Asset Loading Sandbox Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Dev Environment OK
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-2">Simulated Project Tree</h4>
          
          <div className="bg-gray-900 text-gray-300 font-mono p-4 rounded-xl space-y-2 text-[11px] overflow-x-auto">
            <div>📁 my-web-project/</div>
            <div className="pl-4">├── 📄 <span className="text-emerald-400">index.html</span> (Entry Point)</div>
            <div className="pl-4">├── 📁 css/</div>
            <div className="pl-8">└── 📄 <span className="text-blue-400">styles.css</span></div>
            <div className="pl-4">└── 📁 assets/</div>
            <div className="pl-8">└── 📄 <span className="text-purple-400">logo.svg</span></div>
          </div>
        </div>

        {/* Local Absolute Path Resolution Demo */}
        <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl space-y-1">
          <span className="font-bold text-blue-800 block text-[10px] uppercase">Path Mapping Context</span>
          <p className="text-gray-600 leading-relaxed text-[11px]">
            To resolve assets reliably in <code>index.html</code>, use relative file paths. For example, reference your stylesheet using:
          </p>
          <code className="block bg-white p-1.5 rounded border text-[10px] text-gray-800 font-mono mt-1">
            &lt;link rel="stylesheet" href="css/styles.css"&gt;
          </code>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}