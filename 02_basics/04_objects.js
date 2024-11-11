//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
 
const regularUser = {
  email : "some@gmail.com" ,
  fullname : {
         userFullName: {
             firstname : "dushyant" ,
             lastname : "mathur"
         } 

  } 
} 


//console.log(regularUser.fullname.userFullName.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}

//console.log(obj3);

const users = [
  {
    id: 1 ,
    email : "d@gamil.com"
  },
  {
    id: 1 ,
    email : "d@gamil.com"
  }, {
    id: 1 ,
    email : "d@gamil.com"
  }, {
    id: 1 ,
    email : "d@gamil.com"
  }, {
    id: 1 ,
    email : "d@gamil.com"
  }, {
    id: 1 ,
    email : "d@gamil.com"
  },
]


users[1].id
//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "js in hindi" , 
  price: "999" , 
  courseInstructor : "dushyant"

}

//course.courseInstructor

const {courseInstructor : instructor} = course

//console.log(courseInstructor);
console.log(instructor);


//json

// {
//   "name": "dushyant" , 
//   "coursename" : "js in hindi",
//   "price " : "free"
// }
//json-->
[
    {} ,
    {}, 
    {}
]

