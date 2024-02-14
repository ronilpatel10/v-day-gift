// Function to calculate the time until the specified date
function getTimeUntil(date) {
    const now = new Date();
    const timeLeft = date - now;
    
    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
}

// Function to update the countdown display
function updateCountdown() {
    const countdownContainer = document.getElementById('countdown');
    const countdown = getTimeUntil(new Date('2024-03-28T12:20:00')); // Set the date here
    
    countdownContainer.innerHTML = `
        <p>${countdown.days} days ${countdown.hours} hours ${countdown.minutes} minutes ${countdown.seconds} seconds</p>
    `;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initially update the countdown when the page loads
updateCountdown();
