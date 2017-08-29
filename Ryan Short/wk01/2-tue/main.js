
// Grabbing input

// var name = prompt("what is your name");
//
// console.log("Your name is " + name);


// Vegan test

// var meal = prompt("what would u like for dinner we have steak, fruit salad, tofurkey, pork chops")
//
// if (meal === "steak" || meal === "pork chops") {
//   console.log("Vegans Beware")
// } else {
//   console.log("This cuisine is vegan friendly")
// }


// The even/odd reporter

// for(var num = 0; num <= 20; num++) {
//   if(num % 2 === 0){
//     console.log("even")
//   } else {
//     console.log("odd")
//   }
// }

// multiplication table

// for(num = 1; num< 10; num++) {
//   for(j = 1; j < 10; j++) {
//     console.log(num + "x" + j + "= " + num*j);
//   }
// }


// Your top choices

// var fav = ["purple", "blue", "red"];
// var suffix  = ["st", "nd", "rd"];
//
// for (var num = 0; num < 3; num ++) {
//   console.log("My #" + (num+1) + suffix[num] + " is " + fav[num])
//
// }


// dollar sign
var numRows = prompt("how many rows?");
var char = numRows*2 - 1;

for(var row = 0; row < numRows; row++) {
  var spaces = numRows - row - 1
  var dollar = row*2 + 1
  console.log(" ".repeat(spaces) + "$".repeat(dollar) + " ".repeat(spaces))
}
