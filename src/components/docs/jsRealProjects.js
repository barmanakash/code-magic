import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptRealProjectsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Real Projects to Practice JavaScript</DocTitle>

            <DocP>
                Reading concepts only goes so far — building small, complete projects is what turns knowledge into intuition. Below are ten classic beginner-to-intermediate projects, each highlighting a different set of concepts, with the core logic pattern for each to help you get started.
            </DocP>

            <DocH2>Calculator</DocH2>
            <DocP>A basic arithmetic calculator with a button-driven UI.</DocP>
            <DocList
                items={[
                    'Concepts: DOM manipulation, event delegation, string-to-number parsing, operator precedence.',
                    'Stretch goals: keyboard input support, decimal handling, a running history of calculations.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`function calculate(a, operator, b) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return b;
  }
}`}
            />

            <DocH2>Todo App</DocH2>
            <DocP>A classic list app for adding, completing, and removing tasks.</DocP>
            <DocList
                items={[
                    'Concepts: array state management, rendering lists dynamically, localStorage persistence, form handling.',
                    'Stretch goals: filtering (all/active/completed), drag-to-reorder, due dates.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo(text) {
  todos.push({ id: Date.now(), text, completed: false });
  saveAndRender();
}

function toggleTodo(id) {
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  render(todos);
}`}
            />

            <DocH2>Weather App</DocH2>
            <DocP>Fetches and displays current weather for a searched city using a public API.</DocP>
            <DocList
                items={[
                    'Concepts: Fetch API, async/await, error handling, Geolocation API for "use my location".',
                    'Stretch goals: 5-day forecast, unit toggle (°C/°F), search history.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`async function getWeather(city) {
  const response = await fetch(\`https://api.example.com/weather?city=\${city}\`);
  if (!response.ok) throw new Error("City not found");
  return response.json();
}`}
            />

            <DocH2>Notes App</DocH2>
            <DocP>Create, edit, and delete short text notes, persisted locally.</DocP>
            <DocList
                items={[
                    'Concepts: CRUD operations, localStorage/IndexedDB, debounced auto-save while typing.',
                    'Stretch goals: search/filter notes, color-coded categories, markdown rendering.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`function saveNote(id, content) {
  const notes = JSON.parse(localStorage.getItem("notes")) || {};
  notes[id] = { content, updatedAt: Date.now() };
  localStorage.setItem("notes", JSON.stringify(notes));
}
const debouncedSave = debounce(saveNote, 500); // avoid saving on every keystroke`}
            />

            <DocH2>Quiz App</DocH2>
            <DocP>Presents multiple-choice questions one at a time and scores the result.</DocP>
            <DocList
                items={[
                    'Concepts: state machines (question index, score, selected answer), timers per question, conditional rendering.',
                    'Stretch goals: a countdown timer per question, categories/difficulty selection, a results breakdown screen.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`let currentIndex = 0;
let score = 0;

function answerQuestion(selectedOption) {
  if (selectedOption === questions[currentIndex].correctAnswer) score++;
  currentIndex++;
  currentIndex < questions.length ? renderQuestion() : renderResults(score);
}`}
            />

            <DocH2>Stopwatch</DocH2>
            <DocP>A start/stop/reset stopwatch with lap tracking.</DocP>
            <DocList
                items={[
                    'Concepts: setInterval/clearInterval, precise elapsed-time tracking with timestamps (not just incrementing a counter), formatting milliseconds into mm:ss.',
                    'Stretch goals: lap times list, a countdown timer mode.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`let startTime, elapsed = 0, intervalId;

function start() {
  startTime = Date.now() - elapsed;
  intervalId = setInterval(() => {
    elapsed = Date.now() - startTime;
    render(elapsed);
  }, 100);
}

function stop() {
  clearInterval(intervalId);
}`}
            />
            <DocNote tone="info">
                Notice the pattern above — tracking elapsed time via `Date.now()` differences rather than just counting `setInterval` ticks. This avoids drift, since `setInterval` isn't perfectly precise over long durations.
            </DocNote>

            <DocH2>Expense Tracker</DocH2>
            <DocP>Log income/expenses and see a running balance and category breakdown.</DocP>
            <DocList
                items={[
                    'Concepts: array reduce for totals, form validation, data visualization (a simple chart library or hand-rolled bar chart), localStorage.',
                    'Stretch goals: monthly filtering, category-based pie chart, CSV export.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`function getBalance(transactions) {
  return transactions.reduce((total, t) => {
    return t.type === "income" ? total + t.amount : total - t.amount;
  }, 0);
}`}
            />

            <DocH2>E-commerce Cart</DocH2>
            <DocP>Browse products, add/remove from a cart, and see a running total.</DocP>
            <DocList
                items={[
                    'Concepts: state management across multiple components/views, quantity updates, discount/coupon logic, cart persistence.',
                    'Stretch goals: product filtering/sorting, a checkout flow, stock validation.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`function addToCart(cart, product, quantity = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
    return [...cart];
  }
  return [...cart, { ...product, quantity }];
}

function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}`}
            />

            <DocH2>Chat Application</DocH2>
            <DocP>Real-time messaging between users using WebSocket.</DocP>
            <DocList
                items={[
                    'Concepts: WebSocket connections, real-time state updates, message history, typing indicators.',
                    'Stretch goals: multiple rooms/channels, online user presence, message read receipts.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`const socket = new WebSocket("wss://chat.example.com");

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  renderMessage(message);
});

function sendMessage(text) {
  socket.send(JSON.stringify({ text, sender: currentUser, timestamp: Date.now() }));
}`}
            />

            <DocH2>Dashboard</DocH2>
            <DocP>A data dashboard summarizing key metrics with charts and filters.</DocP>
            <DocList
                items={[
                    'Concepts: fetching and transforming data, charting (a library like Chart.js or a hand-rolled SVG chart), date-range filtering, responsive layout.',
                    'Stretch goals: real-time updates via WebSocket/SSE, exportable reports, customizable widget layout.',
                ]}
            />
            <CodeBlock
                language="javascript"
                code={`async function loadDashboardData(dateRange) {
  const response = await fetch(\`/api/metrics?from=\${dateRange.from}&to=\${dateRange.to}\`);
  const data = await response.json();
  renderChart(data.revenue);
  renderSummaryCards(data.totals);
}`}
            />

            <DocNote tone="info">
                Build these roughly in the order listed — each one reuses concepts from the previous ones while introducing something new (Calculator/Todo cover fundamentals, Weather/Chat introduce networking, Dashboard/E-commerce combine everything into a more complete application).
            </DocNote>
        </>
    );
}
