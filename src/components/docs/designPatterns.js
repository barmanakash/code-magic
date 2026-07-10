import React, { useState, createContext, useContext, useMemo, useCallback } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function DesignPatternsDoc() {
    return (
        <>
            <DocTitle eyebrow="Architecture & Patterns">Advanced React Design Patterns</DocTitle>

            <DocP>
                Design patterns represent reusable solutions to commonly occurring engineering challenges. Leveraging standard software architectures allows developers to maximize separation of concerns, optimize component composability, and simplify long-term testability.
            </DocP>

            <DocH2>Design Patterns Paradigm Matrix</DocH2>
            <DocList
                items={[
                    'Container / Presentational Pattern: Separates business logic and data fetching operations (Containers) from pure user interface markup styling (Presentational components). While largely succeeded by Custom Hooks, it remains a fundamental architectural mindset.',
                    'Compound Components Pattern: Enables a group of highly cohesive sub-components to work together harmoniously by sharing internal state implicitly via a contextual layer, granting users absolute markup flexibility.',
                    'Provider Pattern: Utilizes React Context to seamlessly stream global dependencies, state records, or structural themes down an entire nested application tree without manual prop-drilling.',
                    'Custom Hooks Pattern: Extracts data formatting, analytical trackers, and state workflows entirely out of UI render views into standalone, testable functional closures.',
                    'Render Props Pattern: Delegates visual UI presentation responsibilities out of a state-tracking module to an explicit rendering function passed down through an element property attribute.',
                    'Higher-Order Components (HOC) Pattern: An advanced compositional abstraction tool that accepts a functional module wrapper component and returns an upgraded variant injected with customized analytical tracking or authorization properties.'
                ]}
            />

            <DocH2>Unified Architectural Blueprint</DocH2>
            <DocP>
                Below is an advanced implementation merging these architectural principles. It demonstrates a shared **Provider state engine**, wrapped by a flexible **Compound Component interface**, leveraging **Custom Hook logic boundaries** and a **Render Prop view**:
            </DocP>

            <DocH3>1. The Pattern Core Engine (SystemWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, createContext, useContext, useCallback, useMemo } from 'react';

// ==========================================
// A. THE PROVIDER PATTERN LAYER
// ==========================================
interface WorkspaceContextType {
  activeTerminalId: string;
  setTerminal: (id: string) => void;
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null);

// ==========================================
// B. THE COMPOUND COMPONENT WRAPPER
// ==========================================
export function Workspace({ defaultId, children }: { defaultId: string; children: React.ReactNode }) {
  const [activeTerminalId, setActiveTerminalId] = useState<string>(defaultId);

  const setTerminal = useCallback((id: string) => {
    setActiveTerminalId(id);
  }, []);

  const internalMemoizedContext = useMemo(() => ({
    activeTerminalId,
    setTerminal
  }), [activeTerminalId, setTerminal]);

  return (
    <WorkspaceContext.Provider value={internalMemoizedContext}>
      <div className="workspace-engine-frame border rounded p-4 shadow-sm bg-white">
        {children}
      </div>
    </WorkspaceContext.Provider>
  );
}

// ==========================================
// C. THE CUSTOM HOOK PATTERN LAYER
// ==========================================
export function useWorkspaceEngine() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspaceEngine must be executed strictly inside a <Workspace /> provider context subtree.');
  }
  return context;
}

// Compound Sub-Component: Terminal Selection Trigger Button
export function WorkspaceTab({ targetId, label }: { targetId: string; label: string }) {
  const { activeTerminalId, setTerminal } = useWorkspaceEngine();
  const isSelected = activeTerminalId === targetId;

  return (
    <button
      onClick={() => setTerminal(targetId)}
      className={\`px-4 py-2 text-sm font-medium transition-all border-b-2 \${
        isSelected ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-500 hover:text-gray-700'
      }\`}
    >
      {label}
    </button>
  );
}

// ==========================================
// D. THE RENDER PROPS IMPLEMENTATION
// ==========================================
interface DisplayPanelProps {
  targetId: string;
  renderView: (meta: { isCurrent: boolean; activeId: string }) => React.ReactNode;
}

export function WorkspacePanel({ targetId, renderView }: DisplayPanelProps) {
  const { activeTerminalId } = useWorkspaceEngine();
  const isCurrent = activeTerminalId === targetId;

  if (!isCurrent) return null;

  return (
    <div className="panel-container-body mt-4 p-3 bg-gray-50 rounded">
      {renderView({ isCurrent, activeId: activeTerminalId })}
    </div>
  );
}`}
            />

            <DocH3>2. Consolidated Declarative Orchestration (App.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import { Workspace, WorkspaceTab, WorkspacePanel } from './SystemWorkspace';

// ==========================================
// E. PRESENTATIONAL VIEW (Consumer Execution)
// ==========================================
export default function EngineeringControlHub() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h3 className="text-xl font-bold mb-4">Cluster Orchestration Terminal</h3>
      
      {/* Consuming our structured compound layout smoothly with zero local state boilerplate */}
      <Workspace defaultId="terminal-alpha">
        <div className="flex border-b border-gray-200">
          <WorkspaceTab targetId="terminal-alpha" label="Terminal Alpha Logs" />
          <WorkspaceTab targetId="terminal-beta" label="Terminal Beta Core" />
        </div>

        {/* Utilizing Render Props to inject highly customized markup contexts dynamically */}
        <WorkspacePanel 
          targetId="terminal-alpha" 
          renderView={({ activeId }) => (
            <div>
              <h5 className="text-sm font-semibold text-green-600">Secure Node Stream Active</h5>
              <p className="text-xs text-gray-600 mt-1">
                Currently extracting real-time diagnostics out of cluster frame: <code className="bg-gray-200 px-1 rounded">{activeId}</code>
              </p>
            </div>
          )} 
        />

        <WorkspacePanel 
          targetId="terminal-beta" 
          renderView={({ activeId }) => (
            <div>
              <h5 className="text-sm font-semibold text-amber-600">System Performance Metrics</h5>
              <p className="text-xs text-gray-600 mt-1">
                Warning flags missing. Thread pipeline running smoothly on target sector: <strong className="text-gray-800">{activeId}</strong>
              </p>
            </div>
          )} 
        />
      </Workspace>
    </div>
  );
}`}
            />
        </>
    );
}