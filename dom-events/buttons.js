function handleClick(event) {
  console.log('button clicked', event, event.target);
}

var click = document.querySelector('.click-button');

click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered', event, event.target);
}

var hover = document.querySelector('.hover-button');

hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked', event, event.target);
}

var twoClicks = document.querySelector('.double-click-button');

twoClicks.addEventListener('dblclick', handleDoubleClick);
