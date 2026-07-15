import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptBestPracticesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">JavaScript Best Practices</DocTitle>

            <DocP>
                Writing code that works is only half the job — writing code that's clean, readable, and maintainable is what keeps a codebase pleasant to work in as it grows and as more people touch it. These are the practices experienced JavaScript developers apply consistently.
            </DocP>

            <DocH2>Clean Code</DocH2>
            <DocP>
                Clean code favors clarity over cleverness — a piece of code should be easy to read and understand on its own, without requiring the reader to mentally trace through complex logic.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Hard to read — clever, but opaque
const r = a.filter(x => x.s === "a").map(x => x.n).reduce((s, n) => s + n, 0);

// Clean — descriptive names, each step is self-explanatory
const totalActiveScore = users
  .filter(user => user.status === "active")
  .map(user => user.score)
  .reduce((sum, score) => sum + score, 0);`}
            />
            <DocList
                items={[
                    'Prefer many small, single-purpose functions over one large function doing everything.',
                    'Avoid deeply nested conditionals — use early returns to reduce nesting depth.',
                    'Keep functions short enough to understand at a glance, typically under 20-30 lines as a rough guideline.',
                ]}
            />

            <DocH2>Naming Conventions</DocH2>
            <DocP>
                Good names eliminate the need for many comments — the code explains itself.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Poor naming
const d = new Date();
const arr = getUsers();
function calc(x, y) { return x * y * 0.1; }

// Clear naming
const currentDate = new Date();
const activeUsers = getUsers();
function calculateDiscount(price, quantity) { return price * quantity * 0.1; }

// Convention summary:
// camelCase        — variables and functions:    firstName, calculateTotal
// PascalCase        — classes and components:      UserProfile, ShoppingCart
// UPPER_SNAKE_CASE     — true constants:               MAX_RETRIES, API_BASE_URL
// isX / hasX / canX      — booleans:                       isLoading, hasPermission, canEdit`}
            />

            <DocH2>Modular Code</DocH2>
            <DocP>
                Breaking code into small, focused, independently reusable modules makes a codebase easier to navigate, test, and reason about.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Instead of one giant file with everything mixed together...
// userService.js — handles user-related API calls only
export async function getUser(id) { /* ... */ }
export async function updateUser(id, data) { /* ... */ }

// validators.js — pure validation logic, no side effects
export function isValidEmail(email) { /* ... */ }

// formatters.js — pure display/formatting logic
export function formatCurrency(amount) { /* ... */ }`}
            />
            <DocNote tone="info">
                A useful rule of thumb: a module should have a single, clear responsibility. If you struggle to describe what a file does in one sentence without using "and", it's probably doing too much.
            </DocNote>

            <DocH2>Error Handling</DocH2>
            <DocP>
                Robust error handling anticipates failure rather than assuming the happy path always happens, and fails in a way that's debuggable rather than silent.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Risky — silently swallows the actual problem
async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    return await response.json();
  } catch {
    return null; // caller has no idea WHY this failed
  }
}

// Better — validates, checks status, and surfaces useful context
async function getUser(id) {
  if (!id) throw new Error("getUser requires a valid id");

  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error(\`Failed to fetch user \${id}: HTTP \${response.status}\`);
  }
  return response.json();
}`}
            />

            <DocH2>Performance</DocH2>
            <DocP>
                Write clear code first, then optimize the parts that are actually measured to be slow — premature optimization often makes code harder to read for negligible real-world benefit.
            </DocP>
            <DocList
                items={[
                    'Avoid unnecessary work inside loops — move calculations that don\'t depend on the loop variable outside of it.',
                    'Debounce or throttle expensive handlers tied to frequent events (typing, scrolling, resizing).',
                    'Lazy-load and code-split large, rarely-used modules instead of shipping everything upfront.',
                    'Measure before optimizing — use the Performance panel or `performance.now()` to confirm where time is actually being spent, rather than guessing.',
                ]}
            />

            <DocH2>Readability</DocH2>
            <DocP>
                Code is read far more often than it's written — optimizing for the next reader (often yourself, months later) pays off repeatedly.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Dense, requires mental parsing
if (u && u.role === "admin" && u.active && !u.suspended) { ... }

// Readable — the intent is immediately obvious
const isActiveAdmin = user
  && user.role === "admin"
  && user.active
  && !user.suspended;

if (isActiveAdmin) { ... }`}
            />
            <DocList
                items={[
                    'Consistent formatting (enforced automatically via Prettier) removes an entire category of unnecessary diffs and debates.',
                    'A linter like ESLint catches common mistakes and enforces consistent style across a whole team automatically.',
                    'Comments should explain WHY something is done a certain way, not WHAT the code does — the code itself should already make the "what" clear.',
                ]}
            />

            <DocH2>Maintainability</DocH2>
            <DocP>
                Maintainable code is easy to change safely — new features can be added and bugs fixed without unintended side effects rippling through unrelated parts of the app.
            </DocP>
            <DocList
                items={[
                    'Avoid tight coupling — a change in one module shouldn\'t require changes across many unrelated files.',
                    'Write tests for critical logic, so refactors can be made with confidence rather than fear.',
                    'Avoid "magic numbers/strings" scattered through code — extract them into named constants.',
                    'Keep dependencies (npm packages) up to date and minimal — every dependency is a maintenance liability and a potential security surface.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`// Magic numbers — unclear intent, easy to get wrong when changed
if (user.age >= 18) { ... }
setTimeout(fn, 86400000);

// Named constants — self-documenting, single source of truth
const LEGAL_ADULT_AGE = 18;
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

if (user.age >= LEGAL_ADULT_AGE) { ... }
setTimeout(fn, ONE_DAY_IN_MS);`}
            />

            <DocH2>Documentation</DocH2>
            <DocP>
                Documentation communicates intent and usage to other developers (and your future self) — ranging from inline comments to dedicated doc comments that power editor autocomplete.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`/**
 * Calculates the total price including tax.
 * @param {number} price - The base price before tax.
 * @param {number} taxRate - The tax rate as a decimal (e.g. 0.08 for 8%).
 * @returns {number} The total price including tax.
 */
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

// JSDoc comments like this power IDE autocomplete/hover documentation,
// even in plain JavaScript projects without TypeScript`}
            />
            <DocNote tone="info">
                A well-maintained README (setup instructions, project structure, key conventions) is often more valuable than exhaustive inline comments — new contributors read it first, before diving into individual files.
            </DocNote>
        </>
    );
}
