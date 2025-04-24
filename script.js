// Set active link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu toggle
    function toggleMenu() {
        const navList = document.getElementById('nav-list');
        navList.classList.toggle('show');
    }
    
    window.toggleMenu = toggleMenu;
});