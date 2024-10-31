To level up your **HTML skills** with **CSS integration**, let's go over how to **link an external CSS file** and practice **styling your HTML elements**. This will help you enhance your webpage design and improve your layout skills.

### Step 1: **Creating an External CSS File**

1. **Create two files**:
   - An HTML file (e.g., `index.html`)
   - A CSS file (e.g., `style.css`)

2. **Link the CSS file** to your HTML file.

   Inside the `<head>` section of your HTML file, link the external CSS file like this:

   ```html
   <link rel="stylesheet" href="style.css">
   ```

### Step 2: **Basic HTML Structure for Practice**

Let’s start with a simple HTML structure.

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Integration Practice</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>Welcome to My Webpage</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <section>
      <h2>About Me</h2>
      <p>This is a brief introduction about me and my work.</p>
    </section>

    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </body>
</html>
```

### Step 3: **Write Basic CSS**

Now, let’s create a `style.css` file and apply some styles to the HTML structure.

**style.css:**
```css
/* General styles for the whole page */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

/* Header styling */
header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
}

/* Navigation styling */
nav ul {
  list-style: none;
  background-color: #444;
  padding: 0;
  margin: 0;
  text-align: center;
}

nav ul li {
  display: inline-block;
  margin-right: 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
}

/* Section styling */
section {
  padding: 20px;
  background-color: white;
  margin: 10px;
}

/* Footer styling */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
```

### Step 4: **Explaining the Code**

#### 1. **Linking the CSS file**:
   - The `<link rel="stylesheet" href="style.css">` line in the `<head>` section connects your HTML to the external CSS file.

#### 2. **General styles for the body**:
   - `font-family: Arial, sans-serif;` ensures the font is clean and modern.
   - `background-color: #f0f0f0;` adds a light gray background to the whole page.

#### 3. **Header and Footer**:
   - Both have a dark background (`#333`), and the text is white.
   - Padding adds space inside the header and footer for a better look.

#### 4. **Navigation Bar (nav)**:
   - The `ul` list is turned into a horizontal menu using `display: inline-block` for list items (`<li>`).
   - Links (`<a>`) are styled with white text and no underlines for a clean look.

#### 5. **Section Styling**:
   - The `section` has padding for spacing, and it stands out with a white background.

### Step 5: **Practice Tasks**

1. **Experiment with Colors**:
   - Change the `background-color` of the `header`, `nav`, and `footer` to your preferred colors.
   - Use different colors for links in `nav ul li a:hover` to add hover effects.

2. **Add Padding and Margins**:
   - Modify the `padding` and `margin` values to see how spacing changes around elements.
   
3. **Typography Practice**:
   - Try different `font-family` values like `Georgia`, `Verdana`, etc., to see how the page style changes.

4. **Add Border**:
   - Add borders to elements (e.g., `section`) to give them a boxed look. For example:
     ```css
     section {
       border: 2px solid #333;
     }
     ```

5. **Play with Width and Layout**:
   - Set the `width` of the `section` to `80%` and use `margin: 0 auto;` to center it on the page.

### Step 6: **View Your Work**

- Save your `index.html` and `style.css` files.
- Open `index.html` in your browser and view the changes.
- Make small adjustments in the CSS and refresh the browser to see the immediate effects.

### Step 7: **More Advanced Practice**

1. **Responsive Design**:
   - Start adding media queries to make your page responsive. Example:
     ```css
     @media (max-width: 600px) {
       nav ul li {
         display: block;
         margin-bottom: 10px;
       }
     }
     ```

2. **CSS Grid or Flexbox**:
   - Once comfortable, use CSS Grid or Flexbox to lay out elements in a more advanced, flexible way.

Let me know if you want more practice tasks or need help with specific styling techniques!