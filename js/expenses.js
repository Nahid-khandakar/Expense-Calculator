function getInput(costId) {

    const productInput = document.getElementById(costId);
    const productCost = parseFloat(productInput.value);

    if (!isNaN(productCost) && productCost > -1) {
        return productCost;
    }
    else {
        alert('Make Sure You didnot Give Negative Number or String ');
    }

}

//calculation total Expenses and Balance
function calculateCost() {

    const incomeAmount = getInput('income-input');
    const foodCost = getInput('food-cost');
    const rentCost = getInput('rent-cost');
    const clothCost = getInput('cloth-cost')

    const expenseInput = document.getElementById('expense-amount');
    const expenseAmount = foodCost + rentCost + clothCost;

    if (typeof incomeAmount == 'number' && typeof expenseAmount == 'number' && incomeAmount > expenseAmount) {
        expenseInput.innerText = expenseAmount;
        const totalBalance = incomeAmount - expenseAmount;
        const balanceInput = document.getElementById('balance-amount');
        balanceInput.innerText = totalBalance;
        return totalBalance;
    }
    else {
        const errorWarn = document.getElementById('error-warn');
        errorWarn.innerText = 'There is a problem in Income and Expense / Wrong Input';
    }

}

//Calculate Button clicked 
document.getElementById('calculate-btn').addEventListener('click', function () {

    calculateCost();
})

//Save Button Clicked
document.getElementById('save-btn').addEventListener('click', function () {

    const saveMoney = getInput('save-money')
    const incomeAmount = getInput('income-input')
    const savingAmount = (incomeAmount / 100) * saveMoney;
    const totalBalance = calculateCost();

    if (totalBalance > savingAmount) {
        const displaySaveAmount = document.getElementById('save-display');
        displaySaveAmount.innerText = savingAmount;
        const remaingingBalance = totalBalance - savingAmount;
        const remaingingInput = document.getElementById('remaining-amount');
        remaingingInput.innerText = remaingingBalance;

    }
    else {
        const errorWarn = document.getElementById('error-warn');
        errorWarn.innerText = 'Not Enough Balance/Wrong Input';
    }
})