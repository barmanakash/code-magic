import React, { useState, useEffect } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function EffectsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Concepts">Effects (useEffect)</DocTitle>

            <DocP>
                The <code>useEffect</code> hook let you synchronize a component with an external system or perform side effects, such as data fetching, manual DOM alterations, or setting up subscriptions.
            </DocP>

            <DocH2>Key Concepts of Side Effects</DocH2>
            <DocList
                items={[
                    'Dependencies Array: The second argument of useEffect. It controls when the effect executes. If omitted, the effect runs on every render; if empty ([]), it runs only on mount; if populated ([prop, state]), it runs only when those specific values change.',
                    'Cleanup Function: A function returned from inside the effect. React executes this cleanup function right before the component unmounts, and also before running the effect again on subsequent updates, to clear memory leaks, timers, or subscriptions.',
                    'Infinite Loops: A common hazard when an effect modifies a state variable that is also included in the dependency array. Since state changes trigger a re-render, the effect runs again, updates state, and loops infinitely.',
                    'Fetch API Integration: Incorporating network requests inside components. It requires managing loading states, error catching, and mounting flags to ensure asynchronous results map correctly to the active view.'
                ]}
            />

            <DocH2>Safe Data Fetching Architecture</DocH2>
            <DocP>
                Below is the standard, secure boilerplate pattern for fetching remote data while integrating error handling, loading flags, and a cleanup boolean to avoid state updates on unmounted component instances:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React, { useState, useEffect } from 'react';

export default function DataFetcher({ endpointId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Flag to prevent state updates if component unmounts before request finishes
    let isMounted = true;
    setLoading(true);

    fetch(\`https://api.example.com/data/\${endpointId}\`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to retrieve server data');
        return res.json();
      })
      .then((result) => {
        if (isMounted) {
          setData(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    // Cleanup function executes when endpointId alters or component leaves screen
    return () => {
      isMounted = false;
    };
  }, [endpointId]); // Secure dependency array tracks changes safely

  if (loading) return <p>Loading external resources...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Fetched Data Result</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}