var clickListen = document.querySelector('.task-list');

clickListen.addEventListener('click', function (event) {
  console.log('event.target: ', event.target, event.target.tagName);

  if (event.target && event.target.tagName === 'BUTTON') {
    var taskItem = event.target.closest('.task-list-item');
    console.log(taskItem);
    taskItem.remove();
  }
});
