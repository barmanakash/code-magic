import React, { useState, useEffect } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLBrowserCompatibilityDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Browser Compatibility: Legacy Deprecation Matrices, Feature Detection, and Cross-Engine Adaptability</DocTitle>

            <DocP>
                Browser Compatibility is the engineering discipline of ensuring that web applications function reliably and consistently across diverse browser engines (such as Chromium, WebKit, and Gecko). Achieving robust cross-platform execution requires purging obsolete markup syntax, using modern web specifications as a baseline, and building protective code architectures that verify browser capabilities before executing advanced functionality.
            </DocP>

            <DocH2>The Modern Web Baseline</DocH2>
            <DocP>
                Modern web software development relies on standard evergreen engines that automatically update in the background. The core browser ecosystem is powered by three primary layout engines:
            </DocP>
            <DocList
                items={[
                    'Chromium (Blink): Powers Google Chrome, Microsoft Edge, Opera, and Brave.',
                    'WebKit: Powers Apple Safari and all iOS web browsers.',
                    'Gecko: Powers Mozilla Firefox.'
                ]}
            />
            <DocP>
                While these modern engines align closely on core HTML5 and CSS specifications, subtle implementation differences and feature release timelines still exist, making cross-engine validation a crucial step in frontend engineering workflows.
            </DocP>

            <DocH2>Purging Deprecated and Obsolete Elements</DocH2>
            <DocP>
                Legacy HTML versions relied heavily on visual styling tags directly inside the markup layer. Modern web standards have officially deprecated these structural formats. Modern browser engines either ignore them completely or render them using inefficient fallback pathways.
            </DocP>
            <DocP>
                All visual formatting must live exclusively inside the CSS presentation layer. The table below outlines common obsolete tags and their modern structural replacements:
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Deprecated Element</th>
                            <th className="p-3">Original Visual Purpose</th>
                            <th className="p-3">Modern Architectural Replacement</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;center&gt;</td>
                            <td className="p-3 font-sans">Horizontally centers nested child content layout nodes.</td>
                            <td className="p-3 font-sans">Handle via CSS flexbox alignments or text utilities: <code>display: flex; justify-content: center;</code> or <code>text-align: center;</code>.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;font&gt;</td>
                            <td className="p-3 font-sans">Modifies typography faces, inline sizes, and color palettes.</td>
                            <td className="p-3 font-sans">Declare typography attributes inside CSS classes using standard font properties: <code>font-family</code>, <code>font-size</code>, and <code>color</code>.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;marquee&gt;</td>
                            <td className="p-3 font-sans">Creates automated scrolling horizontal loops of text.</td>
                            <td className="p-3 font-sans">Build performant CSS transitions utilizing hardware-accelerated <code>@keyframes transform: translateX()</code> loops.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-red-600 font-semibold">&lt;big&gt; / &lt;strike&gt;</td>
                            <td className="p-3 font-sans">Alters inline font weights or draws text strike-through paths.</td>
                            <td className="p-3 font-sans">Use standard semantic nodes like <code>&lt;del&gt;</code> for deleted text, or manage scaling with CSS <code>font-size</code> configurations.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Feature Detection: Checking Capabilities over Browsers</DocH2>
            <DocP>
                Historically, developers used **Browser Sniffing** (inspecting the <code>navigator.userAgent</code> string) to identify specific browsers and serve targeted code tweaks. This pattern is fragile, easy to spoof, and breaks down whenever browsers update.
            </DocP>
            <DocP>
                Modern architecture enforces **Feature Detection**. Instead of guessing based on the browser's name, the application directly tests if a feature exists in the current runtime environment. If the check succeeds, it uses the advanced capability; if it fails, the app downgrades gracefully to a stable fallback.
            </DocP>

            <DocH3>1. JavaScript Feature Detection</DocH3>
            <DocP>
                Verify if an API or interface exists on the global window or navigator scope before calling its methods:
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Checking for native browser Geolocation capabilities before usage
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
} else {
  // Graceful fallback UI workflow for unsupported configurations
  displayManualLocationInputForm();
}`}
            />

            <DocH3>2. CSS Feature Detection (`@supports`)</DocH3>
            <DocP>
                Conditional CSS blocks allow you to write modern layouts while providing clean fallback designs for older styling engines:
            </DocP>
            <CodeBlock
                language="css"
                code={`.grid-container {
  display: block; /* Standard baseline layout fallback structural rule */
}

