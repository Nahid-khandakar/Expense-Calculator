function getInput(costId) {
    const productInput = document.getElementById(costId);
    const productCost = parseFloat(productInput.value);
    return productCost
}

document.getElementById('calculate-btn').addEventListener('click', function () {


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
})

document.getElementById('save-btn').addEventListener('click', function () {

    //1-saving input  2-save diplay  3-income value  4-percetag 5-save display change

    const saveMoney = getInput('save-money')

    const displaySaveAmount = document.getElementById('save-display');

    //income input and its value
    // const incomeInput = document.getElementById('income-input');
    // const incomeAmount = parseFloat(incomeInput.value);

    const incomeAmount = getInput('income-input')

    const savingAmount = (incomeAmount / 100) * saveMoney;

    displaySaveAmount.innerText = savingAmount;

    //1-remaining balance inputtext 2-Main balance value 3-saving amount parseFloat 4- balance minus saving ammount  4- remainging balance inputtext change



    //2
    //previous thing to get blance 
    //income - total expenses
    const foodInput = document.getElementById('food-cost');
    const foodCost = parseFloat(foodInput.value);

    const rentInput = document.getElementById('rent-cost');
    const rentCost = parseFloat(rentInput.value);

    const clothInput = document.getElementById('cloth-cost');
    const clothCost = parseFloat(clothInput.value);

    const expenseInput = document.getElementById('expense-amount');

    const expenseAmount = foodCost + rentCost + clothCost;

    expenseInput.innerText = expenseAmount;

    //income upore ache

    const totalBalance = incomeAmount - expenseAmount;

    const balanceInput = document.getElementById('balance-amount');
    balanceInput.innerText = totalBalance;

    //3

    //4
    const remaingingBalance = totalBalance - savingAmount;


    const remaingingInput = document.getElementById('remaining-amount');
    remaingingInput.innerText = remaingingBalance;

})