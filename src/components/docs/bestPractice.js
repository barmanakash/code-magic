import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function BestPracticesDoc() {
    return (
        <>
            <DocTitle eyebrow="Software Engineering">React Best Practices & Code Standards</DocTitle>

            <DocP>
                Building production-grade React systems requires moving beyond basic functionality. Adhering to structured architectural guidelines ensures that application codebases remain clean, scalable, simple to test, and highly resilient under aggressive scaling demands.
            </DocP>

            <DocH2>Architectural Core Pillars</DocH2>
            <DocList
                items={[
                    'Small & Single-Responsibility Components: Keep individual files minimal (ideally under 150 lines of code). A component should excel at exactly one responsibility—either parsing interactive layout logic or managing specific data flows.',
                    'Reusable Component Primitives: Standardize structural design assets (buttons, modal windows, layout cards) into highly configurable components that consume UI properties dynamically through explicit typing configurations.',
                    'Custom Hooks Pattern: Extract complex component state management logic, tracking routines, or asynchronous networking tasks entirely out of user interface files into standalone custom hook functions.',
                    'Predictable Naming Conventions: Enforce clear structural naming standards throughout the codebase. Use PascalCase for standard components (e.g., UserDashboard), camelCase for custom hooks (e.g., useAuthSession), and UPPERCASE for global configurations or invariant constants.',
                    'TypeScript Typing Integration: Implement rigorous compile-time type verification. Avoid relying on loose type configurations like any; instead, leverage strongly typed interfaces, component prop shapes, and explicit function return structures.',
                    'Targeted Memoization Rules: Implement strategic, data-driven performance optimizations with React.memo, useMemo, and useCallback. Apply these primitives intentionally where data heavy processing occurs rather than applying them globally without justification.',
                    'Strategic Error Boundaries: Avoid leaving the application vulnerable to full-tree crashes by isolating unpredictable application spaces (like third-party plugins or visualization graphs) inside dedicated class-based Error Boundaries.'
                ]}
            />

            <DocH2>Unified Best-Practices Architectural Implementation</DocH2>
            <DocP>
                Below is an production-ready architecture detailing clean TypeScript typing integrations, custom hooks, atomic components, and safe memoization wrappers:
            </DocP>

            <DocH3>1. The Custom Logic Hook (useNetworkData.ts)</DocH3>
            <CodeBlock
                language="typescript"
                code={`import { useState, useEffect, useCallback } from 'react';

// Establish rigorous TypeScript models for compiler-level validation
export interface MetricReport {
  id: string;
  label: string;
  score: number;
}

export function useNetworkData(endpointUrl: string) {
  const [data, setData] = useState<MetricReport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMetrics = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(endpointUrl);
      if (!response.ok) throw new Error('Network exception handled');
      const payload: MetricReport[] = await response.json();
      setData(payload);
    } catch (error) {
      console.error('System logic failure:', error);
    } finally {
      setLoading(false);
    }
  }, [endpointUrl]);

  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  return { data, loading, refetch: fetchMetrics };
}`}
            />

            <DocH3>2. The Atom Component Layer (MetricRow.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { memo } from 'react';
import { MetricReport } from './useNetworkData';

interface MetricRowProps {
  report: MetricReport;
  onFlag: (id: string) => void;
}

// React.memo protects the row structure from rendering unless properties mutate
export const MetricRow = memo(function MetricRow({ report, onFlag }: MetricRowProps) {
  console.log(\`Rendering isolated row element: \${report.id}\`);
  
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-100">
      <span className="text-sm font-medium text-gray-700">{report.label}</span>
      <div className="flex items-center gap-4">
        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
          Score: {report.score}
        </span>
        <button
          onClick={() => onFlag(report.id)}
          className="text-xs text-red-600 hover:underline"
        >
          Flag Issue
        </button>
      </div>
    </div>
  );
});`}
            />

            <DocH3>3. Orchestrator Management Layer (AnalyticsWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useCallback, useMemo } from 'react';
import { useNetworkData, MetricReport } from './useNetworkData';
import { MetricRow } from './MetricRow';

export default function AnalyticsWorkspace() {
  // Logic extraction via clean custom hook primitive
  const { data, loading } = useNetworkData('https://api.example.com/metrics');

  // useCallback keeps reference parameters completely stable across render passes
  const handleFlagAction = useCallback((id: string) => {
    console.log(\`Resource parameter flagged internally: \${id}\`);
  }, []);

  // useMemo caches heavy data processing maps until dependencies change
  const highValueMetrics = useMemo(() => {
    return data.filter((item: MetricReport) => item.score > 75);
  }, [data]);

  if (loading) return <p className="text-sm text-gray-500">Syncing workspace telemetry...</p>;

  return (
    <div className="workspace-card p-6 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Critical System Analytics</h3>
      
      <div className="list-wrapper border rounded divide-y">
        {highValueMetrics.length > 0 ? (
          highValueMetrics.map((metric) => (
            <MetricRow 
              key={metric.id} 
              report={metric} 
              onFlag={handleFlagAction} 
            />
          ))
        ) : (
          <p className="p-4 text-xs text-gray-400">No high-performing operations detected.</p>
        )}
      </div>
    </div>
  );
}`}
            />
        </>
    );
}