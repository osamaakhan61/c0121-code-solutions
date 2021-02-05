var $tabContainer = document.querySelector('.tab-container');
var $allTabs = document.querySelectorAll('.tab');
var $allViews = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  var result = event.target.matches('.tab');
  if (result === true) {
    for (var i = 0; i < $allTabs.length; i++) {
      if (event.target === $allTabs[i]) {
        $allTabs[i].className = 'tab' + ' active';
      } else {
        $allTabs[i].className = 'tab';
      }
    }
    var $dataAttribute = event.target.getAttribute('data-view');
    for (var j = 0; j < $allViews.length; j++) {
      if ($dataAttribute === $allViews[j].getAttribute('data-view')) {
        $allViews[j].className = 'view';
      } else {
        $allViews[j].className = 'hidden';
      }
    }
  }
});
