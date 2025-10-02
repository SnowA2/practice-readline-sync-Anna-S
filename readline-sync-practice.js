const readline = require('readline-sync');

let name = readline.question("What is your name? ");

console.log("Hello, " + name + "!");

let Q1 = readline.question("What is a String?");

let Q2 = readline.question("What is a Variable?");

let Q3 = readline.questionInt("Pick a number from 1 - 10: ");

console.log("That's a nice number.");

let Q4 = readline.question("What does 'var' mean to you?");

let Q5 = readline.question("How do you convert a string to a number?");