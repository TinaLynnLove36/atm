

const prompt = require('prompt-sync')();
//const atm = require("./atm")


function userInteraction(name) {
    console.log('Please enter your name.')
    name = prompt();
    if (name !== "" && name !== null) {
    console.log(`Welcome ${name} to your ATM.`)
    const validate = require("./atm")  
    } else {
        userInteraction();
}

}
userInteraction();





function userMenu(getBalance, deposit, withdraw) {


}
//const atm = require("./atm.js")


module.exports.userMenu = userMenu;