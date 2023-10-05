// Get the clock element
const clock = document.getElementById('clock');

// Update the clock every second
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update the clock content
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial update
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
