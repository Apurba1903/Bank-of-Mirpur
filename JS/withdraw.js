// Step 1: Add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // Step 2: Get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step 7: Clear the withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // Step 3: Get the current withdraw total
    // For non-input (elements other than input, textarea) use innerText to get the Text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step 5: Get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Not enough money for withdrawal');
        return;
    }

    // Step 4: Add numbers to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // Set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step 6: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



});