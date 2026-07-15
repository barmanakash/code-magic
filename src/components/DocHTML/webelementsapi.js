import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLWebAPIsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Advanced HTML5 Web APIs: Client-Side Telemetry, Stateful Storage, and Interactive DOM Hooks</DocTitle>

            <DocP>
                HTML5 introduces a powerful suite of native JavaScript APIs that extend the browser's capabilities far beyond rendering basic documents. These interfaces enable developers to build desktop-grade features directly within the browser ecosystem—allowing applications to capture physical location data, manage coordinate states during drag operations, preserve state configurations across browser restarts, manipulate the history stack, and safely access system clipboard buffers.
            </DocP>

            <DocH2>The Native API Framework Matrix</DocH2>

            <DocH3>1. Geolocation & Clipboard Buffer Feeds</DocH3>
            <DocList
                items={[
                    'Geolocation API: Provides scripts access to the device\'s physical coordinates via the <code>navigator.geolocation</code> object. For security, this operation requires explicit user approval and is restricted to secure contexts (HTTPS).',
                    'Clipboard API: Replaces insecure <code>document.execCommand()</code> setups with an asynchronous framework (<code>navigator.clipboard</code>) to safely cut, copy, and paste text or binary data streams.'
                ]}
            />

            <DocH3>2. Browser History Stack & Drag-and-Drop Engines</DocH3>
            <DocList
                items={[
                    'History API: Gives developers direct control over the browser\'s session history records via the <code>window.history</code> object. This enables Single Page Applications (SPAs) to update URLs dynamically using <code>pushState()</code> and <code>replaceState()</code> without triggering full page reloads.',
                    'Drag and Drop API: Implements an event-driven system to handle interactive mouse and touch movements. By adding the <code>draggable="true"</code> attribute to a DOM node, you expose specific hooks (like <code>ondragstart</code>, <code>ondragover</code>, and <code>ondrop</code>) to pass structured payload data between distinct page elements.'
                ]}
            />



            <DocH3>3. Web Storage Systems (Local vs Session Storage)</DocH3>
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Storage Engine</th>
                            <th className="p-3">Data Longevity & Scope</th>
                            <th className="p-3">Storage Capacity Limits</th>
                            <th className="p-3">Network Overhead Profile</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">localStorage</td>
                            <td className="p-3 font-sans">Persistent baseline. Data survives window closures, tab changes, and full system reboots until explicitly cleared by the script.</td>
                            <td className="p-3">~5MB - 10MB per origin</td>
                            <td className="p-3 font-sans">Purely client-side. Never sent automatically to the server via HTTP headers.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">sessionStorage</td>
                            <td className="p-3 font-sans">Tab-specific lifetime. Data is completely wiped the moment the user closes that specific browser tab.</td>
                            <td className="p-3">~5MB per origin</td>
                            <td className="p-3 font-sans">Isolated to the tab context. No automatic network overhead.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade API Integration Architecture</DocH2>
            <DocP>
                Below is a production-ready HTML and JavaScript code outline demonstrating how to build asynchronous geolocation check pipelines, safe clipboard tracking, and persistent local storage states:
            </DocP>

            <DocH3>1. Complete API Native Scripting Implementation (web-api-bootstrap.js)</DocH3>
            <CodeBlock
                language="javascript"
                code={`// 1. ASYNCHRONOUS GEOLOCATION ORCHESTRATION ENGINE
function initializeTelemetryTracking() {
  if (!navigator.geolocation) {
    console.error("Geolocation pipeline unavailable on this user agent.");
    return;
  }

  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      console.log(\`Coordinate Lock: Lat=\${latitude}, Lng=\${longitude} (Accuracy Variance: \${accuracy}m)\`);
      
      // Persist coordinate data to local cache
      localStorage.setItem('core_telemetry_lat', latitude);
      localStorage.setItem('core_telemetry_lng', longitude);
    },
    (error) => {
      console.warn(\`Geolocation Error Code (\${error.code}): \${error.message}\`);
    },
    locationOptions
  );
}

// 2. HARDENED ASYNCHRONOUS CLIPBOARD MANAGEMENT
async function writeSystemTokenToClipboard(secureTokenString) {
  try {
    await navigator.clipboard.writeText(secureTokenString);
    console.log("Telemetry registration token successfully written to clipboard buffer.");
  } catch (err) {
    console.error("Clipboard operational access denied by security policies.", err);
  }
}

// 3. SPA ROUTING ENGINE EVENT HOOKS
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.activeCluster) {
    console.log(\`Restoring cluster history routing point: \${event.state.activeCluster}\`);
    renderClusterViewNode(event.state.activeCluster);
  }
});`}
            />

            <DocH3>2. Interactive Web APIs Explorer (HTMLAPIsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect } from 'react';

