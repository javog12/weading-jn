// --- Personalized Invitation Logic ---
document.addEventListener('DOMContentLoaded', function() {
    // Create a URLSearchParams object from the current URL's query string
    const urlParams = new URLSearchParams(window.location.search);
    // Get the unique code from the 'invitados' parameter (e.g., "j&n01")
    const guestCode = urlParams.get('invitados');

    // Check if a valid guest code is provided.
    // The guestList object is defined in guests.js
    if (guestCode && guestList[guestCode]) {
        // --- Code is valid, proceed to personalize the page ---
        const invitationSection = document.getElementById('invitacion-personal');
        const guestNamesElement = document.getElementById('guest-names');
        const guestPassesElement = document.getElementById('guest-passes');
        const rsvpNameInput = document.getElementById('name');

        // Ensure all required elements exist before trying to modify them
        if (invitationSection && guestNamesElement && guestPassesElement) {
            const guestData = guestList[guestCode];

            // Populate the elements with the data for that specific guest
            guestNamesElement.textContent = guestData.names;
            guestPassesElement.textContent = guestData.passes;

            // Pre-fill the RSVP form name and make it read-only
            if (rsvpNameInput) {
                rsvpNameInput.value = guestData.names;
                rsvpNameInput.readOnly = true;
            }

            // Make the personalized section visible
            invitationSection.classList.remove('hidden');
        }
    } else {
        // --- Code is missing or invalid, redirect to a private access page ---
        window.location.href = 'private.html';
    }
});