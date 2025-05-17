// function getInputFieldValueById(id) {
//     const input = document.getElementById(id);
//     if (!input) {
//         console.error(`Input field not found: ${id}`);
//         return 0;
//     }
//     const value = parseFloat(input.value);
//     input.value = ''; // Clear input field
//     return isNaN(value) ? 0 : value;
// }

// function getTextFieldValueById(id) {
//     const textElement = document.getElementById(id);
//     if (!textElement) {
//         console.error(`Text element not found: ${id}`);
//         return 0;
//     }
//     const value = parseFloat(textElement.innerText);
//     return isNaN(value) ? 0 : value;
// }

// const allButtons = document.querySelectorAll('.btn-addMoney');

// allButtons.forEach(function(button) {
//     button.addEventListener('click', function(event) {
//         event.preventDefault();
//         console.log('Button clicked:', button.innerText);

//         const addMoney = getInputFieldValueById('input-addMoney-cashOut');

//         if (addMoney > 0) {
//             const balance = getTextFieldValueById('addMoney-ammount'); // spelling intentionally kept as 'ammount'
//             const newBalance = balance + addMoney;

//             const balanceElement = document.getElementById('addMoney-ammount');
//             if (balanceElement) {
//                 balanceElement.innerText = newBalance.toFixed(2);
//             }

//             const p = document.createElement('p');
//             p.innerText = `Added: ${addMoney} Tk. New balance: ${newBalance.toFixed(2)} Tk.`;

//             const container = document.getElementById('transection-container');
//             if (container) {
//                 container.appendChild(p);
//             } else {
//                 console.warn('Transaction container not found');
//             }

//         } else {
//             alert('Please enter a valid amount to add.');
//         }
//     });
// });






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


// add to transection history,
 const p = document.createElement('p');
 p.classList.add('bg-yellow-500');
 const now = new Date();
 p.innerHTML = `<h4 class = "text-2xl fon-bold "> Cash Out </h4>
<p> ${addMoney} Box Office News!Donate for Flood at Noakhali, Bangladesh ${newBalance} </p>
<p> ${now}</p>

 `
 

 console.log(p);



 // should be a common function
 document.getElementById('transection-container').appendChild(p);




}

else{
    alert('Failed to the money')
}
    })