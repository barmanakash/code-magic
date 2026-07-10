import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';

export default function ConditionalRendring() {
    return (
        <>
            <DocTitle eyebrow="Get started">Conditional Rendering</DocTitle>
            <DocP>Conditional rendering in React allows you to control exactly what UI elements are rendered based on specific states, props, or logic conditions in your application.</DocP>

            <DocH2>Rendering Strategies</DocH2>
            <DocList
                items={[
                    'if/else Statements: Standard JavaScript conditional logic used outside of the return statement to assign different JSX blocks to a variable based on a condition.',
                    'Ternary Operator (condition ? x : y): A concise inline syntax ideal for choosing between two distinct JSX outcomes directly inside the main return block.',
                    'Logical AND Operator (&&): Inline syntax used when you want to render a specific JSX element only if a condition is true, and render nothing if it is false.',
                    'Switch Statements: Useful outside the return block when managing complex, multi-layered conditions with many possible UI outcomes based on a single state value.',
                    'Early Return: A pattern where you place an if statement at the top of your component function to return a specific UI (like a loading spinner or error message) early, stopping the rest of the component logic from executing.'
                ]}
            />
        </>
    )
}