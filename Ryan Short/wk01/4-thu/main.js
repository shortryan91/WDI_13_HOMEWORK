

// my kickass forEach function
var myForEach = function (arr, func) {
  for(var index = 0; index < arr.length; index++){
      func(arr[index]);
  }
}

var lengths = function(stringArr) {
  var lengthsOfElements = []
  for (var index = 0; index < stringArr.length; index++) {
    lengthsOfElements.push(stringArr[index].length);
  }
}

// refactor
var lengths = function(stringArr) {
  var lengthsOfElements =[]
  stringArr.forEach(function(element) {
    lengthsOfElements.push(element.length);
  });
  return lengthsOfElements
}
//refactor 2

var lengths = function(stringArr) {
  var lengthsOfElements = []
  var fn = function(element) {
    lengthsOfElements.push(element.length);
  }
  stringArr.forEach(fn);
  return lengthsOfElements;
}


console.log(lengths(['how', 'are', 'you']));



//
//
// transmogrified
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number

var transmogrified = function(num1, num2, num3) {
  return  Math.pow(num1*num2, num3)
}

console.log(transmogrified(6, 6, 4));

//3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
var lll = ["making it happen","hello world", "hey there"];


var wordReverse = function(stringArr) {

  var reverse = function(string) {
    return string.split(" ").reverse().join(" ");
  }
  var newWords = stringArr.map(reverse);
    return newWords;

}
console.log(wordReverse(lll));
