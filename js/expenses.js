function getInput(costId) {

    const productInput = document.getElementById(costId);
    const productText = productInput.value;
    const productCost = parseFloat(productText.value);

    if (!isNaN(productCost) && productCost > -1) {

        return productCost;
    }
    else {
        alert('positve number');

    }

}

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
        errorWarn.innerText = 'Expense is greather then or equal to Income';
    }

}

document.getElementById('calculate-btn').addEventListener('click', function () {

    calculateCost();

})

document.getElementById('save-btn').addEventListener('click', function () {

    //1-saving input  2-save diplay  3-income value  4-percetag 5-save display change

    const saveMoney = getInput('save-money')
    // const displaySaveAmount = document.getElementById('save-display');
    //income input and its value
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
        errorWarn.innerText = 'Not enough money for savings';
    }




})