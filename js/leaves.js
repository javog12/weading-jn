// --- Falling Petals Effect Logic ---
function createPetal() {
    const petal = document.createElement('div');
    // Asumo que tienes una clase .petal en tu CSS similar a la antigua .leaf.
    // Si no, puede que necesites cambiar 'petal' por 'leaf' en la línea de abajo.
    petal.classList.add('petal'); 

    // Usamos el SVG como una máscara para darle forma al div
    petal.style.maskImage = 'url(images/petalo.svg)';
    petal.style.webkitMaskImage = 'url(images/petalo.svg)'; // Para Safari/Chrome
    petal.style.maskSize = 'contain';
    petal.style.webkitMaskSize = 'contain';
    petal.style.maskRepeat = 'no-repeat';
    petal.style.webkitMaskRepeat = 'no-repeat';

    // Posición horizontal inicial aleatoria
    petal.style.left = Math.random() * 100 + 'vw';

    // Tamaño del pétalo aleatorio. Usamos el mismo valor para ancho y alto para mantener la forma.
    const size = Math.random() * 25 + 15; // Tamaño entre 15px y 40px
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // Duraciones y retrasos de animación aleatorios para un aspecto natural
    const fallDuration = Math.random() * 10 + 5; // Duración de caída entre 5 y 15 segundos
    const swayDuration = Math.random() * 3 + 2;  // Duración del balanceo entre 2 y 5 segundos
    const animationDelay = Math.random() * 5;    // Retraso de hasta 5 segundos

    // Asignamos las propiedades de animación (asumiendo que los keyframes 'fall' y 'sway' existen en tu CSS)
    petal.style.animation = `
        fall ${fallDuration}s linear ${animationDelay}s forwards,
        sway ${swayDuration}s ease-in-out ${animationDelay}s infinite alternate
    `;

    // Rotación inicial y distancia de balanceo aleatorias
    petal.style.setProperty('--initial-rotation', Math.random() * 360 + 'deg');
    petal.style.setProperty('--sway-distance', Math.random() * 40 + 20 + 'px'); // Balanceo entre 20px y 60px

    // Color del pétalo aleatorio. La máscara se rellenará con este color.
    const colors = [
        `hsl(330, ${Math.floor(Math.random() * 20) + 40}%, ${Math.floor(Math.random() * 10) + 75}%)`, // Rosas suaves
        `hsl(280, ${Math.floor(Math.random() * 20) + 30}%, ${Math.floor(Math.random() * 10) + 80}%)`, // Morados suaves
        `hsl(40, ${Math.random() * 10 + 5}%, ${Math.floor(Math.random() * 5) + 90}%)`   // Blancos cremosos
    ];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(petal);

    // Eliminamos el pétalo del DOM cuando su animación de caída termina para no consumir memoria
    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

// Generamos nuevos pétalos periódicamente para un efecto más denso
setInterval(createPetal, 350);