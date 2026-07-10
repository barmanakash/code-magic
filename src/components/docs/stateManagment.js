import React from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function StateManagementDoc() {
    return (
        <>
            <DocTitle eyebrow="Architecture">State Management Ecosystem</DocTitle>

            <DocP>
                As React applications scale, passing data through layers of nested components becomes unmanageable. State management solutions decouple shared application data from visual interface trees, establishing deterministic and global single-sources of truth.
            </DocP>

            <DocH2>Ecosystem Paradigms</DocH2>
            <DocList
                items={[
                    'Context API: React\'s built-in telemetry transmission layer. It is highly suitable for static or low-frequency updates (like structural UI themes or auth context) but re-renders all down-tree consumers on every state change.',
                    'Legacy Redux: A strict Flux-architecture container leveraging centralized immutable store structures, unidirectional actions, and explicit pure reducer mapping functions. It offers unparalleled predictability but suffers from heavy boilerplate.',
                    'Redux Toolkit (RTK): The modern standard for production Redux. It slashes boilerplate by providing clean abstractions like createSlice, configures standardized developer middleware out-of-the-box, and utilizes Immer to support safe mutate-style state assignment syntax natively.',
                    'Zustand: A performant, highly minimal, atomic-less state store built on hook primitives. It avoids provider wrapping boilerplate completely, doesn\'t cause unnecessary re-renders, and manages actions cleanly through intuitive closures.',
                    'Jotai & Recoil: Atomic state management models designed around fine-grained dependency graphs. They break global state down into modular isolated state fragments (Atoms) that re-render only the precise components subscribing to them.',
                    'MobX: A transparent, reactive state model powered by observable objects. It automatically tracks dependency matrices behind the scenes, updating the UI synchronously when properties change without explicit setter wrappers.'
                ]}
            />

            <DocH2>Implementation Showdowns: Redux Toolkit vs. Zustand</DocH2>
            <DocP>
                Modern front-end applications typically lean toward either the standardized stability of Redux Toolkit or the lightweight speed of Zustand. Here is how both architectures look when implemented cleanly inside production component directories:
            </DocP>

            <DocH3>1. The Redux Toolkit Approach (Slice Architecture)</DocH3>
            <pre>
                <code className="language-javascript">
                    {`import { createSlice, configureStore } from '@reduxjs/toolkit';

// Create a feature slice managing counter data mutate-style via Immer internally
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    setValue: (state, action) => { state.value = action.payload; }
  }
});

export const { increment, decrement, setValue } = counterSlice.actions;

// Instantiate centralized global store configurations
export const rtkStore = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});`}
                </code>
            </pre>

            <DocH3>2. The Zustand Approach (Zero-Provider Hook Paradigm)</DocH3>
            <pre>
                <code className="language-javascript">
                    {`import { create } from 'zustand';

// Creates a self-contained custom hook binding global data and methods immediately
export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setExplicitValue: (newValue) => set({ count: newValue })
}));`}
                </code>
            </pre>

            <DocH3>3. Consuming Stores inside Components</DocH3>
            <DocP>
                This dashboard display template details the explicit consumption syntax differences between RTK selectors and clean Zustand hook state accessors:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, setValue } from './rtkStore';
import { useCounterStore } from './zustandStore';

export function StateMonitorDashboard() {
  // RTK Consumption Core
  const rtkCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // Zustand Consumption Core (Zero provider wrapper required upstream)
  const { count: zustandCount, increment: runZustandIncrement } = useCounterStore();

  return (
    <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
      <h4>Global State Management Dashboard</h4>
      
      <div>
        <p>Redux Toolkit State Total: {rtkCount}</p>
        <button onClick={() => dispatch(increment())}>RTK +1</button>
        <button onClick={() => dispatch(setValue(100))}>Reset RTK to 100</button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <div>
        <p>Zustand Hook State Total: {zustandCount}</p>
        <button onClick={runZustandIncrement}>Zustand +1</button>
      </div>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}