import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLEnvironmentSetupDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Development Environment Setup & Loop Verification</DocTitle>

            <DocP>
                Establishing a highly efficient local development workspace is the first step toward professional web engineering. Rather than relying on simple text editors, a modern engineering workflow utilizes an optimized Integrated Development Environment (IDE), local server hot-reloading extensions, and browser-native runtime debugging utilities to create an immediate feedback loop during code construction.
            </DocP>

            <DocH2>IDE Installation & Extension Pipeline</DocH2>

            <DocH3>1. Visual Studio Code Configuration</DocH3>
            <DocP>
                Visual Studio Code (VS Code) is the industry-standard lightweight IDE for frontend engineering. It provides an extensible workspace, built-in terminal support, and deep file system integration.
            </DocP>
            <DocList
                items={[
                    'Installation Strategy: Download and run the platform-specific installer (macOS .dmg, Windows .exe, or Linux .deb/.rpm) from the official repository.',
                    'Workspace Setup: Create a dedicated projects directory (e.g., /developer/projects/) and open it in VS Code using the file explorer or the terminal shortcut: `code .`'
                ]}
            />

            <DocH3>2. Live Server Integration</DocH3>
            <DocP>
                Opening local HTML files directly from your hard drive using the file protocol (e.g., `file:///C:/project/index.html`) can cause security policy issues (CORS limits) and does not reflect production web server environments.
            </DocP>
            <DocList
                items={[
                    'The Live Server Extension: Install Ritwick Dey\'s "Live Server" extension from the VS Code Marketplace.',
                    'Hot Reload Lifecycle: Live Server spawns a local, lightweight development node server running at `http://127.0.0.1:5500` (localhost). It automatically injects a small WebSocket script into your HTML files. Whenever you modify and save a file, the server broadcasts a reload signal, updating your browser window instantly without manual refreshes.'
                ]}
            />



            <DocH3>3. Browser Developer Tools Integration</DocH3>
            <DocP>
                The browser developer tool suite is your runtime window into the Document Object Model (DOM) generated from your parsed HTML.
            </DocP>
            <DocList
                items={[
                    'Access Mechanics: Open DevTools in Chrome, Firefox, or Safari by right-clicking an element and selecting "Inspect", or by using the shortcut <kbd className="bg-white border px-1 rounded shadow-sm">F12</kbd> (Windows) or <kbd className="bg-white border px-1 rounded shadow-sm">Cmd + Option + I</kbd> (macOS).',
                    'Elements Panel Analysis: Allows you to view the live parsed DOM tree, modify HTML node attributes on the fly, inspect CSS layout boxes, and audit page accessibility maps.'
                ]}
            />

            <DocH2>First Document Creation, Execution, & Verification</DocH2>
            <DocP>
                Follow this structured workflow to create, configure, save, and verify your initial development file layout:
            </DocP>

            <DocH3>1. The Verification Template (index.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Environment Verification Loop</title>
  <style>
    body {
      background-color: #f8fafc;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
    }
    .verification-card {
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      border: 1px solid #e2e8f0;
      max-width: 360px;
      text-align: center;
    }
    .badge {
      display: inline-block;
      background-color: #dcfce7;
      color: #15803d;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.25rem;
      color: #0f172a;
      margin: 0 0 0.5rem 0;
    }
    p {
      font-size: 0.875rem;
      color: #64748b;
      line-height: 1.5;
      margin: 0;
    }
  </style>
</head>
<body>

  <main class="verification-card">
    <span class="badge">Success</span>
    <h1>Development Sandbox Active</h1>
    <p>If you can read this message in your web browser, your local development environment and server routing are fully verified.</p>
  </main>

</body>
</html>`}
            />

            <DocH3>2. Layout Implementation View (EnvironmentSetupWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function EnvironmentSetupWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Verification Feedback Loop</h3>
        <p className="text-gray-500 mt-1">
          This panel displays the exact verification pipeline you run on your local machine to confirm an active development setup.
        </p>
      </header>

      {/* Verification Pipeline Tracker */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
        
        <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider font-mono">Verification Pipeline Checklist</h4>
        
        <div className="space-y-4">
          
          <div className="flex items-start gap-3">
            <div className="bg-emerald-100 text-emerald-800 p-1.5 rounded-full font-mono font-bold text-[9px] w-5 h-5 flex items-center justify-center shrink-0">
              ✓
            </div>
            <div>
              <h5 className="font-bold text-gray-900">File Extensions Verified</h5>
              <p className="text-gray-500 mt-0.5">File is saved strictly as <code>index.html</code> (no trailing <code>.txt</code> or <code>.html.txt</code>).</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-emerald-100 text-emerald-800 p-1.5 rounded-full font-mono font-bold text-[9px] w-5 h-5 flex items-center justify-center shrink-0">
              ✓
            </div>
            <div>
              <h5 className="font-bold text-gray-900">Live Server Launch</h5>
              <p className="text-gray-500 mt-0.5">Clicking "Go Live" in the status bar opens a socket link on <code>http://127.0.0.1:5500</code>.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-emerald-100 text-emerald-800 p-1.5 rounded-full font-mono font-bold text-[9px] w-5 h-5 flex items-center justify-center shrink-0">
              ✓
            </div>
            <div>
              <h5 className="font-bold text-gray-900">Hot Reload Test</h5>
              <p className="text-gray-500 mt-0.5">Modifying the card header and saving instantly triggers a paint update inside the browser DOM viewport.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}