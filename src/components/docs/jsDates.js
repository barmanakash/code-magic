import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptDatesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Dates in JavaScript</DocTitle>

            <DocP>
                JavaScript represents dates and times using the built-in `Date` object. Internally, every `Date` is just a single number — the milliseconds elapsed since the Unix epoch (midnight, January 1, 1970, UTC) — with a rich set of methods layered on top for reading and formatting it.
            </DocP>

            <DocH2>Date Object</DocH2>
            <DocP>Dates are created using the `new Date()` constructor, which accepts several different forms of input.</DocP>
            <CodeBlock
                language="javascript"
                code={`new Date();                          // current date & time
new Date("2026-01-15");               // parsed from an ISO date string
new Date("2026-01-15T10:30:00Z");      // parsed with time & UTC marker
new Date(2026, 0, 15);                  // year, month (0-indexed!), day → Jan 15, 2026
new Date(2026, 0, 15, 10, 30, 0);        // + hours, minutes, seconds
new Date(1768435800000);                  // from a millisecond timestamp`}
            />
            <DocNote tone="warning">
                The month argument in `new Date(year, month, day)` is zero-indexed — January is `0` and December is `11`. This is one of the most common sources of off-by-one bugs with the Date API.
            </DocNote>

            <DocH2>Current Date</DocH2>
            <DocP>Calling `new Date()` with no arguments returns an object representing the exact current date and time.</DocP>
            <CodeBlock
                language="javascript"
                code={`const now = new Date();
console.log(now); // e.g. "Tue Jul 14 2026 10:30:00 GMT+0530 (India Standard Time)"

// Get individual current components
now.getFullYear();  // 2026
now.getMonth();       // 6 (July, zero-indexed)
now.getDate();         // 14
now.getDay();           // 2 (day of week, 0 = Sunday)`}
            />

            <DocH2>Formatting Dates</DocH2>
            <DocP>
                Raw `Date` objects print in a verbose, locale-dependent format. For anything user-facing, use `toLocaleDateString()`/`toLocaleString()` (built-in, locale-aware) or the more powerful `Intl.DateTimeFormat` API.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const date = new Date(2026, 6, 14);

date.toISOString();          // "2026-07-14T00:00:00.000Z" — standard, machine-readable
date.toDateString();          // "Tue Jul 14 2026"
date.toLocaleDateString();     // "7/14/2026" (format depends on locale/browser)

date.toLocaleDateString("en-GB");                 // "14/07/2026"
date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});                                                  // "July 14, 2026"

new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(date);                                     // "Tuesday, July 14, 2026"`}
            />

            <DocH2>Date Methods</DocH2>
            <DocP>The `Date` object exposes getter and setter methods for reading or modifying its individual components.</DocP>
            <CodeBlock
                language="javascript"
                code={`const d = new Date(2026, 6, 14, 10, 30, 0);

// Getters
d.getFullYear();     // 2026
d.getMonth();          // 6
d.getDate();             // 14 (day of the month)
d.getDay();               // 2 (day of the week)
d.getHours();              // 10
d.getMinutes();             // 30
d.getSeconds();              // 0
d.getTime();                   // milliseconds since epoch

// Setters — mutate the Date object in place
d.setFullYear(2027);
d.setMonth(0);           // January
d.setDate(1);

// Date arithmetic — add 7 days
const nextWeek = new Date(d);
nextWeek.setDate(nextWeek.getDate() + 7);`}
            />

            <DocH2>Timezones</DocH2>
            <DocP>
                A `Date` object always stores a single, absolute moment in time internally (UTC milliseconds) — it does not "carry" a timezone. What changes with timezone is only how that moment is <em>displayed</em>.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const date = new Date();

date.getTimezoneOffset();   // minutes between UTC and local time (e.g. -330 for IST)

// UTC-specific getters, unaffected by the user's local timezone
date.getUTCFullYear();
date.getUTCHours();

// Display the same moment in a specific timezone
date.toLocaleString("en-US", { timeZone: "America/New_York" });
date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });`}
            />
            <DocNote tone="info">
                For serious timezone-heavy applications (recurring events, DST edge cases across regions), the native Date API is limited. Libraries like `date-fns-tz`, `luxon`, or the newer built-in `Temporal` API (still stabilizing) handle these cases far more reliably.
            </DocNote>

            <DocH2>Timestamps</DocH2>
            <DocP>
                A timestamp is the number of milliseconds since the Unix epoch — a single number that unambiguously represents a moment in time, independent of any timezone or display format. Ideal for storing dates in databases or comparing two moments.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`Date.now();                    // current timestamp in ms, e.g. 1789379400000
new Date().getTime();            // same thing, via an instance method
new Date(2026, 6, 14).getTime();  // timestamp for a specific date

// Comparing two dates using timestamps
const start = new Date(2026, 0, 1).getTime();
const end = new Date(2026, 11, 31).getTime();
const daysBetween = (end - start) / (1000 * 60 * 60 * 24); // ~364

// Measuring elapsed time
const t0 = Date.now();
// ...some operation...
const elapsedMs = Date.now() - t0;`}
            />
        </>
    );
}
