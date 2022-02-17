document.getElementById('calculate-btn').addEventListener('click', function () {

    const foodInput = document.getElementById('food-cost');
    const foodCost = parseFloat(foodInput.value);

    const rentInput = document.getElementById('rent-cost');
    const rentCost = parseFloat(rentInput.value);

    const clothInput = document.getElementById('cloth-cost');
    const clothCost = parseFloat(clothInput.value);

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

    const saveMoneyInput = document.getElementById('save-money');
    const saveMoney = parseFloat(saveMoneyInput.value);

    const displaySaveAmount = document.getElementById('save-display');

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);

    const savingAmount = (incomeAmount / 100) * saveMoney;

    displaySaveAmount.innerText = savingAmount;



})