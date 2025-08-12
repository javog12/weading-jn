// --- Falling Petals Effect Logic ---
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal'); 

    // Usamos el SVG como imagen de fondo para conservar sus colores originales.
    petal.style.backgroundImage = 'url(images/petalo.svg)';
    petal.style.backgroundSize = 'contain';
    petal.style.backgroundRepeat = 'no-repeat';
    petal.style.backgroundPosition = 'center';

    // Posición horizontal inicial aleatoria
    petal.style.left = Math.random() * 100 + 'vw';

    // Tamaño del pétalo aleatorio. Usamos el mismo valor para ancho y alto para mantener la forma.
    const size = Math.random() * 25 + 15; // Tamaño entre 15px y 40px
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // Duraciones y retrasos de animación aleatorios para un aspecto natural
    const fallDuration = Math.random() * 10 + 5; // Duración de caída entre 5 y 15 segundos
    const swayDuration = Math.random() * 4 + 2;  // Duración del balanceo entre 2 y 6 segundos
    const animationDelay = Math.random() * 5;    // Retraso de hasta 5 segundos antes de que empiece a caer

    // Asignamos las propiedades de animación (asumiendo que los keyframes 'fall' y 'sway' existen en tu CSS)
    petal.style.animation = `
        fall ${fallDuration}s linear ${animationDelay}s forwards,
        sway ${swayDuration}s ease-in-out ${animationDelay}s infinite alternate
    `;

    // Rotación inicial y distancia de balanceo aleatorias
    petal.style.setProperty('--initial-rotation', Math.random() * 360 + 'deg');
    petal.style.setProperty('--sway-distance', Math.random() * 40 + 20 + 'px'); // Balanceo entre 20px y 60px

    document.body.appendChild(petal);

    // Eliminamos el pétalo del DOM cuando su animación de caída termina para no consumir memoria
    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

// Generamos nuevos pétalos periódicamente para un efecto más denso
// Aumentamos el intervalo para que caigan menos pétalos (antes 400ms).
setInterval(createPetal, 800);