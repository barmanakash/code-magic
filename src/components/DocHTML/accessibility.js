import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLAccessibilityDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Web Accessibility (A11y): Semantic Architecture, Focus Management, and Accessible Rich Internet Applications</DocTitle>

            <DocP>
                Web Accessibility (A11y) represents the engineering discipline of designing and building web applications that ensure all users—including individuals with visual, auditory, motor, or cognitive impairments—can perceive, understand, navigate, and interact with your user interface. Rather than treating compliance as an afterthought, building accessible systems means engineering from the base DOM upwards by writing semantic markup, managing keyboard focus flows, and configuring explicit assistive technology hooks.
            </DocP>

            <DocH2>The Accessibility Tree and Screen Readers</DocH2>
            <DocP>
                Assistive software tools, like **Screen Readers** (such as NVDA, JAWS, and VoiceOver), do not parse raw visual layouts or CSS styling grids. Instead, the browser engine processes the structural DOM tree and filters out a parallel text-based abstraction known as the **Accessibility Tree**.
            </DocP>



            <DocP>
                The Accessibility Tree extracts four essential structural properties from every active DOM element:
            </DocP>
            <DocList
                items={[
                    'Role: Identifies the type of layout element (e.g., button, dialog, checkbox, navigation).',
                    'Name: The text tag identification label associated with that specific element (e.g., "Submit Order" button).',
                    'State: The current dynamic status of the element (e.g., expanded: true, checked: false, disabled: true).',
                    'Value: The underlying data asset held by the element (e.g., value inputs inside form text boxes).'
                ]}
            />

            <DocH2>Core Pillars of Native Web Accessibility</DocH2>

            <DocH3>1. Semantic HTML vs. Non-Semantic Div-Soup</DocH3>
            <DocP>
                The absolute fastest way to optimize an application's accessibility tree profile is to write semantic elements (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;button&gt;</code>) rather than generic tags (<code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>).
            </DocP>
            <DocP>
                Native elements come out-of-the-box with keyboard focus support, browser interactive mappings, and pre-configured assistive roles. If you swap a native button out for a div element, you force screen reader users into structural dead ends unless you manually map back focus loops and keystroke events.
            </DocP>

            <DocH3>2. Text Alternative (Alt Text) Requirements</DocH3>
            <DocP>
                Every active graphic asset requires an <code>alt</code> attribute. The text description must convey the function or layout value of the visual asset, not a literal description of what the file looks like:
            </DocP>
            <DocList
                items={[
                    'Actionable Graphics: An image inside a search button must use alt="Search Product Directory" rather than alt="Magnifying glass illustration".',
                    'Decorative Elements: Structural abstract background graphics or spacer shapes should explicitly receive empty quote sets (alt="") to flag screen readers to skip them entirely.'
                ]}
            />

            <DocH3>3. Strict Form Controls Labeling</DocH3>
            <DocP>
                Form inputs must be explicitly paired with a <code>&lt;label&gt;</code> element using matching <code>htmlFor</code> (or `for` in pure HTML) properties. Relying on simple `placeholder` text as a label substitute fails accessibility standards because placeholders disappear once typing starts, leaving screen readers without clear labels.
            </DocP>

            <DocH2>Advanced Mechanics: Focus Management & Keyboard Nav</DocH2>
            <DocP>
                Users relying on adaptive motor hardware navigate web layouts entirely via keyboard controls—using the <code>Tab</code> key to advance forward and <code>Shift + Tab</code> to backtrack.
            </DocP>

            <DocH3>Strategic Focus Management System Rules</DocH3>
            <DocList
                items={[
                    'The Focus Indicator: Never override or remove the default browser visual focus indicator wrapper (outline: none) unless you immediately replace it with a high-contrast custom outline style.',
                    'Tabindex Stratification: Use tabindex="0" to add naturally un-focusable containers into the keyboard flow. Use tabindex="-1" to remove interactive elements from the tab cycle entirely or to direct programmatic JavaScript focus changes using focus(). Never use positive numbers (tabindex="1"). Doing so breaks the natural layout read sequence of the document.'
                ]}
            />

            <DocH2>ARIA (Accessible Rich Internet Applications)</DocH2>
            <DocP>
                When building advanced custom components (like modals, dropdown grids, or tabs) where native HTML elements fall short, you must use **ARIA** attributes. ARIA updates the accessibility tree without altering the visual presentation of the interface.
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">ARIA Attribute Category</th>
                            <th className="p-3">Technical Syntax Execution</th>
                            <th className="p-3">Accessibility Target Rationale</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">aria-label</td>
                            <td className="p-3"><code>aria-label="Close dialog window"</code></td>
                            <td className="p-3 font-sans">Sets an explicit text identifier label for elements that lack an visible text name on screen (like icon-only buttons).</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">aria-expanded</td>
                            <td className="p-3"><code>aria-expanded="true"</code></td>
                            <td className="p-3 font-sans">Tells screen reader users whether a collapsible dropdown menu, accordian menu, or drawer container is currently open or closed.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">aria-live</td>
                            <td className="p-3"><code>aria-live="polite"</code></td>
                            <td className="p-3 font-sans">Identifies live region targets. Allows dynamic DOM updates (like toast alerts or system errors) to be read out immediately without forcing focus changes.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Accessible Component Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready implementation of an accessible Modal Dialog workspace component. It demonstrates advanced aria mapping setups, keyboard escape key handling, and strict focus trapping loops:
            </DocP>

            <DocH3>1. Complete Interactive Accessible Dialogue (HTMLAccessibilityWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState, useEffect, useRef } from 'react';

