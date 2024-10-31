### **Intermediate Level: Arrays and Objects in JavaScript**

Now that you've learned the basics of arrays and array methods, let's dive deeper into **objects** and how to manipulate them. Objects are crucial in JavaScript as they allow you to store data in key-value pairs and organize complex data.

---

### **What You'll Practice:**

1. **Object Manipulation**:
   - Creating and accessing key-value pairs in objects.
   - Adding, updating, and deleting properties in objects.
   - Looping through objects using various methods (`for...in`, `Object.keys()`, `Object.values()`, etc.).
   - Nested objects and how to access/manipulate them.

---

### **1. Creating and Accessing Objects**

Objects in JavaScript store data in key-value pairs. You can access object properties using **dot notation** or **bracket notation**.

#### **Example:**
```javascript
const student = {
  name: 'John Doe',
  age: 22,
  enrolled: true,
  grades: [85, 90, 78]
};

// Accessing values
console.log(student.name); // Output: John Doe
console.log(student.age); // Output: 22
```

### **Practice:**
- Create an object representing a product (e.g., name, price, stock).
- Access the properties using both dot and bracket notation.

---

### **2. Adding, Updating, and Deleting Properties**

You can dynamically add new properties, update existing properties, or delete properties from an object.

#### **Example:**
```javascript
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2021
};

// Adding a new property
car.color = 'blue';

// Updating a property
car.year = 2022;

// Deleting a property
delete car.model;

console.log(car); 
// Output: { brand: 'Toyota', year: 2022, color: 'blue' }
```

### **Practice:**
- Create an object for a library book (title, author, year, available). Add a new property (ISBN), update the availability, and then delete the author.

---

### **3. Looping Through Objects**

To loop through an object's properties, you can use the **`for...in`** loop or **`Object.keys()`**, **`Object.values()`**, and **`Object.entries()`** methods.

#### **`for...in` loop Example:**
```javascript
const person = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 30
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// firstName: Alice
// lastName: Smith
// age: 30
```

#### **Object Methods Example**:
```javascript
const employee = {
  name: 'Mike',
  position: 'Developer',
  salary: 60000
};

// Using Object.keys() to get keys
console.log(Object.keys(employee)); // Output: ['name', 'position', 'salary']

// Using Object.values() to get values
console.log(Object.values(employee)); // Output: ['Mike', 'Developer', 60000]

// Using Object.entries() to get key-value pairs
console.log(Object.entries(employee)); 
// Output: [['name', 'Mike'], ['position', 'Developer'], ['salary', 60000]]
```

### **Practice:**
- Create an object representing a movie (title, director, year, genre).
- Loop through the object to display each key-value pair using `for...in`.
- Use `Object.keys()` to log only the keys, and `Object.values()` to log the values.

---

### **4. Nested Objects**

Objects can contain other objects, making them useful for organizing complex data structures.

#### **Example:**
```javascript
const company = {
  name: 'Tech Solutions',
  employees: [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' }
  ],
  location: {
    city: 'New York',
    country: 'USA'
  }
};

// Accessing nested objects
console.log(company.employees[0].name); // Output: Alice
console.log(company.location.city); // Output: New York
```

### **Practice:**
- Create an object representing a school (name, location, and a nested array of students with names and grades).
- Access and display the grades of one of the students.

---

### **5. Object Destructuring**

Destructuring allows you to extract properties from an object and assign them to variables.

#### **Example:**
```javascript
const user = {
  username: 'jdoe',
  email: 'jdoe@example.com',
  password: 'secret'
};

// Destructuring
const { username, email } = user;

console.log(username); // Output: jdoe
console.log(email);    // Output: jdoe@example.com
```

### **Practice:**
- Create an object for a social media profile (username, followers, posts). Use destructuring to extract the `username` and `posts`.

---

### **Practice Challenges for Intermediate Level:**

1. **Create a Contact List**:
   - Create an array of objects representing contacts (name, phone number, email). Loop through the array to display each contact’s information.

2. **Manage Products**:
   - Create an array of products (name, price, stock). Write functions to add new products, update prices, and delete products from the list.

3. **Create a School Database**:
   - Create an object for a school with nested objects for students and their grades. Add functionality to update grades, add new students, and remove students from the list.

---

### **Next Steps**:
Once you're comfortable with objects and arrays, move on to more advanced topics such as **object-oriented programming (OOP)** concepts like classes, inheritance, and prototypes in JavaScript.

This practice will solidify your understanding of working with data structures in real-world applications.