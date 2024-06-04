

window.addEventListener('scroll', function () {
    var logoContainer = document.getElementById('logo-container');

    if (window.scrollY > 50) {
        logoContainer.classList.add('scrolled');
    } else {
        logoContainer.classList.remove('scrolled');
    }
});

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("main-header").classList.remove("nav-up");
    } else {
        document.getElementById("main-header").classList.add("nav-up");
    }

    prevScrollPos = currentScrollPos;
};
