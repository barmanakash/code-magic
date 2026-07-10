import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function FAQsDoc() {
  return (
    <>
      <DocTitle eyebrow="Interview & Core Theory">Frequently Asked Questions (FAQs)</DocTitle>
      
      <DocP>
        A deep dive into the most frequently encountered architectural questions, performance dilemmas, and synchronization mechanics inside modern React engineering ecosystems.
      </DocP>

      <DocH2>Engine Fundamentals & State Management</DocH2>
      
      <DocH3>1. What exactly is the Virtual DOM, and how does it optimize rendering?</DocH3>
      <DocP>
        The Virtual DOM (VDOM) is an in-memory, lightweight JavaScript object representation of the actual browser DOM elements. Instead of manipulating the heavy, browser-native DOM nodes directly on every single state change—which triggers expensive browser layout recalculations and repaints—React works within this lightweight abstraction layer.
      </DocP>
      <DocP>
        When a component's state or props change, React constructs a brand new Virtual DOM tree. It then runs a high-efficiency diffing algorithm to compare this new tree with the previous snapshot, computing a precise list of changes required to synchronize the UI.
      </DocP>

      <DocH3>2. What is Reconciliation and how does the Diffing Algorithm work?</DocH3>
      <DocP>
        Reconciliation is the structural process through which React updates the real DOM based on changes computed in the Virtual DOM. React's diffing algorithm is built on a highly optimized heuristic approach that runs in $O(n)$ time complexity, utilizing two primary rules:
      </DocP>
      <DocList
        items={[
          'Elements of Different Types: If two elements have completely different tags (e.g., swapping a <div> for a <section>), React immediately tears down the old tree, discarding all underlying component states, and mounts a fresh layout from scratch.',
          'Elements of the Same Type: If the elements match types but have differing properties or attributes, React preserves the underlying DOM node, updating only the specific modified attributes cleanly.'
        ]}
      />

      

      <DocH3>3. When should I use Context API versus dedicated State Stores like Redux or Zustand?</DocH3>
      <DocP>
        The choice depends entirely on your data update frequency and structural scale requirements:
      </DocP>
      <DocList
        items={[
          'Context API: Designed primarily for low-frequency global dependency injection (e.g., localization settings, branding themes, user session profiles). Because Context triggers a complete re-render cascade down its nested element tree whenever its value reference changes, it is ill-suited for highly dynamic, fast-changing application states.',
          'Zustand / Redux Toolkit: Optimized specifically for high-frequency, complex state tracking (e.g., shopping carts, interactive data dashboards, live web socket feeds). These external state engines use decoupled subscriber systems, allowing individual components to pull data via optimized selectors so only the specific elements consuming changed properties re-render.'
        ]}
      />

      <DocH2>Practical Component Control Patterns</DocH2>

      <DocH3>4. What is the difference between Controlled and Uncontrolled Components?</DocH3>
      <DocP>
        This defines where the absolute ground truth source of form data lives:
      </DocP>
      <DocList
        items={[
          'Controlled Components: The element\'s data value is held completely inside React state variables and bound directly to the input via value properties. Changes are pushed back immediately via onChange event handlers, making form validation and field manipulation simple.',
          'Uncontrolled Components: The input maintains its own internal value natively within the browser DOM. React accesses these values on-demand using standard useRef references, which drastically improves rendering performance by eliminating re-renders on every single keystroke.'
        ]}
      />

      <DocH3>5. Why does React warn against using array indices as keys?</DocH3>
      <DocP>
        Keys provide list items with a persistent identity across render cycles. While using an array index removes the console warning, it breaks down if items are dynamically reordered, sorted, inserted, or deleted. 
      </DocP>
      <DocP>
        If an item at the top of a list is removed, every single downstream index changes. React's diffing algorithm will mistakenly assume those components have mutated rather than just shifted position, forcing unnecessary sub-tree re-renders and potentially causing stale inputs or broken animation states.
      </DocP>

      <DocH2>Unified Implementation: Controlled Inputs & Unique Key Mapping</DocH2>
      <DocP>
        Below is an implementation demonstrating fully **Controlled Input States**, properly isolated DOM references, and stable, safe **Unique Key Tracking**:
      </DocP>

      <DocH3>1. Interactive Input Control & List Mapping (FrameworkSandbox.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React, { useState } from 'react';

interface TaskNode {
  stableId: string; // Enforce reliable unique IDs instead of fragile array indices
  content: string;
}

export default function FrameworkSandbox() {
  // --- A. CONTROLLED COMPONENT STATE ---
  const [inputValue, setInputValue] = useState<string>('');
  const [taskList, setTaskList] = useState<TaskNode[]>([
    { stableId: 'node-sys-101', content: 'Audit system authentication flows' },
    { stableId: 'node-sys-102', content: 'Optimize Redux Toolkit store selectors' }
  ]);

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    // Append new records tracking a globally unique, invariant key parameter string
    setTaskList((prev) => [
      ...prev,
      {
        stableId: \`node-user-\${crypto.randomUUID()}\`,
        content: inputValue.trim()
      }
    ]);
    
    setInputValue(''); // Reset controlled state smoothly
  };

  const handleRecordRemoval = (targetId: string) => {
    // Because we use stable IDs, filtering out records preserves item identities perfectly
    setTaskList((prev) => prev.filter((item) => item.stableId !== targetId));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
      <header className="mb-4">
        <h4 className="text-base font-bold text-gray-900">Interactive Component Sandbox</h4>
        <p className="text-xs text-gray-500">Demonstrating Controlled State and stable layout key tracking.</p>
      </header>

      {/* Controlled Input Layout */}
      <form onSubmit={handleFormSubmission} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task item description..."
          className="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-1.5 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700"
        >
          Add Node
        </button>
      </form>

      {/* Stable Key Iteration List */}
      <ul className="space-y-2 border-t pt-3">
        {taskList.map((task) => (
          <li
            key={task.stableId} // Correct usage: stable identifier stays constant across reorders
            className="flex justify-between items-center bg-gray-50 p-2 rounded text-xs text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span>{task.content}</span>
            <button
              type="button"
              onClick={() => handleRecordRemoval(task.stableId)}
              className="text-[10px] text-red-500 hover:underline px-1.5 py-0.5 rounded border border-red-200 bg-white"
            >
              Purge
            </button>
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