// --- Countdown Timer Logic ---
// Set the target date for the wedding countdown (October 25, 2025, 00:00:00 local time)
const weddingDate = new Date("October 25, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime(); // Get current date and time
    const distance = weddingDate - now; // Calculate time remaining

    // Time calculations for days, hours, minutes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the corresponding elements, adding leading zero if less than 10
    // Ensure elements exist before attempting to update them
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const countdownTimerElement = document.getElementById("countdown-timer");

    if (daysElement && hoursElement && minutesElement) {
        daysElement.innerHTML = days < 10 ? "0" + days : days;
        hoursElement.innerHTML = hours < 10 ? "0" + hours : hours;
        minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    }

    // If the countdown is over (date has passed), stop updating and display a message
    if (distance < 0) {
        clearInterval(countdownInterval); // Stop the countdown
        if (countdownTimerElement) {
            countdownTimerElement.innerHTML = "<span class='text-2xl md:text-3xl font-semibold drop-shadow-lg text-black'>¡Ya nos casamos!</span>";
        }
    }
}, 1000); // Update every 1000 milliseconds (1 second)