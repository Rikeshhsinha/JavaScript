// ==============================
// Variables in JavaScript
// ==============================

// const
// - Used for values that should NEVER change.
// - Must be initialized when declared.
// - Cannot be reassigned.
// - Block scoped.

const accountId = 123456789;


// let
// - Used for values that may change in the future.
// - Can be updated.
// - Cannot be redeclared in the same scope.
// - Block scoped.

let accountEmail = "rikeshsinha656234@gmail.com";


// var
// - Old way of declaring variables.
// - Can be updated and redeclared.
// - Function scoped (not block scoped).
// - Avoid using var in modern JavaScript because it can create bugs.

var accountPassword = 1000.50;


// If you don't use const, let, or var,
// JavaScript creates a global variable.
// This is considered BAD PRACTICE.

accountCity = "Aurangabad";



// ==============================
// Updating Variables
// ==============================

// Error
// accountId = 200;
// Reason: const variables cannot be reassigned.


// Error
// let accountEmail = "abc@gmail.com";
// Reason: 'let' variables cannot be redeclared in the same scope.


// Allowed
// var variables can be redeclared.

var accountPassword = 12345;


// Allowed
// Updating a global variable.

accountCity = "Bhilai";



// ==============================
// Printing Output
// ==============================

// console.log() prints output to the console.

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


// Print multiple values as an array.

console.log([accountId, accountEmail, accountPassword, accountCity]);


// Print values in a table (Best for multiple variables)

console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity
});