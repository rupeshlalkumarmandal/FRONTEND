### Beginner Level DOM Manipulation Practice: Create a Dynamic To-Do List or a Color-Changing Webpage

Practicing DOM manipulation by creating small, interactive projects is a great way to strengthen your understanding. Let’s work on two beginner projects: a **dynamic to-do list** and a **color-changing webpage**. Both exercises will give you a solid foundation for DOM manipulation and event handling.

---

## 1. **Dynamic To-Do List**

This project will allow users to add tasks to a list, mark them as complete, and remove tasks from the list.

### **HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #todoList {
      list-style-type: none;
    }
    li {
      margin: 10px 0;
      padding: 10px;
      background-color: #f4f4f4;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
    }
    .done {
      text-decoration: line-through;
      color: gray;
    }
    button {
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>My To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Enter a new task" />
  <button id="addTaskBtn">Add Task</button>

  <ul id="todoList"></ul>

  <script src="script.js"></script>
</body>
</html>
```

### **JavaScript Code (DOM Manipulation and Event Listeners)**
```javascript
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim(); // Trim whitespace

  if (taskValue !== '') {
    const list = document.getElementById('todoList');

    // Create a new list item (li)
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    // Create a "Done" button
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', function() {
      listItem.classList.toggle('done');
    });

    // Create a "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
      list.removeChild(listItem);
    });

    // Append buttons to list item
    listItem.appendChild(doneBtn);
    listItem.appendChild(removeBtn);

    // Add the list item to the unordered list (ul)
    list.appendChild(listItem);

    // Clear the input
    taskInput.value = '';
  }
}
```

### **How It Works:**
- You enter a task in the input box and click the **Add Task** button.
- The task gets added to the to-do list (`ul` element).
- Each task has two buttons:
  - **Done**: This toggles the task as complete (strikes through the text).
  - **Remove**: This deletes the task from the list.

### **How to Practice:**
- Try adding more features, such as editing a task or clearing all tasks.
- Add a message when the task list is empty or when a task is added.
- Experiment with adding animations when tasks are added or removed.

---

## 2. **Color-Changing Webpage**

This project allows users to click a button to change the background color of the webpage. You can randomly generate colors or let users choose their own color.

### **HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Changer</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    button {
      margin: 10px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <h1>Color Changing Webpage</h1>
  <button id="randomColorBtn">Change Color</button>
  <input type="color" id="colorPicker" />
  <button id="applyColorBtn">Apply Color</button>

  <script src="script.js"></script>
</body>
</html>
```

### **JavaScript Code (Event Handling and DOM Manipulation)**
```javascript
// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Random color button event
document.getElementById('randomColorBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();
});

// Color picker apply button event
document.getElementById('applyColorBtn').addEventListener('click', function() {
  const selectedColor = document.getElementById('colorPicker').value;
  document.body.style.backgroundColor = selectedColor;
});
```

### **How It Works:**
- The **Change Color** button generates a random color for the webpage background.
- The **Color Picker** input allows the user to manually select a color, and clicking the **Apply Color** button sets the background to the chosen color.

### **How to Practice:**
- Add more features like a color history where previous colors are stored and can be reapplied.
- Add a feature to reset the background to the original color.
- Try implementing a smooth color transition effect when the color changes.

---

### Summary of DOM Manipulation Practice:

- **To-Do List**: Teaches you how to manipulate the DOM dynamically by adding, removing, and updating elements.
- **Color-Changing Webpage**: Teaches you how to interact with input elements and manipulate styles dynamically.

### Practice Tips:
1. **Start Simple**: Work with small tasks like adding event listeners and manipulating one element at a time.
2. **Experiment**: Change the layout, colors, or functionality to make the projects your own.
3. **Combine Concepts**: Use loops, conditionals, and event listeners together to create more complex interactions.

These exercises will help you get comfortable with the basics of DOM manipulation and event-driven programming. Let me know if you'd like more practice or advanced exercises!