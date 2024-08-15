function displayMessage() {
    const nameInput = document.getElementById('nameInput');
    const messageContainer = document.getElementById('messageContainer');
    const container = document.getElementById('firework-container');

    // Display personalized message
    const name = nameInput.value.trim();
    if (name) {
        messageContainer.textContent = `Happy Independence Day, ${name}!`;
        messageContainer.style.display = 'block';

        // Launch fireworks
        launchFireworks();
    } else {
        alert('Please enter your name.');
    }
}

function launchFireworks() {
    const container = document.getElementById('firework-container');
    container.innerHTML = ''; // Clear existing fireworks

    for (let i = 0; i < 30; i++) { // Create 30 fireworks
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        container.appendChild(firework);

        setTimeout(() => {
            firework.style.display = 'block';
        }, i * 100); // Staggered start for fireworks

        setTimeout(() => {
            firework.style.display = 'none';
        }, i * 100 + 1000); // Hide firework after animation
    }
}
