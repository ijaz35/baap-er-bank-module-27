//coding with function
//utilities
function getInputFieldValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementFieldValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
//adding event handler for deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    //calculating deposite
    const newDepositAmount = getInputFieldValue('deposit-input');
    const previousDepositeTotal = getTextElementFieldValueById('deposit-amount');
    const newDepositTotal = newDepositAmount + previousDepositeTotal;
    setTextElementValueById('deposit-amount', newDepositTotal);
    //calculating total
    const previousBalanceTotal = getTextElementFieldValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
})
//adding event handler for withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValue('withdraw-input');
    const previousWithdrawTotal = getTextElementFieldValueById('withdraw-amount');
    const newWithDrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-amount', newWithDrawTotal);
    //calculating total
    const previousBalanceTotal = getTextElementFieldValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
})