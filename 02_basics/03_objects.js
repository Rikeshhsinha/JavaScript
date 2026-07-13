// singleton

Object.create //it is constructore method and  this is singleton object

//object literals

// const jsUser = {}// => emty object;


// const jsUser ={
//     name => key : "Rikesh => value"
// }

const mySym = Symbol("key1")

const jsUser ={
     name : "Rikesh",
     age : 18,
     location : "Aurangabad",
     email : "rikeshsinha245@gmail.com",
     mySym :"myKey1",//take it as string. 
     [mySym]:"myKey1",//it is correct way to write a symbol.
    }

    // how to access 
    
    
    // console.log(jsUser.email);
    // console.log(jsUser["email"]); //=> we use because when sometimes we use the key as "name",which is mot accessed by (jsUser.email) by this.
    
    // how to change value in object or overwrite it.

    jsUser.email ="rikeshsinha@gmail.com";
    console.log(jsUser);

    Object.freeze(jsUser);

    jsUser.email ="riku@gmail.com"

       console.log(jsUser);