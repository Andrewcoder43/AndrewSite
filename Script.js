document.addEventListener('DOMContentLoaded', () => {
    const newPostButton = document.getElementById('new-post-button');
    const emailPopup = document.getElementById('email-popup');
    const overlay = document.getElementById('overlay');
    const subscribeButton = document.getElementById('subscribe-button');
    const emailInput = document.getElementById('email-input');

    console.log('Elements:', { newPostButton, emailPopup, overlay, subscribeButton, emailInput });

    if (newPostButton && emailPopup && overlay) {
        newPostButton.addEventListener('click', () => {
            console.log('New post button clicked');
            emailPopup.style.display = 'block';
            overlay.style.display = 'block';
        });
    }

    if (overlay && emailPopup) {
        overlay.addEventListener('click', () => {
            console.log('Overlay clicked');
            emailPopup.style.display = 'none';
            overlay.style.display = 'none';
        });
    }

    if (subscribeButton && emailInput && emailPopup && overlay) {
        subscribeButton.addEventListener('click', () => {
            console.log('Subscribe button clicked');
            const email = emailInput.value.trim();
            if (email && isValidEmail(email)) {
                // Here you would typically send the email to your server or email service
                console.log("Subscribed email:", email);
                alert("Thank you for subscribing!");
                emailPopup.style.display = 'none';
                overlay.style.display = 'none';
                emailInput.value = '';
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    console.log('Script loaded');
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}