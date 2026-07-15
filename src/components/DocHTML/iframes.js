import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLIframesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Iframes: Inline Sandboxing, Third-Party Media Ingestion, and Web Security Guardrails</DocTitle>

            <DocP>
                The <code>&lt;iframe&gt;</code> (Inline Frame) element allows you to nest a separate, completely independent HTML document inside your current page. This is the foundational tool used to embed interactive content from other sites—such as video players, third-party mapping systems, or secure payment portals—without forcing users to leave your app.
            </DocP>

            <DocH2>Core Architecture and Embed Implementations</DocH2>

            <DocH3>1. The Foundational Tag Structure</DocH3>
            <DocList
                items={[
                    'src Attribute: Specifies the target URL of the external document you want to load.',
                    'width & height Attributes: Sets the dimensions of the frame. In responsive layouts, these are typically overridden with CSS properties like max-width: 100%.',
                    'loading="lazy" Attribute: Optimizes page load performance by waiting to download the iframe content until the user scrolls close to it.'
                ]}
            />

            <DocH3>2. Industry-Standard Embed Use Cases</DocH3>
            <DocList
                items={[
                    'YouTube Video Players: Uses specialized player configurations to stream video media directly inside your page without requiring high bandwidth on your own server assets.',
                    'Google Maps Implementations: Generates highly detailed coordinates, interactive navigation, and dynamic zoom scales to pinpoint physical store locations.',
                    'External Site Ingestion: Standard frames used to pull in foreign web assets, utility dashboards, or secure third-party widgets.'
                ]}
            />



            <DocH2>Critical Security Considerations</DocH2>
            <DocP>
                Because iframes run foreign third-party code directly inside your user\'s browser layout, they can present significant security risks if left unprotected. Unrestricted frames leave your application open to attacks like **Clickjacking** (where malicious transparent layers trick users into clicking links) and cross-site scripting vulnerabilities.
            </DocP>

            <DocH3>The Shielding Protocols</DocH3>
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Security Control</th>
                            <th className="p-3">Technical Implementation Strategy</th>
                            <th className="p-3">Mitigated Threat Profile</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">sandbox=""</td>
                            <td className="p-3">Applies a strict security restriction policy to the frame. By default, an empty <code>sandbox</code> attribute completely disables scripts, forms, popups, and same-origin access. You can selectively re-enable features as needed (e.g., <code>sandbox="allow-scripts allow-forms"</code>).</td>
                            <td className="p-3">Stops malicious script execution, protects database access tokens, and blocks unwanted redirects.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">allow=""</td>
                            <td className="p-3">Configures a Permissions Policy that explicitly enables or denies access to specific hardware features on the user\'s device (e.g., <code>allow="camera; microphone; geolocation"</code>).</td>
                            <td className="p-3">Prevents hidden background frames from hijacking camera access, audio feeds, or coordinate tracking systems.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">X-Frame-Options</td>
                            <td className="p-3">A server-side HTTP Header instruction (e.g., <code>X-Frame-Options: DENY</code> or <code>SAMEORIGIN</code>) sent from the host server.</td>
                            <td className="p-3">Completely blocks other unauthorized external websites from trying to embed your own pages inside their iframes. Defends against **Clickjacking**.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Iframe Architecture Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready HTML structure demonstrating responsive iframe layouts, third-party media integration, and secure sandboxing rules:
            </DocP>

            <DocH3>1. Complete Secure Iframe Embed Structures (iframes-production.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<div class="c-video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0" 
    title="Enterprise System Architecture Walkthrough"
    width="560" 
    height="315" 
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    sandbox="allow-scripts allow-same-origin allow-presentation"
    allowfullscreen
    class="c-embedded-frame">
  </iframe>
</div>

<hr class="c-divider" />

<div class="c-map-wrapper">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117366.19532553974!2d79.86603704899539!3d23.16362534571731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020616bc43e3b9!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
    title="Operations HQ Regional Map Location"
    width="600" 
    height="450" 
    loading="lazy"
    allow="geolocation"
    sandbox="allow-scripts allow-same-origin allow-popups"
    class="c-embedded-frame">
  </iframe>
</div>`}
            />

            <DocH3>2. Layout Integration View (HTMLIframesWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLIframesWorkspace() {
  const [activeEmbed, setActiveEmbed] = useState<'video' | 'map'>('video');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Frame Embed Explorer</h3>
        <p className="text-gray-500 mt-1">
          Switch between the tabs below to inspect safe embed structures and responsive frame layouts.
        </p>
      </header>

      {/* Control Tabs */}
      <div className="flex gap-2 bg-slate-200 p-1 rounded-xl">
        <button 
          onClick={() => setActiveEmbed('video')}
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeEmbed === 'video' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          YouTube Embed Structure
        </button>
        <button 
          onClick={() => setActiveEmbed('map')}
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${activeEmbed === 'map' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          Google Maps Embed Structure
        </button>
      </div>

      {/* Simulated Framework Display Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          DOM Frame View
        </div>

        {activeEmbed === 'video' ? (
          <div className="space-y-2 pt-4">
            <span className="font-mono text-[9px] text-gray-400 block uppercase">Simulated Video Canvas Layer</span>
            {/* Aspect ratio bounding container for clean scaling layout */}
            <div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden border flex flex-col items-center justify-center text-slate-400 relative p-4 text-center">
              <div className="absolute top-2 left-2 bg-red-600 text-white font-mono text-[8px] px-1.5 rounded font-bold">
                LIVE IFRAME SOURCE
              </div>
              <span className="text-2xl mb-1">▶</span>
              <p className="text-[10px] text-slate-300 font-mono max-w-xs">
                https://www.youtube.com/embed/dQw4w9WgXcQ
              </p>
              <p className="text-[9px] text-slate-500 mt-2">
                Running in context: <code>sandbox="allow-scripts allow-presentation"</code>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-2 pt-4">
            <span className="font-mono text-[9px] text-gray-400 block uppercase">Simulated Geolocation Grid</span>
            <div className="aspect-video w-full bg-emerald-50 rounded-xl overflow-hidden border border-emerald-200 flex flex-col items-center justify-center text-emerald-800 relative p-4 text-center">
              <div className="absolute top-2 left-2 bg-emerald-600 text-white font-mono text-[8px] px-1.5 rounded font-bold">
                MAP INGESTION NODE
              </div>
              <span className="text-2xl mb-1">📍</span>
              <p className="text-[10px] text-emerald-950 font-bold font-mono">
                Jabalpur Operations Hub Area Baseline
              </p>
              <p className="text-[9px] text-emerald-600/80 mt-1 max-w-xs">
                Map rendering pipeline initialized with <code>loading="lazy"</code> constraint.
              </p>
            </div>
          </div>
        )}

        {/* Real-time Security Notice Alert Panel */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1 text-amber-950">
          <span className="font-bold text-amber-900 text-[10px] uppercase block">Security Enforcement Tip</span>
          <p className="text-[10px] leading-relaxed">
            Never omit the <code>sandbox</code> attribute when loading unscreened external content. Restricting capabilities with sandbox profiles protects your root domain from unexpected layout or script hijacking.
          </p>
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}