export default function HTMLAPIsWorkspace() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [clipboardStatus, setClipboardStatus] = useState('');
  const [storageCount, setStorageCount] = useState(0);

  // Read counter baseline from persistent Local Storage on component mount
  useEffect(() => {
    const cachedCount = localStorage.getItem('ws_demo_counter');
    if (cachedCount) {
      setStorageCount(parseInt(cachedCount, 10));
    }
  }, []);

  // 1. Trigger Native Geolocation API Pipeline
  const handleLocationFetch = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  };

  // 2. Trigger Asynchronous Clipboard API
  const handleClipboardCopy = async () => {
    try {
      await navigator.clipboard.writeText('TOKEN-ENTERPRISE-2026');
      setClipboardStatus('✓ Copied token successfully!');
      setTimeout(() => setClipboardStatus(''), 3000);
    } catch (err) {
      setClipboardStatus('Access Denied');
    }
  };

  // 3. Trigger Web Storage State Update
  const incrementStorageCounter = () => {
    const updatedValue = storageCount + 1;
    setStorageCount(updatedValue);
    localStorage.setItem('ws_demo_counter', updatedValue.toString());
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Native APIs Control Deck</h3>
        <p className="text-gray-500 mt-1">
          Interact with the interface panels below to test direct integration with core browser system APIs.
        </p>
      </header>

      {/* Main Dynamic Operational Control Grid Layout */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative text-[11px]">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Live Native DOM APIs
        </div>

        <div className="space-y-3 pt-4">
          
          {/* API MODULE 1: Geolocation Coordinate Fetcher */}
          <div className="p-3 bg-slate-50 border rounded-xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">Navigator Geolocation API</span>
              <p className="text-slate-800 font-mono text-[10px]">
                {coords ? \`Lat: \${coords.lat.toFixed(4)}, Lng: \${coords.lng.toFixed(4)}\` : 'Coordinates: Not Queried'}
              </p>
            </div>
            <button 
              onClick={handleLocationFetch}
              className="px-2.5 py-1.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors shadow-sm"
            >
              Request Access
            </button>
          </div>

          {/* API MODULE 2: Async Clipboard Operations */}
          <div className="p-3 bg-slate-50 border rounded-xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">Async Clipboard System</span>
              <p className="text-slate-800 font-mono text-[10px]">
                Target: <code className="bg-slate-200/60 px-1 rounded text-slate-700">TOKEN-ENTERPRISE-2026</code>
              </p>
              {clipboardStatus && <span className="text-[9px] text-emerald-600 block font-semibold">{clipboardStatus}</span>}
            </div>
            <button 
              onClick={handleClipboardCopy}
              className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-sm"
            >
              Copy To Clipboard
            </button>
          </div>

          {/* API MODULE 3: LocalStorage Persistence Node */}
          <div className="p-3 bg-slate-50 border rounded-xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">Persistent localStorage Cache</span>
              <p className="text-slate-800 font-mono text-[10px]">
                Cached Counter Value: <strong className="text-blue-600 text-[12px] ml-1">{storageCount}</strong>
              </p>
            </div>
            <button 
              onClick={incrementStorageCounter}
              className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-sm"
            >
              Increment Cache
            </button>
          </div>

        </div>

        {/* Security Alert Warning Context Box Banner */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-[10px] leading-relaxed">
          <strong>Security Shielding Requirement:</strong> Modern browser privacy policies require that high-privilege operations—such as accessing coordinates or executing clipboard write commands—be initiated exclusively by a <strong>Direct User Interaction Hook</strong> (like an explicit click event). They cannot be triggered programmatically during initial page load sequences.
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}