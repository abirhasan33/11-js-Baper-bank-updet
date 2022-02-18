function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value= '';
    return value;
}
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldIdValueInText = fieldTag.innerText;
    const value = parseFloat(fieldIdValueInText);
    return value;
}
function updeteTotal(fieldId, amount){
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}
function updeteBalanch(amount, isAdding){
    const preiousBalanch = getInnerTextValue("balance-total");
    let newbalanch;
    if(isAdding == true){
         newbalanch = preiousBalanch + amount;
    }
    else{
         newbalanch = preiousBalanch - amount;
    }
    document.getElementById("balance-total").innerText = newbalanch;
}
document.getElementById("deposit-button").addEventListener("click", function(){
    const amount = getInputValue("deposit-input");
    if(amount > 0){
        updeteTotal("deposit-total", amount);
        updeteBalanch(amount, true);
    }
});

// handle withraw 
document.getElementById("withdraw-button").addEventListener("click", function(){
    const amount = getInputValue("withdraw-input");
    const balanch = getInnerTextValue('balance-total')
    if(amount > 0 && amount <= balanch){
        updeteTotal("withdraw-total", amount);
    updeteBalanch(amount, false);
    }
});
