// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566






function multiply(prompt){
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

let firstNumber = multiply(`Enter the first number`);
let secondNumber = multiply(`Enter the second number`);
let finalNumber = firstNumber * secondNumber;

// console.log(typeof(firstNumber));
// console.log(typeof(Number(firstNumber)));
console.log(`${firstNumber} * ${secondNumber} = ${finalNumber} `);


