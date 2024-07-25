document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;


        const phoneNumber = '525641505137'; // Reemplaza con tu número de WhatsApp, incluyendo el código de país sin el signo "+"
        const whatsappURL = `https://wa.me/${phoneNumber}?text=¡Hola%20soy%20${encodeURIComponent(name)},%20te%20dejo%20mis%20DATOS!%0AEmail:%20${encodeURIComponent(email)}%0AServicio:%20${encodeURIComponent(service)}%0AMensaje:%20${encodeURIComponent(message)}%0A¡Contactame!`;

        window.open(whatsappURL, '_blank');
    });
});
