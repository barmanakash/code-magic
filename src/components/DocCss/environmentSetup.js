import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSEnvironmentSetupDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Development Environment Setup</DocTitle>

            <DocP>
                A properly configured engineering workspace is critical for writing scalable stylesheets. Building web interfaces requires a high-performance code editor, a local live-reloading execution server, a clean project directory architecture, and browser developer tools to inspect and track cascading visual styles in real time.
            </DocP>

            <DocH2>Workspace Components & Tooling</DocH2>

            <DocH3>1. The Code Editor & Live Local Execution</DocH3>
            <DocList
                items={[
                    'Visual Studio Code (VS Code): The industry-standard source code editor. Equipped with a fast internal V8 JavaScript runtime engine, it provides advanced autocomplete extensions, multi-cursor workspace management, and seamless integration with terminal commands.',
                    'Live Server Extension: Instantiates a localized lightweight Node.js-like development server running on a local loopback address (typically http://127.0.0.1:5500). It establishes a persistent WebSocket handshake with the browser, automatically reloading the viewport the moment a stylesheet modification is committed to disk.'
                ]}
            />

            <DocH3>2. Browser Inspection Engines (DevTools)</DocH3>
            <DocList
                items={[
                    'Chrome DevTools: Built directly into the Chromium engine. Features a highly advanced Elements Panel for inspecting CSS rules, an interactive box model viewer, visual color pickers, and a comprehensive grid/flexbox alignment debugger.',
                    'Firefox Developer Tools: Powered by the Gecko rendering engine. Highly regarded for its superior CSS layout tools, it includes an unmatched Grid Inspector that displays active line numbers, area names, track dimensions, and a dedicated font typography analyzer.'
                ]}
            />



            <DocH2>Production Project Architecture</DocH2>
            <DocP>
                Maintain a predictable, scalable file hierarchy from day one. Separating structural data wrappers from asset configurations prevents file management complexity as your project expands:
            </DocP>

            <CodeBlock
                language="text"
                code={`workspace-root/
├── index.html          # Core semantic layout document entrypoint
└── css/
    └── styles.css      # Isolated stylesheet architecture`}
            />

            <DocH2>Step-by-Step Initial Integration Pipeline</DocH2>

            <DocH3>1. The Base Structural Markup (index.html)</DocH3>
            <DocP>
                Link the external style file inside the head container using the semantic link element. The relationship attribute tells the engine how to parse the file:
            </DocP>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Development Environment Verification</title>
  
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <main class="verification-wrapper">
    <div class="status-card">
      <h1>Workspace Verification</h1>
      <p class="status-indicator">Awaiting stylesheet connectivity confirmation...</p>
    </div>
  </main>

</body>
</html>`}
            />

            <DocH3>2. The Stylesheet Architecture (css/styles.css)</DocH3>
            <DocP>
                Apply an explicit, easily visible declaration block to verify that the file has successfully linked to the document:
            </DocP>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   WORKSPACE ARCHITECTURE CONNECTIVITY PROBE
   Modifies layout backgrounds to confirm successful linking
   ======================================================= */
:root {
  --color-success-bg: oklch(0.96 0.08 140);
  --color-success-txt: oklch(0.35 0.12 140);
  --radius-verification: 12px;
}

body {
  background-color: oklch(0.98 0.01 200);
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.status-card {
  background-color: var(--color-success-bg);
  color: var(--color-success-txt);
  padding: 32px;
  border-radius: var(--color-verification-radius, var(--radius-verification));
  border: 1px solid oklch(0.85 0.1 140);
  text-align: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05);

  h1 {
    margin: 0 0 12px 0;
    font-size: 1.5rem;
  }

  .status-indicator {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 500;
  }
}`}
            />

            <DocH3>3. Verifying the Pipeline Setup</DocH3>
            <DocList
                items={[
                    'Launch the local server environment by right-clicking index.html in VS Code and selecting Open with Live Server.',
                    'Verify that the viewport updates immediately with a green status card configuration, confirming that your file path strings are correct.',
                    'Press F12 to open the browser inspection panel, select the status card node, and check that your custom style declarations appear exactly as written in the Styles panel.'
                ]}
            />
        </>
    );
}