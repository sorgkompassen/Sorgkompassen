window.addEventListener('scroll', function () {
  var logoContainer = document.getElementById('logo-container');


});

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;



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
      alert('Hej och tack för att du har valt att skriva upp dig på mitt nyhetsbrev!');
    }, function(error) {
      console.log('Failed:', error);
      alert('Misslyckades tyvärr att skriva upp dig för nyhetsbrev, försök igen lite senare');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("XvCtnf9vApVHPljdT"); // Replace with your actual API key

  document.getElementById('send-button-kontakt').addEventListener('click', function() {
    // Prevent default form submission
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_kaxyek7", "template_59rljvb", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      console.log('Success:', response);
      alert('Hej och tack för att du skickat ett meddelande till mig, jag kommer svara så snabbt som möjligt');
    }, function(error) {
      console.log('Failed:', error);
      alert('Misslyckades tyvärr att skicka meddelande, försök igen lite senare');
    });
  });
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle active class on the question
    question.classList.toggle('active');

    // Toggle the maxHeight for the answer to show/hide
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});