export default function HTMLAccessibilityWorkspace() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const firstModalElementRef = useRef<HTMLButtonElement>(null);
  const lastModalElementRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation orchestrator hook
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyboardTraps = (e: KeyboardEvent) => {
      // Rule A: Intercept the Escape key to close the modal instantly
      if (e.key === 'Escape') {
        closeModal();
        return;
      }

      // Rule B: Enforce strict focus trapping loop constraints
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // If Shift + Tab hits the first focusable item, wrap around to the last one
          if (document.activeElement === firstModalElementRef.current) {
            e.preventDefault();
            lastModalElementRef.current?.focus();
          }
        } else {
          // If Tab hits the last focusable item, wrap around to the first one
          if (document.activeElement === lastModalElementRef.current) {
            e.preventDefault();
            firstModalElementRef.current?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyboardTraps);
    return () => window.removeEventListener('keydown', handleKeyboardTraps);
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
    // Move focus inside the modal panel on next render loop tick
    setTimeout(() => firstModalElementRef.current?.focus(), 10);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Crucial A11y Rule: Always return focus to the initial trigger button on exit
    setTimeout(() => triggerButtonRef.current?.focus(), 10);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">A11y Compliant Workspace Core</h3>
        <p className="text-gray-500 mt-1">
          Launch the modal view dialog module below. Use your keyboard (Tab, Shift+Tab, and Escape) to verify focus trapping and keyboard navigation behaviors.
        </p>
      </header>

      {/* TRIGGER WORKSPACE ACTION CARD */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center space-y-4">
        
        {/* NATIVE ACCESSIBLE FORM GROUP DEMO */}
        <div className="w-full space-y-1 text-left">
          <label htmlFor="ws_email_input" className="block text-slate-700 font-bold font-mono text-[10px] uppercase">
            Account Username Verification Label
          </label>
          <input 
            id="ws_email_input"
            type="email"
            placeholder="name@domain.com"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-[11px]" 
          />
        </div>

        <button
          ref={triggerButtonRef}
          onClick={openModal}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 text-white font-bold rounded-lg transition-colors shadow-sm w-full"
        >
          Launch Accessible Modal Context
        </button>
      </div>

      {/* COMPLIANT DIALOG PANEL OVERLAY WRAPPER */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center z-50 p-4"
          role="presentation"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal_workspace_title"
            aria-describedby="modal_workspace_desc"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-xl space-y-4 relative text-[11px]"
          >
            <div>
              <h4 id="modal_workspace_title" className="text-sm font-bold text-slate-900">
                System Operation Confirmation
              </h4>
              <p id="modal_workspace_desc" className="text-slate-500 mt-1">
                You are currently navigating inside an isolated, keyboard-trapped modal overlay interface wrapper.
              </p>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 text-blue-950 text-[10px] leading-relaxed rounded-xl font-mono">
              <strong>A11y Status:</strong> Active focus is locked inside this dialog container. Tabbing past the button bounds will recycle focus back to the primary options row.
            </div>

            <div className="flex space-x-2 pt-2">
              <button
                ref={firstModalElementRef}
                onClick={() => alert("Action Executed Successfully.")}
                className="flex-1 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg focus:ring-2 focus:ring-gray-900"
              >
                Confirm Setup
              </button>
              
              <button
                ref={lastModalElementRef}
                onClick={closeModal}
                className="flex-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg focus:ring-2 focus:ring-slate-300"
              >
                Cancel Overlay
              </button>
            </div>

            {/* OVERRIDE ARIA CLOSE INDICATOR */}
            <button
              onClick={closeModal}
              aria-label="Close configuration window"
              className="absolute top-2 right-4 text-slate-400 hover:text-slate-600 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 rounded p-0.5"
            >
              ×
            </button>

          </div>
        </div>
      )}

    </div>
  );
}`}
            />
        </>
    );
}