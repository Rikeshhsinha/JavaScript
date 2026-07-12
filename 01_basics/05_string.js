const name ="Rikesh";
const repoCount = 10;

// console.log(name + repoCount + " value"); //This syntax is outdated

//In modern days we use string interpolation
//Example
//we use ${}
console.log(`hello my name is ${name} my repo count is ${repoCount}`);


//How to declare string 
//Both is the string declaration
// 1.const name ="Rikesh";

const newName = new String("Rikesh sinha");

console.log(newName.length);
console.log(newName.toUpperCase());//to make the string to upper case use .touppercase() because this is function.

console.log(newName.charAt(2));
console.log(newName.indexOf('k'));

//There are many functions like 
// .subString(0,4)
// .slice(-2,4) minus value is for reverse order
// .trim  Removes the extra space from string " Rikesh  " => "Rikesh"


const url ="https://rikesh.com/rikesh%60sinha"


console.log(url.replace('%60','-'));

console.log(url.includes('rikesh'))
console.log(url.includes('kumar'))
