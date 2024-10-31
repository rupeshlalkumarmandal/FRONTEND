### Advanced Level: Combining Flexbox and Grid for Complex Layouts

Combining Flexbox and Grid allows for highly flexible and complex layouts, making it possible to handle both small components and large grid structures on a page. Here's how to practice these two powerful layout techniques together.

---

### **Step-by-Step Guide to Practice Flexbox and Grid**

#### **Step 1: Create the HTML Structure**

Start with a basic HTML layout that has multiple sections, so you can apply Grid for the main structure and Flexbox for smaller components.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Layout with Grid and Flexbox</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">Header</header>
    <nav class="nav">Navigation</nav>
    <main class="main">
        <section class="content">
            <div class="flex-container">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
        </section>
        <aside class="sidebar">Sidebar</aside>
    </main>
    <footer class="footer">Footer</footer>
</body>
</html>
```

---

### **Step 2: Define the Grid Layout**

Use CSS Grid for the overall page structure. You can create a typical layout with a header, navigation, main content, sidebar, and footer.

```css
body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "nav main"
        "footer footer";
    min-height: 100vh;
}

.header {
    grid-area: header;
    background-color: #4caf50;
    padding: 20px;
    text-align: center;
    color: white;
}

.nav {
    grid-area: nav;
    background-color: #e91e63;
    padding: 20px;
    color: white;
}

.main {
    grid-area: main;
    padding: 20px;
}

.sidebar {
    background-color: #f0f0f0;
    padding: 20px;
}

.footer {
    grid-area: footer;
    background-color: #2196f3;
    padding: 20px;
    text-align: center;
    color: white;
}
```

---

### **Step 3: Use Flexbox for Components**

Inside the `main` section, use Flexbox to layout the smaller components like the content section, flex container, and flex items.

```css
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #ddd;
}

.flex-item {
    background-color: #4caf50;
    color: white;
    padding: 20px;
    flex: 1;
    text-align: center;
}
```

- **`justify-content`**: Space the flex items evenly.
- **`align-items`**: Align the items vertically in the center.
- **`gap`**: Adds space between items without adding margin.

---

### **Step 4: Create a Responsive Layout**

Combine Flexbox and Grid to create a responsive design. Use media queries to adjust the layout for smaller screens, changing the number of columns or switching between Grid and Flexbox as needed.

```css
@media (max-width: 768px) {
    body {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "nav"
            "main"
            "footer";
    }

    .flex-container {
        flex-direction: column;
        align-items: stretch;
    }
}
```

---

### **Step 5: Practice Challenges**

1. **Complex Layout**:
   - Create a multi-column webpage where the main content uses Grid, and inner components like cards or navigation bars use Flexbox.

2. **Grid with Flexbox Navigation**:
   - Use CSS Grid for the main layout and Flexbox to create a responsive navigation bar that switches from horizontal to vertical on smaller screens.

3. **Portfolio or Dashboard**:
   - Build a portfolio page or dashboard where the overall layout is defined by Grid, and individual sections like project cards or buttons are arranged using Flexbox.

4. **Media Gallery**:
   - Use Grid to create a media gallery layout, with Flexbox handling the alignment of image captions and descriptions.

---

### **Conclusion**

By combining CSS Grid and Flexbox, you can create highly versatile, complex layouts that adapt well to various screen sizes and content requirements. Practicing both layout methods together will allow you to build more robust and responsive web pages.

Let me know if you'd like to try more challenges or need help with specific layout designs!