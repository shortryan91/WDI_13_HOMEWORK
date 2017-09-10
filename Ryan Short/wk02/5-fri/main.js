console.log('connecting...')


var stringInput = document.querySelector('#listStrings');
var groupInput = document.querySelector('#groupSize');
var submitBtn = document.querySelector('button');


var shuffle = function(array) {
    for (var index = array.length; index; index--) {
        var num = Math.floor(Math.random() * index);
        [array[index - 1], array[num]] = [array[num], array[index - 1]];
    }
}


var listConverter = function(listEntered) {
  var listArray = listEntered.split(" ");
  console.log(listArray);
  return listArray
}






submitBtn.addEventListener('click', function(){
  var stringValue = stringInput.value;
  var groupValue = groupInput.value;
  listConverter(stringValue);
  return;
})
