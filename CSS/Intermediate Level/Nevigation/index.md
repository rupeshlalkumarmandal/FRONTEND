Here's how you can practice Flexbox at the intermediate level by creating horizontal and vertical navigation bars.

### 1. **Horizontal Navigation Bar Using Flexbox**

#### **HTML Setup:**

Create the basic HTML structure for the horizontal navigation bar:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horizontal Navigation Bar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>
</body>
</html>
```

#### **CSS Styling:**

In the CSS file, use Flexbox to style the horizontal navigation bar.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

/* Flexbox for Horizontal Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-around; /* Space between the links */
    background-color: #333;
    padding: 15px;
}

.navbar a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    background-color: #555;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.navbar a:hover {
    background-color: #888;
}
```

### **Key Concepts:**

- **`display: flex;`**: Sets the container as a flex container.
- **`justify-content: space-around;`**: Distributes space between the items, placing equal space around them.
- **`a:hover`**: Adds a hover effect to the navigation links, improving user interaction.

---

### 2. **Vertical Navigation Bar Using Flexbox**

#### **HTML Setup:**

Create the basic HTML structure for the vertical navigation bar:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertical Navigation Bar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="vertical-navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>
</body>
</html>
```

#### **CSS Styling:**

In the CSS file, use Flexbox to style the vertical navigation bar.

```css
/* Flexbox for Vertical Navigation Bar */
.vertical-navbar {
    display: flex;
    flex-direction: column; /* Stack links vertically */
    align-items: flex-start;
    background-color: #333;
    padding: 20px;
    height: 100vh; /* Full height */
}

.vertical-navbar a {
    color: white;
    text-decoration: none;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #555;
    border-radius: 5px;
    width: 100%;
    text-align: left;
    transition: background-color 0.3s;
}

.vertical-navbar a:hover {
    background-color: #888;
}
```

### **Key Concepts:**

- **`flex-direction: column;`**: Stacks the navigation links vertically.
- **`align-items: flex-start;`**: Aligns the items to the start of the flex container (left side).
- **`height: 100vh;`**: Makes the navigation bar take up the full height of the viewport.

---

### Practice and Additional Tasks:

1. **Add Responsive Design**:
   - Add media queries to switch between horizontal and vertical navigation based on screen width.

2. **Add Icons**:
   - Use Font Awesome or custom icons for each navigation item to enhance the design.

3. **Responsive Toggle Menu**:
   - For smaller screens, create a toggle (hamburger) menu to hide and show the navigation bar.

By practicing these navigation bars, you'll become comfortable with Flexbox properties like `justify-content`, `align-items`, `flex-direction`, and how to layout items both horizontally and vertically. Let me know if you'd like further explanation or more practice ideas!