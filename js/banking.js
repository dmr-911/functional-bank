function getInputValue(inputId) {
    // get the input amount
    const userInput = document.getElementById(inputId);
    const userInputAmount = userInput.value;
    
    // clear the input
    userInput.value = '';
    return userInputAmount;
}

function totalFieldAmount(fieldId, inputValue) {
  // get the previous deposit amount total
  const previousField = document.getElementById(fieldId);
  const previousFieldAmount = previousField.innerText;

  // update the current deposit amount total
  const currentDepositAmount =
    parseFloat(inputValue) + parseFloat(previousFieldAmount);
  previousField.innerText = currentDepositAmount;
}

function balanceAmount(totalBalanceId) {
  // get the previous balance amount
  const previousBalance = document.getElementById(totalBalanceId);
    const previousBalaneAmount = previousBalance.innerText;
    return previousBalaneAmount;
}

function updateBalance(totalBalanceId, inputValue, isTrue) {
  // get previousBalane amount
  const previousBalance = document.getElementById(totalBalanceId);
  const previousBalanceAmount = balanceAmount(totalBalanceId);

  // update the current balance amount
  if (isTrue) {
    const currentBalanceAmount =
      parseFloat(previousBalanceAmount) + parseFloat(inputValue);
    previousBalance.innerText = currentBalanceAmount;
  } else {
    const currentBalanceAmount =
      parseFloat(previousBalanceAmount) - parseFloat(inputValue);
    previousBalance.innerText = currentBalanceAmount;
  }
}

// For deposit amount
document.getElementById('deposit-button').addEventListener('click', function () {
    const inputValue = getInputValue("deposit-input");
    if (inputValue > 0) {
        totalFieldAmount("deposit-total", inputValue);
        updateBalance("balance-total", inputValue, true);
    }
})

// For withdraw amount 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = getInputValue("withdraw-input");
    const balance = balanceAmount("balance-total");
    if (withdrawInput > 0 && withdrawInput <= balance) {
      totalFieldAmount("withdraw-total", withdrawInput);
      updateBalance("balance-total", withdrawInput);
    } else {
        console.log('You can not withdraw more than', balance);
  }
})