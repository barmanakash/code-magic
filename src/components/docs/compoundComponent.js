import React, { useState, createContext, useContext } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CompoundComponentsDoc() {
    return (
        <>
            <DocTitle eyebrow="Advanced Patterns">Compound Components</DocTitle>

            <DocP>
                Compound Components are an advanced design pattern where a group of cohesive components work together harmoniously to manage an implicit internal shared state while offering total semantic markup flexibility to the consumer.
            </DocP>

            <DocH2>Core Architecture Mechanics</DocH2>
            <DocList
                items={[
                    'State Orchestration Context: The parent container establishes an internal React Context layer that wraps and manages all state tracking properties and state modification callback functions.',
                    'Decoupled Child Elements: Sub-components consume the shared context slice parameters implicitly using custom hook primitives. This configuration eliminates intermediate prop-drilling completely.',
                    'Explicit Semantic Control: Consumers gain absolute authority over composition layouts, component order, and custom class placements directly inside their JSX sheets without modifying the component engine core.'
                ]}
            />

            <DocH2>Ecosystem Implementations</DocH2>
            <DocList
                items={[
                    'Tabs: A parent container synchronizing active identifier indices across structured click buttons and layout target projection views.',
                    'Accordion: Grouped expandable section nodes communicating toggle events to dynamically calculate layout container box expansion bounds.',
                    'Modal Frameworks: Unified overlay control portals decoupling backdrop trigger triggers, headers, content layouts, and exit actions cleanly.'
                ]}
            />

            <DocH2>Production Tab System Implementation</DocH2>
            <DocP>
                Below is a clean, practical architectural implementation of a cohesive, enterprise-ready dynamic Compound Component Tab structure:
            </DocP>

            <DocH3>1. The Compound Component Architecture Engine</DocH3>
            <CodeBlock
                language="code"
                code={`import React, { useState, createContext, useContext } from 'react';

// Initialize context coordinate layer
const TabsContext = createContext(null);

// Main Parent Component Wrapper
export function Tabs({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-container-system">{children}</div>
    </TabsContext.Provider>
  );
}

// Sub-Component: Explicit Navigation Row Wrap
export function TabList({ children }) {
  return <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0' }}>{children}</div>;
}

// Sub-Component: Interactivity Tab Toggle Primitives
export function TabTrigger({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isSelected = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      style={{
        padding: '10px 20px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        borderBottom: isSelected ? '2px solid #2563eb' : '2px solid transparent',
        color: isSelected ? '#2563eb' : '#64748b',
        fontWeight: isSelected ? '640' : '400'
      }}
    >
      {children}
    </button>
  );
}

// Sub-Component: Evaluated Output Frame
export function TabContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;

  return <div style={{ padding: '20px 0' }}>{children}</div>;
}`}
            />

            <DocH3>2. Declarative Usage Inside View Directories</DocH3>
            
            <pre>
                <code className="language-jsx">
                    {`import React from 'react';
import { Tabs, TabList, TabTrigger, TabContent } from './TabsEngine';

export default function WorkspaceManager() {
  return (
    <div style={{ padding: '24px', background: '#fff', border: '1px solid #e2e8f0' }}>
      <h3>Control Environment Panel</h3>
      
      {/* Declaratively structuring compound blocks without managing explicit step configurations locally */}
      <Tabs defaultValue="overview">
        <TabList>
          <TabTrigger value="overview">Fleet Overview</TabTrigger>
          <TabTrigger value="security">Encryption Access</TabTrigger>
          <TabTrigger value="logs">Terminal Sync Logs</TabTrigger>
        </TabList>

        <TabContent value="overview">
          <h5>Active Cluster Operations</h5>
          <p>All cloud computing instances are communicating synchronously over region routing pipelines.</p>
        </TabContent>

        <TabContent value="security">
          <h5>SSL Cert Keys</h5>
          <p>Hardware keys confirmed active. Automated encryption cycling is operating effectively.</p>
        </TabContent>

        <TabContent value="logs">
          <h5>System Sync Traces</h5>
          <p>Standard data operations output successfully logged across backend tracking directories.</p>
        </TabContent>
      </Tabs>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}