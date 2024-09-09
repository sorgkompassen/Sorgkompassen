

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

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting in the traditional way

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Create an object with the values to send in the email
  const templateParams = {
    name: name,
    email: email
  };

  // Send the email using EmailJS
  emailjs.send("service_kaxyek7", "template_8qdhbsg", templateParams)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Tack! Ditt meddelande har skickats.");
    }, function(error) {
      console.log("FAILED...", error);
      alert("Tyvärr gick det inte att skicka ditt meddelande.");
    });
});
