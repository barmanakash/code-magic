import React, { createContext, useState, useContext } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function ContextAPIDoc() {
    return (
        <>
            <DocTitle eyebrow="State Management">Context API</DocTitle>

            <DocP>
                The Context API is a built-in React feature designed to share global data (such as themes, user authentication states, or preferred languages) across the entire component tree without manually passing props down through every intermediate level.
            </DocP>

            <DocH2>Core Architecture Components</DocH2>
            <DocList
                items={[
                    'Create Context: The initial step where you instantiate a context object using React.createContext(). This method accepts an optional default fallback value used only if a component consumes context without a matching provider.',
                    'Context Provider: A specialized component (<Context.Provider>) that wraps a section of your component tree. It accepts a "value" prop, exposing that data to any nested child component regardless of how deeply it is nested.',
                    'Context Consumer: The legacy approach (<Context.Consumer>) used primarily in class components to access context data. It relies on a function-as-a-child (render prop) pattern to pass the shared value directly into JSX blocks.',
                    'useContext Hook: The modern, clean, and standard approach for functional components to read and subscribe to a context. By passing the context object into useContext(MyContext), the component instantly gains access to the current provider value and automatically re-renders whenever that value updates.'
                ]}
            />

            <DocH2>Standard Implementation Pattern</DocH2>
            <DocP>
                Here is the clean, idiomatic implementation structure showing context creation, provider wrapping, and consumption using the modern hook approach:
            </DocP>

            <DocH3>1. Creating the Context & Provider</DocH3>
            <pre>
                <code className="language-javascript">
                    {`import React, { createContext, useState, useContext } from 'react';

// Initialize the Context object
const ThemeContext = createContext(null);

// Build a custom Provider component to manage context state
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a clean custom hook for consumers to avoid importing context directly
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}`}
                </code>
            </pre>

            <DocH3>2. Consuming Context in a Component</DocH3>
            <DocP>
                Once the provider wraps your root layout, any deeply nested child component can consume the data instantaneously without prop drilling:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React from 'react';
import { useTheme } from './ThemeContext';

export function ThemeToggleButton() {
  // Access state and updater function cleanly via our custom hook layer
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px 20px',
        border: '1px solid #ccc',
        cursor: 'pointer'
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}`}
                </code>
            </pre>
        </>
    );
}