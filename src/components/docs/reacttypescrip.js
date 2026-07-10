import React, { useState, createContext, useContext, useMemo } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function ReactTypeScriptDoc() {
    return (
        <>
            <DocTitle eyebrow="Type Safety">React with TypeScript</DocTitle>

            <DocP>
                Integrating TypeScript into React architectures provides compile-time safety, self-documenting prop boundaries, robust autocomplete systems, and runtime stability by eliminating common data type mismatch errors.
            </DocP>

            <DocH2>Type Architecture Core Principles</DocH2>
            <DocList
                items={[
                    'Functional Components (React.FC vs Implicit): Defining component shapes using explicit prop interface shapes. While React.FC provides auto-typing for return blocks, implicit typing using standard parameters (props: ComponentProps) is preferred for flexible generic handling.',
                    'Interfaces vs Type Aliases: Interfaces are open structures designed for inheritance via declaration merging, making them excellent for component libraries. Type Aliases are fixed maps suited for primitive combinations, unions, and complex intersection mappings.',
                    'Generics (Generic Components): Reusable software models that accept dynamic data types as parameters. This allows a single utility layout block (like a dropdown or data grid) to enforce strict safety constraints regardless of the incoming record structure.',
                    'Typed Hooks & State: Inferred typing covers standard values automatically, but complex states or initial null containers require explicit generic bounds (e.g., useState<User | null>(null)). Hooks like useRef need explicit HTML targets for DOM binding element constraints.',
                    'Strongly Typed Context: Context objects require clear shape contracts. Because contexts are initialized with default configurations before real provider data loads, handling the union between the interface block and undefined guarantees safe initialization checks.'
                ]}
            />

            <DocH2>Enterprise TypeScript Component Architecture</DocH2>
            <DocP>
                Below is an advanced implementation file illustrating how to build a type-safe context provider, manage strongly typed state hooks, and compile an ultra-reusable Generic List component interface:
            </DocP>

            <DocH3>1. Safe Context & Custom Hooks Layer (ThemeContext.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Explicitly outline state properties and payload configurations
interface ThemeState {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create the context layer with an explicit undefined union variant
const ThemeContext = createContext<ThemeState | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 2. Enforce strict type validation within a custom hook wrapper
export function useAppTheme(): ThemeState {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be executed strictly within an active <ThemeProvider />.');
  }
  return context;
}`}
            />

            <DocH3>2. Highly Reusable Generic List Component (GenericDataList.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

// Define constraints requiring every incoming data object to contain an identifying 'id' string
interface IdentifiableItem {
  id: string | number;
}

// Bind a generic type parameter <T> that extends our base structural signature
interface GenericListProps<T extends IdentifiableItem> {
  items: T[];
  title: string;
  renderRow: (item: T) => React.ReactNode;
}

export function GenericDataList<T extends IdentifiableItem>({ 
  items, 
  title, 
  renderRow 
}: GenericListProps<T>) {
  return (
    <div className="generic-list-container border rounded p-4 bg-white mt-4">
      <h4 className="text-md font-bold text-gray-800 mb-2">{title}</h4>
      <ul className="divide-y divide-gray-100">
        {items.map((item) => (
          <li key={item.id} className="py-2">
            {renderRow(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
            />

            <DocH3>3. Orchestration & Composition Space (DashboardView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useRef } from 'react';
import { ThemeProvider, useAppTheme } from './ThemeContext';
import { GenericDataList } from './GenericDataList';

// Concrete data interface for system metrics
interface SystemLog {
  id: string;
  service: string;
  latencyMs: number;
}

function TechnicalMetricsPanel() {
  const { mode, toggleTheme } = useAppTheme();
  const inputRef = useRef<HTMLInputElement>(null); // Strict HTML target reference typing
  
  // Strongly typed state holding our system log payload shapes
  const [logs] = useState<SystemLog[]>([
    { id: 'log-101', service: 'Auth Gateway', latencyMs: 45 },
    { id: 'log-102', service: 'MongoDB Router Pipeline', latencyMs: 120 }
  ]);

  const focusSearchField = () => {
    inputRef.current?.focus(); // Type safety checks prevent null pointer runtime crashes
  };

  return (
    <div className={\`p-6 rounded-lg \${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}\`}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Diagnostics Core</h3>
        <button onClick={toggleTheme} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
          Toggle Visual Aspect Mode
        </button>
      </div>

      <div className="mt-4 flex gap-2">
        <input ref={inputRef} type="text" placeholder="Filter log entries..." className="border p-1 text-black text-sm rounded" />
        <button onClick={focusSearchField} className="text-xs underline">Focus Field</button>
      </div>

      {/* Passing our custom model elements smoothly through the generic component engine */}
      <GenericDataList<SystemLog>
        title="Active Cluster Operations Latency"
        items={logs}
        renderRow={(log) => (
          <div className="flex justify-between text-xs text-gray-600">
            <span>{log.service}</span>
            <span className={log.latencyMs > 100 ? 'text-red-500 font-bold' : 'text-green-600'}>
              {log.latencyMs}ms
            </span>
          </div>
        )}
      />
    </div>
  );
}

export default function DashboardView() {
  return (
    <ThemeProvider>
      <TechnicalMetricsPanel />
    </ThemeProvider>
  );
}`}
            />
        </>
    );
}