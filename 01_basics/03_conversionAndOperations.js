let score ="50";

console.log(typeof score); //output is string
console.log(typeof (score));//output is string

//converting string to number
let valuInScore = Number(score);
console.log(typeof valuInScore); //output is number
console.log(valuInScore + 10); //output is 60

let num ="50abc"
console.log(typeof num);

let newNum = Number(num);
console.log(typeof newNum); 

console.log(newNum);


let number =null;
console.log(typeof number); //output is object
console.log(number); //output is null

//"33" => 33
//"33abc" => NaN
//"abc33" => NaN
// <===============>
    //boolean conversion
//"true" => 1
//"false" => 0
//1=> true
//0 => false
//"" => false
//"Rikesh" => true 

let someNumber = 45;

let stringNumber = String(someNumber)

console.log(someNumber)
console.log(typeof stringNumber)