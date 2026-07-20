// Promise ya to pura hoga  resolve ya reject yani nhi hoaga
const promiseOne= new Promise(function (resolve, reject){

    //Do an async task
    ///DB calls, sryptography,network

    setTimeout(function(){
        console.log('Async task 1 is complete.');
        resolve()         
    },1000)
});



promiseOne.then(function(){
    console.log("Promise consumed.");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2 completed");
         resolve();
    },1000);
   

}).then(function(){
    console.log("Resolve task completed"); 
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"rikesh",email:"rikesh@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    

})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = false;
        if(!error){
            resolve({username:'rikesh',passward:'1234'});
        }     
            else{
                reject('ERROR : something went wrong')
            }
        
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user);

    return user.username
    
}).then((username)=>{

    console.log(username)
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("The promise is either resolved or rejected");
    
})




const promiseFive = new Promise(function(resolve,reject){


    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username:'Gaurav',passward:'1234'});
        }     
            else{
                reject('ERROR : something went wrong')
            }

        
    },1000);

})


async function consumePromiseFive(){

      try {
        const response = await promiseFive
      console.log(response);
      
      } catch (error) {
        console.log("error");
        
        
      }

} 

consumePromiseFive();


// async function getAllUser() {
//    try {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/users');

//    const data = await responce.json()
//     console.log(data);
    
//    } catch (error) {
//     console.log("Error");
    
//    }
// }

// getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
.then()
.catch()