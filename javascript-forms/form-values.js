var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formObjects = {
    name: document.forms[0].elements.name.value,
    email: document.forms[0].elements.email.value,
    message: document.forms[0].elements.message.value
  };

  console.log('Form data: ', formObjects);
});

document.getElementById('contact-form').reset();
