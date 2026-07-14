import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptClassesDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Classes in JavaScript</DocTitle>

            <DocP>
                Classes, introduced in ES6, provide a cleaner syntax for creating objects and handling inheritance. Under the hood, JavaScript classes are still built on the language's existing prototype-based inheritance model — class syntax is essentially "syntactic sugar" over that system.
            </DocP>

            <DocH2>Class Syntax</DocH2>
            <DocP>
                A class is defined using the `class` keyword, and instances are created using `new`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

const person = new Person("Ava", 25);
person.greet(); // "Hi, I'm Ava"`}
            />
            <DocNote tone="info">
                Unlike function declarations, class declarations are NOT hoisted in a usable way — they remain in the Temporal Dead Zone until their definition is reached, just like `let`/`const`.
            </DocNote>

            <DocH2>Constructor</DocH2>
            <DocP>
                The `constructor` method runs automatically when a new instance is created with `new`, and is where you typically set up initial instance properties.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.createdAt = new Date(); // any setup logic can go here too
  }
}

const item = new Product("Book", 15);
item.createdAt; // set automatically when the instance was created`}
            />
            <DocNote tone="info">
                A class can have at most one `constructor` method. If omitted entirely, JavaScript provides a default empty constructor automatically.
            </DocNote>

            <DocH2>Methods</DocH2>
            <DocP>
                Methods are functions defined directly on the class body, automatically added to the class's prototype, and shared across all instances (rather than duplicated in memory per instance).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);
circle.getArea();            // 78.53...
circle.getCircumference();     // 31.41...`}
            />

            <DocH2>Inheritance</DocH2>
            <DocP>
                The `extends` keyword lets one class inherit properties and methods from another, enabling code reuse and "is-a" relationships between classes.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks.\`; // overrides the parent's speak() method
  }
}

const dog = new Dog("Rex");
dog.speak();               // "Rex barks."
dog instanceof Animal;       // true — Dog inherits from Animal`}
            />

            <DocH2>super</DocH2>
            <DocP>
                `super` is used inside a subclass to call the parent class's constructor or access its methods. When extending a class, `super()` must be called in the constructor before using `this`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound.\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal's constructor — required before using 'this'
    this.breed = breed;
  }

  speak() {
    const base = super.speak(); // calls the PARENT's speak() method
    return \`\${base} Specifically, it barks.\`;
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak(); // "Rex makes a sound. Specifically, it barks."`}
            />

            <DocH2>Static Methods</DocH2>
            <DocP>
                Static methods belong to the class itself, not to individual instances — commonly used for utility/factory functions related to the class.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class MathUtils {
  static square(n) {
    return n * n;
  }

  static PI = 3.14159; // static properties too (ES2022+)
}

MathUtils.square(5); // 25 — called directly on the class

const instance = new MathUtils();
instance.square(5); // TypeError: instance.square is not a function — not available on instances`}
            />

            <DocH2>Private Fields</DocH2>
            <DocP>
                Private fields (ES2022), prefixed with `#`, are only accessible from within the class itself — not from outside, and not even from subclasses.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class BankAccount {
  #balance = 0; // private field — truly inaccessible from outside

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
account.getBalance();     // 150
account.#balance;              // SyntaxError — cannot access a private field from outside the class`}
            />

            <DocH2>Getters</DocH2>
            <DocP>
                A getter defines a property that computes its value dynamically when read, using ordinary property-access syntax (no parentheses needed).
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
circle.area; // 78.53... — accessed like a property, computed live, no parentheses`}
            />

            <DocH2>Setters</DocH2>
            <DocP>
                A setter defines custom logic that runs when a property is assigned a new value, useful for validation or derived-state updates.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error("Radius must be positive");
    }
    this._radius = value;
  }
}

const circle = new Circle(5);
circle.radius = 10;   // runs the setter — valid, works fine
circle.radius = -3;    // throws: "Radius must be positive"`}
            />
            <DocNote tone="info">
                Getters and setters look like plain properties from the outside, but let you run logic — computation, validation, logging — every time that "property" is read or written, without changing how callers interact with the object.
            </DocNote>
        </>
    );
}
