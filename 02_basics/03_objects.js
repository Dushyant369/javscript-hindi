//SINGLETON 
// Object.create


// object literals 

const mySym = Symbol("key1")

const jsUser = {
name : "dushyant",
 "full name" : "dushyant mathur ",
 age : 18,
 [mySym]: "mykey1",
 location :"Jaipur",
 email : "hitesh@google.com",
 isloggedIn: false ,
 lastLoginDays : ["monday","saturday"]

 }

// console.log( jsUser.email);
// console.log( jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "dushyant@google.com"
 //Object.freeze(jsUser)
//  console.log( jsUser["email"]);
//  console.log(jsUser);
 

 jsUser.greeting = function() {
  console.log("hello js user ");
 }
 jsUser.greetingTwo = function() {
  console.log(`hello js user ,${this.name} `);
 }

 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
 
 