// --- Mobile Menu Toggle Logic ---
document.getElementById('menu-button').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.toggle('hidden'); // Toggles visibility for mobile menu
        navLinks.classList.toggle('flex');   // Toggles flex display for mobile menu
    }
});

// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Scroll to the target section smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close mobile menu after clicking a link, if the menu is open and on a mobile screen
        const navLinks = document.getElementById('nav-links');
        // Check if navLinks exists and is not hidden (meaning it's visible on mobile)
        if (navLinks && !navLinks.classList.contains('hidden') && window.innerWidth < 768) {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex');
        }
    });
});