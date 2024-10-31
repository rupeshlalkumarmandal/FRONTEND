To practice **Intermediate Level (JavaScript Integration)**, you'll add basic JavaScript functionality to your HTML, like creating buttons that trigger alerts or interact with the page.

Let's break down the steps and how you can practice:

---

### Step 1: **Adding a Button and Showing an Alert**

#### Example:

Here’s a simple example where a button triggers a **JavaScript alert** when clicked.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Alert Example</title>
</head>
<body>
  <h1>Click the Button to See an Alert</h1>
  
  <!-- Button that triggers JavaScript functionality -->
  <button onclick="showAlert()">Click Me!</button>

  <script>
    // Function to show an alert
    function showAlert() {
      alert('Hello! You clicked the button.');
    }
  </script>
</body>
</html>
```

#### Explanation:
- **HTML Button**: The `<button>` element has an `onclick` attribute. When clicked, it calls the `showAlert()` JavaScript function.
- **JavaScript Function**: The `showAlert()` function displays a simple alert message using the `alert()` method.

---

### Step 2: **Practice Tasks**

#### **Task 1: Create a Button That Displays a Message**
1. Start by creating an HTML button that, when clicked, triggers an alert displaying any message you like.
2. Modify the message dynamically by using variables.

#### Example:

```html
<button onclick="showMessage()">Show Message</button>

<script>
  function showMessage() {
    let message = 'This is a dynamic message!';
    alert(message);
  }
</script>
```

---

### Step 3: **Add More Interactivity with JavaScript**

#### **Task 2: Change Text Content on Click**

You can also use JavaScript to modify the HTML content dynamically. In this example, clicking the button will change the text of a paragraph.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Text Example</title>
</head>
<body>
  <h1>Click the Button to Change the Text</h1>
  
  <p id="text">This is the original text.</p>
  <button onclick="changeText()">Change Text</button>

  <script>
    function changeText() {
      document.getElementById('text').innerHTML = 'The text has been changed!';
    }
  </script>
</body>
</html>
```

#### Explanation:
- **HTML Elements**: A `<p>` tag has the `id="text"` so that it can be selected and modified by JavaScript.
- **JavaScript Function**: The `changeText()` function selects the paragraph element using `getElementById()` and changes its content using `.innerHTML`.

---

### Step 4: **Practice Ideas for Basic JavaScript Integration**

#### **Task 3: Toggle Content Visibility**

Create a button that shows and hides content using JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Visibility Example</title>
</head>
<body>
  <h1>Toggle Visibility of the Text</h1>
  
  <p id="text">This text will be toggled on and off.</p>
  <button onclick="toggleVisibility()">Toggle Text</button>

  <script>
    function toggleVisibility() {
      let text = document.getElementById('text');
      if (text.style.display === 'none') {
        text.style.display = 'block';
      } else {
        text.style.display = 'none';
      }
    }
  </script>
</body>
</html>
```

#### Explanation:
- The JavaScript function checks the `display` property of the `<p>` element. If it's `none`, it sets it to `block` (visible), and if it's `block`, it hides it.

---

### Step 5: **More Practice Ideas**

1. **Button to Change Colors**: Create buttons that change the background color of the page or a specific element.
   
2. **Input Validation**: Add a text input field and a button that shows an alert when the input is empty.

3. **Simple Calculator**: Make a basic calculator with buttons for addition, subtraction, etc., and display the result in a paragraph.

4. **Event Listeners**: Instead of using the `onclick` attribute directly in HTML, add an event listener in JavaScript to practice another way of handling events.

#### Example (Event Listener):

```html
<button id="alertButton">Click Me</button>

<script>
  document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked using event listener!');
  });
</script>
```

---

### Step 6: **Best Practices**

1. **Keep JavaScript Separate**: Though you're integrating JavaScript into HTML now, it's better to keep the JavaScript in a separate file (`script.js`) and link it using `<script src="script.js"></script>`.
2. **Use Event Listeners**: Instead of inline event handlers (`onclick`), use event listeners to keep the HTML and JavaScript separate.
3. **Comment Your Code**: Always add comments to explain your JavaScript functions, especially when you're trying new methods.

---

### Step 7: **Next Steps**

Once you're comfortable with adding basic JavaScript functionality, move on to more interactive tasks:
- Form validation
- Dynamic content loading
- Creating small JavaScript applications like to-do lists or calculators

Let me know if you want more exercises or guidance on specific features!