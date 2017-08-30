// recipe
// var recipe = {
//   title: "tart shell",
//   servings: 8,
//   ingredients: ["buter", "sugar", "flour", "eggs", "salt"]
// }
//
// console.log(recipe.title);
// console.log("serves: " + recipe.servings);
// console.log("ingredients");
// console.log(recipe.ingredients[0]);
// console.log(recipe.ingredients[1]);
// console.log(recipe.ingredients[2]);
// console.log(recipe.ingredients[3]);
// console.log(recipe.ingredients[4]);


// the reading list
// var books = [{
//   title: 'javascript and jquery',
//   author: "Jon D",
//   alreadyread: true
// },{
//   title: 'HTML & CSS',
//   author: "Jon D",
//   alreadyread: true
// },{
//   title: "kasun's diary",
//   author:'kasun',
//   alreadyread: false
// },{
//   title:"lord of the rings",
//   author:'J.R.R Tolkien',
//   alreadyread: false
// }]
//
// for (var num = 0; num < 4; num++) {
//   console.log(books[num].title + " by " + books[num].author)
//   if (books[num].alreadyread === true ){
//     console.log('you have read this book')
//   } else {
//     console.log("you need to read this book")
//   }
// }

// the movie database
var movies = {
  title: "jaws",
  duration: 120,
  stars: ['rob scheider ', 'robert shaw ', 'lorraine gary ', 'richard dreyfuss ']
}

// var describeMovie = function(movies) {
//   return movies.title + ' last for ' + movies.duration + 'minutes and stars ' + movies.stars
// }
//
// // var result = describeMovie(movie);
// console.log( describeMovie(movies) );


console.log(movies.title+" lasts for "+ movies.duration+" minutes. stars: "+movies.stars)
