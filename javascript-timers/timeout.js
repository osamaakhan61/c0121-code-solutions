function updateHeading(h1) {
  var $header = document.querySelector('h1');
  $header.textContent = 'Hello There';
}

setTimeout(updateHeading, 2000);
