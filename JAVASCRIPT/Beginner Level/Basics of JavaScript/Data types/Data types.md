Now that you understand variables, let's move on to **data types** in JavaScript. Every value in JavaScript has a specific data type, and understanding these will help you manipulate and control data in your code effectively.

### 1. **What are Data Types?**
Data types define the kind of data a variable holds. JavaScript has several data types, which can be divided into **primitive types** and **non-primitive types**.

#### **Primitive Data Types**:
1. **String**: Represents textual data.
   ```javascript
   let name = "John";
   ```

2. **Number**: Represents numeric values (both integers and floating-point numbers).
   ```javascript
   let age = 30;
   ```

3. **Boolean**: Represents logical values (`true` or `false`).
   ```javascript
   let isStudent = true;
   ```

4. **Undefined**: A variable that has been declared but not assigned a value.
   ```javascript
   let car;
   ```

5. **Null**: Represents a non-existent or invalid value.
   ```javascript
   let result = null;
   ```

6. **Symbol**: A unique and immutable value (advanced usage, not as common for beginners).

#### **Non-Primitive Data Types**:
1. **Object**: A collection of key-value pairs. It can store multiple values in a single variable.
   ```javascript
   let person = {
     name: "Alice",
     age: 25,
     isStudent: true
   };
   ```

2. **Array**: A list-like object used to store multiple values.
   ```javascript
   let colors = ["red", "green", "blue"];
   ```

### 2. **Practicing Data Types**

#### **Exercise 1: Strings**
- Strings are sequences of characters and are enclosed in quotes (`""` or `''`).
- You can perform various operations on strings like concatenation, length checking, and accessing specific characters.

```javascript
let firstName = "John";
let lastName = "Doe";

// Concatenate strings
let fullName = firstName + " " + lastName;
console.log(fullName); // Outputs: John Doe

// String length
console.log(fullName.length); // Outputs: 8

// Access a character
console.log(fullName[0]); // Outputs: J
```

#### **Exercise 2: Numbers**
- Numbers can be integers or floating-point values, and you can perform arithmetic operations like addition, subtraction, etc.

```javascript
let num1 = 10;
let num2 = 5;

// Basic arithmetic
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(sum, difference, product, quotient); // Outputs: 15 5 50 2
```

#### **Exercise 3: Booleans**
- Booleans have two possible values: `true` or `false`. They are often used in conditional statements.

```javascript
let isOver18 = true;
let hasLicense = false;

console.log(isOver18); // Outputs: true
console.log(hasLicense); // Outputs: false

// Example usage
if (isOver18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

#### **Exercise 4: Undefined and Null**
- `Undefined` means the variable has been declared but not assigned a value.
- `Null` represents an intentional absence of value.

```javascript
let undefinedVariable;
console.log(undefinedVariable); // Outputs: undefined

let nullVariable = null;
console.log(nullVariable); // Outputs: null
```

#### **Exercise 5: Arrays**
- Arrays are used to store multiple values in a single variable, and you can perform operations like adding, removing, or accessing elements.

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Outputs: apple
console.log(fruits.length); // Outputs: 3

// Add an element to the array
fruits.push("orange");
console.log(fruits); // Outputs: ["apple", "banana", "cherry", "orange"]
```

#### **Exercise 6: Objects**
- Objects are key-value pairs where each key (or property) has a value assigned to it.

```javascript
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(car.brand); // Outputs: Toyota

// Add a new property
car.color = "red";
console.log(car); // Outputs: { brand: "Toyota", model: "Corolla", year: 2021, color: "red" }
```

### 3. **Things to Practice**

- **String Operations**: Concatenation, string length, and accessing characters.
- **Number Operations**: Basic arithmetic operations and number manipulation.
- **Boolean Logic**: Write conditional statements based on `true` or `false` values.
- **Array Manipulation**: Add, remove, and access elements in an array.
- **Object Manipulation**: Access, add, and modify object properties.

### 4. **Challenge Exercise**
- Create a simple program that asks the user for their name, age, and favorite color using `prompt` (or just declare these in code), then store them in an object.
- Use an array to store their favorite movies or books.
- Display all this information in the console.

Example:

```javascript
let user = {
    name: "Alice",
    age: 25,
    favoriteColor: "blue",
    favoriteMovies: ["Inception", "Interstellar", "The Matrix"]
};

console.log(user);
```

This will help you reinforce understanding of data types and how to use them effectively. Let me know if you'd like help with any specific parts or need more practice examples!