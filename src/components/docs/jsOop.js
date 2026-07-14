import React from 'react';
import { DocTitle, DocP, DocH2, DocH3, DocList, DocNote } from '../../components/docs/DocPrimitives';
import CodeBlock from '../../components/docs/CodeBlock';

export default function JavaScriptOopDoc() {
    return (
        <>
            <DocTitle eyebrow="Core Foundations">Object-Oriented Programming in JavaScript</DocTitle>

            <DocP>
                Object-Oriented Programming (OOP) is a paradigm built around objects that bundle data and behavior together. JavaScript supports OOP through both modern class syntax and its native prototype-based system underneath, resting on four core pillars: encapsulation, inheritance, polymorphism, and abstraction.
            </DocP>

            <DocH2>Encapsulation</DocH2>
            <DocP>
                Encapsulation means bundling data and the methods that operate on it together, while restricting direct outside access to internal details — exposing only a controlled, intentional interface.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class BankAccount {
  #balance; // private field — encapsulated, inaccessible from outside

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
account.getBalance();  // 150 — only accessible through the defined interface
account.#balance;         // SyntaxError — direct access is blocked`}
            />

            <DocH2>Inheritance</DocH2>
            <DocP>
                Inheritance lets one class acquire the properties and methods of another, promoting code reuse and expressing "is-a" relationships between related types.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  describe() {
    return \`This is a \${this.brand} vehicle.\`;
  }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand);
    this.doors = doors;
  }
}

const car = new Car("Toyota", 4);
car.describe();          // "This is a Toyota vehicle." — inherited method
car instanceof Vehicle;    // true`}
            />

            <DocH2>Polymorphism</DocH2>
            <DocP>
                Polymorphism ("many forms") lets objects of different classes respond to the same method call in their own way — a subclass can override an inherited method with its own specialized behavior.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class Shape {
  area() {
    return 0; // default fallback
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2; // overrides the parent's version
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2; // its own distinct implementation
  }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(shape => console.log(shape.area()));
// Each calls its OWN area() method, even though they're accessed uniformly as "shape"`}
            />

            <DocH2>Abstraction</DocH2>
            <DocP>
                Abstraction means exposing only the essential, high-level behavior of an object while hiding the complex implementation details behind it — the caller doesn't need to know <em>how</em> something works, only <em>what</em> it does.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`class CoffeeMachine {
  brew() {
    this.#heatWater();
    this.#grindBeans();
    this.#pourWater();
    return "Coffee ready!";
  }

  #heatWater() {
    // internal complexity hidden from the caller
  }
  #grindBeans() {
    // internal complexity hidden from the caller
  }
  #pourWater() {
    // internal complexity hidden from the caller
  }
}

const machine = new CoffeeMachine();
machine.brew(); // "Coffee ready!" — the caller only sees this simple interface`}
            />

            <DocH2>Prototype</DocH2>
            <DocP>
                Every JavaScript object has an internal link to another object called its prototype, from which it inherits properties and methods. This is the underlying mechanism that class syntax is built on top of.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function Person(name) {
  this.name = name;
}

// Adding a method to the prototype — shared by ALL instances, not duplicated per object
Person.prototype.greet = function () {
  return \`Hi, I'm \${this.name}\`;
};

const person = new Person("Ava");
person.greet(); // "Hi, I'm Ava" — found on Person.prototype, not on 'person' itself

Object.getPrototypeOf(person) === Person.prototype; // true`}
            />
            <DocNote tone="info">
                Class syntax's methods are automatically placed on the class's prototype behind the scenes — writing `greet()` inside a class body is functionally equivalent to manually assigning it as `ClassName.prototype.greet`, set to a function with the same body.
            </DocNote>

            <DocH2>Prototype Chain</DocH2>
            <DocP>
                When you access a property on an object, JavaScript first checks the object itself. If not found, it walks up to the object's prototype, then that prototype's prototype, and so on — this sequence is the prototype chain, ending at `Object.prototype`, whose own prototype is `null`.
            </DocP>
            <CodeBlock
                language="javascript"
                code={`function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  return \`\${this.name} is eating.\`;
};

function Dog(name) {
  Animal.call(this, name); // borrow Animal's constructor logic
}
Dog.prototype = Object.create(Animal.prototype); // link Dog's prototype to Animal's
Dog.prototype.bark = function () {
  return \`\${this.name} says woof!\`;
};

const dog = new Dog("Rex");
dog.bark();      // "Rex says woof!" — found directly on Dog.prototype
dog.eat();          // "Rex is eating." — walked up the chain to Animal.prototype

// The chain: dog → Dog.prototype → Animal.prototype → Object.prototype → null`}
            />
            <DocNote tone="warning">
                Deep prototype chains slow down property lookups (the engine has to walk further) and can make debugging harder. Modern class syntax with `extends` builds the same chain automatically and much more readably than manual prototype wiring like the example above.
            </DocNote>
        </>
    );
}
