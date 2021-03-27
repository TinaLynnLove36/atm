const account = require("./account")

const prompt = require('prompt-sync')();


module.exports.validatePin = validatePin;

function validatePin() {
   console.log('Please enter your pin.');
    let userPin = prompt();
    if (account.pin === userPin) {
        const userMenu = require("./index").userMenu;
 
    } else {
        console.log(`Incorrect pin. Try again`);
        validatePin();
    }
}
validatePin();


function getBalance() {
console.log(`Your balance is ${account.balance}`);
return account.balance;
}



function deposit() {
    var userDeposit = console.log('How much would you like to deposit?');
    var makeDeposit = parseInt(prompt());
    if (isNaN(makeDeposit) || makeDeposit === '') {
        console.log('Error: please enter a number!');
        deposit();
    } else {
        account.balance += makeDeposit;
        getBalance();
    }

}






function withdraw() {
    var userDeposit = console.log('How much would you like to withdraw?');
    var makeWithdrawal = parseInt(prompt());
    if (isNaN(makeWithdrawal) || makeWithdrawal === '') {
        console.log('Error: please enter a number!');
        withdraw();
    } else {
    account.balance -= makeWithdrawal;
    getBalance();
}
}




module.exports.getBalance = getBalance;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;

 
