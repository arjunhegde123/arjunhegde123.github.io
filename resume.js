function switchResume(version) {
    // Update buttons
    document.getElementById('tech-btn').classList.toggle('active', version === 'tech');
    document.getElementById('business-btn').classList.toggle('active', version === 'business');
    
    // Update resume display - using the same structure as tech resume
    document.getElementById('tech-resume').classList.toggle('hidden', version !== 'tech');
    document.getElementById('business-resume').classList.toggle('hidden', version !== 'business');
    
    // Update download buttons
    document.getElementById('tech-download').classList.toggle('hidden', version !== 'tech');
    document.getElementById('business-download').classList.toggle('hidden', version !== 'business');
}

let currentZoom = 1;

function adjustZoom(delta) {
    currentZoom = Math.max(0.5, Math.min(2, currentZoom + delta));
    const activeFrame = document.querySelector('.resume-preview:not(.hidden) iframe');
    if (activeFrame) {
        activeFrame.style.transform = `scale(${currentZoom})`;
    }
} 