var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formObjects = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };

  console.log('Form data: ', formObjects);
});

document.getElementById('contact-form').reset();
