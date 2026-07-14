import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptTestingDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Testing JavaScript</DocTitle>

            <DocP>
                Automated testing verifies your code behaves correctly, both today and as it changes over time. The JavaScript ecosystem has several layers of testing, each verifying a different scope of your application, along with a mature set of tools for each layer.
            </DocP>

            <DocH2>Unit Testing</DocH2>
            <DocP>
                Unit tests verify a single, isolated piece of logic — usually one function or module — in complete isolation from the rest of the system (database, network, other modules), typically by mocking any dependencies.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// The function being tested
function add(a, b) {
  return a + b;
}

// A unit test for it, in Jest/Vitest style
test("add sums two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});`}
            />

            <DocH2>Integration Testing</DocH2>
            <DocP>
                Integration tests verify that multiple units work correctly together — for example, that a service function correctly talks to a (test) database, or that several modules combine to produce the right result.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Testing that a service correctly integrates with a database layer
test("createUser saves a user and returns it with an id", async () => {
  const user = await userService.createUser({ name: "Ava", email: "ava@test.com" });

  expect(user.id).toBeDefined();
  const fromDb = await db.users.findById(user.id);
  expect(fromDb.name).toBe("Ava");
});`}
            />
            <DocNote tone="info">
                A common mental model: unit tests are fast and numerous, checking small pieces in isolation. Integration tests are fewer, slower, and check that the pieces actually cooperate correctly — both are needed for confidence in a real application.
            </DocNote>

            <DocH2>Jest</DocH2>
            <DocP>
                A widely used, all-in-one testing framework — includes a test runner, assertion library, and built-in mocking, with zero configuration required for most JavaScript/React projects.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(1 + 2).toBe(3);
  });

  test("handles async code", async () => {
    const data = await fetchData();
    expect(data).toEqual({ success: true });
  });

  test("mocking a function", () => {
    const mockFn = jest.fn().mockReturnValue(42);
    expect(mockFn()).toBe(42);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});`}
            />

            <DocH2>Vitest</DocH2>
            <DocP>
                A newer test runner built specifically for Vite-based projects — designed to be a near drop-in replacement for Jest's API, but significantly faster thanks to leveraging Vite's native ES Module handling.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`import { describe, test, expect, vi } from "vitest";

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(1 + 2).toBe(3);
  });

  test("mocking with vi instead of jest", () => {
    const mockFn = vi.fn().mockReturnValue(42);
    expect(mockFn()).toBe(42);
  });
});`}
            />

            <DocH2>Mocha</DocH2>
            <DocP>
                A flexible, older, and still widely-used test runner that intentionally leaves assertions and mocking to separate libraries (commonly paired with Chai below) rather than bundling everything together like Jest.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const assert = require("assert");

describe("Calculator", function () {
  it("should add two numbers", function () {
    assert.strictEqual(1 + 2, 3);
  });

  it("should handle async code", async function () {
    const result = await fetchData();
    assert.ok(result.success);
  });
});`}
            />

            <DocH2>Chai</DocH2>
            <DocP>
                An assertion library commonly paired with Mocha (which doesn't ship its own assertions), offering three different, readable assertion styles.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const { expect, assert, should } = require("chai");

// "expect" style — most popular, chainable and readable
expect(5).to.equal(5);
expect([1, 2, 3]).to.have.lengthOf(3);
expect({ name: "Ava" }).to.have.property("name");

// "assert" style — closer to Node's built-in assert
assert.equal(5, 5);
assert.isArray([1, 2, 3]);

// "should" style — extends Object.prototype (less commonly used today)
(5).should.equal(5);`}
            />

            <DocH2>Cypress</DocH2>
            <DocP>
                An end-to-end (E2E) testing tool that runs directly inside a real browser, letting you write tests that interact with your app exactly as a user would — clicking, typing, and asserting on the rendered UI.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`describe("Login flow", () => {
  it("logs a user in successfully", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("ava@test.com");
    cy.get("input[name=password]").type("securepass123");
    cy.get("button[type=submit]").click();

    cy.url().should("include", "/dashboard");
    cy.contains("Welcome back, Ava").should("be.visible");
  });
});`}
            />

            <DocH2>Playwright</DocH2>
            <DocP>
                A newer end-to-end testing tool from Microsoft, supporting multiple browser engines (Chromium, Firefox, WebKit) from a single API, with strong built-in support for parallel execution and auto-waiting for elements.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const { test, expect } = require("@playwright/test");

test("logs a user in successfully", async ({ page }) => {
  await page.goto("/login");
  await page.fill("input[name=email]", "ava@test.com");
  await page.fill("input[name=password]", "securepass123");
  await page.click("button[type=submit]");

  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByText("Welcome back, Ava")).toBeVisible();
});`}
            />
            <DocNote tone="info">
                Choosing tools: Jest or Vitest for unit/integration testing (Vitest if you're already on Vite), Mocha + Chai as a flexible older alternative, and Cypress or Playwright for end-to-end tests that verify the whole app works correctly in a real browser. Playwright's multi-browser support and speed have made it increasingly popular over Cypress for new projects.
            </DocNote>
        </>
    );
}
