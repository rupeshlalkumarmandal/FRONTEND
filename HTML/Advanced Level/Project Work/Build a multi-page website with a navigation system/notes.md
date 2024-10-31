### Advanced Level (Project Work): Build a Multi-Page Website with a Navigation System

Building a multi-page website with a navigation system is an excellent way to practice your skills in web development. Here’s how to approach it step by step.

---

### Step 1: **Plan the Structure of Your Website**

Before writing code, plan the structure of your website:

- **Pages**: Decide how many pages your website will have. Common examples include:
  - Home (`index.html`)
  - About Us (`about.html`)
  - Services (`services.html`)
  - Contact Us (`contact.html`)

- **Navigation Bar**: Determine the layout and links for your navigation bar. Ensure users can easily move between pages.

---

### Step 2: **Set Up Your Project Folder**

1. Create a project folder:
   - `/my-website/`
2. Inside the folder, create an HTML file for each page:
   - `/my-website/index.html`
   - `/my-website/about.html`
   - `/my-website/services.html`
   - `/my-website/contact.html`

3. Create a folder for your CSS and JavaScript:
   - `/my-website/css/`
   - `/my-website/js/`

4. Create your main style file:
   - `/my-website/css/style.css`

---

### Step 3: **Create the HTML Files**

For each HTML file, create a basic structure and include links to the CSS and navigation:

**Example (index.html)**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | My Website</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navigation Bar -->
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul>
  </nav>

  <!-- Page Content -->
  <header>
    <h1>Welcome to Our Website!</h1>
    <p>Explore our services and learn more about us.</p>
  </header>

</body>
</html>
```

Repeat this structure for `about.html`, `services.html`, and `contact.html`, changing the content appropriately.

---

### Step 4: **Style Your Website Using CSS**

Create a basic style for your navigation bar and layout in `style.css`:

```css
/* Reset some default styles */
body, ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Basic page layout */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
}

nav {
  background-color: #333;
  color: white;
}

nav ul {
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
}

nav ul li a:hover {
  background-color: #555;
}

header {
  text-align: center;
  padding: 50px;
  background-color: #fff;
}
```

This CSS file will:
- Style your navigation bar with a dark background and white text.
- Center the navigation links.
- Add hover effects for better user experience.

---

### Step 5: **Add a Responsive Navigation Bar**

Make your navigation bar responsive using media queries:

```css
/* Responsive Design */
@media screen and (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin-bottom: 10px;
  }
}
```

This will adjust the layout for smaller screens, stacking the navigation links vertically.

---

### Step 6: **Add Interactive JavaScript (Optional)**

To practice JavaScript, you can add interactive features like a mobile navigation toggle. In your `index.html` and other pages, add a script tag to link your JavaScript file:

```html
<script src="js/main.js"></script>
```

In `main.js`, add a basic mobile menu toggle:

```javascript
const menu = document.querySelector('nav ul');
document.querySelector('.menu-toggle').addEventListener('click', function() {
  menu.classList.toggle('active');
});
```

You will need to update your HTML and CSS for the mobile menu.

---

### Step 7: **Link the Pages**

Make sure the navigation links are working by clicking each one and navigating between your pages. Test on both desktop and mobile to ensure the navigation is user-friendly.

---

### Step 8: **Test and Deploy**

1. **Test locally**: Use your browser to check how the website behaves.
2. **Optimize for SEO**: Add meta tags and alt text for images.
3. **Deploy**: Upload your website to a hosting service like GitHub Pages, Netlify, or a custom domain.

---

### Step 9: **Add More Features**

Once the basic structure is in place, you can add additional features:
- **Contact Form**: Create a simple form in `contact.html` to practice form elements.
- **Gallery**: Include images in the services or about pages and ensure they are optimized for performance.
- **JavaScript Interactivity**: Add smooth scrolling or animations to enhance user experience.

---

### Practice Checklist:

1. Create at least 4 linked pages (Home, About, Services, Contact).
2. Implement a navigation bar with working links.
3. Style your website using external CSS.
4. Make your navigation responsive.
5. Add JavaScript for interactivity (optional).
6. Test the website and deploy it online.

By following these steps, you’ll have a complete multi-page website project with a navigation system, applying various advanced skills in HTML, CSS, and JavaScript.