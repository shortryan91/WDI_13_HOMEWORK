// PTV

var trainLines = [
  {
  line: 'Alamein',
  stops: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
},{
  line: 'Glen Waverly',
  stops: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong','Tooronga']
},{
  line: 'Sandringham',
  stops: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran','Windsor']
}]

var start = 'Melbourne Central';
var end = 'Tooronga';

console.log('origin: ' + start + "\n" +
'destination: ' + end + "\n")


// for (var i = 0; i < trainLines.length; i++) {
//    lines = trainLines[i].stops.find(start);
//      if (start === lines) {
//        console.log(start);
//      }
//   }


  if (start === trainLines[1].stops[1]) {
 var trip = trainLines[1].stops.slice(1,6);

console.log(trip.join("---->"));
}

console.log(trip.length -1 + " stops total")
