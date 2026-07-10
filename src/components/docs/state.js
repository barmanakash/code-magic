import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';

export default function State() {
    return (
        <>
            <DocTitle eyebrow="Get started">State in React</DocTitle>
            <DocP>State represents the internal, dynamic memory of a component. Unlike props, state is managed entirely within the component and triggers a re-render whenever its value changes.</DocP>

            <DocH2>Managing State Types</DocH2>
            <DocList
                items={[
                    'useState Hook: The standard built-in function used to declare a state variable and its updater function inside functional components.',
                    'State with Objects: When updating object state, you must copy the existing properties using the spread operator (...) before overriding specific values to preserve unchanged fields.',
                    'State with Arrays: Arrays in state must be treated as immutable. New items should be added using the spread operator, and items should be removed or modified using non-mutating methods like filter() and map().',
                    'Nested State: Deeply nested objects or arrays require copying each hierarchical level of structure during updates to ensure React detects the reference change and re-renders properly.'
                ]}
            />

        </>
    )
}