### **Intermediate Level: Asynchronous JavaScript (Fetching Data from a Public API)**

Fetching data from a public API is a crucial skill in web development, especially when working with asynchronous JavaScript. In this section, we'll practice using the Fetch API to get data from a weather API and display it on a webpage.

---

### **What is a Public API?**

- A **Public API** allows developers to access data and services provided by a server. 
- For this practice, we will use a weather API that provides weather data for various locations.

### **Popular Weather APIs**

- **OpenWeatherMap**: Provides weather data for cities worldwide. You can get an API key by signing up for free.
- **WeatherAPI**: Another option with similar functionality.

**Note:** Ensure you register for an API key for the chosen weather API.

---

### **How to Practice: Fetching Weather Data**

1. **Set Up HTML Structure**: Create a simple HTML page to display the weather data.
2. **Use Fetch to Get Weather Data**: Write JavaScript code to fetch data from the weather API.
3. **Display the Data**: Update the HTML to display the fetched weather data.

---

### **Step 1: HTML Structure**

Create a simple HTML file (e.g., `index.html`) with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .weather { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>Weather App</h1>
    <input type="text" id="cityInput" placeholder="Enter city name" />
    <button id="fetchWeather">Get Weather</button>
    <div class="weather" id="weatherData"></div>

    <script src="script.js"></script>
</body>
</html>
```

### **Step 2: JavaScript Code to Fetch Weather Data**

Create a JavaScript file (e.g., `script.js`) and add the following code:

```javascript
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const fetchWeatherButton = document.getElementById('fetchWeather');
const cityInput = document.getElementById('cityInput');
const weatherData = document.getElementById('weatherData');

fetchWeatherButton.addEventListener('click', () => {
    const city = cityInput.value;

    if (city) {
        fetchWeather(city);
    } else {
        weatherData.innerHTML = '<p>Please enter a city name.</p>';
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherData.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherDescription = weather[0].description;
    const temperature = main.temp;

    weatherData.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${weatherDescription}</p>
    `;
}
```

### **Step 3: Explanation of the Code**

1. **HTML Elements**:
   - An input field (`cityInput`) for the user to enter a city name.
   - A button (`fetchWeather`) to trigger the weather fetch.
   - A div (`weatherData`) to display the fetched weather information.

2. **JavaScript Logic**:
   - Add an event listener to the button to fetch the weather when clicked.
   - The `fetchWeather` function constructs the API URL using the city name and API key, then makes an asynchronous request to the weather API.
   - On a successful response, it calls the `displayWeather` function to update the UI with the received weather data.
   - If an error occurs (e.g., city not found), it displays an error message.

### **Step 4: Testing the Application**

1. Open your `index.html` file in a web browser.
2. Enter a city name (e.g., "London") and click the "Get Weather" button.
3. The application should display the current temperature and weather conditions for the specified city.

---

### **Additional Practice Ideas**

1. **Add More Features**: Enhance the app by displaying additional data such as humidity, wind speed, or weather icons.
2. **Improve User Experience**: Add loading indicators while the fetch request is in progress.
3. **Error Handling**: Improve error messages for better user experience (e.g., invalid city names).
4. **Styling**: Use CSS to style your application for a more attractive interface.

By completing this practice task, you will gain experience in using the Fetch API, handling asynchronous JavaScript, and working with external APIs.