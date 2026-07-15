import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLSecurityDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Web Security Foundations: XSS Mitigation, Content Security Policy (CSP), Contextual Sanitization, and Secure Forms</DocTitle>

            <DocP>
                HTML architecture directly influences an application's attack surface. When browsers parse markup, fetch external sub-resources, or process user inputs, they run the risk of introducing severe security bugs if not configured correctly. Implementing defense-in-depth across the structural layer ensures applications remain resilient against common client-side exploits.
            </DocP>

            <DocH2>The Client-Side Attack Surface</DocH2>
            <DocP>
                Securing web applications requires mitigating malicious script execution while locking down how data moves between the client browser and backend servers.
            </DocP>

            <DocH3>1. Cross-Site Scripting (XSS) Vulnerabilities</DocH3>
            <DocP>
                XSS occurs when an application includes untrusted data in a web page without proper validation or escaping, allowing malicious attackers to execute code inside the victim's browser session.
            </DocP>
            <DocList
                items={[
                    '<strong>Stored XSS (Persistent):</strong> The malicious string is permanently stored in a database or server file, then served to users during normal browsing requests.',
                    '<strong>Reflected XSS (Non-Persistent):</strong> The payload is embedded within a request URL or parameter and immediately reflected back by the server without sanitation.',
                    '<strong>DOM-based XSS:</strong> The vulnerability exists entirely within client-side JavaScript, where source data (like <code>location.search</code>) flows unsafely into a execution sink (like <code>element.innerHTML</code>).'
                ]}
            />

            <DocH3>2. Content Security Policy (CSP)</DocH3>
            <DocP>
                CSP is an HTTP response header layer that acts as a strong safety net. It restricts the origins from which the browser is allowed to load resources (scripts, styles, fonts, images), effectively blocking unauthorized XSS injection scripts from running even if they slip past application-level sanitization.
            </DocP>
            <DocList
                items={[
                    '<code>default-src \'self\'</code>: Restricts all resource fetches to the site\'s own exact origin by default.',
                    '<code>script-src</code>: Specifies valid executable script locations. Production configurations ban unsafe inline scripts (<code>\'unsafe-inline\'</code>) in favor of unique cryptographic hashes or nonces.',
                    '<code>frame-ancestors</code>: Restricts which external domains can embed your page within <code>&lt;iframe&gt;</code> tags, preventing UI redressing clickjacking attacks.'
                ]}
            />

            <DocH3>3. Contextual Data Sanitization</DocH3>
            <DocP>
                Sanitization removes dangerous executable structures from user inputs before parsing them into the document tree. Standard text strings should be handled via safe text elements (like <code>textContent</code>) rather than direct HTML parsing nodes. If rich user HTML markup must be supported, strings must go through a structural parsing library like DOMPurify before rendering.
            </DocP>



            <DocH3>4. Secure Form Topologies</DocH3>
            <DocP>
                Forms handle the transfer of sensitive data. Securing forms requires using encrypted protocols, defending against Cross-Site Request Forgery (CSRF), and using specialized validation flags.
            </DocP>
            <DocList
                items={[
                    '<strong>Transport Security:</strong> All form submission points must route over HTTPS to secure payload transport layers from sniffing.',
                    '<strong>Anti-CSRF Tokens:</strong> Hidden cryptographic input tokens validate that the submission session originated from an authenticated user on the legitimate application interface.',
                    '<strong>Cookie Security Flags:</strong> Session identifiers must carry the <code>Secure</code>, <code>HttpOnly</code>, and <code>SameSite=Strict</code> properties to prevent token theft via client scripts.'
                ]}
            />

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Security Metric</th>
                            <th className="p-3">Vulnerability Exposure Risk</th>
                            <th className="p-3">Production Remediation Strategy</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans font-semibold text-red-600">Unescaped User Input</td>
                            <td className="p-3 font-sans">Arbitrary script execution, credential theft, session hijacking.</td>
                            <td className="p-3">Enforce <code>element.textContent</code> or integrate <code>DOMPurify.sanitize()</code>.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-red-600">Missing CSP Header</td>
                            <td className="p-3 font-sans">Malicious code execution from third-party domains and inline injections.</td>
                            <td className="p-3">Deploy strict CSP headers with cryptographic nonces for script tracking.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans font-semibold text-red-600">Unsecured Form Submissions</td>
                            <td className="p-3 font-sans">Credential sniffing, replay attacks, parameter tampering.</td>
                            <td className="p-3">Use <code>autocomplete="off"</code>, hidden CSRF nonces, and HTTPS endpoints.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production Security Engineering Blueprints</DocH2>
            <DocP>
                Review the secure code examples below to see how to implement defense-in-depth on your client interfaces, followed by an interactive tool that lets you simulate client-side sanitization:
            </DocP>

            <DocH3>1. Hardened Production Form Specification (secure-form.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<form action="https://api.example.com/v1/auth/update" method="POST" autocomplete="off" class="secure-form-layout">
  
  <input type="hidden" name="csrf_token" value="c83f98a2b10e54d8329ef89a102c983d">

  <div class="input-group">
    <label for="userEmail">Account Identity Address</label>
    <input 
      type="email" 
      id="userEmail" 
      name="email" 
      required 
      placeholder="operator@example.com"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
      class="form-input-field"
    >
  </div>

  <div class="input-group">
    <label for="sessionPass">Authentication Passcode</label>
    <input 
      type="password" 
      id="sessionPass" 
      name="password" 
      required 
      minlength="12"
      autocomplete="new-password"
      class="form-input-field"
    >
  </div>

  <button type="submit" class="submit-btn-callout">Re-Authenticate Session</button>
</form>`}
            />

            <DocH3>2. Live XSS Mitigation Workspace (HTMLSecurityWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLSecurityWorkspace() {
  const [userInput, setUserInput] = useState('<img src="invalid" onerror="alert(\\'XSS Attack Successful!\\')">');
  const [sanitizeData, setSanitizeData] = useState(true);

  // Manual placeholder encoding loop simulating clean context escaping rules
  const manuallyEscapedOutput = userInput
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">XSS Injection &amp; Sanitization Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Input standard strings or malicious scripts to see how contextual escaping and sanitization strategies render code output safely.
        </p>
      </header>

      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px]">
        
        {/* LEFT COMPONENT CONTROLS (5 Columns) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
              Simulate Input Vectors
            </span>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Raw User Input Payload</label>
              <textarea
                rows={4}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-slate-50 font-mono text-[11px] focus:outline-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Defense Sanitation Protocol</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSanitizeData(true)}
                  className={"flex-1 py-1.5 rounded-lg border font-medium transition-all " + (sanitizeData ? "bg-emerald-600 text-white border-emerald-600 shadow-xs" : "bg-white text-slate-600 border-gray-200 hover:bg-slate-50")}
                >
                  Sanitized (Safe)
                </button>
                <button
                  onClick={() => setSanitizeData(false)}
                  className={"flex-1 py-1.5 rounded-lg border font-medium transition-all " + (!sanitizeData ? "bg-red-600 text-white border-red-600 shadow-xs" : "bg-white text-slate-600 border-gray-200 hover:bg-slate-50")}
                >
                  Unsanitized (Dangerous)
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Active Parsing Engine View</span>
            <div className="max-h-[100px] overflow-y-auto font-mono text-emerald-400 whitespace-pre-wrap leading-normal">
              {sanitizeData ? manuallyEscapedOutput : userInput}
            </div>
          </div>
        </div>

        {/* RIGHT PIPELINE PREVIEW SCREEN (7 Columns) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Browser Document Tree Rendering Preview
            </span>

            {/* Simulated browser parsing viewport box */}
            <div className="p-6 border border-slate-200 bg-slate-50 rounded-xl min-h-[160px] flex flex-col items-center justify-center relative overflow-hidden">
              {sanitizeData ? (
                <div className="w-full max-w-sm bg-white p-4 border border-emerald-200 rounded-xl shadow-xs text-emerald-950 bg-emerald-50/20">
                  <span className="font-bold block text-[10px] text-emerald-700 uppercase tracking-wide mb-1">✓ Secure Render Output</span>
                  <div className="font-mono text-xs break-all">{userInput}</div>
                </div>
              ) : (
                <div className="w-full max-w-sm bg-white p-4 border border-red-200 rounded-xl shadow-xs text-red-950 bg-red-50/20 animate-pulse">
                  <span className="font-bold block text-[10px] text-red-700 uppercase tracking-wide mb-1">⚠ XSS Threat Vector Triggered</span>
                  <div className="text-xs font-mono text-red-600 border border-dashed border-red-300 p-2 bg-white rounded mt-1">
                    [Script Execution Fired]: alert("XSS Attack Successful!")
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Security Architecture Rule:</strong> Never mix data and code layers. Always use safe DOM sinks like <code>textContent</code> for dynamic insertions. If you must pass raw HTML strings down to your UI layout engine, sanitize them first through a battle-tested engine like DOMPurify.
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