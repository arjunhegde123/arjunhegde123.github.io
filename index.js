// Fetch weather data from OpenWeatherMap API
async function getWeather() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=New York');
    const data = await response.json();
    
    const weatherDiv = document.getElementById('weather-data');
    weatherDiv.innerHTML = `
      <p>Temperature: ${data.current.temp_f}°F</p>
      <p>Condition: ${data.current.condition.text}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather:', error);
    const weatherDiv = document.getElementById('weather-data');
    weatherDiv.innerHTML = 'Unable to load weather data';
  }
}

// Call the function when page loads
getWeather(); 