import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptNumbersDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Numbers in JavaScript</DocTitle>

            <DocP>
                JavaScript has a single `Number` type for both integers and floating-point values, based on the IEEE 754 double-precision format. Alongside the primitive type, JavaScript provides two built-in objects — `Number` and `Math` — packed with useful constants and methods for working with numeric data.
            </DocP>

            <DocH2>Number Object</DocH2>
            <DocP>
                `Number` is both a wrapper object and a namespace for numeric constants and utility methods.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`Number.MAX_SAFE_INTEGER;   // 9007199254740991
Number.MIN_SAFE_INTEGER;   // -9007199254740991
Number.MAX_VALUE;          // largest representable number
Number.MIN_VALUE;          // smallest positive representable number
Number.EPSILON;             // smallest difference between two representable numbers
Number.POSITIVE_INFINITY;   // Infinity
Number.NEGATIVE_INFINITY;   // -Infinity
Number.NaN;                  // NaN`}
            />

            <DocH2>Math Object</DocH2>
            <DocP>
                `Math` is a built-in object (not a constructor — you never write `new Math()`) providing mathematical constants and functions.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`Math.PI;              // 3.141592653589793
Math.E;                // 2.718281828459045

Math.round(4.5);        // 5
Math.floor(4.9);        // 4
Math.ceil(4.1);          // 5
Math.trunc(4.9);          // 4  — removes the decimal part (no rounding)

Math.abs(-5);              // 5
Math.pow(2, 10);            // 1024
Math.sqrt(16);                // 4
Math.cbrt(27);                 // 3

Math.max(1, 5, 3);               // 5
Math.min(1, 5, 3);                // 1

Math.random();                     // pseudo-random float between 0 (inclusive) and 1 (exclusive)`}
            />

            <DocH2>Number Methods</DocH2>
            <DocP>Instance methods called directly on a number value for formatting and validation.</DocP>
            <CodeBlock
                language="javascript"
                code={`(3.14159).toFixed(2);       // "3.14"  — rounds to N decimal places, returns a STRING
(1234.5678).toPrecision(6);  // "1234.57" — total significant digits
(255).toString(16);            // "ff"    — converts to a different base (hex)
(255).toString(2);              // "11111111" — binary

Number.isInteger(5);              // true
Number.isInteger(5.5);            // false
Number.isSafeInteger(2 ** 53);    // false — beyond MAX_SAFE_INTEGER
Number.isFinite(10);               // true — stricter than global isFinite(), no coercion
Number.isNaN(NaN);                  // true — stricter than global isNaN(), no coercion`}
            />

            <DocH2>Parsing Numbers</DocH2>
            <DocP>Extracts a numeric value from a string, useful when handling user input or text-based data sources.</DocP>
            <CodeBlock
                language="javascript"
                code={`parseInt("42px");        // 42  — reads leading digits, stops at first invalid character
parseInt("3.99");         // 3   — parseInt truncates decimals entirely
parseInt("0x1F");          // 31  — hex prefix is recognized automatically
parseInt("101", 2);         // 5   — second argument specifies the radix (base 2 = binary)

parseFloat("3.14 rem");      // 3.14 — reads leading float, stops at first invalid character

Number("42");                  // 42  — strict: entire string must be a valid number, or you get NaN
Number("42px");                 // NaN — unlike parseInt, no partial parsing`}
            />
            <DocNote tone="info">
                Use `Number()` when you need strict, all-or-nothing conversion (e.g. validating clean form input). Use `parseInt()`/`parseFloat()` when the string may have trailing non-numeric characters, like `"42px"` from a CSS value.
            </DocNote>

            <DocH2>NaN</DocH2>
            <DocP>
                `NaN` stands for "Not a Number" — it's a special numeric value representing the result of an invalid or undefined mathematical operation. Counter-intuitively, `typeof NaN` is `"number"`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`0 / 0;              // NaN
Math.sqrt(-1);        // NaN
Number("abc");         // NaN
"abc" * 2;               // NaN

NaN === NaN;              // false! — NaN is never equal to anything, including itself
Number.isNaN(NaN);          // true — the correct way to check for NaN
isNaN("hello");               // true — but the global isNaN() coerces first, less reliable`}
            />

            <DocH2>Infinity</DocH2>
            <DocP>
                `Infinity` represents a mathematical value larger than any finite number, typically the result of dividing by zero or exceeding `Number.MAX_VALUE`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`1 / 0;                // Infinity
-1 / 0;                // -Infinity
Infinity + 1;            // Infinity
Infinity > Number.MAX_VALUE; // true

Number.isFinite(Infinity);    // false
Number.isFinite(100);           // true`}
            />

            <DocH2>Random Numbers</DocH2>
            <DocP>
                `Math.random()` returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). It's commonly scaled and rounded to produce random integers within a specific range.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`Math.random();                    // e.g. 0.7294871625...

// Random integer between 0 and 9 (inclusive)
Math.floor(Math.random() * 10);

// Random integer between min and max (inclusive) — general-purpose formula
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomInt(1, 6); // simulates a dice roll`}
            />
            <DocNote tone="warning">
                `Math.random()` is not cryptographically secure. For anything security-sensitive (tokens, passwords, keys), use the Web Crypto API's `crypto.getRandomValues()` instead.
            </DocNote>
        </>
    );
}
