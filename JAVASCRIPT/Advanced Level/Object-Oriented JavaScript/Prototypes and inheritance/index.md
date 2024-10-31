### **Advanced Level: Object-Oriented JavaScript - Prototypes and Inheritance**

In JavaScript, **prototypal inheritance** allows objects to inherit properties and methods from other objects. Understanding **prototypes** and **inheritance** is essential to mastering object-oriented programming in JavaScript.

---

### **1. What are Prototypes?**

Every JavaScript object has an internal property called `[[Prototype]]`. This prototype property can be used to share methods and properties across different objects.

#### **Prototype Chain**:
If you try to access a property or method on an object and it's not found, JavaScript looks for it in the object's prototype. This forms the **prototype chain**.

#### **Example**:

```javascript
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats);  // Output: true (inherited from animal)
dog.walk();  // Output: Animal walks (inherited method)
```

- **Key Points**: In this example, `dog` is inheriting properties and methods from `animal` using the `Object.create()` method.

---

### **2. Constructor Functions and Prototypes**

You can define an object constructor function and assign methods to its prototype, which allows all instances to share those methods.

#### **Constructor Function Example**:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person("John", 30);
const jane = new Person("Jane", 25);

john.greet();  // Output: Hello, my name is John and I am 30 years old.
jane.greet();  // Output: Hello, my name is Jane and I am 25 years old.
```

- **Key Points**: The `greet` method is added to the `Person.prototype`, allowing all instances of `Person` to share the same method instead of creating it for each instance.

---

### **3. Inheritance with Prototypes**

Prototypes enable **inheritance** by allowing objects to inherit properties and methods from other objects.

#### **Prototypal Inheritance Example**:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name);  // Call the Animal constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

const myDog = new Dog("Rex", "Labrador");
myDog.speak();  // Output: Rex barks.
```

- **Key Points**: In this example, `Dog` inherits properties and methods from `Animal` using **prototypal inheritance**. The `speak` method is overridden in the `Dog` class to provide custom behavior.

---

### **4. Understanding `__proto__` vs `prototype`**

- **`__proto__`**: Every object has an internal property `__proto__`, which points to its prototype.
  
- **`prototype`**: This is a property available only on **constructor functions** and is used to assign methods that should be shared by all instances.

#### **Example**:

```javascript
console.log(Dog.prototype);  // Prototype of the constructor function
console.log(myDog.__proto__);  // Prototype of the object (points to Dog.prototype)
```

- **Key Points**: The `prototype` property belongs to the constructor function, while `__proto__` refers to the prototype object from which the instance inherits.

---

### **5. Practice: Create a Shape and Circle Class Using Prototypes**

#### **Objective**: Create a base `Shape` constructor function and a `Circle` constructor function that inherits from it. 

#### **Steps**:

1. **Define the `Shape` Constructor**:

```javascript
function Shape(color) {
  this.color = color;
}

Shape.prototype.draw = function() {
  console.log(`Drawing a shape in ${this.color}`);
};
```

2. **Define the `Circle` Constructor**:

```javascript
function Circle(color, radius) {
  Shape.call(this, color);  // Call Shape constructor
  this.radius = radius;
}

// Inherit from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Add a specific method for Circle
Circle.prototype.draw = function() {
  console.log(`Drawing a circle with radius ${this.radius} in ${this.color}`);
};
```

3. **Create and Use Instances**:

```javascript
const circle1 = new Circle("red", 10);
circle1.draw();  // Output: Drawing a circle with radius 10 in red

const shape1 = new Shape("blue");
shape1.draw();  // Output: Drawing a shape in blue
```

- **Key Points**: `Circle` inherits from `Shape`, and the `draw` method is overridden to provide specialized behavior.

---

### **6. Practice Exercise: Build a Simple Class System**

#### **Objective**: Build a simple system of classes for vehicles.

1. **Define a `Vehicle` constructor function**:

```javascript
function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
}

Vehicle.prototype.move = function() {
  console.log(`${this.type} moves at ${this.speed} km/h.`);
};
```

2. **Create `Car` and `Bike` constructors that inherit from `Vehicle`**:

```javascript
function Car(speed) {
  Vehicle.call(this, "Car", speed);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Bike(speed) {
  Vehicle.call(this, "Bike", speed);
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;
```

3. **Use Instances**:

```javascript
const myCar = new Car(120);
myCar.move();  // Output: Car moves at 120 km/h.

const myBike = new Bike(80);
myBike.move();  // Output: Bike moves at 80 km/h.
```

- **Key Points**: This exercise helps you understand how to set up a simple inheritance hierarchy using prototypes.

---

### **Summary**:

1. **Prototypes**: JavaScript objects inherit properties from their prototype.
2. **Constructor Functions**: Define objects using constructor functions and assign shared methods to their prototypes.
3. **Prototypal Inheritance**: Create child objects that inherit from parent objects using prototypes.
4. **Practice**: Build a hierarchy of objects using constructor functions and prototypes (e.g., `Vehicle`, `Car`, `Bike`).

By understanding prototypes and inheritance, you will be able to build more flexible and efficient code, reusing behavior through inheritance and leveraging JavaScript's prototypal system.