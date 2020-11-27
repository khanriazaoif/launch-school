// Introduction to Programming.
// The Basics

//2

let number = 4936;

let onesPlace = number % 10;
onesPlace;
console.log("ones place is " + onesPlace);

number = (number - onesPlace) / 10;

let tensPlace = number % 10;
tensPlace;
console.log("tens place is " + tensPlace);

number = (number - tensPlace) / 10;

let hundredsPlace = number % 10;
hundredsPlace;
console.log("hundreds place is " + hundredsPlace);

number = (number - hundredsPlace) / 10;

let thousandsPlace = number % 10;
thousandsPlace;
console.log("thousands place is " + thousandsPlace);