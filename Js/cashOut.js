
document.getElementById('btn-addMoney').addEventListener('click',function(event){
event.preventDefault();
const cashOut = getInputFieldValueById('input-addMoney-cashOut');
// const pinNumber = getInputFieldValueById('input-cash-out-pin');
 console.log('inside the click handler', cashOut)


if ( cashOut){
const balance = getTextFieldValueById('cashOut');
console.log(balance,cashOut);


// console.log('balance here', balance)

const newBalance = balance - cashOut;
document.getElementById('cashOut').innerText = newBalance;

}


else{

alert('no money for you....DGM. ')
}


})