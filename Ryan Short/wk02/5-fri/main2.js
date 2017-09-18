// get a list of items
var listOfItems = "bart sam ant lisa homer"
// turn it into an array
var arrayOfItems = listOfItems.split(" ");
// shuffle the array
var shuffle = function(array) {
  for (var index = array.length; index; index--) {
    var num = Math.floor(Math.random() * index);
    [array[index - 1], array[num]] = [array[num], array[index - 1]];
  }
  return array;
}
// get a number for group size
var groupSize = 2;

// split array evenly into multiple arrays using groupSize
var shuffledArray = shuffle(arrayOfItems);

var newArray = [];
while (shuffledArray.length > 0) {
    newArray.push(shuffledArray.splice(0, groupSize));
}

if (newArray.length ===  ) {

}




// } else if (shuffledArray.length > 0 && shuffledArray.length % groupSize === 1) {
//     newArray.push(shuffledArray.splice(0, groupSize+1));
//     var name = shuffledArray.toString();
//     newArray[0].push(name);
// }


console.log(newArray);

//
