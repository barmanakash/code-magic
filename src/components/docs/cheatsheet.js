import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function ReactCheatSheetsDoc() {
    return (
        <>
            <DocTitle eyebrow="Reference Guides">The Ultimate React Developer Cheat Sheet</DocTitle>

            <DocP>
                A high-density reference sheet mapping out core APIs, syntaxes, layout integrations, and event handling matrices within modern React engineering systems.
            </DocP>

            <DocH2>Quick Syntax & Concept Matrix</DocH2>

            <DocH3>1. Core Hooks Quick Reference</DocH3>
            <DocList
                items={[
                    'useState: Initializes reactive local properties. Ex: const [state, setState] = useState(initialValue);',
                    'useEffect: Orchestrates background side effects (data fetching, DOM alterations). Requires a clean dependency check layer to prevent memory leak cascades.',
                    'useContext: Subscribes smoothly to parent Context values, eliminating multi-layered component prop-drilling configurations.',
                    'useRef: Preserves mutable data values across rendering passes without triggering layout re-renders. Directly binds browser DOM node references.',
                    'useMemo: Computes and caches expensive calculations. re-evaluates strictly when tracked reference properties mutate.',
                    'useCallback: Memoizes explicit callback function memory instances to preserve stability across render passes.'
                ]}
            />

            <DocH3>2. JSX, Events & CSS Blueprint Rules</DocH3>
            <DocList
                items={[
                    'JSX Directives: JavaScript syntax extensions. Attributes use standard camelCase naming conventions (className, htmlFor, tabIndex). Expressions are enclosed entirely in brackets {}.',
                    'Synthetic Event Engine: React wraps native browser events in cross-browser SyntheticEvent objects (onChange, onSubmit, onClick) to normalize event behavior across different browsers.',
                    'CSS Architecture Variants: Styles can be injected via inline JavaScript object mappings, imported modular styling sheets (*.module.css) to prevent global namespace collisions, or atomic utility frames.'
                ]}
            />

            <DocH2>Consolidated Code Execution Cheat Sheet</DocH2>
            <DocP>
                Below is a multi-purpose code sheet illustrating how state management, event handling, routing hooks, and dynamic style interpolation tie together in a clean implementation template:
            </DocP>

            <DocH3>1. Unified Syntax Cheat Sheet Element (CheatSheetSandbox.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect, useRef, useMemo } from 'react';

interface EntryLog {
  id: number;
  label: string;
}

export default function CheatSheetSandbox() {
  // --- A. STATE & DATA INITIALIZATION ---
  const [items, setItems] = useState<EntryLog[]>([
    { id: 1, label: 'Initialize Terminal' },
    { id: 2, label: 'Authenticate Cluster' }
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);
  
  // --- B. DOM REFERENCES ---
  const inputRef = useRef<HTMLInputElement>(null);

  // --- C. PERFORMANCE MEMOIZATION ---
  const totalItemCount = useMemo(() => {
    return items.length;
  }, [items]);

  // --- D. LIFECYCLE SIDE EFFECTS ---
  useEffect(() => {
    // Focus the target input reference element immediately when the layout mounts
    inputRef.current?.focus();
  }, []);

  // --- E. SYNTHETIC EVENT HANDLERS ---
  const handleItemAddition = (event: React.FormEvent) => {
    event.preventDefault(); // Intercept and block default browser page reloads
    if (!inputText.trim()) return;

    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), label: inputText.trim() }
    ]);
    setInputText('');
  };

  const handleKeyboardTrigger = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setInputText('');
      inputRef.current?.blur(); // Drop focus indicator programmatically
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      <header className="border-b pb-3 mb-4">
        <h3 className="text-lg font-bold text-gray-900">React Core Cheat Sheet</h3>
        <p className="text-xs text-gray-500">
          Computed Metrics Stack: <strong>{totalItemCount} Active Records</strong>
        </p>
      </header>

      {/* --- F. DYNAMIC STYLE INTERPOLATION --- */}
      <div 
        style={{
          padding: '12px',
          borderRadius: '6px',
          transition: 'all 0.2s ease',
          backgroundColor: isAlertActive ? '#fef2f2' : '#f8fafc',
          border: isAlertActive ? '1px solid #fca5a5' : '1px solid #e2e8f0'
        }}
        className="mb-4 text-xs text-gray-700"
      >
        <p className="font-semibold">Interactive UI Dynamic Styling Block</p>
        <button 
          type="button"
          onClick={() => setIsAlertActive((prev) => !prev)}
          className="mt-2 px-2 py-1 bg-gray-200 rounded text-gray-800 hover:bg-gray-300"
        >
          Toggle Warning Style Matrix
        </button>
      </div>

      {/* --- G. FORM & EVENT MANAGEMENT --- */}
      <form onSubmit={handleItemAddition} className="space-y-3">
        <div>
          <label htmlFor="log-input" className="block text-xs font-semibold text-gray-700 mb-1">
            New Payload Label
          </label>
          <input
            id="log-input"
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyboardTrigger}
            placeholder="Type content (Press Esc to clear)..."
            className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-1.5 bg-blue-600 text-white rounded text-xs font-bold hover:bg-blue-700"
        >
          Append Log Entry
        </button>
      </form>

      {/* --- H. DECLARATIVE LIST ITERATION --- */}
      <ul className="mt-4 space-y-1.5 border-t pt-3">
        {items.map((item) => (
          <li 
            key={item.id} // Enforce stable identifier tracking
            className="text-xs bg-gray-50 p-2 rounded text-gray-600 flex justify-between items-center"
          >
            <span>{item.label}</span>
            <code className="text-[10px] text-gray-400">ID: {item.id}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
            />
        </>
    );
}