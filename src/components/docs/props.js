import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';

export default function Props() {
    return (
        <>
            <DocTitle eyebrow="Get started">Props (Properties)</DocTitle>
            <DocP>Props are read-only inputs passed from a parent component down to a child component, enabling dynamic data distribution and custom rendering across your user interface.</DocP>

            <DocH2>Core Concepts</DocH2>
            <DocList
                items={[
                    'Passing Props: Attributes added to a component tag in JSX that are received as a single consolidated object inside the child component function arguments.',
                    'Default Props: Default fallback values configured for a component to use if specific props are omitted or left undefined by the parent.',
                    'Props.children: A special built-in prop that automatically captures and displays any nested content or elements placed inside the opening and closing tags of a component.',
                    'Prop Drilling: The architectural challenge where data must be passed down through multiple layers of intermediate components that don\'t actually need the data themselves, just to reach a deeply nested child.',
                    'Prop Validation: The practice of enforcing data types and requiring specific inputs to catch runtime bugs early, traditionally handled using the "prop-types" library or natively via TypeScript interfaces.'
                ]}
            />
        </>
    )
}