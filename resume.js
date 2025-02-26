function switchResume(version) {
    // Update buttons
    document.getElementById('tech-btn').classList.toggle('active', version === 'tech');
    document.getElementById('business-btn').classList.toggle('active', version === 'business');
    
    // Update resume display
    document.getElementById('tech-resume').classList.toggle('hidden', version !== 'tech');
    document.getElementById('business-resume').classList.toggle('hidden', version !== 'business');
    
    // Update download buttons
    document.getElementById('tech-download').classList.toggle('hidden', version !== 'tech');
    document.getElementById('business-download').classList.toggle('hidden', version !== 'business');
} 