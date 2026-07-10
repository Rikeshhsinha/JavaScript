"use strict"; //treat all js code as newer version


// alert (3+5)// gives pop in browser with solution 

// for printing output in console we use console.log() function
//console.log(3+5);

//the datatypes in js are

let name = "Rikesh"; //string used in both single and bouble quotes
let age = 22; //number upto 2 to 53 power
let isApproved = true; //boolean,it contains only true or false
let email; //undefined,at that time there is no value assigned to the variable
//null => standalone value that represents nothing or empty value

//symbol => used to create unique identifiers for objects
let id = Symbol('id');

//typeof operator => used to find the datatype of a variable
console.log(typeof name);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof email);
console.log(typeof id);
console.log(typeof null);//null is an object in js but it is a primitive value
console.log(typeof undefined);//undefined is a primitive value output is undefines


//object => collection of related data
let person = {
    name: "Rikesh",
    age: 22
};
