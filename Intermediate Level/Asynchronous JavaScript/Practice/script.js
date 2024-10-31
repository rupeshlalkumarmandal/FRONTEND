const apiKey = '71d3340ca78761cb6a8b921de55d9c44'; // Replace with your actual API key
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

    const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`


    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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