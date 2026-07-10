import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote, DocH3 } from '../../components/docs/DocPrimitives';


export default function CustomHook() {
    return (
        <>
            <DocTitle eyebrow="Get started">Custom Hooks</DocTitle>
            <DocP>Custom Hooks are reusable JavaScript functions that encapsulate complex, stateful logic so it can be shared across multiple components without duplicating code. By convention, their names must always start with the word "use".</DocP>

            <DocH2>Common Practical Use Cases</DocH2>
            <DocList
                items={[
                    'useFetch: Abstracts away network request boilerplate by managing loading states, error exceptions, and successful data responses inside a unified API framework.',
                    'useLocalStorage: Synchronizes component state directly with the browser\'s localStorage API, ensuring data persists across page reloads and browser sessions seamlessly.',
                    'useDarkMode: Tracks and updates a user\'s application theme preference (light vs. dark mode) by managing local state and toggling explicit classes on the root HTML element.'
                ]}
            />

            <DocH2>Example Implementations & Usage</DocH2>
            <DocP>Below is the standard, idiomatic code architecture for building and utilizing these custom logic abstractions:</DocP>

            <DocH3>1. The useFetch Custom Hook</DocH3>
            <DocP>This hook centralizes data fetching states to prevent re-writing redundant try/catch blocks across your views:</DocP>
        </>
    )
}