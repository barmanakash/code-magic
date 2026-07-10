import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function Installation() {
  return (
    <>
      <DocTitle eyebrow="Get started">Prerequisites</DocTitle>

      <DocH2>HTML (HyperText Markup Language)</DocH2>
      <DocP>The foundational building block of the web used to structure content within React applications:</DocP>
      <DocList
        items={[
          'Role in React: Traditional HTML is converted into JSX syntax, allowing developers to structure layouts natively inside JavaScript files.',
          'Semantic Elements: Utilizes tags like header, nav, main, section, and footer to define explicit, accessible layout structures for web browsers.',
          'Attributes to Props: Standard HTML attributes transform into camelCase props when writing JSX (e.g., class becomes className, for becomes htmlFor).',
          'Self-Closing Tags: In standard HTML, tags like input, img, and br don\'t require a closing mark, but within React JSX, they must be strictly self-closed (e.g., <input />).',
          'DOM Integration: HTML provides the initial entry element (usually a single div with an ID of root) where the entire React application mounts and injects its UI components.'
        ]}
      />


      <DocH2>CSS (Cascading Style Sheets)</DocH2>
      <DocP>The styling mechanism used to design, layout, and animate user interfaces in a React application:</DocP>
      <DocList
        items={[
          'Global Stylesheets: Traditional approach using standard .css files imported directly into components to apply universal classes and layouts.',
          'CSS Modules: Scopes CSS locally to a specific component by auto-generating unique class names, eliminating global class name conflicts.',
          'Inline Styles: Applied directly to JSX elements using JavaScript objects with camelCase properties instead of kebab-case strings (e.g., style={{ backgroundColor: "blue" }}).',
          'CSS-in-JS: Utilizing libraries like Styled Components or Emotion to write actual CSS syntax directly inside JavaScript files for dynamic styling based on props.',
          'Utility-First Frameworks: Integration with modern tools like Tailwind CSS to style components instantly using predefined utility classes within the className prop.'
        ]}
      />

      <DocH2>JavaScript ES6+</DocH2>
      <DocP>Modern JavaScript features that serve as the essential foundation for writing React applications:</DocP>

      <DocH2>Variable Declarations</DocH2>
      <DocList
        items={[
          'let: Declares block-scoped, mutable variables that can be reassigned over time.',
          'const: Declares block-scoped, immutable bindings that cannot be reassigned (ideal for components and functions).'
        ]}
      />

      <DocH2>Syntax Enhancements</DocH2>
      <DocList
        items={[
          'Arrow Functions: Provides a shorter syntax for writing functions and automatically binds the lexical scope of "this".',
          'Template Literals: Uses backticks (`) and ${} interpolation to construct dynamic, multi-line strings easily.'
        ]}
      />

      <DocH2>Data Manipulation</DocH2>
      <DocList
        items={[
          'Destructuring: Extracts values from arrays or properties from objects directly into distinct, clean variables.',
          'Spread Operators (...): Unpacks elements of an array or properties of an object into a new array or object.',
          'Rest Parameters (...): Gathers multiple arguments into a single array, often used to collect remaining component props.'
        ]}
      />

      <DocH2>Asynchronous & Modular Architecture</DocH2>
      <DocList
        items={[
          'Modules: Uses import and export statements to share components, hooks, and logic across separate files.',
          'Promises: Objects representing the eventual completion or failure of an asynchronous operation.',
          'Async/Await: Syntactic sugar built on top of Promises to make asynchronous code read like clean, synchronous logic.'
        ]}
      />

      <DocH2>Array Iteration Methods</DocH2>
      <DocList
        items={[
          'map(): Transforms every element in an array and returns a new array; the standard way to render lists in React.',
          'filter(): Creates a new array containing only elements that pass a specific conditional test.',
          'reduce(): Executes a reducer function on each element to condense the array down into a single cumulative value.',
          'find(): Returns the value of the very first element in an array that satisfies the provided testing condition.'
        ]}
      />



      {/* <DocP>Before running this project, install the following on your machine:</DocP>

      <DocH2>1. Node.js and npm</DocH2>
      <DocP>
        This project needs <strong>Node.js 18 or later</strong> (npm comes bundled with it). Check what
        you have installed:
      </DocP>
      <CodeBlock language="bash" code={`node -v\nnpm -v`} />
      <DocP>
        If either command isn't recognized, download the LTS installer from{' '}
        <strong>nodejs.org</strong> and re-run the checks above after installing.
      </DocP>

      <DocH2>2. A code editor</DocH2>
      <DocP>
        Any editor works, but <strong>VS Code</strong> is a solid   free option with good React and MUI
        autocomplete support.
      </DocP>

      <DocH2>3. Git (optional, recommended)</DocH2>
      <DocP>Useful if you want to version-control the project or push it to GitHub later.</DocP>
      <CodeBlock language="bash" code={`git --version`} />

      <DocNote tone="info">
        You do not need to install React, MUI, or any other library globally — they're installed
        per-project via <code>npm install</code>, covered in the next section.
      </DocNote>

      <DocH2>What you'll end up with</DocH2>
      <DocList
        items={[
          'A local copy of the Code Magic project on your machine.',
          'All dependencies installed inside a project-local node_modules folder.',
          'A dev server you can run with one command to preview the site live.',
        ]}
      /> */}
    </>
  );
}