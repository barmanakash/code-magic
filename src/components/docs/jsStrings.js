import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptStringsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Strings in JavaScript</DocTitle>

            <DocP>
                Strings represent textual data and are one of the most frequently used data types in any JavaScript program. They are immutable — every "modification" of a string actually produces a brand-new string rather than changing the original.
            </DocP>

            <DocH2>Creating Strings</DocH2>
            <DocP>Strings can be created using single quotes, double quotes, backticks, or the `String()` constructor/function.</DocP>
            <CodeBlock
                language="javascript"
                code={`const a = 'Hello';          // single quotes
const b = "Hello";           // double quotes
const c = \`Hello\`;            // backticks (template literal)
const d = String(123);        // "123" — via the String function
const e = new String("Hi");   // String object (rarely used — avoid this form)

typeof a; // "string"
typeof e; // "object" — 'new String()' creates a wrapper object, not a primitive`}
            />
            <DocNote tone="info">
                Single vs double quotes are functionally identical — pick one convention and stay consistent (many teams prefer single quotes, enforced via a linter like ESLint/Prettier).
            </DocNote>

            <DocH2>Template Literals</DocH2>
            <DocP>
                Introduced in ES6, template literals use backticks (`` ` ``) and support embedded expressions via `${}`, as well as multi-line strings without needing escape characters.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const name = "Ava";
const age = 25;

const message = \`\${name} is \${age} years old.\`;
// "Ava is 25 years old."

const multiline = \`This spans
multiple lines
without needing \\n\`;

const computed = \`Total: \${10 * 2}\`; // "Total: 20" — any expression works inside \${}`}
            />

            <DocH2>Escape Characters</DocH2>
            <DocP>
                Escape characters let you include special characters inside a string — like quotes, newlines, or tabs — that would otherwise conflict with the string's syntax.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`"She said \\"hello\\""; // She said "hello"
'It\\'s a test';         // It's a test
"Line 1\\nLine 2";       // newline
"Col1\\tCol2";            // tab
"Backslash: \\\\";         // literal backslash
"\\u00A9";                 // © — unicode escape`}
            />

            <DocH2>String Methods</DocH2>
            <DocP>Strings come with dozens of built-in methods for searching, transforming, and extracting text. Here are the most commonly used ones:</DocP>
            <CodeBlock
                language="javascript"
                code={`const str = "  Hello, World!  ";

str.length;                  // 18
str.trim();                   // "Hello, World!" — removes leading/trailing whitespace
str.toUpperCase();            // "  HELLO, WORLD!  "
str.toLowerCase();            // "  hello, world!  "
str.includes("World");        // true
str.indexOf("World");         // 9
str.slice(2, 7);               // "Hello"
str.split(", ");               // ["  Hello", "World!  "]
str.replace("World", "JS");    // "  Hello, JS!  "
str.replaceAll("l", "L");      // replaces all occurrences
str.charAt(0);                 // " "
str.startsWith("  Hello");     // true
str.endsWith("!  ");           // true
str.padStart(20, "*");          // pads to a target length
str.repeat(2);                   // repeats the whole string`}
            />

            <DocH2>Unicode</DocH2>
            <DocP>
                JavaScript strings are sequences of UTF-16 code units. Most characters (including emoji-adjacent basic symbols) map to a single code unit, but characters outside the Basic Multilingual Plane — like many emoji — are represented as a pair of code units (a "surrogate pair"), which can cause unexpected results with naive string operations.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const heart = "\\u2764";      // "❤"
const flag = "\\u{1F1FA}\\u{1F1F8}"; // "🇺🇸" — needs the \\u{...} extended syntax

const emoji = "😀";
emoji.length;                    // 2 — surrogate pair, NOT 1 as you might expect!
[...emoji].length;                // 1 — spreading iterates by actual Unicode code point

"café".normalize("NFC");          // normalizes accented characters to a consistent form`}
            />

            <DocH2>String Comparison</DocH2>
            <DocP>
                Strings are compared character by character based on their UTF-16 code unit values (essentially alphabetical/lexicographic order for common cases), using standard comparison operators or `localeCompare()` for locale-aware sorting.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`"apple" < "banana";     // true — lexicographic comparison
"Apple" < "apple";       // true — uppercase letters have lower char codes than lowercase

"apple" === "apple";     // true — strict equality checks exact character content

// Locale-aware comparison (important for sorting names, accented characters, etc.)
"café".localeCompare("cafe"); // non-zero — accounts for locale-specific ordering rules

const names = ["Zoe", "ava", "Ivy"];
names.sort();                     // ["Ivy", "Zoe", "ava"] — default sort is case-sensitive
names.sort((a, b) => a.localeCompare(b)); // proper alphabetical order regardless of case`}
            />
            <DocNote tone="warning">
                The default `.sort()` on an array of strings compares by UTF-16 code unit values, which puts all uppercase letters before all lowercase letters. Use `localeCompare()` (or `.toLowerCase()` both sides) for human-friendly alphabetical sorting.
            </DocNote>
        </>
    );
}
