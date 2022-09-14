//coding without function
//* /Deposite section */

document.getElementById('deposit-btn').addEventListener('click', function () {

    //get currentDepositeValue from input and convert to number
    const depositField = document.getElementById('deposit-input');
    const currentDepositeString = depositField.value;
    const currentDeposite = parseFloat(currentDepositeString);

    //get previousDepositeValue from html and convert to number
    const PreviousDepositField = document.getElementById('deposit-amount');
    const PreviousDepositString = PreviousDepositField.innerText;
    const PreviousDeposit = parseFloat(PreviousDepositString);
    // add two deposites and set it to previous deposite field in html 
    const newDeposite = PreviousDeposit + currentDeposite;
    PreviousDepositField.innerText = newDeposite;
    //set input field value empty
    depositField.value = '';

    /* total balance */
    const totalBalanceField = document.getElementById('total-balance');
    const previousBalanceString = totalBalanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const newTotalBalance = previousBalance + currentDeposite;
    totalBalanceField.innerText = newTotalBalance;

})

//* /Withdraw section */

document.getElementById('withdraw-btn').addEventListener('click', function () {

    //get currentwithdrawValue from input and convert to number
    const withdrawField = document.getElementById('withdraw-input');
    const currentWithdrawString = withdrawField.value;
    const currentWithdraw = parseFloat(currentWithdrawString);

    //get previousWithdrawValue from html and convert to number
    const PreviousWithdrawField = document.getElementById('withdraw-amount');
    const PreviousWithdrawString = PreviousWithdrawField.innerText;
    const PreviousWithdraw = parseFloat(PreviousWithdrawString);
    // add two Withdraw and set it to previous deposite field in html 
    const newWithdraw = PreviousWithdraw + currentWithdraw;
    PreviousWithdrawField.innerText = newWithdraw;
    //set input field value empty
    withdrawField.value = '';

    /* total balance */
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceString = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const newTotalBalance = previousBalance - currentWithdraw;
    totalBalance.innerText = newTotalBalance;

})