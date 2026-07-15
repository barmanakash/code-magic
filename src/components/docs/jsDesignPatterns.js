import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptDesignPatternsDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Design Patterns in JavaScript</DocTitle>

            <DocP>
                Design patterns are reusable, well-tested solutions to common software design problems. They aren't code you copy-paste directly, but templates of thinking — recognizing the same patterns across codebases helps you communicate design decisions clearly and avoid reinventing solutions.
            </DocP>

            <DocH2>Module Pattern</DocH2>
            <DocP>
                Bundles related code together while keeping some parts private, exposing only a deliberate public interface — commonly implemented today using ES Modules, but historically done with an IIFE.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Classic IIFE-based module pattern (pre-ES6)
const CounterModule = (function () {
  let count = 0; // private — not accessible from outside

  return {
    increment() {
      return ++count;
    },
    reset() {
      count = 0;
    },
  };
})();

CounterModule.increment(); // 1
CounterModule.count;         // undefined — truly private

// Modern equivalent: an ES Module file achieves the same privacy naturally
// counter.js:  let count = 0; export function increment() { return ++count; }`}
            />

            <DocH2>Singleton</DocH2>
            <DocP>
                Ensures a class has only ONE instance throughout the application, and provides a single global point of access to it — useful for shared resources like a configuration object or a connection pool.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Database {
  static #instance;

  constructor() {
    if (Database.#instance) {
      return Database.#instance; // already exists — return the existing one
    }
    this.connection = "connected";
    Database.#instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();
db1 === db2; // true — both variables point to the SAME instance`}
            />

            <DocH2>Factory</DocH2>
            <DocP>
                Delegates object creation to a dedicated function, hiding the exact class/type being instantiated behind a simpler interface — useful when the type of object needed depends on runtime conditions.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class EmailNotification {
  send(msg) { return \`Sending email: \${msg}\`; }
}
class SmsNotification {
  send(msg) { return \`Sending SMS: \${msg}\`; }
}

function notificationFactory(type) {
  switch (type) {
    case "email": return new EmailNotification();
    case "sms": return new SmsNotification();
    default: throw new Error("Unknown notification type");
  }
}

const notifier = notificationFactory("email");
notifier.send("Hello!"); // "Sending email: Hello!" — caller never needed to know the class name`}
            />

            <DocH2>Observer</DocH2>
            <DocP>
                Defines a one-to-many relationship where multiple "observer" functions are notified automatically whenever a "subject" object's state changes — the foundation behind event systems, and libraries like RxJS.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Subject {
  #observers = [];

  subscribe(fn) {
    this.#observers.push(fn);
  }

  notify(data) {
    this.#observers.forEach((fn) => fn(data));
  }
}

const newsFeed = new Subject();
newsFeed.subscribe((article) => console.log("Reader A sees:", article));
newsFeed.subscribe((article) => console.log("Reader B sees:", article));

newsFeed.notify("Breaking News!"); // BOTH subscribers are notified automatically`}
            />
            <DocNote tone="info">
                DOM `addEventListener` is itself an implementation of the Observer pattern — the element is the subject, and each listener is an observer notified when the event fires.
            </DocNote>

            <DocH2>Strategy</DocH2>
            <DocP>
                Defines a family of interchangeable algorithms and lets the calling code select which one to use at runtime, without changing the code that uses them.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`const paymentStrategies = {
  creditCard: (amount) => \`Paid \${amount} with credit card\`,
  paypal: (amount) => \`Paid \${amount} with PayPal\`,
  crypto: (amount) => \`Paid \${amount} with crypto\`,
};

function processPayment(amount, strategy) {
  return paymentStrategies[strategy](amount); // strategy is swapped freely at runtime
}

processPayment(100, "paypal");     // "Paid 100 with PayPal"
processPayment(50, "crypto");        // "Paid 50 with crypto"`}
            />

            <DocH2>Decorator</DocH2>
            <DocP>
                Wraps an object or function to add new behavior dynamically, without modifying its original code — composing behavior by layering rather than inheritance.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function withLogging(fn) {
  return function (...args) {
    console.log("Calling with args:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const loggedAdd = withLogging(add); // 'add' is decorated with logging, unchanged itself
loggedAdd(2, 3); // logs the call and result, then returns 5`}
            />

            <DocH2>Command</DocH2>
            <DocP>
                Encapsulates a request (an action plus its parameters) as a standalone object, letting you queue, log, undo, or delay operations by treating "actions" as first-class data.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class AddTextCommand {
  constructor(editor, text) {
    this.editor = editor;
    this.text = text;
  }
  execute() {
    this.editor.content += this.text;
  }
  undo() {
    this.editor.content = this.editor.content.slice(0, -this.text.length);
  }
}

const editor = { content: "" };
const history = [];

function runCommand(command) {
  command.execute();
  history.push(command); // stored, so it can be undone later
}

runCommand(new AddTextCommand(editor, "Hello"));
history.pop().undo(); // undoes the last command`}
            />

            <DocH2>MVC (Model-View-Controller)</DocH2>
            <DocP>
                Separates an application into three interconnected parts: the Model (data and business logic), the View (what the user sees), and the Controller (handles input, updates the Model, refreshes the View).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// Model — owns the data and notifies of changes
const model = {
  items: [],
  addItem(item) {
    this.items.push(item);
    view.render(this.items);
  },
};

// View — purely responsible for displaying data
const view = {
  render(items) {
    console.log("Rendering:", items);
  },
};

// Controller — handles input, decides what the Model should do
const controller = {
  addItem(text) {
    model.addItem(text);
  },
};

controller.addItem("Buy milk"); // user action flows: Controller → Model → View`}
            />

            <DocH2>MVVM (Model-View-ViewModel)</DocH2>
            <DocP>
                Similar to MVC, but replaces the Controller with a ViewModel that exposes observable state directly to the View, which binds to it automatically — changes to the ViewModel's data update the View without manual DOM manipulation. This is the pattern behind reactive frameworks like Vue.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`// A simplified illustration of the MVVM idea using getters/setters
const viewModel = {
  _items: [],
  get items() {
    return this._items;
  },
  set items(value) {
    this._items = value;
    this.render(); // the "binding" — the View automatically reacts to changes
  },
  render() {
    console.log("View automatically updated:", this._items);
  },
};

viewModel.items = ["Buy milk"]; // setting the ViewModel's state auto-triggers a re-render

// Frameworks like Vue and React (with hooks) implement this idea at a MUCH
// more sophisticated level, using reactive state and virtual DOM diffing`}
            />
            <DocNote tone="info">
                Modern frontend frameworks blur these classic pattern boundaries — React, for example, doesn't map cleanly to MVC or MVVM, but borrows ideas from both (unidirectional data flow like MVC, reactive re-rendering like MVVM). Knowing the patterns still helps you reason about where state, logic, and rendering responsibilities should live.
            </DocNote>
        </>
    );
}
