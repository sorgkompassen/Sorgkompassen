

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

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("XvCtnf9vApVHPljdT"); // Replace with your actual API key

  document.getElementById('send-button').addEventListener('click', function() {
    // Prevent default form submission
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    emailjs.send("service_kaxyek7", "template_8qdhbsg", {
      from_name: name,
      from_email: email
    })
    .then(function(response) {
      console.log('Success:', response);
      alert('Email sent successfully!');
    }, function(error) {
      console.log('Failed:', error);
      alert('Failed to send email.');
    });
  });
});
