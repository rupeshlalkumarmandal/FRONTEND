### Advanced Level: Responsive Navbar (Collapsing on Smaller Screens)

Building a responsive navigation bar is a critical skill in web development. A well-designed navbar adapts to different screen sizes, collapsing into a mobile-friendly format on smaller devices (e.g., with a "hamburger" menu icon).

---

### **Step-by-Step Guide to Building a Responsive Navbar**

#### **Step 1: Plan the Navbar Layout**

Your navigation bar will typically include:
1. **Logo or Brand Name**: The site logo or name.
2. **Navigation Links**: Links to different sections or pages.
3. **Hamburger Menu**: A collapsible icon for mobile devices.

---

#### **Step 2: HTML Structure**

Here’s the basic HTML structure for your navbar:

```html
<nav class="navbar">
  <div class="navbar__logo">MyBrand</div>
  <ul class="navbar__links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="navbar__toggle">
    <span class="navbar__hamburger"></span>
  </div>
</nav>
```

---

#### **Step 3: Style the Navbar Using CSS**

Here’s how to style the navbar for both desktop and mobile views:

```css
/* Basic styles for the navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
}

.navbar__logo {
  color: white;
  font-size: 1.5rem;
}

.navbar__links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar__links a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
}

.navbar__links a:hover {
  background-color: #555;
  border-radius: 4px;
}

/* Hamburger Menu (hidden on large screens) */
.navbar__toggle {
  display: none;
  cursor: pointer;
}

.navbar__hamburger {
  width: 30px;
  height: 3px;
  background-color: white;
  position: relative;
}

.navbar__hamburger::before,
.navbar__hamburger::after {
  content: '';
  width: 30px;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 0;
  transition: 0.3s ease;
}

.navbar__hamburger::before {
  top: -10px;
}

.navbar__hamburger::after {
  top: 10px;
}
```

---

#### **Step 4: Make the Navbar Responsive Using Media Queries**

Use media queries to modify the layout for smaller screens:

```css
/* Mobile View */
@media (max-width: 768px) {
  .navbar__links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 100%;
    text-align: center;
  }

  .navbar__toggle {
    display: block;
  }

  .navbar__toggle.active + .navbar__links {
    display: flex;
  }
}
```

---

#### **Step 5: Add JavaScript for Toggle Functionality**

You’ll need a little JavaScript to handle the hamburger menu toggle:

```html
<script>
  const toggle = document.querySelector('.navbar__toggle');
  const links = document.querySelector('.navbar__links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });
</script>
```

---

### **Step 6: Enhance with Transitions and Animations (Optional)**

You can add smooth transitions to enhance the appearance when the navbar opens and closes on mobile:

```css
.navbar__links {
  transition: max-height 0.3s ease;
  max-height: 0;
  overflow: hidden;
}

.navbar__links.active {
  max-height: 200px; /* Adjust based on the content */
}
```

---

### **Final Enhancements**

1. **Responsiveness**: Ensure that the navbar looks good on various devices, including tablets and large screens.
2. **Accessibility**: Add keyboard navigation support and ensure the menu can be opened and closed using the keyboard.
3. **Custom Fonts and Icons**: You can use custom fonts from Google Fonts and add icons (like the hamburger icon) from libraries like Font Awesome.

---

### **Conclusion**

By building a responsive navbar that collapses on smaller screens, you’ll gain hands-on experience with layout techniques, media queries, and interactivity. This project is a great addition to your portfolio, showing your ability to create adaptive, mobile-friendly websites.

Feel free to ask if you need more details or further assistance with any part of this project!