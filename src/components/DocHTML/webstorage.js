import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLWebStorageDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">Web Storage Architecture: Persistent Cache Mechanics, Session Isolation, and Multi-Tab Synchronization</DocTitle>

      <DocP>
        The HTML5 Web Storage API provides native client-side key-value database engines that allow web applications to store string data directly within the user's browser. Offering a significant upgrade over legacy cookies, Web Storage expands storage capacities to megabyte limits, eliminates unnecessary HTTP network transmission overhead, and features a clean, synchronous developer API.
      </DocP>

      <DocH2>Storage Engine Profiles: Local vs. Session</DocH2>
      <DocP>
        The Web Storage API is split into two distinct mechanisms that share identical programming interfaces but operate under completely different data lifecycles and accessibility rules:
      </DocP>

      <DocH3>1. The localStorage Instance</DocH3>
      <DocList
        items={[
          'Persistence Profile: Data saved inside this bucket persists indefinitely. It survives browser tab closures, window exits, application crashes, and complete operating system reboots.',
          'Scope Window: Restricted by a strict **Same-Origin Policy** (matching protocol, domain, and port configuration). Data is shared globally across all tabs, frames, and windows running under that exact same origin.',
          'Standard Capacity Limit: Offers roughly 5MB to 10MB of available space depending on the browser vendor.'
        ]}
      />

      <DocH3>2. The sessionStorage Instance</DocH3>
      <DocList
        items={[
          'Persistence Profile: Data saved here is tied directly to the lifetime of the specific browser tab or context window. The moment the tab is explicitly closed, the entire storage buffer is wiped.',
          'Scope Window: Isolated to a single, specific browser tab session. Opening the exact same URL in a new tab initializes a completely distinct, empty sessionStorage context.',
          'Persistence Behavior: Data survives standard page reloads, form submissions, and structural route changes within that specific active tab.'
        ]}
      />

      <DocH2>The Key-Value Storage API</DocH2>
      <DocP>
        Both engines operate as primitive string dictionaries. If you need to store complex data primitives (such as arrays, application states, or configuration configurations), you must parse them through the browser's native JSON serialization utilities before writing or reading them:
      </DocP>

      <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
        <table className="min-w-full text-left text-xs bg-white">
          <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
            <tr>
              <th className="p-3">Core Method Interface</th>
              <th className="p-3">Technical Syntax Execution</th>
              <th className="p-3">Internal Storage Effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
            <tr>
              <td className="p-3 font-sans text-blue-600 font-semibold">setItem(key, value)</td>
              <td className="p-3"><code>localStorage.setItem('mode', 'dark');</code></td>
              <td className="p-3 font-sans">Creates a new key-value pair or updates the value if the key already exists. Copies value inputs into raw strings.</td>
            </tr>
            <tr>
              <td className="p-3 font-sans text-blue-600 font-semibold">getItem(key)</td>
              <td className="p-3"><code>const val = localStorage.getItem('mode');</code></td>
              <td className="p-3 font-sans">Retrieves the string value tied to the key. Returns <code>null</code> if the target key cannot be found.</td>
            </tr>
            <tr>
              <td className="p-3 font-sans text-blue-600 font-semibold">removeItem(key)</td>
              <td className="p-3"><code>localStorage.removeItem('mode');</code></td>
              <td className="p-3 font-sans">Deletes the specified key-value pair entirely from the storage dictionary.</td>
            </tr>
            <tr>
              <td className="p-3 font-sans text-blue-600 font-semibold">clear()</td>
              <td className="p-3"><code>localStorage.clear();</code></td>
              <td className="p-3 font-sans">Completely wipes out all saved data entries belonging to the current origin context.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocH2>Cross-Tab Synchronization via Storage Events</DocH2>
      <DocP>
        When a storage entry is added, updated, or deleted, the browser dispatches a native **StorageEvent** to the global window scope. This event serves as a reactive communication channel that lets different tabs running the same application talk to each other in real time.
      </DocP>
      <DocH3>Critical Event Mechanics</DocH3>
      <DocList
        items={[
          'Target Delivery Target: The Storage Event is fired exclusively in **other** open tabs or windows sharing the same origin. It does not trigger in the active tab that performed the write operation.',
          'Event Payload Properties: The dispatched event listener object provides useful context properties: `key` (the targeted storage key), `oldValue` (the value before the change), `newValue` (the newly written value), and `url` (the exact document route where the update originated).'
        ]}
      />

      <DocH2>Production-Grade Web Storage Blueprint</DocH2>
      <DocP>
        Below is a production-ready JavaScript implementation demonstrating safe data serialization, error bounds checks, and real-time cross-tab state synchronization listeners:
      </DocP>

      <DocH3>1. Complete Storage Utility & Event Listener (storage-engine.js)</DocH3>
      <CodeBlock
        language="javascript"
        code={`// PRODUCTION CORE STORAGE MANAGER WITH ERROR SAFES
const WebStorageManager = {
  
  // Safe write module with automated structural JSON serialization
  set(key, payloadData) {
    try {
      const stringifiedPayload = JSON.stringify(payloadData);
      localStorage.setItem(key, stringifiedPayload);
      return true;
    } catch (error) {
      // Handles QuotaExceededError mutations if the storage boundaries crash out
      console.error("Storage write operation failed for key: " + key, error);
      return false;
    }
  },

  // Safe read module with structural object recovery parsing
  get(key) {
    try {
      const rawStringData = localStorage.getItem(key);
      if (!rawStringData) return null;
      return JSON.parse(rawStringData);
    } catch (parseError) {
      console.warn("Data parsing variance encountered for key: " + key + ", returning raw fallback.");
      return localStorage.getItem(key);
    }
  }
};

// CROSS-TAB MULTI-WINDOW STATE SYNCHRONIZER
window.addEventListener('storage', (event) => {
  // Filters events to catch only specific operational variables
  if (event.key === 'app_theme_configuration') {
    console.log("Cross-tab sync initialized. Mutating theme state.");
    applyGlobalThemeStyles(event.newValue);
  }
});`}
      />

      <DocH3>2. Layout Integration View (HTMLStorageWorkspace.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React, { useState, useEffect } from 'react';

export default function HTMLStorageWorkspace() {
  const [themeMode, setThemeMode] = useState('light');
  const [sessionToken, setSessionToken] = useState('Not Initialized');

  useEffect(() => {
    const activeTheme = localStorage.getItem('ws_theme_config') || 'light';
    const activeSession = sessionStorage.getItem('ws_session_id') || 'None Active';
    
    setThemeMode(activeTheme);
    setSessionToken(activeSession);

    const handleCrossTabSync = (e: StorageEvent) => {
      if (e.key === 'ws_theme_config' && e.newValue) {
        setThemeMode(e.newValue);
      }
    };

    window.addEventListener('storage', handleCrossTabSync);
    return () => window.removeEventListener('storage', handleCrossTabSync);
  }, []);

  const toggleTheme = () => {
    const targetTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(targetTheme);
    localStorage.setItem('ws_theme_config', targetTheme);
  };

  const initializeSession = () => {
    const structuredToken = "AUTH-" + Math.floor(100000 + Math.random() * 900000);
    setSessionToken(structuredToken);
    sessionStorage.setItem('ws_session_id', structuredToken);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Web Storage Workspace Panel</h3>
        <p className="text-gray-500 mt-1">
          Interact with the controls below to inspect how data changes persist inside local caches and isolate across sessions.
        </p>
      </header>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative text-[11px]">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          DOM Storage Engines
        </div>

        <div className="space-y-3 pt-4">
          <div className="p-3 border rounded-xl bg-slate-50 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">Persistent localStorage Cache</span>
              <p className="text-slate-800 font-mono text-[10px]">
                Key: <code className="text-blue-600 font-bold bg-white px-1 rounded border">ws_theme_config</code> &rarr; 
                <span className="ml-1 bg-slate-900 text-white px-1.5 py-0.5 rounded uppercase text-[9px] font-bold">{themeMode}</span>
              </p>
            </div>
            <button 
              onClick={toggleTheme}
              className="px-2.5 py-1.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors shadow-sm"
            >
              Toggle Configuration
            </button>
          </div>

          <div className="p-3 border rounded-xl bg-slate-50 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">Tab-Isolated sessionStorage</span>
              <p className="text-slate-800 font-mono text-[10px]">
                Key: <code className="text-emerald-700 font-bold bg-white px-1 rounded border">ws_session_id</code> &rarr; 
                <span className="ml-1 text-slate-600 font-semibold">{sessionToken}</span>
              </p>
            </div>
            <button 
              onClick={initializeSession}
              className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-sm"
            >
              Rotate Session
            </button>
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-[10px] leading-relaxed">
          <strong>Security Warning Note:</strong> Web Storage targets are unencrypted text entries readable by any client-side JavaScript execution context. Never store authentication tokens, financial calculations, or sensitive data inside <code>localStorage</code> or <code>sessionStorage</code>. Unsecured storage zones remain highly vulnerable to Cross-Site Scripting (XSS) extraction attacks.
        </div>
      </div>
    </div>
  );
}`}
      />
    </>
  );
}