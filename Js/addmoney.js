
document.getElementById('btn-addMoney').addEventListener('click', function(event){
    event.preventDefault();

const addMoney = getInputFieldValueById('input-addMoney-cashOut');

// const addPin = getInputFieldValueById('input-add-pin');

console.log('add money with paameter', addMoney)


if ( addMoney){
const balance = getTextFieldValueById('addMoney-ammount');
console.log(balance, addMoney);
const newBalance = balance + addMoney;
document.getElementById('addMoney-ammount').innerText = newBalance;

}

else{
    alert('Failed to the money')
}
    })