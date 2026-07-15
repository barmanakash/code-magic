import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLWithJavaScriptDoc() {
  return (
    <>
      <DocTitle eyebrow="Core Foundations">HTML Integration with JavaScript: Engine Parsing Models, Async/Defer Execution, DOM Mutations, and Event Architectures</DocTitle>
      
      <DocP>
        JavaScript transforms static HTML documents into dynamic applications. When the browser's HTML parser runs into a script, it has to decide whether to stop parsing the visual page to download and run the script immediately, or defer it to protect performance metrics like First Contentful Paint (FCP) and Time to Interactive (TTI).
      </DocP>

      <DocH2>Script Loading Models &amp; Engine Execution Pipelines</DocH2>
      <DocP>
        How you declare your script tags significantly shifts how the browser's tokenization engine processes assets over the network.
      </DocP>
      
      <DocH3>1. Standard Script (`&lt;script&gt;`)</DocH3>
      <DocP>
        The default parsing configuration completely blocks the thread. When the HTML parser hits a standard script tag, it pauses layout construction, downloads the file, runs it, and only then continues parsing the remaining HTML markup.
      </DocP>

      <DocH3>2. The `defer` Attribute (Asynchronous Download, Sequenced Execution)</DocH3>
      <DocP>
        The `defer` attribute tells the browser to download the script file in the background without blocking the HTML parser. 
      </DocP>
      <DocList
        items={[
          '<strong>Execution Timing:</strong> Defer scripts run exactly when the HTML document parsing is fully complete, but right before the <code>DOMContentLoaded</code> event fires.',
          '<strong>Order Guarantees:</strong> Multiple scripts marked with <code>defer</code> execute in the exact order they appear in the HTML source code, making this ideal for scripts that depend on each other.'
        ]}
      />

      <DocH3>3. The `async` Attribute (Asynchronous Download, Immediate Execution)</DocH3>
      <DocP>
        The `async` attribute also downloads the script file in the background without blocking the parser. However, the moment the download finishes, the browser pauses the HTML parser to execute the script immediately.
      </DocP>
      <DocList
        items={[
          '<strong>Execution Timing:</strong> Executes the fraction of a second the network download resolves, completely independent of the HTML parser\'s progress.',
          '<strong>Order Guarantees:</strong> Bypasses the source code order. Scripts execute on a "first-come, first-served" basis, which is great for independent modules like analytics trackers or advertisement scripts.'
        ]}
      />

      

      <DocH2>DOM Interaction &amp; Event Bubbling Topologies</DocH2>
      <DocP>
        Once loaded, scripts interact with the layout through the Document Object Model (DOM) and manage user actions via event propagation.
      </DocP>
      
      <DocH3>1. Document Traversal and Mutation</DocH3>
      <DocP>
        Scripts query the layout tree using modern querying target methods like <code>querySelector()</code> and <code>querySelectorAll()</code>. When updating nodes, developers use secure node text mappers like <code>textContent</code> or class listing modifiers like <code>classList</code> to avoid triggering expensive layout thrashing bugs.
      </DocP>

      <DocH3>2. Event Propagation (Capturing vs. Bubbling)</DocH3>
      <DocP>
        When an action occurs on a node, the browser propagates the event through three distinct phases:
      </DocP>
      <DocList
        items={[
          '<strong>1. Capture Phase:</strong> The event travels down from the global <code>window</code> object, through ancestor elements, straight to the target node.',
          '<strong>2. Target Phase:</strong> The event fires directly on the element where the interaction was initiated.',
          '<strong>3. Bubbling Phase:</strong> The event travels back up the DOM tree from the target node to the root. This is the default phase for standard listeners, enabling <strong>Event Delegation</strong>—attaching a single listener to a parent element to handle events from all its children.'
        ]}
      />

      <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
        <table className="min-w-full text-left text-xs bg-white">
          <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
            <tr>
              <th className="p-3">Script Paradigm</th>
              <th className="p-3">HTML Parser Impact</th>
              <th className="p-3">Execution Sequence Precedence</th>
              <th className="p-3">Primary Best Practice Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
            <tr>
              <td className="p-3 font-sans font-semibold text-blue-600">Standard &lt;script&gt;</td>
              <td className="p-3 text-red-600 font-semibold">Blocks Parsing Completely</td>
              <td className="p-3">Immediate runtime execution upon arrival.</td>
              <td className="p-3 font-sans">Critical baseline logic placed at the foot of the document body.</td>
            </tr>
            <tr>
              <td className="p-3 font-sans font-semibold text-blue-600">defer</td>
              <td className="p-3 text-emerald-600 font-semibold">Non-Blocking (Parallel Fetch)</td>
              <td className="p-3">Ordered sequence before DOMContentLoaded.</td>
              <td className="p-3 font-sans">Main application bundles, UI components, and inter-dependent modules.</td>
            </tr>
            <tr>
              <td className="p-3 font-sans font-semibold text-blue-600">async</td>
              <td className="p-3 text-emerald-600 font-semibold">Blocks parser ONLY during execution</td>
              <td className="p-3">Unordered execution as soon as downloaded.</td>
              <td className="p-3 font-sans">Independent scripts like Google Analytics, pixels, and log metrics.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocH2>Production Scripting &amp; Delegation Schematics</DocH2>
      <DocP>
        Review the structured implementation layouts below showing how to attach performant script configurations, followed by an interactive workspace that demonstrates event bubbling in action:
      </DocP>

      <DocH3>1. Performance-Optimized Document Shell (index.html)</DocH3>
      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Enterprise Processing Pipeline</title>

  <script defer src="/js/app-runtime.js"></script>
  <script defer src="/js/ui-components.js"></script>

  <script async src="https://metrics.example.com/telemetry.js"></script>
</head>
<body>

  <div id="action-matrix-board" class="dashboard-grid">
    <button data-action="initialize" class="btn-action">Run Processing</button>
    <button data-action="terminate" class="btn-action variant-danger">Halt Systems</button>
    <button data-action="export" class="btn-action variant-secondary">Download Log</button>
  </div>

</body>
</html>`}
      />

      <DocH3>2. JavaScript DOM Operations Controller Blueprint (ui-components.js)</DocH3>
      <CodeBlock
        language="javascript"
        code={`/**
 * ============================================================================
 * DOM MUTATION AND EVENT DELEGATION ENGINE ARCHITECTURE
 * ============================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  const actionContainer = document.getElementById('action-matrix-board');

  if (actionContainer) {
    // Implementing Event Delegation: Single listener handling multiple child nodes
    actionContainer.addEventListener('click', (event) => {
      // Find the closest action button element relative to the click target
      const actionTrigger = event.target.closest('.btn-action');
      
      // Guard clause ensuring click occurred inside a valid action node
      if (!actionTrigger) return;

      // Extract metadata parameter flags cleanly from data attributes
      const operationalCommand = actionTrigger.dataset.action;
      
      console.log(\`Intercepted Command Request: \${operationalCommand}\`);
      
      switch (operationalCommand) {
        case 'initialize':
          actionTrigger.classList.add('is-running');
          actionTrigger.textContent = 'Processing Operational Pipeline...';
          break;
        case 'terminate':
          actionTrigger.classList.remove('is-running');
          break;
        default:
          break;
      }
    });
  }
});`}
      />

      <DocH3>3. Event Propagation &amp; Bubbling Workspace (HTMLJSBubblingWorkspace.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React, { useState } from 'react';

export default function HTMLJSBubblingWorkspace() {
  const [propagationQueue, setPropagationQueue] = useState<string[]>([]);
  const [stopPropagationFlag, setStopPropagationFlag] = useState(false);

  const triggerEventStep = (layerName: string, event: React.MouseEvent) => {
    if (stopPropagationFlag && layerName !== 'Button Node (Target)') {
      return;
    }
    
    // Append the captured bubble layer event sequence to the array matrix logs
    setPropagationQueue(prev => [...prev, \`\${layerName} intercepted event bubble step.\`]);

    if (stopPropagationFlag && layerName === 'Button Node (Target)') {
      // Simulating stopPropagation interface boundaries explicitly
      event.stopPropagation();
      setPropagationQueue(prev => [...prev, '>> Propagation halted via event.stopPropagation() <<']);
    }
  };

  const clearPropagationStream = () => {
    setPropagationQueue([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">Event Propagation Simulation Sandbox</h3>
        <p className="text-gray-500 mt-1">
          Click the target button node below to visualize event bubbling traveling up the DOM container layers.
        </p>
      </header>

      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px]">
        
        {/* LEFT COMPONENT CONTROLS (5 Columns) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
              Propagation Engine Settings
            </span>

            <div className="flex items-center justify-between border p-3 rounded-xl bg-slate-50">
              <span className="font-semibold text-slate-700">Enforce stopPropagation()</span>
              <button
                onClick={() => setStopPropagationFlag(!stopPropagationFlag)}
                className={"px-3 py-1 rounded-md font-mono text-[9px] font-bold uppercase transition-colors " + (stopPropagationFlag ? "bg-red-100 text-red-800" : "bg-slate-200 text-slate-600")}
              >
                {stopPropagationFlag ? "Active" : "Disabled"}
              </button>
            </div>

            <button
              onClick={clearPropagationStream}
              className="w-full py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors"
            >
              Clear Traversal Log Stream
            </button>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[9px] shadow-inner mt-4">
            <span className="text-amber-400 font-bold block mb-1">// Event Traversal Trace Stream</span>
            <div className="min-h-[100px] max-h-[120px] overflow-y-auto font-mono text-emerald-400 space-y-1">
              {propagationQueue.length === 0 ? (
                <span className="text-slate-500 italic">// Awaiting DOM capture target interaction...</span>
              ) : (
                propagationQueue.map((log, index) => (
                  <div key={index} className="truncate">{log}</div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* RIGHT PIPELINE PREVIEW SCREEN (7 Columns) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase block tracking-wider mb-3">
              Interactive DOM Node Layout Tree
            </span>

            {/* Interactive Nested DOM Node Container Frame */}
            <div 
              onClick={(e) => triggerEventStep('Section Wrapper Container (Grandparent)', e)}
              className="p-6 border border-slate-300 bg-slate-100 rounded-xl min-h-[160px] flex items-center justify-center cursor-pointer hover:bg-slate-200/50 transition-colors"
            >
              <div 
                onClick={(e) => triggerEventStep('Div Content Box (Parent)', e)}
                className="w-full p-4 border border-slate-300 bg-white rounded-xl shadow-xs text-center cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <span className="text-[9px] font-mono text-slate-400 block mb-2">Div Container Panel</span>
                
                <button
                  onClick={(e) => triggerEventStep('Button Node (Target)', e)}
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 active:scale-95 transition-all focus:outline-none"
                >
                  Fire Intercept Target Event
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-[10px] leading-relaxed">
            <strong>Key Architecture Rule:</strong> Event Delegation leverages the natural bubbling process by using a single parent handler to intercept events from deep inside child elements. This cuts down on memory consumption and eliminates the need to manually attach or tear down listeners as layout elements dynamically shift.
          </div>
        </div>

      </div>

    </div>
  );
}`}
      />
    </>
  );
}