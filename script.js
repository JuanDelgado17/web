// Seleccionar el botón
const loveButton = document.getElementById('love-button');

// Agregar el evento al hacer clic
loveButton.addEventListener('click', function () {
    // Llamar a la función para lanzar fuegos artificiales
    fireworkShow();
});

// Función para mostrar fuegos artificiales
function fireworkShow() {
    const duration = 5 * 1000; // Duración de la animación en milisegundos
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Confetti en la mitad superior de la pantalla
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));

    }, 250);
}


// Crear gatos animados que saltan
const catContainer = document.getElementById('cat-container');

        // Crear gato en la posición donde el usuario hace clic
        document.body.addEventListener('click', (event) => {
            const clickX = event.clientX;
            const clickY = event.clientY;
            createCat(clickX, clickY);
        });

        function createCat(x, y) {
            const cat = document.createElement('img');
            cat.src = 'Imagenes/Gato.png';  // Añade una imagen de un gato corriendo o saltando
            cat.classList.add('animated-cat');

            // Posicionar el gato en la ubicación del clic
            cat.style.left = `${x - 50}px`;  // Restamos la mitad del tamaño del gato para centrar
            cat.style.top = `${y - 50}px`;   // Restamos la mitad del tamaño del gato para centrar

            // Asignar una duración de animación aleatoria
            const randomDuration = Math.random() * 3 + 3;  // Duración entre 3 y 6 segundos
            cat.style.animationDuration = `${randomDuration}s`;

            // Aplicar una animación de movimiento aleatoria
            cat.style.animationName = 'moveCat';
            cat.style.animationDuration = `${randomDuration}s`;
            cat.style.animationIterationCount = '1'; // Solo se ejecuta una vez

            // Añadir el gato al contenedor
            catContainer.appendChild(cat);

            // Eliminar el gato después de que termine la animación
            setTimeout(() => {
                cat.remove();
            }, randomDuration * 1000);  // Tiempo en milisegundos basado en la duración de la animación
        }

// Mensajes In - Out
const messages = document.querySelectorAll('.love-message');
let currentMessage = 0;

function showMessages() {
    messages.forEach((msg, index) => {
        msg.style.display = 'none'; // Oculta todos los mensajes
    });
    messages[currentMessage].style.display = 'block'; // Muestra el mensaje actual
    currentMessage = (currentMessage + 1) % messages.length; // Ciclo para los mensajes
}

setInterval(showMessages, 4000); // Cambiar el mensaje cada 4 segundos

// Crear múltiples pollos
for (let i = 0; i < 50; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petals');
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    document.body.appendChild(petal);
}

let galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

// Muestra la imagen actual
function showImage(index) {
    galleryItems.forEach((item, i) => {
        item.classList.remove('active'); // Remueve la clase activa de todas las imágenes
        if (i === index) {
            item.classList.add('active'); // Agrega la clase activa solo a la imagen actual
        }
    });
}

// Función de presentación de imágenes
function slideShow() {
    showImage(currentIndex); // Muestra la imagen actual
    currentIndex = (currentIndex + 1) % galleryItems.length; // Avanza al siguiente índice
}

// Inicia el carrusel
setInterval(slideShow, 2000); // Cambia de imagen cada 6 segundos






