import React, { useState, useEffect } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function ReactWithBackendDoc() {
    return (
        <>
            <DocTitle eyebrow="Full-Stack Integration">React with Backend Architectures</DocTitle>

            <DocP>
                Connecting a React frontend to backend services requires establishing clear communication protocols. Modern engineering applications rely on either traditional self-hosted application servers, fully integrated Backend-as-a-Service (BaaS) ecosystems, or advanced data graph query layers.
            </DocP>

            <DocH2>Backend Infrastructure Tooling Matrix</DocH2>
            <DocList
                items={[
                    'Node.js & Express: A powerful runtime environment paired with a minimal, unopinionated web framework. This stack allows engineers to build scalable custom JSON REST APIs, orchestrate WebSockets, and manage custom database connections seamlessly.',
                    'Firebase: Google\'s comprehensive Backend-as-a-Service platform. It provides instant real-time NoSQL databases (Firestore), plug-and-play user authentication, static file asset hosting, and serverless Cloud Functions out of the box.',
                    'Supabase: An open-source, high-performance Firebase alternative built on top of a relational PostgreSQL engine. It instantly exposes secure, real-time database schemas, authentication APIs, and file storage via native database triggers.',
                    'REST Architecture: A mature architectural style that models resources using explicit HTTP endpoints (such as GET /api/users, POST /api/posts). It leverages native browser caching but can lead to over-fetching or under-fetching payloads.',
                    'GraphQL Protocol: A modern query language and runtime engine that allows client views to request exactly the data data fields they need—and nothing more—via a single unified endpoint POST request pipeline.'
                ]}
            />

            <DocH2>Full-Stack Data Fetching Architectures</DocH2>
            <DocP>
                Below are architectural code implementations comparing structured REST API handling inside standard Node/Express structures against flexible schema-driven GraphQL query executions:
            </DocP>

            <DocH3>1. REST Custom Gateway Architecture (Node/Express Engine + React Fetch)</DocH3>
            <CodeBlock
                language="javascript"
                code={`// =======================================================
// A. SERVER PIPELINE: server.js (Node.js + Express)
// =======================================================
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); // Unlock specific client access bounds
app.use(express.json());

// In-memory mock data database store configuration
const clusterNodes = [
  { id: 'node-01', service: 'Auth-Service', health: 'Operational' },
  { id: 'node-02', service: 'Payment-Gate', health: 'Degraded' }
];

// Explicit REST endpoint definitions
app.get('/api/v1/nodes', (req, res) => {
  res.status(200).json({ success: true, data: clusterNodes });
});

app.listen(5000, () => console.log('REST Infrastructure Server live on port 5000'));`}
            />

            <CodeBlock
                language="tsx"
                code={`// =======================================================
// B. CLIENT ELEMENT: NodeDashboard.tsx (React Frontend)
// =======================================================
import React, { useState, useEffect } from 'react';

interface ClusterNode {
  id: string;
  service: string;
  health: string;
}

export function NodeDashboard() {
  const [nodes, setNodes] = useState<ClusterNode[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Intercept and resolve backend resource streams cleanly
    fetch('http://localhost:5000/api/v1/nodes')
      .then((res) => {
        if (!res.ok) throw new Error('REST data stream exception encountered');
        return res.json();
      })
      .then((payload) => setNodes(payload.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500 text-sm">System Error: {error}</div>;

  return (
    <div className="p-4 border rounded bg-white">
      <h4 className="text-md font-bold text-gray-800 mb-2">Express REST Cluster Telemetry</h4>
      <ul className="space-y-2">
        {nodes.map((node) => (
          <li key={node.id} className="text-xs flex justify-between border-b pb-1">
            <span className="font-medium text-gray-700">{node.service}</span>
            <span className={node.health === 'Operational' ? 'text-green-600' : 'text-amber-600'}>
              {node.health}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
            />

            <DocH3>2. GraphQL Declarative Query Execution Pattern</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect } from 'react';

// Declarative GraphQL query shape requesting EXACT target data keys from the graph schema
const GET_USER_PROFILE_QUERY = \`
  query FetchUserProfile($userId: ID!) {
    user(id: $userId) {
      name
      email
      accountStatus
    }
  }
\`;

export function GraphQLProfileLoader({ id }: { id: string }) {
  const [profile, setProfile] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // GraphQL queries always target a single unified POST endpoint configuration
    fetch('https://api.example.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: GET_USER_PROFILE_QUERY,
        variables: { userId: id }
      })
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errors) console.error('GraphQL validation issues:', result.errors);
        setProfile(result.data?.user || null);
      })
      .catch((err) => console.error('Network failure:', err));
  }, [id]);

  if (!profile) return <p className="text-xs text-gray-400">Querying graph registry...</p>;

  return (
    <div className="p-4 bg-slate-50 rounded border text-sm">
      <h5 className="font-semibold text-gray-800">GraphQL Resolved Account</h5>
      <p className="text-xs mt-1">Name: {profile.name}</p>
      <p className="text-xs text-gray-500">Email: {profile.email}</p>
    </div>
  );
}`}
            />
        </>
    );
}