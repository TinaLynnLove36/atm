

const prompt = require('prompt-sync')();



function userInteraction(name) {
    console.log('Please enter your name.')
    name = prompt();
    if (name !== "" && name !== null) {
    console.log(`Welcome ${name} to your ATM.`)
    const validatePin = require("./atm").validatePin;
    } else {
        userInteraction();
}

}
userInteraction();



module.exports.userMenu = userMenu;


function userMenu() {
  
    var choiceSelect = console.log(('Select a choice 1.) Get Balance 2.) Deposit 3.) Withdrawal 4.) Exit'));
    let choice = parseInt(prompt());
    if (choice === 1) {
       let atmActions = require("./atm");
       atmActions.getBalance();
       userMenu();
    } else if (choice === 2) {
        let atmActions = require("./atm");
        atmActions.deposit();
        userMenu();
    } else if (choice === 3) {
        let atmActions = require("./atm");
        atmActions.withdraw();
        userMenu();
    } else if (choice === 4) {
        exit();
    } else {
        error();
       // userMenu();
    }

}

userMenu();

function exit() {
    var leave = console.log('You have selected exit. Is that correct?');
    let confirmLeave = prompt();
        if (confirmLeave === 'yes') {
            console.log('Thanks for choosing your ATM.');
            greatDay();
        } else if (confirmLeave === 'no') {
            userMenu();
        } else {
          errorExit();
        }

}


function error() {
    console.log('Error: accepted numbers are 1-4.');
    userMenu();
}

function errorExit() {
    console.log("Error: please answer 'yes' or 'no'" );
    exit();
}

function greatDay() {
    console.log('Have a great day!');
}
