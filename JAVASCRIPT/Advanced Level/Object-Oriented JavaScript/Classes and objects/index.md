### **Advanced Level: Object-Oriented JavaScript - Classes and Objects**

In this section, you'll dive into **Object-Oriented JavaScript (OOP)**, focusing on **classes and objects**. Understanding these concepts will help you build scalable, modular, and reusable code by organizing your programs around objects and their interactions.

---

### **1. What are Objects?**

In JavaScript, an **object** is a collection of key-value pairs. Each key (property) is a string, and the value can be any data type: number, string, function, or even another object.

#### **How to Define Objects:**

- **Literal Notation**: The simplest way to create an object is to use **object literal notation**.

  ```javascript
  const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };

  person.greet();  // Output: Hello, John
  ```

  - **Key Points**: Objects are used to group related data and functionality. The `this` keyword refers to the current object.

---

### **2. What are Classes?**

A **class** is a blueprint for creating objects. JavaScript classes were introduced in **ES6** and provide a way to define **objects and their behavior** in a more structured manner.

#### **How to Define a Class:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.greet();  // Output: Hello, my name is John and I am 30 years old.
```

- **Key Points**: The `constructor` method is used for initializing object properties, and methods like `greet` define object behaviors.

---

### **3. Inheritance in Classes**

Inheritance allows one class (child class) to inherit properties and methods from another class (parent class).

#### **How to Practice Inheritance:**

- **Exercise 1**: Create a base class and extend it to create specialized subclasses.

  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }

  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  const dog = new Dog("Rex");
  dog.speak();  // Output: Rex barks.
  ```

- **Key Points**: The `extends` keyword is used for inheritance, and you can override methods in the child class to give specialized behavior.

---

### **4. Encapsulation**

Encapsulation is the concept of hiding internal details of an object and exposing only what is necessary. JavaScript uses **closures** or **private fields** (`#` syntax) to achieve this.

#### **How to Practice Encapsulation:**

- **Exercise 1**: Create an object with private and public methods or properties.

  ```javascript
  class BankAccount {
    #balance = 0;

    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. Balance: ${this.#balance}`);
    }

    getBalance() {
      return this.#balance;
    }
  }

  const account = new BankAccount();
  account.deposit(100);  // Output: Deposited: 100. Balance: 100
  console.log(account.getBalance());  // Output: 100
  ```

- **Key Points**: Use the `#` syntax to declare private fields, ensuring they cannot be accessed outside of the class.

---

### **5. Polymorphism**

Polymorphism allows different objects to respond to the same method call in their own way. You achieve this by overriding methods in child classes.

#### **How to Practice Polymorphism:**

- **Exercise 1**: Define a base class with a method, and override the method in the subclasses to provide different behavior.

  ```javascript
  class Shape {
    draw() {
      console.log("Drawing a shape.");
    }
  }

  class Circle extends Shape {
    draw() {
      console.log("Drawing a circle.");
    }
  }

  class Square extends Shape {
    draw() {
      console.log("Drawing a square.");
    }
  }

  const shapes = [new Circle(), new Square()];
  shapes.forEach(shape => shape.draw());
  ```

- **Key Points**: Use method overriding to implement polymorphism and create flexible, reusable code.

---

### **6. Practice: Build a Simple Game Using Object-Oriented Principles**

#### **Objective**: Create a simple text-based game (e.g., a monster battle game) using classes and objects.

#### **Steps**:

1. **Define a Base Class**:
   Create a `Character` class with properties like `name`, `health`, and `attackPower`.

   ```javascript
   class Character {
     constructor(name, health, attackPower) {
       this.name = name;
       this.health = health;
       this.attackPower = attackPower;
     }

     attack(opponent) {
       opponent.health -= this.attackPower;
       console.log(`${this.name} attacks ${opponent.name} for ${this.attackPower} damage.`);
     }
   }
   ```

2. **Extend Classes**:
   Create specialized characters like `Hero` and `Monster` by extending the `Character` class.

   ```javascript
   class Hero extends Character {
     heal() {
       this.health += 10;
       console.log(`${this.name} heals for 10 health points.`);
     }
   }

   class Monster extends Character {
     roar() {
       console.log(`${this.name} lets out a terrifying roar!`);
     }
   }
   ```

3. **Game Simulation**:
   Write a function that simulates a battle between a hero and a monster.

   ```javascript
   const hero = new Hero("Aragorn", 100, 15);
   const monster = new Monster("Goblin", 80, 12);

   function battle(hero, monster) {
     while (hero.health > 0 && monster.health > 0) {
       hero.attack(monster);
       if (monster.health > 0) {
         monster.attack(hero);
       }
     }

     if (hero.health > 0) {
       console.log(`${hero.name} wins!`);
     } else {
       console.log(`${monster.name} wins!`);
     }
   }

   battle(hero, monster);
   ```

- **Key Points**: This practice will help you understand how classes and objects interact to create dynamic systems like a game.

---

### **Summary:**

By practicing **Object-Oriented JavaScript**, you'll gain the skills to build more complex and modular applications. Here's what to focus on:
1. **Understand Objects**: Objects store related data and functionality.
2. **Create Classes**: Classes are blueprints for objects and encapsulate behavior.
3. **Implement Inheritance**: Use `extends` to create specialized versions of your classes.
4. **Encapsulation**: Hide internal details using private fields.
5. **Polymorphism**: Override methods to allow different classes to respond differently to the same method call.
  
**Practice**: Try building various object-oriented applications like a game, inventory system, or even simulations, to solidify these concepts.