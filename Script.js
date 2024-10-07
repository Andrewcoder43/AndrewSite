document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const newPostButton = document.getElementById('new-post-button');
    const emailPopup = document.getElementById('email-popup');
    const overlay = document.getElementById('overlay');
    const subscribeButton = document.getElementById('subscribe-button');
    const emailInput = document.getElementById('email-input');
    const body = document.body;

    console.log('Elements:', { darkModeToggle, newPostButton, emailPopup, overlay, subscribeButton, emailInput });

    if (darkModeToggle) {
        console.log('Dark mode toggle found:', darkModeToggle);
        
        darkModeToggle.addEventListener('click', () => {
            console.log('Dark mode toggle clicked');
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            console.log('Dark mode is now:', isDarkMode);
            localStorage.setItem('darkMode', isDarkMode);
        });
    
        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        console.log('Saved dark mode preference:', savedDarkMode);
        if (savedDarkMode === 'true') {
            console.log('Applying dark mode from saved preference');
            body.classList.add('dark-mode');
        }
    }

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