import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptTypeConversionDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Type Conversion in JavaScript</DocTitle>

            <DocP>
                Type conversion (also called type coercion) is the process of changing a value from one data type to another — for example, turning the string `"5"` into the number `5`. JavaScript performs this both automatically (implicitly) and on request (explicitly).
            </DocP>

            <DocH2>Implicit Conversion (Coercion)</DocH2>
            <DocP>
                Implicit conversion happens automatically when JavaScript expects a certain type and coerces a value to match, often as a side effect of an operator.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`"5" + 3;     // "53"   — number is coerced to a string (+ prefers string concat)
"5" - 3;     // 2       — string is coerced to a number (- only works numerically)
"5" * "2";  // 10      — both strings coerced to numbers
true + 1;    // 2       — true becomes 1
false + 1;   // 1       — false becomes 0
"5" == 5;    // true    — loose equality coerces types before comparing`}
            />
            <DocNote tone="warning">
                Implicit coercion is one of the most common sources of confusing JavaScript bugs. This is exactly why `===`/`!==` (which skip coercion) are recommended over `==`/`!=`.
            </DocNote>

            <DocH2>Explicit Conversion</DocH2>
            <DocP>
                Explicit conversion is when you intentionally convert a value's type using a built-in function or constructor, making your intent clear in the code.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`String(123);     // "123"
Number("123");   // 123
Boolean(1);       // true
Boolean(0);       // false`}
            />

            <DocH2>String Conversion</DocH2>
            <DocP>Converts any value into its string representation. Can be done with `String()`, template literals, or `.toString()`.</DocP>
            <CodeBlock
                language="javascript"
                code={`String(123);        // "123"
String(true);       // "true"
String(null);       // "null"
String(undefined);  // "undefined"
String([1, 2, 3]);  // "1,2,3"
String({});          // "[object Object]"

(123).toString();    // "123"
\`\${123}\`;             // "123" — template literal implicitly converts to string`}
            />

            <DocH2>Number Conversion</DocH2>
            <DocP>Converts a value into its numeric representation. Can be done with `Number()`, the unary `+` operator, `parseInt()`, or `parseFloat()`.</DocP>
            <CodeBlock
                language="javascript"
                code={`Number("123");      // 123
Number("123.45");   // 123.45
Number("");          // 0
Number("abc");       // NaN
Number(true);         // 1
Number(false);        // 0
Number(null);          // 0
Number(undefined);     // NaN

+"42";                  // 42 — unary plus, a common shorthand

parseInt("42px");       // 42  — parses leading digits, ignores the rest
parseFloat("3.14 rem"); // 3.14`}
            />

            <DocH2>Boolean Conversion</DocH2>
            <DocP>Converts a value into `true` or `false` based on JavaScript's truthy/falsy rules. Can be done with `Boolean()` or the double-negation trick `!!value`.</DocP>
            <CodeBlock
                language="javascript"
                code={`Boolean(1);        // true
Boolean(0);        // false
Boolean("hello");  // true
Boolean("");       // false
Boolean(null);     // false
Boolean(undefined);// false

!!"hello";          // true — common shorthand for Boolean()
!!0;                 // false`}
            />

            <DocH2>Truthy</DocH2>
            <DocP>
                A "truthy" value is any value that converts to `true` when evaluated in a boolean context (like an `if` condition). In practice, nearly everything is truthy except the specific falsy values listed below.
            </DocP>
            <DocList
                items={[
                    'Any non-zero number: `1`, `-1`, `3.14`',
                    'Any non-empty string: `"hello"`, `"0"`, `"false"` (yes — even the string "false" is truthy!)',
                    'All objects and arrays, even empty ones: `{}`, `[]`',
                    'Functions',
                ]}
            />

            <DocH2>Falsy</DocH2>
            <DocP>
                There are exactly eight falsy values in JavaScript — everything else is truthy. Memorizing this short list is far easier than memorizing what's truthy.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`false
0
-0
0n        // BigInt zero
""        // empty string
null
undefined
NaN`}
            />
            <DocNote tone="info">
                Common gotcha: `if (someArray.length)` relies on truthy/falsy — `0` (empty array length) is falsy, so this correctly detects an empty array. But be careful with values like the string `"0"` or an empty object `{}`, which are truthy despite "feeling" empty.
            </DocNote>
        </>
    );
}
