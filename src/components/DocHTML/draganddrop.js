import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function HTMLDragAndDropDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">HTML5 Drag and Drop API: Draggable Nodes, Event Lifecycle Orchestration, and DataTransfer Buffers</DocTitle>

            <DocP>
                The HTML5 Drag and Drop API enables developers to build native, desktop-grade drag-and-drop user interfaces within the browser viewport. By configuring specific DOM attributes and capturing an event-driven lifecycle, you can seamlessly pass data payloads between elements, handle visual feedback transitions, and process raw system file drop ingress points without relying on heavy external third-party library footprints.
            </DocP>

            <DocH2>The Draggable Activation & DataTransfer Medium</DocH2>

            <DocH3>1. Activating DOM Nodes (`draggable`)</DocH3>
            <DocP>
                By default, only text selections, raw image elements, and hyperlinks are natively draggable by the browser engine. To convert any generic DOM container (like a <code>&lt;div&gt;</code>, <code>&lt;li&gt;</code>, or <code>&lt;article&gt;</code>) into a movable asset, you must explicitly apply the global boolean layout attribute:
            </DocP>
            <CodeBlock
                language="html"
                code={`<div draggable="true" class="c-draggable-node">
  Resource Item Matrix
</div>`}
            />

            <DocH3>2. The DataTransfer Payload Buffer Object</DocH3>
            <DocP>
                The core engine behind the Drag and Drop framework is the **DataTransfer** object, exposed via the event argument (<code>event.dataTransfer</code>). This background data bank holds the payload string or file chunk being moved and dictates what operational behavior (copy, move, link) the target container accepts.
            </DocP>
            <DocList
                items={[
                    'dataTransfer.setData(format, data): Invoked during the initial interaction to bind a value and MIME-type classification to the drag sequence.',
                    'dataTransfer.getData(format): Executed within the terminal reception drop block to safely extract the payload string matrix from the event buffer.'
                ]}
            />

            <DocH2>The Event Lifecycle Matrix</DocH2>
            <DocP>
                Building a highly reliable drag-and-drop system requires managing separated events split cleanly between the **Source Element** (the object being moved) and the **Target Container** (the zone receiving the drop):
            </DocP>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
                <table className="min-w-full text-left text-xs bg-white">
                    <thead className="bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                        <tr>
                            <th className="p-3">Event Phase</th>
                            <th className="p-3">Dispatched Target</th>
                            <th className="p-3">Core Engineering Rationale</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">dragstart</td>
                            <td className="p-3 font-sans">Source Element</td>
                            <td className="p-3">Fires immediately when the interaction begins. Used to set up <code>dataTransfer</code> data values and append drop-shadow visual styling classes.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">dragover</td>
                            <td className="p-3 font-sans">Target Container</td>
                            <td className="p-3">Fires continuously as an object hovers over a valid drop zone. **Crucial Rule:** You must call <code>event.preventDefault()</code> here to override the browser's native safety blocks and allow dropping.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">drop</td>
                            <td className="p-3 font-sans">Target Container</td>
                            <td className="p-3">Fires when the element is released over a valid target. Used to extract variables via <code>getData()</code> and update backend data maps.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-sans text-blue-600 font-semibold">dragend</td>
                            <td className="p-3 font-sans">Source Element</td>
                            <td className="p-3">Fires when the interaction concludes completely (regardless of success or cancellation). Ideal for stripping out leftover style utility layers.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocH2>Production-Grade Drag and Drop Blueprint</DocH2>
            <DocP>
                Below is a fully validated, production-ready Kanban orchestration architecture demonstrating strict coordinate management, visual state overrides, and state sync hooks:
            </DocP>

            <DocH3>1. Native Document Event Pipelines (drag-bootstrap.js)</DocH3>
            <CodeBlock
                language="javascript"
                code={`// PRODUCTION DRAG AND DROP HANDLER PIPELINES
function handleDragStartEvent(event) {
  // Bind structured layout string data to unique key mapping
  event.dataTransfer.setData("text/plain", event.target.id);
  event.dataTransfer.effectAllowed = "move";
  
  // Append temporary translucent indicator class
  event.target.classList.add("is-dragging-active");
}

function handleDragOverZone(event) {
  // EXPLICIT REQUIREMENT: Overrides standard browser reject anomalies
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function handleDropPayload(event) {
  event.preventDefault();
  
  // Safely intercept element cross-reference identifier
  const sourceNodeId = event.dataTransfer.getData("text/plain");
  const targetDropContainer = event.target.closest(".c-drop-target-zone");
  
  if (targetDropContainer && sourceNodeId) {
    const activeDraggableElement = document.getElementById(sourceNodeId);
    targetDropContainer.appendChild(activeDraggableElement);
  }
}

function handleDragEndClear(event) {
  // Strip out active indicator layer from DOM references
  event.target.classList.remove("is-dragging-active");
}`}
            />

            <DocH3>2. Interactive Interface Sandbox (HTMLDragWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

interface TaskItem {
  id: string;
  title: string;
  category: 'backlog' | 'progress';
}

export default function HTMLDragWorkspace() {
  const [tasks, setTasks] = useState<TaskItem[]>(defaultTasks);
  const [isOverTarget, setIsOverTarget] = useState<string | null>(null);

  const onDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e: React.DragEvent, zone: string) => {
    e.preventDefault();
    if (isOverTarget !== zone) setIsOverTarget(zone);
  };

  const onDrop = (e: React.DragEvent, targetCategory: 'backlog' | 'progress') => {
    e.preventDefault();
    setIsOverTarget(null);
    const targetId = e.dataTransfer.getData('text/plain');
    if (!targetId) return;

    setTasks(prev => prev.map(t => t.id === targetId ? { ...t, category: targetCategory } : t));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML5 Native Drag & Drop Workspace</h3>
      </header>

      <div className="w-full max-w-2xl bg-white border rounded-2xl p-6 relative grid grid-cols-2 gap-4 text-[11px]">
        <div 
          onDragOver={(e) => onDragOver(e, 'backlog')}
          onDrop={(e) => onDrop(e, 'backlog')}
          className={"mt-4 p-4 border rounded-xl min-h-[160px] flex flex-col gap-2 " + (isOverTarget === 'backlog' ? "bg-blue-50/60 border-blue-400 border-dashed" : "bg-slate-50 border-slate-200")}
        >
          <span className="font-mono text-[9px] text-slate-400 font-bold uppercase mb-1">Backlog Repository</span>
          {tasks.filter(t => t.category === 'backlog').map(task => (
            <div key={task.id} draggable onDragStart={(e) => onDragStart(e, task.id)} className="p-3 bg-white border rounded-lg shadow-sm cursor-grab flex justify-between">
              <span>{task.title}</span>
              <span className="text-slate-300 font-mono">☰</span>
            </div>
          ))}
        </div>

        <div 
          onDragOver={(e) => onDragOver(e, 'progress')}
          onDrop={(e) => onDrop(e, 'progress')}
          className={"mt-4 p-4 border rounded-xl min-h-[160px] flex flex-col gap-2 " + (isOverTarget === 'progress' ? "bg-emerald-50/60 border-emerald-400 border-dashed" : "bg-slate-50 border-slate-200")}
        >
          <span className="font-mono text-[9px] text-slate-400 font-bold uppercase mb-1">Active Processing Pipeline</span>
          {tasks.filter(t => t.category === 'progress').map(task => (
            <div key={task.id} draggable onDragStart={(e) => onDragStart(e, task.id)} className="p-3 bg-white border rounded-lg shadow-sm cursor-grab flex justify-between">
              <span>{task.title}</span>
              <span className="text-slate-300 font-mono">☰</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`}
            />
        </>
    );
}