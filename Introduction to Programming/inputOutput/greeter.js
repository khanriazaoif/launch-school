// Introduction to Programming.
// Input/Output

//1 and 2

//Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

let rlSync = require('readline-sync');
let fName = rlSync.question("What's your first name?\n");
let lName = rlSync.question("What's your last name?\n");
console.log(`Hello, ${fName} ${lName}!`);