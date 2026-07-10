import React, { Component, useState, useEffect } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function ErrorHandlingDoc() {
    return (
        <>
            <DocTitle eyebrow="Architecture">Error Handling</DocTitle>

            <DocP>
                Robust error handling prevents a single JavaScript runtime exception from crashing the entire application view. React architecture captures uncaught component exceptions using layout boundaries, while standard async functions and network calls rely on operational handling logic.
            </DocP>

            <DocH2>Error Mitigation Patterns</DocH2>
            <DocList
                items={[
                    'Error Boundaries: Specialized class components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the interface.',
                    'Try/Catch Blocks: JavaScript\'s imperative mechanism used inside synchronous routines or asynchronous blocks (like event handlers and hooks) to intercept operational execution failures manually.',
                    'API Errors: Network failures, timeouts, or bad status codes (4xx/5xx) emitted during data streaming workflows that must be bound to component state to inform the client cleanly.'
                ]}
            />

            <DocH2>Implementation Patterns</DocH2>
            <DocP>
                Below is a complete implementation structure showcasing an enterprise-ready Class Error Boundary and a Functional component safely handling data fetching API exceptions:
            </DocP>

            <DocH3>1. The Error Boundary Class Component</DocH3>
            <pre>
                <code className="language-javascript">
                    {`import React, { Component } from 'react';

export class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorLog: null };
  }

  // Lifecycle method updates state to render the visual fallback layout on next pass
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Intercepts technical stack traces for analytics or reporting services
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary intercepted crash:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '2px solid #ef4444', backgroundColor: '#fef2f2' }}>
          <h4>Critical Section Failure Intercepted</h4>
          <p>The system was preserved from an unhandled UI thread layout crash.</p>
          <button onClick={() => window.location.reload()}>Reboot Module Layout</button>
        </div>
      );
    }

    return this.props.children;
  }
}`}
                </code>
            </pre>

            <DocH3>2. Functional Component Handling Async API Failures</DocH3>
            <pre>
                <code className="language-jsx">
                    {`import React, { useState, useEffect } from 'react';

export function RobustDataViewer() {
  const [userData, setUserData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    setApiError(null);
    
    // Try/Catch isolates operational network exceptions
    try {
      const response = await fetch('https://api.example.com/user/profile');
      
      // Explicitly evaluate structural server error responses
      if (!response.ok) {
        throw new Error(\`Server returned status code: \${response.status}\`);
      }
      
      const targetPayload = await response.json();
      setUserData(targetPayload);
    } catch (error) {
      // Capture both browser connection crashes and explicit status throws safely
      setApiError(error.message || 'Fatal Connection Error Detected');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <p>Syncing secure data stream...</p>;

  return (
    <div>
      <h3>Operational View Panel</h3>
      
      {/* Informative layout binding for isolated server exceptions */}
      {apiError && (
        <div style={{ color: '#dc2626', marginBottom: '10px' }}>
          <strong>Operational Error:</strong> {apiError}
          <button onClick={fetchProfile} style={{ marginLeft: '10px' }}>Retry Connection</button>
        </div>
      )}

      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        !apiError && <p>No records active.</p>
      )}
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}