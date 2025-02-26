// Fetch a random dad joke
async function getDadJoke() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Arjun Personal Website (Cornell Tech Class Project)'
      }
    });
    const data = await response.json();
    
    const jokeDiv = document.getElementById('joke-content');
    jokeDiv.innerHTML = `
      <p class="joke">${data.joke}</p>
      <button onclick="getDadJoke()" class="refresh-btn">Get Another Joke</button>
    `;
  } catch (error) {
    console.error('Error fetching dad joke:', error);
    const jokeDiv = document.getElementById('joke-content');
    jokeDiv.innerHTML = 'Unable to load dad joke';
  }
}

// Call the function when page loads
getDadJoke();