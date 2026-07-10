import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function LifecycleDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Concepts">Component Lifecycle</DocTitle>

            <DocP>
                Every React component goes through a three-phase lifecycle: Mounting, Updating, and Unmounting. In class components, these phases are handled by explicit methods, while modern functional components use Hooks to synchronize side effects based on changing data.
            </DocP>

            <DocH2>The Three Lifecycle Phases</DocH2>
            <DocList
                items={[
                    'Mounting: The initial phase when a component instance is created, initialized, and inserted into the browser\'s DOM for the very first time.',
                    'Updating: The active phase when a component is re-rendered due to a change in its internal state, external props, or a forceUpdate call.',
                    'Unmounting: The final phase when a component is completely removed from the DOM layout tree and destroyed, signaling the end of its timeline.'
                ]}
            />

            <DocH2>Hook Equivalents (useEffect)</DocH2>
            <DocP>
                Modern functional components use the <code>useEffect</code> hook to tie side-effect logic to these specific architectural phases by modifying its dependency array:
            </DocP>
            <DocList
                items={[
                    'ComponentDidMount (Mount Only): Executed by passing an empty dependency array []. The effect runs exactly once when the component initially mounts to the layout.',
                    'ComponentDidUpdate (Updates): Executed when dependencies are specified in the array (e.g., [props.userId, state.value]). The hook fires on mount and subsequently every time those specific variables change.',
                    'ComponentWillUnmount (Cleanup): Handled by returning a cleanup function from inside your useEffect handler. React invokes this cleanup function immediately before the component leaves the screen to avoid leaks.'
                ]}
            />

            <DocH2>Unified Implementation Structure</DocH2>
            <DocP>
                Below is a clean, practical boilerplate demonstrating how to intercept all three lifecycle events inside a modern functional component:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React, { useState, useEffect } from 'react';

export default function LifecycleTracker({ userId }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Mounting Phase
    console.log('Component has mounted to the DOM');

    // Example: Establishing a real-time tracking socket or event listener
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // 2. Unmounting Phase (Cleanup Function)
    return () => {
      console.log('Component is about to unmount and be destroyed');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array limits execution to mount and unmount cycles

  useEffect(() => {
    // 3. Updating Phase
    if (userId) {
      console.log(\`Component updated! Triggered by dependency change. Current userId: \${userId}\`);
    }
  }, [userId]); // Fires whenever the 'userId' prop modifies reference

  return (
    <div>
      <h3>Lifecycle Monitor</h3>
      <p>Active User ID: {userId}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Local Renders: {count}
      </button>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}