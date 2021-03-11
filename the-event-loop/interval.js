var currentCount = 3;

var countdown = setInterval(function countDown() {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
    return;
  }
  console.log(currentCount);
  currentCount--;
}, 1000);
