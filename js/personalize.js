// --- Personalized Invitation Logic ---
document.addEventListener('DOMContentLoaded', function() {
    // Create a URLSearchParams object from the current URL's query string
    const urlParams = new URLSearchParams(window.location.search);
    // Get the unique code from the 'invitados' parameter (e.g., "j&n01")
    const guestCode = urlParams.get('invitados');

    const invitationSection = document.getElementById('invitacion-personal');
    const guestNamesElement = document.getElementById('guest-names');
    const guestPassesElement = document.getElementById('guest-passes');
    // --- NUEVO: Obtener el campo de nombre del formulario RSVP ---
    const rsvpNameInput = document.getElementById('name');


    // Check if a guest code is provided in the URL and if it exists in our guestList
    if (guestCode && guestList[guestCode] && invitationSection && guestNamesElement && guestPassesElement) {
        const guestData = guestList[guestCode];

        // Populate the elements with the data for that specific guest
        guestNamesElement.textContent = guestData.names;
        guestPassesElement.textContent = guestData.passes;


        // --- NUEVO: Pre-rellenar el campo del formulario y hacerlo de solo lectura ---
        if (rsvpNameInput) {
            rsvpNameInput.value = guestData.names;
            rsvpNameInput.readOnly = true;
        }

        // Make the personalized section visible
        invitationSection.classList.remove('hidden');
    } else {
        // If no code is provided or the code is invalid, hide the section.
        invitationSection.classList.add('hidden');
    }
});