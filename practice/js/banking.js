// applying dry
function inputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = parseFloat(input.value);
  // clear the input
    input.value = "";
    return inputValue;
}

function balanceAmount(inputId) {
    const previousCommonAmount = parseFloat(inputId.innerText);
    return previousCommonAmount;
}

function updateEachAmount(amountId, inputValue) {
    const previousCommon = document.getElementById(amountId);
    const previousCommonAmount = balanceAmount(previousCommon);
    const currentCommonAmount = previousCommonAmount + inputValue;
    previousCommon.innerText = currentCommonAmount;
}

function updateBalance(inputValue, isTrue) {
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceAmount = parseFloat(previousBalance.innerText);
    if (isTrue) {
        const currentBalanceAmount = previousBalanceAmount + inputValue;
        previousBalance.innerText = currentBalanceAmount;
    } else {
        const currentBalanceAmount = previousBalanceAmount - inputValue;
        previousBalance.innerText = currentBalanceAmount;
    }
}

document.getElementById("deposit-button").addEventListener('click', function () {
    // get the input
  const depositInputValue = inputValue("deposit-input");
  if (depositInputValue > 0) {
       // get and update deposit amount
    updateEachAmount('deposit-total', depositInputValue);
    // get and update balance amount  
    updateBalance(depositInputValue, true);
  } else {
    console.log(' Give a number greater than 0');
  }

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // get inputValue
    const withdrawInputValue = inputValue("withdraw-input");
    // balance amount 
    const balanceId = document.getElementById('balance-total');
    const balanceTotal = balanceAmount(balanceId);
    if (withdrawInputValue > 0 && withdrawInputValue <= balanceTotal) {
         // get and update withdraw amount
        updateEachAmount("withdraw-total", withdrawInputValue);
           // get and update balance amount
        updateBalance(withdrawInputValue, false);
    } else {
        console.log('Give a valid number greater than 0 and cannot withdraw more than', balanceTotal);
    }
})