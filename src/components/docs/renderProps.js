import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function RenderPropsDoc() {
    return (
        <>
            <DocTitle eyebrow="Advanced Patterns">Render Props</DocTitle>

            <DocP>
                The term "render prop" refers to a powerful React design pattern where a component receives a function as a prop and calls this function to handle its visual rendering layout instead of implementing its own fixed JSX markup.
            </DocP>

            <DocH2>Core Structural Concepts</DocH2>
            <DocList
                items={[
                    'Dynamic UI Composition: Component tracking logic (such as checking mouse positions, scroll steps, or network statuses) is completely isolated from visual representations. The container handles raw logic state calculations, then delegates rendering permissions to the child function.',
                    'The Render Callback Function: Instead of accepting standard component tree children, the element expects a function signature prop. This function typically accepts state parameters and maps them directly into custom external JSX layouts.',
                    'Alternative to HOCs and Hooks: Before React Hooks emerged, render props were the standard pattern used to solve structural code reuse issues, avoiding the global naming collision vulnerabilities and nested wrapper complications introduced by traditional Higher-Order Components.'
                ]}
            />

            <DocH2>Production Render Props Implementation Pattern</DocH2>
            <DocP>
                Below is a clean, practical architectural file setup illustrating how to build a dynamic input state controller component using a render prop structure, then safely consumer it inside separate views:
            </DocP>

            <DocH3>1. Building the Logic Provider Component</DocH3>
            <pre>
                <code className="language-jsx">
                    {`import React, { useState } from 'react';

// This component encapsulates input state calculations completely
export function InputTrackerProvider({ render }) {
  const [inputValue, setInputValue] = useState('');

  const handleFieldChange = (event) => {
    setInputValue(event.target.value);
  };

  // Execute the passed "render" function prop, forwarding state and events cleanly
  return (
    <div className="provider-state-wrapper">
      {render({
        value: inputValue,
        characterCount: inputValue.length,
        handleChange: handleFieldChange
      })}
    </div>
  );
}`}
                </code>
            </pre>

            <DocH3>2. Consuming Shared Logic Across Distinct Visual Views</DocH3>
            <pre>
                <code className="language-jsx">
                    {`import React from 'react';
import { InputTrackerProvider } from './InputTrackerProvider';

export default function RenderPropsDashboard() {
  return (
    <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
      <h3>Form Input Optimization Space</h3>
      
      {/* Target Application View 1: Standard Form Field Sync */}
      <InputTrackerProvider 
        render={({ value, handleChange }) => (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block' }}>Search Console Endpoint:</label>
            <input 
              type="text" 
              value={value} 
              onChange={handleChange} 
              placeholder="Query structural endpoints..." 
              style={{ border: '1px solid #94a3b8', padding: '6px' }}
            />
          </div>
        )} 
      />

      {/* Target Application View 2: High Visibility Character Counter HUD */}
      <InputTrackerProvider 
        render={({ value, characterCount, handleChange }) => (
          <div style={{ padding: '12px', background: '#f1f5f9', borderRadius: '6px' }}>
            <label style={{ display: 'block' }}>Secure Password String Input:</label>
            <input 
              type="password" 
              value={value} 
              onChange={handleChange} 
              style={{ border: '1px solid #ef4444', padding: '6px' }}
            />
            <span style={{ marginLeft: '12px', color: characterCount > 8 ? '#16a34a' : '#dc2626' }}>
              Allocated Bytes Used: <strong>{characterCount} chars</strong>
            </span>
          </div>
        )} 
      />
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}