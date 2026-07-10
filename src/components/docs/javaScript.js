import React from 'react'
import { DocTitle, DocP, DocH2, DocList, DocNote } from '../../components/docs/DocPrimitives';


export default function JavaScript() {
    return (
        <>
            <DocTitle eyebrow="Get started">JSX (JavaScript XML)</DocTitle>
            <DocP>JSX is a syntax extension for JavaScript that allows you to write HTML-like structure directly inside React components, combining layout and logic seamlessly.</DocP>

            <DocH2>Core Concept & Syntax</DocH2>
            <DocList
                items={[
                    'Syntax: Looks like HTML but executes as JavaScript, compiling down to standard React.createElement() method calls behind the scenes.',
                    'Expressions: Any valid JavaScript expression (math, function calls, ternary operators) can be evaluated dynamically inside JSX by wrapping it in curly braces { }.',
                    'Variables: You can inject variables directly into content or attributes using curly braces without quotes (e.g., <img src={userAvatar} />).',
                    'Comments: Written using JavaScript block comments wrapped within curly braces inside the tags: {/* This is a comment in JSX */}.',
                    'Fragments: Empty tags (<> and </>) used to group multiple elements together without adding unnecessary, redundant wrapper nodes to the actual DOM.',
                    'Nested JSX: Elements can be deeply nested inside each other just like standard HTML tree structures, provided they maintain a single parent container.'
                ]}
            />

            <DocH2>Strict Rules of JSX</DocH2>
            <DocList
                items={[
                    'Single Root Element: A component must return a single root element or a Fragment; you cannot return multiple adjacent top-level JSX tags.',
                    'Strict Tag Closing: Every single JSX element must be explicitly closed. Tags with no children must end with a self-closing forward slash (e.g., <br />, <input />, <img />).',
                    'camelCase Naming: Because JSX turns into JavaScript, standard HTML attributes must follow camelCase naming conventions (e.g., class becomes className, onclick becomes onClick).',
                    'Inline Style Objects: The style attribute accepts a JavaScript object instead of a string, written using double curly braces (e.g., style={{ fontSize: "14px" }}).'
                ]}
            />

        </>
    )
}