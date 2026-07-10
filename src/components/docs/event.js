import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';

export default function Event() {

    return (
        <>
            <DocTitle eyebrow="Get started">Event Handling</DocTitle>
            <DocP>React manages user interactions through a declarative event system that mimics standard DOM events but uses camelCase naming and synthetic event wrapping for cross-browser consistency.</DocP>

            <DocH2>Common UI Events</DocH2>
            <DocList
                items={[
                    'onClick: Fires when an element (like a button, link, or div) is clicked by the user.',
                    'onChange: Fires instantly on form fields (<input>, <textarea>, <select>) whenever their value changes, making it essential for controlled components.',
                    'onSubmit: Fires when a <form> is submitted, usually combined with preventing the default browser page refresh behavior.',
                    'onMouseEnter: Fires when a mouse pointer moves over the boundary of an element, frequently used for hover effects and drop-down menus.',
                    'onKeyDown: Fires when the user presses any key down on the keyboard while the element has active focus, useful for shortcut keys and accessibility.'
                ]}
            />

            <DocH2>The Event Object</DocH2>
            <DocList
                items={[
                    'SyntheticEvent: React wraps native browser events in a cross-browser compatible SyntheticEvent object to ensure consistent behavior across all web platforms.',
                    'e.target.value: Accessible through the event object to read the current text or value inside form inputs during an onChange event.',
                    'e.preventDefault(): A vital method called inside onSubmit handlers to stop the browser from performing its native action, such as reloading the page on form submission.'
                ]}
            />
        </>
    )
}