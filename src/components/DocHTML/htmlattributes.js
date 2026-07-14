import React, { useState } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../docs/DocPrimitives';
import CodeBlock from '../docs/CodeBlock';

export default function HTMLAttributesDoc() {
  const [editableText, setEditableText] = useState('Click here. You can edit this live on the screen because of the contenteditable attribute.');

  return (
    <>
      <DocTitle eyebrow="Core Foundations">HTML Attributes: Metadata Configuration, Custom Schemas & Accessibility Controls</DocTitle>

      <DocP>
        Attributes are key-value metadata pairs defined inside an element's opening tag. They configure element behavior, associate styling targets, and store custom data scripts. While some attributes apply only to specific elements (such as <code>href</code> for links or <code>src</code> for images), **Global Attributes** can be legally assigned to any HTML5 element to control behaviors like tab ordering, drag-and-drop actions, editing states, and translation rules.
      </DocP>

      <DocH2>The Global Attribute Specification Matrix</DocH2>

      <DocH3>1. Core Style & Selector Identifiers</DocH3>
      <DocList
        items={[
          'id: Defines a unique identifier within the entire Document Object Model (DOM). It must be completely unique on the page to prevent JavaScript DOM selection errors (document.getElementById) and to ensure correct CSS specificity matching.',
          'class: Associates the element with one or more CSS class rules or Tailwind utility tokens. Unlike id, class names do not need to be unique and can be reused across any number of elements.',
          'style: Injects CSS rules directly onto the element (inline styles). While useful for dynamic JavaScript adjustments, inline styles should generally be avoided in static markup because they have high CSS specificity and bypass global stylesheets.'
        ]}
      />

      <DocH3>2. Behavior, Editing & Drag-and-Drop Attributes</DocH3>
      <DocList
        items={[
          'contenteditable: A boolean or enumerated attribute that makes an element\'s content directly editable by the user in the browser, providing a lightweight alternative to heavy form fields.',
          'draggable: Controls whether an element can be dragged using browser-native Drag and Drop APIs (options: true | false | auto).',
          'spellcheck: Instructs the browser whether to check the element\'s text for spelling and grammar errors (options: true | false).'
        ]}
      />



      <DocH3>3. Internationalization & Assistive Controls</DocH3>
      <DocList
        items={[
          'lang: Defines the primary language of the element\'s text content, helping screen readers with pronunciation and search engines with language-specific indexing.',
          'dir: Declares the text directionality of the content (options: ltr for Left-to-Right, rtl for Right-to-Left, auto to let the browser decide based on the characters).',
          'title: Offers extra context about an element, typically rendering as a native browser tooltip when a user hovers their mouse over the item.',
          'hidden: A boolean attribute that hides the element from view. It works similarly to the CSS property display: none, removing the element from the visible page layout.'
        ]}
      />

      <DocH3>4. Tab Navigation & Custom Datasets</DocH3>
      <DocList
        items={[
          'tabindex: Controls keyboard tab navigation order. A value of 0 places the element in the natural tab order. A value of -1 removes the element from keyboard tab flow but still allows it to be focused programmatically via JavaScript. Positive values (e.g., tabindex="3") override the natural order and should be avoided as they create confusing experiences for screen reader users.',
          'data-*: Custom data attributes that let developers store private, custom metadata directly on standard HTML elements. The syntax requires a lowercase prefix of "data-" followed by your custom key name (e.g., data-user-id="902"). This data can then be easily accessed in JavaScript using the dataset API.'
        ]}
      />

      <DocH2>Production Attribute Architecture Blueprint</DocH2>
      <DocP>
        Below is a production-grade HTML5 fragment demonstrating the clean integration of global, state-based, and custom data attributes:
      </DocP>

      <DocH3>1. Semantic Element with Global Attributes (attributes-spec.html)</DocH3>
      <CodeBlock
        language="html"
        code={`<div 
  id="telemetry-node-204"
  class="c-telemetry-panel c-telemetry-panel--active"
  dir="ltr"
  lang="en"
  tabindex="0"
  draggable="true"
  data-node-id="204"
  data-cluster-region="ap-south"
  data-security-level="high"
  title="Active system telemetry tracking container"
>
  
  <header class="c-telemetry-panel__header">
    <h3 class="c-telemetry-panel__title">Telemetry Node 204</h3>
  </header>

  <div 
    class="c-telemetry-panel__editable-area" 
    contenteditable="true"
    spellcheck="true"
  >
    System status is normal. Click here to append inline operator notes...
  </div>

  <div 
    id="node-error-boundary" 
    class="c-telemetry-panel__error" 
    hidden
  >
    Critical Pipeline Overheat Warning.
  </div>

</div>`}
      />

      <DocH3>2. Interactive Attribute Sandbox (HTMLAttributesWorkspace.tsx)</DocH3>
      <CodeBlock
        language="tsx"
        code={`import React, { useState } from 'react';

export default function HTMLAttributesWorkspace() {
  const [editableText, setEditableText] = useState('System baseline is normal. Click here to edit this text directly on the screen because of contenteditable.');
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center space-y-6 text-xs font-sans">
      
      <header className="text-center max-w-sm">
        <h3 className="font-bold text-gray-900 text-sm">HTML Attributes Lab</h3>
        <p className="text-gray-500 mt-1">
          Interact with this live panel to see how global browser attributes behave in real time.
        </p>
      </header>

      {/* Target Interaction Panel */}
      <div 
        className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6 relative"
        tabIndex={0}
        title="Interactive Attributes Module"
      >
        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          Live Attributes
        </div>

        {/* 1. Contenteditable & Spellcheck Demo */}
        <div className="space-y-1.5">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">
            contenteditable="true" & spellcheck="true"
          </span>
          <div 
            contentEditable
            spellCheck="true"
            onInput={(e) => setEditableText(e.currentTarget.textContent || '')}
            className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-[11px] text-gray-700 leading-relaxed cursor-text"
          >
            {editableText}
          </div>
        </div>

        {/* 2. Custom Data-* Attributes & Draggable Demonstration */}
        <div className="space-y-1.5">
          <span className="font-mono text-[9px] text-gray-400 block uppercase">
            data-* attributes & draggable="true"
          </span>
          <div 
            draggable="true"
            data-component-type="interactive-card"
            data-security-tier="unlocked"
            className="p-3 bg-indigo-50/50 border border-indigo-100 text-indigo-950 rounded-xl cursor-grab active:cursor-grabbing text-[11px] flex items-center justify-between"
          >
            <span>Drag Me (Native drag active)</span>
            <span className="font-mono text-[9px] font-bold text-indigo-600 bg-indigo-100/50 px-2 py-0.5 rounded">
              draggable
            </span>
          </div>
        </div>

        {/* 3. Hidden Attribute Controller */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-t pt-4">
            <span className="font-mono text-[9px] text-gray-400 uppercase">hidden state toggle</span>
            <button 
              onClick={() => setIsHidden(!isHidden)}
              className="bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors font-bold text-[10px]"
            >
              {isHidden ? 'Reveal Node' : 'Apply [hidden]'}
            </button>
          </div>

          <div 
            hidden={isHidden} 
            className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-[11px] font-medium"
          >
            Warning: This diagnostics node uses the boolean <code>hidden</code> attribute. When active, it is removed from the visible layout.
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