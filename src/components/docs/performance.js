import React, { useState, useMemo, useCallback, lazy, Suspense } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function PerformanceDoc() {
    return (
        <>
            <DocTitle eyebrow="Optimization">Performance Optimization</DocTitle>

            <DocP>
                React applications run highly efficiently by default, but complex state changes and heavy UI re-renders can introduce frame drops. Performance optimization centers around skipping unnecessary component evaluations, splitting asset bundles, and minimizing active DOM layout stress.
            </DocP>

            <DocH2>Memoization Primitives</DocH2>
            <DocList
                items={[
                    'React.memo: A higher-order component that optimizes functional components by shallowly comparing incoming props. If props haven\'t changed, React skips rendering the component entirely and reuses the last rendered output.',
                    'useMemo: A hook that caches (memoizes) the computed result of a heavy JavaScript function execution, skipping recalculation on re-renders unless its specific dependency references shift.',
                    'useCallback: A hook that caches an entire inline callback function definition across render cycles. It ensures the function maintains a stable reference identity, preventing down-tree memoized child components from broken cache hits.'
                ]}
            />

            <DocH2>Bundle & Asset Splitting</DocH2>
            <DocList
                items={[
                    'Code Splitting: The architectural process of dividing a single heavy compiled JavaScript bundle into independent code pieces (chunks) that can be requested dynamically on-demand.',
                    'Lazy Loading: Deferring the loading and parsing of specific component files (via React.lazy()) until they are explicitly needed on screen—such as during route switches or modal activations.',
                    'Suspense: A built-in orchestration component that wraps lazy-loaded structures, providing a fallback UI (like a loading spinner or skeletal wireframe) while the background chunk streams in.'
                ]}
            />

            <DocH2>DOM Management</DocH2>
            <DocList
                items={[
                    'Virtualization (Windowing): An optimization strategy for massive lists that calculates row offsets and mounts only the exact elements currently visible within the user\'s viewport window. It keeps the real DOM lightweight and fluid, regardless of total list size.'
                ]}
            />

            <DocH2>Production Memoization Boilerplate</DocH2>
            <DocP>
                Below is a clean implementation example demonstrating how to lock down performance leaks using <code>React.memo</code>, stable references with <code>useCallback</code>, and calculation caching with <code>useMemo</code>:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React, { useState, useMemo, useCallback } from 'react';

// 1. Memoized Child Component to block unnecessary structural renders
const HeavyRowItem = React.memo(function HeavyRowItem({ record, onSelect }) {
  console.log('HeavyRowItem evaluated');
  return (
    <div className="flex justify-between p-2 border-b">
      <span>{record.name} - \${record.cost}</span>
      <button onClick={() => onSelect(record.id)} className="px-3 py-1 bg-blue-600 text-white text-xs">
        Select
      </button>
    </div>
  );
});

// 2. High Performance Parent Dashboard view
export function OptimizedDashboard({ sourceRecords }) {
  const [selectedId, setSelectedId] = useState(null);
  const [filterThreshold, setFilterThreshold] = useState(0);

  // useMemo: Eliminates re-running expensive filtration arrays unless source records or variables change
  const optimizedHighValueItems = useMemo(() => {
    console.log('Running complex data array calculations...');
    return sourceRecords.filter(item => item.cost > filterThreshold);
  }, [sourceRecords, filterThreshold]);

  // useCallback: Preserves a completely stable function reference identity across state transitions
  const handleItemSelection = useCallback((id) => {
    setSelectedId(id);
  }, []); // Empty dependencies ensures reference parity stays uniform

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3>Performance Monitored Interface</h3>
      <input 
        type="number" 
        value={filterThreshold} 
        onChange={(e) => setFilterThreshold(Number(e.target.value))} 
        className="border p-1 mb-4"
        placeholder="Filter minimum cost"
      />
      
      <p>Active ID Tracked: {selectedId}</p>

      <div className="list-container mt-2">
        {optimizedHighValueItems.map(record => (
          <HeavyRowItem 
            key={record.id} 
            record={record} 
            onSelect={handleItemSelection} 
          />
        ))}
      </div>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}