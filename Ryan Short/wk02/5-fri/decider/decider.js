console.log('running...');
var coinSides = 2;
var heads = 0;
var tails = 0;
var winnerPoint = 5;

// dom stuff
var flipper = document.querySelector('#flipButton');
var backCoin = document.querySelector('#backCoin');
var frontCoin = document.querySelector('#frontCoin');
var tailCount =document.querySelector('#tailsTally');
var headCount = document.querySelector('#headsTally');



var Winner = function() {
  if(heads === winnerPoint) {
    console.log("HEADS IS THE WINNER")
    break;
  } else if (tails === winnerPoint) {
    console.log("TAILS IS THE WINNER")
    break;
  }
}

var display = function() {
  if (heads === winnerPoint) {
    frontCoin =  frontCoin.style.display = 'block';
  } else if (tails === winnerPoint) {
    backCoin = backCoin.style.display = 'block';
  }

}



var tallyCount = function() {
 headCount.textContent = heads;
 tailCount.textContent = tails;
}

var coinFlip = function() {
  var flip = Math.floor(Math.random()*coinSides);
  if (flip === 1) {
    heads += 1;
    console.log('HEADS');
  } else {
    tails += 1;
    console.log('TAILS');
  }
  tallyCount();
  display();
  Winner();
}


flipper = addEventListener('click', coinFlip);
