const user = {
    username :"Rikesh",
    loginCount: 8,
    signedIn:true,
    getUSerDetails:function(){
        console.log("Got user details from database");
        console.log(`username ${this.username}`);
        
        
    }

}

console.log(user.username);
console.log(user.getUSerDetails());


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne =  User ("Rikesh",12,true)
// const userTwo =  user ("Azad",11,false)

// console.log(userOne); out mai value overwrite ho ja rahi hai



// This is why we use the new (Keyword).
 const userOne = new User ("Rikesh",12,true)
 const userTwo = new user ("Azad",11,false)

 console.log(userOne);
 console.log(userTwo);

 