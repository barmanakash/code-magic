import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLCharacterEncodingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Character Encoding: The Unicode Standard, Binary-to-Text Mapping, and UTF-8 Viewport Architecture</DocTitle>

            <DocP>
                Character encoding is the structural translation layer that maps human-readable text characters to raw binary bytes stored in memory or sent over a network. Without a defined encoding standard, web browsers cannot determine how to interpret binary data streams, resulting in garbled text and broken symbols (commonly referred to as *Encoding Corruption* or *Mojibake*).
            </DocP>

            <DocH2>The Evolution of Text Mappings</DocH2>

            <DocH3>1. ASCII (American Standard Code for Information Interchange)</DocH3>
            <DocList
                items={[
                    'Architecture: A legacy 7-bit character encoding system created during the early days of computing.',
                    'Limitations: It maps a maximum of 128 unique characters (integers 0 through 127). This accommodates standard English letters, numbers, and basic punctuation, but completely lacks support for international accents, scientific notations, or global alphabets.'
                ]}
            />

            <DocH3>2. Unicode Standard</DocH3>
            <DocList
                items={[
                    'Architecture: A comprehensive, universal character set designed to replace isolated regional encodings.',
                    'Capabilities: Instead of focusing on storage mechanics, Unicode acts as a global codebook that assigns a unique numeric identifier, called a **Code Point**, to every character, symbol, or glyph in existence across human languages.',
                    'Syntax Profile: Represented as text strings prefixed with <code>U+</code> followed by hexadecimal numbers (e.g., the standard capital letter "A" maps to <code>U+0041</code>).'
                ]}
            />



            <DocH3>3. UTF-8 (Unicode Transformation Format, 8-Bit)</DocH3>
            <DocList
                items={[
                    'Architecture: The dominant variable-width encoding system used across modern webs.',
                    'Mechanics: It translates Unicode code points into binary data using streams of 1 to 4 bytes. For basic characters, it uses a single byte; for complex international scripts or emojis, it dynamically scales up to 4 bytes.',
                    'Backward Compatibility: The first 128 characters of UTF-8 match the ASCII character set exactly. This allows legacy ASCII files to be read as valid UTF-8 documents without needing conversion.'
                ]}
            />

            <DocH2>The Charset Meta Declaration</DocH2>
            <DocP>
                The <code>&lt;meta charset="..."&gt;</code> element is a critical configuration tag placed inside a document's <code>&lt;head&gt;</code> container. It informs the browser's tokenizing parser exactly which binary decoding profile to use when converting the raw incoming file bytes into rendered DOM text nodes.
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Implementation Paradigm</th>
                            <th className="p-3">Technical Requirement</th>
                            <th className="p-3">Browser Rendering Rationale</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                            <td className="p-3 font-mono text-blue-600">&lt;meta charset="utf-8"&gt;</td>
                            <td className="p-3">Must be declared within the first **1024 bytes** of the HTML file.</td>
                            <td className="p-3">Ensures the browser reads the declaration *before* parsing deep metadata, avoiding mid-page re-rendering or script execution halts.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-blue-600">Placement order</td>
                            <td className="p-3">Should be the very first element inside the <code>&lt;head&gt;</code> block.</td>
                            <td className="p-3">Prevents cross-site scripting (XSS) attacks that exploit byte-switching vulnerabilities in unassigned file chunks.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Encoding Blueprint</DocH2>
            <DocP>
                Below is a fully compliant HTML template demonstrating proper meta element declarations, along with an interactive visualization workspace for testing multi-byte encodings:
            </DocP>

            <DocH3>1. Standard Document Structural Shell (index.html)</DocH3>
            <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Global Telemetry Gateway</title>
</head>
<body>

  <main class="c-viewport-container">
    <article class="c-data-card">
      <h2>International Node Telemetry</h2>
      
      <ul>
        <li>Tokyo Hub Target: 東京の主要ノード</li>
        <li>Berlin Gateway Sync: Alpha-Prüfung OK</li>
        <li>Dynamic Payload Signal: Operational ⚡ [🚀]</li>
      </ul>
    </article>
  </main>

