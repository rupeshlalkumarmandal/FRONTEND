### **Advanced Level (Advanced Concepts): Practicing Closures, Currying, and Recursion**

---

### **1. Closures**

A **closure** is when a function retains access to its parent scope, even after the parent function has closed.

#### **How to Practice Closures:**

1. **Understanding Closures:**
   - Create simple examples where inner functions access variables from the outer function, even after the outer function finishes execution.

2. **Exercise 1: Counter using Closures:**
   - Write a function that creates a counter and returns a function to increment the counter.

**Example:**
```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

3. **Exercise 2: Private Variables using Closures:**
   - Create a function that acts as a factory for objects with private variables using closures.

**Example:**
```javascript
function createPerson(name) {
  return {
    getName: function() {
      return name;
    },
    setName: function(newName) {
      name = newName;
    }
  };
}

const person = createPerson('John');
console.log(person.getName()); // John
person.setName('Doe');
console.log(person.getName()); // Doe
```

---

### **2. Currying**

**Currying** is the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

#### **How to Practice Currying:**

1. **Understanding Currying:**
   - Write functions that take multiple arguments and convert them into a sequence of functions that each take one argument.

2. **Exercise 1: Simple Currying:**
   - Convert a function that adds two numbers into a curried version.

**Example:**
```javascript
function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(10)); // 15
console.log(add(3)(4)); // 7
```

3. **Exercise 2: Currying in Action:**
   - Use currying to apply functions in sequence.

**Example:**
```javascript
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24
```

---

### **3. Recursion**

**Recursion** is a function that calls itself to solve a problem that can be broken down into smaller instances of the same problem.

#### **How to Practice Recursion:**

1. **Understanding Recursion:**
   - Write recursive functions to solve problems like factorial calculation or summing elements in an array.

2. **Exercise 1: Factorial using Recursion:**
   - Implement a recursive function that calculates the factorial of a number.

**Example:**
```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120
```

3. **Exercise 2: Sum of Array using Recursion:**
   - Write a function to recursively sum all the numbers in an array.

**Example:**
```javascript
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}

console.log(sumArray([1, 2, 3, 4])); // 10
```

4. **Exercise 3: Fibonacci Sequence using Recursion:**
   - Write a function to calculate the nth Fibonacci number using recursion.

**Example:**
```javascript
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6)); // 8
```

---

### **4. Practice: Combine Concepts**

#### **Exercise: Create a Memoized Fibonacci Function**

Use **closures** and **recursion** to create a memoized version of the Fibonacci function for improved performance.

**Example:**
```javascript
function memoizedFibonacci() {
  let cache = {};

  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    } else if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      const result = fib(n - 1) + fib(n - 2);
      cache[n] = result;
      return result;
    }
  };
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(6)); // 8
console.log(fibonacci(50)); // 12586269025 (Fast with memoization)
```

---

### **Summary**

- **Closures** allow access to outer variables even after the function has executed.
- **Currying** transforms functions to handle arguments one at a time.
- **Recursion** solves complex problems by breaking them into smaller subproblems.
- **Practice** combining closures, recursion, and currying to solve real-world problems efficiently.