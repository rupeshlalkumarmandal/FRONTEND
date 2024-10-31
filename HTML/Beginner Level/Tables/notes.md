Let's explore **Tables** in HTML and how you can practice them step by step.

### Step 1: **Basic Table Structure**

An HTML table is created using the `<table>` tag. Inside the table, you'll use tags like `<tr>`, `<th>`, and `<td>` to define rows and cells.

#### Basic Structure of a Table:

```html
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
    <td>Row 1, Cell 3</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
    <td>Row 2, Cell 3</td>
  </tr>
</table>
```

#### Explanation:
1. **`<table>`**: Defines the table.
2. **`<tr>` (table row)**: Defines a row in the table.
3. **`<th>` (table header)**: Defines a header cell. Text in this cell is bold and centered by default.
4. **`<td>` (table data)**: Defines a standard cell containing data.

### Step 2: **Styling Tables with Attributes**

1. **Border**: To add a border to the table, use the `border` attribute.
   ```html
   <table border="1">
   ```

2. **Cell Padding and Cell Spacing**: These control the space between cells and the content inside cells.
   - **`cellpadding`**: Space inside the cell.
   - **`cellspacing`**: Space between cells.

   Example:
   ```html
   <table border="1" cellpadding="10" cellspacing="5">
   ```

### Step 3: **Colspan and Rowspan**

1. **`colspan`**: Makes a cell span across multiple columns.
   ```html
   <td colspan="2">This cell spans two columns</td>
   ```

2. **`rowspan`**: Makes a cell span across multiple rows.
   ```html
   <td rowspan="2">This cell spans two rows</td>
   ```

### Step 4: **Practice Example**

Here’s an example of a basic table with headers, data, and some styling:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Tables Practice</title>
  </head>
  <body>

    <h1>Basic Table Example</h1>

    <table border="1" cellpadding="10" cellspacing="0">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Occupation</th>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>25</td>
        <td>Software Developer</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>30</td>
        <td>Designer</td>
      </tr>
      <tr>
        <td colspan="3">End of Data</td>
      </tr>
    </table>

  </body>
</html>
```

### Step 5: **Practice Tasks**

1. **Create a Simple Table**:
   - Create a table listing your favorite books, movies, or anything you like. Include headers and at least 3 rows of data.

2. **Experiment with Colspan and Rowspan**:
   - Add cells that span multiple columns or rows. For example, merge header cells across multiple columns.

3. **Add Styling**:
   - Try different values for `cellpadding`, `cellspacing`, and `border` to see how it affects the appearance.
   
4. **Nested Tables**:
   - Create a table inside another table for practice.

### Step 6: **View Your Work**

- Save your file as `index.html` and open it in a browser to see how the table looks.
- Make small changes, refresh the page, and observe how the table updates.

Once you're comfortable with tables, we can move on to **Forms** in HTML next!

Let me know if you need more examples or tasks!