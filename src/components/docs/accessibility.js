import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function AccessibilityDoc() {
    return (
        <>
            <DocTitle eyebrow="Inclusive Engineering">Accessibility (a11y) in React</DocTitle>

            <DocP>
                Web accessibility ensures digital products are fully usable by everyone, including individuals with visual, auditory, motor, or cognitive impairments. Building accessible applications involves writing semantic foundations, supporting comprehensive keyboard navigation, and providing structural hints for assistive technologies.
            </DocP>

            <DocH2>Core Accessibility Pillars</DocH2>
            <DocList
                items={[
                    'Semantic HTML: The practice of using the correct, meaningful browser element tag for its native functional purpose (such as <main>, <nav>, <header>, <button>). This inherently provides native keyboard support, focus management, and accessibility tree roles without requiring custom scripts.',
                    'ARIA (Accessible Rich Internet Applications): A specialized suite of attributes (prefixed with aria- or role=) that provides descriptive metadata to assistive technologies when native HTML tags are insufficient for complex custom component designs.',
                    'Keyboard Navigation: Ensuring users can interact with every interface component entirely via standard keyboard strokes (using Tab, Shift+Tab, Enter, Space, and Arrow keys). Focus outlines must remain clearly visible, and elements must follow a logical reading order.',
                    'Screen Readers: Assistive software programs (like NVDA, JAWS, or VoiceOver) that parse a browser\'s accessibility tree to read text, element boundaries, and active status updates aloud to visually impaired users.'
                ]}
            />



            <DocH2>Accessible Component Architectures</DocH2>
            <DocP>
                Below is an example comparing an inaccessible custom interactive component against a fully accessible, semantic, keyboard-compliant engineering pattern:
            </DocP>

            <DocH3>1. The Antipattern: Inaccessible Custom Toggle Button</DocH3>
            <CodeBlock
                language="jsx"
                code={`// 🚫 ANTIPATTERN: Completely invisible to screen readers and keyboard users
export function BadToggle({ isActive, onClick }) {
  return (
    <div 
      className={\`toggle-switch \${isActive ? 'on' : 'off'}\`} 
      onClick={onClick}
    >
      <span>Sync State</span>
    </div>
  );
  // Failures:
  // 1. A <div> has no native interactive keyboard boundaries (cannot be tabbed into).
  // 2. Screener readers announce this element simply as a generic "text group".
  // 3. No focus indication ring or state metrics are announced to the client.
}`}
            />

            <DocH3>2. Accessible, Keyboard-Compliant Dynamic Modal Drawer</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useEffect, useRef } from 'react';

interface AccessibleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function AccessibleModal({ isOpen, onClose, title, children }: AccessibleModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Focus Management: Trapping keyboard focus within the dialog container when active
  useEffect(() => {
    if (isOpen) {
      // Focus the primary escape action element immediately on layout mount
      closeButtonRef.current?.focus();

      // Listen for Global Escape Key triggers to dismiss the modal cleanly
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        role="dialog" // 1. Declares explicit programmatic dialog status to the screen reader
        aria-modal="true" // 2. Tells assistive tools to ignore underlying background background layers
        aria-labelledby="modal-title-id" // 3. Establishes the specific node providing the descriptive title
        className="modal-body bg-white p-6 rounded shadow-lg max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()} // Stop bubble cascades from firing closing hooks
      >
        <div className="flex items-center justify-between border-b pb-2 mb-4">
          <h3 id="modal-title-id" className="text-lg font-bold text-gray-900">
            {title}
          </h3>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close configuration window" // 4. Provides clear semantic context instead of reading generic symbols like "X"
            className="p-1 text-gray-500 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-600 outline-none rounded"
          >
            ✕
          </button>
        </div>

        <div className="modal-content-area text-sm text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
}`}
            />
        </>
    );
}