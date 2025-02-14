document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // Show the popup when the page loads
    popup.classList.add("show");

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    // Optional: Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("show");
        }
    });
});


window.addEventListener('scroll', function () {
  var logoContainer = document.getElementById('logo-container');
});

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  prevScrollPos = currentScrollPos;
};

// Toggle the dropdown content in mobile view only when clicking the arrow
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownArrow = document.querySelector('.dropdown-arrow');

  dropdownArrow.addEventListener('click', function() {
    // Toggle the active class to show/hide dropdown
    dropdown.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("XvCtnf9vApVHPljdT"); // Replace with your actual API key

    document.getElementById('send-button').addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const consentChecked = document.getElementById('consent').checked;

        if (!name || !email || !consentChecked) {
            alert('Vänligen fyll i alla fält och godkänn villkoren.');
            return;
        }

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

  document.getElementById('send-button-kontakt').addEventListener('click', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Check if the checkbox is checked
    const checkbox = document.getElementById('privacy-policy');
    if (!checkbox.checked) {
      alert('Du måste godkänna lagring av uppgifter enligt integritetspolicyn för att kunna skicka meddelandet.');
      return; // Stop form submission if checkbox is not checked
    }

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