</body>
</html>`}
            />

            <DocH3>2. Encoding Workspace Inspector (HTMLCharsetWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

export default function HTMLCharsetWorkspace() {
  const [selectedMapping, setSelectedMapping] = useState<'ascii' | 'utf8'>('utf8');

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Character Encoding Pipeline Simulator</h3>
        <p className="text-gray-500 mt-1">
          Switch between encoding profiles below to observe how the browser interprets multi-byte strings.
        </p>
      </header>

      {/* Profile Control Matrix Toggles */}
      <div className="flex gap-2 bg-slate-200 p-1 rounded-xl">
        <button 
          onClick={() => setSelectedMapping('utf8')} 
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${selectedMapping === 'utf8' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          UTF-8 Mode (Universal Unicode)
        </button>
        <button 
          onClick={() => setSelectedMapping('ascii')} 
          className={\`px-3 py-1.5 rounded-lg font-bold transition-all \${selectedMapping === 'ascii' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}\`}
        >
          ASCII Mode (7-Bit Legacy Restraint)
        </button>
      </div>

      {/* Main Simulation Workspace Card Component */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          {selectedMapping === 'utf8' ? 'meta charset="UTF-8"' : 'meta charset="US-ASCII"'}
        </div>

        <div className="space-y-3 pt-4 text-[11px]">
          
          {/* Output Cluster Row 1: Basic ASCII Text */}
          <div className="p-3 bg-slate-50 border rounded-xl flex justify-between items-center">
            <div>
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">String: "NODE_26" (ASCII Range)</span>
              <p className="font-mono text-slate-800 text-[11px] font-semibold mt-0.5">NODE_26</p>
            </div>
            <span className="bg-emerald-50 text-emerald-700 text-[9px] font-mono px-2 py-0.5 rounded font-bold">
              1 Byte/Char
            </span>
          </div>

          {/* Output Cluster Row 2: Complex International String Component */}
          <div className="p-3 bg-slate-50 border rounded-xl flex justify-between items-center">
            <div>
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">String: "München" (Extended Accent)</span>
              <p className="font-mono text-[11px] font-semibold mt-0.5 \${selectedMapping === 'ascii' ? 'text-red-600 line-through bg-red-50 px-1 rounded' : 'text-slate-800'}\`}>
                {selectedMapping === 'utf8' ? 'München' : 'MÃ¼nchen'}
              </p>
            </div>
            <span className={\`text-[9px] font-mono px-2 py-0.5 rounded font-bold \${selectedMapping === 'utf8' ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'}\`}>
              {selectedMapping === 'utf8' ? 'Variable 2-Byte' : 'Corrupted'}
            </span>
          </div>

          {/* Output Cluster Row 3: Emoji Component Representation */}
          <div className="p-3 bg-slate-50 border rounded-xl flex justify-between items-center">
            <div>
              <span className="font-mono text-[8px] text-slate-400 block font-bold uppercase">String: "🚀 Ingress" (4-Byte Glyph)</span>
              <p className="font-mono text-[11px] font-semibold mt-0.5 \${selectedMapping === 'ascii' ? 'text-red-600 line-through bg-red-50 px-1 rounded' : 'text-slate-800'}\`}>
                {selectedMapping === 'utf8' ? '🚀 Ingress' : ' Ingress'}
              </p>
            </div>
            <span className={\`text-[9px] font-mono px-2 py-0.5 rounded font-bold \${selectedMapping === 'utf8' ? 'bg-purple-50 text-purple-700' : 'bg-red-50 text-red-700'}\`}>
              {selectedMapping === 'utf8' ? '4-Byte Frame' : 'Dropped'}
            </span>
          </div>

        </div>

        {/* Technical Safety Notice Alert Layout Box */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-[10px] leading-relaxed">
          <strong>Key Engineering Rule:</strong> When a browser hits a character outside the current metadata encoding map limits (like an ASCII engine reading an international vowel or emoji token), it attempts to parse the extra bytes individually. This produces broken text segments like <code>MÃ¼nchen</code>. Always declare <code>UTF-8</code> explicitly to ensure consistent font and layout mapping across international clients.
        </div>

      </div>

    </div>
  );
}`}
            />
        </>
    );
}