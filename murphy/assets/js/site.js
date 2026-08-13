const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

const bookingForm = document.querySelector('[data-booking-form]');

if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!bookingForm.reportValidity()) {
            return;
        }

        const formData = new FormData(bookingForm);
        const message = [
            'Hello Murphy Express Spa & Salon, I would like to book an appointment.',
            '',
            `Name: ${formData.get('name')}`,
            `Phone: ${formData.get('phone')}`,
            `Service: ${formData.get('service')}`,
            `Message: ${formData.get('message')}`,
        ].join('\n');
        const whatsappUrl = `https://wa.me/917498095833?text=${encodeURIComponent(message)}`;
        const status = bookingForm.querySelector('[data-form-status]');

        if (status) {
            status.hidden = false;
        }

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}
