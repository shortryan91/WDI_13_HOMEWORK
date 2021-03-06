// PTV
var Alamein =['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'];
var GlenWaverly =['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong','tooronga'];
var Sandringham = ['southern cross', 'richmond', 'south yarra', 'prahran','windsor'];

var trainLines = [Alamein, GlenWaverly, Sandringham];

var interchange = 'richmond';
var firstLine = [];
var secondLine = [];



// find the origin line
var origin = prompt('pick your current station');
// to find richmond and not enter the loop
if (origin === interchange) {
  console.log("your current location is: " + origin)
} else if (origin !== interchange ) {
  // finding the right line
  for(var i = 0; i < trainLines.length; i++) {
    // searching trainLines for correct line
    if(trainLines[i].includes(origin)) {

      var startLine = trainLines[i];

      console.log('your current location is: ' + origin)
    }
  }
}


// // find the destination line
var destination = prompt('pick where you would like to go?');
// to find richmond and not enter the loop
if (destination === interchange) {
  console.log("your current destination is: " + destination);
} else if (destination !== interchange) {
  // finding the right line
    for( var i = 0; i < trainLines.length; i++) {
      if (trainLines[i].includes(destination)) {
        var endLine = trainLines[i];
        console.log('Your destination is: ' + destination)
      }
    }
}


// check start and destination on the same line
if (startLine === endLine) {
  console.log('same line');
} else {
  console.log('you need to switch at Richmond');
}


// print out a jounrey
//need to find the right Richmond
// checking if you are starting at richmond or not
if (origin === interchange) {
  var indexStart = endLine.indexOf(origin);
} else {
  var indexStart = startLine.indexOf(origin);
}
// checking if you end at richmond or not
if (destination === interchange){
  var indexEnd = startLine.indexOf(destination)
} else {
  var indexEnd = endLine.indexOf(destination);
}
var indexes = [indexStart, indexEnd];




// switching lines
// check if the index's are the right way

if(indexStart > indexEnd){
  indexes = indexes.reverse();
  var trip = startLine.slice(indexes[0], indexes[1] + 1).reverse();
} else {
  var trip = startLine.slice(indexes[0], indexes[1] + 1);
}
// check if the index's are the right way


// loop through the array from the origin to richmond station and stop
if(startLine !== endLine) {
  for(var index = 0; index < startLine.length; index++) {
    firstLine = startLine.slice(indexStart, startLine.indexOf(interchange)+1)
  }
// loop through from richmond to destination
  for(var index = 0; index < endLine.length; index++) {
    secondLine = endLine.slice(endLine.indexOf(interchange), indexEnd + 1)
  }
}


// // check if the index's are the right way


// popping to eliminate second richmond
var twoLineTrip = firstLine.pop();
twoLineTrip = firstLine.concat(secondLine);

// checking which line to print
if (startLine === endLine) {
console.log(trip.join(" -----> "));
} else {
console.log(twoLineTrip.join(" -----> "))
}


// the total amount of stops
if(startLine !== endLine) {
console.log(twoLineTrip.length-1 + " stops total");
} else {
 console.log(trip.length-1 + " stops total");
}
