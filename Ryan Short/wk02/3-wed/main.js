
console.log("banking");

 //  saving atm
var savingMessage = document.querySelector('#savTitle');
var savingInput = document.querySelector('#savingInput');
var savingAmount = document.querySelector("#savingAm");
var savingWithdrawB = document.querySelector('#savingWB');
var savingDepositB = document.querySelector('#savingDB');

//  checking atm

var checkingMessage = document.querySelector('#checkTitle');
var checkingInput = document.querySelector('#checkInput');
var checkingAmount = document.querySelector("#checkAm");
var checkingWithdrawB = document.querySelector('#checkingWB');
var checkingDepositB = document.querySelector("#checkingDB");



var deposit = function() {
  var total = +savingAmount.textContent + +savingInput.value;
  savingAmount.textContent = total;
}

var withdraw = function() {
  var total = +savingAmount.textContent - +savingInput.value;
  savingAmount.textContent = total;
}

savingWithdrawB.addEventListener('click', withdraw);
savingDepositB.addEventListener('click', deposit);


var deposit = function() {
  var total = +checkingAmount.textContent + +checkingInput.value;
  checkingAmount.textContent = total;
}

var withdraw = function() {
  var total = +checkingAmount.textContent - +checkingInput.value;
  checkingAmount.textContent = total;
}


checkingWithdrawB.addEventListener('click', withdraw);
checkingDepositB.addEventListener('click', deposit);


if () {

}
