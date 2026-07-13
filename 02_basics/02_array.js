const marvelHeros =[ 'spiderMan','ironMan','thor'];

const dcHeros = ['superMan','flash','batman'];


// marvelHeros.push(dcHeros);

// console.log(marvelHeros); it does not merge the array it merge the array inside the array.

// output is => [ 'spiderMan', 'ironMan', 'thor', [ 'superMan', 'flash', 'batman' ] ]


// concat method 

// const allHeros = marvelHeros.concat(dcHeros);

// console.log(allHeros);

//spread method

const allHeros =[...marvelHeros,...dcHeros];

// console.log(allHeros);


//Flat method

const numArry =[1,2,3,[5,8],5,[4,6,45,75,[56,85,2]]];

const newNumArry = numArry.flat(Infinity);//(Infinity) in depth array ex => [4,6,45,75,[56,85,2]]] 2 depth.

console.log(newNumArry)


//From method  => Change in to array
console.log(Array.isArray("Rikesh"));
console.log(Array.from("Rikesh"));

let score1 =100;
let score2 =300;
let score3 =200;

console.log(Array.of(score1,score2,score3));//output is [ 100, 300, 200 ]

