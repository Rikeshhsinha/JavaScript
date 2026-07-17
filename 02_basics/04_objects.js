// Singleton object
// const tinderUser = new Object();

// Object literal
const tinderUser = {};

tinderUser.id = "12345";
tinderUser.name = "umang";
tinderUser.isLoggedIn = true;

//  console.log(tinderUser);

// nested object
const regulerUser = {
  email: "Some@gmail.com",
  fullName: {
    userFullname: {
      firstName: "Rikesh",
      lastName: "Sinha",
    },
  },
};

// console.log(regulerUser.fullName.userFullname.firstName);


const obj1 ={1:'a',2:'b'};
const obj2 ={3:'c',4:'d'};

// const obj3= {obj1,obj2}
// console.log(obj3);


const obj3 = Object.assign({},obj1,obj2);

const obj5 ={...obj1,...obj2}

// how data comes from  database

const users =[
    {id : 1,
        email:"R@gmail.com",
    },
    {id : 1,
        email:"R@gmail.com",

    },
    {
id : 1,
        email:"R@gmail.com",
    }
]

users[1].email




// output in array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


const course = {

    coursename: "Btech",
    price:"300000",
    courseInstructor:"Bhumika Dewangan"

}

// how to print value

// 1.course.courseInstructor 

 const {courseInstructor: instructor} = course

//   const {courseInstructor: instructor} = course
//isme humlog destruct kar sakte hai value koo

 console.log(courseInstructor );
 
 console.log(instructor);
 