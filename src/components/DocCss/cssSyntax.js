import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function CSSSyntaxDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">CSS Syntax & Anatomy</DocTitle>

            <DocP>
                CSS operates on a highly structured, declarative rule system. The layout engine processes text sheets by parsing selector targets and applying key-value declaration pairs. Understanding this syntax anatomy is critical for writing clean, error-free stylesheets.
            </DocP>

            <DocH2>Anatomy of a CSS Ruleset</DocH2>
            <DocP>
                A <strong>Ruleset</strong> (often simply called a "Rule") is the complete architectural block containing both the structural target patterns and the visual style guidelines.
            </DocP>



            <DocList
                items={[
                    'Selector: The matching hook or pattern that tells the browser engine exactly which Document Object Model (DOM) nodes to target (e.g., .dashboard-card).',
                    'Declaration: A single formatting directive consisting of a property paired with a value, separated by a colon character (e.g., display: flex;).',
                    'Property: The specific visual feature or layout behavior you want to modify (e.g., background-color, font-size).',
                    'Value: The explicit settings or units assigned to the tracked property (e.g., #ffffff, 1.25rem).',
                    'Declaration Block: The complete collection of one or more declarations enclosed within opening and closing curly braces ({ }). Each individual declaration inside the block must be terminated with a semicolon (;).'
                ]}
            />

            <DocH2>Parsing Rules: Whitespace, Case, & Documentation</DocH2>

            <DocH3>Whitespace Handling</DocH3>
            <DocP>
                The CSS parsing engine is largely whitespace-insensitive. Spaces, tabs, and newlines are ignored during rendering compilation. However, strict whitespace formatting is required to separate values in shorthand properties (e.g., margin: 10px 20px;) and is strictly forbidden between numbers and their unit tags (e.g., 16 px is invalid syntax and will cause the browser to discard the rule).
            </DocP>

            <DocH3>Case Sensitivity Boundaries</DocH3>
            <DocP>
                CSS properties, values, and keywords are **case-insensitive** (e.g., DISPLAY: FLEX; behaves identically to display: flex;). However, selector targets that match HTML IDs and class attributes are **strictly case-sensitive** because they interface directly with HTML/DOM string namespaces (e.g., .systemCard and .systemcard are processed as completely separate selectors).
            </DocP>

            <DocH3>Inline Engineering Comments</DocH3>
            <DocP>
                CSS comments are enclosed between forward slash and asterisk sequences (/* comment */). They can span single lines or block sections. Comments are completely stripped out during production minification steps to optimize asset bundle sizes.
            </DocP>

            <DocH2>Production-Grade Syntax Blueprint</DocH2>
            <DocP>
                Below is a production-ready stylesheet outlining explicit rulesets, complex declaration blocks, proper comment documentation, and correct case-sensitive identifier mappings:
            </DocP>

            <DocH3>1. The Validated Syntax Module (anatomy.css)</DocH3>
            <CodeBlock
                language="css"
                code={`/* =======================================================
   ANATOMY & SYNTAX VALIDATION MODULE
   Demonstrates standard layout guidelines and parsing behaviors
   ======================================================= */

/* RULESET: Targets the main system view portal container */
.telemetry-Console { /* <-- CLASS NAMESPACE IS CASE-SENSITIVE */
  /* DECLARATION BLOCK START */
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: oklch(0.15 0.02 240); /* Modern high-density dark mode fill */
  border-radius: 12px;
  /* DECLARATION BLOCK END */
}

/* MULTI-SELECTOR RULESET: Combines targets sharing a unified declaration block */
.telemetry-Console h2,
.telemetry-Console p {
  color: oklch(0.98 0.01 240);
  margin: 0; /* Clear browser user-agent defaults */
}

/* SHORTHAND PROPERTY SYNTAX: Space separation dictates positional tracking */
.telemetry-Console .status-indicator {
  /* top/bottom: 6px | left/right: 12px */
  padding: 6px 12px; 
  
  /* WHITESPACE CRITICAL: Zero spaces allowed between metric scalar and unit label */
  font-size: 14px; 
  font-weight: 600;
  border-left: 4px solid oklch(0.65 0.2 140); /* 4px success border boundary */
  
  /* Standard lowercase keywords preferred for optimal maintainability */
  text-transform: uppercase;
}`}
            />

            <DocH3>2. Layout Integration Implementation (ConsoleView.tsx)</DocH3>
            <CodeBlock
                language="tsx"
                code={`import React from 'react';
import './anatomy.css';

export default function ConsoleView() {
  return (
    <div className="max-w-md mx-auto mt-10">
      {/* CRITICAL: The className string must match the selector's casing 
        exactly for the style rules to resolve correctly.
      */}
      <section className="telemetry-Console">
        <h2>Cluster Diagnostics</h2>
        <div className="status-indicator">
          Engine Pipeline: Active
        </div>
      </section>
    </div>
  );
}`}
            />
        </>
    );
}