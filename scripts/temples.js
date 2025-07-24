document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', () => {
            // Toggle the 'show' class on the navigation menu
            navMenu.classList.toggle('show');

            // Toggle the icon between bars and 'X'
            const icon = hamburgerButton.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark'); // Font Awesome 'X' icon
                hamburgerButton.setAttribute('aria-label', 'Close navigation menu');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
                hamburgerButton.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    }
});
