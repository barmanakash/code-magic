import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function InterviewQuestionsDoc() {
  return (
    <>
      <DocTitle eyebrow="Career Advancement">React Interview Preparation Portal</DocTitle>
      
      <DocP>
        Mastering technical interviews requires balancing conceptual clarity with strong problem-solving skills. Below is a curated repository of foundational, core, and specialized React conceptual questions, production scenario breakdowns, and rigorous code implementations.
      </DocP>

      <DocH2>1. Conceptual Matrix by Seniority</DocH2>
      
      <DocH3>Beginner Core Fundamentals</DocH3>
      <DocList
        items={[
          'What is the difference between Virtual DOM and Real DOM? The Real DOM is the browser\'s structural tree HTML mapping. It is slow to update extensively. The Virtual DOM is a lightweight, in-memory JavaScript abstraction managed by React. Changes are batch-processed and synced using reconciliation to minimize costly browser paint operations.',
          'What are keys in React and why are they necessary? Keys are unique string identifiers assigned to list items. They give elements a stable identity across render cycles, letting React\'s diffing algorithm know exactly which elements were added, changed, or moved instead of blindly tearing down subtrees.'
        ]}
      />

      <DocH3>Intermediate Mechanics</DocH3>
      <DocList
        items={[
          'How does the useEffect dependency array determine execution paths? If no array is provided, the effect runs on every render. An empty array ([]) runs the effect once upon mounting. When populated with specific variables ([state, prop]), React evaluates shallow equality checks ($===$) against historical allocations to determine whether to skip or trigger the effect.',
          'What is the difference between Context API and state stores like Zustand/Redux? The Context API is a dependency injection tool designed to avoid prop-drilling; it triggers a full re-render down its entire component tree whenever its value changes unless heavily optimized. State stores like Zustand create external mutable states that bypass component sub-trees, using selective subscriber selectors to only re-render the exact elements that consume altered values.'
        ]}
      />

      <DocH3>Advanced Internals</DocH3>
      <DocList
        items={[
          'Explain the rendering phases under React Fiber Architecture. Fiber processes work in two main phases: 1) The Render/Reconciliation Phase, which runs asynchronously. React builds a work-in-progress fiber tree, computing changes in small chunks that can be paused or dropped if higher-priority events occur. 2) The Commit Phase, which runs synchronously. React applies the computed mutations to the physical browser DOM in a single, un-interruptible pass.',
          'How do React Server Components (RSC) fundamentally differ from SSR? Traditional Server-Side Rendering (SSR) compiles a React component tree into a raw HTML string on the server, sending it to the client where the entire tree must load and execute JavaScript event handlers during hydration. Server Components execute exclusively on the server and stream a serialized, JSON-like wire format to the client, fetching data with zero client-side bundle size and no hydration step.'
        ]}
      />

      <DocH2>2. Practical Coding Challenge</DocH2>
      <DocP>
        <strong>Question:</strong> Implement a robust custom hook named <code>useDebounce</code> that delays updating a state value until a specific timeout threshold has passed, ensuring proper cleanup of scheduled tasks.
      </DocP>

      <CodeBlock
        language="tsx"
        code={`import { useState, useEffect } from 'react';

// Highly reusable generic value debouncing hook
export function useDebounce<T>(incomingValue: T, delayMs: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(incomingValue);

  useEffect(() => {
    // Schedule an asynchronous state update window
    const trackingTimer = setTimeout(() => {
      setDebouncedValue(incomingValue);
    }, delayMs);

    // CRITICAL CLEANUP: Clear timeout tasks instantly if values shift before the threshold ends
    return () => {
      clearTimeout(trackingTimer);
    };
  }, [incomingValue, delayMs]);

  return debouncedValue;
}`}
      />

      <DocH2>3. Architectural Scenario Breakdowns</DocH2>

      <DocH3>Scenario: Resolving Uncontrolled Multi-Row Render Bottlenecks</DocH3>
      <blockquote>
        <strong>Problem:</strong> A real-time monitoring screen displays over 500 rows of system metrics. Every time a single metric updates via a WebSocket connection, the entire user interface lags, dropping frames during interactions.
      </blockquote>
      <p className="text-sm text-gray-700 mb-4">
        <strong>Strategic Solution:</strong>
      </p>
      <DocList
        items={[
          'Isolate State Boundaries: Avoid lifting the WebSocket data stream up into a single parent dashboard wrapper. Instead, route updates straight into isolated state buckets or centralized stores like Zustand so only the affected row component re-renders.',
          'Enforce Memoization Contracts: Wrap individual row components in React.memo, paired with steady useCallback callback handlers, to prevent parent updates from triggering unnecessary sibling changes.',
          'Implement Virtualization: Integrate windowing libraries like react-window or react-virtualized to only render the rows currently visible inside the user\'s viewport container, dropping off-screen DOM nodes completely.'
        ]}
      />

      <DocH3>Scenario: Managing Global Layout Crashes across Interdependent Blocks</DocH3>
      <blockquote>
        <strong>Problem:</strong> A third-party analytics visualization module periodically fails when parsing nested metrics metadata, completely breaking the surrounding layout and showing users a blank white screen.
      </blockquote>
      <p className="text-sm text-gray-700 mb-4">
        <strong>Strategic Solution:</strong>
      </p>
      <DocList
        items={[
          'Deploy Error Boundaries: Wrap the unstable analytics component in a dedicated class-based Error Boundary to catch runtime layout crashes before they bubble up and break the entire application.',
          'Graceful Degradation Fallbacks: Configure the boundary\'s componentDidCatch hook to display a helpful fallback container, allowing users to keep using the rest of the application uninterrupted.'
        ]}
      />
    </>
  );
}