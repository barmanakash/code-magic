import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function RefsDoc() {
    return (
        <>
            <DocTitle eyebrow="DOM & References">Refs (useRef & forwardRef)</DocTitle>

            <DocP>
                Refs provide a way to access imperative DOM nodes or persist mutable values across component render cycles without triggering a re-render when the stored reference value changes.
            </DocP>

            <DocH2>Core Reference Mechanisms</DocH2>
            <DocList
                items={[
                    'useRef Hook: Creates a persistent, mutable JavaScript object with a single ".current" property. It can either hold a direct pointer to a physical browser DOM node or act as an instance variable container that preserves data across state mutations without forcing a layout re-render.',
                    'Forward Ref (forwardRef): A higher-order component utility that enables functional components to intercept refs passed to them by parent layout wrappers, and pass ("forward") those references deeper down to an underlying native HTML child node.'
                ]}
            />

            <DocH2>Unified Architecture Reference Implementation</DocH2>
            <DocP>
                Below is a clean structural architecture demonstrating standard reference handling alongside deep reference forwarding to a stylized custom input layout field component:
            </DocP>

            <DocH3>1. The Custom Forwarding Input Component</DocH3>
            <pre>
                <code className="language-jsx">
                    {`import React, { forwardRef } from 'react';

// Wrap functional component with forwardRef to explicitly receive and attach external parent refs
export const CustomInput = forwardRef((props, ref) => {
  return (
    <div className="input-group-layout">
      <label>{props.label}</label>
      <input 
        ref={ref} 
        type="text" 
        className="custom-field-border" 
        placeholder={props.placeholder}
      />
    </div>
  );
});

CustomInput.displayName = 'CustomInput'; // Maintain optimal debug visibility under React DevTools`}
                </code>
            </pre>

            <DocH3>2. Parent Reference Orchestrator Component</DocH3>
            <pre>
                <code className="language-jsx">
                    {`import React, { useRef } from 'react';
import { CustomInput } from './CustomInput';

export default function FormsRefDashboard() {
  // Declare persistent reference tokens
  const targetInputRef = useRef(null);
  const internalRenderCounterRef = useRef(0);

  const executeImperativeFocus = () => {
    // Access and execute actions directly on the forwarded child native DOM node layout
    if (targetInputRef.current) {
      targetInputRef.current.focus();
      targetInputRef.current.value = "Prefilled Content String";
    }
  };

  const incrementSilentCounter = () => {
    // Mutating a ref value changes data immediately without inducing a visual UI component update cycle
    internalRenderCounterRef.current += 1;
    console.log(\`Ref mutation count total: \${internalRenderCounterRef.current}\`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h4>Form Input Focus Panel</h4>
      
      {/* Passing our reference down cleanly into our forwarding component primitive layout */}
      <CustomInput 
        ref={targetInputRef} 
        label="Username Access Token" 
        placeholder="Awaiting reference call tracking..." 
      />

      <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
        <button onClick={executeImperativeFocus}>
          Trigger Input Focus & Text Overrides
        </button>
        <button onClick={incrementSilentCounter}>
          Increment Background Count Value
        </button>
      </div>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}