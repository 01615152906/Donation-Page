
document.getElementById('btn-addMoney').addEventListener('click',function(event){
event.preventDefault();
const cashOut = getInputFieldValueById('input-addMoney-cashOut');
// const pinNumber = getInputFieldValueById('input-cash-out-pin');
 console.log('inside the click handler', cashOut)


if (cashOut){
const balance = getTextFieldValueById('cashOut');
console.log(balance,cashOut);


console.log('balance here', balance)
// console.log('balance here', balance)
const newBalance = balance - cashOut;
document.getElementById('cashOut').innerText = newBalance;




// add to transection history
const div = document.createElement('div')
div.classList.add('bg-yellow-300');
const now = new Date();



div.innerHTML = `
<h4 class = "text-2xl fon-bold "> Cash Out </h4>
<p> ${cashOut} Box Office News!Donate for Flood at Noakhali, Bangladesh ${newBalance} </p>
<p> ${now}</p>

`
document.getElementById('transection-container').appendChild(div);



}


else{

alert('no money for you....DGM. ')
}


})