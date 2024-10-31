### **Intermediate Level: Functions and Scope (Closures Practice)**

A **closure** in JavaScript is a function that "remembers" the environment (or scope) in which it was created. Closures are useful for creating data privacy, preserving state, and making functions more modular.

---

### **What is a Closure?**

A **closure** happens when a function is able to remember and access its lexical scope even when the function is executed outside that scope.

#### **Example of Closure:**
```javascript
function outerFunction() {
  let counter = 0;  // Lexical scope (enclosed environment)

  return function innerFunction() {
    counter++;  // Closure: accessing counter from the outer scope
    console.log(counter);
  };
}

const increment = outerFunction();
increment();  // Output: 1
increment();  // Output: 2
increment();  // Output: 3
```

In the above code:
- The inner function `innerFunction` forms a closure and "remembers" the variable `counter` from the outer function `outerFunction`, even after `outerFunction` has finished executing.

---

### **How to Practice Closures:**

---

### **Practice Task 1: Counter Using Closure**

Create a simple **counter** using closures. The counter will remember its value each time it is incremented or decremented.

#### **Example:**
```javascript
function createCounter() {
  let count = 0;  // Lexical scope (enclosed environment)

  return {
    increment: function() {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Count: ${count}`);
    }
  };
}

const counter = createCounter();
counter.increment();  // Output: Count: 1
counter.increment();  // Output: Count: 2
counter.decrement();  // Output: Count: 1
```

---

### **How It Works:**
- The `createCounter` function returns an object containing two methods: `increment` and `decrement`. These methods form closures, allowing them to access and modify the `count` variable inside the `createCounter` function, even after it has been called.

---

### **Practice Task 2: Simple Event Handler System Using Closures**

Create a system where multiple event handlers (such as buttons) have their own private state. Closures will allow each button to remember how many times it has been clicked.

#### **Example:**
```javascript
function createButtonHandler(buttonId) {
  let clickCount = 0;  // Lexical scope

  return function() {
    clickCount++;
    console.log(`Button ${buttonId} clicked ${clickCount} times.`);
  };
}

// Create event handlers for two different buttons
const button1Handler = createButtonHandler('Button 1');
const button2Handler = createButtonHandler('Button 2');

// Simulate button clicks
button1Handler();  // Output: Button 1 clicked 1 times.
button1Handler();  // Output: Button 1 clicked 2 times.
button2Handler();  // Output: Button 2 clicked 1 times.
```

---

### **How It Works:**
- Each button handler remembers its own `clickCount` due to closures.
- The function `createButtonHandler` creates a closure around the `clickCount` variable, which gets incremented each time the button is clicked.

---

### **Practice Task 3: Counter with Start and Reset Functions**

Create a counter that can be incremented, decremented, started from a specific value, and reset using closures.

#### **Example:**
```javascript
function advancedCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Count: ${count}`);
    },
    startFrom: function(value) {
      count = value;
      console.log(`Counter started from: ${count}`);
    },
    reset: function() {
      count = 0;
      console.log("Counter reset to 0");
    }
  };
}

const counter = advancedCounter();
counter.increment();  // Output: Count: 1
counter.startFrom(10);  // Output: Counter started from: 10
counter.decrement();  // Output: Count: 9
counter.reset();  // Output: Counter reset to 0
```

---

### **How It Works:**
- The `advancedCounter` function returns an object that provides multiple methods (increment, decrement, startFrom, and reset).
- Each method forms a closure around the `count` variable, allowing access to it and modifying it based on the specific method logic.

---

### **Benefits of Practicing Closures:**

- **Data Privacy:** Closures are used to encapsulate private data, making certain variables inaccessible outside of specific functions.
- **Modularity:** You can create more modular and reusable code by using closures.
- **State Management:** Closures are excellent for maintaining state, as seen in the counter examples.

---

### **Practice Summary:**
- **Create a Counter**: Practice closures by making a counter that keeps track of the number of increments or decrements.
- **Event Handlers**: Use closures to create event handlers with private state, like click counts for buttons.
- **Advanced Counter**: Build a more advanced counter with start and reset functions, utilizing closures to manage the state.

By practicing these exercises, you will improve your understanding of closures and how they can be applied to maintain state and create event-driven systems in JavaScript.