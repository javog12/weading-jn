// --- Personalized Invitation Logic ---
document.addEventListener('DOMContentLoaded', function() {
    // Create a URLSearchParams object from the current URL's query string
    const urlParams = new URLSearchParams(window.location.search);
    // Get the value of the 'invitados' parameter
    const guestNames = urlParams.get('invitados');

    const invitationSection = document.getElementById('invitacion-personal');
    const guestNamesElement = document.getElementById('guest-names');

    // If the 'invitados' parameter exists and the elements are on the page
    if (guestNames && invitationSection && guestNamesElement) {
        // Replace '+' characters from the URL with spaces and set the text
        guestNamesElement.textContent = guestNames.replace(/\+/g, ' ');
        // Make the personalized section visible by removing the 'hidden' class
        invitationSection.classList.remove('hidden');
    }
});