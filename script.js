    // TYPING TEXT ANIMATION

    const typed = new Typed(".spanname", {
    strings: ["Chan Klear Baylon", "Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// DEBOUNCE SCROLL EVENTS

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

    // NAVBAR FIXED WHEN SCROLL

    document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.querySelector('.header');
        const navbarHeight = navbar.offsetHeight;
        const navbarOverlay = document.querySelector('.overlay');
        const revealElements = document.querySelectorAll('.reveal');

        function navbarSticky() {
            if (window.pageYOffset > navbarHeight) {
                navbar.classList.add('navbarsticked');
            } else {
                navbar.classList.remove('navbarsticked');
                }
            }

    // REVEAL ON SCROLL
        
        function revealOnScroll() {
            revealElements.forEach(function(element) {
                const revealPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
    
                if (revealPosition < windowHeight / 1.3) {
                    element.classList.add('revealed');
                } 
            });
        }

    // SMALL SCREEN OVERLAY REMOVED WHEN OVER 992 Pixels

    function sideNavbarReveal() {
        if (screen.availWidth < 992) {
            navbarOverlay.classList.add('overlay');
        } else {
            navbarOverlay.classList.remove('overlay');
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('scroll', navbarSticky);
    window.addEventListener('resize', sideNavbarReveal);

});