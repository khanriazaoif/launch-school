// Introduction to Programming.
// Input/Output

//1 and 2

//Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

// let rlSync = require('readline-sync');
// let fName = rlSync.question("What's your first name?\n");
// let lName = rlSync.question("What's your last name?\n");
// console.log(`Hello, ${fName} ${lName}!`);

// let firstName = function() {
//   let rlSync = require('readline-sync');
//   let fName = rlSync.question(`What's your first name?`);
//   firstName = fName;
//   // return fName;
// } 


// let lastName = function(){
//   let rlSync = require('readline-sync');
//   let lName = rlSync.question(`What's your last name?`);
//   lastName = lName;
//   // return lName;
// }

// firstName();
// lastName();

// console.log(`Hello, ${firstName} ${lastName}`);

function getName(prompt) {
     let rlSync = require('readline-sync');
     let name = rlSync.question(prompt);
     return name;
}


let firstName = getName(`What is your first name?`);
let secondName = getName('What is your second name?');
console.log(`Hello, ${firstName} ${secondName}`);