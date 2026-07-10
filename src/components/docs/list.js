import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';


export default function List() {
    return (
        <>
            <DocTitle eyebrow="Get started">Lists and Keys</DocTitle>
            <DocP>React allows you to loop through data collections and render lists of components dynamically by converting JavaScript arrays into JSX elements.</DocP>

            <DocH2>Core Implementation</DocH2>
            <DocList
                items={[
                    'Rendering Arrays: React natively supports rendering arrays of JSX elements. When you place an array of markup directly inside curly braces, React automatically unrolls it and renders each item in order.',
                    'The map() Method: The standard, idiomatic way to loop over data arrays in React. It iterates over the dataset and transforms each raw data item into a corresponding JSX component or HTML element.',
                    'Keys: A unique string or number attribute assigned to each item in a rendered list. Keys help React identify which items have changed, been added, or been removed, ensuring optimal rendering performance.',
                    'Reconciliation & Diffing: React uses keys during its reconciliation process to match list items in the virtual DOM with elements in the real DOM, preventing unnecessary re-renders and maintaining component state accurately.'
                ]}
            />

            <DocH2>Best Practices for Keys</DocH2>
            <DocList
                items={[
                    'Unique Identifiers: Always prefer stable, unique IDs from your data source (such as database primary keys like databaseId or UUIDs) as your key value.',
                    'Avoid Index as Key: Do not use the array iteration index as a key if the list can be sorted, filtered, reordered, or dynamically mutated, as this can cause subtle UI rendering bugs and state mismatches.'
                ]}
            />
        </>
    )

}