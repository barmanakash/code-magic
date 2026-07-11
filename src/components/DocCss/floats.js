import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSFloatsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Floats, Clearing Mechanics, & Legacy Layouts</DocTitle>

            <DocP>
                Before the advent of modern layout systems like Flexbox and CSS Grid, the web relied heavily on the <code>float</code> property to orchestrate page architecture. Originally designed strictly for wrapping text around images within documents, floats were adapted into full column layout engines. Understanding float behaviors and clearing mechanics is essential for maintaining enterprise codebases and debugging legacy formatting contexts.
            </DocP>

            <DocH2>Float & Clear Property Taxonomy</DocH2>

            <DocH3>1. The Floating Mechanics</DocH3>
            <DocList
                items={[
                    'float: Shifts an element to the left or right edge of its parent container box, removing it from the normal structural vertical flow. Subsequent block elements stack behind the floated item as if it doesn\'t exist, while their inline contents (like text glyphs) wrap around the floated box boundary.',
                    'Operational Values: left (anchors item to the starting horizontal boundary), right (anchors item to the trailing horizontal boundary), and none (the default non-shifting state).'
                ]}
            />



            <DocH3>2. The Clearing Subsystem</DocH3>
            <DocList
                items={[
                    'clear: Dictates whether an element must sit beneath preceding floated items rather than wrapping around them. It forces the browser to push the element vertically downward until it clears the specified floated edge.',
                    'Operational Values: left (drops down past left-floated elements), right (drops down past right-floated elements), and both (drops down past all floated blocks on either side).'
                ]}
            />

            <DocH2>The Parent Collapse Defect & The Clearfix Solution</DocH2>
            <DocP>
                When a parent box contains exclusively floated child elements, it suffers from a structural defect known as **Parent Height Collapse**. Because floated items are yanked out of the normal vertical layout path, the parent container treats its internal height as absolute zero px, which often breaks structural backgrounds and border boundaries.
            </DocP>



            <DocH3>The Evolutionary Clearfix Fixes</DocH3>
            <DocList
                items={[
                    'Legacy Hack: Inserting an empty structural DOM element (like an empty <div style="clear:both;"></div>) right before the parent container closes. While functional, this clutters the document with unnecessary semantic nodes.',
                    'Modern Standard Clearfix: Injects a hidden, virtual layout node using the `::after` pseudo-element directly via CSS. This forces the parent box to compute its structural bounds correctly without touching the HTML markup.',
                    'Modern Alternative (Block Formatting Context): Setting display: flow-root; on the parent container. This instantiates a clean layout context that naturally contains internal floats without requiring clearfix pseudo-elements.'
                ]}
            />

            <DocH2>Legacy Column Architecture Blueprint</DocH2>
            <DocP>
                Below is a production-grade legacy layout template showing standard float grid distributions, explicit clearfix implementations, and the modern `flow-root` fallback method:
            </DocP>

            <DocH3>1. The Floated Grid System Sheet (floats.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   PRODUCTION LEGACY FLOAT ARCHITECTURE
   ======================================================= */

/* THE STANDARD MICRO-CLEARFIX ENGINE 
   Generates a hidden virtual block to enforce structural height calculations */
.clearfix-container::after {
  content: "";
  display: table;
  clear: both;
}

/* THE MODERN PREFERRED RESET (Bypasses clearfix hacks entirely) */
.modern-flow-root-container {
  display: flow-root;
  background-color: oklch(0.97 0.01 240);
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 12px;
  padding: 24px;
}

/* FLOATED TWO-COLUMN ARCHITECTURE LAYOUT */
.legacy-layout-row {
  width: 100%;
  box-sizing: border-box;
}

.legacy-main-column {
  /* Shifts container to build a left-aligned content section */
  float: left;
  width: 70%; 
  padding-right: 20px;
  box-sizing: border-box;
}

.legacy-side-column {
  /* Shifts container to build a right-aligned sidebar section */
  float: right;
  width: 30%;
  background-color: #ffffff;
  border: 1px solid oklch(0.9 0.01 240);
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
}

/* EXPLICIT BOUNDARY RESET FOOTER */
.legacy-fullwidth-footer {
  /* Enforces complete isolation; breaks free from columns above */
  clear: both;
  
  margin-top: 24px;
  padding: 16px;
  background-color: oklch(0.2 0.02 240);
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
}`}
            />

            <DocH3>2. Layout Implementation View (LegacyWorkspace.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './floats.css';

export default function LegacyWorkspace() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      
      {/* CRITICAL APPARATUS: The clearfix-container class forces the wrapper 
        to track column heights accurately, preventing layout breaks.
      */}
      <div className="modern-flow-root-container clearfix-container">
        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-3 font-bold">
          Legacy Grid Portal
        </span>
        
        <main className="legacy-main-column">
          <h4 className="text-sm font-bold text-gray-800 mb-1">Primary Content Thread</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            This column floats left, spanning exactly 70% of the parent layout block. Pre-Flexbox production systems relied heavily on these percentage splits to orchestrate multi-column web dashboards.
          </p>
        </main>

        <aside className="legacy-side-column">
          <h4 className="text-xs font-bold text-gray-800 mb-1">Sidebar Telemetry</h4>
          <p className="text-[11px] text-gray-400">Isolated details anchor right.</p>
        </aside>

        <footer className="legacy-fullwidth-footer text-xs">
          Footer Frame (Cleared past columns using clear: both;)
        </footer>
      </div>

    </div>
  );
}`}
            />
        </>
    );
}