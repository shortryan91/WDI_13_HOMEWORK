
var movepixel = 10;
var timerID = null;
var increment = 14;
var forward = true;
var startOfScreen = 0;
var milliSeconds = 100

var startbt = document.querySelector('#start-button');
var fasterbt = document.querySelector('#speed-button');
var stopbt = document.querySelector('#stop-button');
var cat = document.querySelector('img');

var catWalk = function() {
  
  var currentLeftOffSet = parseInt(cat.style.left);

  if (forward) {
    cat.style.left = (currentLeftOffSet + movepixel) + 'px';
  } else {
    cat.style.left = (currentLeftOffSet - movepixel) + 'px';
  }

  if (currentLeftOffSet > (window.innerWidth - cat.width)) {
    forward = false;
  } else if (forward === false && currentLeftOffSet < startOfScreen) {
    forward = true;
  }


}

var startCatWalk = function() {
  if (timerID) {
    return;
  }
    timerID = setInterval(catWalk, milliSeconds);
}

var catwalkFaster = function() {
  movepixel += increment;
}

var StopCatWalk = function() {
  timerID = clearInterval(timerID);
}

startbt.addEventListener('click', startCatWalk);
fasterbt.addEventListener('click', catwalkFaster);
stopbt.addEventListener('click',StopCatWalk);
