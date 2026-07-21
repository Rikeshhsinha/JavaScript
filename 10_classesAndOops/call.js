function setUsername(){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    
    setUsername.call(username)//call likne se call ho raha

    this.email=email
    this.password=password

}

const rikesh =new createUser("Rikesh","rikesh@gamil.com","1234");
console.log(rikesh);
