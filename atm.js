const account = require("./account")

const prompt = require('prompt-sync')();

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
/* 
function userValidation() {
    var name, pinNumber;
  console.log("Welcome. Enter your name.");
  let response = prompt();
  console.log(`Your name is ${response}. Is that right?`);
  let againResponse = prompt();
    if (againResponse === 'yes') {
        pinNumber = console.log('Enter your pin');
        let pinResponse = prompt();
        if (pinResponse = account.pin) {
            return console.log('yes');
        } else {
            return false;
        }
    }   return;
 */
 


/* userValidation(); */

/* function pinValidation(userPin) {
userPin = console.log('Enter your pin');
let pinReponse = prompt();

} */
 




//const balance = 5000;

/* module.exports.userValidate = userValidation; */
 

