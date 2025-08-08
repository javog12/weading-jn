document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    if (!form) {
        console.error('RSVP form not found!');
        return;
    }

    // El número de teléfono donde quieres recibir los mensajes de WhatsApp.
    // IMPORTANTE: Reemplaza con tu número de teléfono, incluyendo el código de país, pero sin '+', '-', o espacios.
    // Basado en tu footer, parece ser "59169197397".
    const phoneNumber = "59169197397"; 

    const handleSubmit = (event) => {
        event.preventDefault();

        const status = document.getElementById('form-status');
        const formData = new FormData(event.target);

        const name = formData.get('NombreCompleto');
        const attendance = formData.get('Asistencia');
        const message = formData.get('MensajeCancion');

        // Validación básica
        if (!name || !attendance) {
            status.innerHTML = "Por favor, completa tu nombre y selecciona si asistirás.";
            status.style.color = "#8B0000"; // Rojo oscuro para errores
            return;
        }

        // Construir el mensaje para WhatsApp
        let whatsappMessage = `¡Hola! 👋\n\nConfirmación de asistencia para la boda de J & N.\n\n`;
        whatsappMessage += `*Nombre:* ${name}\n`;
        whatsappMessage += `*Asistencia:* ${attendance}`;

        if (message) {
            whatsappMessage += `\n*Mensaje/Canción:* ${message}`;
        }

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        status.innerHTML = "¡Gracias! Serás redirigido a WhatsApp para enviar tu confirmación.";
        status.style.color = "#6C6E4A";
        form.reset();
    };

    form.addEventListener('submit', handleSubmit);
});