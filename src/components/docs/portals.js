import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import { createPortal } from 'react-dom';

export default function PortalsDoc() {
    return (
        <>
            <DocTitle eyebrow="Advanced Layout">Portals (createPortal)</DocTitle>

            <DocP>
                Portals provide a first-class way to render child elements into a DOM node that exists entirely outside the structural DOM hierarchy of the parent component. This allows you to break out of CSS layout constraints like overflows and z-index nesting.
            </DocP>

            <DocH2>Core Architecture & Concepts</DocH2>
            <DocList
                items={[
                    'createPortal Method: The built-in global function imported from "react-dom". It takes two arguments: any renderable React child element (like JSX or another component) and a specific target DOM container element.',
                    'Visual vs. Logical Tree: Even though a portal element is broken out of its visual layout DOM tree to render elsewhere (e.g., appended directly onto document.body), it still behaves like a normal child inside React\'s logical virtual tree. It retains full access to React Context and props.',
                    'Event Bubbling: Events triggered from inside a portal node bubble up straight through the React logical tree architecture to parent components, regardless of where that portal content is physically placed in the actual browser DOM layout.'
                ]}
            />

            <DocH2>Production Portal Implementation Pattern</DocH2>
            <DocP>
                Below is a complete, clean structural file implementation showcasing how to build a flexible overlay Modal system that attaches itself directly onto the root body node:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// 1. Scalable Reusable Modal Portal Component
function FloatingModalOverlay({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Render the modal elements directly into the browser body layout root node
  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: '#fff',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        minWidth: '300px'
      }}>
        <div>{children}</div>
        <button 
          onClick={onClose}
          style={{ marginTop: '16px', padding: '6px 12px', cursor: 'pointer' }}
        >
          Close View Overlay
        </button>
      </div>
    </div>,
    document.body // Target DOM container node
  );
}

// 2. Control View Core Module
export default function SettingsDashboard() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div style={{ 
      padding: '20px', 
      overflow: 'hidden', 
      position: 'relative',
      border: '1px solid #ddd' 
    }}>
      <h4>System Settings Dashboard</h4>
      <p>
        This container block has overflow hidden rules active. Using standard element components 
        can crop tooltips or popups. Portals safely override this issue completely.
      </p>

      <button onClick={() => setModalActive(true)}>
        Trigger Isolated Portal Window
      </button>

      {/* FloatingModalOverlay components map outside the dashboard container element */}
      <FloatingModalOverlay isOpen={modalActive} onClose={() => setModalActive(false)}>
        <h5>Isolated Root Layer Notification</h5>
        <p>This dynamic modal interface block is currently rendering directly as an asset attached to document.body!</p>
      </FloatingModalOverlay>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}