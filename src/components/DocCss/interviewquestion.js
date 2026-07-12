import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSInterviewPreparationDoc() {
    const [showOutputs, setShowOutputs] = useState({});

    const toggleOutput = (id) => {
        setShowOutputs(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <DocTitle eyebrow="Core Foundations">Technical Interview Engineering & Core Assessment Matrix</DocTitle>

            <DocP>
                CSS Technical Assessments test a developer's understanding of browser rendering engines, layout calculations, containment boxes, performance optimization, and defensive architecture. Mastery of these concepts ensures an engineer can write clean, performance-optimized, and collision-free styling structures across large application codebases.
            </DocP>

            <DocH2>Theoretical & Architectural Assessment Tiers</DocH2>

            <DocH3>1. Foundational & Intermediate Horizons</DocH3>
            <DocList
                items={[
                    'Beginner Tier — The Box Model & Cascade Resolution: Explain how block-level layout bounds interact when tracking standard custom margins, padding weights, and border sizes. What is the fundamental difference between box-sizing: content-box and box-sizing: border-box?',
                    'Intermediate Tier — Stacking Contexts & Flexbox Defenses: Describe the conditions that initialize a new stacking context on the DOM tree (e.g., transform, opacity, explicit z-index targets paired with relative positioning). How do flex-grow, flex-shrink, and flex-basis interact to determine the runtime geometry of a flex child element?'
                ]}
            />

            <DocH3>2. Advanced Engineering Horizons</DocH3>
            <DocList
                items={[
                    'Advanced Tier — Layout Thrashing & Compositing Layers: Walk through the critical rendering path steps (DOM + CSSOM → Render Tree → Layout → Paint → Composite). How do you isolate layout operations to the GPU compositor layer, and how does accessing geometric layout metrics (e.g., offsetHeight) inside JavaScript loops trigger layout thrashing?',
                    'Advanced Tier — Specifying Container Queries & Cascade Layers: Contrast the architectural use-cases of CSS Container Queries against traditional Viewport Media Queries. How does the browser parse selector weights across distinct cascade layers configured via the @layer directive?'
                ]}
            />

            <DocH2>Output-Based Verification Sandbox</DocH2>
            <DocP>
                Analyze the structural code snippets below to predict their rendering behavior, specificity scores, or structural layout footprint adjustments:
            </DocP>

            <DocH3>Case 1: The Specificity & Inheritance Overlap Puzzle</DocH3>
            <CodeBlock
                language="css"
                code={`/* Target Styles Sheet Definition */
@layer override, baseline;

@layer baseline {
  .nav-item.active { color: red !important; }
}

@layer override {
  .nav-container #main-link { color: blue; }
}

/* Question: Given the markup <div className="nav-container"><a id="main-link" className="nav-item active">Link</a></div>, what color does it render? */`}
            />
            <button
                onClick={() => toggleOutput('case1')}
                className="mt-2 mb-6 bg-slate-900 text-white font-mono px-3 py-1.5 rounded text-[11px] font-bold hover:bg-slate-800 transition-colors"
            >
                {showOutputs['case1'] ? 'Hide Answer Explanation' : 'Reveal Answer Explanation'}
            </button>
            {showOutputs['case1'] && (
                <blockquote className="border-l-4 border-blue-600 bg-slate-50 p-4 rounded-r-lg mb-6">
                    <strong>Answer: Red.</strong> Even though the <code>override</code> layer has a higher cascade priority than the <code>baseline</code> layer for normal styles, the inclusion of the <code>!important</code> flag completely inverts the layer precedence rules. In the case of important declarations, the lowest priority layer wins (baseline takes precedence), making the text render red.
                </blockquote>
            )}

            <DocH3>Case 2: The Flexbox Minimum Width Dimension Trap</DocH3>
            <CodeBlock
                language="tsx"
                code={`/* Target View Markup Composition */
<div style={{ display: 'flex', width: '300px' }}>
  <div style={{ flex: '1', backgroundColor: 'lightgray' }}>Fixed Label</div>
  <div style={{ flex: '2', backgroundColor: 'lightblue' }}>
    <span style={{ whiteSpace: 'nowrap' }}>VERY_LONG_STRING_WITHOUT_BREAKS_THAT_EXCEEDS_SPACE</span>
  </div>
</div>

/* Question: Will the second flex child contract gracefully or overflow its parent container layout boundaries? */`}
            />
            <button
                onClick={() => toggleOutput('case2')}
                className="mt-2 mb-6 bg-slate-900 text-white font-mono px-3 py-1.5 rounded text-[11px] font-bold hover:bg-slate-800 transition-colors"
            >
                {showOutputs['case2'] ? 'Hide Answer Explanation' : 'Reveal Answer Explanation'}
            </button>
            {showOutputs['case2'] && (
                <blockquote className="border-l-4 border-blue-600 bg-slate-50 p-4 rounded-r-lg mb-6">
                    <strong>Answer: It overflows.</strong> By default, flex items have a structural fallback constraint of <code>min-width: auto</code>. This means a flex child cannot shrink smaller than the size of its minimum content footprint, regardless of its <code>flex-shrink</code> settings. To fix this overflow, you must explicitly set <code>min-width: 0</code> on the wrapping flex child block.
                </blockquote>
            )}

            <DocH2>Scenario-Based Engineering Problems</DocH2>

            <DocH3>Scenario 1: Resolving Cumulative Layout Shift (CLS) on Dynamic Components</DocH3>
            <DocP>
                <strong>Problem Statement:</strong> An inventory dashboard renders an interactive product table. The card components dynamically load asynchronously across differing network connection speeds, causing lower content regions to shift abruptly when elements snap into place, which hurts the application's Core Web Vitals score.
            </DocP>
            <DocP>
                <strong>Architectural Solution:</strong> Leverage strict height bounds, responsive skeletons, and modern layout constraints to stabilize the UI:
            </DocP>
            <DocList
                items={[
                    'Enforce explicit sizing parameters or aspect-ratio allocations on element containers before data hydration, ensuring the browser reserves appropriate structural space during the initial layout pass.',
                    'Inject skeleton loading templates that match the final element\'s geometric footprint, preventing structural shifts when data assets resolve.',
                    'Utilize modern CSS grid template structures with minmax controls to keep layout dimensions predictable.'
                ]}
            />

            <DocH3>Scenario 2: Building a Component-Driven Responsive Sidebar Module</DocH3>
            <DocP>
                <strong>Problem Statement:</strong> You are tasked with developing a reusable analytics panel card component that must adapt its layout seamlessly based on where it is placed. It needs a multi-column layout when rendered inside a wide main content section, but must instantly stack into a single vertical column when placed within a narrow dashboard sidebar wrapper—all without relying on global window width media queries.
            </DocP>
            <DocP>
                <strong>Architectural Solution:</strong> Implement CSS Container Queries to handle localized component state adjustments independently of the viewport:
            </DocP>

            <DocH3>Interactive Engineering Implementation Blueprint</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';

export default function InterviewSandboxView() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 space-y-8 text-xs">
      
      {/* SCENARIO BLUEPRINT: SIDEBAR CONTAINER SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        
        {/* Simulating Narrow Parent Column (e.g., Sidebar Context) */}
        <div className="border border-dashed border-gray-300 p-4 rounded-xl bg-gray-100/50 [container-type:inline-size] [container-name:panelScope]">
          <h4 className="font-mono text-gray-400 mb-2">Scope A: Narrow Context Area</h4>
          <AdaptiveTelemetryComponent />
        </div>

        {/* Simulating Wide Parent Column (e.g., Main Dashboard Content) */}
        <div className="md:col-span-2 border border-dashed border-gray-300 p-4 rounded-xl bg-gray-100/50 [container-type:inline-size] [container-name:panelScope]">
          <h4 className="font-mono text-gray-400 mb-2">Scope B: Broad Content Area</h4>
          <AdaptiveTelemetryComponent />
        </div>

      </div>

    </div>
  );
}

/* Isolated Component relying entirely on parent container queries */
function AdaptiveTelemetryComponent() {
  return (
    <div className="bg-white border p-6 rounded-xl shadow-sm flex flex-col justify-between gap-4
      @container_panelScope_(min-width:_400px):flex-row
      @container_panelScope_(min-width:_400px):items-center
      transition-all duration-300"
    >
      <div>
        <h3 className="text-sm font-bold text-gray-900">Telemetry Stream Engine</h3>
        <p className="text-gray-500 mt-1 max-w-sm leading-relaxed">
          This component adapts its structure based on its parent container's inline width rather than the screen size, making it truly modular.
        </p>
      </div>
      
      <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0">
        Run Verification
      </button>
    </div>
  );
}`}
            />
        </>
    );
}