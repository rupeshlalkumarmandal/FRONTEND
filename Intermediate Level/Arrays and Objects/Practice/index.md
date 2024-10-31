### **Intermediate Level: Building a Simple Inventory Management App**

In this project, you'll create a **simple inventory management app** using **arrays** and **objects**. This will allow you to practice how to store, manipulate, and display data in a more realistic scenario.

---

### **Concepts to Practice:**

1. **Array Methods**:
   - Add, update, and delete items in an inventory.
   - Use methods like `push()`, `map()`, `filter()`, and `forEach()`.

2. **Object Manipulation**:
   - Each product in the inventory will be an object containing properties like `name`, `price`, and `quantity`.
   - You'll manipulate these objects by accessing, updating, or deleting properties.

---

### **Step-by-Step Guide: Building the Inventory App**

---

### **Step 1: Define Your Data Structure**

First, define an array of products. Each product will be an object with properties like `name`, `price`, and `quantity`.

#### **Example:**
```javascript
let inventory = [
  { name: 'Laptop', price: 1000, quantity: 10 },
  { name: 'Phone', price: 500, quantity: 30 },
  { name: 'Tablet', price: 300, quantity: 20 }
];
```

### **Step 2: Display Inventory**

You'll create a function that displays all the products in the inventory.

#### **Example:**
```javascript
function displayInventory() {
  console.log("Inventory:");
  inventory.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price}, Quantity: ${item.quantity}`);
  });
}

displayInventory();
```

#### **Output:**
```
Inventory:
1. Laptop - $1000, Quantity: 10
2. Phone - $500, Quantity: 30
3. Tablet - $300, Quantity: 20
```

### **Step 3: Add New Products**

Create a function that allows you to add a new product to the inventory.

#### **Example:**
```javascript
function addProduct(name, price, quantity) {
  inventory.push({ name, price, quantity });
  console.log(`${name} added to the inventory.`);
}

addProduct('Monitor', 200, 15);
displayInventory();
```

#### **Output:**
```
Monitor added to the inventory.
Inventory:
1. Laptop - $1000, Quantity: 10
2. Phone - $500, Quantity: 30
3. Tablet - $300, Quantity: 20
4. Monitor - $200, Quantity: 15
```

### **Step 4: Update Product Quantity**

Create a function to update the quantity of a specific product.

#### **Example:**
```javascript
function updateQuantity(productName, newQuantity) {
  let product = inventory.find(item => item.name === productName);
  
  if (product) {
    product.quantity = newQuantity;
    console.log(`${productName} quantity updated to ${newQuantity}.`);
  } else {
    console.log(`${productName} not found in inventory.`);
  }
}

updateQuantity('Phone', 50);
displayInventory();
```

#### **Output:**
```
Phone quantity updated to 50.
Inventory:
1. Laptop - $1000, Quantity: 10
2. Phone - $500, Quantity: 50
3. Tablet - $300, Quantity: 20
4. Monitor - $200, Quantity: 15
```

### **Step 5: Delete a Product**

You can delete a product from the inventory using the `filter()` method to remove the item based on its name.

#### **Example:**
```javascript
function deleteProduct(productName) {
  inventory = inventory.filter(item => item.name !== productName);
  console.log(`${productName} removed from the inventory.`);
}

deleteProduct('Tablet');
displayInventory();
```

#### **Output:**
```
Tablet removed from the inventory.
Inventory:
1. Laptop - $1000, Quantity: 10
2. Phone - $500, Quantity: 50
3. Monitor - $200, Quantity: 15
```

---

### **Step 6: Calculate Total Inventory Value**

You can calculate the total value of the inventory by summing the value of each product (price * quantity).

#### **Example:**
```javascript
function calculateTotalValue() {
  let totalValue = inventory.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  console.log(`Total Inventory Value: $${totalValue}`);
}

calculateTotalValue();
```

#### **Output:**
```
Total Inventory Value: $46500
```

---

### **Practice: Enhancements to the Inventory App**

Once you’ve mastered the basics, here are some enhancements to practice:

1. **Sort Inventory by Price or Quantity**:
   - Add a function to sort products based on price or quantity.

2. **Low Stock Alerts**:
   - Create a function that checks if a product’s quantity is below a certain threshold and alerts if the stock is low.

3. **Search for Products**:
   - Implement a search functionality where you can search for a product by name.

4. **Interface with HTML**:
   - Add an HTML form that allows users to add products, update quantities, or delete items via the DOM.

---

### **Summary:**
By completing this inventory management app, you'll practice working with **arrays** and **objects** while also utilizing various array methods like `map()`, `filter()`, and `reduce()`. You’ll also gain experience handling dynamic data, manipulating it, and displaying it in the console. Once you're confident, you can move on to creating a web-based interface with **HTML** and **JavaScript** to make the app interactive.