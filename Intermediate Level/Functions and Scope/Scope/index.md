### **Intermediate Level: Functions and Scope (Scope: Global, Local, Block)**

Scope in JavaScript defines the accessibility or visibility of variables and functions within different parts of your code. Understanding scope is crucial for writing clean and efficient code, preventing variable conflicts, and debugging issues.

---

### **Key Concepts to Practice:**

1. **Global Scope**
2. **Local Scope (Function Scope)**
3. **Block Scope (with `let` and `const`)**

---

### **1. Global Scope:**

Variables declared outside of any function or block are in the **global scope**. These variables are accessible throughout the entire script.

#### **Example:**
```javascript
let globalVariable = "I am global";

function showGlobal() {
  console.log(globalVariable);  // Can access globalVariable
}

showGlobal();  // Output: "I am global"
console.log(globalVariable);  // Output: "I am global"
```

- **Practice:**
  - Declare a global variable and access it in different functions.
  - Notice that global variables can be modified from any function, which can sometimes lead to bugs if not handled carefully.

---

### **2. Local Scope (Function Scope):**

Variables declared within a function are in the **local scope**. They can only be accessed from within that function and are not accessible from outside the function.

#### **Example:**
```javascript
function showLocal() {
  let localVariable = "I am local";
  console.log(localVariable);  // Output: "I am local"
}

showLocal();
console.log(localVariable);  // Error: localVariable is not defined
```

- **Practice:**
  - Create a function and declare a local variable inside it.
  - Try to access the local variable outside the function and observe the error.

---

### **3. Block Scope (with `let` and `const`):**

Variables declared with `let` or `const` inside a block (`{}`) have **block scope**. They can only be accessed within that block and not outside of it. Blocks are typically created with loops, conditionals (`if`, `else`), and functions.

#### **Example:**
```javascript
if (true) {
  let blockScopedVariable = "I am block-scoped";
  console.log(blockScopedVariable);  // Output: "I am block-scoped"
}

console.log(blockScopedVariable);  // Error: blockScopedVariable is not defined
```

- **Practice:**
  - Use `let` or `const` inside an `if` block or a loop.
  - Try to access the variable outside the block and observe the error.

---

### **How to Practice Scope in JavaScript:**

---

### **Practice 1: Global vs. Local Scope**

1. Create a global variable `userName` that can be accessed throughout your code.
2. Inside a function, declare a local variable `userAge`.
3. Try to log both `userName` and `userAge` from inside and outside the function.

#### **Example:**
```javascript
let userName = "Alice";  // Global scope

function showUserInfo() {
  let userAge = 25;  // Local scope
  console.log(`User Name: ${userName}, Age: ${userAge}`);  // Accessible inside function
}

showUserInfo();
console.log(userName);  // Accessible outside function
console.log(userAge);  // Error: userAge is not defined
```

---

### **Practice 2: Block Scope with Loops**

1. Create a loop using `let` or `const` and declare a variable inside the loop.
2. Log the variable both inside and outside the loop.

#### **Example:**
```javascript
for (let i = 0; i < 3; i++) {
  console.log(`Inside loop: ${i}`);  // i is accessible inside the loop
}

console.log(`Outside loop: ${i}`);  // Error: i is not defined
```

---

### **Practice 3: Block Scope with `if-else` Conditions**

1. Use an `if` condition and declare a variable inside the block using `let` or `const`.
2. Try to access the variable outside the block.

#### **Example:**
```javascript
if (true) {
  const message = "Block-scoped message";
  console.log(message);  // Accessible inside the block
}

console.log(message);  // Error: message is not defined
```

---

### **Practice Exercise: Global, Local, and Block Scope**

**Task:** Build a simple **login system** that demonstrates global, local, and block scope.

1. Declare a global variable `isLoggedIn`.
2. Inside a function, create a local variable `userName` to store the username.
3. Use `if-else` statements to check if `isLoggedIn` is `true` or `false` and display appropriate messages.
4. Use block-scoped variables inside the `if-else` conditions.

#### **Example:**
```javascript
let isLoggedIn = false;  // Global scope

function login() {
  let userName = "John";  // Local scope

  if (isLoggedIn) {
    let welcomeMessage = `Welcome back, ${userName}`;
    console.log(welcomeMessage);  // Block scope
  } else {
    let errorMessage = "Please log in.";
    console.log(errorMessage);  // Block scope
  }
}

login();
console.log(isLoggedIn);  // Accessible (global scope)
console.log(userName);  // Error: userName is not defined (local scope)
```

---

### **Summary of Intermediate Level (Functions and Scope):**

1. **Global Scope**: Variables declared outside any function or block can be accessed anywhere in the code.
2. **Local Scope**: Variables declared inside a function are only accessible within that function.
3. **Block Scope**: Variables declared with `let` and `const` inside a block are only accessible within that block.

By practicing these concepts, you'll gain a deep understanding of how to manage variable access and avoid unintended side effects, improving your code structure and readability.