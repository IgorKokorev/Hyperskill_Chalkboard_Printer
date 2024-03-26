// Welcome to the Chalkboard Printer!
const input = require('sync-input');

// These variables are already declared for you.
// Looks like we made a mistake and used 'var' instead of 'let'!
// Remember it's bad practice to use 'var', so let's change all of them to 'let'.
    let name = input("Enter name: ");
    let surname = input("Enter surname: ");
    let message = input("Enter message: ");
    let n = Number(input("Enter number of repeats: "));

// Assign the correct values to the variables.

// Log the message to the console n times.
let i;
for (i = 0; i < n; i++) {
    console.log("This is %s %s and %s", name, surname, message);
}
// etc...

// We have also imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));