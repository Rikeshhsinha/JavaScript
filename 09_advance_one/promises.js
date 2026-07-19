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
