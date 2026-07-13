//Array

// Array declaration

// const array =[0,1,2,3,4];

// const myheros =['thor','iron man'];

 const myArr =new Array(1,2,3,4,5);

// array methods

myArr.push(6);//add element
myArr.pop();//removel element
myArr.unshift(9)//add element to 0 index
myArr.shift()//remove first element from array
myArr.includes(9);//give true or false as per data is in array or not
myArr.indexOf(9);//gives index of the value

myArr.join()//it change the array into string , agar pata karna ho to typeof se pata kar stake hai

//slice and splice

myArr.slice(1,3)//include 12 and exclude 3 index

myArr.splice(1,3);//it include 1 2 3 and also manupulate the original array

//Example

const num =[1,2,3,4,5,6,7,8,9];

const newNum = num.splice(1,4);

console.log(num);

console.log(newNum);