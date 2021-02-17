function updateHeader(h1) {
  var $header = document.querySelector('h1');
  $header.textContent = $header.textContent - 1;
  if ($header.textContent === '-1') {
    $header.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(updateHeader, 1000);
