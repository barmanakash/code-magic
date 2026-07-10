import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';


export default function Hooks() {
    return (
        <>
            <DocTitle eyebrow="Get started">React Hooks</DocTitle>
            <DocP>Hooks are built-in JavaScript functions introduced in React 16.8 that allow you to use state and other framework features inside functional components without writing class components.</DocP>

            <DocH2>State & Structure Hooks</DocH2>
            <DocList
                items={[
                    'useState: The foundational hook that declares a state variable and an updater function to preserve values across component re-renders.',
                    'useReducer: An alternative to useState designed for complex state structures with multiple actions; manages state transitions via a centralized reducer function.',
                    'useContext: Subscribes a component to a React Context object, allowing it to read global shared data directly without explicit prop drilling.',
                    'useId: Generates stable, unique ID strings that are consistent across both server-side and client-side rendering, primarily used for linking HTML form labels and inputs.'
                ]}
            />

            <DocH2>Side Effect & Lifecycle Hooks</DocH2>
            <DocList
                items={[
                    'useEffect: Handles asynchronous side effects (such as API fetching, event listeners, and manual DOM tracking) after the component mounts and renders to the screen.',
                    'useLayoutEffect: Fires synchronously immediately after all DOM mutations but before the browser paints the screen. Ideal for reading layout dimensions and calculating visual positions to prevent flickering.',
                    'useInsertionEffect: Fires synchronously before any DOM mutations take place. It is exclusively designed for CSS-in-JS library authors to inject dynamic style tags into the DOM before layout calculation.'
                ]}
            />

            <DocH2>Performance & Optimization Hooks</DocH2>
            <DocList
                items={[
                    'useMemo: Caches (memoizes) the computed result of an expensive calculation, recalculating it only when one of its listed dependencies changes.',
                    'useCallback: Caches an entire function definition between re-renders, preventing child components from unnecessarily re-rendering when passed inline functions as props.',
                    'useTransition: Marks state updates as non-blocking transitions, allowing the UI to remain highly responsive by letting urgent inputs interrupt slower, background data rendering.',
                    'useDeferredValue: Accepts a state value and returns a deferred copy of it that lags behind updates, allowing you to defer re-rendering heavy parts of the UI while the user types or interacts.'
                ]}
            />

            <DocH2>References & DOM Integration Hooks</DocH2>
            <DocList
                items={[
                    'useRef: Creates a persistent, mutable reference object whose .current property can store a direct DOM node reference or a variable without triggering a component re-render when changed.',
                    'useImperativeHandle: Customizes the specific instance values or methods exposed when a parent component uses a ref to access a child component; must be paired with forwardRef.',
                    'useSyncExternalStore: A specialized hook designed for state management libraries to subscribe to and safely read data from external, non-React data sources without causing UI rendering mismatches (tearing).'
                ]}
            />

        </>
    )
}