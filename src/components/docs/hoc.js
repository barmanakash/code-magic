import React, { useState, useEffect } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function HigherOrderComponentsDoc() {
    return (
        <>
            <DocTitle eyebrow="Advanced Patterns">Higher-Order Components (HOC)</DocTitle>

            <DocP>
                A Higher-Order Component (HOC) is an advanced pattern in React for reusing component logic. It is not part of the core React API; rather, it is a pattern that emerges from React's compositional nature, acting as a pure function that accepts a component and returns a completely new enhanced component.
            </DocP>

            <DocH2>Core Architecture Concepts</DocH2>
            <DocList
                items={[
                    'HOC Definition: A pure function with the structural signature: const EnhancedComponent = withSecretSauce(WrappedComponent). It wraps another component to inject auxiliary data, track analytical events, or evaluate permission profiles.',
                    'Immutability & Purity: An HOC must never mutate or alter the internal structure of the incoming wrapped component. Instead, it should use compositional wrapping to pass props through cleanly, preserving the target component\'s original behaviors.',
                    'Static Composition vs Runtime: HOCs are executed statically outside component declarations during file parsing. Declaring or invoking an HOC inside the render body of another component destroys its underlying sub-tree state on every single render pass.'
                ]}
            />

            <DocH2>Production HOC Implementation Pattern</DocH2>
            <DocP>
                Below is a clean, practical architectural file setup illustrating how to build a security gate Higher-Order Component (withAuthentication) and compose it securely with an administrative dashboard view:
            </DocP>

            <DocH3>1. Building the Functional Higher-Order Component</DocH3>
            <pre>
                <code className="language-jsx">
                    {`import React from 'react';

// Functional higher-order component factory managing access tracking rules
export function withAuthentication(WrappedComponent) {
  // Returns a new enhanced wrapper component function closure
  return function AuthenticatedGate(props) {
    const userSessionToken = localStorage.getItem('authToken');
    const systemRole = 'admin'; // Static authentication state abstraction for representation

    if (!userSessionToken) {
      return (
        <div className="p-4 bg-red-50 border border-red-300 text-red-700">
          <h5>Security Verification Exception</h5>
          <p>You must establish a verified secure access session token to view this protected terminal gateway.</p>
        </div>
      );
    }

    // Forward incoming parent configuration props alongside injected credential meta-parameters
    return <WrappedComponent {...props} userRole={systemRole} isSecure={true} />;
  };
}`}
                </code>
            </pre>

            <DocH3>2. Composing and Enhancing the Base Component</DocH3>
            <pre>
                <code className="language-jsx">
                    {`import React from 'react';
import { withAuthentication } from './withAuthentication';

// Simple representation view component expecting underlying parameters
function AdministrativeAnalyticsPanel({ title, userRole, isSecure }) {
  return (
    <div style={{ padding: '24px', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
      <h4>System Dashboard: {title}</h4>
      <p>Current Verified User Role: <strong>{userRole}</strong></p>
      <p>Security Context Interceptor Verification Hash: {isSecure ? 'SECURE_ACTIVE' : 'NULL'}</p>
    </div>
  );
}

// Enhance the base analytics dashboard component statically using our higher-order layout factory
const ProtectedAnalyticsPanel = withAuthentication(AdministrativeAnalyticsPanel);

// Exporting the orchestrated dashboard control setup
export default function CompanyPortalView() {
  return (
    <div>
      <h3>Corporate Enterprise Hub</h3>
      {/* Passing standard props to the wrapper component, which routes through the HOC layer flawlessly */}
      <ProtectedAnalyticsPanel title="Production Database Fleet Logs" />
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}