
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
const inputNumber = parseFloat(inputValue);
    console.log(id, inputValue, inputNumber)
    return inputNumber;
}


function getTextFieldValueById(id){

    const textValue = document.getElementById(id).innerText;
const textNumber =  parseFloat (textValue);
return textNumber;
}





function showSectionById(id){
    // hide all the section
    // document.getElementById('add-money-form').classList.add('hidden');
     document.getElementById('add-home').classList.add('hidden');
      document.getElementById('transection-section').classList.add('hidden');
      // show the section with the provide id as parameter
      document.getElementById(id).classList.remove('hidden')
}