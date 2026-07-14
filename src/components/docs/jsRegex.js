import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptRegexDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Regular Expressions in JavaScript</DocTitle>

            <DocP>
                A regular expression (regex) is a pattern used to match, search, and manipulate text. JavaScript has built-in support for regular expressions through the `RegExp` object and dedicated regex-aware string methods.
            </DocP>

            <DocH2>Syntax</DocH2>
            <DocP>
                Regular expressions can be written as a literal between forward slashes, or created dynamically with the `RegExp` constructor (useful when the pattern is built from a variable).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const pattern1 = /hello/;              // regex literal — most common way
const pattern2 = new RegExp("hello");     // constructor form
const pattern3 = new RegExp("hello", "i"); // constructor form with flags

pattern1.test("say hello there"); // true
"say hello there".match(pattern1); // returns match details or null`}
            />
            <DocNote tone="info">
                Use the literal syntax whenever the pattern is fixed at write-time. Use `new RegExp(...)` only when the pattern needs to be built dynamically, for example from user input or a variable.
            </DocNote>

            <DocH2>Flags</DocH2>
            <DocP>Flags, placed after the closing slash, modify how a pattern is matched.</DocP>
            <DocList
                items={[
                    'i — case-insensitive matching.',
                    'g — global matching, finds ALL matches instead of stopping at the first.',
                    'm — multiline mode, makes ^ and $ match the start/end of each line instead of the whole string.',
                    's — dotAll mode, makes the dot match newline characters too.',
                    'u — treats the pattern as full Unicode, important for emoji and non-Latin scripts.',
                    'y — sticky matching, matches exactly at the current position (lastIndex) only.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`/hello/i.test("HELLO");                 // true — case-insensitive
"a1 b2 c3".match(/[a-z]\\d/g);              // ["a1", "b2", "c3"] — all matches, not just first

const multiline = /^line/m;
multiline.test("first\\nline two");           // true — matches "line" at the start of ANY line`}
            />

            <DocH2>Character Classes</DocH2>
            <DocP>Character classes match a category of characters rather than one specific character.</DocP>
            <CodeBlock
                language="javascript"
                code={`/\\d/.test("5");        // true — digit (0-9)
/\\D/.test("a");         // true — non-digit
/\\w/.test("a");           // true — word character (letters, digits, underscore)
/\\W/.test("!");             // true — non-word character
/\\s/.test(" ");                // true — whitespace (space, tab, newline)
/\\S/.test("a");                  // true — non-whitespace

/[abc]/.test("b");                  // true — matches any ONE of a, b, or c
/[^abc]/.test("d");                   // true — matches anything EXCEPT a, b, or c
/[a-z]/.test("m");                      // true — any lowercase letter (range)
/[0-9]/.test("7");                        // true — any digit (equivalent to \\d)
/./.test("x");                              // true — any character except a newline (by default)`}
            />

            <DocH2>Quantifiers</DocH2>
            <DocP>Quantifiers specify how many times the preceding element should be matched.</DocP>
            <CodeBlock
                language="javascript"
                code={`/ab*/.test("a");         // true — b appears ZERO or more times
/ab+/.test("a");           // false — b must appear ONE or more times
/ab?/.test("ac");            // true — b appears ZERO or one time (optional)

/a{3}/.test("aaa");             // true — exactly 3 a's
/a{2,}/.test("aaaa");             // true — 2 or more a's
/a{2,4}/.test("aaa");               // true — between 2 and 4 a's (inclusive)

/^abc$/.test("abc");                  // true — ^ anchors to start, $ anchors to end
/\\bcat\\b/.test("the cat sat");         // true — \\b is a word boundary, avoids matching "category"

// Greedy vs lazy — greedy takes as much as possible, lazy takes as little as possible
"aaa".match(/a+/)[0];                     // "aaa" — greedy, matches all of it
"aaa".match(/a+?/)[0];                      // "a"   — lazy (the ? after + makes it non-greedy)`}
            />

            <DocH2>Groups</DocH2>
            <DocP>Groups let you capture a portion of a match separately, or apply a quantifier to a whole sequence at once.</DocP>
            <CodeBlock
                language="javascript"
                code={`// Capturing group — extracts the matched substring
const match = "2026-07-14".match(/(\\d{4})-(\\d{2})-(\\d{2})/);
match[0]; // "2026-07-14" — the full match
match[1]; // "2026" — first capturing group
match[2]; // "07"   — second capturing group

// Named groups — more readable than numeric indices
const namedMatch = "2026-07-14".match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);
namedMatch.groups.year;  // "2026"
namedMatch.groups.month; // "07"

// Non-capturing group — groups for the quantifier without capturing the result
/(?:ab)+/.test("abab"); // true — groups "ab" so + applies to the whole pair

// Alternation inside a group
/(cat|dog)/.test("I have a dog"); // true — matches EITHER "cat" or "dog"`}
            />

            <DocH2>RegExp Methods</DocH2>
            <DocP>Methods available both on RegExp objects and on strings for testing, matching, and replacing text.</DocP>
            <CodeBlock
                language="javascript"
                code={`// RegExp.prototype.test() — returns true/false
/\\d+/.test("abc123"); // true

// RegExp.prototype.exec() — returns detailed match info, or null
/\\d+/.exec("abc123"); // ["123", index: 3, input: "abc123", groups: undefined]

// String.prototype.match() — returns matches (behavior depends on the 'g' flag)
"a1 b2".match(/\\d/);      // ["1", index: 1, ...] — first match only, no 'g' flag
"a1 b2".match(/\\d/g);      // ["1", "2"] — all matches, with 'g' flag

// String.prototype.matchAll() — returns an iterator with FULL details for every match
[..."a1 b2".matchAll(/\\d/g)].map(m => m[0]); // ["1", "2"]

// String.prototype.replace() / replaceAll()
"2026-07-14".replace(/-/g, "/");    // "2026/07/14"
"hello world".replace(/(\\w+) (\\w+)/, "$2 $1"); // "world hello" — $1/$2 reference captured groups

// String.prototype.split()
"a1b22c333d".split(/\\d+/); // ["a", "b", "c", "d"]

// String.prototype.search() — returns the INDEX of the first match, or -1
"hello world".search(/world/); // 6`}
            />
            <DocNote tone="warning">
                When using the `g` flag with `exec()` or with a manually reused pattern, the RegExp object keeps track of its own `lastIndex` between calls, which can cause confusing bugs if you reuse the same RegExp object across unrelated strings. Prefer `matchAll()` when you need all matches with full detail.
            </DocNote>
        </>
    );
}
