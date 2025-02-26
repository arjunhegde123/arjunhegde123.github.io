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

// Mouse follower effect
document.addEventListener('mousemove', (e) => {
    const follower = document.getElementById('mouse-follower');
    if (follower) {
        follower.style.left = e.clientX - 10 + 'px';
        follower.style.top = e.clientY - 10 + 'px';
        
        // Scale effect near clickable elements
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        if (hoveredElement && (hoveredElement.tagName === 'A' || hoveredElement.tagName === 'BUTTON')) {
            follower.style.transform = 'scale(2)';
        } else {
            follower.style.transform = 'scale(1)';
        }
    }
});