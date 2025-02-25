// Fetch weather data from OpenWeatherMap API
async function getWeather() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=YOUR_API_KEY');
    const data = await response.json();
    
    const weatherDiv = document.getElementById('weather-data');
    weatherDiv.innerHTML = `
      <p>Temperature: ${data.main.temp}°F</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather:', error);
    const weatherDiv = document.getElementById('weather-data');
    weatherDiv.innerHTML = 'Unable to load weather data';
  }
}

// Call the function when page loads
getWeather();

// If you choose NASA APOD, replace the weather code with:
async function getNasaImage() {
  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=JMrnc3jk18dIodumUOsK6GhfDXZD0oafGG6rx6yB');
    const data = await response.json();
    
    const contentDiv = document.getElementById('weather-data');
    contentDiv.innerHTML = `
      <img src="${data.url}" alt="${data.title}" style="max-width: 100%">
      <p>${data.title}</p>
      <p>${data.explanation}</p>
    `;
  } catch (error) {
    console.error('Error fetching NASA image:', error);
    const contentDiv = document.getElementById('weather-data');
    contentDiv.innerHTML = 'Unable to load NASA image';
  }
}

// Call the function when page loads
getNasaImage();