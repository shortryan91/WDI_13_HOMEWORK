// PTV
var Alamein =['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var GlenWaverly =['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong','Tooronga'];
var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran','Windsor'];

var trainLines = [Alamein, GlenWaverly, Sandringham];

var interchange = 'Richmond';



// find the origin station
var origin = prompt('pick your current station');
for(var i = 0; i < trainLines.length; i++) {
  if(trainLines[i].includes(origin)) {
    var startLine = trainLines[i];
    console.log('your current location is: ' + origin)
    }
}


// // find the destination
var destination = prompt('pick where you would like to go?');
for( var i = 0; i < trainLines.length; i++) {
  if (trainLines[i].includes(destination)) {
    var endLine = trainLines[i];
    console.log('Your destination is: ' + destination)

  }
}

// check start and destination on the same line
if (startLine === endLine) {
  console.log('same line');
} else {
  console.log('you need to switch at Richmond');
}

// switching lines
// if(startLine !== endLine) {
//   startLine = startLine.slice(origin , 'Richmond'+1);
// }




// print out a jounrey
//need to find the right Richmond
var indexStart = startLine.indexOf(origin);
var indexEnd = endLine.indexOf(destination);
var indexes = [indexStart, indexEnd];

// check if the index's are the right way

if(indexStart > indexEnd){
  indexes = indexes.reverse();
  var trip = startLine.slice(indexes[0], indexes[1] + 1).reverse();
} else {
  var trip = startLine.slice(indexes[0], indexes[1] + 1);
}

console.log(trip.join(" -----> "));



//  the interchange problem



// the total amount of stops
 console.log(trip.length -1 + " stops total")
