console.log('connecting...')
// var people = ["ryan", "kasun", "Dt", "lyle"];
// var groupS = 2;

// get the input
var captureListInput = function() {
  var stringInput = document.querySelector('#listStrings');
  var stringValue = stringInput.value;
  return stringValue
}

// turn it into an array
var listConverter = function(listInput) {
  var listArray = listInput.split(" ");
  return listArray
}

// shuffle the array
var shuffle = function(array) {
  for (var index = array.length; index; index--) {
    var num = Math.floor(Math.random() * index);
    [array[index - 1], array[num]] = [array[num], array[index - 1]];
  }
  return array;
}

// get the groupSize

var captureGroupInput = function() {
  var groupInput = document.querySelector('#groupSize');
  var groupValue = groupInput.value;
  return groupValue;
}

// use the groupSize to split up array

var splitInToGroups = function(shuffledArray, groupSize) {
  if (shuffledArray.length % groupSize === 0) {
    var groups = [];
    for (index = 0 ; index < shuffledArray.length; index += groupSize) {
      var newGroup = shuffledArray.slice(index, index+groupSize);
      groups.push(newGroup);
    }
  }
}

// click the button
var submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', function(){
  renderOnDom();
})

// render groups onto the dom
var renderOnDom = function() {
  var capturedInput = captureListInput();
  var itemArray = listConverter(capturedInput);
  var shuffledArray = shuffle(itemArray);
  var groupSize = captureGroupInput();
  var splitGroups = splitInToGroups(shuffledArray,groupSize);

}
