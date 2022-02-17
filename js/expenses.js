function getInput(costId) {
    const productInput = document.getElementById(costId);
    const productCost = parseFloat(productInput.value);
    return productCost
}

function calculateCost() {


    const foodCost = getInput('food-cost');
    const rentCost = getInput('rent-cost');
    const clothCost = getInput('cloth-cost')

    const expenseInput = document.getElementById('expense-amount');

    const expenseAmount = foodCost + rentCost + clothCost;
    expenseInput.innerText = expenseAmount;

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);

    const totalBalance = incomeAmount - expenseAmount;

    const balanceInput = document.getElementById('balance-amount');
    balanceInput.innerText = totalBalance;

    return totalBalance;

}

document.getElementById('calculate-btn').addEventListener('click', function () {

    calculateCost();

})

document.getElementById('save-btn').addEventListener('click', function () {



    //1-saving input  2-save diplay  3-income value  4-percetag 5-save display change

    const saveMoney = getInput('save-money')
    const displaySaveAmount = document.getElementById('save-display');
    //income input and its value

    const incomeAmount = getInput('income-input')
    const savingAmount = (incomeAmount / 100) * saveMoney;
    displaySaveAmount.innerText = savingAmount;


    const totalBalance = calculateCost();
    const remaingingBalance = totalBalance - savingAmount;

    //change remaining balance text field
    const remaingingInput = document.getElementById('remaining-amount');
    remaingingInput.innerText = remaingingBalance;

})