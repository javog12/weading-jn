// --- Falling Leaves Effect Logic ---
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // Randomize initial horizontal position (from 0% to 100% of viewport width)
    leaf.style.left = Math.random() * 100 + 'vw';

    // Randomize leaf size and elongation for visual variety
    const baseSize = Math.random() * 25 + 15; // Size between 15px and 40px
    leaf.style.setProperty('--leaf-width', baseSize + 'px');
    leaf.style.setProperty('--leaf-height', baseSize * (1.2 + Math.random() * 0.8) + 'px'); // Elongation between 1.2x and 2x

    // Randomize animation durations and delays for a natural look
    const fallDuration = Math.random() * 10 + 5; // Fall duration between 5 and 15 seconds
    const swayDuration = Math.random() * 3 + 2; // Sway duration between 2 and 5 seconds
    const animationDelay = Math.random() * 5; // Delay up to 5 seconds before animation starts

    // Set animation properties
    leaf.style.animation = `
        fall ${fallDuration}s linear ${animationDelay}s forwards,
        sway ${swayDuration}s ease-in-out ${animationDelay}s infinite alternate
    `;

    // Randomize initial rotation and sway distance for each leaf
    leaf.style.setProperty('--initial-rotation', Math.random() * 360 + 'deg');
    leaf.style.setProperty('--sway-distance', Math.random() * 40 + 20 + 'px'); // Sway distance between 20px and 60px

    // Randomize leaf color using HSL for subtle pinks, purples, and creams
    const colors = [
        `hsl(330, ${Math.floor(Math.random() * 20) + 40}%, ${Math.floor(Math.random() * 10) + 75}%)`, // Soft pinks
        `hsl(280, ${Math.floor(Math.random() * 20) + 30}%, ${Math.floor(Math.random() * 10) + 80}%)`, // Soft purples
        `hsl(40, ${Math.random() * 10 + 5}%, ${Math.floor(Math.random() * 5) + 90}%)`   // Creamy off-whites
    ];
    leaf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(leaf); // Add the leaf to the body

    // Remove leaf from DOM after its animation ends to prevent memory leaks
    leaf.addEventListener('animationend', () => {
        leaf.remove();
    });
}

// Generate new leaves periodically (every 2 seconds)
setInterval(createLeaf, 2000);