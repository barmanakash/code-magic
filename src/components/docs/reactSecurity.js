import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function ReactSecurityDoc() {
    return (
        <>
            <DocTitle eyebrow="Security Architecture">React Security Best Practices</DocTitle>

            <DocP>
                Building web interfaces securely requires a deep defense strategy. While React handles many attack vectors automatically out of the box, specific APIs and data-handling habits can expose vulnerabilities if not configured correctly.
            </DocP>

            <DocH2>Vulnerability Dimensions & Safeguards</DocH2>
            <DocList
                items={[
                    'Cross-Site Scripting (XSS): An attack vector where malicious scripts are injected into trusted web platforms. React escapes strings by default when rendering JSX expressions. However, bypassing this protection explicitly using dangerous properties like dangerouslySetInnerHTML opens the application to arbitrary code execution risks.',
                    'Cross-Site Request Forgery (CSRF): A malicious exploit where unauthorized commands are executed from a trusted user browser instance. Mitigate this risk by enforcing strict SameSite properties (Strict or Lax) on session identifier tokens, or by using anti-CSRF tokens embedded in client headers.',
                    'Sanitization: The structural process of parsing raw HTML input markup and stripping out malicious tag nodes (such as <script>, onload, or onerror) before committing strings to the layout. DOMPurify is the production gold standard library for handling this process safely.',
                    'Environment Variables: Managing configuration configurations (prefixed with VITE_ or REACT_APP_ depending on your build system bundle setup). Variables compiled into build outputs are readable in plain-text inside network scripts, so they should never store backend application secrets like private API database keys.'
                ]}
            />

            <DocH2>Secure Coding Implementations</DocH2>
            <DocP>
                Below is a secure template illustrating how to configure structural validation, safe markup rendering via sanitization libraries, and environment access:
            </DocP>

            <DocH3>1. Production Content Sanitization Engine</DocH3>
            <CodeBlock
                language="jsx"
                code={`import React, { useState, useMemo } from 'react';
import DOMPurify from 'dompurify';

export function SanitizedCommentFeed() {
  // Untrusted user string containing an intentional XSS injection payload
  const [rawUnsafeInput, setRawUnsafeInput] = useState(
    "Hello! <img src='invalid-link' onError='alert(\\"Hacked!\\")' /> This is <b>bold text</b>."
  );

  // Compute and sanitize markup strictly across re-render passes
  const cleanTrustedHtml = useMemo(() => {
    return DOMPurify.sanitize(rawUnsafeInput, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p'], // Enforce rigid tag safelists
      ALLOWED_ATTR: [] // Disallow all attributes to prevent inline handler execution hooks
    });
  }, [rawUnsafeInput]);

  return (
    <div className="security-card p-4 border rounded">
      <h4>Sanitized Feed Output</h4>
      
      {/* Explicitly passing sanitized strings safely inside the element tree layer */}
      <div 
        dangerouslySetInnerHTML={{ __html: cleanTrustedHtml }} 
        style={{ padding: '12px', background: '#f8fafc', borderRadius: '4px' }}
      />

      <textarea
        value={rawUnsafeInput}
        onChange={(e) => setRawUnsafeInput(e.target.value)}
        rows={3}
        className="w-full mt-2 p-2 border text-sm"
      />
    </div>
  );
}`}
            />

            <DocH3>2. Environment Access Mapping</DocH3>
            <CodeBlock
                language="javascript"
                code={`// 1. Vite environment variables tracking configuration (.env file representation)
// VITE_PUBLIC_API_GATEWAY="https://api.production-domain.com/v1"
// PRIVATE_SECRET_DB_KEY="xyz123" <-- DANGER: This will NOT be safe if shipped to the client!

export function configureApiEndpoint() {
  // Pull variables securely configured at compile time
  const targetGatewayUrl = import.meta.env.VITE_PUBLIC_API_GATEWAY;

  if (!targetGatewayUrl) {
    console.warn("Application runtime configuration exception: Missing VITE_PUBLIC_API_GATEWAY asset token");
  }

  return {
    url: targetGatewayUrl || 'https://api.fallback-staging.local',
    timeout: 15000
  };
}`}
            />
        </>
    );
}