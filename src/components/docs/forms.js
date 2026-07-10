import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';

export default function Forms() {
    return (
        <>
            <DocTitle eyebrow="Get started">Forms in React</DocTitle>
            <DocP>Forms handle user input and data submission. React supports two distinct design patterns for managing input fields, tracking validation states, and executing submission workflows.</DocP>

            <DocH2>Controlled vs Uncontrolled Components</DocH2>
            <DocList
                items={[
                    'Controlled Components: The recommended React pattern where the form input\'s value is entirely driven by local component state (via useState) and synchronized using an onChange handler.',
                    'Uncontrolled Components: A pattern where the form data is handled directly by the browser\'s DOM. Developers use React references (useRef Hook) to pull the input values whenever they need them instead of tracking updates on every keystroke.'
                ]}
            />

            <DocH2>Validation & Submission Logic</DocH2>
            <DocList
                items={[
                    'Form Validation: The process of verifying user data quality (such as checking email formats or requiring minimum password lengths) before processing it, usually managed through local conditional state or third-party validation schemas.',
                    'Form Submission: Triggered by an onSubmit handler attached to the <form> wrapper. This logic standardly intercepts the native element event to package data and dispatch network requests.'
                ]}
            />

            <DocH2>Standard Implementation Commands & Utilities</DocH2>
            <DocP>While native forms are built with standard hooks, real-world development relies heavily on ecosystem validation utilities to manage complex form architecture:</DocP>
            <DocList
                items={[
                    'e.preventDefault() : The essential method called inside your submit function to stop the browser\'s native behavior of reloading the entire webpage.',
                    'npm install react-hook-form yup : Command to install React Hook Form and Yup, the industry standard libraries used to manage advanced form validation, error states, and performance optimization.'
                ]}
            />
        </>
    )
}