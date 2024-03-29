#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let pinCode = 1105;
let myBalance = 15000;
let pin = await inquirer.prompt([
    { name: "pinAnswer", message: "Enter your Pin code: ", type: "number" },
]);
if (pin.pinAnswer === pinCode) {
    console.log(chalk.green.bold(`Pin Matched`));
    let operations = await inquirer.prompt([
        { name: "operationsAnswer", message: "Select the option: ", type: "list", choices: ["Fast cash", "Withdraw", "Check balance"] },
    ]);
    if (operations.operationsAnswer === "Fast cash") {
        let money = await inquirer.prompt([
            { name: "options", message: "How much money do you want to withdraw?", type: "list", choices: [500, 1000, 2500, 5000] },
        ]);
        console.log(chalk.blue.bold(`\nThe amount of "${money.options}" has been withdraw from your account, \nThe remaining amount in  your account is "${myBalance - money.options}".`));
    }
    else if (operations.operationsAnswer === "Withdraw") {
        let withdraw = await inquirer.prompt([
            { name: "amount", message: "Please write the amount that you want to withdraw: ", type: "number" },
        ]);
        if (withdraw.amount > myBalance) {
            console.log(chalk.red.bold(`\nSorry, the amount you have written is unsufficient for this trnsaction! \nPlease write the valid amount.`));
        }
        else {
            console.log(chalk.green.bold(`\nThe amount of "${withdraw.amount}" has been withdraw from your account. \nThe remaining balance in your account is "${myBalance - withdraw.amount}".`));
        }
        ;
    }
    else if (operations.operationsAnswer === "Check balance") {
        console.log(chalk.yellow.bold(`\nYour current balance is "${myBalance}".`));
    }
    ;
}
else {
    console.log(chalk.red.bold(`The pin you entered is incorrect, please enter the correct pin.`));
}
;
