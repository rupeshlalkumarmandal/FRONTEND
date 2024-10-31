### **Advanced Level (Modules and Build Tools): Practice Modularizing a Project and Using Build Tools for Production**

---

### **1. Goal of the Practice**

In this practice, you'll modularize a JavaScript project using **ES6 modules** and prepare it for production using **build tools** like **Webpack** and **Babel**. The goal is to understand how to split your code into reusable, maintainable modules and then bundle, transpile, and optimize it for production.

---

### **2. Steps to Practice Modularization and Build Tools**

#### **Step 1: Create a Simple Modular Project**

We'll create a simple **To-Do list app** where each functionality (adding tasks, deleting tasks, etc.) is split into separate modules.

---

#### **Step 2: Set Up the Project**

1. **Create your project folder and navigate into it**:
   ```bash
   mkdir modular-todo-app
   cd modular-todo-app
   ```

2. **Initialize the project** with `npm`:
   ```bash
   npm init -y
   ```

3. **Install Webpack and Babel**:
   ```bash
   npm install webpack webpack-cli --save-dev
   npm install @babel/core @babel/preset-env babel-loader --save-dev
   ```

4. **Install Webpack Dev Server** (for easier development):
   ```bash
   npm install webpack-dev-server --save-dev
   ```

---

#### **Step 3: Create Project Structure**

Create the following structure for your project:

```plaintext
modular-todo-app/
│
├── dist/
│   └── index.html       # HTML file
├── src/
│   ├── index.js         # Main JavaScript file (entry point)
│   ├── taskManager.js   # Task management module
│   └── uiManager.js     # UI management module
│
├── .babelrc             # Babel configuration
├── webpack.config.js    # Webpack configuration
└── package.json         # Project configuration
```

---

#### **Step 4: Write Modular JavaScript Code**

##### **Create the `index.js` file in the `src/` folder**:

This will be the entry point for your project.

```javascript
// src/index.js

import { addTask, removeTask } from './taskManager.js';
import { updateTaskList } from './uiManager.js';

// Add event listener for the "Add Task" button
document.getElementById('addTaskBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput').value;
  if (taskInput) {
    addTask(taskInput);    // Add task
    updateTaskList();      // Update the UI
  }
});
```

##### **Create the `taskManager.js` module**:

This module handles the logic of adding and removing tasks.

```javascript
// src/taskManager.js

let tasks = [];

// Function to add a task
export function addTask(task) {
  tasks.push(task);
}

// Function to remove a task
export function removeTask(taskIndex) {
  tasks.splice(taskIndex, 1);
}

// Export the tasks array (optional)
export { tasks };
```

##### **Create the `uiManager.js` module**:

This module handles the User Interface (UI) updates.

```javascript
// src/uiManager.js

import { tasks } from './taskManager.js';

// Function to update the task list in the UI
export function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';  // Clear the list

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    // Add a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeTask(index);  // Remove task
      updateTaskList();   // Update UI again
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}
```

---

#### **Step 5: Create HTML File**

Create the `index.html` file in the `dist/` folder:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modular To-Do App</title>
</head>
<body>
  <h1>To-Do List</h1>

  <input type="text" id="taskInput" placeholder="Enter task">
  <button id="addTaskBtn">Add Task</button>

  <ul id="taskList"></ul>

  <script src="bundle.js"></script>
</body>
</html>
```

---

#### **Step 6: Configure Webpack**

Create a `webpack.config.js` file to configure Webpack for your project:

```javascript
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',   // Entry point (main JS file)
  output: {
    filename: 'bundle.js',   // Output bundled file
    path: path.resolve(__dirname, 'dist')  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,    // Transpile JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'  // Use Babel to transpile ES6+ code
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',  // Webpack Dev Server directory
  }
};
```

---

#### **Step 7: Add Babel Configuration**

Create a `.babelrc` file to set up Babel:

```json
{
  "presets": ["@babel/preset-env"]
}
```

This tells Babel to transpile modern JavaScript (ES6+) into code compatible with older browsers.

---

#### **Step 8: Run the Project**

1. Add scripts to your `package.json` for building and starting the project:
   
   ```json
   "scripts": {
     "build": "webpack",
     "start": "webpack serve --open"
   }
   ```

2. **Run the development server**:
   ```bash
   npm start
   ```

   This will open the project in your browser and start Webpack’s development server.

3. **Build the project** for production:
   ```bash
   npm run build
   ```

   This will generate a production-ready bundle in the `dist/` folder, with your modularized code.

---

### **9. Optimizing for Production**

When preparing for production, you can add plugins to **minify** your JavaScript and optimize the bundle size:

1. **Install Webpack’s production plugins**:
   ```bash
   npm install terser-webpack-plugin --save-dev
   ```

2. **Update the Webpack config for production**:

```javascript
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',  // Enable optimizations for production
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]  // Minify the output
  }
  // Other Webpack configurations (entry, output, loaders, etc.)
};
```

---

### **10. Summary**

- **Modularize** your project using **ES6 modules**.
- Use **Webpack** to bundle your code and **Babel** to transpile modern JavaScript for older browsers.
- **Optimize** your code for production by minifying and bundling assets.
- **Practice**: Modularize a simple project like a to-do list, then build and bundle it using Webpack and Babel.