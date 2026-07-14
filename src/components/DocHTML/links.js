import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLLinksDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Anchors: Hyperlink Protocols, Path Routing, and Target Contexts</DocTitle>

            <DocP>
                The anchor element (<code>&lt;a&gt;</code>) is the core connective tissue of the World Wide Web. By utilizing different URL schemes, protocols, and relationship attributes, the anchor tag transitions from a simple page-to-page navigation link into an interactive tool for initiating phone calls, drafting emails, triggering file downloads, or jumping directly to specific section markers within a single document.
            </DocP>

            <DocH2>Path Resolution Engines: Absolute vs. Relative URLs</DocH2>
            <DocP>
                When configuring the <code>href</code> (Hypertext Reference) attribute, developers must choose between two distinct resource location strategies depending on where the target asset is hosted:
            </DocP>
            <DocList
                items={[
                    'Absolute URLs: Point to an external resource hosted on an entirely separate domain. These must specify the complete network protocol (e.g., https:// or http://), the domain name, and the explicit folder path (e.g., href="https://api.enterprise.com/v1/status").',
                    'Relative URLs: Point to local resources located within the same project directory tree. Because they relate directly to the current file\'s location, they do not include the protocol or domain name. This makes local directories highly portable across development, staging, and production servers.'
                ]}
            />

            <DocH3>Relative Path Reference Guide</DocH3>
            <div className="overflow-x-auto my-4 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Syntax Template</th>
                            <th className="p-3">Navigation Meaning</th>
                            <th className="p-3">Resolution Behavior</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">href="about.html"</td>
                            <td className="p-3">Same Folder Level</td>
                            <td className="p-3">Loads "about.html" directly from the current directory.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">href="assets/logo.svg"</td>
                            <td className="p-3">Child Directory</td>
                            <td className="p-3">Steps forward into the "assets" folder, then opens "logo.svg".</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">href="../index.html"</td>
                            <td className="p-3">Parent Directory</td>
                            <td className="p-3">Steps back up one directory level, then opens "index.html".</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">href="/dashboard"</td>
                            <td className="p-3">Root Absolute Path</td>
                            <td className="p-3">Jumps straight to the root folder of the domain and routes from there.</td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <DocH2>Specialized Protocols & Target Contexts</DocH2>

            <DocH3>1. Mobile & Action-Based Protocols</DocH3>
            <DocP>
                The browser engine maps specialized URI schemes directly to native operating system applications:
            </DocP>
            <DocList
                items={[
                    'Email Protocol (mailto:): Launches the user\'s default mail client. You can also pre-populate subject lines and message bodies using query parameters (e.g., mailto:ops@enterprise.com?subject=Alert).',
                    'Telephone Protocol (tel:): Prompts mobile devices to open the native dialer app with the specified phone number preloaded. Avoid adding spaces or formatting dashes within the number to ensure clean dialing globally.',
                    'Download Attribute (download): Tells the browser to download the linked file directly rather than attempting to navigate to it or open it inside the browser tab.'
                ]}
            />

            <DocH3>2. Document Bookmarks (Fragment Identifiers)</DocH3>
            <DocP>
                To create in-page navigation (like a table of contents or "jump to top" buttons), assign a unique <code>id</code> attribute to your target element. Then, reference that ID using a hash symbol (<code>#</code>) in your anchor\'s href.
            </DocP>
            <blockquote>
                Linking with <code>href="#telemetry-charts"</code> instantly scrolls the viewport to the element carrying the <code>id="telemetry-charts"</code> attribute.
            </blockquote>

            <DocH3>3. Visualizing Viewport Target Instructions</DocH3>
            <DocP>
                The <code>target</code> attribute tells the browser where to display the linked document:
            </DocP>
            <DocList
                items={[
                    '_self: The default behavior. Opens the linked document in the same frame or tab where it was clicked.',
                    '_blank: Opens the linked document in a brand-new tab or browser window.',
                    'Security Warning (noopener noreferrer): When using target="_blank", always pair it with rel="noopener noreferrer". This blocks the newly opened page from accessing your original page through the window.opener reference, shielding your users from phishing and performance issues.'
                ]}
            />

            <DocH2>Production Hyperlink System Blueprint</DocH2>
            <DocP>
                Below is a production-grade HTML5 fragment demonstrating the clean integration of absolute links, secure target openings, internal document bookmarks, and native action handlers:
            </DocP>

            <DocH3>1. Optimized Hyperlink Architecture (links-blueprint.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<nav class="c-navigation-panel" aria-label="System Quick Links">
  
  <section class="c-navigation-panel__section">
    <h4>Internal Navigation</h4>
    <ul class="c-link-list">
      <li>
        <a href="dashboard/system-status.html" class="c-link">
          Local System Status
        </a>
      </li>
      <li>
        <a href="#hardware-telemetry-specs" class="c-link c-link--bookmark">
          Jump to Hardware Specs
        </a>
      </li>
    </ul>
  </section>

  <section class="c-navigation-panel__section">
    <h4>External Ecosystem</h4>
    <ul class="c-link-list">
      <li>
        <a 
          href="https://docs.enterprise.com/v2/api" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="c-link c-link--external"
        >
          API Specification Documentation (New Tab)
        </a>
      </li>
    </ul>
  </section>

  <section class="c-navigation-panel__section">
    <h4>Support Communications</h4>
    <ul class="c-link-list">
      <li>
        <a href="mailto:ops@enterprise.com?subject=Alert%20Status%20Yellow" class="c-link">
          Dispatch Status Alert Email
        </a>
      </li>
      <li>
        <a href="tel:+15550199" class="c-link">
          Dial Emergency Operations Center
        </a>
      </li>
      <li>
        <a href="downloads/firmware-v2.bin" download="firmware-stable-2026" class="c-link c-link--download">
          Download Firmware Update Package (.BIN)
        </a>
      </li>
    </ul>
  </section>

</nav>`}
            />

            <DocH3>2. Interactive Link Laboratory (HTMLLinksWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function HTMLLinksWorkspace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Hyperlink Action Laboratory</h3>
        <p className="text-gray-500 mt-1">
          Interact with this panel to explore how browser anchor layouts route link requests and trigger actions.
        </p>
      </header>

      {/* Target Interaction Grid */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Live Anchors
        </div>

        {/* 1. External & Security Reference */}
        <div className="space-y-2">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Secure External Tab</span>
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold underline text-[11px]"
          >
            Open External Console (target="_blank") ↗
          </a>
        </div>

        {/* 2. OS Protocol Handlers */}
        <div className="space-y-2 border-t pt-4">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">OS Application Protocols</span>
          <div className="grid grid-cols-2 gap-3 mt-1">
            <a 
              href="mailto:support@example.com?subject=Telemetry%20Report" 
              className="p-2.5 bg-gray-50 hover:bg-gray-100 border rounded-xl text-center font-semibold text-gray-700 block transition-colors"
            >
              ✉ Draft Email
            </a>
            <a 
              href="tel:+1234567890" 
              className="p-2.5 bg-gray-50 hover:bg-gray-100 border rounded-xl text-center font-semibold text-gray-700 block transition-colors"
            >
              📞 Call System Ops
            </a>
          </div>
        </div>

        {/* 3. Download Logic */}
        <div className="space-y-2 border-t pt-4">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">Forced Asset Download</span>
          <a 
            href="/mock-assets/firmware.zip" 
            download="telemetry-patch.zip"
            className="flex items-center justify-between p-3 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 text-emerald-950 rounded-xl transition-colors font-medium"
          >
            <span>Get Patch Firmware package</span>
            <span className="font-mono text-[9px] font-bold text-emerald-700 bg-emerald-100/50 px-2 py-0.5 rounded uppercase">
              download
            </span>
          </a>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}