const account = require("./account")

const prompt = require('prompt-sync')();

function validatePin() {
   console.log('Please enter your pin.');
    let userPin = prompt();
    if (account.pin === userPin) {
        userMenu(getBalance, deposit, withdraw);
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
getBalance();

function deposit(userDeposit) {
  account.balance += userDeposit 
  return account.balance;
}

deposit(500);

getBalance();

function withdraw(userWithdraw) {
    account.balance -= userWithdraw
    return account.balance;
}

withdraw(1000);

getBalance();


 
module.exports.validate = validatePin;
 

 

/* module.exports = {
    validatePin: validatePin,
    getBalance: getBalance,
    deposit: deposit,
    withdraw: withdraw,
    

} */