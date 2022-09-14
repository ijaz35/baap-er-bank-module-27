//making functional by jhonkar
//function to get input field value
function getInputFieldValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const currentInputFieldString = inputField.value;
    const currentInputFieldValue = parseFloat(currentInputFieldString);
    inputField.value = '';


    return currentInputFieldValue;
}
function getTotalAmountoOfDepositOrWithdraw(previousFieldId, currentDepositOrWithdrawValue) {
    const PreviousField = document.getElementById(previousFieldId);
    const PreviousFildValueInString = PreviousField.innerText;
    const PreviousFieldValue = parseFloat(PreviousFildValueInString);
    const newDepositeOrWithdrawTotal = currentDepositOrWithdrawValue + PreviousFieldValue;
    PreviousField.innerText = newDepositeOrWithdrawTotal;
    return newDepositeOrWithdrawTotal;
}
function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceString = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    return previousBalance;
}
function setNewTotalBalance(currentDepositOrWithdrawValue, isDeposit) {
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceTotal = getCurrentBalance();
    if (isDeposit == true) {
        totalBalance.innerText = previousBalanceTotal + currentDepositOrWithdrawValue;
    } else {
        totalBalance.innerText = previousBalanceTotal - currentDepositOrWithdrawValue;
    }
}

//adding event handler to deposit btn
document.getElementById('deposit-btn').addEventListener('click', function () {

    const currentDepositAmount = getInputFieldValue('deposit-input');
    if (currentDepositAmount > 0) {
        getTotalAmountoOfDepositOrWithdraw('deposit-amount', currentDepositAmount);
        setNewTotalBalance(currentDepositAmount, true);
    } else {
        alert('Invalid deposit');
    }
})
//adding event handler to withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const currentWithdrawAmount = getInputFieldValue('withdraw-input');
    const currentbalanceTotal = getCurrentBalance();
    if (currentWithdrawAmount > 0 && currentWithdrawAmount < currentbalanceTotal) {
        getTotalAmountoOfDepositOrWithdraw('withdraw-amount', currentWithdrawAmount);
        setNewTotalBalance(currentWithdrawAmount, false);
    }
    if (currentWithdrawAmount > currentbalanceTotal) {
        console.log('You can not withdraw more than your current balance');
    }




})