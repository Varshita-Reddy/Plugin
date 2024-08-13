let startTime;

function startTimer() {
    startTime = new Date();
    updateTimer();
}
function updateTimer() {
    const now = new Date();
    const elapsed = now - startTime; // Elapsed time in milliseconds

    const hours = String(Math.floor(elapsed / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((elapsed % (1000 * 60)) / 1000)).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const timeElement = document.getElementById('time');
    timeElement.textContent = timeString;

    // Change text color to white when time is 0:0:0
    if (hours === '00' && minutes === '00' && seconds === '00') {
        timeElement.style.color = 'white';
    } else {
        timeElement.style.color = 'white'; // Ensures the timer text is always white
    }

    setTimeout(updateTimer, 1000); // Update timer every second
}

// Initialize the timer when the popup is opened
startTimer();
