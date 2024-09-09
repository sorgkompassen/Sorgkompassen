

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

emailjs.init("XvCtnf9vApVHPljdT"); // Replace with your API key

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent default form submission

   emailjs.sendForm('service_kaxyek7', 'template_8qdhbsg', this)
      .then(function() {
         alert('Email sent successfully!');
      }, function(error) {
         alert('Failed to send email. Error: ' + error);
      });
});