@supports (display: grid) {
  .grid-container {
    display: grid; /* Applied only if the engine natively supports CSS Grid */
    grid-template-columns: repeat(3, 1fr);
  }
}`}
            />

            <DocH2>Production-Grade Cross-Compatibility Blueprint</DocH2>
            <DocP>
                Below is a fully validated compatibility configuration framework, pairing standard fallback markup patterns with an interactive workspace that demonstrates feature detection in action:
            </DocP>

            <DocH3>1. Resilient Feature Fallback Layout (fallback-manifest.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="interactive-media-wrapper">
  
  <video controls preload="metadata" poster="/assets/video-fallback-banner.jpg">
    <source src="/assets/broadcast-feed.webm" type="video/webm">
    <source src="/assets/broadcast-feed.mp4" type="video/mp4">
    
    <div class="unsupported-video-alert">
      <p>Your current browser engine does not support native HTML5 media playback configurations.</p>
      <a href="/assets/broadcast-feed.mp4" download class="download-link">Download Media File Directly</a>
    </div>
  </video>

</div>`}
            />

            <DocH3>2. Interactive Feature Detection Workspace (HTMLCompatibilityWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect } from 'react';

export default function HTMLCompatibilityWorkspace() {
  const [detectedCapabilities, setDetectedCapabilities] = useState({
    sessionStorage: false,
    webWorkers: false,
    eyeDropper: false
  });

  useEffect(() => {
    setDetectedCapabilities({
      sessionStorage: typeof window !== 'undefined' && 'sessionStorage' in window,
      webWorkers: typeof window !== 'undefined' && 'Worker' in window,
      eyeDropper: typeof window !== 'undefined' && 'EyeDropper' in window
    });
  }, []);

  // Safely isolated syntax token strings to prevent rendering compilation noise
  const codeVerificationSample = "if ('EyeDropper' in window) {\\n  // Execute advanced picker tool flow\\n  const dropper = new EyeDropper();\\n} else {\\n  // Downgrade to baseline input field selector fallback\\n}";

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Browser Feature Detection Workspace</h3>
        <p className="text-gray-500 mt-1">
          This runtime panel performs real-time checks on your current browser engine to determine support for specific web APIs, showing how applications adapt dynamically.
        </p>
      </header>

      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
        
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Active Capability Diagnostics Logs
            </span>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-xl bg-slate-50">
                <div>
                  <span className="font-bold text-slate-800 block">Web Storage API (sessionStorage)</span>
                  <span className="text-slate-400 text-[10px]">Used for keeping temporary client application state maps.</span>
                </div>
                <span className={"px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase " + (detectedCapabilities.sessionStorage ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800")}>
                  {detectedCapabilities.sessionStorage ? "Supported" : "Missing"}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-xl bg-slate-50">
                <div>
                  <span className="font-bold text-slate-800 block">Web Workers API</span>
                  <span className="text-slate-400 text-[10px]">Enables multi-threaded background processing scripts.</span>
                </div>
                <span className={"px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase " + (detectedCapabilities.webWorkers ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800")}>
                  {detectedCapabilities.webWorkers ? "Supported" : "Missing"}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-xl bg-slate-50">
                <div>
                  <span className="font-bold text-slate-800 block">EyeDropper API</span>
                  <span className="text-slate-400 text-[10px]">Advanced native color picker UI sampling interface.</span>
                </div>
                <span className={"px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase " + (detectedCapabilities.eyeDropper ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800")}>
                  {detectedCapabilities.eyeDropper ? "Supported" : "Missing"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Declarative Feature Verification Code</span>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
              {codeVerificationSample}
            </pre>
          </div>
        </div>

        <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Adaptive Architecture Preview
            </span>

            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3 text-left shadow-xs">
              <h4 className="font-bold text-slate-900 text-[11px]">System Component Initialization</h4>
              <p className="text-slate-500 leading-relaxed text-[10px]">
                When loading an advanced element (like a design canvas picker), the engine checks for browser feature support before adding the button to the layout canvas.
              </p>

              {detectedCapabilities.eyeDropper ? (
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-xs">
                  Launch Native EyeDropper Interface
                  <span className="block font-normal text-[8px] text-blue-200 mt-0.5">Advanced API Path Active</span>
                </button>
              ) : (
                <div className="p-3 bg-slate-50 border border-dashed rounded-lg space-y-2">
                  <div className="text-[10px] text-amber-700 font-medium font-sans">
                    ℹ Native EyeDropper API not supported in this engine. Rerouting to standard fallback control layout.
                  </div>
                  <input 
                    type="color" 
                    defaultValue="#2563eb"
                    className="w-full h-8 cursor-pointer rounded border p-0.5 bg-white" 
                  />
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Key Architecture Rule:</strong> Never block users based on their browser choice. Use feature detection to build applications that degrade gracefully, ensuring key workflows remain usable on older platforms while providing an enhanced experience for modern engines.
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