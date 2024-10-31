### **Intermediate Level: Arrays and Objects in JavaScript**

At this stage, you'll dive deeper into handling arrays and objects in JavaScript. You'll learn powerful array methods like `map`, `filter`, `reduce`, and `forEach` to perform various operations on arrays efficiently. Understanding these methods is key to writing cleaner and more efficient JavaScript code.

---

### **What You'll Practice:**
1. **Array Methods**:
   - **`map`**: Transforms each element of an array and returns a new array.
   - **`filter`**: Returns a new array with elements that satisfy a condition.
   - **`reduce`**: Accumulates array elements into a single value (e.g., sum, product).
   - **`forEach`**: Executes a function for each element but does not return a new array.

2. **Objects**:
   - Create, manipulate, and loop through objects.
   - Combine arrays and objects for more complex data structures.

---

### **1. Array Method: `map()`**

The `map()` method creates a new array by applying a function to each element of the original array. 

#### **Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squaredNumbers = numbers.map(num => num * 2);

console.log(squaredNumbers); // Output: [2, 4, 6, 8, 10]
```

### **Practice with `map()`**:
- Create an array of objects (e.g., students with names and grades) and use `map()` to create a new array that contains just their grades.
  
---

### **2. Array Method: `filter()`**

The `filter()` method creates a new array with elements that pass a test provided by a function.

#### **Example:**
```javascript
const ages = [12, 16, 19, 23, 15];

// Using filter to get only adults (age 18+)
const adults = ages.filter(age => age >= 18);

console.log(adults); // Output: [19, 23]
```

### **Practice with `filter()`**:
- Filter an array of products, and return only the products that are in stock.

---

### **3. Array Method: `reduce()`**

The `reduce()` method applies a function against an accumulator and each element of the array to reduce it to a single value (e.g., a sum).

#### **Example:**
```javascript
const prices = [29.99, 9.99, 4.99, 19.99];

// Using reduce to calculate the total cost
const totalPrice = prices.reduce((total, price) => total + price, 0);

console.log(totalPrice); // Output: 64.96
```

### **Practice with `reduce()`**:
- Given an array of expenses, use `reduce()` to find the total amount spent.

---

### **4. Array Method: `forEach()`**

The `forEach()` method executes a provided function once for each array element. Unlike `map()`, it doesn't return a new array.

#### **Example:**
```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Using forEach to log each fruit
fruits.forEach(fruit => console.log(fruit));

// Output:
// apple
// banana
// cherry
```

### **Practice with `forEach()`**:
- Create an array of tasks and use `forEach()` to log each task with a status message.

---

### **Combining Array Methods**:

You can chain these array methods together for more complex operations.

#### **Example**: Using `filter()`, `map()`, and `reduce()` together
```javascript
const orders = [
  { item: 'Laptop', price: 1200, quantity: 1 },
  { item: 'Phone', price: 800, quantity: 2 },
  { item: 'Tablet', price: 500, quantity: 3 }
];

// Calculate the total cost of items with price greater than $500
const totalCost = orders
  .filter(order => order.price > 500)
  .map(order => order.price * order.quantity)
  .reduce((total, price) => total + price, 0);

console.log(totalCost); // Output: 2800
```

### **Practice Challenges for Intermediate Level**:
1. **Shopping Cart**:
   - Given an array of products (name, price, quantity), use `map()`, `filter()`, and `reduce()` to calculate the total cost of products that are in stock and priced above a certain amount.
   
2. **Student Gradebook**:
   - Given an array of students with names and grades, use `map()` to return a list of students who passed (grade above a certain threshold), and `reduce()` to calculate the average grade of the class.

3. **Todo List**:
   - Create an array of tasks (with task name, priority, and status). Use `filter()` to get only high-priority tasks and use `forEach()` to display them.

---

### **Extend Your Knowledge:**
- Try **nesting objects inside arrays** or **arrays inside objects** to handle more complex data structures.
- Use **destructuring** to extract values from arrays and objects more easily.

---

By practicing these methods and gradually building projects using arrays and objects, you’ll gain confidence in handling more complex data and logic in JavaScript.